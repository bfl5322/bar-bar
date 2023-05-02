import { LitElement, html } from 'lit';
import './bar-bar.js';

class MainApp extends LitElement {
  static get properties() {
    return {
      progressBarData: { type: Array },
    };
  }

  constructor() {
    super();
    this.progressBarData = [];
    this.updateRoster();
  }

  updateRoster() {
    const address = new URL('../assets/data.json', import.meta.url).href;
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.progressBarData = data;
      });
  }

  render() {
    return html`
      ${this.progressBarData.map(
        (item) => html`
          <bar-bar
            duration="${item.duration}"
            intervalDuration="${item.intervalDuration}"
            progressPercentage="${item.progressPercentage}"
            time="${item.time}"
          ></bar-bar>
        `
      )}
    `;
  }
}

customElements.define('main-app', MainApp);