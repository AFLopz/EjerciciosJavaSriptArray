var array = ["Julia","Maria","Elena","Ana","Luis"]
const list = document.getElementById("lista");
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})
array.splice(1,1);
list.innerHTML+="<p>"+"Nueva Lista Creado";
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})