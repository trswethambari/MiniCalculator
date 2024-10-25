let AddBtn=document.getElementById("addBtn");
function addTwoNumbers()
{
    let firstnumber=parseInt(document.getElementById("firstnum").value);
    let secondnumber=parseInt(document.getElementById("secondnum").value);
    let resultplace=document.getElementById("result");
    resultplace.innerHTML=`Result is...${firstnumber + secondnumber}`;
}
AddBtn.addEventListener("click",addTwoNumbers);

let SubBtn=document.getElementById("subBtn");
function subTwoNumbers()
{
    let firstnumber=parseInt(document.getElementById("firstnum").value);
    let secondnumber=parseInt(document.getElementById("secondnum").value);
    let resultplace=document.getElementById("result");
    resultplace.innerHTML=`Result is...${firstnumber - secondnumber}`;
}
SubBtn.addEventListener("click",subTwoNumbers);

let MultiBtn=document.getElementById("multiBtn");
function mulTwoNumbers()
{
    let firstnumber=parseInt(document.getElementById("firstnum").value);
    let secondnumber=parseInt(document.getElementById("secondnum").value);
    let resultplace=document.getElementById("result");
    resultplace.innerHTML=`Result is...${firstnumber * secondnumber}`;
}
MultiBtn.addEventListener("click",mulTwoNumbers);

let DiviBtn=document.getElementById("diviBtn");
function divTwoNumbers()
{
    let firstnumber=parseInt(document.getElementById("firstnum").value);
    let secondnumber=parseInt(document.getElementById("secondnum").value);
    let resultplace=document.getElementById("result");
    resultplace.innerHTML=`Result is...${firstnumber / secondnumber}`;
}
DiviBtn.addEventListener("click",divTwoNumbers);



