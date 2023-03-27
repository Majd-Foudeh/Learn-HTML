
//  let num =Number( prompt('enter a number : '))

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.max(num));
// console.log(Math.min(num));
// let sum = 0;
// for(let i= 0;i<=num ; i++){
// sum= sum + i ;
// }
// alert(sum)
// alert(num+1)
// alert((sum/(num+1)));

// let  maxnum = prompt ("Please enter an integer number");
// let sum = 0;
// for (let i=0; i<=maxnum; i++)
//  sum = sum + i; 
//  alert(sum)
// alert("The average of "+ maxnum +" is "+(sum/(maxnum+1)));
// --------------------------------------section-------------------------------------------------------------
// let firstname = prompt('enter your firstname');
// let lastname = prompt('enter your last name ');

// alert(`Welcome ${firstname.trim().charAt(0).toLocaleUpperCase()}. ${lastname}`)
// let p =document.createElement("p")
// p.textContent=`Welcome ${firstname.trim().charAt(0).toLocaleUpperCase()}.${lastname}`;
// ----------------------------------------section-------------------------------------------------------------
let gender = prompt("enter your gender : ");
document.write( `Gender :${gender == "male" ? "Male" : "Female"}`)