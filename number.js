var Test =0 ; 
var début=confirm("start game ? ");
function hasard(min,max)
{
	return min+Math.floor(Math.random()*(max-min+1));
}
var nbralea=hasard(0,10);
do{
var nombre=prompt("CHOOSE A NUMBER BETWEEN 0 AND 10 ");
console.log("the number is  : "+nombre); 

if (nombre > nbralea)
{
   alert("the chosen number is superior ");
   Test++ ;
}
if (nombre < nbralea)
{
    alert("the chosen number is inferior");
    Test++ ;
} 
if (nombre == nbralea) 
{
    alert("congrats you guessed the correct number ! ");
    break;
}
}while (Test < 3);

if (Test == 3)
{ console.log("you tried 3 times GAME OVER  " + nbralea); 
var on=confirm("would you like to play again ?");