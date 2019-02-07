# HappyNews
Tired of seeing your feeds filled with sensationalist fear-mongering stories? Shoot a text to Happy News and it'll send you uplifting news scraped right off of the front of [/r/UpliftingNews](https://www.reddit.com/r/upliftingnews).

## How to set-up

Get a free API key from [Twilio](https://www.twilio.com/) for sending automated text messages. Next, modify the creds.json file to include your account SID and authentication token. 

Install additional node dependencies with

```
npm install
```

and Serverless for easy deployment to an AWS CloudFormation stack using

```
npm install -g serverless
```

Then from the HappyNews directory, use serverless to deploy the Lambda function over S3.

```
serverless deploy
```

Finally, copy the "endpoint" uri printed out by serverless, and navigate to "All Products and Services" > "Phone Numbers" from your Twilio dashboard. Select your active phone number, and paste the uri into the field under Messaging labeled 'A Message Comes In'. Make sure 'HTTP Post' is selected to the right. Hit save and start enjoying HappyNews by texting the Twilio number.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
