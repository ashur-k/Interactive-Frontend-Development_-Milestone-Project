const baseURL = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?";

function getData(type, cb){
var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

/*xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});*/

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
       cb(JSON.parse(this.responseText));
    }
}

xhr.open("GET", `${baseURL}country=${type}`);
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");

xhr.send(data);
}

function getTableHeaders(obj) {
      var tableHeaders = [];

        Object.keys(obj).forEach(function(key){
                tableHeaders.push(`<td>${key}</td>`);
            });
            return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
   var el = document.getElementById("data");
   el.innerHTML = "";
    getData(type, function(data) {

        //console.dir(data);
        data = data.data.covid19Stats;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            var dataRow = [];
            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 50);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
            //el.innerHTML += `<p> Confirmed Deaths:${item.confirmed}</p>`;
        });
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
        
    });
}