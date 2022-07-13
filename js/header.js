//puxar os 3 radio buttons 
//criar um looping que conta até X e depois retira o checked do radio que estava com ele e coloca no próximo

let radio1 = document.getElementById("slide1");
    let btn1 = document.getElementById("btn1");
        const btn1ClassList = btn1.classList;

let radio2 = document.getElementById("slide2");
    let btn2 = document.getElementById("btn2");
        const btn2ClassList = btn2.classList;

let radio3 = document.getElementById("slide3");
    let btn3 = document.getElementById("btn3");
        const btn3ClassList = btn3.classList;

//passador de slider automático
setInterval(() => {

    if(radio1.checked==true){
    
    setTimeout(function(){

        radio2.click()

        },6000)
    }

    if(radio2.checked==true){
    setTimeout(function(){

        radio3.click()

        },6000)
    }

    if(radio3.checked==true){
    setTimeout(function(){

        radio1.click()
    
        },6000)
    }

}, 6010);


radio1.addEventListener("click", changeRadio1)

function changeRadio1 (){
    
    btn3ClassList.remove("btn3")
    btn1ClassList.add("btn1")
}

radio2.addEventListener("click", changeRadio2)

function changeRadio2 (){

    btn1ClassList.remove("btn1")
    btn2ClassList.add("btn2")

}

radio3.addEventListener("click", changeRadio3)

function changeRadio3 (){

    btn2ClassList.remove("btn2")
    btn3ClassList.add("btn3")    

}

