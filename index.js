let submitBtn = document.getElementById("myButton")
submitBtn.addEventListener('click', function() {
    // navigation to beginner page
    //let newpageURL = 'http://127.0.0.1:5500/MainMenu/Beginner.html'
    //window.location.href = newpageURL

    // input field element
    let name =  document.getElementById("name").value
    document.getElementById("myLabel").innerHTML = "Hello " + name + "!!!";
})

