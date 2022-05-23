
function getSolar() {
    let baseURL = "https://api.sunrise-sunset.org/json?";
    let myLatitude = document.getElementById("latId").value;
    let myLongitude = document.getElementById("longId").value;

    let myURL = baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today";
  

    $.ajax(
        myURL,
        {
            success: function (APIResponse) {
                let lat = APIResponse;
                let latDiv = document.createElement('div');
                latDiv.innerHTML = "Sunrise Time: " + lat.results.sunrise;
                document.getElementById("displayLat").appendChild(latDiv);

                let long =  APIResponse;
                let longDiv = document.createElement('div');
                longDiv.innerHTML =  "Sunset Time: " + long.results.sunset;
                document.getElementById("displayLong").appendChild(longDiv);
            }
        })
}
