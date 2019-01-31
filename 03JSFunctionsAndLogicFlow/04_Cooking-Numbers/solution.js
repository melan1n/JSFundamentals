function solve() {
  let num = document.querySelector('#exercise input[type="number"]');
  let buttons = Array.from(document.getElementsByTagName('button'));
  let result = document.getElementById('output');

  function getCurrentNumber(){
      return +result.textContent || num.value;
  }

  buttons[0].addEventListener('click', chop);
  buttons[1].addEventListener('click', dice);
  buttons[2].addEventListener('click', spice);
  buttons[3].addEventListener('click', bake);
  buttons[4].addEventListener('click', fillet);

  function chop(){
    n = getCurrentNumber();
      n = n / 2;
      result.textContent = n.toString();
  }

   function dice(){
      n = getCurrentNumber();
      n = Math.sqrt(n);
      result.textContent = n.toString();
    }
    function spice(){
        n = getCurrentNumber();
        n = n+1;
        result.textContent = (n).toString();
    }
    function bake(){
        n = getCurrentNumber();
        n = (n*3);
        result.textContent = n.toString();
    }
    function fillet(){
        n = getCurrentNumber();
        n = 0.8 * n;
        result.textContent = n.toString();
    }
}
