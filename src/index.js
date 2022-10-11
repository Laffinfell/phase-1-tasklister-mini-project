document.addEventListener("DOMContentLoaded", () => {
// your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', handleToDo)
  
})

function handleToDo(e){
  e.preventDefault()
  console.log('hello')
  let todo = e.target.elements[0].value
  let p = document.createElement('p')
  p.textContent = `${todo} `
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#todoContainer').appendChild(p)
  let input = document.createElement('input')
  input.addEventListener('click', placeholder='due date')
  input.appendChild(input)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}