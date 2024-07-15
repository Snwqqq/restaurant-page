"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAboutPage)
/* harmony export */ });
/* harmony import */ var _img_main_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/main-photo.jpeg */ "./src/img/main-photo.jpeg");
/* harmony import */ var _img_welcome_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/welcome.jpeg */ "./src/img/welcome.jpeg");
/* harmony import */ var _img_our_story_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/our-story.jpeg */ "./src/img/our-story.jpeg");
/* harmony import */ var _img_cat_expirience_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cat-expirience.jpeg */ "./src/img/cat-expirience.jpeg");
/* harmony import */ var _img_com_values_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/com-values.jpeg */ "./src/img/com-values.jpeg");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");






// import mainPhotoJPEG from './img/main-photo.jpeg';


function createAboutPage(){
    function createSection(className,imgSource,text,h1tetx){
        const section = document.createElement('div');
        section.classList.add(className);


        if(className==='first-section'||window.innerWidth<600){
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        section.appendChild(imgContainer);

        const img = document.createElement('img');
        img.src = imgSource;
        img.alt = 'welcome';
        imgContainer.appendChild(img);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        if(h1tetx){
                const h1 = document.createElement('h1');
                h1.textContent = h1tetx;
                textContainer.appendChild(h1);
            }

            const p = document.createElement('p');
            p.textContent = text;
            p.classList.add('description');
            textContainer.appendChild(p);
            section.appendChild(textContainer);
            }
        else{
            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');
            if(h1tetx){
            const h1 = document.createElement('h1');
                h1.textContent = h1tetx;
                textContainer.appendChild(h1);
            }
            const p = document.createElement('p');
            p.textContent = text;
            p.classList.add('description');
            textContainer.appendChild(p);
            section.appendChild(textContainer);

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
            section.appendChild(imgContainer);

            const img = document.createElement('img');
            img.src = imgSource;
            img.alt = 'welcome';
            imgContainer.appendChild(img);
        }
        return section;
    }

    const main = document.createElement('div');
    main.classList.add('main');

    const divMainPhotoContainer = document.createElement('div');
    divMainPhotoContainer.classList.add('main-photo-container');
    const mainPhoto = document.createElement('img');
    mainPhoto.src = _img_main_photo_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    mainPhoto.alt = 'cats';
    mainPhoto.classList.add('main-photo');
    divMainPhotoContainer.appendChild(mainPhoto);
    main.appendChild(divMainPhotoContainer);


    const divAboutUs = document.createElement('div');
    divAboutUs.classList.add('about-us-container');
    main.appendChild(divAboutUs);

    const h1AS = document.createElement('h1');
    h1AS.textContent ='About us'
    divAboutUs.appendChild(h1AS);

    main.appendChild(createSection('first-section',_img_welcome_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Welcome to our cozy cat café, where feline friends and coffee lovers unite! Here, you can enjoy a relaxing atmosphere filled with the gentle purrs and playful antics of our resident cats. Whether you're a cat owner or simply a cat enthusiast, our café is the perfect spot to unwind with your favorite furry companions"));
    main.appendChild(createSection('second-section',_img_our_story_jpeg__WEBPACK_IMPORTED_MODULE_2__, "Our journey began with a love for cats and a passion for creating a unique, welcoming space for both humans and their feline friends. We envisioned a place where people could escape the hustle and bustle of everyday life and spend quality time with cats, whether their own or our adorable residents. This vision came to life in the heart of our city, and we've been spreading joy and purrs ever since.",'Our story!'));
    main.appendChild(createSection('first-section',_img_cat_expirience_jpeg__WEBPACK_IMPORTED_MODULE_3__, "At our café, the cats are the stars of the show. Our spacious and comfortable setting is designed to cater to their every need, with plenty of cozy nooks, climbing trees, and toys. You can interact with our resident cats, each with its own unique personality, and even bring your own cat to join the fun. We believe in creating a safe and enjoyable environment for all our visitors.",'Cat expirience!'));
    main.appendChild(createSection('second-section',_img_com_values_jpeg__WEBPACK_IMPORTED_MODULE_4__, "We are more than just a café; we are a community of cat lovers dedicated to promoting the well-being of our furry friends. We regularly host events and workshops on cat care, adoption drives, and fundraisers for local animal shelters. Our café is a place where you can meet like-minded individuals, share stories, and support a great cause.",'Community and values!'));
return main;
}

{/*


<div class="about-us-container">
    <h1>About us</h1>
    <div class="first-section">
        <div class="img-container"><img src="./img/welcome.jpeg" alt="welcome"></div>
        <p class="description">
            Welcome to our cozy cat café, where feline friends and coffee lovers unite! Here, you can enjoy a relaxing atmosphere filled with the gentle purrs and playful antics of our resident cats. Whether you're a cat owner or simply a cat enthusiast, our café is the perfect spot to unwind with your favorite furry companions.</p>
    </div>
    <div class="second-section">
        <div class="text-container">
            <h1>Our Story!</h1>
        <p class="description">
            Our journey began with a love for cats and a passion for creating a unique, welcoming space for both humans and their feline friends. We envisioned a place where people could escape the hustle and bustle of everyday life and spend quality time with cats, whether their own or our adorable residents. This vision came to life in the heart of our city, and we've been spreading joy and purrs ever since.</p>                
        </div>
            <div class="img-container"><img src="./img/our-story.jpeg" alt="welcome"></div>
    </div>
    <div class="first-section">
        <div class="img-container"><img src="./img/cat-expirience.jpeg" alt="welcome"></div>
        <div class="text-container">
          <h1>Cat expirience!</h1>
          <p class="description">
            At our café, the cats are the stars of the show. Our spacious and comfortable setting is designed to cater to their every need, with plenty of cozy nooks, climbing trees, and toys. You can interact with our resident cats, each with its own unique personality, and even bring your own cat to join the fun. We believe in creating a safe and enjoyable environment for all our feline visitors.
        </div>
        </div>
    <div class="second-section">
        <div class="text-container">
        <h1>Community and values!</h1>
        <p class="description">
        We are more than just a café; we are a community of cat lovers dedicated to promoting the well-being of our furry friends. We regularly host events and workshops on cat care, adoption drives, and fundraisers for local animal shelters. Our café is a place where you can meet like-minded individuals, share stories, and support a great cause.</p>
        </div>
        <div class="img-container"><img src="./img/com-values.jpeg" alt="welcome"></div>
        </div>
</div> */}



/***/ }),

/***/ "./src/img/cat-expirience.jpeg":
/*!*************************************!*\
  !*** ./src/img/cat-expirience.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e8c1699100de6d658fe.jpeg";

/***/ }),

/***/ "./src/img/com-values.jpeg":
/*!*********************************!*\
  !*** ./src/img/com-values.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c90a4f71b1a00fb42d04.jpeg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ca96843a85f75d65169.png";

/***/ }),

/***/ "./src/img/main-photo.jpeg":
/*!*********************************!*\
  !*** ./src/img/main-photo.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f910375e4b706dcf691.jpeg";

/***/ }),

/***/ "./src/img/our-story.jpeg":
/*!********************************!*\
  !*** ./src/img/our-story.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73e73db752f684c4b283.jpeg";

/***/ }),

/***/ "./src/img/welcome.jpeg":
/*!******************************!*\
  !*** ./src/img/welcome.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c535e231836bc57d73d1.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNHO0FBQ0c7QUFDSjtBQUNWO0FBQ3RDOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCw4Q0FBVztBQUM5RCxvREFBb0QsZ0RBQVk7QUFDaEUsbURBQW1ELHFEQUFVO0FBQzdELG9EQUFvRCxpREFBVSxpQ0FBaUM7QUFDL0Y7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haW5QaG90b0pQRUcgZnJvbSAnLi4vaW1nL21haW4tcGhvdG8uanBlZyc7XG5pbXBvcnQgd2VsY29tZUpQRUcgZnJvbSAnLi4vaW1nL3dlbGNvbWUuanBlZyc7XG5pbXBvcnQgb3VyU3RvcnlKUEVHIGZyb20gJy4uL2ltZy9vdXItc3RvcnkuanBlZyc7XG5pbXBvcnQgY2F0RXhwSlBFRyBmcm9tICcuLi9pbWcvY2F0LWV4cGlyaWVuY2UuanBlZyc7XG5pbXBvcnQgdmFsdWVzSlBFRyBmcm9tICcuLi9pbWcvY29tLXZhbHVlcy5qcGVnJztcbmltcG9ydCBsb2dvUE5HIGZyb20gJy4uL2ltZy9sb2dvLnBuZyc7XG4vLyBpbXBvcnQgbWFpblBob3RvSlBFRyBmcm9tICcuL2ltZy9tYWluLXBob3RvLmpwZWcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0UGFnZSgpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oY2xhc3NOYW1lLGltZ1NvdXJjZSx0ZXh0LGgxdGV0eCl7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cblxuICAgICAgICBpZihjbGFzc05hbWU9PT0nZmlyc3Qtc2VjdGlvbid8fHdpbmRvdy5pbm5lcldpZHRoPDYwMCl7XG4gICAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpbWdTb3VyY2U7XG4gICAgICAgIGltZy5hbHQgPSAnd2VsY29tZSc7XG4gICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpO1xuICAgICAgICBpZihoMXRldHgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9IGgxdGV0eDtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZihoMXRldHgpe1xuICAgICAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGgxLnRleHRDb250ZW50ID0gaDF0ZXR4O1xuICAgICAgICAgICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nU291cmNlO1xuICAgICAgICAgICAgaW1nLmFsdCA9ICd3ZWxjb21lJztcbiAgICAgICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnN0IGRpdk1haW5QaG90b0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk1haW5QaG90b0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLXBob3RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1haW5QaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5QaG90by5zcmMgPSBtYWluUGhvdG9KUEVHO1xuICAgIG1haW5QaG90by5hbHQgPSAnY2F0cyc7XG4gICAgbWFpblBob3RvLmNsYXNzTGlzdC5hZGQoJ21haW4tcGhvdG8nKTtcbiAgICBkaXZNYWluUGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBob3RvKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdk1haW5QaG90b0NvbnRhaW5lcik7XG5cblxuICAgIGNvbnN0IGRpdkFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZBYm91dFVzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXVzLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2QWJvdXRVcyk7XG5cbiAgICBjb25zdCBoMUFTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMUFTLnRleHRDb250ZW50ID0nQWJvdXQgdXMnXG4gICAgZGl2QWJvdXRVcy5hcHBlbmRDaGlsZChoMUFTKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbignZmlyc3Qtc2VjdGlvbicsd2VsY29tZUpQRUcsIFwiV2VsY29tZSB0byBvdXIgY296eSBjYXQgY2Fmw6ksIHdoZXJlIGZlbGluZSBmcmllbmRzIGFuZCBjb2ZmZWUgbG92ZXJzIHVuaXRlISBIZXJlLCB5b3UgY2FuIGVuam95IGEgcmVsYXhpbmcgYXRtb3NwaGVyZSBmaWxsZWQgd2l0aCB0aGUgZ2VudGxlIHB1cnJzIGFuZCBwbGF5ZnVsIGFudGljcyBvZiBvdXIgcmVzaWRlbnQgY2F0cy4gV2hldGhlciB5b3UncmUgYSBjYXQgb3duZXIgb3Igc2ltcGx5IGEgY2F0IGVudGh1c2lhc3QsIG91ciBjYWbDqSBpcyB0aGUgcGVyZmVjdCBzcG90IHRvIHVud2luZCB3aXRoIHlvdXIgZmF2b3JpdGUgZnVycnkgY29tcGFuaW9uc1wiKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uKCdzZWNvbmQtc2VjdGlvbicsb3VyU3RvcnlKUEVHLCBcIk91ciBqb3VybmV5IGJlZ2FuIHdpdGggYSBsb3ZlIGZvciBjYXRzIGFuZCBhIHBhc3Npb24gZm9yIGNyZWF0aW5nIGEgdW5pcXVlLCB3ZWxjb21pbmcgc3BhY2UgZm9yIGJvdGggaHVtYW5zIGFuZCB0aGVpciBmZWxpbmUgZnJpZW5kcy4gV2UgZW52aXNpb25lZCBhIHBsYWNlIHdoZXJlIHBlb3BsZSBjb3VsZCBlc2NhcGUgdGhlIGh1c3RsZSBhbmQgYnVzdGxlIG9mIGV2ZXJ5ZGF5IGxpZmUgYW5kIHNwZW5kIHF1YWxpdHkgdGltZSB3aXRoIGNhdHMsIHdoZXRoZXIgdGhlaXIgb3duIG9yIG91ciBhZG9yYWJsZSByZXNpZGVudHMuIFRoaXMgdmlzaW9uIGNhbWUgdG8gbGlmZSBpbiB0aGUgaGVhcnQgb2Ygb3VyIGNpdHksIGFuZCB3ZSd2ZSBiZWVuIHNwcmVhZGluZyBqb3kgYW5kIHB1cnJzIGV2ZXIgc2luY2UuXCIsJ091ciBzdG9yeSEnKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uKCdmaXJzdC1zZWN0aW9uJyxjYXRFeHBKUEVHLCBcIkF0IG91ciBjYWbDqSwgdGhlIGNhdHMgYXJlIHRoZSBzdGFycyBvZiB0aGUgc2hvdy4gT3VyIHNwYWNpb3VzIGFuZCBjb21mb3J0YWJsZSBzZXR0aW5nIGlzIGRlc2lnbmVkIHRvIGNhdGVyIHRvIHRoZWlyIGV2ZXJ5IG5lZWQsIHdpdGggcGxlbnR5IG9mIGNvenkgbm9va3MsIGNsaW1iaW5nIHRyZWVzLCBhbmQgdG95cy4gWW91IGNhbiBpbnRlcmFjdCB3aXRoIG91ciByZXNpZGVudCBjYXRzLCBlYWNoIHdpdGggaXRzIG93biB1bmlxdWUgcGVyc29uYWxpdHksIGFuZCBldmVuIGJyaW5nIHlvdXIgb3duIGNhdCB0byBqb2luIHRoZSBmdW4uIFdlIGJlbGlldmUgaW4gY3JlYXRpbmcgYSBzYWZlIGFuZCBlbmpveWFibGUgZW52aXJvbm1lbnQgZm9yIGFsbCBvdXIgdmlzaXRvcnMuXCIsJ0NhdCBleHBpcmllbmNlIScpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb24oJ3NlY29uZC1zZWN0aW9uJyx2YWx1ZXNKUEVHLCBcIldlIGFyZSBtb3JlIHRoYW4ganVzdCBhIGNhZsOpOyB3ZSBhcmUgYSBjb21tdW5pdHkgb2YgY2F0IGxvdmVycyBkZWRpY2F0ZWQgdG8gcHJvbW90aW5nIHRoZSB3ZWxsLWJlaW5nIG9mIG91ciBmdXJyeSBmcmllbmRzLiBXZSByZWd1bGFybHkgaG9zdCBldmVudHMgYW5kIHdvcmtzaG9wcyBvbiBjYXQgY2FyZSwgYWRvcHRpb24gZHJpdmVzLCBhbmQgZnVuZHJhaXNlcnMgZm9yIGxvY2FsIGFuaW1hbCBzaGVsdGVycy4gT3VyIGNhZsOpIGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBtZWV0IGxpa2UtbWluZGVkIGluZGl2aWR1YWxzLCBzaGFyZSBzdG9yaWVzLCBhbmQgc3VwcG9ydCBhIGdyZWF0IGNhdXNlLlwiLCdDb21tdW5pdHkgYW5kIHZhbHVlcyEnKSk7XG5yZXR1cm4gbWFpbjtcbn1cblxuey8qXG5cblxuPGRpdiBjbGFzcz1cImFib3V0LXVzLWNvbnRhaW5lclwiPlxuICAgIDxoMT5BYm91dCB1czwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj48aW1nIHNyYz1cIi4vaW1nL3dlbGNvbWUuanBlZ1wiIGFsdD1cIndlbGNvbWVcIj48L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byBvdXIgY296eSBjYXQgY2Fmw6ksIHdoZXJlIGZlbGluZSBmcmllbmRzIGFuZCBjb2ZmZWUgbG92ZXJzIHVuaXRlISBIZXJlLCB5b3UgY2FuIGVuam95IGEgcmVsYXhpbmcgYXRtb3NwaGVyZSBmaWxsZWQgd2l0aCB0aGUgZ2VudGxlIHB1cnJzIGFuZCBwbGF5ZnVsIGFudGljcyBvZiBvdXIgcmVzaWRlbnQgY2F0cy4gV2hldGhlciB5b3UncmUgYSBjYXQgb3duZXIgb3Igc2ltcGx5IGEgY2F0IGVudGh1c2lhc3QsIG91ciBjYWbDqSBpcyB0aGUgcGVyZmVjdCBzcG90IHRvIHVud2luZCB3aXRoIHlvdXIgZmF2b3JpdGUgZnVycnkgY29tcGFuaW9ucy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlY29uZC1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPk91ciBTdG9yeSE8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBPdXIgam91cm5leSBiZWdhbiB3aXRoIGEgbG92ZSBmb3IgY2F0cyBhbmQgYSBwYXNzaW9uIGZvciBjcmVhdGluZyBhIHVuaXF1ZSwgd2VsY29taW5nIHNwYWNlIGZvciBib3RoIGh1bWFucyBhbmQgdGhlaXIgZmVsaW5lIGZyaWVuZHMuIFdlIGVudmlzaW9uZWQgYSBwbGFjZSB3aGVyZSBwZW9wbGUgY291bGQgZXNjYXBlIHRoZSBodXN0bGUgYW5kIGJ1c3RsZSBvZiBldmVyeWRheSBsaWZlIGFuZCBzcGVuZCBxdWFsaXR5IHRpbWUgd2l0aCBjYXRzLCB3aGV0aGVyIHRoZWlyIG93biBvciBvdXIgYWRvcmFibGUgcmVzaWRlbnRzLiBUaGlzIHZpc2lvbiBjYW1lIHRvIGxpZmUgaW4gdGhlIGhlYXJ0IG9mIG91ciBjaXR5LCBhbmQgd2UndmUgYmVlbiBzcHJlYWRpbmcgam95IGFuZCBwdXJycyBldmVyIHNpbmNlLjwvcD4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj48aW1nIHNyYz1cIi4vaW1nL291ci1zdG9yeS5qcGVnXCIgYWx0PVwid2VsY29tZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+PGltZyBzcmM9XCIuL2ltZy9jYXQtZXhwaXJpZW5jZS5qcGVnXCIgYWx0PVwid2VsY29tZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+Q2F0IGV4cGlyaWVuY2UhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBBdCBvdXIgY2Fmw6ksIHRoZSBjYXRzIGFyZSB0aGUgc3RhcnMgb2YgdGhlIHNob3cuIE91ciBzcGFjaW91cyBhbmQgY29tZm9ydGFibGUgc2V0dGluZyBpcyBkZXNpZ25lZCB0byBjYXRlciB0byB0aGVpciBldmVyeSBuZWVkLCB3aXRoIHBsZW50eSBvZiBjb3p5IG5vb2tzLCBjbGltYmluZyB0cmVlcywgYW5kIHRveXMuIFlvdSBjYW4gaW50ZXJhY3Qgd2l0aCBvdXIgcmVzaWRlbnQgY2F0cywgZWFjaCB3aXRoIGl0cyBvd24gdW5pcXVlIHBlcnNvbmFsaXR5LCBhbmQgZXZlbiBicmluZyB5b3VyIG93biBjYXQgdG8gam9pbiB0aGUgZnVuLiBXZSBiZWxpZXZlIGluIGNyZWF0aW5nIGEgc2FmZSBhbmQgZW5qb3lhYmxlIGVudmlyb25tZW50IGZvciBhbGwgb3VyIGZlbGluZSB2aXNpdG9ycy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPkNvbW11bml0eSBhbmQgdmFsdWVzITwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgV2UgYXJlIG1vcmUgdGhhbiBqdXN0IGEgY2Fmw6k7IHdlIGFyZSBhIGNvbW11bml0eSBvZiBjYXQgbG92ZXJzIGRlZGljYXRlZCB0byBwcm9tb3RpbmcgdGhlIHdlbGwtYmVpbmcgb2Ygb3VyIGZ1cnJ5IGZyaWVuZHMuIFdlIHJlZ3VsYXJseSBob3N0IGV2ZW50cyBhbmQgd29ya3Nob3BzIG9uIGNhdCBjYXJlLCBhZG9wdGlvbiBkcml2ZXMsIGFuZCBmdW5kcmFpc2VycyBmb3IgbG9jYWwgYW5pbWFsIHNoZWx0ZXJzLiBPdXIgY2Fmw6kgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIG1lZXQgbGlrZS1taW5kZWQgaW5kaXZpZHVhbHMsIHNoYXJlIHN0b3JpZXMsIGFuZCBzdXBwb3J0IGEgZ3JlYXQgY2F1c2UuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj48aW1nIHNyYz1cIi4vaW1nL2NvbS12YWx1ZXMuanBlZ1wiIGFsdD1cIndlbGNvbWVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj4gKi99XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==