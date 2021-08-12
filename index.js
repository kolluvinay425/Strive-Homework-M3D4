let url = "https://striveschool-api.herokuapp.com/books";
let container = document.querySelector(".apiData");
const shoppingCart = async () => {
  let cartImgs = await fetch(url);
  let data = await cartImgs.json();
  console.log(data);

  for (let d of data) {
    console.log(d.category);
    container.innerHTML += `<div class="row">
                            <div class="col-md-3">
                            <div class="card mb-3" style="max-width: 300px">
                            <div class="row">
                                <div>
                                <img
                                    src="${d.img}"
                                    alt="..."
                                />
                                </div>
                                
                                <div class="card-body">
                                <button>add to Cart</button>
                                    <h5 class="card-title">Book title: ${d.title}</h5>
                                    <p class="card-text">price: ${d.price}</p>
                                    <p class="card-text">Category: ${d.category}</p>
                                    
                                    </div>
                                    </div>
                                
                                </div>
                            </div>
                            </div>`;
  }
};
window.onload = () => {
  shoppingCart();
};
