
	/*SLIDESHOW */
		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function showSlides(n) {
  			var i;
			var slides = document.getElementsByClassName("slide");
			if (n > slides.length) {slideIndex = 1}
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
			    slides[i].style.display = "none";
			}
			slides[slideIndex-1].style.display = "block";
		} 


	/*TAB NAVIGATION*/
		function openBenefit(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        document.getElementById("defaultOpen").click();
        
	/*FORM VALIDATION*/
		function validation(){

		var email = document.forms["RegForm"]["EMail"];
		if (email.value == "" || email.value.indexOf("@", 0) < 0||email.value.indexOf(".", 0) < 0 )								 
		{ 
			window.alert("Please enter a valid e-mail address"); 
			email.focus(); 
			return false; 
		} 

		var phoneNumber = document.forms["RegForm"]["Phone"].value;
		var phoneRGEX = /^[(]{0,1}[0-9]{9}$/;
  		var phoneResult = phoneRGEX.test(phoneNumber);
  		if(phoneResult == false)
		{
			alert('Please enter a valid phone number');
			return false;
		}

		var app =  document.forms["RegForm"]["appointment_time"];    
		if (app.value == "" || app.value.indexOf(" ", 0) < 0)		
		{ 
			window.alert("Please enter a valid appointment time");
			app.focus(); 
			return false; 
		} 
		

		return true; }
