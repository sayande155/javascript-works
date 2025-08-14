const clock = document.getElementById("clock");
// func, time in ms
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);