// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let numbers = 0;
  let avgPrice = 0;

  for (x = 0; x < data.length; x++){
    numbers += data[x].price;
  }
  avgPrice = numbers/data.length;
  console.log(avgPrice);
  return avgPrice;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let midPrice = []

    for(x = 0; x <data.length; x++){
      if ((data[x].price >= 14.00) && data[x].price <= 18.00){
        midPrice.push(data[x].title);
      }
    }
  console.log(midPrice);
return midPrice;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (x = 0; x < data.length; x++){
    if (data[x].currency_code === "GBP"){
    console.log(data[x].title);
    console.log(data[x].price);
  }
}
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let array = [];
  for (x = 0; x < data.length; x++){
    for (i = 0; i < data[x].materials.length; i++){
      if (data[x].materials[i].includes("wood")){
        array += data[x].title;
    }
  }
}
console.log(array);
return array;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let items = [];
  for (x = 0; x < data.length; x++){
    if (data[x].materials.length >= 8){
      items.push(data[x].title + ", " + data[x].materials.length + ", " + data[x].materials);
    }
  }
  console.log(items);
  return items;
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let name = []
  let value
  for (x = 0; x < data.length; x++){
    if (data[x].who_made.includes("i_did")){
      name.push(data[x].title);
    }
  }
  console.log(name.length);
  value = name.length;
  return value;
}
