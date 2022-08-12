let submitBtn = document.getElementById("myButton")
submitBtn.addEventListener('click', function() {
    // navigation to beginner page
    //let newpageURL = 'http://127.0.0.1:5500/MainMenu/Beginner.html'
    //window.location.href = newpageURL

    // input field element
    let name =  document.getElementById("myname").value
    document.getElementById("myLabel").innerHTML = "Hello " + name + "!!!";

    let experience = document.getElementById("myexperience").value
    
    if( (experience) <= 5 ) {
        document.getElementById("myOutput").innerHTML = "I recommend clicking Beginner exercises below: ";
    }  else if((experience) <= 7) {
        document.getElementById("myOutput").innerHTML = "I recommend clicking Intermediate exercises below: ";
    } else {
        document.getElementById("myOutput").innerHTML = "I recommend clicking Advanced exercises below: ";
  
    }
    
       // var message;
      //  var Exp = document.getElementById("myexperience").value;
      //  if(Exp < 5){
            //message = "I would like to recommend you the beginner exercises";
           // document.getElementById("myexperience").innerHTML = message;

})
// Accessibility Feature for Accessibility Page
let tags = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,ul,li,b');

tags.forEach( (tag) => {
tag.addEventListener('click', (e) => {
    msg.text = e.target.innerText;
    speechSynthesis.speak(msg);
});
});


