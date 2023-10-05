

// calculator


var add=document.getElementById("add")
console.log(add);

add.addEventListener("click" ,function(){

    var num1=document.getElementById("num1").value

    var num2=document.getElementById("num2").value

    var sum =Number(num1)+Number(num2)

    var result =document.getElementById("result")
    result.textContent=`Result : ${num1} + ${num2} = ${sum}`


})


var sub =document.getElementById("sub")

sub.addEventListener("click",()=>{

    var num1=document.getElementById("num1").value

    var num2=document.getElementById("num2").value

    var sum =Number(num1)-Number(num2)

    var result=document.getElementById("result")
    result.textContent=`Result :${num1} -${num2} =${sum}`
})



var multi =document.getElementById("multi")

multi.addEventListener("click",()=>{

    var num1=document.getElementById("num1").value

    var num2=document.getElementById("num2").value

    var sum =Number(num1)*Number(num2)

    var result=document.getElementById("result")
    result.textContent=`Result : ${num1} *${num2} = ${sum}`
})


var divi =document.getElementById("divi")

divi.addEventListener("click",()=>{

    var num1=document.getElementById("num1").value

    var num2=document.getElementById("num2").value

    var sum =Number(num1)/Number(num2)

    var result=document.getElementById("result")
    result.textContent=` Result :  ${num1} /${num2} = ${sum}`
})



var mod=document.getElementById("mod")

mod.addEventListener("click",()=>{
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    var sum = Number(num1)%Number(num2)

    var result = document.getElementById("result")
    result.textContent=`Result : ${num1} % ${num2} = ${sum}`
})
