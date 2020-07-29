/**
 
 A demo lambda for Alexa skill that asks for the user's name and then greets the user by the name.
 
*/

exports.handler = async (event) => {
    

    console.log("Input event: " + JSON.stringify(event));
    
    let output =  {
        "version": "1.0",
            "sessionAttributes": {},
            "response": {
                "outputSpeech": {
                    "type": "SSML",
                    "ssml": "<speak>Hi there!</speak>",
                },
                "card": {
                    "type": "Simple",
                    "title": "Hello There! skill",
                    "content": "A skill that always says hi."
                },
                "reprompt": {
                    "outputSpeech": {
                      "type": "SSML",
                      "ssml": "<speak>We won't need a reprompt for now.</speak>"
                    }
                },
                "shouldEndSession": true
            }
        };

    console.log("Final response: " + JSON.stringify(output));

    return output;
};
