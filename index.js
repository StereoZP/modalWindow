class CreateModal{
    constructor(modalRootNodeId, modalContent,buttonId) {
        this.modal=document.getElementById(modalRootNodeId);
        this.modalContent=modalContent;
        this.btnOpen=document.getElementById(buttonId);
        this.div=document.createElement("div");
        this.btnClose=document.createElement("a");
        this.text=document.createElement("p");
    }
    appendChild(){
        this.modal.appendChild(this.div);
        this.div.appendChild(this.btnClose);
        this.div.appendChild(this.text);
    }
    setAttribute(){
        this.btnClose.setAttribute("href", "#close");
        this.btnClose.setAttribute("title", "#Закрыть");
        this.btnClose.setAttribute("id", "close");
    }
    addClassList(){
        this.div.classList.add("modal-content");
        this.btnClose.classList.add("close");
        this.modal.classList.add("modal");
    }
    innerText(){
        this.btnClose.innerText="X";
        this.text.innerText=this.modalContent;
    }
    createElements(){
        this.appendChild();
        this.setAttribute();
        this.addClassList();
        this.innerText();
    }
    openClick(){
        const myElement = document.getElementById('myModal');
        if (myElement.children.length===0) {
            this.createElements();
        }
        this.modal.addEventListener("click", this.windowClick.bind(this));
    }
    closeClick(){
        const deleteElement = document.getElementById("myModal");
        deleteElement.innerHTML = '';
        deleteElement.classList.remove("modal")
    }
    windowClick(event){
        if(event.target === this.modal){
            this.closeClick();
        }
    }
    eventListener(){
        this.btnOpen.addEventListener("click", this.openClick.bind(this));
        this.btnClose.addEventListener("click", this.closeClick.bind(this));
    }
}
const modalWindow1 = new CreateModal("myModal", "text1","myBtn1");
const modalWindow2 = new CreateModal("myModal", "text2","myBtn2");
const modalWindow3 = new CreateModal("myModal", "text3","myBtn3");
modalWindow1.eventListener();
modalWindow2.eventListener();
modalWindow3.eventListener();