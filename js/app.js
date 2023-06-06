var navbar = document.getElementById("navbar");
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 50){
		navbar.classList.add("bg-dark");
	}else{
		navbar.classList.remove("bg-dark");
		navbar.classList.add("bg-primary");
	}
});