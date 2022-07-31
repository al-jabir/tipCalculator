const billInput = document.getElementById('billTotalInput');

const tipInput = document.getElementById('tipInput');

const numberOfPeopleDiv = document.getElementById('numberOfPeople');

const perPersonTotal = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);

  const tipPercentage = Number(tipInput.value) / 100;

  const tipAmount = bill * tipPercentage;

  const total = tipAmount + bill;

  const perTotal = total / numberOfPeople;

  console.log(perTotal);

  perPersonTotal.innerText = `${perTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople++;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    alert(`Hey, You can't have less than 1 person!`);
    return;
  }

  numberOfPeople--;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
