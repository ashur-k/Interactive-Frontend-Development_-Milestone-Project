'use strict'
/* Getting countries names form Covid API to verify if country name is correct*/
function getCountriesName(cb) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            cb(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", "https://covid-193.p.rapidapi.com/countries");
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");

    xhr.send(data);
}

/* Populating drop down list with country names data, all countries name are in array format */
function popualteDropDown() {

    getCountriesName(function(data) {

        let CountriesArray = data.response;

        let select = document.getElementById("select"),
            arr = CountriesArray;

        for (let i = 0; i < arr.length; i++) {
            let option = document.createElement("OPTION"),
                txt = document.createTextNode(arr[i]);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
            
        }

    });
}
popualteDropDown();
/*Checking if country is selected*/
function CheckValidCountry() {

    var country_name = document.getElementById("select").value;
    if (country_name == "default") {
        document.getElementById("err_msg").style.display = "inline-block";
        document.getElementById("select").style.border = "1px solid red";
    } else {
          document.getElementById("select").style.border = "1px solid black";
        document.getElementById("err_msg").style.display = "none";
       /* document.getElementById("data").innerHTML = "";*/
       /* writeToDocument(country_name)*/
        printToDocument(country_name);

    }

}

