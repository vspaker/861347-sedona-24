var link = document.querySelector(".lead-magnet-intro a");
var hide = document.querySelector(".hotel-search-index");
hide.classList.add("hide");
link.addEventListener("click", function (evt) {
evt.preventDefault();
hide.classList.toggle("hide");
});   