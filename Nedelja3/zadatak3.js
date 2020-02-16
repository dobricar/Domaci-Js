let niz = [1, 2, 3, 4, 5, 10, 15, 23, 1, 5]

function divisibleByFive(array) {
    let deljivi = [];
    for (let element of array) {
        if (element % 5 === 0) {
            deljivi.push(element);
        }

    }
    return deljivi;
}

let deljiviSaPet = divisibleByFive(niz);
console.log(deljiviSaPet);
