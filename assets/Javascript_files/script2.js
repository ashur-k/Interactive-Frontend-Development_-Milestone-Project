const baseURL_get_stattics = "https://covid-193.p.rapidapi.com/statistics";
const baseURL_get_country_history = "https://covid-193.p.rapidapi.com/history?day=2020-04-05&country=";

function getData(type, cb) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            cb(JSON.parse(this.responseText));
            //data = JSON.parse(this.responseText);
            //console.log(data.response);
           // console.log(data.response[0].country);
         //  console.log(data.response[0].cases);
           // console.log(data.response[0].deaths);
           // console.log(data.response[0].tests);
           
        }
    });

    xhr.open("GET", `${baseURL_get_country_history}${type}`);
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");

    xhr.send(data);

}

function getTableHeaders (obj){
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`)
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument (type){
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data){
        var tableRows = [];
         console.log (data.response[0].cases);
       
         data = data.response;
       // console.log (data);
      
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            var dataRow = [];
            
            Object.keys(item).forEach(function (key){
                dataRow.push(`<td>${item[key]}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });
          el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    })
}

function getTableHeaders2(obj){
    var tableHeaders2 = [];
    Object.keys(obj.cases).forEach(function(key){
        tableHeaders2.push(`<td>${key}</td>`);
    });
    return `<tr>${tableHeaders2}</tr>`
}

function writeToDocument2(type)
{   var tableRows2 = [];
    var el = document.getElementById("data2");
    el.innerHTML = "";
    getData(type, function(data)
    {
        //console.dir(data);
        data = data.response;
        var tableheaders2 = getTableHeaders2(data[0]);
       // console.log (data);
        
        data.forEach(function(item){
            var dataRow2 =[];
            Object.keys(item.cases).forEach(function (key){
                console.log(key);
                dataRow2.push(`<td>${item.cases[key]}</td>`)
            });
            tableRows2.push(`<tr>${dataRow2}</tr>`)
           // Object.keys(item.cases).forEach(function(key){
               // console.log(key);
           // })
        //console.dir(item.cases);
       // document.getElementById("data2").innerHTML += `<p>${item.cases.new}</p>`;
        });

        el.innerHTML = `<table>${tableheaders2}${tableRows2}</table>`
    })
}

