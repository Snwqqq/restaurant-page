import _ from 'lodash';
import createMainPage from "./pages/main";
import './style.css';
const main = document.querySelector('main');
const menuBut = document.querySelector('#menu');
const aboutBut = document.querySelector('#about');


aboutBut.addEventListener('click',()=>{
    createNewPage(createMainPage);
});

menuBut.addEventListener('click', ()=>{
  clearMain();
});






createNewPage(createMainPage);



function clearMain(){
    if(main.firstChild!==null)
    main.firstChild.remove();
}
function createNewPage(pageFunction){
    clearMain();
    main.appendChild(pageFunction());
}