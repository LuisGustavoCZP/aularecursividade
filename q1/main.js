function recursive (n) 
{
    console.log(n);
    if(n > 1) return n * recursive (n-1);
    else return 1;
}

function fatorial (n) 
{
    console.log(`O resultado de ${n}! é ${recursive (n)}`);
}

fatorial (5);