
// When we submit the form
//  Know what is in the input
//  Create the list element
//  Add the value of the input into the list element
//  Add `list element` to bottom of `.list`
const list = document.querySelector('.list')
const form = document.querySelector('form')

function handleSubmit (event) {
  event.preventDefault()
  const input = this.querySelector('input')
  const listElement = document.createElement('li')
  listElement.innerHTML = input.value
  list.append(listElement)

  // reset the form
  this.reset()
}

form.addEventListener('submit', handleSubmit)

// When we click on any list item
// know which item we clicked on
// remove the list item from the `.list `

list.addEventListener('click', function (event) {
  list.removeChild(event.target)
})
