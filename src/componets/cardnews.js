class cardnews extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Batata Tchan</h1>"
    }
}

customElements.define("card-news", cardnews);