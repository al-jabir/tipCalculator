const billInput = document.getElementById('billTotalInput');

const tipInput = document.getElementById('tipInput');

const numberOfPeopleDiv = document.getElementById('numberOfPeople');

const perPersonTotal = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// console.log(numberOfPeople);

// console.log(billTotalInput, tipInput, perPersonTotal);

const calculateBill = () => {
  // get bill from user input & convert it into a number

  const bill = Number(billInput.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  //   console.log(bill);

  const tipPercentage = Number(tipInput.value) / 100;
  //   console.log(tipPercentage);
  // get the total tip amount
  const tipAmount = bill * tipPercentage;

  //   console.log(tipAmount);
  // calculate the total (tip amount + bill)

  const total = tipAmount + bill;

  //   console.log(calculateTotal);

  // calculate the per person total (total divided by number of people)
  const perTotal = total / numberOfPeople;

  console.log(perTotal);

  // update the perPersonTotal on DOM & show it to user
};

const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
  calculateBill();
};

const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  // decrement the amount of people

  // update the DOM with the new number of people

  // calculate the bill based on the new number of people
  calculateBill();
};
