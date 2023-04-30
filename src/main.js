// main.js
import { progressBarData } from './backend.js';

const container = document.getElementById('progress-container');

progressBarData.forEach((item) => {
  const bar = document.createElement('bar-bar');
  bar.time = item.time;
  bar.start = item.start;
  container.appendChild(bar);
});
