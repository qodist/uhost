var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var planButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");

planButtons.forEach(function(button){
    button.addEventListener("click", function(){
        backdrop.style.display = "block";
        modal.style.display = "block";
    });
})

modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}