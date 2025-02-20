// Youtube Integration Configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Use environment variables
const CHANNEL_ID = 'UCVjw_BzPhmBpTvEeH3i5OGw';

// API Endpoints
const YouTube_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// YouTube API Functions
class YouTubeAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    // Fetch latest videos from channel 
    async getChannelVideos(channelId, maxResults = 6) {
        try {
            // First get upload playlist ID
            const channelResponse = await fetch(
                `${YouTube_API_BASE_URL}/channels?part=contentDetails&id=${channelId}&key=${this.apiKey}`
            );
            if (!channelResponse.ok) {
                throw new Error(`YouTube API error: ${channelResponse.statusText}`);
            }
            const channelData = await channelResponse.json();

            if (!channelData.items || channelData.items.length === 0) {
                throw new Error("No channel data found.");
            }

            const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

            // Then get videos from playlist
            const videosResponse = await fetch(
                `${YouTube_API_BASE_URL}/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${uploadPlaylistId}&key=${this.apiKey}`
            );
            if (!videosResponse.ok) {
                throw new Error(`YouTube API error: ${videosResponse.statusText}`);
            }
            const videosData = await videosResponse.json();
            return videosData.items;
        } catch (error) {
            console.error(`Error fetching YouTube videos:`, error);
            return [];
        }
    }

    // Get channel statistics
    async getChannelStats(channelId) {
        try {
            const response = await fetch(
                `${YouTube_API_BASE_URL}/channels?part=statistics&id=${channelId}&key=${this.apiKey}`
            );
            if (!response.ok) {
                throw new Error(`YouTube API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data.items[0]?.statistics || null;
        } catch (error) {
            console.error('Error fetching channel stats:', error);
            return null;
        }
    }
}
