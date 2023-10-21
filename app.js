function result(num1,opr,num2){
    
    switch(opr){
        case "+":
            var sum=num1+num2;
            return sum;
            break;    
        case "-":
            var sub=num1-num2;
            return sub;
            break;
        case "*":
            var mul=num1*num2;
            return mul;
            break;
        case "/":
            var div=num1/num2;
            return div;
            break;
        default:
            return "Invalid operator";
    }
}
var num1=parseFloat(prompt("Enter first number"));
if (isNaN(num1)){
    alert("Error");
}
else{
    var opr=prompt("Enter an operator");}
    var num2=parseFloat(prompt("Enter the second number"));
    if(isNaN(num2)){
        alert("Error");
    }
    else{
        
    document.write(result(num1,opr,num2));
    }
