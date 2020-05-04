
function changefuncHealthyPeople() {
   document.getElementById("instructions-para").innerHTML = `People with mild symptoms who are otherwise healthy should self-isolate and contact
					    their medical provider or a COVID-19 information line for advice on testing and referral.`
    
    document.getElementById("instructions-img").src = "assets/Images/img23.jpg";
   
      document.getElementById("instructions-img").width = "500"; 
                   

                    }

function changefuncOldPeople() {

       document.getElementById("instructions-img").src = "assets/Images/img21.jpg";
       document.getElementById("instructions-img").height = "250"; 
              document.getElementById("instructions-img").width = "350"; 
 document.getElementById("instructions-para").innerHTML = `Advice for those who are 60 and over is to wash your hand and maintain social distancing becaue if they are contacted
 with virus their are high chances of serious illness.`
    
                    }