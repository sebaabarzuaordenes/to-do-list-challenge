# TO-DO LIST API

A [Node js](https://nodejs.org/en/) application


## Prerequisites

* This project require [Node.js](https://nodejs.org/) v8+ or newer

## Technologies

* Node js  
* Express js
* Sequelize js
* JSON Web Tokens js
* Unit js
* ESLint

## Installation

If you have already cloned the project, you can install the dependencies

```sh
$ cd path/of/your/project
$ yarn install
or
$ npm install
```

## Environment configuration

Copy the content of the file `env_sample` manually  into another file called `.env` and modify the values of the variables with your text editor

```
$ cd path/of/your/project
$ cp env_sample .env
```

> **Note:**
> The values of the variables depend on the settings on your local machine

```
$ cd path/of/yourproyect
$ cp env_sample .env
```

## Database schema Migration 

```sh
$ cd path/of/your/project
$ npx sequelize db:migrate
```

## Delete Database schema

```sh
$ cd path/of/your/project
$ npx sequelize db:migrate:undo:all
```

## Run App

```sh
$ cd path/of/your/project
$ npm start
```

## Docker deployment (OPTIONAL)

> **Note:**
> If you do not want to install any service such as node, database engines etc etc in your local machine, you can
> simply install "docker" and deploy it from there

You'll need `docker` and `docker-compose` installed in your system.

For development you'll need to copy `docker-compose.yaml` file in the main folder where this project is located

```sh
$ cd path/of/your/project
$ cp docker-compose.yaml ../docker-compose.yaml
$ cd ..
$ docker-compose up -d
```

## Unit Test

```sh
$ cd path/of/your/project
$ yarn test
or
$ npm test
```


## Other
> **Note:**
> Documentation links and more.
> 
> For google drive, If you want to leave a comment on any document, please do not hesitate to comment to be aware, the links are public and you are free to comment.


 | app    | link |
 | ------ | ------ |
 | DOCUMENTATION | [GOOGLE DRIVE LINK](https://drive.google.com/drive/folders/1A8D6Y8TKQzjK2fgIWbdpqCojV5ZGONj3?usp=sharing) 
  | POSTMAN | [COLLECTION LINK](https://www.getpostman.com/collections/0119628a1e215744fe58) |



