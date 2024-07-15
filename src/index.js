import _ from 'lodash';
import createMainPage from "./pages/main";
import createMenuPage from './pages/menu';
import './style.css';
const main = document.querySelector('main');
const menuBut = document.querySelector('#menu');
const aboutBut = document.querySelector('#about');


aboutBut.addEventListener('click',()=>{
    createNewPage(createMainPage);
});

menuBut.addEventListener('click', ()=>{
    createNewPage(createMenuPage);
});






createNewPage(createMainPage);



function clearMain(){
    while(main.childElementCount>0){
    main.firstChild.remove();
    }
}
function createNewPage(pageFunction){
    clearMain();
    main.appendChild(pageFunction());
}

selectedButton();

function selectedButton(pageFunction){
    const allButtons = document.querySelectorAll('menu-but');
    console.log(allButtons);
    allButtons.forEach((but)=>{
        console.log(but);
        return but.classList.remove('selected')});
  
    switch (pageFunction){
        case createMainPage:
            
            break;
    }
}