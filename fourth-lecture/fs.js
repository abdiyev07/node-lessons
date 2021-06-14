import path from 'path'
// Модуль FS (file system)

//У данного модуля есть 2 варианта работы с файлами:
// 1. Синхронно (блокируя поток)
// 2. Асинхронно (не блокируя поток)

// 1. Синхронный вариант работы с файлами. 2 основных метода:
import { readFileSync, writeFileSync } from 'fs'

// readFileSync(путь к файлу, каким форматом читать (utf-8 к примеру))
// writeFileSync(путь где создать файл, данные которые нужно записать)

// const filename = path.join(path.resolve(), 'testSync.txt')
// writeFileSync(filename, '\n123', { flag: 'a' })

// const result = readFileSync(filename, { encoding: 'utf-8' })

// --------------------------------------------------------------
// 2. Асинхронный вариант работы с файлами. 2 основных метода:
import { readFile, writeFile } from 'fs'

//readFile(путь к файлу, тип кодирования, callback(err, result))
//writeFile(путь к файлу, что нужно записать в файл, callback(err, result))

writeFile('testAsync.txt', 'testing async write file', (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Файл был успешно записан')
})

// readFile('testAsync.txt', (err, data) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(data)
// })
