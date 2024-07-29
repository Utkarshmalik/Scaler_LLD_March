
const nodemailer = require("nodemailer");


//array of emailIds on which email has to be sent 

const sendEmail = (emails, subject, html,text)=>{

    const emailIds = emails.join(', ');

    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"utkarsh.malik_1@scaler.com",
            pass:"tmltxwrxgvqucrmv"
        }
    });

    let mailDetails = {
        from:'utkarsh.malik_1@gmail.com',
        to:emailIds,
        subject
    }

    if(html){
        mailDetails.html = html;
    }

    if(text){
        mailDetails.text=text;
    }


    transporter.sendMail(mailDetails, function(err,data){

        if(err){
            console.log("Unable to send email",err);
        }else{
            console.log(`Email sent successfully to ${emailIds}`);
        }

    })



}



module.exports = {
    sendEmail
}