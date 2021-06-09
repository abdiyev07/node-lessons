import { EventEmitter } from 'events'
const eventEmitter = new EventEmitter()

eventEmitter.on('onRed', () => {
  console.log('Загорелся красный')
})

eventEmitter.on('onYellow', () => {
  console.log('Загорелся желтый')
})

eventEmitter.on('onGreen', () => {
  console.log('Загорелся зеленый')
})

const start = () => {
  eventEmitter.emit('onGreen')
  setTimeout(() => {
    eventEmitter.emit('onYellow')
    setTimeout(() => {
      eventEmitter.emit('onRed')
      setTimeout(() => {
        eventEmitter.emit('onYellow')
      }, 30000)
    }, 3000)
  }, 30000)
}

start()

setInterval(() => start(), 66000)
