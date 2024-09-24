// 로또 예상 번호 만들기

// Array 활용(index만 사용하기)
const numbers = [0, 0, 0, 0, 0, 0]; // 6개의 요소를 가진 Array 생성

// 난수 저장(로또 번호 저장하기) - ★여기를 수정해서 중복값이 없도록 만드시오!★
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = Math.floor(Math.random() * 45 + 1); //난수 저장
// }

function myrand(range, start){ //range: 갯수, start: 시작값
  return Math.floor(Math.random() * range + start);
}

// 중복처리1
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = myrand(45, 1); //난수 저장
//   console.log('뽑은 번호:', numbers[i]);
//   for(let j = 0; j < i; j++){
//     if(numbers[i] == numbers[j]){
//       console.log('중복!');
//       i--;
//       break;
//     }
//   }
// }

//중복처리2(flag)
//const arr = new Array(45).fill(false); //Array생성자, fill 사용
//const arr = Array.from({ length: 45 }, () => false); // Array.form 사용
//const arr = [...Array(45)].map(() => false); Spread Operator(전개 연산자) 사용

const flags = [];
for (let i = 1; i <= 45; i++) {
  flags.push(false);
}

let idx = 0;
while(idx < 6){
  let n = myrand(45, 1);
  if(!flags[n-1]){
    flags[n-1] = true;
    numbers[idx] = n;
    idx++;
  }
}


//중복처리3(shuffle)
//const arr = Array.from({ length: 45 }, (v, i) => i + 1); //Array.form 사용
//const arr = [...Array(45).keys()].map(i => i + 1); //map, key 사용
//const arr = Array(45).fill().map((_, i) => i + 1); //Array, fill 사용

// const arr = [];
// for (let i = 1; i <= 45; i++) {
//   arr.push(i);
// }
//
// for(let i = 0; i < 100; i++){
//   let i1 = myrand(45, 0);
//   let i2 = myrand(45, 0);
//   let tmp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = tmp;
// }
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = arr[i];
// }

// 출력
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}


