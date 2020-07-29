/**
 
 A demo lambda for Alexa skill that asks for the user's name and then greets the user by the name.
 
*/

exports.handler = async (event) => {
    

    console.log("Input event: " + JSON.stringify(event));
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    let output =  {
        "version": "1.0",
            "sessionAttributes": {},
            "response": {
                "outputSpeech": {
                    "type": "SSML",
                    "ssml": "Hi there!",
                },
                "card": {
                    "type": "Simple",
                    "title": "Hello There! skill",
                    "content": "A skill that always says hi."
                },
                "reprompt": {
                    "outputSpeech": {
                      "type": "SSML",
                      "ssml": "Won't need a reprompt for now."
                    }
                },
                "shouldEndSession": true
            }
        };
    return output;
};
