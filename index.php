<?php

include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
}

if(isset($_POST['add_to_cart'])){

   $product_name = $_POST['product_name'];
   $product_price = $_POST['product_price'];
   $product_image = $_POST['product_image'];
   $product_quantity = $_POST['product_quantity'];

   $check_cart_numbers = mysqli_query($conn, "SELECT * FROM `cart` WHERE name = '$product_name' AND user_id = '$user_id'") or die('query failed');

   if(mysqli_num_rows($check_cart_numbers) > 0){
      $message[] = 'already added to cart!';
   }else{
      mysqli_query($conn, "INSERT INTO `cart`(user_id, name, price, quantity, image) VALUES('$user_id', '$product_name', '$product_price', '$product_quantity', '$product_image')") or die('query failed');
      $message[] = 'product added to cart!';
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>home</title>

   <!-- font awesome cdn link  -->
   <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    />

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style2.css">
   <link rel="stylesheet" href="style2.css">
   <link rel="stylesheet" href="style.css">

</head>
<body>
   
<?php include 'header.php'; ?>

<section id="hero">
      <h4>Trade in offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off! </p>
      <button><a href="shop.php">Shop Now</a></button>
</section>

<section id="feature" class="flexbox">
            <div class="box">
                <img src="img/features/f1.png" alt="">
                <h6>Free Shopping</h6>
            </div>

            <div class="box">
                <img src="img/features/f2.png" alt="">
                <h6>Free Shopping</h6>
            </div>

            <div class="box">
                <img src="img/features/f3.png" alt="">
                <h6>Free Shopping</h6>
            </div>

            <div class="box">
                <img src="img/features/f4.png" alt="">
                <h6>Free Shopping</h6>
            </div>

            <div class="box">
                <img src="img/features/f5.png" alt="">
                <h6>Free Shopping</h6>
            </div>
            <div class="box">
                <img src="img/features/f6.png" alt="">
                <h6>Free Shopping</h6>
            </div>
</section>

<section id="product1" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div class="container" id="product-container"></div>
</section>

<section id="banner" class="banners">
   <h4>Repair Services</h4>
   <h2>Up to <span>50% off</span> - All t-Shirts & Accessories</h2>
   <button class="normal"><a href="shop.php">Explore More</a></button>
</section>


<section id="product1" class="section-p1">
    <h2>New Arrivals</h2>
    <p>Summer Collection New Modern Design</p>
    <div class="container" id="product2-container"></div>
</section>


<section id="banner2" class="section-p1">
            <div class="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>the best classic dress in on sale</span>
                <button class="white">Learn More</button>
            </div>

            <div class="banner-box banner-box2">
                <h4>summer</h4>
                <h2>upcoming season</h2>
                <span>the best classic dress in on sale</span>
                <button class="white">Collection</button>
            </div>
</section>

        <section id="banner3">
            <div class="banner-box">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% Off</h3>
            </div>

            <div class="banner-box banner-box2">
                <h2>The Collection</h2>
                <h3>Summer 2023</h3>
            </div>

            <div class="banner-box banner-box3">
                <h2>T-Shirt</h2>
                <h3>A New Brand</h3>
            </div>
        </section>

<?php include 'footer.php'; ?>

<!-- custom js file link  -->
<script src="script.js"></script>

</body>
</html>