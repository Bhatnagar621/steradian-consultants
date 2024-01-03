class InstagramTag extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div></div>`;
  }

  static get observedAttributes() {
    return ['posturl'];  // Declare which attributes to observe
  }

  attributeChangedCallback(name, oldValue, postURL) {
    if (name === 'posturl') {
      this.querySelector('div').innerHTML = `<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${postURL}/embed/captioned/?cr=1&amp;v=14&amp;wp=615&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A131.6000000005588%2C%22ls%22%3A38.60000000055879%2C%22le%22%3A99.5%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="769" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 540px; width: calc(100% - 2px); border-radius: 30px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 360px; padding: 0px;"></iframe>`;
    }
  }
}

customElements.define('insta-tag', InstagramTag);
