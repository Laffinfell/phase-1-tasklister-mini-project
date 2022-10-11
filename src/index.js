document.addEventListener("DOMContentLoaded", () => {
// your code here
  let form = document.querySelector('create-task-form')
  form.addEventListener('id-submit', (e) => {
  e.preventDefault()
  handleToDo(e.target.new-task-description.value)
  form.requestFullscreen()
  })
})

function handleToDo(todo){
  let p = document.createElement('p')
  p.textContent = `${todo}`
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#todoContainer').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}