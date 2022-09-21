class IQBinaryAttribute extends HTMLElement {
  static get formAssociated() {
    return true;
  }
  constructor() {
    super();
    this.internals = this.attachInternals();
    this.value_ = null;
    console.log('%s', this.tagName);
  }
  addEventListeners(yesno) {
    if (yesno) {
    } else {
    }
  }
  connectedCallback() {
    console.log('connectedCallback iq-binary-attribute');
    this.textContent = this.getAttribute('label');
    setTimeout(() => {
      console.log('%s', this.tagName);
    }, 1500);
  }
  disconnectedCallback() {}
}

if (window.customElements.get('iq-binary-attribute') === undefined) {
  window.customElements.define('iq-binary-attribute', IQBinaryAttribute);
}
