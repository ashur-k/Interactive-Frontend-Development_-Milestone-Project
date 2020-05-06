
const baseURL_get_date_country_history = "https://covid-193.p.rapidapi.com/history?day=";

function getCoronoData(countryName, cb)  {
  
const date = getDate();
let country = countryName;
  var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          cb(JSON.parse(this.responseText));

        }
    }
    xhr.open("GET", `${baseURL_get_date_country_history}${date}&country=${country}`);
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");
    xhr.send(data);
}

function printflag(flagName){
      document.getElementById("img").src = `assets/Images/flag-svg/${flagName}.svg`;
}


function printToDocument(countryName){
    printflag(countryName);
    getCoronoData(countryName, function(data){
      
    data = data.response;
  
      
    //Taking value of country name form API and printing on HTML5 page
      let countryName = data[0].country;
    document.getElementById("countryName").innerHTML = countryName;


    //Getting key names from api to print them on HTML5 document
    let casesTitleKey = Object.keys(data[0])[1];
    let deathsTitleKey = Object.keys(data[0])[2];
    let testsTitleKey = Object.keys(data[0])[3];
   //Printing key names from api to print them on HTML5 document
    document.getElementById("cases-title").innerHTML = casesTitleKey;
    document.getElementById("deathsTitle").innerHTML = deathsTitleKey;
    document.getElementById("testsTitle").innerHTML = testsTitleKey;

    
    //Getting Cases Keys names to print on HTML5 page, these values are going to span ids on html5 page
    let casesNewTitleKey = Object.keys(data[0].cases)[0];
    let casesActiveTitleKey = Object.keys(data[0].cases)[1];
    let casesCriticalTitleKey = Object.keys(data[0].cases)[2];
    let casesRecoveredTitleKey = Object.keys(data[0].cases)[3];
    let casesTotalTitleKey = Object.keys(data[0].cases)[4];
             //Printing above keys entries on html page
       
        document.getElementById("casesKey0").innerHTML = casesNewTitleKey;
        document.getElementById("casesKey1").innerHTML = casesActiveTitleKey;
        document.getElementById("casesKey2").innerHTML = casesCriticalTitleKey;
        document.getElementById("casesKey3").innerHTML = casesRecoveredTitleKey;
        document.getElementById("casesKey4").innerHTML = casesTotalTitleKey;
    
//Getting Cases data values to print on HTML5 page, these values are going to span ids on html5 page
    
    let newCasesNum = data[0].cases.new;
    let activeCasesNum = data[0].cases.active;
    let criticalCasesNum = data[0].cases.critical;
    let recoveredCasesNum = data[0].cases.recovered;
    let totalCasesNum = data[0].cases.total;
          //Printing above data values entries on html page
       
    document.getElementById("casesValue0").innerHTML = newCasesNum;  
    document.getElementById("casesValue1").innerHTML = activeCasesNum;   
    document.getElementById("casesValue2").innerHTML = criticalCasesNum;     
    document.getElementById("casesValue3").innerHTML = recoveredCasesNum;  
    document.getElementById("casesValue4").innerHTML = totalCasesNum;

//Getting Deaths data values to print on HTML5 page, these values are going to span ids on html5 page

        let deathsNewTitleKey = Object.keys(data[0].deaths)[0];  
        let deathsTotalKey = Object.keys(data[0].deaths)[1];

 document.getElementById("deathsKey0").innerHTML = deathsNewTitleKey;  
  document.getElementById("deathsKey1").innerHTML = deathsTotalKey ;  

        let newDeathsNum = data[0].deaths.new; 
        let totalDeathsNum = data[0].deaths.total;   
         document.getElementById("deathsValue0").innerHTML = newDeathsNum;
          document.getElementById("deathsValue1").innerHTML = totalDeathsNum;
        
    let testsTotalKey = Object.keys(data[0].tests)[0];  
  document.getElementById("testsKey0").innerHTML = testsTotalKey;  

  
  
        let totalTests = data[0].tests.total;   
    document.getElementById("testsValue0").innerHTML = totalTests;  

    
   updateChart(totalCasesNum, totalDeathsNum, recoveredCasesNum, countryName);
   

    })
    
     
}
// I am executing here print document to display UK value by default
printToDocument("UK");


function getDate() {
let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

return today;

}


 /*document.getElementById("today_date").innerHTML = getDate(); */
