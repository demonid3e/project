"use strict";
// DEFER
// defer tell browser to load script in background
//and continue to load DOM element then run script.
// it never blocks loading
// it will wait until all content is loaded

//ASYNC
// will not wait until anything is loaded
// will load as soon as it ready

//Dynamicly created script will load as async
//you can add property async false to prevent it

const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("test.js");
loadScript();
