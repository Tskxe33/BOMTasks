"use strict";

const mathURL = "https://api.mathjs.org/v4";

// -----------------------------------------------
// ------------- VERSION 1 --------------
// -----------------------------------------------

// function calculateExpression(expr) {
//     return fetch(`${mathURL}?${expr}`).then(response => response.text());
// }

// function displayResult(result) {
//     document.getElementById('result').value = result;
// }

// document.forms[0].addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     const formElements = evt.target.elements;

//     const expr = new URLSearchParams();
//     expr.set('expr', formElements['math-expr'].value);

//     calculateExpression(expr).then(result => displayResult(result));
// });

// function calculateExpressions(exprs) {
//     return fetch(mathURL, { method: 'POST', body: exprs }).then(response => response.json());
// }

// function createExpressionListItem(expr, index) {
//     let li = document.createElement('li');
//     li.innerHTML = `<span></span> = <span id="${`result-${index}`}"></span>`;
//     li.getElementsByTagName('span')[0].textContent = expr;
//     return li;
// }

// function displayExpressions(exprs) {
//     let exprsUl = document.getElementsByTagName('ul')[0];
//     for (let i = 0; i < exprs.length; ++i) {
//          exprsUl.appendChild(createExpressionListItem(exprs[i], i));
//     }
// }

// function displayResults(results) {
//     for (let i = 0; i < results.length; ++i) {
//         document.getElementById(`result-${i}`).textContent = results[i];
//    }
// }

// document.getElementById('math-exprs').addEventListener('change', function(evt) {
//     if (!evt.target.files.length)
//         return;

//     evt.target.files[0].text()
//         .then(json => {
//             calculateExpressions(json).then(results => displayResults(results.result));
//             let exprs = JSON.parse(json);
//             displayExpressions(exprs.expr);
//         });
// });

async function calculateExpression(expr) {
  const response = await fetch(`${mathURL}?${expr}`);
  return await response.text();
}

// function calculateExpression(expr) {
//     return fetch(`${mathURL}?${expr}`).then(response => response.text());
// }

function displayResult(result) {
  document.getElementById("result").value = result;
}

document.forms[0].addEventListener("submit", async function (evt) {
  evt.preventDefault();
  const formElements = evt.target.elements;

  const expr = new URLSearchParams();
  expr.set("expr", formElements["math-expr"].value);

  // calculateExpression(expr).then((result) => displayResult(result));
  const response =  await calculateExpression(expr);
  displayResult(response)
});

async function calculateExpressions(exprs) {
  const response = await fetch(mathURL, { method: "POST", body: exprs });
  return await response.json();
}

function createExpressionListItem(expr, index) {
  let li = document.createElement("li");
  li.innerHTML = `<span></span> = <span id="${`result-${index}`}"></span>`;
  li.getElementsByTagName("span")[0].textContent = expr;
  return li;
}

function displayExpressions(exprs) {
  let exprsUl = document.getElementsByTagName("ul")[0];
  for (let i = 0; i < exprs.length; ++i) {
    exprsUl.appendChild(createExpressionListItem(exprs[i], i));
  }
}

function displayResults(results) {
  for (let i = 0; i < results.length; ++i) {
    document.getElementById(`result-${i}`).textContent = results[i];
  }
}

// document
//   .getElementById("math-exprs")
//   .addEventListener("change", function (evt) {
//     if (!evt.target.files.length) return;

//     evt.target.files[0].text().then((json) => {
//       calculateExpressions(json).then((results) =>
//         displayResults(results.result)
//       );
//       let exprs = JSON.parse(json);
//       displayExpressions(exprs.expr);
//     });
//   });

document
  .getElementById("math-exprs")
  .addEventListener("change", async function (evt) {
    if (!evt.target.files.length) return;

    const response = await evt.target.files[0].text();
    const results =  await calculateExpressions(response);
    
    let exprs = JSON.parse(response);
    displayExpressions(exprs.expr);
    displayResults(results.result);
  });
