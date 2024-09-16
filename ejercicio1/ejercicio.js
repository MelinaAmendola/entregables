// EJERCICIO  
//Consumir una API publica que les guste y
// consumirla con el método fetch.
// Luego, una vez obtenidos los datos, vamos a
// mostrarlos en el navegador (pueden darle formato de card)

"use strict"
// let contenedor = document.getElementById("contenedor");

// Explicación Karen
// fetch("https://finalspaceapi.com/api/v0/character")
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))

// fetch("https://finalspaceapi.com/api/v0/character")
// .then(resp => resp.json())
// .then(data =>{
//     data.results.forEach(personaje => {
//         contenedor.innerHTML += `<h3>Nombre: ${personaje.name} </h3>`
//     })
// })
// .catch(err => console.log(err))


function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getCharacters(data => {
    //    console.log(data);
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/ `
            <article>
            <div class="imagenes">
                <img src="${personaje.image}" alt="Personaje">
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </div>
            </article>
            `);
            const main = document.querySelector("main"); 
            main.append(article);
    })
}) 