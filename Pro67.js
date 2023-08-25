//Given an array of integers, return a new array with each value doubled.

function maps(x){
    let out = [];
    x.map((el)=>{
      out.push(el*2);
    })
    return out;
  }