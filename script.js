function EnemyAnimtion() {
		document.getElementsByClassName("move")[1].style.animation = "left-right 3s ease-in-out forwards"; 

Battle();

}
var Pretender1 = document.getElementById('Pretender1').innerText;
var Pretender2 = document.getElementById('Pretender2').innerText;

function Battle() {
	if (Pretender1 > Pretender2) 
	{
document.getElementsByClassName("move")[0].style.animation = "battle 2s ease-in-out forwards"; 
	} 
	else 
	{

console.log(Pretender1)
	}
}