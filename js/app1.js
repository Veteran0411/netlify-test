class Model{
    convert(value,direction){
        if(direction==="CtoF"){
            return (value * 9 / 5) + 32;
        }else{
            return (value - 32) * 5 / 9;
        }
    }
}

class View{
    constructor(){
        this.tempInput=document.getElementById("tempInput");
        this.convertBtn=document.getElementById("convertBtn");
        this.convertDirection=document.getElementById("convertDirection");
        this.result=document.getElementById("result");
    }

    bindConvert(handler){
        this.convertBtn.addEventListener('click',()=>{
            const tempValue=parseInt(this.tempInput.value);
            const direction=this.convertDirection.value;
            handler(tempValue,direction);
        })
    }

    displayResult(value){
        this.result.textContent=`Result is ${value.toFixed(2)}`;
    }
}

class Controller{

    constructor(model,view){
        this.model=model;
        this.view=view;

        this.view.bindConvert(this.handleConversion.bind(this));
    }

    handleConversion(value,direction){
        if(isNaN(value)){
            this.view.displayResult("Please enter valid number")
        }
        this.result=this.model.convert(value,direction);
        this.view.displayResult(this.result);
    }
}

const app=new Controller(new Model(),new View());