//ex1 
function opposite(boolean){
    return !boolean;

}
opposite(true);
opposite(false);
//ex2 
function greaterThan5(num1, num2){
    if((num1>5)||(num2>5)){
        return true;
    }
    return false;
}
greaterThan5(1, 6)
greaterThan5(5, 5) 
greaterThan5(1, 4) 
//ex3 
function allGreaterThan5(num1, num2){
      if((num1>5)&&(num2>5)){
        return true;
    }
    return false;
}
allGreaterThan5(6, 7)
allGreaterThan5(2, 7) 
//ex4 
function largerThan5AndLessThan20(number){
      if((number>5)&&(number<20)){
        return true;
    }
    return false;
}
largerThan5AndLessThan20(12)
largerThan5AndLessThan20(21) 
largerThan5AndLessThan20(5) 
//ex5 
function not6AndLessThan10(number){
    if((number!==6)&&(number<10)){
        return true;
    }
    return false;
}
not6AndLessThan10(6) 
not6AndLessThan10(7)
not6AndLessThan10(10) 
//ex 6
function largerThan3AndLessThan18(num1, num2, num3){
       if((num1 > 3 && num1 < 18)&&(num2 > 3 && num2 < 18)&&(num3 > 3 && num3 < 18)){
        return true;
    }
    return false;
}
largerThan3AndLessThan18(2, 4, 20) 
largerThan3AndLessThan18(5, 6, 7)
largerThan3AndLessThan18(3, 6, 18) 


//ex 7
function cloudyAndRainy(string1, string2){
if((string1==="cloudy")&&(string2==="rainy")){
        return true;
    }
    return false;
}
cloudyAndRainy("cloudy", "rainy")
cloudyAndRainy("clear", "rainy") 
//ex 8
function weatherActivities(weather){
if(weather==="rainy"){
        return "chocolat chaud";
    }else if(weather==="sunny"){
        return "course a pied";
    }else if(weather==="claudy")
    return "claudy";
}
weatherActivities("rainy") 
weatherActivities("sunny")
//ex 9
function evenAndGreaterThan7(number){
if((number%2===0)&&(number>7)){
        return true;
    }
    return false;
}
evenAndGreaterThan7(6) 
evenAndGreaterThan7(8)
evenAndGreaterThan7(9) 



//plus de pratique
//ex1
function areValidCredentials(name, password){
if((name.length>3)&&(password.length>=8)){
    return true;
}
return false;
}
areValidCredentials("rayen","fmklfbmbfclcùm");
areValidCredentials("rayen","xvkl");

//ex2

function guessMyNumber(number,nombre){
    if ((nombre>=0 && nombre<=5)&&(nombre===number)){
        return "meme resultat";
    }
    return "nombre incorrect"

}
guessMyNumber(10,10);

//avancé

//ex1
function or(statement1, statement2){
    if ((statement2===true)||(statement1===true)){
        return true;
    }else if((statement2===false)||(statement1===false)){
    return false;
    }return true;

}
or(true, true)
or(true, false)
or(false, true)
//ex2
function and(statement1, statement2){
if ((statement2===true)&&(statement1===true)){
        return true;
    }else if((statement2===false)&&(statement1===false)){
    return false;
    }return false;
}
and(true, true)
and(true, false) 
and(false, false) 
and(1 < 3, 5 > 7)
//ex3
function shirtWidth(width){
if ((width>20)&&(width<30)){
        return "You should select a size S";
    }
    else if((width>30)&&(width<40)){
    return  "You should select a size M";
    }else if((width>40)&&(width<50)){
    return  "You should select a size L";}
    return  "You should select a different shirt";
}
shirtWidth(25) 
shirtWidth(35) 
shirtWidth(45) 
shirtWidth(100)
//ex4
function player1Choice(choice){
if ((choice==="rock")){
        return "Player 1 chose rock";
    }
    else if((choice==="paper")){
        return "Player 1 chose paper";
    }else if((choice==="scissors")){
        return "Player 1 chose scissors";
    }
    return  "Player 1 has chosen poorly!";
}
player1Choice("rock")
player1Choice("paper")
player1Choice("scissors")
player1Choice("gun")
//ex5
function isItTruthy(value){
if ((value===false)||(value==="")||(value===0)){
return  "Input is falsy";
}return "Input is truthy";
}
isItTruthy("anything") 
isItTruthy()
isItTruthy(0)
isItTruthy("")
isItTruthy(false)
//ex6
function checkArea(area){
if((area>48)&&(area<100)){
    return true;
}
return false;
}
checkArea(50) 
checkArea(100) 
//ex7
function checkMultiply(num1, num2){
if((num1*num2>50)&&(num1*num2<150)){
    return true;
}
return false;
}
checkMultiply(10, 6) 
checkMultiply(7, 7) 







