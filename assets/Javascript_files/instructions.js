'use strict'
function changefuncHealthyPeople() {
    document.getElementById("instructions-para").innerHTML = `People with mild symptoms who are otherwise healthy should self-isolate and contact
                        their medical provider or a COVID-19 information line for advice on testing and referral. Even if you are healthy and not have symptoms of 
                        Covid-19 still you have to mainitain social distancing for their are high chances you becoming a virus carrier.
                        . If you think you may have symptoms of COVID-19 you should use the NHS 111 online service for information, or NHS 24 if in Scotland.`

    document.getElementById("instructions-img").src = "assets/Images/img23.jpg";
    document.getElementById("info-button").innerHTML = "For more information visit NHS"
    document.getElementById("info-button").href = "https://www.nhs.uk/";
document.getElementById("instructions-heading").innerHTML = "Instructions for Healthy People";

   
}

function changefuncOldPeople() {

    document.getElementById("instructions-img").src = "assets/Images/oldPeople.jpg";

    document.getElementById("instructions-para").innerHTML = `More severe symptoms such as pneumonia, seem to be more common in older people, 
 those with weakened immune systems or long-term conditions. COVID-19 pandemic across the world tells us very clearly that those aged 70 
 and over are at increased risk if they catch COVID-19. If you think you may have symptoms of COVID-19 you should use the NHS 111 online service for information, or NHS 24 if in Scotland. `;
    document.getElementById("info-button").innerHTML = "For more information visit NHS"
    document.getElementById("info-button").href = "https://www.nhs.uk/";
    document.getElementById("instructions-heading").innerHTML = "Instructions for Old People";
}

function changefuncPeopleHealthcondi() {
    document.getElementById("instructions-img").src = "assets/Images/pregnant.jpg";
    document.getElementById("instructions-para").innerHTML = ` Generally, pregnant women do not appear to be more likely 
to be seriously unwell than other healthy adults if they develop coronavirus. 
It is expected the large majority of pregnant women will experience only mild or 
moderate cold/flu like symptoms. Cough, fever, shortness of breath, headache and loss 
of sense of smell are other relevant symptoms.
If you think you may have symptoms of COVID-19 you should use the NHS 111 online service for information, or NHS 24 if in Scotland.`
    document.getElementById("info-button").innerHTML = "For more information Royal College of Obstetricians & Gynaecologists";
    document.getElementById("info-button").href = "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/";
      document.getElementById("instructions-heading").innerHTML = "Instructions for Pregnant women";
}

function changefuncchilderenandfamilies(){

      document.getElementById("instructions-heading").innerHTML = "Instructions for Childeren and families";
    document.getElementById("instructions-img").src = "assets/Images/img15.jpg";
    document.getElementById("instructions-para").innerHTML = `UK Government allows, parents do not live in the same household, childeren under 18 
    can moved betwen their parents homes. Their is advice aviliable at COVID-19 guidance for children and families <a href="https://www.cafcass.gov.uk/" target="_blank">(cafcass)</a> to encourage effective co-parenting 
    and to help maintian your child's routine in these uncertain times. 
    It is important that families amicably try to find solutions that are in the 
    best interests of the child and the health of those around them.  If someone in family have symptoms must stay at home isolated from others in family until the symptoms ended and in
all cases for at least seven days. Everyone else in the household must stay at home for at least
14 days after the first person symptoms appear, even if they themselves have no symptoms.`;
    document.getElementById("info-button").innerHTML = "For more information visit NHS"  
document.getElementById("info-button").href = "https://www.nhs.uk/";
}

