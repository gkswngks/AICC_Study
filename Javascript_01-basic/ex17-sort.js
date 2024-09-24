arr = [4, 8, 2, 7, 6];

//arr.sort();
for(let i = 0; i < arr.length -1; i++){
  for(let j = 0; j < i; j++){
    if(arr[i] < arr[j]){
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp
    }
  }
}


console.log(arr);