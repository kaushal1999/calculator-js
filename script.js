
// window.onload(

let result;

let init = () => {
  result = document.getElementById("result");
//   console.log(result);
};

window.onload = init;





let solve = () => {
    let val = result.value;
    result.value = math.evaluate(val);
}


let clr = () => {
  result.value = "";
};

let dis = (val) => {
    result.value += val;
};
