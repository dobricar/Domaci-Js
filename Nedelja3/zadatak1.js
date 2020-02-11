function getMax(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z) {
        return y;
    } else if (z > x && z > y) {
        return z;
    }
}

let max = getMax(5, 9, 3);
console.log(`Maksimalan broj od 3 ucitana broja je ${max}`);
