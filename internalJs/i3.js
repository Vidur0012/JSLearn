//promises in fetch api
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response){
        if(!response.ok)    //generating error manually
            throw new Error(`Country not found (${response.status})`);
        console.log(response);

        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(err=>{console.log(err.message)})
    .finally(()=>{
        console.log("definetely executed.");
    });
};
getCountryData('portugal');