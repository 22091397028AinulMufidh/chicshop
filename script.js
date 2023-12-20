// Define the Product class
class Product {
    constructor(imgSrc, brand, name, rating, price) {
        this.imgSrc = imgSrc;
        this.brand = brand;
        this.name = name;
        this.rating = rating;
        this.price = price;
    }

    generateHTML() {
        return `
            <div class="pro">
                <img src="${this.imgSrc}" alt="">
                <div class="des">
                    <span>${this.brand}</span>
                    <h5>${this.name}</h5>
                    <div class="star">
                        ${this.generateStars()}
                    </div>
                    <h4>$${this.price}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        `;
    }

    generateStars() {
        const starIcons = Array.from({ length: this.rating }, () => '<i class="fas fa-star"></i>').join('');
        return starIcons;
    }
}

// Define the Product2 class
class Product2 extends Product {
    constructor(imgSrc, brand, name, rating, price) {
        super(imgSrc, brand, name, rating, price);
    }

    generateHTML() {
        return `
            <div class="pro">
                <img src="${this.imgSrc}" alt="">
                <div class="des">
                    <span>${this.brand}</span>
                    <h5>${this.name}</h5>
                    <div class="star">
                        ${this.generateStars()}
                    </div>
                    <h4>$${this.price}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                <!-- Add any additional customization for product2 here -->
            </div>
        `;
    }
}

// Create instances of the Product class
const product1 = new Product("img/products/f1.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product2 = new Product("img/products/f2.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product3 = new Product("img/products/f3.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product4 = new Product("img/products/f4.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product5 = new Product("img/products/f5.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product6 = new Product("img/products/f6.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product7 = new Product("img/products/n1.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);
const product8 = new Product("img/products/n2.jpg", "adidas", "Cartoon Astronaut T-Shirts", 5, 78);

// Create instances of the Product2 class
const product2_1 = new Product2("img/products/n3.jpg", "adidas", "New Product 1", 4, 65);
const product2_2 = new Product2("img/products/n4.jpg", "adidas", "New Product 2", 3, 50);
const product2_3 = new Product2("img/products/n5.jpg", "adidas", "New Product 3", 5, 80);
const product2_4 = new Product2("img/products/n6.jpg", "adidas", "New Product 3", 5, 80);
const product2_5 = new Product2("img/products/n7.jpg", "adidas", "New Product 3", 5, 80);
const product2_6 = new Product2("img/products/n8.jpg", "adidas", "New Product 3", 5, 80);
const product2_7 = new Product2("img/products/f1.jpg", "adidas", "New Product 3", 5, 80);
const product2_8 = new Product2("img/products/f2.jpg", "adidas", "New Product 3", 5, 80);


// Get the container elements to append the product HTML
const containerProduct1 = document.getElementById("product-container");
const containerProduct2 = document.getElementById("product2-container");

// Append the HTML for each product to the respective containers
containerProduct1.innerHTML = `
    ${product1.generateHTML()}
    ${product2.generateHTML()}
    ${product3.generateHTML()}
    ${product4.generateHTML()}
    ${product5.generateHTML()}
    ${product6.generateHTML()}
    ${product7.generateHTML()}
    ${product8.generateHTML()}
`;

containerProduct2.innerHTML = `
    ${product2_1.generateHTML()}
    ${product2_2.generateHTML()}
    ${product2_3.generateHTML()}
    ${product2_4.generateHTML()}
    ${product2_5.generateHTML()}
    ${product2_6.generateHTML()}
    ${product2_7.generateHTML()}
    ${product2_8.generateHTML()}
`;
