const filterOutOdds = (...args) => args.filter(a => a % 2 === 0);

function findMin(...numbers){
    return Math.min(...numbers);
}

const mergeObjects = (obj1, obj2) => ({...obj1,obj2});

const doubleAndReturnArgs = (arr, ...args) =>[...arr, ...args.map(a => a*2)];

let removeRandom = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return[...items.slice(0, i), ...items.slice(i + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}