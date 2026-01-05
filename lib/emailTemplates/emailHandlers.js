import SES from "aws-sdk/clients/ses";
import { webinarEmailTemplate } from "./webinarTemplate";

class EmailHandlers {

    constructor({ to, subject, templateData }) {

        this.to = to;
        this.subject = subject;
        this.templateData = templateData;

        this.ses = new SES({
            region: process.env.SES_REGION,
            accessKeyId: process.env.SES_ACCESS_KEY,
            secretAccessKey: process.env.SES_SECRET_KEY,
        });

    }

    async sendEmail() {

        const htmlBody = webinarEmailTemplate(this.templateData);

        const from = `RJTI Charts <${process.env.SES_EMAIL}>`;

        const params = {
            Source: from, // verified sender
            Destination: {
                ToAddresses: [this.to],
            },
            Message: {
                Subject: {

                    Data: this.subject,
                    Charset: "UTF-8",
                },
                Body: {
                    Html: {
                        Data: htmlBody,
                        Charset: "UTF-8",
                    },
                    Text: {
                        Data: this.templateData?.infoMsg || "",
                        Charset: "UTF-8",
                    },
                },
            },
        };

        try {

            const result = await this.ses.sendEmail(params).promise();
            console.log("✅ Email sent:", result.MessageId);
            return result;

        } catch (error) {

            console.error("❌ SES email error:", error);
            throw new Error("Email sending failed");

        }
    }
}

export default EmailHandlers;
