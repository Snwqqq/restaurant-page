
export default function createMainPage(){
    const divBackGround = document.createElement('div');
    divBackGround.classList.add('back-ground');

    const divActionCont = document.createElement('div');
    divActionCont.classList.add('action-container');

    const p = document.createElement('p');
    p.textContent = 'Book Your Table Now and Experience the Purrfect Blend of Coffee, Cats, and Comfort!';
    const butt = document.createElement('button');
    butt.textContent = 'BOOK!';


    divActionCont.appendChild(p);
    divActionCont.appendChild(butt);

    divBackGround.appendChild(divActionCont);
    
    return divBackGround;
}










{/* 
<div class="back-ground">
<div class="action-container">
    <p>Book Your Table Now and Experience the Purrfect Blend of Coffee, Cats, and Comfort!</p>
    <button>BOOK!</button>
</div>
</div> */}