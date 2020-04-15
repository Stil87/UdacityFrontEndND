
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: "YOUR_APP_ID",
    application_key: "YOUR_APP_KEY"
});



function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //use aylienapi to check the text
    textapi.sentiment({
        'text': formText,
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            document.getElementById('results').innerHTML = response
        }
    });



   /*  // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        }) */
}

export { handleSubmit }