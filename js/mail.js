	//Burger handler

	(function () {
		const BurgerItem = document.querySelector('.burger'); //Обращаемся по селектору class="menu__burger burger" 
		const menu = document.querySelector('.menu_link-text');
		const menuCloseItem = document.querySelector('.menu__burger-close');
		const menuLinks = document.querySelectorAll('.menu_link-text');
		BurgerItem.addEventListener('click', () => {
			menu.classList.add('menu_link-active');
		});
		menuCloseItem.addEventListener('click', () => {
			menu.classList.remove('menu_link-active');
		});
		if (window.innerWidth <= 767) {
			for (let i = 0; i < menuLinks.length; i += 1) {
				menuLinks[i].addEventListener('click', () => {
					menu.classList.remove('menu_link-active');
				});
			}
		}
	}());  



//E-mail Ajax Send
	$(document).ready(function() {
 
		//E-mail Ajax Send
		$("form").submit(function() { //Change
		  var th = $(this);
		  $.ajax({
			type: "POST",
			url: "./js/mail.php", //Change
			data: th.serialize()
		  }).done(function() {
			alert("Письмо отправлено, Спасибо!");
			setTimeout(function() {
			  // Done Functions
			  th.trigger("reset");
			}, 1000);
		  });
		  return false;
		});
	   
	  });



