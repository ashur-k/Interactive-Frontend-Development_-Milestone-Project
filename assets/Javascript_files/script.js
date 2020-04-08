const baseURL = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?";

function getData(type, cb) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(responseText);
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", `${baseURL}country=${type}`);
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");
}

function writeToDocument(type) {
  

    getData(type, function(data) {
        data = data.data.covid19Stats;

        data.forEach(function(item) {
            console.log(item);
            el.innerHTML += "<p>" + item.province + "</p>";
        });
    });
}
