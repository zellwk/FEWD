function toggleAccordion (e) {
  // Does nothing if we're not clicking on the title
  if (!e.target.closest('.jsAccordionTitle')) {
    return
  }

  e.preventDefault()
  const content = this.querySelector('.jsAccordionContent')
  const innerContent = content.children[0]

  if (this.classList.contains('is-shown')) {
    content.style.height = 0
  } else {
    content.style.height = innerContent.getBoundingClientRect().height + 'px'
  }

  this.classList.toggle('is-shown')
}

const accordions = document.querySelectorAll('.jsAccordion')
accordions.forEach(function (node) {
  node.addEventListener('click', toggleAccordion)
})
