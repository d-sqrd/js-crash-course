// console.log(window);
const curryingFun0 = (a) => {
  return (curryingFun1 = (b) => {
    return (curryingFun2 = (c) => {
      return a + b + c;
    });
  });
};
console.log(curryingFun0(1));
console.log(curryingFun0(1)(2));
console.log(curryingFun0(1)(2)(3));
