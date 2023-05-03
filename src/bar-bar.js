import { LitElement, html, css } from 'lit';

class BarBar extends LitElement {
  static get properties() {
    return {
      duration: { type: Number, reflect: true},
      intervalDuration: { type: Number, reflect: true },
      progressPercentage: { type: Number, reflect: true },
      progress: { type: Number,  reflect: true},
      time: { type: Number, reflect: true },
      name: { type: String, reflect: true },
      hasStarted: { type: Boolean },
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
      background-image: linear-gradient(red, yellow);
      border-radius: 5px;
      height: 100%;
      width: 0;
      transition: width linear;
    }
    .timer {
      margin-top: 5px;
      text-align: center;
    }
    .name {
        margin-top: 5px;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.duration = 10;
    this.intervalDuration = 16;
    this.progressPercentage = 100;
    this.progress = 0;
    this.time = 0;
    this.name = '';
    this.hasStarted = false;
  }



  updated(changedProperties) {
    if (changedProperties.has('duration') || changedProperties.has('progressPercentage')) {
      if (!this.duration) {
        this.duration = 10;
      }
      if (!this.progressPercentage) {
        this.progressPercentage = 100;
      }
    }
  }

  firstUpdated() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasStarted) {
          this.hasStarted = true;
          this.startAnimation();
        }
      });
    });
  
    observer.observe(this);
  }
  
  
  startAnimation() {
    const progressBarInner = this.shadowRoot.querySelector('.progress-bar-inner');
  
    progressBarInner.style.transitionDuration = `${this.duration}s`;
    progressBarInner.style.width = `${this.progressPercentage}%`;
  
    const updateTime = () => {
      this.time = parseFloat((this.time + 0.1).toFixed(1));
  
      if (this.time < this.duration) {
        setTimeout(updateTime, 100);
      } else {
        this.time = this.duration;
      }
  
      this.requestUpdate();
    };
  
    updateTime();
  }

  render() {
    return html`
      <div class="progress-bar">
        
        <div class="progress-bar-inner"></div>
      </div>
      <div class ="name">${this.name}</div>
      <div class="timer">${this.time}s</div>
    `;
  }
}

customElements.define('bar-bar', BarBar);
