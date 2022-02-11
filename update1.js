function myFunction(){
    document.getElementById("current").style.opacity = "1";
    // document.getElementById("date").innerHTML = Date();
    n= new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
    hr = n.getHours();
    min = n.getMinutes() ;
    sec = n.getSeconds();
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec;

    var x = document.getElementById("latitude");
    var y = document.getElementById("longitude");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    y.innerHTML = "Geolocation is not supported by this browser.";
  }

    function showPosition(position) {
    x.innerHTML =  position.coords.latitude;
    y.innerHTML =  position.coords.longitude;
    }
}