var link = document.querySelector(".lead-magnet-intro a");
var hide = document.querySelector(".hotel-search-index");
link.addEventListener("click", function (evt) {
evt.preventDefault();
hide.classList.toggle("hide");
});   