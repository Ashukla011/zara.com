let token = JSON.parse(localStorage.getItem("token"));
let name = JSON.parse(localStorage.getItem("userName"));


let change = "LOG IN"

if (token) {
  change = "Hi " + name;
}

function header() {
  return `
  
  <div class="toggle-btn">
  <span class="fas fa-bars"></span>
</div>
<div class="logo">
  <a href="./index.html"
    ><img
      height="140"
      width="280"
      src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
      alt=""
  /></a>


  
  <span class="right_opt">
  <a href="search.html">
  <p id="search-input">SEARCH</p></a>
    <a href="login.html">
      <p id="userCheck">${change}</p>
    </a>
    <a href="help.html">
      <p>HELP</p>
    </a>
    <a href="cart.html">
      <p>CART</p>
    </a>
  </span>
</div>





<nav class="sidebar">
  <ul>
    <li>
      <a href="#" class="women_section">women</a>
      <ul class="women_section_1">
        <li><a href="#">STARTING FROM 40%</a></li>
        <li id="woman_jacket">JACKETS | PUFFERS</li>
        <li>
          <a href="#">BLAZERS | COATS</a>
          <ul>
            <li><a href="#">DRESSES | JUMPSUITS</a></li>
            <li><a href="#">SHIRTS</a></li>
            <li><a href="#">TROUSERS</a></li>
            <li><a href="#">JEANS</a></li>
            <li><a href="#">T-SHIRTS</a></li>
            <li><a href="#">TOPS | BODYSUITS</a></li>
            <li><a href="#">SKIRTS | SHORTS</a></li>
            <li><a href="#">KNITWEAR</a></li>
            <li><a href="#">SHOES</a></li>
            <li><a href="#">BAGS</a></li>
            <li id="woman_acc">ACCESSORIES</li>
          </ul>
        </li>
      </ul>
    </li>



    <li>
      <a href="#" class="men_section">men</a>
      <ul class="men_section_1">
        <li><a href="#">STARTING FROM -60%</a></li>
        <li><a href="#">STARTING FROM -40%</a></li>
        <li>
          <a href="#">JACKETS | COATS</a>
          <ul>
            <li><a href="#">OVERSHIRTS</a></li>
            <li id="menShirts">SHIRTS</li>
            <li><a href="#">T-SHIRTS | SWEATSHIRTS</a></li>
            <li><a href="#">TROUSERS | JEANS</a></li>
            <li id="menShoes">SHOES</li>
            <li><a href="#">BAGS | BACKPACKS</a></li>
            <li><a href="#">ACCESSORIES</a></li>
            <li id="athleticz">ZARA ATHLETICS</li>
          </ul>
        </li>
      </ul>
    </li>




    <li><a href="#">Kids</a></li>
    <li><a href="#">SHOES & BAGS</a></li>
    <li><a href="#">JOIN LIFE</a></li>
    <br />
    <li><a href="#">+ info</a></li>
  </ul>
</nav>
`;
}

export { header };
