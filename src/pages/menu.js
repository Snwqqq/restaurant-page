export default function createMenuPage(){
    const divMenuContainer = document.createElement('div');
    divMenuContainer.classList.add('menu-container');

    function createSection(imgSrc){
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'menu';


        divMenuContainer.appendChild(img);
    }
    createSection("../src/svg/menu1.png");
    createSection("../src/svg/menu2.png");
return divMenuContainer;
}



















{/* <div class="menu-container">
            <div class="first-menu">
                <img src="../src/svg/menu1.png" alt="as2ds">
                <p>Coffee
                    Espresso: A rich and intense coffee shot, perfect for a quick caffeine boost.
                    Ameri-cat-no: A smooth and bold espresso diluted with hot water, ideal for those who prefer a milder taste.
                    Cat-puccino: A creamy espresso topped with a generous amount of frothy milk, offering a delightful balance of rich coffee and smooth texture.
                    Meow-cha: A delightful blend of espresso and chocolate, topped with steamed milk and a sprinkle of cocoa powder.
                    Purr-latte: A harmonious mix of espresso and steamed milk, topped with a light layer of foam for a velvety texture.
                    Macchi-cat-o: An espresso with a small amount of frothy milk, creating a strong yet slightly creamy coffee experience.
                    Flat Whiskers: A smooth and velvety coffee made with espresso and steamed milk, similar to a latte but with less foam.
                    
                    Tea
                    English Paw-breakfast: A robust and full-bodied black tea, perfect for starting the day with energy.
                    Earl Grey: A classic black tea infused with bergamot, offering a fragrant and citrusy flavor.
                    Green Tea: A refreshing and light tea with a delicate flavor and numerous health benefits.
                    Chamomile: A calming and soothing herbal tea made from chamomile flowers, perfect for relaxation.
                    Peppermint: A refreshing and invigorating herbal tea with a cool, minty taste.
                    Chai Catte: A spiced tea blend with a mix of black tea, cinnamon, cardamom, and other aromatic spices, offering a warm and comforting flavor.
                    Iced Paw-tea: A chilled version of our classic teas, perfect for a refreshing drink on a warm day.</p>
            </div> 
          <div class="first-menu">
            <p>Snacks
                Kitty Croissants: Flaky and buttery croissants, perfect for a light snack or breakfast treat.
                Bagels with Cream Cheese: Freshly baked bagels served with a generous spread of creamy cheese, available in various flavors.
                Muffins (Blueberry, Chocolate Chip): Soft and moist muffins packed with either juicy blueberries or rich chocolate chips.
                Catnip Scones with Jam and Clotted Cream: Traditional scones infused with a hint of catnip, served with sweet jam and rich clotted cream.
                Sandwiches (Ham & Cheese, Veggie): Freshly made sandwiches with a choice of ham and cheese or a variety of fresh vegetables.
                
                Desserts
                Cheesepaws: A creamy and delicious cheesecake with a crumbly base, perfect for dessert lovers.
                Brownie Bites: Rich and fudgy brownie squares that are sure to satisfy any chocolate craving.
                Cat Cookies (Chocolate Chip, Oatmeal Raisin): Soft and chewy cookies available in classic chocolate chip or hearty oatmeal raisin.
                Purr-cakes: Light and fluffy cupcakes with a variety of frosting options, perfect for a sweet treat.
                Tiramisu: A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.
                Fruit Paws: Fresh fruit tarts with a crisp crust, creamy filling, and topped with a variety of seasonal fruits.</p>
            <img src="../src/svg/menu2.png" alt="ads">
        </div>
        </div> */}