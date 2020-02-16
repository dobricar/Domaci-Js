let brojPica = 0;
let dodajBtnElement = document.querySelector('#dodajBtn');
let brPorucenihPicaElement = document.querySelector('#brPorucenihPicas');
brPorucenihPicaElement.innerHTML = brojPica;
let naruciBtnElement = document.querySelector('#naruciBtn');
let porukaElement = document.querySelector('#poruka');

function dodajPicu() {
    brojPica++;
    brPorucenihPicaElement.innerHTML = brojPica;
}

function naruciPicu() {

    if (brojPica > 0) {
        let vreme = new Date();
        porukaElement.innerHTML = `Narucili ste ${brojPica} pica ${vreme.getDate()}.${vreme.getMonth()+1}.${vreme.getFullYear()}. u ${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`;
        brojPica = 0;
        brPorucenihPicaElement.innerHTML = brojPica;
    }
    else {
        porukaElement.innerHTML = `Ne mozete naruciti 0 pica`;
    }
}

dodajBtnElement.addEventListener('click', () => { dodajPicu() });
naruciBtnElement.addEventListener('click', () => { naruciPicu()});


