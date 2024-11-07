alert("Mariko was here");

class Center extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define('x-center', Center);

class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML=new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Right extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div style="text-align:right">${this.innerHTML}</div>`
    }
}

customElements.define('x-right', Right)