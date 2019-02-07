const request = require('request-promise-native');
const cheerio = require('cheerio');

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const TwilioClient = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;



module.exports.handler = async (event, context, callback) => {
    console.log("wtf tho");
    const options = {
        uri: 'https://www.reddit.com/r/upliftingnews',
        transform: (body) => {
            return cheerio.load(body);
        }
    };
    return request(options)
        .then(($) => {
            const posts = $('.Post').not('.promotedlink');
            const num = Math.floor(Math.random() * posts.length);
            console.log(posts.length);
            const text = posts.eq(num).find('h2').text();
            const link = posts.eq(num).find('a[target=_blank]').last().attr('href');

            const response = {
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/xml'
                },
                body: new MessagingResponse().message(text + ' ' + link).toString()
            };

            callback(null, response);
        })
        .catch((error) => {
            console.log(error);
            callback(error);
        });
};
