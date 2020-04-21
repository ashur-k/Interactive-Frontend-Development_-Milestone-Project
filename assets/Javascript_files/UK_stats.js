

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://covid-19-uk-data-by-zt.p.rapidapi.com/GetUKTotalCounts");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-uk-data-by-zt.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");

xhr.send(data);



function getData(cb){

}