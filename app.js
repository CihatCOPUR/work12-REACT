const isimler=[`ahmet`, `can`, `canan`];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);




const diller = [`c++`,`javascript`,`assembly`,`go`,`ruby`];
console.log(diller);
const numbers=new Array(3,2,1);
console.log(numbers);

const numbers1=new Array(10);
console.log(numbers1);

const veriler=Array.of(1,2,3);
console.log(veriler);


const veri =Array.of(`deneme`);
console.log(veri);

const bos =[];
console.log(bos);


console.log(diller[1]);
const go = diller[3];
console.log(go);
console.log(isimler[isimler.length-1]);

console.log(isimler.at(-1));



// const isimler =[`ahmet`, `can`, `canan`];

isimler[1]=`saffet`;
console.log(isimler);

console.log(numbers);

numbers[numbers.length-1]+=1;
console.log(numbers);


numbers[numbers.length-1]++;
console.log(numbers);

const yaslar=[22,44,55];
const kisiler =[`ahmmet`,`can`,2022,2022-1990,yaslar];

console.log(kisiler);



const arabalar=[`bmw`,`mervedes`,`fiat`,`anadol`];
console.log(arabalar);
arabalar.pop;
console.log(arabalar);
const silinen= arabalar.pop();
console.log(arabalar,silinen);


const n = arabalar.push(`citroen`);
console.log(arabalar,n);


const n1= arabalar.unshift(`audi`);
console.log(arabalar, n1);

const audi = arabalar.shift();
console.log(arabalar,audi);


arabalar.splice(1,0,`jetta`);
console.log(arabalar);


arabalar.splice(3,1,`golf`, `civic`);
console.log(arabalar);


arabalar.reverse();
console.log(arabalar);



const sayilar=[2,11,3,1,22,5,333,7,6];
sayilar.sort();
console.log(sayilar);

isimler.sort();
console.log(isimler);


sayilar.fill(3);
console.log(sayilar);


sayilar.fill(-1,3);
console.log(sayilar);