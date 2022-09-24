let number = 10;
let total = number;
let x = number - 1;

while (x > 0) {

    if (x > 0) {
        total *= x;
        x--;
        console.log(total);
        continue;
    }

    if (x <= 0) {
        break;
    }
}