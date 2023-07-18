
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
console.log(form);

form.addEventListener("submit",createPromise);

   

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve,reject) => {

    if (shouldResolve) {
      resolve("Hello,I am resolve"); // Fulfill
 } 
  
      reject("I am reject!");
  });
 
}



createPromise().then(onSuccess).catch(onError);

function onSuccess(resolve) {
  Notiflix.Notify.success(resolve);
}

function onError(reject) {

  Notiflix.Notify.failure(reject);
}


//!=================================================

// const makePromise = () => {

//   return new Promise((resolve,reject) => {

//     const passed = Math.random()>0.5;

//     if(passed) {

//       resolve("Ку-ку это resolve");

//     }

//     reject("Все пропало, это reject");

//   })
// }

// makePromise().then(res => console.log(res)).catch(err => console.log(err));
// const makeOrder = dish => {

//   const DELAY = 1000;
//   return  new Promise((resolve,reject) => {

//     const rand = Math.random() > 0.5;

//     setTimeout(() => {

//       if(rand) {

//         resolve(`${dish} is being prepared`);
//       }

//       reject(`${dish} can't be prepared`);
//     })

//   },DELAY);
// }

// makeOrder('пирожок').then(onSuccess).catch(onError);

// function onSuccess(result) {

//   console.log(result);

// }

// function onError (error) {

//   console.log(error);
// }

// function fetchPokemonId (id) {

//   return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(r => r.json())

// }

// fetchPokemonId(1).then(fetchOnSuccess).catch(fetchOnError);

// function fetchOnSuccess(pokemon) {

//   console.log(pokemon);
// }

// function fetchOnError(error)  {

//   console.log(error);
// }