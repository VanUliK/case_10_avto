fetch("./price.json")
  .then((response) => response.json())
  .then((data) => priceShow(data))
  // .then((data) => console.log(data))
  .catch((error) => console.error(error));

function priceShow(data) {
  // Object.entries(data);

  console.log(data)
  let arr = Object.entries(data);


  for (let index = 0; index < 16; index++) {
    let part = data[index];
    let arr = Object.entries(part);

    // console.log(part.value);
    // console.log(part.element);
    // pillars.value = data[2]
  };

}
