const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "eric.li.8736@gmail.com",
  from: "draydere@gmail.com", // Use the email address or domain you verified above
  subject: "Word of the Day",
  text: "and easy to do anywhere, even with Node.js",
  html: `<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee">
  <div class="Gmail" style="height: 1px !important; margin-top: -1px !important; max-width: 600px !important; min-width: 600px !important; width: 600px !important;"></div>
  <div style="display: none; max-height: 0px; overflow: hidden;">
    Paste your preview text here***
  </div>
  <!-- Insert &zwnj;&nbsp; hack after hidden preview text -->
  <div style="display: none; max-height: 0px; overflow: hidden;">
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>


  <!-- VIEW ONLINE -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container" style="padding: 18px 0px 0px 0px!important; mso-padding-alt: 18px 0px 0px 0px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#eeeeee">
        <tr>
          <td align="center" bgcolor="#eeeeee">
            <a href="http://paulgoddarddesign.com/emails/material-design" target="_blank" style="font-size: 12px; line-height: 14px; font-weight: 500; font-family: 'Roboto Mono', monospace; color: #212121; text-decoration: underline;padding: 0px; border: 1px solid #eeeeee; display: inline-block;">View Online</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- VIEW VIEW ONLINE -->

  <!-- START LOGO -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container" style="padding: 18px 0px 18px 0px!important; mso-padding-alt: 18px 0px 18px 0px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="100%" valign="top" align="center">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#eeeeee">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
                          <!-- START HEADER IMAGE -->
                          <tr>
                            <td align="center" class="hund" width="600">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/material-email-logo.png" width="300" alt="Logo" border="0" style="max-width: 300px; display:block; ">
                            </td>
                          </tr>
                          <!-- END HEADER IMAGE -->
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END LOGO -->

  <!-- START CARD 1 -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container" style="padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius: 3px; border-bottom: 2px solid #d4d4d4;" class="card-1" width="100%" valign="top" align="center">
                  <table style="border-radius: 3px;" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#ffffff">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                          <!-- START HEADER IMAGE -->
                          <tr>
                            <td align="center" class="hund ripplelink" width="600">
                              <img align="center" width="600" style="border-radius: 3px 3px 0px 0px; width: 100%; max-width: 600px!important" class="hund" src="http://paulgoddarddesign.com/emails/images/material-design/material.gif">
                            </td>
                          </tr>
                          <!-- END HEADER IMAGE -->
                          <!-- START BODY COPY -->
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                              Material Design Email Template
                            </td>
                          </tr>
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                              This is an html email template based on Google's Material Design. This template has been tested on 33 major email clients using Litmus Builder. Feel free to use this for whatever purpose.
                              <br><br>
                              Enjoy! :)
                            </td>
                          </tr>
                          <!-- END BODY COPY -->
                          <!-- BUTTON -->
                          <tr>
                            <td align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td>
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="left" style="border-radius: 3px;" bgcolor="#17bef7">
                                          <a class="button raised" href="http://paulgoddarddesign.com/email-marketing" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #17bef7; display: inline-block;">BUTTON</a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- END BUTTON -->
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END CARD 1 -->

  <!-- START CARD 2 -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container" style="padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius: 3px; border-bottom: 2px solid #d4d4d4;" class="card-1" width="100%" valign="top" align="center">
                  <table style="border-radius: 3px;" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#ffffff">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                          <!-- START HEADER IMAGE -->
                          <tr>
                            <td align="center" class="hund ripplelink" width="600">
                              <img align="center" width="600" style="border-radius: 3px 3px 0px 0px; width: 100%; max-width: 600px!important" class="hund" src="http://paulgoddarddesign.com/emails/images/material-design/material-header-2.jpg">
                            </td>
                          </tr>
                          <!-- END HEADER IMAGE -->
                          <!-- START BODY COPY -->
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                              This is a Headline
                            </td>
                          </tr>
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </td>
                          </tr>
                          <!-- END BODY COPY -->
                          <!-- BUTTON -->
                          <tr>
                            <td align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td>
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="left" style="border-radius: 3px;" bgcolor="#234688">
                                          <a class="button raised" href="http://paulgoddarddesign.com/email-marketing" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #234688; display: inline-block;">BUTTON</a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- END BUTTON -->
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END CARD 2 -->

  <!-- START CARD 3 -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container" style="padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius: 3px; border-bottom: 2px solid #d4d4d4;" class="card-1" width="100%" valign="top" align="center">
                  <table style="border-radius: 3px;" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#ffffff">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                          <!-- START HEADER IMAGE -->
                          <tr>
                            <td align="center" class="hund ripplelink" width="600">
                              <img align="center" width="600" style="border-radius: 3px 3px 0px 0px; width: 100%; max-width: 600px!important" class="hund" src="http://paulgoddarddesign.com/emails/images/material-design/material-header-3.jpg">
                            </td>
                          </tr>
                          <!-- END HEADER IMAGE -->
                          <!-- START BODY COPY -->
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                              This is a Headline
                            </td>
                          </tr>
                          <tr>
                            <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </td>
                          </tr>
                          <!-- END BODY COPY -->
                          <!-- BUTTON -->
                          <tr>
                            <td align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td>
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="left" style="border-radius: 3px;" bgcolor="#8856FF">
                                          <a class="button raised" href="http://paulgoddarddesign.com/email-marketing" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #8856FF; display: inline-block;">BUTTON</a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- END BUTTON -->
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END CARD 3 -->


  <!-- START COLUMNS -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#eeeeee" style="max-width: 600px;">
        <tr>
          <td width="100%" align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
              <!-- 2 COLUMNS -->
              <tr>
                <td align="center" class="wrapper" style="max-width:600px!important;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <!-- LEFT COLUMN -->
                          <table align="left" border="0" cellpadding="0" cellspacing="0" class="stack" width="290px" bgcolor="#eeeeee">
                            <tr>
                              <td style="padding: 0px 0px 18px 0px;">
                                <table border="0" cellpadding="0" cellspacing="0" class="card-1" style="border-bottom: 2px solid #d4d4d4;">
                                  <tbody>
                                    <tr>
                                      <td class="ripplelink" align="left" width="600">
                                        <img src="http://paulgoddarddesign.com/emails/images/material-design/material-header-4.jpg" width="600" style="border-radius: 3px 3px 0px 0px; display: block; border: 0px; width: 100%; max-width: 600px;" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td bgcolor="#ffffff" class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                                        Left Column
                                      </td>
                                    </tr>
                                    <tr>
                                      <td bgcolor="#ffffff" class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                      </td>
                                    </tr>
                                    <!-- END BODY COPY -->
                                    <!-- BUTTON -->
                                    <tr>
                                      <td bgcolor="#ffffff" align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                            <td>
                                              <table border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                  <td align="left" style="border-radius: 3px;" bgcolor="#fc3f1e">
                                                    <a class="button raised" href="http://paulgoddarddesign.com/email-marketing" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #fc3f1e; display: inline-block;">BUTTON</a>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- END BUTTON -->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!-- END LEFT -->

                          <!-- RIGHT COLUMN -->
                          <table align="right" border="0" cellpadding="0" cellspacing="0" class="stack" width="290px" bgcolor="#eeeeee">
                            <tr>
                              <td style="padding: 0px 0px 18px 0px;">
                                <table border="0" cellpadding="0" cellspacing="0" class="card-1" style="border-bottom: 2px solid #d4d4d4;">
                                  <tbody>
                                    <tr>
                                      <td class="ripplelink" align="left" width="600">
                                        <img src="http://paulgoddarddesign.com/emails/images/material-design/material-header-5.jpg" width="600" style="border-radius: 3px 3px 0px 0px; display: block; border: 0px; width: 100%; max-width: 600px;" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td bgcolor="#ffffff" class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                                        Right Column
                                      </td>
                                    </tr>
                                    <tr>
                                      <td bgcolor="#ffffff" class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                      </td>
                                    </tr>
                                    <!-- END BODY COPY -->
                                    <!-- BUTTON -->
                                    <tr>
                                      <td bgcolor="#ffffff" align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                            <td>
                                              <table border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                  <td align="left" style="border-radius: 3px;" bgcolor="#25e47a">
                                                    <a class="button raised" href="http://paulgoddarddesign.com/email-marketing" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #25e47a; display: inline-block;">BUTTON</a>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- END BUTTON -->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!-- END RIGHT -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <!-- END 2 COLUMNS -->
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END COLUMNS -->

  <!-- SPACER -->
  <!--[if gte mso 9]>
  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
    <tr>
      <td align="center" valign="top" width="600" height="18">
        <![endif]-->
        <tr><td height="18px"></td></tr>
        <!--[if gte mso 9]>
      </td>
    </tr>
  </table>
  <![endif]-->
  <!-- END SPACER -->

  <!-- FOOTER -->
  <tr>
    <td width="100%" valign="top" align="center" class="padding-container">
      <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
        <tr>
          <td width="100%" valign="top" align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#eeeeee">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                    <tr>
                      <!-- SOCIAL -->
                      <td align="center" width="300" style="padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/fb-icon.png"
                              height="24" alt="Facebook" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                            <td width="20"></td>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/twitter-icon.png"
                              height="24" alt="Twitter" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                            <td width="20"></td>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/linkedin-icon.png"
                              height="24" alt="Linkedin" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                            <td width="20"></td>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/instagram-icon.png"
                              height="24" alt="Instagram" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                            <td width="20"></td>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/youtube-icon.png"
                              height="24" alt="Youtube" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                            <td width="20"></td>
                            <td align="right" valign="top" class="social">
                              <a href="#"
                              target="_blank">
                              <img src="http://paulgoddarddesign.com/emails/images/material-design/github-icon.png"
                              height="24" alt="Github" border="0" style="display:block; max-width: 24px">
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <!-- END SOCIAL -->
                    </tr>
                    <tr>
                      <td class="td-padding" align="center" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 0px; padding-left: 0px!important; padding-right: 0px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 0px 0px 0px 0px;">
                        &copy; 2018 Footer Text
                      </td>
                    </tr>
                    <tr>
                      <td align="center" bgcolor="#eeeeee">
                        <a href="*|UNSUB|*" target="_blank" style="font-size: 12px; line-height: 14px; font-weight: 500; font-family: 'Roboto Mono', monospace; color: #212121; text-decoration: underline;padding: 0px; border: 1px solid #eeeeee; display: inline-block;">Unsubscribe</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- FOOTER -->

  <!-- SPACER -->
  <!--[if gte mso 9]>
  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
    <tr>
      <td align="center" valign="top" width="600" height="36">
        <![endif]-->
        <tr><td height="36px"></td></tr>
        <!--[if gte mso 9]>
      </td>
    </tr>
  </table>
  <![endif]-->
  <!-- END SPACER -->

</table>`,
};
//ES6
sgMail.send(msg).then(
  () => {},
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
//ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();
