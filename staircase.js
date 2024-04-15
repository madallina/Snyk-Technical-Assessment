function staircase(n){
    let x = '';
    let m = (n-1); 
    for(i=1; i <= n; i++){
        x = x.trim();
        x = ''.repeat(m) + x + (i > 1 ? ' ' : '') + '#';
        console.log(x);
        m--;
    }
    }
    staircase(4);