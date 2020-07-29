/**
 
 A demo lambda for Alexa skill that asks for the user's name and then greets the user by the name.
 
*/

exports.handler = async (event) => {
    

    console.log("Input event: " + JSON.stringify(event));
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
