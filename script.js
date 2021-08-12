let inputarefa = document.getElementById("inputarefa")
let listaDeTarefas = document.getElementById("listaDeTarefas")
let botaosalvar = document.getElementById("save")
let botaoapagar = document.getElementById("del")


botaosalvar.addEventListener("click", criartarefa)

function criartarefa(){
  let tarefa = inputarefa.value
  if (tarefa == ""){
    alert("Por favor, digite uma tarefa...")
  
  }
  else{
    
    let li = criarli(tarefa)
  listaDeTarefas.appendChild(li)
  inputarefa.value = ""
  storage()
  }
}
function criarli(tarefa){
  let li = document.createElement("li")
  let newtarefa = document.createElement("span")
  newtarefa.classList.add("span1")
  newtarefa.innerText = tarefa
  let newspanbotão = document.createElement("span")
  let newbotão = document.createElement("button")
  newbotão.innerHTML = "x"
  newbotão.setAttribute("onclick","delttarefa(this)")
  newbotão.classList.add("botaodelet")
  li.appendChild(newtarefa)
  li.appendChild(newspanbotão)
  newspanbotão.appendChild(newbotão)
  return li

}


botaoapagar.addEventListener("click",apagar)

function apagar(){
      localStorage.clear()
      listaDeTarefas.innerHTML = ""
       

}




  onload = function (){
    
    let ls = localStorage.getItem("lista")
        listaDeTarefas.innerHTML = ls

}
function delttarefa(e){
  let element = e.parentElement
  let task = element.parentElement
  listaDeTarefas.removeChild(task)
  storage()
  

}
function storage(){
  let ul = listaDeTarefas.innerHTML
  localStorage.setItem("lista", ul)
  
}




