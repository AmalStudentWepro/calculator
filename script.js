let a = +prompt('1 число')
let m = prompt('+ - * /')
let b = +prompt('2 число')

if(m === "+"){
  alert(a + b)
} 
else if(m === "-"){
  alert(a - b)
} 
else if(m === "*"){
  alert(a * b)
} 
else if(m === "/"){
  alert(a / b)
} 
else{
  alert("Ошибочка вышла")
}
