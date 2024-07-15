import catCafe from '../img/cat-cafe.jpeg'



export default function createContactPage(){
const contactPageCont = document.createElement('div');
contactPageCont.classList.add('contact-page-container');

const contactPageImgCont = document.createElement('div');
contactPageImgCont.classList.add('contact-page-img-container');

const img = document.createElement('img');
img.src = catCafe;

contactPageImgCont.appendChild(img);

const mapInfo = document.createElement('div');
mapInfo.classList.add('map-info');

const p1 = document.createElement('p');
p1.textContent = 'VISIT US HERE:';

const iframe = document.createElement('iframe');
iframe.src ='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2540.5394288232105!2d30.510983077405115!3d50.449678971591915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI2JzU4LjgiTiAzMMKwMzAnNDguOCJF!5e0!3m2!1sru!2sua!4v1721080895153!5m2!1sru!2sua'
iframe.allowFullscreen='';
iframe.loading = 'lazy';
iframe.referrerpolicy="no-referrer-when-downgrade";

const p2 = document.createElement('p');
p2.textContent = "We'll be glad to see you and your cat!";



mapInfo.appendChild(p1);
mapInfo.appendChild(iframe);
mapInfo.appendChild(p2);


contactPageCont.appendChild(contactPageImgCont);
contactPageCont.appendChild(mapInfo);

return contactPageCont;
}



























{/* <div class="contact-page-container">
<div class="contact-page-img-container">
<img src="../src/img/cat-cafe.jpeg" alt="a">
</div>
<div class="map-info">
    <p>Visit us here:</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2540.5394288232105!2d30.510983077405115!3d50.449678971591915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI2JzU4LjgiTiAzMMKwMzAnNDguOCJF!5e0!3m2!1sru!2sua!4v1721080895153!5m2!1sru!2sua"
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <p>Adress:sadfasfasfasfasdfasf</p>
    <p>Number:390999999999</p>
</div>
</div> */}