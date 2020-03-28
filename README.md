# Twilio WhatsApp chabot 

## Get started
To get started with this repo, clone it and run `npm install` in the root directory.
Then head over to [Twilio](https://www.twilio.com/) and sign up if you don't already have an account.

I would recommend trying out the (Twilio WhatsApp tutorial)[https://www.twilio.com/console/sms/whatsapp/learn] to learn how to send and receive 
messages.

After that you can add the following environment variables to your repo:
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_NUMBER 
- USER_NUMBER

The TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN can be found in the (Twilio console)[https://www.twilio.com/console]
The TWILIO_NUMBER in this case is the number you sent WhatsApp messages to in the tutorial above and the USER_NUMBER is the one you received messages from/ your WhatsApp number. 

After adding in those environment variables, you would need to deploy this app so that it can be reachable online. I use (Heroku)[https://heroku.com/] a lot for deploying and I would recommend giving them a try. 

 Once you have it deployed, you would need to get the url to that app and add it as a webhook
 in the (WhatsApp Sandbox)[https://www.twilio.com/console/sms/whatsapp/sandbox] and in the field that says 'WHEN A MESSAGE COMES IN'. This will then call your app whenever a WhatsApp message is sent to the TWILIO_NUMBER and return a response. 

Thats it! Now you can test the chatbot by sending 'hey'. The bot should respond with a welcome message. 

This is a WIP so let me know if you have challenges running the repo.