function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adii.dg.2021@gmail.com",
        Password : "80BAB4FD9D4904446AEAA2AD29CE90637338",
        To : 'avdhutgurav1065@gmail.com',
        From : 'adii.dg.2021@gmail.com',
        Subject : "New Enquiry from : "+document.getElementById("mail").value,
        Body : "Name : "+document.getElementById("name").value
                +"<br> Email : "+document.getElementById("mail").value
                +"<br> Phone No."+document.getElementById("phone").value
                +"<br> Message : "+document.getElementById("message").value
    }).then(
      message => alert("Thank You for Contacting Us, We will get back to you soon")
    );
}