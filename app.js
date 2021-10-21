
const carro = document.querySelector('.carro');
const carros = document.querySelectorAll('.carros');
const display = document.querySelectorAll('.fa-circle');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideShow = carros.length;
var slideCount = 0;

    prevBtn.addEventListener('click', () =>{

        carros.forEach((carro) =>{
            carro.classList.remove('active');
        });
        display.forEach((icon) =>{
            icon.classList.remove('active');
        });
    
        slideCount --;
    
        if(slideCount < 0){
            slideCount = slideShow - 1;
        }
    
        carros[slideCount].classList.add('active');
        display[slideCount].classList.add('active');
        
    })
    
    nextBtn.addEventListener('click', () =>{
        carros.forEach((carro) =>{
            carro.classList.remove('active');
        });
        display.forEach((icon) =>{
            icon.classList.remove('active');
        });
        slideCount ++;
    
        if(slideCount > slideShow - 1){
            slideCount = 0;
        }
    
        carros[slideCount].classList.add('active');
        display[slideCount].classList.add('active');
    })


const carro2 = document.querySelector('.carro2');
const carros2 = document.querySelectorAll('.media-carro');
const display2 = document.querySelectorAll('.media-icn');
const prevBtn2 = document.querySelector('.pre-btn');
const nextBtn2 = document.querySelector('.nex-btn');
const slideShow2 = carros2.length;
var slideCount2 = 0;

    prevBtn2.addEventListener('click', () =>{

        carros2.forEach((carro) =>{
            carro.classList.remove('active');
        });
        display2.forEach((icon) =>{
            icon.classList.remove('active');
        });
    
        slideCount2 --;
    
        if(slideCount2 < 0){
            slideCount2 = slideShow2 - 1;
        }
    
        carros2[slideCount2].classList.add('active');
        display2[slideCount2].classList.add('active');
        
    })
    
    nextBtn2.addEventListener('click', () =>{
        carros2.forEach((carro) =>{
            carro.classList.remove('active');
        });
        display2.forEach((icon) =>{
            icon.classList.remove('active');
        });
        slideCount2 ++;
    
        if(slideCount2 > slideShow2 - 1){
            slideCount2 = 0;
        }
    
        carros2[slideCount2].classList.add('active');
        display2[slideCount2].classList.add('active');
    })


const cvDownload = document.querySelector('.cv-down');

cvDownload.addEventListener('click' , (e) =>{
    e.preventDefault();
})