let cost = 64.3;
let euro = 200;
let diff = euro - cost;
if (cost - euro > 0) {
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje ostaje isto'+' '+ euro);
}
else
{
    console.log('Uspesno ste kupili proizvod');
    console.log('Trenutno stanje izmenjeno'+' '+ diff);
}