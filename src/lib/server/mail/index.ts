import nodemailer from 'nodemailer';

// Create a transporter object using Mailpit's SMTP server
export const transporter = nodemailer.createTransport({
	host: 'localhost',
	port: 1025,
	secure: false,
	tls: {
		rejectUnauthorized: false
	}
});

export const sendMail = (url: string, mail: string) => {
	const mailHtml = `
	<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Svelte Magic Link Auth</title>
	</head>
	<body style="background-color: rgb(253, 245, 235)">
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 1rem;
			"
		>
			<h2>Svelte Magic Link Auth</h2>
			<p>This work with Magic Link Auth</p>
			<a
				style="
					background-color: aquamarine;
					padding: 10px;
					border-radius: 5px;
					text-decoration: none;
					color: rgb(51, 50, 50);
					font-size: large;
					font-weight: bold;
				"
				target="_blank"
				href="${url}"
				>Login with Magic Link</a
			>
		</div>
	</body>
</html>
	`;

	// Set up email data
	const mailOptions = {
		from: 'sender@example.com',
		to: mail,
		subject: 'Test Email from Nodemailer',
		html: mailHtml
	};

	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log('Error on mail sending occurred:', error);
		} else {
			console.log('Email sent:-', info.response);
		}
	});
};
