const nodeMailer = require("nodemailer");

const sendEmail=(emailIds,subject,html,text)=>{

    let emailString = emailIds.reduce((acc,value)=>{

        if(acc===""){
            return value;
        }

        return acc + ", " + value;

    },"");


    let transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:"utkarshmalik06@gmail.com",
            pass:"amhhlqrdiyzhdzgv"
        }
    });


    let mailDetails = {
        from:"utkarshmalik06@gmail.com",
        to:emailString,
        subject:subject
    }

    if(html){
        mailDetails.html=html;
    }


    if(text){
        mailDetails.text=text;
    }
    
    transporter.sendMail(mailDetails,function(err,data){

        if(err){

            console.log("Unable to send email",err)
        }else{
            console.log("Email sent successfully");
        }

    })
}


module.exports= {
    sendEmail
}