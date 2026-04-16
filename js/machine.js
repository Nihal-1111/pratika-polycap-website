const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const closeBtn = document.querySelector(".close");

cards.forEach(card => {

card.addEventListener("click", () => {

modal.style.display = "flex";

modalImg.src = card.dataset.img;
modalImg.alt = card.dataset.title;

modalTitle.innerText = card.dataset.title;

let features = card.dataset.desc.split(",");

modalDesc.innerHTML = "";

features.forEach(item=>{
let li = document.createElement("li");
li.innerText = item.trim();
modalDesc.appendChild(li);
});

});

});


closeBtn.onclick = function(){

modal.style.display = "none";

}


window.onclick = function(e){

if(e.target == modal){
modal.style.display = "none";
}

}
