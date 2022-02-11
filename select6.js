
function thankyou(){
    
 document.getElementById("hide").style.display = "none"; 
 document.getElementById("myBtn").style.display = "none"; 
}

function myFunction() {
    console.log("rg" )
    var s=document.getElementById("mySelect");
    var v=s.value;
    
    if(v=="loc"){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            modalBody.innerHTML = "Geolocation is not supported by this browser.";
        }
        function showPosition(position) {
    
            modalBody.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        
        }
    }
    else if(v=="d&t"){ 
        n= new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        modalBody.innerHTML = n;
    }
}



  
