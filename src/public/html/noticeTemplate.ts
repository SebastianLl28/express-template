export const noticeTemplate = (nombre: string): string => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
img,p{margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (min-width: 481px) {
h1,img,p{margin:0;Margin:0}.t11,.t15,.t24,.t26{width:280px!important}img,p{font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}h1{font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2,h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-weight:400;font-style:normal;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{line-height:30px;font-size:24px}h3{line-height:26px;font-size:20px}.t26{padding:40px 60px 50px!important}.t19{width:260px!important}.t32,.t36,.t38{width:400px!important}.t38{padding-left:0!important;padding-right:0!important}
}
</style>
<style type="text/css">@media (min-width: 481px) {[class~="x_t26"]{padding-left:60px!important;padding-top:40px!important;padding-bottom:50px!important;padding-right:60px!important;width:280px!important;} [class~="x_t15"]{width:280px!important;} [class~="x_t11"]{width:280px!important;} [class~="x_t19"]{width:260px!important;} [class~="x_t24"]{width:280px!important;} [class~="x_t38"]{padding-left:0px!important;padding-right:0px!important;width:400px!important;} [class~="x_t36"]{width:400px!important;} [class~="x_t32"]{width:400px!important;}}</style>
<style type="text/css" media="screen and (min-width:481px)">.moz-text-html img,.moz-text-html p{margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html .t26{padding:40px 60px 50px!important;width:280px!important}.moz-text-html .t11,.moz-text-html .t15{width:280px!important}.moz-text-html .t19{width:260px!important}.moz-text-html .t24{width:280px!important}.moz-text-html .t38{padding-left:0!important;padding-right:0!important;width:400px!important}.moz-text-html .t32,.moz-text-html .t36{width:400px!important}</style>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&amp;family=Albert+Sans:wght@800&amp;display=swap" rel="stylesheet" type="text/css" />
</head>
<body id=body class=t43 style="min-width:100%;Margin:0px;padding:0px;background-color:#000000;"><div class=t42 style="background-color:#000000;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t41 style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#000000;" valign=top align=center>
<table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center id=innerTable><tr><td align=center>
<table class=t4 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<td class=t3 style="width:320px;padding:40px 40px 40px 40px;">
<table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100%!important;"><tr><td align=center>
<table class=t2 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<td class=t1 style="width:55px;">
<div style="font-size:0px;"><img class=t0 style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width=55 height=36.4375 alt="" src="https://8e7dd7a9-9e1b-4201-9f37-43676ccbfa35.b-cdn.net/e/11b37e60-1671-47b0-9ec1-4b33290862f2/6dbb79ba-c218-4149-921e-c0c77968aaa1.png"/></div></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td align=center>
<table class=t29 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<td class=t28 style="background-color:#FFFFFF;width:400px;">
<table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100%!important;"><tr><td align=center>
<table class=t9 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<td class=t8 style="background-color:#FF4040;width:320px;padding:40px 40px 40px 40px;">
<table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100%!important;"><tr><td align=center>
<table class=t7 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=200 class=t6>
<![endif]-->
<!--[if !mso]>-->
<td class=t6 style="width:200px;">
<!--<![endif]-->
<div style="font-size:0px;"><img class=t5 style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width=200 height=200 alt="" src="https://8e7dd7a9-9e1b-4201-9f37-43676ccbfa35.b-cdn.net/e/11b37e60-1671-47b0-9ec1-4b33290862f2/e6f88dfe-581f-4707-9c63-3bec42e2405c.png"/></div></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td align=center>
<table class=t27 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=400 class=t26 style="padding:30px 30px 40px 30px;">
<![endif]-->
<!--[if !mso]>-->
<td class=t26 style="width:340px;padding:30px 30px 40px 30px;">
<!--<![endif]-->
<table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100%!important;"><tr><td align=center>
<table class=t12 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=280 class=t11>
<![endif]-->
<!--[if !mso]>-->
<td class=t11 style="width:340px;">
<!--<![endif]-->
<h1 class=t10 style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:35px;font-weight:800;font-style:normal;font-size:30px;text-decoration:none;text-transform:none;letter-spacing:-1.2px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Hola, ${nombre}, se cambio su contraseña</h1></td>
</tr></table>
</td></tr><tr><td><div class=t13 style="mso-line-height-rule:exactly;mso-line-height-alt:16px;line-height:16px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align=left>
<table class=t16 role=presentation cellpadding=0 cellspacing=0 style="Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=280 class=t15>
<![endif]-->
<!--[if !mso]>-->
<td class=t15 style="width:340px;">
<!--<![endif]-->
<p class=t14 style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#555555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p></td>
</tr></table>
</td></tr><tr><td><div class=t17 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align=center>
<table class=t20 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=280 class=t19 style="background-color:#FF4040;overflow:hidden;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;">
<![endif]-->
<!--[if !mso]>-->
<td class=t19 style="background-color:#FF4040;overflow:hidden;width:320px;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;">
<!--<![endif]-->
<span class=t18 style="display:block;margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Complete your registration</span></td>
</tr></table>
</td></tr><tr><td><div class=t23 style="mso-line-height-rule:exactly;mso-line-height-alt:12px;line-height:12px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align=center>
<table class=t25 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=280 class=t24>
<![endif]-->
<!--[if !mso]>-->
<td class=t24 style="width:340px;">
<!--<![endif]-->
<p class=t22 style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#555555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">or <a class=t21 href="#" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#000000;mso-line-height-rule:exactly;" target=_blank>log in</a> to your account</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td><div class=t30 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align=center>
<table class=t39 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=400 class=t38 style="padding:0 40px 0 40px;">
<![endif]-->
<!--[if !mso]>-->
<td class=t38 style="width:320px;padding:0 40px 0 40px;">
<!--<![endif]-->
<table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100%!important;"><tr><td align=center>
<table class=t33 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=400 class=t32>
<![endif]-->
<!--[if !mso]>-->
<td class=t32 style="width:320px;">
<!--<![endif]-->
<p class=t31 style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:18px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#555555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash is a webtool that is a free open source JavaScript framework that can be accessed from a browser or mobile device in a Web browser.</p></td>
</tr></table>
</td></tr><tr><td><div class=t35 style="mso-line-height-rule:exactly;mso-line-height-alt:8px;line-height:8px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align=center>
<table class=t37 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width=400 class=t36>
<![endif]-->
<!--[if !mso]>-->
<td class=t36 style="width:320px;">
<!--<![endif]-->
<p class=t34 style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:18px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#555555;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash Inc. All rights reserved</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td><div class=t40 style="mso-line-height-rule:exactly;mso-line-height-alt:100px;line-height:100px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div></body>
</html>`
