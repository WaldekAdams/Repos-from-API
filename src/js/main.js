"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const btnTake = document.querySelector('.take--js');
const ulList = document.querySelector('.list--js');

btnTake.addEventListener('click', () => {
  console.log('ok')
  if (!ulList.innerHTML.includes('li')) {
    console.log('huj')
    fetch('https://api.github.com/users/WaldekAdams/repos')
      .then(resp => resp.json())
      .then(resp => {
        const repos = resp;
        for (const repo of repos) {
          ulList.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a></li>`
        }
      })
  }
})

console.log(`Hello world!`);