const Increment = document.getElementById("increment");
const Decrement = document.getElementById("decrement");
const Value = document.getElementById("count");
console.log(Increment, Decrement, Value);
Increment.addEventListener("click", IncrementCount);
Decrement.addEventListener("click", DecrementCount);
var sum = 0;
function IncrementCount(e) {
  e.preventDefault();
  sum++;
  Value.innerText = sum;
}
function DecrementCount(e) {
  e.preventDefault();
  if (sum > 0) {
    sum--;
    Value.innerText = sum;
  } else {
    Value.innerText = 0;
  }
}
/////////////////////////acc
const openData=document.querySelector(".open_item")
const DataItem=document.querySelector(".position_item")

if(openData){
  openData.addEventListener('click',openTransform)
}

function openTransform(e){
  e.preventDefault()
DataItem.classList.toggle('active')
}