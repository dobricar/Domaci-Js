let n = 15;
let x = '#';
for (let i = 0; i <= n; i++) {  
    x = (' '.repeat(n-i)) + ('#'.repeat(i)) + ' ' + ('#'.repeat(i));
  console.log(x);
}   