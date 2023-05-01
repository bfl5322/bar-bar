// bar-bar.js
import { LitElement, html, css } from 'lit';
import { progressBarData } from './backend.js';

class BarBar extends LitElement {
  static get properties() {
    return {
      duration: { type: Number },
      intervalDuration: { type: Number },
      progress: { type: Number },
      time: { type: Number },
    };
  }

  static get styles() {
    return css`
:host {
      display: block;
      margin-bottom: 20px;
    }
    .progress-bar {
      background-color: #ddd;
      border-radius: 5px;
      height: 30px;
      width: 100%;
    }
    .progress-bar-inner {
      background-color: #4caf50;
      border-radius: 5px;
      height: 100%;
      width: 0;
    }
    .timer {
      margin-top: 5px;
      text-align: center;
    }
    `;
  }

  constructor() {
    super();
    this.duration = 10;
    this.intervalDuration = 100;
    this.progress = 0;
    this.time = 0;
  }
  firstUpdated() {
    this.startAnimation();
  }

  startAnimation() {
    const progressBarInner = this.shadowRoot.querySelector('.progress-bar-inner');
    const timeIncrement = this.intervalDuration / 1000;
    const interval = setInterval(() => {
      const progress = (this.time / this.duration) * 100;
      progressBarInner.style.width = progress + '%';
      this.time = parseFloat((this.time + timeIncrement).toFixed(1));

      if (this.time >= this.duration) {
        clearInterval(interval);
      }

      this.requestUpdate();
    }, this.intervalDuration);
  }

  render() {
    return html`
      <div class="progress-bar">
        <div class="progress-bar-inner"></div>
      </div>
      <div class="timer">${this.time}s</div>
    `;
  }
}

customElements.define('bar-bar', BarBar);
