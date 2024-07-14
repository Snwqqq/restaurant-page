import mainPhotoJPEG from '../img/main-photo.jpeg';
import welcomeJPEG from '../img/welcome.jpeg';
import ourStoryJPEG from '../img/our-story.jpeg';
import catExpJPEG from '../img/cat-expirience.jpeg';
import valuesJPEG from '../img/com-values.jpeg';
import logoPNG from '../img/logo.png';
// import mainPhotoJPEG from './img/main-photo.jpeg';


export default function createMainPage(){
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
    mainPhoto.src = mainPhotoJPEG;
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

    main.appendChild(createSection('first-section',welcomeJPEG, "Welcome to our cozy cat café, where feline friends and coffee lovers unite! Here, you can enjoy a relaxing atmosphere filled with the gentle purrs and playful antics of our resident cats. Whether you're a cat owner or simply a cat enthusiast, our café is the perfect spot to unwind with your favorite furry companions"));
    main.appendChild(createSection('second-section',ourStoryJPEG, "Our journey began with a love for cats and a passion for creating a unique, welcoming space for both humans and their feline friends. We envisioned a place where people could escape the hustle and bustle of everyday life and spend quality time with cats, whether their own or our adorable residents. This vision came to life in the heart of our city, and we've been spreading joy and purrs ever since.",'Our story!'));
    main.appendChild(createSection('first-section',catExpJPEG, "At our café, the cats are the stars of the show. Our spacious and comfortable setting is designed to cater to their every need, with plenty of cozy nooks, climbing trees, and toys. You can interact with our resident cats, each with its own unique personality, and even bring your own cat to join the fun. We believe in creating a safe and enjoyable environment for all our visitors.",'Cat expirience!'));
    main.appendChild(createSection('second-section',valuesJPEG, "We are more than just a café; we are a community of cat lovers dedicated to promoting the well-being of our furry friends. We regularly host events and workshops on cat care, adoption drives, and fundraisers for local animal shelters. Our café is a place where you can meet like-minded individuals, share stories, and support a great cause.",'Community and values!'));
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