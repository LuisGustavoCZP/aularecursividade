const matriz = 
[
    [
        ["000", "001", "002", "003"],
        ["010", "011", "012", "013"],
        ["020", "021", "022", "023"],
        ["030", "031", "032", "033"],
    ],
    [
        [100, 101, 102, 103],
        [110, 111, 112, 113],
        [120, 121, 122, 123],
        [130, 131, 132, 133],
    ],
    [
        [200, 201, 202, 203],
        [210, 211, 212, 213],
        [220, 221, 222, 223],
        [230, 231, 232, 233],
    ],
    [
        [300, 301, 302, 303],
        [310, 311, 312, 313],
        [320, 321, 322, 323],
        [330, 331, 332, 333],
    ]
];

function isString (myVar) 
{
    return (typeof myVar === 'string' || myVar instanceof String);
}

function recursive (mtz) 
{
    if(mtz.length == undefined || isString(mtz)) {
        console.log(mtz);
        return;
    }
    mtz.forEach(x =>
    {
        recursive(x);
    });
}

recursive (matriz);