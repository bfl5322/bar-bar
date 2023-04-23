import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BarBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--loading-bar-text-color, #000);
    }
    .bar-wrapper {
      display: flex;
      flex-direction: column;
      border: 5px solid black;
    }
    .loading-bar {
      background-color: gray;
      height: 20px;
      margin-bottom: 10px;
    }
    .turtlebar, .rabbitbar, .birdbar {
      background-image: linear-gradient(to right, red , yellow);;
      height: 100%;
      width: 0%;
      float: left;
    }
    .turtlebar {
      animation: turtlebar 10s linear forwards;
    }

    .rabbitbar {
      animation: rabbitbar 5s linear forwards;
    }

    .birdbar {
      animation: birdbar 3s linear forwards;
    }
    @keyframes turtlebar {
      0% { width: 0%; }
      100% { width: 20%; }
    }

    @keyframes rabbitbar {
     0% { width: 0%; }
     100% { width: 50%; }
    }

    @keyframes birdbar {
     0% { width: 0%; }
      100% { width: 70%; }
    }

  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Bar test';
    this.counter = 5;
  }

  render() {
    return html`
    <div class = bar-wrapper>
      <h1>${this.header}</h1>
    <div class= "loading-bar">
      <div class= "turtlebar">
      10s
      </div>
  </div>
      <div class = "loading-bar">
        <div class= "rabbitbar">
        5s
      </div>
  </div>
      <div class = "loading-bar">
        <div class = "birdbar">
        3s
      </div>
  </div>
  </div>
    `;
  }
}

customElements.define('bar-bar', BarBar);