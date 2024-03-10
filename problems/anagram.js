function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  let fc1 = {};
  let fc2 = {};
  for(i of str1){
      fc1[i] = ++fc1[i] || 1; 
  }
  for(i of str2){
      fc2[i] = ++fc2[i] || 1;
  }
  for(i in fc1){
      if(!i in fc2){
          return false;
      }
      if(fc1[i]!= fc2[i]){
          return false;
      }
  }
  return true;
}

console.log(isAnagram('pranav','vanarp'));