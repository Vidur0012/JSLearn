//promises in fetch api
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            if (!response.ok)    //generating error manually
                throw new Error(`Country not found (${response.status})`);
            console.log(response);

            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(err => { console.log(err.message) })
        .finally(() => {
            console.log("definetely executed.");
        });
};
getCountryData('portugal');

navigator.geolocation.getCurrentPosition(res => console.log(res), err => console.error(err));
// Promisifying the Geolocation API
const getPosition = function () {
    return new Promise(function (resolve, reject) {

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
// getPosition().then(pos => console.log(pos));


//consuming promises with async await

const whereAmI2 = async function(country){
    try{
        console.log("main t");
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if(!res.ok){
            throw new Error("Something went wrong!");
        }
        const data = await res.json();
        console.log(data);
        console.log("country data from async function");
        return `You are in ${data.city} city.`;
    }
    catch(err){
        console.log(err.message);
    }
}
whereAmI2('portugal').then(res=>console.log(res));