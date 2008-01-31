// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Smeat
// @namespace     http://nothingtoseehere.com/imnotreal
// @description   shhh
// @include       *
// ==/UserScript==

var questions = {'A company cannot market or sell within a transactional email.': 'False',
 'According to CAN-SPAM, may the unsub link in commercial emails be located below the fold if there are adequate visual cues for the recipient to scroll down?': 'Yes',
 'Addresses collected before the CAN-SPAM law took effect are exempt from the law.': 'False',
 'Are "the 4" CAN-SPAM inclusions required for non-commercial emails?': 'No',
 'CAN-SPAM applies only to addresses collected after the date the law went into effect.': 'False',
 'CAN-SPAM defines "affirmative consent" as the recipient expressly consented in response to a clear and conspicuous request for their consent OR at the recipient\'s own initiative.': 'True',
 "CAN-SPAM defines ''affirmative consent'' as the recipient expressly consented in response to a clear and conspicuous request for their consent OR at the recipient's own initiative.": 'True',
 'CAN-SPAM does not have ANY subject-line requirements.': 'False',
 'CAN-SPAM limits how many emails a company can send per campaign.': 'False',
 'CAN-SPAM prohibits false headers and deceptive subject lines in commercial emails.': 'True',
 'CAN-SPAM prohibits sending a commercial email to someone more than ____ business days following their opt-out request.': '10',
 'CAN-SPAM requires clear and conspicuous notice in commercial emails of ability to opt out.': 'True',
 'CAN-SPAM requires senders to use "ADV:" in their subject lines.': 'False',
 "CAN-SPAM requires senders to use ''ADV:'' in their subject lines.": 'False',
 'CAN-SPAM requires that the sender have a valid physical postal address and include that address in its commercial emails.': 'True',
 'CAN-SPAM requires working unsubscribe functionality in commercial emails (either through return email address or an internet-based mechanism such as a web page).': 'True',
 'Can individuals located in any state sue for violations of CAN-SPAM?': 'No',
 'Client transactional and relationship emails are free from any CAN-SPAM obligations.': 'False',
 'Compliance with CAN-SPAM does not guarantee deliverability.': 'True',
 'Does CAN-SPAM apply to emails sent by a US company to its European customers?': 'Yes',
 'Does CAN-SPAM apply to non-commercial invitations?': 'No',
 'Does CAN-SPAM apply to non-commercial surveys?': 'No',
 'Does CAN-SPAM require disclosures and unsubscribe links in purchase confirmations and other transactional emails?': 'No',
 'Does a non-commercial newsletter require the 4 Required Inclusions of CAN-SPAM?': 'No',
 'If a sender does not have affirmative consent, then CAN-SPAM requires clear and conspicuous notice if the email is an advertisement or solicitation.': 'True',
 'In a nut shell, Opt-In consent describes situations where the recipient actively requests to receive email.': 'True',
 'In a nut shell, Opt-in consent describes situations where the recipient actively requests to receive email.': 'True',
 'Individual state laws that deal explicitly with permission supercede CAN-SPAM.': 'False',
 'Must an organization have permission (prior consent) to send email to an individual?': 'No',
 'On the typical registration screen, when the box is pre-checked, that describes Opt-In Consent.': 'False',
 'Promoting a good brand image requires marketers to ask permission before sending email (unlike CAN-SPAM).': 'False',
 'Promoting a good brank image requires marketers to ask permission before sending email (unlike CAN-SPAM).': 'False',
 'The CAN-SPAM Act does not have different requirements for sending commercial email to wireless domains than the more commonly used domains such as yahoo, hotmail, and gmail.com.': 'False',
 'The CAN-SPAM Act does not require senders to obtain prior express consent before sending a commercial email to a wireless domain.': 'False',
 'The FTC provides guidance on placement, prominence, distractions, and understandability of unsub language in commercial emails.': 'True',
 'The FTC provides quidance on placement, prominence, distractions, and understandability of unsub language in commercial emails.': 'True',
 'Transactional and relationship emails are required to include the CAN-SPAM 4 Required Inclusions.': 'False',
 'Transactional or relationship emails, such as emails that deliver account statements, are subject to which of the following requirements?': 'Only the prohibition against false or misleading transmission information',
 'Under CAN-SPAM, a company can share email addresses between divisions.': 'True',
 'Under CAN-SPAM, an individual does not have private right of action, but they can file a complaint with the FTC.': 'True',
 'Under CAN-SPAM, if an advertiser holds itself out as a division or line of business when sending email, the opt-out has to apply to the entire company.': 'False',
 'Under CAN-SPAM, what entity has the strongest power of enforcement?': 'FTC',
 "Under CAN-SPAM, you must include clear and conspicuous notice in commercial emails of a recipient's ability to opt out, and the text can be in a different language than the rest of your email.": 'False',
 'Which of the following are likely to improve email deliverability?': 'All of the above',
 "Which of the following drive an email program's impact on a company brand?": 'Mailing cadence and IP address',
 'Without "affirmative consent," a pre-existing business relationship is necessary to send commercial email under CAN-SPAM.': 'False',
 "Without ''affirmative consent,'' a pre-existing business relationship is necessary to send commercial email under CAN-SPAM.": 'False'};

var can_spam = function () {
  var target = document.getElementById('can-spam');
  target.innerHTML = "Refreshing...";
  var text = document.body.innerHTML;
  for( key in questions ) {
    if( document.body.innerHTML.indexOf(key) > -1 ) {
      target.innerHTML = questions[key];
      return;
    }
  }
  target.innerHTML = "";
};

var d = document.createElement('div');
d.id = 'can-spam';
s = d.style;
s.position = "absolute";
s.bottom   = "0px";
s.right    = "20px";
d.addEventListener('click', can_spam,true);
document.body.appendChild(d);
can_spam();



