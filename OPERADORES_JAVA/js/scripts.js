// 1 - Number

console.log(typeof 2);
console.log(typeof 5.85);
console.log(typeof -856);

// 2 - Ops. aritméticas

console.log(6 / 3);
console.log(6 * 3);
console.log(5 + 4 * 2);

// 3 Special numbers

console.log(typeof Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - String

console.log("Mais um texta")
console.log('Mais um texta 23')
console.log(typeof "Mais um texta")
console.log(typeof 'Mais um texta 23')

// 5- Simbolos especiais em string

console.log("Testa a quebra \n de linha");
console.log("Testa a tab \t de linha");

// 6 - concatenação

console.log("oi," + "tudo" + "bem?");

// 7 - Interpolação 

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8 - Boolean

console.log(true);
console.log(5 > 10);

// 9 Comparações 

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

//  10 Identico

console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 -  Operadores logicos

console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "mathes" === 1); // False (e = &&)
console.log(5 > 2 || "mathes" === 1);  // True (ou = ||)

console.log(5 > 2 || 5 < 100);
console.log(!true);

// 12 - Empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos

console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);




