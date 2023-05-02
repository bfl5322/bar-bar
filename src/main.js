import './src/bar-bar.js';

async function loadConfig() {
  const response = await fetch('./assets/data.json');
  const config = await response.json();

  return config;
}

loadConfig().then((config) => {
  const container = document.getElementById('progress-bars-container');
  config.bars.forEach((bar) => {
    const progressBarContainer = document.createElement('div');
    const progressBar = document.createElement('bar-bar');
    progressBar.duration = bar.duration;
    progressBar.intervalDuration = bar.intervalDuration;
    progressBarContainer.appendChild(progressBar);
    container.appendChild(progressBarContainer);
  });
});
