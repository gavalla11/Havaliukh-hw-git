
// 1------------------------------------------

const hamb = 4;
const potato = 2;

    if(hamb >= 4 && potato >=1) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }



// 2-------------------------------------------
const price = 1500

if(price >= 1000 && price <= 1900) {
    console.log(price)
}

// 3-------------------------------------------
const price1 = 900

if(price1 <= 1000 || price1 >= 1900) {
    console.log(price1)
}

const price2 = 1

if(!(price2 >= 1000 && price2 <= 1900)) {
    console.log(price2)
}

// 4-------------------------------------------

const season = 2;

if(season === 1) {
    console.log('Winter')
} 
else if(season === 2) {
    console.log('Spring')
} 
else if(season === 3) {
    console.log('Summer')
} 
else {
    console.log('Autumn')
}

// 5---------------------------------------------

const a = 3;
const b = 1;
const c = 2;

if(a < b && a > c || a < c && a > b) {
  console.log(a);
} else if (b < a && b > c || b < c && b > a) {
  console.log(b);
} else {
  console.log(c);
}
// 6---------------------------------------------

const weekday = 6

switch(weekday) {
    case 1:
        console.log('Monday')
        break;

    case 2:
        console.log('Tuesday')
        break;

    case 3:
        console.log('Wednesday')
        break;
    
    case 4:
        console.log('Thursday')
        break;

    case 5:
        console.log('Friday')
        break;

    case 6:
        console.log('Saturday')
        break;

    case 7:
    default:
        console.log('Sunday')
        break;
}

// 7---------------------------------------------???

const incomingVar = '*';
const a1 = 1;
const b1 = 2;

switch(incomingVar) {
    case '+':
        console.log(a1 + b1);
        break;

    case '-':

        console.log(a1 - b1)
        break;

    case '*':
        console.log(a1 * b1)
        break;
    
    case '/':
        console.log(a1 / b1)
        break;

    default:
        console.log(a1, b1, variable)

}

// 8---------------------------------------
const someText1 = str => {
    let result = str.replace(/[aeiou]/gi, "");
    console.log(result);
  };

  someText1('Nature');

