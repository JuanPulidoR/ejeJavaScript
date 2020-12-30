var n;
var s = [];
var a = 1;

dato = () => {

  location.reload(true); // refresca la pantalla 
  n = document.getElementById("data").value;
  n = parseInt(n);
  for (let i = 1; i < n + 1; i++) {
    s[i - 1] = i;
  }
  if (s.length == n) {
    for (let i = 0; i < s.length; i++) {
      a = a * s[i];
    }
  }
  alert(`El número es ${a}`);

  s = 0;
  n = 0;
  
};
