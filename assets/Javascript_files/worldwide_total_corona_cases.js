//this page is populating figures in hers section of web and also there is function implemented to get commas on values 

//retereiving data from API
function getGlobalCoronoStats(cb) {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            cb(JSON.parse(this.responseText));

        }
    }

    xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");

    xhr.send(data);


}

//function to format numbers with commas //
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//updating hero section, earlier I setup my web with jumbotron but late I cahged my mind and used backgrounf image div, 
//its jsut I am not renaming my functions, I dont have time at the moment to do that, I will do it late when I am updating this project
function updateJumbptron() {
    getGlobalCoronoStats(function (data) {


        data = data.data;

        let worldConfirmedCases = formatNumber(data.confirmed);
        let worldConfirmedDeaths = formatNumber(data.deaths);
        let worldConfirmedRecovered = formatNumber(data.recovered);

        // changing date into printable format on web page in nav bar section
        let date = data.lastReported.toString();
        let truncatedDate = date.substring(0, 10);
        // console.log(truncatedDate);    

        document.getElementById("updateDate").innerHTML = truncatedDate;

        document.getElementById("confirmed").innerHTML = worldConfirmedCases;
        document.getElementById("world_deaths").innerHTML = worldConfirmedDeaths;
        document.getElementById("recovered_numbers").innerHTML = worldConfirmedRecovered;

    })
}
//invoking function
updateJumbptron();