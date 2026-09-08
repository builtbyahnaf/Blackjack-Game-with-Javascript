/* 
(practice - 1)

let arr = ["Ahnaf", 22, "KUET", true];
console.log(arr[2])
arr.push("CSE")
console.log(arr)
console.log(arr.length)
 */

/* (practice - 2)

let friendlyCountries = ["Canada", "Russia", "Iran", "Yemen", "Pakistan"];

console.log(friendlyCountries);

friendlyCountries.pop();
friendlyCountries.push("Bangladesh");

friendlyCountries.shift();
friendlyCountries.unshift("Vynzemia (A fictional country)");

console.log(friendlyCountries); 

let hands = ["rock", "paper", "scissor"];

function throwRand(){
    let v = Math.floor(Math.random() * 3);
    console.log(hands[v]);
}
throwRand();

//creating an element mmanually:
let li  = document.createElement("li");
li.textContent(myLeads[i]);
ulEl.append(li);
*/
//practicing idfk...

let websites = `["www.ryvinite.ui"]`

websites = JSON.parse(websites)

console.log(websites)
websites.push("www.builtbyahnaf.dev")
websites = JSON.stringify(websites)
console.log(typeof websites + " \n" +websites)