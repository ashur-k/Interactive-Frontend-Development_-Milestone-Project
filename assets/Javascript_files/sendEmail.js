
function sendMail(contactForm) {
    emailjs.send("gmail", "ashur_kanwal", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("E-MAIL IS SUCCESSFULLY SENT", response);
        },
        function(error) {
            alert("E-MAIL SENDING FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

	