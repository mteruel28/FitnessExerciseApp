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
        document.getElementById("myOutput").innerHTML = "I recommend beginner exercises ";
    }  else if((experience) <= 7) {
        document.getElementById("myOutput").innerHTML = "I recommend intermediate exercises ";
    } else {
        document.getElementById("myOutput").innerHTML = "I recommend advanced exercises ";
  
    }
    
       // var message;
      //  var Exp = document.getElementById("myexperience").value;
      //  if(Exp < 5){
            //message = "I would like to recommend you the beginner exercises";
           // document.getElementById("myexperience").innerHTML = message;

   
})

