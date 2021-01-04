var users;
function callApi() {
    var xhttp = new XMLHttpRequest();
    var cityName = document.getElementById('weather-form').value
    console.log(cityName)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            users = JSON.parse(this.responseText)
            document.getElementById('search-div-container').innerHTML = "";
            document.getElementById('search-div-container').innerHTML += `

                <center>
                <div class="card" style="width: 70%; margin-right: 10px; height:220px">
                        <div class="card-body">
                            <h5 class="card-title" align="left">${users.name}</h5>
                            <hr>
                            <p class="card-text" id="demo" align="left"></p>
                        </div>
                        <div id="img-container" style="float:right;">
        
                        </div>
                    </div>
                    <br>
                </div>
            </center>`

            document.getElementById('demo').innerHTML += `

                <b>Weather</b>: ${users.main.temp - 273.15}°C / ${users.main.temp}°K
                <br>
                <b>Description</b>: ${users.weather[0].main}
                <br>
                <b>Humidity</b>: ${users.main.humidity}
                <br>
                <b>lat</b>: ${users.coord.lat}
                <br>
                <b>lon</b>: ${users.coord.lon}
                `;
            document.getElementById('img-container').innerHTML += `
                <img src="https://openweathermap.org/img/wn/${users.weather[0].icon}@2x.png" style="float: right;">
                
                `
            console.log(users)
        }
    };


    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=651e614deed92f593561280d0a037d12`, true);
    xhttp.send();
}


function city1(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users1 = JSON.parse(this.responseText)
            
            document.getElementById('banglore').innerHTML += `
            <img class="card-img-top" src="https://i.pinimg.com/originals/67/0d/57/670d578627f90d2ef4cfe8c2fb5d50c6.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Bangalore</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="b-c">Weather: ${users1.main.temp}</li>
              <li class="list-group-item" id="b-h">Humidity: ${users1.main.humidity}</li>
              <li class="list-group-item" id="b-d">Description: ${users1.weather[0].main}</li>
            </ul>
          </div>
`
        }
    };



    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=651e614deed92f593561280d0a037d12`, true);
    xhttp.send();
}

city1()

function city2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users2 = JSON.parse(this.responseText)
            
            document.getElementById('new-york').innerHTML += `
<img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">New York</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item" id="b-c">Weather: ${users2.main.temp}</li>
            <li class="list-group-item" id="b-h">Humidity: ${users2.main.humidity}</li>
            <li class="list-group-item" id="b-d">Description: ${users2.weather[0].main}</li>
            </ul>`
        }
    };



    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=651e614deed92f593561280d0a037d12`, true);
    xhttp.send();
}

city2()

function city3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users3 = JSON.parse(this.responseText)
            
            document.getElementById('new-jersey').innerHTML += `
            <img class="card-img-top" src="https://www.njfuture.org/wp-content/uploads/2018/03/view-of-Newport-JC-skyline-from-Freedom-Tower.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">New Jersey</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item" id="b-c">Weather: ${users3.main.temp}</li>
            <li class="list-group-item" id="b-h">Humidity: ${users3.main.humidity}</li>
            <li class="list-group-item" id="b-d">Description: ${users3.weather[0].main}</li>
            </ul>`
        }
    };



    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=651e614deed92f593561280d0a037d12`, true);
    xhttp.send();
}

city3()

function city4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users4 = JSON.parse(this.responseText)
            
            document.getElementById('chennai').innerHTML += `
            <img class="card-img-top" src="https://www.holidify.com/images/bgImages/CHENNAI%20.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Chennai</h5>
            </div>
            <ul class="list-group list-group-flush">
            <ul class="list-group list-group-flush">
            <li class="list-group-item" id="b-c">Weather: ${users4.main.temp}</li>
            <li class="list-group-item" id="b-h">Humidity: ${users4.main.humidity}</li>
            <li class="list-group-item" id="b-d">Description: ${users4.weather[0].main}</li>
            </ul>`
        }
    };



    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=651e614deed92f593561280d0a037d12`, true);
    xhttp.send();
}

city4()
