let a = +prompt('Чило1')
let oper = prompt('+ - * /')
let b = +prompt('Число2')

if(oper === "+"){
  alert(a + b)
} 
else if(oper === "-"){
  alert(a - b)
} 
else if(oper === "*"){
  alert(a * b)
} 
else if(oper === "/"){
  alert(a / b)
} 
else{
  alert("Ошибочка вышла")
}
