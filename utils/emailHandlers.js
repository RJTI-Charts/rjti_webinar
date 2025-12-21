class EmailHandlers {

    constructor({
        to,
        subject,
        body = {
            name: '',
            text: '',
            link: ''
        }
    }) {
        this.to = to;
        this.subject = subject;
        this.body = body;
    }

    sendEmail() {

        // use cherio to load HTML template and populate with body data


        // send the email using aws ses

        // Example Logic to send email
        console.log(`Sending email to: ${this.to}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Body: ${this.body}`);

    }

}