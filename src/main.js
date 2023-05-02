import { LitElement, html } from 'lit';
import './bar-bar.js';
import { progressBarData } from './backend.js';

class MainApp extends LitElement {
  render() {
    return html`
      ${progressBarData.map(
        (item) => html`<bar-bar duration="${item.duration}"></bar-bar>`
      )}
    `;
  }
}

customElements.define('main-app', MainApp);