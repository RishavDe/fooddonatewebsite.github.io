function sendMail()
{
    var params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    const serviceId = "service_xk83t92";
    const templateId = "template_14yizak";

    emailjs.sendMail(serviceId,templateId,params).then(
    res =>{
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("subject").value= "";
        document.getElementById("message").value="";
        console.log(res);
        alert("Message sent successfully!");
    }
    )
    .catch((error)=>console.log(error));
}


