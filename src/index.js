document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById("new-task-description");
  const form = document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    buildToDo(e.target.newTaskDescription)

  })
})
function buildToDo(todo){
  const newTaskDescription = document.getElementById("new-task-description");
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
