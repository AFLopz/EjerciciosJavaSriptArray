var array = ["Mates","Lengua","Quimica","Informatica","Historia"]
const list = document.getElementById("lista");
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})
list.innerHTML+="<p>"+"Nueva Lista Borrada";
array.pop();
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})