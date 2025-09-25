var array = ["Mates","Lengua","Quimica","Informatica","Historia"]
const list = document.getElementById("lista");
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})
let nuevo=(prompt('Introduce nueva asignatura'));
array.push(nuevo);
list.innerHTML+="<p>"+"Nueva Lista Creado";
array.forEach((a) => {
    list.innerHTML+=(a)+"<br>";
})