
const swiper = new Swiper(" .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 5, 
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation:{

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    }


})

const atvidadesTextos = document.getElementById("atividadesTextosBloco");
const swiperBloco = document.getElementById("swiper_bloco");

window.addEventListener("scroll",handleSumiço);

function handleSumiço (){

    if(window.scrollY > 800) {


        atvidadesTextos.style.animation = "empurraTexto 4s ease";

        setTimeout(() => {

            atvidadesTextos.style.opacity = "100%"

        }, 4000);

        swiperBloco.style.animation = "empurraSwiper 1.5s ease-in-out"

        setTimeout(() => {

            swiperBloco.style.opacity = "100%"

        }, 1000);


    }

}