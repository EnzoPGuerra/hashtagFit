const experiencia = document.getElementById("numero_experiencia");
    let experiencia_conteudo = 0;
const atividades = document.getElementById("numero_atividades");
    let atividades_conteudo = 0;

const clientes = document.getElementById("numero_clientes");
    let clientes_conteudo = 0;

const poligono = document.getElementById("sobre_poligono");

window.addEventListener("scroll",handleCount);

function handleCount(){

    if (window.scrollY > 230){


        poligono.style.animation = "poligono_animation 1s ease-in-out";
        
        setTimeout(() => {

            setInterval( () => {

                if(experiencia_conteudo == 8){
            
                    clearInterval()
            
                } else {
            
                    experiencia_conteudo++;
                    experiencia.innerText = experiencia_conteudo;
                }
            }, 90)
            
            setInterval( () => {
            
                if(atividades_conteudo == 12){
            
                    clearInterval()
            
                } else {
            
                    atividades_conteudo++;
                    atividades.innerText = atividades_conteudo;
                }
            }, 90)
            
            
            setInterval( () => {
            
                if(clientes_conteudo == 100){
            
                    clearInterval()
            
                } else {
            
                    clientes_conteudo++;
                    clientes.innerText = clientes_conteudo;
                }
            }, 10)
            
        }, 700);
       
    }

};

