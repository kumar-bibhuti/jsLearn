const myArr = ["ram", "shyam", "mohan"];
myArr.push("Bibhuti");
$result = '';

for(let i = 0; i < myArr.length; i++){
    $result += myArr[i]
    if(i < myArr.length){
        $result += ', ';
    }
}

// console.log(myArr);
//console.log($result);

const newArray = [1, 2, 3, [2, 5, 8], [2, 4,[3,5,1]]];

const bibhuti = newArray.flat(3);
console.log(bibhuti);

console.log(Array.from('Bibhuti'));

let car1 = "bmw";
let car2 = "ciaz";
let car3 = "audi";

console.log(Array.of(car1, car2, car3))