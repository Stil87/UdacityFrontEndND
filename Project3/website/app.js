/* Global Variables */
//create the variables for API request
let apiKey = '&appid=XXXXX';

let api = `http://api.openweathermap.org/data/2.5/weather?q=`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// add eventlistener to the generate button 
document.getElementById('generate').addEventListener('click', generate);

async function generate() {
    //get City
    let city = document.getElementById('city').value;
    //get feelings
    let feelings = document.getElementById('feelings').value;

    //get temp from open weather app

    await fetchApi(api + city + apiKey)
        .then((temp) => {
            console.log(`app: fetched temp from ow: ${temp}`)
            const dataObject = createObject(temp, city, feelings);
            console.log(`app: created dataObject: ${dataObject}`)
            postData('/addData', dataObject)
                .then(() => {
                    get().then((data) => updateUI(data));


                })



        });


}
//updating the ui
function updateUI(data) { 
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('temp').innerHTML = data.tempFetch;
    document.getElementById('content').innerHTML = data.feelingInput;

}
//create the data object
function createObject(temp, city, feelings) {
    console.log(`app: selected cits ${city}`)
    console.log(`app: selected feeling ${feelings}`)
    return { cityInput: city, tempFetch: temp, feelingInput: feelings, date: newDate }
}


// fetch the openweather map api to get temp
async function fetchApi(api) {
    //get the temp
    let temp
    await fetch(api).then((fetch) =>
        fetch.json()
    ).then(data => {
        console.log(data.main.temp)
        temp = data.main.temp

    });

    return temp;


}



//post data from client to server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    try {
       let data =  await response.json();
            console.log(`postData response`)
            console.log(data)
            
        

    } catch (e) {
        console.log(`error ${e}`)
    }
}

//get the last dataobject from server
const get = async () => {
    const res = await fetch('/lastObject');
    console.log(`app: get: res from server: ${res}`)
    try {
        const data = await res.json();
        console.log(`app: get:  try return data: `)
        console.log(data)
        return data;

    } catch (e) { console.log(`error ${e}`) }
}


