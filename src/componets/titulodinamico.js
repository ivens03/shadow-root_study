class tituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "container");

        /* Linha consertada */
        const box = document.createElement("div");
        box.setAttribute("class", "card");

        const card_left = document.createElement("div");
        card_left.setAttribute("class", "card-left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const link_author = document.createElement("a");
        link_author.textContent = this.getAttribute("link_author");
        link_author.href = this.getAttribute("link-url");

        const new_paragraph = document.createElement("p");
        new_paragraph.textContent = this.getAttribute("new_paragraph");

        card_left.appendChild(author);
        card_left.appendChild(link_author);
        card_left.appendChild(new_paragraph);

        const card_right = document.createElement("div");
        card_right.setAttribute("class", "card-right");

        const author_img = document.createElement("img");
        author_img.src = this.getAttribute("photo") || "assents/photo default.jpg";
        author_img.alt = "Img";
        author_img.className = "img";
        card_right.appendChild(author_img);
        

        /* onde coloca um componente dentro de outro */
        componentRoot.appendChild(box);
        box.appendChild(card_left);
        box.appendChild(card_right);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent =
        `
        .container{
            margin-left: 20%;
            margin-top: 5%;
        }
        
        .card {
            width: 75%;
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: black;
            background: rgb(235, 234, 234);
            border-radius: 10px;
        }
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card-left > span {
            font-weight: 450;
        }
        
        .card-left > a {
            margin-top: 5px;
            font-size: 25px;
            text-decoration: none;
            font-weight: bold;
            color: black;
            cursor: pointer;
        }
        
        .card-left > p {
            color: rgb(90, 90, 90);
        }
        
        .card-right {
            display: flex;
            justify-content: center;
        }
        
        .img {
            width: 50%;
            height: 80%;
            border-radius: 30px;
            border: solid gray;
            margin-top: 5%;
            display: flex;
            box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
        }
        

        `;


        return style;
    }
}

customElements.define("titulo-dinamico", tituloDinamico);