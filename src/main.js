
function valueTypeExample() {
    let a = 10;
    let b = a;
    b = 20;
    return a; // 10
  }
  
  function referenceTypeExample() {
    let obj1 = { name: "Alice" };
    let obj2 = obj1;
    obj2.name = "Bob";
    return obj1.name; // Bob
  }
  
  function changePrimitive(x) {
    x = 20;
    return x;
  }
  
  function changeObject(obj) {
    obj.name = "Charlie";
    return obj;
  }
  
  function createHeapObject() {
    return { data: new Array(1000000).fill("x") };
  }
  

  function demonstrateGC() {
    let obj = createHeapObject();
    console.log("Object created");
  }
  
  function checkGC() {
    demonstrateGC();
    console.log("Function completed");
  }
  
  module.exports = { 
    valueTypeExample, 
    referenceTypeExample, 
    changePrimitive, 
    changeObject, 
    createHeapObject, 
    demonstrateGC, 
    checkGC 
  };