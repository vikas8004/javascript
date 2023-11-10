let form =document.forms[0];
form.elements.fname="ashish;"
// console.log(form.elements.fname);
// select.options[2].selected=true
// select.selectedIndex=2;
select.value="banana";
select.value="pear";
//the above three are the important property of the select tag
// console.log(select.value);
let option=new Option("mango","mango",true,true);
select.options[3]=option;
// console.log(select.options);
let f=Array.from(select.options).filter(option=>option.selected).map(val=>val.value);
console.log(f);