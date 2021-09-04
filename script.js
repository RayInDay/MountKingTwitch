var CurrentChampion= {}
CurrentChampion.Hp= 0;
CurrentChampion.Name="";
function StartAnimation(){
	document.getElementsByClassName("move")[0].style.animation = "right-left 3s ease-in-out forwards";


}
function EnemyAnimtion() {
		document.getElementsByClassName("move")[1].style.animation = "left-right 3s ease-in-out forwards"; 
		document.getElementsByClassName("move")[0].style.animation = "battle 2s ease-in-out forwards"; 
}

async function QueueWorker(){
while(queue.length!=0){
let Player= queue.shift();
if (CurrentChampion.Name=="") {
	SetChamp(Player);
	console.log(CurrentChampion);
	continue;
}
if(CurrentChampion.Name!=Player.username){
	Damage(Player);
	console.log(CurrentChampion);
}
else{
	Heal(Player);
	console.log(CurrentChampion);
}
	
	
}
function SetChamp(Player) {
	CurrentChampion.Name=Player.username;
	CurrentChampion.Hp= Player.subPlan;
}
function Damage(oponent) {
	CurrentChampion.Hp-=oponent.subPlan;
	if(CurrentChampion.Hp<=0){
		SetChamp(oponent);
	}
}
function Heal(healer) {
	CurrentChampion.Hp+=healer.subPlan;	
}
}
function Battle() {
	if (true) 
	{
	EnemyAnimtion();
	}
}