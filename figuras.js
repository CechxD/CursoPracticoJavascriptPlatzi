//Codigo Cuadrado.
const ladoCuadrado = 5;
const perimetoCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group(`Resultados del calculo del cuadrado:`)
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm.`);
console.log(`El perimetro del cuadrado es: ${perimetoCuadrado} cm.`);
console.log(`El area del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd();

//Codigo Triangulo.
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.group(`Resultados del calculo del triangulo:`);
console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm.`);
console.log(`La altura del triangulo mide: ${alturaTriangulo} cm.`);
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm.`);
console.log(`El area del triangulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

//Codigo Circulo.
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
const circunferenciaCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.group(`Resultados del calculo del circulo:`);
console.log(`El radio del circulo es: ${radioCirculo} cm.`);
console.log(`El diametro del circulo es: ${diametroCirculo} cm.`);
console.log(`PI es: ${pi}`);
console.log(`El perimetro del circulo es: ${circunferenciaCirculo} cm.`);
console.log(`El area del circulo es: ${areaCirculo} cm^2.`);
console.groupEnd();