function gcd(num1, num2) {

    let smallerNum = Math.min(num1, num2);
    let largerNum = Math.max(num1, num2);

    for (let i = smallerNum; i > 0; i--) {
        if (largerNum % i == 0 && smallerNum % i == 0) {
            console.log(i);
            break;
        }
    }
}

gcd(15, 5)