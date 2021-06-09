// module.exports = (timestamp) => {
//   return new Intl.DateTimeFormat('ru-RU', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//   }).format(timestamp)
// }

// Экспорт 2ух или более данных

const getNormalDate = (timestamp) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(timestamp)
}

const testFunc = () => {
  console.log('Testing...')
}

const b = 2
const obj = {
  a: 1,
}

module.exports = {
  getNormalDate,
  testFunc,
  b,
  obj,
}
