import _ from 'lodash';
import createMainPage from "./pages/main";
import createMenuPage from './pages/menu';
import createAboutPage from './pages/about';
import createContactPage from './pages/contact';
import './style.css';
import logo from './icons/logo.png'
import locationIcon from './icons/location.svg'
import phoneIcon from './icons/phone.svg'
import emailIcon from './icons/email.svg'
const main = document.querySelector('main');
const menuBut = document.querySelector('#menu');
const aboutBut = document.querySelector('#about');
const contactBut = document.querySelector('#contact');
const mainPage = document.querySelectorAll('.main-page');


aboutBut.addEventListener('click',()=>{
    createNewPage(createAboutPage);
});

menuBut.addEventListener('click', ()=>{
    createNewPage(createMenuPage);
});

contactBut.addEventListener('click', ()=>{
    createNewPage(createContactPage);
});

mainPage.forEach((butt)=>{
    butt.addEventListener('click',()=>{createNewPage(createMainPage)})
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
    selectedButton(pageFunction);
    createFooter();
}


function selectedButton(pageFunction){
    const allButtons = document.querySelectorAll('.menu-but');
    allButtons.forEach((but)=>{ but.classList.remove('selected')});
  
    switch (pageFunction){
        case createMainPage:
            
            break;
        case createMenuPage:
            menuBut.classList.add('selected');
            break;
        case createAboutPage:
            aboutBut.classList.add('selected');
            break;
        case createContactPage:
            contactBut.classList.add('selected');
            break;
    }
}


function createFooter(){
const footer = document.querySelector('footer');
function cleanFooter(){
    while(footer.childElementCount>0){
        footer.firstChild.remove();
        }
}
cleanFooter();

const divCont = document.createElement('div');
divCont.classList.add('contact-container');


footer.appendChild(divCont);


const divLogoCont = document.createElement('div');
divLogoCont.classList.add('logo-container');
const logoImg = document.createElement('img');
logoImg.classList.add('main-page');
logoImg.src = logo;
logoImg.alt = 'cat logo';

divLogoCont.appendChild(logoImg);
divCont.appendChild(divLogoCont);

const divContacts = document.createElement('div');
divContacts.classList.add('contacts');
divLogoCont.appendChild(divContacts);

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

img1.src = locationIcon;
img2.scr = phoneIcon;
img3.scr = emailIcon;

p1.appendChild(img1);
p2.appendChild(img2);
p3.appendChild(img3);

p1.textContent = ' 04224 Kyiv, Ukraine';
p2.textContent = ' 38099-999-99-99';
p3.textContent = ' catcafe@meow';

divContacts.appendChild(p1);
divContacts.appendChild(p2);
divContacts.appendChild(p3);

const divTimeCont = document.createElement('div');
divTimeCont.classList.add('time-container');
divCont.appendChild(divTimeCont);

const div1 = document.createElement('div');

const p4 = document.createElement('p');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
p4.textContent = 'MON - FRI 11:00-15:00 18:00-23:00';
p5.textContent = 'SAT - SUN 10:30-23:30';
p6.textContent = 'WEDNESDAY closed';

div1.appendChild(p4);
div1.appendChild(p5);
div1.appendChild(p6);

divTimeCont.appendChild(div1);


const divCredints = document.createElement('div');
divCredints.classList.add('credits-container');
footer.appendChild(divCredints);


const pLast = document.createElement('p');
pLast.textContent = 'All images and logos have been generated by AI using Microsoft Image Creator. The images have also been resized with ImageResizer and compressed with TinyPNG.'
divCredints.appendChild(pLast);
}




// <div class="contact-container">
//  <div class="logo-container">
//      <img src="./img/logo.png" alt="logo">
//      <div class="contacts">
//          <p><img src="./icons/locaion.svg" alt="location"> 04224 Kyiv, Ukraine</p>
//          <p><img src="./icons/phone.svg" alt="phone"> 38099-999-99-99</p>
//          <p><img src="./icons/email.svg" alt="email"> catcafe@meow</p>
//      </div>
//  </div>
//  <div class="time-container">
//      <div>

//              <p>

//              </p>
//              <p>
//              </p>
//      </div>
//  </div>
// </div>
// <div class="credits-container">
//  <p>All images and logos have been generated by AI using Microsoft Image Creator. The images have also been resized with ImageResizer and compressed with TinyPNG.</p>
// </div>