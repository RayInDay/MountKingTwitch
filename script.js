function StartAnimation(){
	document.getElementsByClassName("move")[0].style.animation = "right-left 3s ease-in-out forwards";


}
function EnemyAnimtion() {
		document.getElementsByClassName("move")[1].style.animation = "left-right 3s ease-in-out forwards"; 
		document.getElementsByClassName("move")[0].style.animation = "battle 2s ease-in-out forwards"; 
}

function Battle() {
	if (true) 
	{
	EnemyAnimtion();
	}
}