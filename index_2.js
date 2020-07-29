/**
 
 A demo lambda for Alexa skill that asks for the user's name and then greets the user by the name.
 
*/

exports.handler = async (event) => {
    

    console.log("Input event: " + JSON.stringify(event));
    let output = null;


    if (event.request && event.request.type === "LaunchRequest") {
	    // handle LaunchRequest

	    output =  {
	        "version": "1.0",
            "sessionAttributes": {
            	"userFirstName": null
            },
            "response": {
                "outputSpeech": {
                    "type": "SSML",
                    "ssml": "<speak>Hi, what's your name?</speak>",
                },
                "reprompt": {
                    "outputSpeech": {
                      "type": "SSML",
                      "ssml": "<speak>Please tell me your first name.</speak>"
                    }
                },
                "card": {
                    "type": "Simple",
                    "title": "Hello There! skill",
                    "content": "A skill that always says hi."
                },
                "shouldEndSession": false
            }
        };
	} else if (event.request && event.request.type === "IntentRequest" &&
		event.request.intent && event.request.intent.name === "MyNameIntent" &&
		event.request.intent.slots && event.request.intent.slots["FirstNameSlot"] &&
		event.request.intent.slots["FirstNameSlot"].value) {
		// handle MyNameIntent

		// extract user's first name
		let userFirstName = event.request.intent.slots["FirstNameSlot"].value;
		
		//extract session attributes in case they contain other staste variables besides name.
		let sessionAttributes = event.session.attributes;

		//update session attributes with the user's first name
		sessionAttributes["userFirstName"] = userFirstName;

		output =  {
	        "version": "1.0",
            "sessionAttributes": sessionAttributes,
            "response": {
                "outputSpeech": {
                    "type": "SSML",
                    "ssml": `<speak>Hello, ${userFirstName}, nice to meet you.</speak>`,
                },
                "reprompt": {
                    "outputSpeech": {
                      "type": "SSML",
                      "ssml": `<speak>Hello there, ${userFirstName}.</speak>`
                    }
                },
                "card": {
                    "type": "Simple",
                    "title": "Hello There! skill",
                    "content": "A skill that always says hi."
                },
                "shouldEndSession": true
            }
        };
	}

    console.log("Final response: " + JSON.stringify(output));

    return output;
};
