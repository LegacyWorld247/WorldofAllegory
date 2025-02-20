import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs, Table, Carousel } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [trades, setTrades] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example ticker pairs
  const tickerPairs = ['BTC/USDT', 'ETH/USDT', 'BNB/USDT', 'ADA/USDT', 'SOL/USDT'];

  const fetchTrades = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/trades');
      setTrades(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPerformance = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/performance');
      setPerformance(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();
    fetchPerformance();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <Container className="container">
        <h1>Freqtrade Trading Bot Dashboard</h1>

        {/* Carousel for Ticker Pairs */}
        <Carousel className="carousel" indicators={false} interval={3000}>
          {tickerPairs.map((pair, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-item">
                <h3>{pair}</h3>
                <p>Latest Price: $XXX.XX</p> {/* Replace with actual data */}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Tabs for Trade History and Performance */}
        <Tabs defaultActiveKey="trades" id="dashboard-tabs">
          <Tab eventKey="trades" title="Trades">
            <h2>Trade History</h2>
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Amount</th>
                  <th>Profit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, index) => (
                  <tr key={index}>
                    <td>{trade.pair}</td>
                    <td>{trade.amount}</td>
                    <td>{trade.profit}</td>
                    <td>{trade.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="performance" title="Performance">
            <h2>Performance Metrics</h2>
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((metric, index) => (
                  <tr key={index}>
                    <td>{metric.name}</td>
                    <td>{metric.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;