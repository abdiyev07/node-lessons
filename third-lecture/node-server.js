import http from 'http'

const app = http.createServer((request, response) => {
  // request: хранит информацию о запросе
  // response: управляет отправкой ответа
  //request:
  // - headers: возвращает заголовки запроса
  // - method: тип запроса (GET, POST, DELETE, PUT)
  // - url: представляет запрошенный адрес
  //response:
  // - statusCode: устанавливает статусный код ответа
  // - statusMessage: устанавливает сообщение, отправляемое вместе со статусным кодом
  // - setHeader(name, value): добавляет в ответ один заголовок
  // - write: пишет в поток ответа некоторое содержимое -- мы можем несколько раз вызвать метод write(), последовательно оправляя в исходящий поток каждый кусочек информации
  // - writeHead: добавляет в ответ статусный код и набор заголовков
  // - end: сигнализирует серверу, что заголовки и тело ответа установлены, в итоге ответ отсылается клиента. Данный метод должен вызываться в каждом запросе.
  // Маршрутизация:
  // response.setHeader("Content-Type", "text/html; charset=utf-8;");
  // if (request.url === '/home' || request.url === '/') {
  //   response.write('<h2>Home</h2>')
  // } else if (request.url == '/about') {
  //   response.write('<h2>About</h2>')
  // } else if (request.url == '/contact') {
  //   response.write('<h2>Contacts</h2>')
  // } else {
  //   response.write('<h2>Not found</h2>')
  // }
  // response.end()
  // Переадресация:
  // response.setHeader('Content-Type', 'text/html; charset=utf-8;')
  // if (request.url === '/') {
  //   response.statusCode = 302 // временная переадресация
  //   // на адрес localhost:3000/newpage
  //   response.setHeader('Location', '/newpage')
  // } else if (request.url == '/newpage') {
  //   response.write('New address')
  // } else {
  //   response.statusCode = 404 // адрес не найден
  //   response.write('Not Found')
  // }
  // response.end()
})

app.listen(5000, () => {
  console.log('Server is running on 5000 PORT')
})
