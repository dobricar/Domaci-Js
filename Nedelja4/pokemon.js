//zadatak1-objekti i nizovi svih pokemona
// Zadatak 1.
let pokemon1 = {
    ime: 'Venusaur',
    vrsta: 'poison',
    sposobnosti: ['overgrow', 'chlorophyll'],
    karakteristike: {
        attack: 82,
        defense: 83,
        speed: 80
    },
    slika: 'venusaur.png'
}

let pokemon2 = {
    ime: 'Charmander',
    vrsta: 'fire',
    sposobnosti: ['blaze', 'SolarPower'],
    karakteristike: {
        attack: 52,
        defense: 43,
        speed: 65
    },
    slika: 'Charmander.png'
}

let pokemon3 = {
    ime: 'Wartortle',
    vrsta: 'water',
    sposobnosti: ['Torrent', 'RainDish'],
    karakteristike: {
        attack: 63,
        defense: 80,
        speed: 58
    },
    slika: 'Wartortle.png'
}

let pokemon4 = {
    ime: 'Raichu',
    vrsta: 'electric',
    sposobnosti: ['static', 'LightningRod'],
    karakteristike: {
        attack: 90,
        defense: 55,
        speed: 110
    },
    slika: 'Raichu.png'
}

//console.log(pokemon4);

let nizPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];



function sposobnostiPokemona(nizPokemona) {
    let noviNiz = [];
    for (let element of nizPokemona) {
        noviNiz.push(...element.sposobnosti);
        //noviNiz = noviNiz.concat(element.sposobnosti);
    }


    return noviNiz;
}

console.log(sposobnostiPokemona(nizPokemoni));

let nizPokemonaSortirani = nizPokemoni.sort((a, b) => {
    return a.karakteristike.speed - b.karakteristike.speed;
});

console.log(nizPokemonaSortirani);

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

// let najjaciPokemonih = nizPokemoni.sort((a, b) => {
//     return b.karakteristike.attack - a.karakteristike.attack


// });


function vratiNajacegPokemona(nizPokemona) {
    let najjaciPokemon;
    for (let pokemon of nizPokemoni) {
        if (!najjaciPokemon) {
            najjaciPokemon = pokemon;
        } else if (najjaciPokemon.karakteristike.attack < pokemon.karakteristike.attack) {
            najjaciPokemon = pokemon;
        }
    }
    return najjaciPokemon;
}

console.log('Ovo je najjaci pokemon');

console.log(vratiNajacegPokemona(nizPokemoni));




let wrapperElement = document.querySelector('.wrapper');
let buttonPrikaziPokemone = document.querySelector('#prikaz');
let buttonPrikaziPobednika = document.querySelector('#pobednik');

function iscrtajPokemona(pokemon) {
    let opis = `Ime: ${pokemon.ime} vrsta: ${pokemon.vrsta}`;
    let divElement = document.createElement('div');
    let pElement = document.createElement('p');
    pElement.textContent = opis;
    divElement.appendChild(pElement);
    let imgElement = document.createElement('img');
    imgElement.src = pokemon.slika;
    divElement.appendChild(imgElement);
    wrapperElement.appendChild(divElement);

}


function prikaziSvePokemone() {
    for (element of nizPokemoni) {
        iscrtajPokemona(element);
    }

}
function iscrtajNajacegPokemona() {
    let najjaciPokemon = vratiNajacegPokemona(nizPokemoni);
    iscrtajPokemona(najjaciPokemon);
    
}

buttonPrikaziPokemone.addEventListener('click', (event) => {
    prikaziSvePokemone();
})
buttonPrikaziPobednika.addEventListener('click', (event) => {
    iscrtajNajacegPokemona();
})

