//this file is for form to take use data and send an email.
function sendMail(contactForm) {
    emailjs.send("gmail", "ashur_kanwal", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                alert("E-MAIL SUCCESSFULLY SENT", response);
            },
            function (error) {
                alert("ERROR RECEIVED SENDING E-MAIL", error);
            }
        );
    return false;  // To block from loading a new page
}

