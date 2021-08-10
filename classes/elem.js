class Elem {
    constructor(selector){
        this.selector=selector;
        this.elementsList=document.querySelectorAll(selector);
        if(this.elementsList.length<1){
            console.log(`There is no item with "${selector}" selector`);
        }
    }

    html(newItem){
            for(let element of this.elementsList){
                element.innerHTML=newItem;
            }
            return this;
    }

    append(newItem){
            for(let element of this.elementsList){
                element.append(newItem);
            }
            return this;
    }

    prepend(newItem){
            for(let element of this.elementsList){
                element.prepend(newItem);
            }
            return this;
    }

    attr(name, value){
        for(let element of this.elementsList){
            element.setAttribute(name, value);
        }
        return this;
    }
}

