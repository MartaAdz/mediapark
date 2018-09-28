
/*FORM VALIDATIOM*/ 
function validate(){
  var email = document.forms["registration"]["Email"].value;  
  var phone = document.forms["registration"]["phone"].value;  
  var app =  document.forms["registration"]["appointment_time"].value;  
  
  
    if (email.value == "")                 
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  if (email.value.indexOf("@", 0) < 0)         
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  if (email.value.indexOf(".", 0) < 0)         
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  return true;
}
   
/*    if (email.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } */
   
    // if (phone.value == "" || phone.value.length != 9 && phone.value != [0,1,2,3,4,5,6,7,8,9])                           
    // { 
    //     window.alert("Please enter your telephone number."); 
    //     phone.focus(); 
    //     return false; 
    // } 
    // if (phone.value == "")                           
    // { 
    //     window.alert("Please enter your telephone number."); 
    //     phone.focus(); 
    //     return false; 
    // }
   
    // if (appointment_time.value == "")                        
    // { 
    //     window.alert("Please enter your appointment time"); 
    //     app.focus(); 
    //     return flase; 
    // } 


  
/*function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}*/

 //  var slideIndex = 0;
 //  showSlides(slideIndex);

 //  function plusSlides(n) {
 //    showSlides(slideIndex += n);
 //  }

 //  function currentSlide(n) {
 //    showSlides(slideIndex = n);
 //  }

 //  function showSlides(n) {
 //    var i;
 //    var slides = document.getElementsByClassName("pic");   
 //    if (n < 1) {slideIndex = slides.length}
 //    for (i = 0; i < slides.length; i++) {
 //        slides[i].style.display = "none";  
 //    }
 //    slides[slideIndex-1].style.display = "block";    
 //  }
 // 