var CurrentChampion= {}
CurrentChampion.Hp= 10;
CurrentChampion.Name="Basic";

var IdleAnimation = "Images/IdleAnimation.gif";
var AtackerAnimation = "Images/AtackerAnimation.gif";
var AttackerEmptyAnimation = "Images/AttackerEmptyAnimation.gif";
var HealAnimation = "Images/EatingAnimation.gif";
var FlyAnimation = "Images/FlyAnimation.gif";

var Pretender1 = document.querySelector("#Pretender1");
var Pretender2 = document.querySelector("#Pretender2");
Pretender1.src = IdleAnimation;

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
	SetFirstPlayer(Player);
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
	SetHP();
	
}}

function SetHP() {
	
	document.querySelector("#HPPretender1").innerHTML = CurrentChampion.Hp+"\n";
}

function SetName() {
	document.querySelector("#NamePretender1").innerHTML = CurrentChampion.Name;
}

function Damage(oponent) {
	Pretender2.src = AtackerAnimation;
	
	CurrentChampion.Hp-=oponent.subPlan;

	if(CurrentChampion.Hp<=0)
	{
		SetChamp(oponent);
	}

}
function Heal(healer) {
	Pretender1.src = HealAnimation;
	CurrentChampion.Hp+= healer.subPlan;	
	setTimeout("SetIdeal()", 1800);
	SetHP();

}

function Lose()
{
	Pretender2.src = FlyAnimation;	
	document.getElementsByClassName("move")[1].style= "display: block";
	document.getElementsByClassName("move")[1].style.animation = "lose 3s ease-in-out forwards"

	setTimeout("document.getElementsByClassName('move')[1].style= 'display: none'",3000);
}

function Win()
{
	setTimeout("document.getElementsByClassName('move')[0].style= 'display: none'",2000);

	Pretender2.src = AtackerAnimation;	
	document.getElementsByClassName("move")[1].style= "display: block";
	
	document.getElementsByClassName('move')[1].style.animation = 'win 3s ease-in-out forwards'
	
	setTimeout("document.getElementsByClassName('move')[0].style= 'display: block'",3000);
}

function SetIdeal() {
	Pretender1.src=IdleAnimation;
}
function SetChamp(Player) {
	CurrentChampion.Name=Player.username;
	CurrentChampion.Hp= Player.subPlan;
	SetName(CurrentChampion);
}

function SetFirst(Player) {
	//SetChamp(Player);
	 SetName(CurrentChampion);
	 SetHP(CurrentChampion);

	document.getElementsByClassName("move")[0].style= "display: inline-grid;";
	document.getElementsByClassName("move")[1].style= "display: none";
	console.log(CurrentChampion);
	
}
function SetFirstPlayer(Player) {
document.getElementsByClassName("move")[1].style= "display: block"
document.getElementsByClassName("move")[1].style.animation = "first-jump 1s ease-in-out forwards"; 
setTimeout(()=>SetFirst(Player), 5000);
}
document.getElementsByClassName("move")[1].style= "display: block"
document.getElementsByClassName("move")[1].style.animation = "first-jump 1s ease-in-out forwards"; 
setTimeout(()=>SetFirst(CurrentChampion), 5000);

