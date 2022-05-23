let conditionToBeMet = true;

async function myPromise() {
    const result = await new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (conditionToBeMet) {
                resolve('promise resolved');
            } else {
                reject("promise rejected");
            }
        }, 3000);
    });

    return result;
};

myPromise()
    .then(res => console.log('Success: ' + res))
    .catch(err => console.log('Error: ' + err));


async function fetchDog() {
    let myDog = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json());

    console.log('myDog result: ', myDog);
    console.log('status: ', myDog.status);

    var imgtag = document.createElement('img');
    imgtag.setAttribute('src', myDog.message);
    document.body.appendChild(imgtag);
}

fetchDog();

//Walthrough assignment for a promise
const L05Promise = new Promise ((reslove, reject) => {
setTimeout(function() { 
    reslove("Testing: 1, 2, 3!!");
}, 5000);
});

L05Promise.then(result => console.log(result));

const L05promise2 = new Promise((resolve, reject) =>{
setTimeout(function(){
    resolve("Hello? Can you hear me?")
}, 3000);

});

L05promise2.then(result => console.log(result));

const L05Promise3 = new Promise((resolve, reject) => {
setTimeout(function(){
    reject("Something went wrong!")
}, 4000);
});

L05Promise3.catch(err => console.log(err));