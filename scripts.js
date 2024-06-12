function accepted () {
  alert("Obrigado por aceitar Débora sua linda sz! :)");
  // redireciona para um URL após clicar no SIM
  location.href = "https://music.youtube.com/watch?v=2Vv-BfVoq4g&list=RDCLAK5uy_l23RCAvZe7rrMs3bX7S4vYGmwo5J3FTQc";
}

function newPosition(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

function declined(btn) {
  // btn declarado na função
  btn.style.position = 'absolute';
  btn.style.bottom = newPosition(10, 90);
  btn.style.left = newPosition(10, 90);
  console.log('ops......');
}
