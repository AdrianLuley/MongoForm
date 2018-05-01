const express = require('express')
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function (req, res) {
    var name = req.body.user_name;
    var message = req.body.user_message;
    var email = req.body.user_mail;
    var number = req.body.user_tel;
    var url = req.body.user_url;
    var contactMethod = req.body.user_contact;
  
    var msg = req.body.user_message;
    var myDate = req.body.myDate;

    console.log("Name: " + name);
    
    console.log("E-Mail: " + email);
    console.log("Phone Number:" + number);
   
  
    console.log("How many Guest will you be bring:" + contactMethod);
    console.log("Yes I'll be there!!!" + yes);
    console.log("I am sorry I can't make it" + no);
    
    

    res.send(`
    <h1>Thanks ${name}!</h1>
    <p>Thank you for your RSVP for our event, we will email you with further information<strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);