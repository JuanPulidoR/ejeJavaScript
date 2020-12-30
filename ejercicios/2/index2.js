var word;
var arr = [];
var arri = [];
var z = [];

dato = () => {
  word = document.getElementById("data").value;
  console.log(word);

  arr = word.split("");
  ultima = () => arr[arr.length - 1];
  inver = () => {
    arri = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      arri.push(arr[i]);
    }
    coma = arri.toString();
    return arri.toString().replace(",", "");
    //return coma
  };
  aToZ = () => arr.sort();
  zToA = () => {
    let inver = [];
    z = [];
    inver = arr.sort();
    for (let i = inver.length - 1; i >= 0; i--) {
      z.push(inver[i]);
    }
    return z.toString();
  };

  console.log(arr);
  console.log(`Tiene ${arr.length} letras`);
  console.log(`La primera palabra es ${arr[0]}`);
  console.log(`La ultima letra es ${ultima()}`);
  console.log(`La palabra inversa es ${inver()}`);
  console.log(`Las palabras ordenadas de la A a la Z ${aToZ()}`);
  console.log(`Las palabras ordenadas de la Z a la A ${zToA()}`);
};
