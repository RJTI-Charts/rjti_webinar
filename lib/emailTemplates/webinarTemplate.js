export function webinarEmailTemplate({
    fullName = "there",
    infoMsg = "",
    unsubscribeUrl = "#",
}) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style type="text/css">
    body {
      font-family: 'Poppins', Arial, sans-serif;
      font-size: 16px;
      color: #333;
      background-color: #f7f7f7;
      margin: 0;
      width: 100%;
    }
  </style>
</head>

<body>
  <table style="width: 100%; max-width: 700px; margin: 0 auto;">
    <tr>
      <td style="background: white; padding: 2rem; text-align: center; border-bottom: 5px solid #ffa32c;">
        <img
          src="https://asset-main.s3.us-east-2.amazonaws.com/common_assets/logo.png"
          alt="RJTI Charts"
          style="width:200px"
        />
      </td>
    </tr>

    <tr>
      <td style="padding: 20px;">
        <h1>Hi, ${fullName}</h1>
      </td>
    </tr>

    <tr>
      <td style="padding: 20px; font-size: 18px;">
        <p style="margin: 0;">
          ${infoMsg}
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding: 20px;">
        <p style="margin: 0;">Regards,</p>
        <p style="margin: 0;">Team RJTI Charts</p>
      </td>
    </tr>

    <tr>
      <td style="background-color: #333; padding: 20px; text-align: center;">
        <a
          href="https://www.rjticharts.com"
          target="_blank"
          style="text-decoration: none; color: #ffffff;"
        >
          www.rjticharts.com
        </a>
      </td>
    </tr>

    <tr>
      <td style="padding: 20px; text-align: center;">
        <a
          href="${unsubscribeUrl}"
          style="text-decoration: none; color: black; font-size: 12px;"
        >
          Unsubscribe
        </a>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}