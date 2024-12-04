import express from 'express';
import os from 'os';

const app = express();
const PORT = process.env.PORT || 3001;

function getSystemMetrics() {
  return {
    cpuUsage: `${(os.loadavg()[0] * 100).toFixed(2)}%`,
    totalMemory: `${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    uptime: `${(os.uptime() / 3600).toFixed(2)} hours`
  };
}

app.get('/api/metrics', (req, res) => {
  res.json(getSystemMetrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});