let color = document.getElementById('color')
let createBtn = document.getElementById('createBtn')
let list = document.getElementById('list')

/**agregar nota nueva */
createBtn.onclick = () => {
  let newNote = document.createElement('div')
  newNote.classList.add('note')
  newNote.innerHTML = `<span class="close">x</span>
  <textarea placeholder="Write content..." rows="10" cols="30"></textarea>`
  newNote.style.borderColor = color.value
  list.appendChild(newNote)
}

/**boton de remover */
document.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('close')) {
    event.target.parentNode.remove()
  }
})

/**drag and drop effect */
let cursor = {
  x: null,
  y: null
}

let note = {
  dom: null,
  x: null,
  y: null
}

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('note')) {
    cursor = {
      x: event.clientX,
      y: event.clientY
    }
    note = {
      dom: event.target,
      x: event.target.getBoundingClientRect().left,
      y: event.target.getBoundingClientRect().top,
    }
    console.log(note);
  }
})


/**movimiento del textarea */
document.addEventListener('mousemove', (event) => {
  if (note.dom === null) return
  let currentCursor = {
    x: event.clientX,
    y: event.clientY
  }
  let distance = {
    x: currentCursor.x - cursor.x,
    y: currentCursor.y - cursor.y
  }
  note.dom.style.left = (note.x + distance.x) + 'px'
  note.dom.style.top = (note.y + distance.y) + 'px'
  note.dom.style.cursor = 'grab' //cambia el icono del cursor a la mano
})

/**soltar el textarea */
document.addEventListener('mouseup', () => {
  if (note.dom == null) return
  note.dom.style.cursor = 'auto'//cambia el icono al automatico
  note.dom = null
})