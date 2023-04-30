// bar-bar.js
import { LitElement, html, css } from 'lit';
import { progressBarData } from './backend.js';

class BarBar extends LitElement {
  static get properties() {
    return {
      progress: { type: Number },
      time: { type: Number },
      start: { type: Number },
    };
  }

  static get styles() {
    return css`
      .progress-bar {
        background-color: #f3f3f3;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 25px;
      }

      .progress {
        background-color: #4caf50;
        height: 100%;
        position: absolute;
        transition: width 0.25s ease-out;
        width: 0;
      }
    `;
  }

  constructor() {
    super();
    this.progress = 0;
    this.time = 0;
    this.start = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.startCounting();
  }

  startCounting() {
    const interval = setInterval(() => {
      this.progress = Math.min(this.progress + this.start, this.time);
      this.start++;
      if (this.progress >= this.time) {
        clearInterval(interval);
      }
    }, 1);
  }

  render() {
    const percentage = (this.progress / this.time) * 100;
    return html`
      <div class="progress-bar">
        <div class="progress" style="width: ${percentage}%"></div>
      </div>
    `;
  }
}

customElements.define('bar-bar', BarBar);
