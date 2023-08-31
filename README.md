## Содержание
- [Задание](#задание)
- [Дерево репозитория](#дерево-репозитория)
- [Использованные библиотеки и технологии](#использованные-библиотеки-и-технологии)
- [Запуск сервера](#запуск-сервера)
- [Результаты работы](#результаты-работы)

## Задание
Разработать двухстраничный интерфейс сайта [FreeToGame](https://www.freetogame.com/). На первой странице список игр с возможностью выбрать платформу и жанр, а так же отсортировать выдачу по алфавиту/популярности/релевантности/дате релиза. На второй странице - страница выбранной игры с подробным описанием, техническими требованиями при их наличии, и карусель скриншотов

## Дерево репозитория
```
.
└── src
    ├── components
    ├── features
    │   ├── api
    │   ├── categories
    │   └── games
    ├── images
    ├── styles
    ├── utils
    └── index.js
```

## Использованные библиотеки и технологии
- React js v.18.2.0
- Redux Toolkit
- React Router v6,15,0
- [Free-To-Play Games API](https://rapidapi.com/digiwalls/api/free-to-play-games-database) - версия с поддержкой CORS 
- Ant Design - UI фреймворк
- npm - Пакетный менеджер

## Запуск сервера
В проекте были использованы npm-пакеты, относящиеся к вышеперечисленным технологиям, а именно:
- 'react'
- 'react-redux'
- 'react-router-dom'
- 'antd'
- '@ant-design/icons'
- '@reduxjs/toolkit'
  
Каждый из них можно установить командой:
```sh
npm install --save 'name'
```
>Для работы с API потребовалось получить персональный ключ доступа, подробнее можно посмотреть в файлах, где реализованы API запросы: 'src/features/games/gamesSlise.js' и 'src/features/api/apiSlice.js'

Чтобы запустить сервер, выполните команду:
```sh
npm start
```
Сервер запустится по адресу
```sh
http://localhost:3001
```
## Результаты работы
Главная страница:

![Главная страница](/ImagesForReadMe/Главная%20страница.jpg)

Страница игры:

![Страница игры](/ImagesForReadMe/Страница%20игры.jpg)

![Карусель скриншотов](/ImagesForReadMe/Карусель%20скриншотов.jpg)


Для наглядности несколько скриншотов для интерфейса Ipad Air:

![Главная страница](/ImagesForReadMe/ipad%20air%20главная.jpg)

![Страница игры](/ImagesForReadMe/ipad%20air%20страница%20игры.jpg)



