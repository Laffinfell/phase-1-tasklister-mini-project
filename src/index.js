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
  let date = document.createElement(date)
  //date.addEventListener('click', handleDelete)
  document.querySelector('#todoContainer').appendChild(p)
  //document.querySelector('#todoContainer2').appendChild(date)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function backgroundchange(e) {
  e.onclick.backgroundchange()
  if (click) === 'blue'
    <StyleSheet>background = blue</StyleSheet>
    if (click) === 'red'
    <StyleSheet>backgroundchange=red</StyleSheet>
    if(click) === 'yellow'
    <StyleSheet>background = yellow</StyleSheet> 
}