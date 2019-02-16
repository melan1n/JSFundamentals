function solve() {
  let buttons = document.getElementsByTagName('button');
  let furnitureDiv = document.getElementById("furniture-list");
  let resultArea = document.getElementsByTagName('textarea')[1];

  let generateBtn = buttons[0];

  generateBtn.addEventListener('click', () => {
      let furnitureInput = document.getElementById("exercise").children[1].value;
      let items = JSON.parse(furnitureInput);

      for (let item of items) {
          let itemDiv = document.createElement('div');
          itemDiv.className = "furniture";

          let pName = document.createElement('p');
          pName.textContent = `Name: ${item.name}`;
          itemDiv.appendChild(pName)

          let img = document.createElement('img');
          img.src = item.img;
          itemDiv.appendChild(img);

          let pPrice = document.createElement('p');
          pPrice.textContent = `Price: ${item.price}`;
          itemDiv.appendChild(pPrice);

          let pDecoration = document.createElement('p');
          pDecoration.textContent = `Decoration factor: ${item.decFactor}`;
          itemDiv.appendChild(pDecoration)

          let checkBox = document.createElement('input');
          checkBox.type = "checkbox";
          checkBox.checked = "checked";
          itemDiv.appendChild(checkBox)

          furnitureDiv.appendChild(itemDiv);

      }
  })
    let buyBtn = buttons[1];
     buyBtn.addEventListener('click', () => {
      let items = Array.from(document.querySelectorAll('#furniture-list .furniture'));
      let selectedItems = [];
         for (let item of items) {

             if (item.children[4].checked === true) {
                 let name = getValue(item.children[0].textContent);
                 let price = +(getValue(item.children[2].textContent));
                 let decFactor = +(getValue(item.children[3].textContent));

                 selectedItems.push({name, price, decFactor})
             }
         }
      let selectedItemsNames = selectedItems.map(i => i.name);
      let totalPrice = selectedItems.map(i => i.price).reduce((a, b) => {
         return a + b;
      }) ;
      let averageDecorationFactor = selectedItems.map(i => i.decFactor).reduce((a, b) => {
          return a+b;
      }) / selectedItems.length;

      resultArea.innerHTML = `Bought furniture: ${selectedItemsNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`;
  })

    function getValue(str){
         let tokens = str.split(': ');
         return tokens[1];
    }
}