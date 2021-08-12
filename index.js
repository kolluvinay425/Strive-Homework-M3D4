let url = "https://striveschool-api.herokuapp.com/books";
let container = document.querySelector(".apiData");
const shoppingCart = async () => {
  let cartImgs = await fetch(url);
  let data = await cartImgs.json();
  console.log(data);

  for (let d of data) {
    console.log(d.category);
    container.innerHTML += `
                            <div class="col-md-3">                               
                            <div class="card m-3"  >
                                <img style=" height:250px" src="${d.img}" class="card-img-top img-fluid" alt="...">
                                <div   class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h5 class="card-title">Book title: ${d.title}</h5>
                                    <p class="card-text">price: ${d.price}</p>
                                    <p class="card-text">Category: ${d.category}</p>
                                
                                <button id="btnn" class="btn-primary">Add to Cart</button>
                               
                                </div>
                            </div>
                            </div>
                            `;
  }
  btn = document.querySelectorAll("#btnn");
  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      e = event.target.parentNode;
      e.style.backgroundColor = "red";
      console.log("forEach---->", event.target.parentNode);
    });
  });
  console.log("button:", btn);
};
window.onload = () => {
  shoppingCart();
};
