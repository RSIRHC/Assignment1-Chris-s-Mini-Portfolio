//Java script goes here
//IIFE 

(function(){
    "use strict"; 
    
    console.log("app is running :)"); 
    
    var paragraphElements = []; 
    
    
    paragraphElements[0] = document.getElementById("paragraphOne"); 
    paragraphElements[1] = document.getElementById("paragraphTwo");
    
    

    // Define paragraph array
    var paragraphs = []; 
     paragraphs[0] = "<strong>Name: Christopher Ritchil <br>Program: Software Engineering Technology <br>Centennial College <br>Toronto,ON</strong>"; 
    paragraphs[1] = "<ul>" +
  "<li><a href='https://www.flickr.com/photos/chrstprrmrk/' target='_blank'>Photography</a></li>"+
  "<li><a href='http://studentweb.cencol.ca/critchil/' target='_blank'>Semester 1 HTML webpage</a></li>"+
  "</ul> "; 
  
    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton"); 
     if (sendButton){
    sendButton.addEventListener("click", function(event){
        console.log("Clicked!!");  
    })}
    
    // create a reference to the form 
    var firstName = document.getElementById("firstName"); 
    
    
    //create a reference for the form
    var contactForm = document.getElementById("contactForm"); 
    if (contactForm){
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("SUBMITTED"); 
        showFormInput();  
        contactForm.reset(); 
    })}
    
    function showFormInput() {
        console.log("+++++++++++++++++++++++++++++++"); 
        console.log("First Name: " + firstName.value);
        console.log("+++++++++++++++++++++++++++++++");
    }
    
 
    
    // Data for my pages..
   
    
    var paragraphElementsLength = paragraphElements.length - 1; 
    for (var index = paragraphElementsLength; index >= 0; index--) {
  
        if(paragraphElements[index]) {
        paragraphElements[index].innerHTML = paragraphs[index]; 
        }
    }

    
})();