const baseURL_get_stattics = "https://covid-193.p.rapidapi.com/statistics";
const baseURL_get_country_history = "https://covid-193.p.rapidapi.com/history?day=2020-04-22&country=";

function getData(type, cb) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            cb(JSON.parse(this.responseText));
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
          
         data = data.response;

               console.log(data);
      
            let datawww = Object.entries(data);
            //console.log(datawww);

        var tableHeaders = getTableHeaders(data[0]);
        
       data.forEach(function(element, index, array){
           
    
        
        
        
        let fullData = [];
            fullData.push(array);
     // console.log(array);
          let first = array[0];
    //console.log (first);
          var arr = Object.keys(first);
         
        var arrobj = arr.map(function(key){
               return {[key]: first[key]};
        });
       // console.log(arrobj);
        document.getElementById("data2").innerHTML=arrobj;
         
        })
        


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

function writeToDocument2(type){  
  
    var tableRows2 = [];
    var el = document.getElementById("data2");
    el.innerHTML = "";
    getData(type, function(data)
    {
    
        data = data.response;

       // console.log (data[0]);
        var tableheaders2 = getTableHeaders2(data[0]);
             
        data.forEach(function(item){
            var dataRow2 =[];
            Object.keys(item.cases).forEach(function (key){
                //console.log(item);
                console.log (typeof(item));
                console.log(Array.isArray(item));
                
                dataRow2.push(`<td>${item.cases[key]}</td>`)
            });
            tableRows2.push(`<tr>${dataRow2}</tr>`)
         
        });

        el.innerHTML = `<table>${tableheaders2}${tableRows2}</table>`
    })
}