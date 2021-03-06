module.exports = function (type, params) {
	var main;

	if (type == 'signup') main = `
		<p>Thanks for getting started with CALM.! We need a little more process to complete your registration, including confirmation of your email address. Click below to confirm your email address: ` +
		'<a href="${URL}" style="color: 26a7f5">${URL}</a></p>' +
		`<p>If you have problems, please paste the above URL into your web browser.</p>
	`;
	if (type == 'reset-password') main = `
		<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.
		Please click on the following link, or paste this into your browser to complete the process:
		<a href='${params.host}/reset_password.html?token=${params.token}'>${params.host}/reset_password.html?token=${params.token}</a></p>
		<p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
	`;
	if (type == 'af-report') main = `
		<p>Patient:${params.patient}<br>${params.token}:
		<a href='${params.host}ecg/${params.dataset}/${params.date}'>${params.host}ecg/${params.dataset}/${params.date}</a></p>
		<p>
		<img src='${params.patientPhoto}' class='patient-photo'>
		</p>
	`;

	var template = `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">

		<head>
			<meta name="viewport" content="width=device-width" />
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>Actionable emails e.g. reset password</title>
			<style>
				{
					margin: 0;
					padding: 0;
					font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
					box-sizing: border-box;
					font-size: 14px;
				}
				img {
					max-width: 100%;
				}
				body {
					-webkit-font-smoothing: antialiased;
					-webkit-text-size-adjust: none;
					width: 100% !important;
					height: 100%;
					line-height: 1.6;
				}
				table td {
					vertical-align: top;
				}
				.body-wrap {
					width: 100%;
				}
				.container {
					display: block !important;
					max-width: 700px !important;
					margin: 0 auto !important;
					clear: both !important;
				}
				.content {
					max-width: 600px;
					margin: 0 auto;
					display: block;
					padding: 20px;
				}
				.main {
					background: #fff;
					border: 1px solid #e9e9e9;
					border-radius: 3px;
				}
				.content-wrap {
					padding: 20px;
					background: white;
				}
				.content-block {
					padding: 0 0 20px;
				}
				.header {
					width: 100%;
					margin-bottom: 20px;
				}
				.footer {
					width: 100%;
					clear: both;
					color: #999;
					padding: 20px;
				}
				.footer a {
					color: #999;
				}
				.footer p,
				.footer a,
				.footer unsubscribe,
				.footer td {
					font-size: 12px;
				}
				.column-left {
					float: left;
					width: 50%;
				}
				.column-right {
					float: left;
					width: 50%;
				}
				h1,
				h2,
				h3 {
					font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
					color: #000;
					margin: 40px 0 0;
					line-height: 1.2;
					font-weight: 400;
				}
				h1 {
					font-size: 32px;
					font-weight: 500;
				}
				h2 {
					font-size: 24px;
				}
				h3 {
					font-size: 18px;
				}
				h4 {
					font-size: 14px;
					font-weight: 600;
				}
				p,
				ul,
				ol {
					margin-bottom: 10px;
					font-weight: normal;
				}
				p li,
				ul li,
				ol li {
					margin-left: 5px;
					list-style-position: inside;
				}
				a {
					color: #26a7f5;
					text-decoration: underline;
				}
				.btn-primary {
					text-decoration: none;
					color: #FFF;
					background-color: #348eda;
					border: solid #348eda;
					border-width: 10px 20px;
					line-height: 2;
					font-weight: bold;
					text-align: center;
					cursor: pointer;
					display: inline-block;
					border-radius: 5px;
					text-transform: capitalize;
				}
				.last {
					margin-bottom: 0;
				}
				.first {
					margin-top: 0;
				}
				.padding {
					padding: 10px 0;
				}
				.aligncenter {
					text-align: center;
				}
				.alignright {
					text-align: right;
				}
				.alignleft {
					text-align: left;
				}
				.clear {
					clear: both;
				}
				.alert {
					font-size: 16px;
					color: #fff;
					font-weight: 500;
					padding: 20px;
					text-align: center;
					border-radius: 3px 3px 0 0;
				}
				.alert a {
					color: #fff;
					text-decoration: none;
					font-weight: 500;
					font-size: 16px;
				}
				.alert.alert-warning {
					background: #ff9f00;
				}
				.alert.alert-bad {
					background: #d0021b;
				}
				.alert.alert-good {
					background: #68b90f;
				}
				.invoice {
					margin: 40px auto;
					text-align: left;
					width: 80%;
				}
				.invoice td {
					padding: 5px 0;
				}
				.invoice .invoice-items {
					width: 100%;
				}
				.invoice .invoice-items td {
					border-top: #eee 1px solid;
				}
				.invoice .invoice-items .total td {
					border-top: 2px solid #333;
					border-bottom: 2px solid #333;
					font-weight: 700;
				}
				@media only screen and (max-width: 640px) {
					h1, h2, h3, h4 {
						font-weight: 600 !important;
						margin: 20px 0 5px !important;
					}
					h1 {
						font-size: 22px !important;
					}
					h2 {
						font-size: 18px !important;
					}
					h3 {
						font-size: 16px !important;
					}
					.container {
						width: 100% !important;
					}
					.content,
					.content-wrapper {
						padding: 10px !important;
					}
					h3 {
						font-size: 32px!important;
						font-weight: bold!important;
						margin-top: 0px!important;
					}
					.invoice {
						width: 100% !important;
					}
				}
				a:hover {
					color: #26a7f5;
				}
			</style>
		</head>

		<body>
			<div style="width:100% !important;background:#f2f2f2;margin:0;padding:0;" bgcolor="#f2f2f2;">
				<table class="body-wrap" style="font-family: Helvetica,arial,sans-serif; color: #666666; font-size: 14.5px; line-height: 20px; padding: 30px; margin: 0 auto;    max-width: 700px;">
					<tr>
						<td></td>
						<td class="container">
							<div class="content">
								<table class="main" width="100%" cellpadding="0" cellspacing="0">
									<tr>
										<td class="content-wrap" style="background: white; padding: 20px">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr>
													<td class="content-block" style="text-align:left;">
														<img src="http://52.33.117.221/assets/email-template/calm.jpg" width="300px">
														<h3 style="font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;color: #000;margin: 40px 0 0;line-height: 1.2;font-weight: 400;">Hi</h3> ` +
		main +
		`<br>
														<p>Thanks<br>TEST.</p>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td></td>
					</tr>
				</table>
			</div>
		</body>

		</html>

	`;

	return template;
};