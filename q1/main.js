function recursive (n) 
{
    console.log(n);
    if(n > 1) return n * recursive (n-1);
    else return 1;
}

recursive (3);