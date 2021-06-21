let counter = 0

const clickHandler = () => {
  counter++
  console.log(counter)
}

window.addEventListener('click', clickHandler)
