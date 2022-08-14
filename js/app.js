// import {countTo} from './counter.js'
let myRoot = document.getElementById("root");
let calcArr = [];

//making random num function
randomNumber = () => {
  z = Math.floor(Math.random() * 14);
  return z;
};

// class with methods
class myDeck {
  constructor(symbol, number) {
    this.symbol = symbol;
    this.number = number;
  }
  render() {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    myRoot.appendChild(cardDiv);

    // קבלת המידע מתוך הקלף שנלחץ
    //select 2 cards, push to array - for comparing later
    cardDiv.addEventListener("click", (card) => {
      let pairNum = card.target.innerHTML.slice(0, -1);
      calcArr.push(pairNum)
      if(calcArr.length > 2){
        calcArr = []
      pairNum = card.target.innerHTML.slice(0, -1);
      calcArr.push(pairNum)
    }

      console.log(calcArr);
    });
    //printing on html
    cardDiv.innerHTML += `
        
        <P class="upheart">${this.number}${this.symbol}</P>
        <p class="midheart" >${this.number}${this.symbol}</p>
        <p class="downheart">${this.number}${this.symbol}</p> 
  `;
  }
// פונקציתת השוואה
  //compare static method
  static myStaticCalc(num1, num2) {
    if (num1 > num2) {
      return num1;
    }
    if(num1 < num2){
      return num2;
    }
  }}


// super bonus class

let cards = ["&#9824", "&#9826", "&#x2663", "&#x2764"];
const MyCards = [];

let counter = 0;
var x = 1;
while (x < 5) {
  // with the flags, each number can enter the array once
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let flag6 = false;
  let flag7 = false;
  let flag8 = false;
  let flag9 = false;
  let flag10 = false;
  let flag11 = false;
  let flag12 = false;
  let flag13 = false;

  while (MyCards.length < 13 * x) {
    let simpleCard = `${randomNumber()}`;
    if (flag1 === false) {
      if (simpleCard === "1") {
        MyCards.push(new myDeck(cards[x - 1], 1));
        flag1 = true;
      }
    }
    if (flag2 === false) {
      if (simpleCard === "2") {
        MyCards.push(new myDeck(cards[x - 1], 2));
        flag2 = true;
      }
    }
    if (flag3 === false) {
      if (simpleCard === "3") {
        MyCards.push(new myDeck(cards[x - 1], 3));
        flag3 = true;
      }
    }
    if (flag4 === false) {
      if (simpleCard === "4") {
        MyCards.push(new myDeck(cards[x - 1], 4));
        flag4 = true;
      }
    }
    if (flag5 === false) {
      if (simpleCard === "5") {
        MyCards.push(new myDeck(cards[x - 1], 5));
        flag5 = true;
      }
    }
    if (flag6 === false) {
      if (simpleCard === "6") {
        MyCards.push(new myDeck(cards[x - 1], 6));
        flag6 = true;
      }
    }
    if (flag7 === false) {
      if (simpleCard === "7") {
        MyCards.push(new myDeck(cards[x - 1], 7));
        flag7 = true;
      }
    }
    if (flag8 === false) {
      if (simpleCard === "8") {
        MyCards.push(new myDeck(cards[x - 1], 8));
        flag8 = true;
      }
    }
    if (flag9 === false) {
      if (simpleCard === "9") {
        MyCards.push(new myDeck(cards[x - 1], 9));
        flag9 = true;
      }
    }
    if (flag10 === false) {
      if (simpleCard === "10") {
        MyCards.push(new myDeck(cards[x - 1], 10));
        flag10 = true;
      }
    }
    if (flag11 === false) {
      if (simpleCard === "11") {
        MyCards.push(new myDeck(cards[x - 1], 11));
        flag11 = true;
      }
    }
    if (flag12 === false) {
      if (simpleCard === "12") {
        MyCards.push(new myDeck(cards[x - 1], 12));
        flag12 = true;
      }
    }
    if (flag13 === false) {
      if (simpleCard === "13") {
        MyCards.push(new myDeck(cards[x - 1], 13));
        flag13 = true;
      }
    }
    counter = counter + 1;
  }
  x++;
} // });
console.log(MyCards);

console.log(counter);

let myTitle = document.getElementById("title");

let myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
  myRoot.innerHTML = " ";
  myTitle.innerHTML = `<p>number of intertions is:<span id="my-sum"></span><br>
     total card sum is: <span id="card-sum"></span><br>
     number of duplicates is : 0  </p>`;
  countTo(counter, "#my-sum");
  countTo(52, "#card-sum");
  MyCards.map((item) => {
    item.render();
  });
  let allcards = document.querySelectorAll(".card");

  allcards.forEach((singlecard) => {
    singlecard.addEventListener("click", () => {
      singlecard.classList.toggle("toggle");
    });
  });
});



//כפתור השוואה בין הקלפים
let pairBtn = document.getElementById("calc-btn");
pairBtn.addEventListener("click", () => {
  let semiTitle = document.getElementById("semi-title");
  console.log(calcArr)
  let winCard = myDeck.myStaticCalc(parseInt(calcArr[1]),parseInt(calcArr[0]))

  console.log(winCard)
  semiTitle.innerHTML = ` THE GREATER CARD IS: 
        <div class="card win-card">
        <P class="upheart">${winCard}</P>
        <p class="midheart">${winCard}</p>
        <p class="downheart">${winCard}</p>
        </div> 
   `;
});




// counter function, took from youtube with little changes.
function countTo(mySum, id) {
  let from = 0;
  let to = mySum;
  let step = to > from ? 1 : -1;
  let interval = mySum;
  if (from == to) {
    document.querySelector(id).textContent = from;
    return;
  }
  let counter = setInterval(function () {
    from += step;
    document.querySelector(id).textContent = from;
    if (from == to) {
      clearInterval(counter);
    }
  });
}
