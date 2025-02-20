<script setup >
import { io } from 'socket.io-client';
</script>

    < template >
    <div class="p-4 bg-white rounded-lg shadow-md" >
        <h2 class="text-xl font-semibold mb-4" > Live Market Prices </h2>
            < canvas ref = "chartCanvas" > </canvas>
                </div>
                </template>

                < script setup >
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Chart } from 'chart.js/auto';
import io from 'socket.io-client';

const chartCanvas = ref(null);
let chartInstance = null;
const socket = io('wss://your-crypto-api.com'); // Replace with your WebSocket API

onMounted(() => {
    if (chartCanvas.value) {
        chartInstance = new Chart(chartCanvas.value, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Price',
                    data: [],
                    borderColor: 'blue',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    socket.on('priceUpdate', (data) = {
        if (chartInstance) {
            chartInstance.data.labels.push(new Date().toLocaleTimeString());
            chartInstance.data.datasets[0].data.push(data.price);
            chartInstance.update();
        }
    });
});

onBeforeUnmount(() => {
    socket.disconnect();
    if (chartInstance) {
        chartInstance.destroy();
    }
});
</script>

    <style>
div {
    max-width: 600px;
    margin: auto;
}
</style>