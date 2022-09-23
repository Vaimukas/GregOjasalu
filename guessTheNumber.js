let i=0
function getRandomInt (max) {
return Math.floor (Math. random() * max);
}

let random=getRandomInt(10)
console.log("random", random)

while(i < 3){
let guess = prompt("Paku number ühest kümneni");
if (guess == random) {
alert ("Õige vastus, hästi tehtud.");
break
}
else if ( guess == random -1){alert("Peaaegu! sa oled väga lähedal õigele.")}
else if ( guess == random +1) {alert ("Peaaegu! sa oled väga lähedal õigele.")}
else alert("Pakkusid mööda")
i++
}
