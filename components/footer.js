class Footer extends HTMLElement {
    constructor(){
        super();
    }
connectedCallback() {
    this.innerHTML = `
    <style>
    footer {
     color: white;
     background-color: black;
     text-align:center;
     height: auto;
    }
    </style>
    <footer>
        <p>Welcome to my first class!</p>
    </footer>
    `
}
    
}
customElements.define('footer-component',Footer)