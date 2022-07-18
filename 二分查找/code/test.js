var isPerfectSquare = function(num) {
  if(num === 1){
    return true;
  }
  let left = 1;
  let right = num;
  while(left < right){
    let mid = left + ((right - left + 1)>>1);
    if(mid > x/mid){
      right = mid - 1;
    }else{
      left = mid;
    }
  }
  if(left * left === num){
    return true;
  }else{
    return false;
  }
};