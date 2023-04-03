fetch("./price.json")
  .then((response) => response.json())
  .then((data) => priceShow(data))
  .catch((error) => console.error(error));

function priceShow(data) {
  console.log();
  // const templateEl = document.querySelector('.template');
  // const itemGroup = document.querySelector('.featuredItems');


  // for (let index = 0; index < 6; index++) {

  //   const element = data[index];
  //   const itemEl = templateEl.content
  //     .querySelector(".item_block")
  //     .cloneNode(true);

  //   const featuredItemAttribute = itemEl.querySelector(".featuredItem");
  //   featuredItemAttribute.setAttribute('data-id', element.id);
  //   featuredItemAttribute.setAttribute('data-name', element.head);
  //   featuredItemAttribute.setAttribute('data-price', element.price);
  //   const headingEl = itemEl.querySelector(".featuredName");
  //   headingEl.textContent = element.head;
  //   const dscItem = itemEl.querySelector(".featuredText");
  //   dscItem.textContent = element.description;
  //   const priceEl = itemEl.querySelector(".featuredPrice");
  //   const redSize = priceEl.querySelector('.featuredPrice_color');
  //   redSize.textContent = '$' + element.price.toFixed(2);
  //   const imgEl = itemEl.querySelector(".featuredImg");
  //   imgEl.src = element.image;
  //   itemGroup.appendChild(itemEl)
  // };


  // clickButton.addEventListener('click', function (e) {
  //   const templateEl = document.querySelector('.template');
  //   const itemGroup = document.querySelector('.featuredItems');
  //   for (let index = 6; index < 12; index++) {

  //     const element = data[index];
  //     const itemEl = templateEl.content
  //       .querySelector(".item_block")
  //       .cloneNode(true);

  //     const featuredItemAttribute = itemEl.querySelector(".featuredItem");
  //     featuredItemAttribute.setAttribute('data-id', element.id);
  //     featuredItemAttribute.setAttribute('data-name', element.head);
  //     featuredItemAttribute.setAttribute('data-price', element.price);
  //     const headingEl = itemEl.querySelector(".featuredName");
  //     headingEl.textContent = element.head;
  //     const dscItem = itemEl.querySelector(".featuredText");
  //     dscItem.textContent = element.description;
  //     const priceEl = itemEl.querySelector(".featuredPrice");
  //     const redSize = priceEl.querySelector('.featuredPrice_color');
  //     redSize.textContent = '$' + element.price.toFixed(2);
  //     const imgEl = itemEl.querySelector(".featuredImg");
  //     imgEl.src = element.image;
  //     itemGroup.appendChild(itemEl)
  //   };

  //   clickButton.classList = 'hidden'
  // });
}