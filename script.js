var CurrentChampion= {}
CurrentChampion.Hp= 0;
CurrentChampion.Name="Basic";

var Name;

var IdleAnimation = "Images/IdleAnimation.gif";
var AtackerAnimation = "Images/AtackerAnimation.gif";
var AttackerEmptyAnimation = "Images/AttackerEmptyAnimation.gif";
var HealAnimation = "Images/HealAnimation.gif";
var FlyAnimation = "Images/FlyAnimation.gif";

var Pretender1 = document.querySelector("#Pretender1");
var Pretender2 = document.querySelector("#Pretender2");

function StartAnimation(){
		Pretender1.src = HealAnimation;
		Pretender2.src = FlyAnimation;

		document.getElementsByClassName("move")[0].style.animation = "eat 3s ease-in-out forwards"
		document.getElementsByClassName("move")[1].style.animation = "win 3s ease-in-out forwards"; 
}
function EnemyAnimtion() {
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

function SetSpan() {
	document.querySelector("#NamePretender1").innerHTML = Name;
}

function Damage(oponent) {
	CurrentChampion.Hp-=oponent.subPlan;

	Pretender2.src = AtackerAnimation;

	if(CurrentChampion.Hp<=0){

		SetChamp(oponent);
	}

}
function Heal(healer) {
	CurrentChampion.Hp+=healer.subPlan;	
	Pretender1.src = HealAnimation;

}
}
function Battle() {
	if (true) 
	{
	EnemyAnimtion();
	}
}