function parentFun(){

  let parentVar=210;
  // console.log(parentVar);

  function childFun(){
    let childVar=100;
    // console.log(childVar,parentVar);
  }
  
  console.log(childVar);
  childFun();

}

parentFun();