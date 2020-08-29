const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'sudeepgupta423@gmail.com',
        subject: 'Thanks for joining in!',
        text: `welcome to the app, ${name} . Let me know how you get along with the app`,
    })
}

const sendByeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'sudeepgupta423@gmail.com',
        subject: 'Saying good bye',
        text: `GOOD BYE , ${name} , Have a nice day!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail,
}