// Модуль path

import path from 'path'

const dirname = path.dirname('dir/test.json') // - возвращает из переданной пути название директории
const isAbsolute = path.isAbsolute('dir/test.json') // - является ли переданный путь абсолютным (вернет Boolean)
const joined = path.join('C:', 'users', 'dir', 'test.json') // - возвращает нормализованный путь от переданных аргументов в зависимости от операционной системы
// Важный метод:
const resolved = path.resolve('./path.js') // - исходя из переданного относительного путя, возвращает абсолютный путь
console.log(resolved)
