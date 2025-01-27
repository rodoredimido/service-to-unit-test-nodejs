# Serviço para entender sobre testes de unitarios

Alguns padrões de design estão sendo implementados neste serviço: `singleton, observator for logger`.
A configuração do `esLint` é cuidar da complexidade de uma função, código limpo, quantidades de parâmetros máximos de uma função como `const a = (b, c, d) => b + c + d` não pasar de tres parametros, evitar o `callback hell`, o tamanho máximo das declarações foi fixado com um máximo de 12, para que a função seja mais compreensível; se for além disso, estará deixando um código limpo.

A tecnologia utilizada:
  - Koa foi usado para criar o serviço
  - Consultar serviços externos de promessa de solicitação

Foi criado Um logger com `Bristol`
### Estrutura de diretórios
```
    .
    ├── configs            # Dentro dessa pasta estão os arquivos contendo as constantes da aplicação
    ├── server             # Arquivos contendo as configurações gerais do servidor da aplicação
    ├── src                # lib, models, services, logs...
    |   ├── controllers    # Controladore dos endpoints
    |   ├── libs           # As bibliotecas criadas para este serviço
    |   ├── services       # As chamadas dos serviços externos
    |   └── utils          # As utilidades
    └── test               # Testes unitários
```
## Endpoints do serviços

### **GET** /health
- Aqui é a descrição de retorno do endpoint.

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```
{
    "/health": true
}
```


>:x: **_Retorno default_**

>**HTTP Status** `500`

**Response**
```
{ "description": "Internal Server Error" }
```
### **GET** /users
- Aqui é a descrição de retorno do endpoint.

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```json
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
]
```


>:x: **_Retorno default_**

>**HTTP Status** `500`

**Response**
```
{ "descriptions": "Internal Servr Error" }
```

### **GET** /posts
- Aqui é a descrição de retorno do endpoint.

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
]
```


>:x: **_Retorno default_**

>**HTTP Status** `500`

**Response**
```
{ "description": "Internal Server Error" }
```

### **POST** /posts
- Aqui é a descrição de retorno do endpoint.
**_payload_**
```json
{
  "title": "This is a Test 1",
  "body": "This is a test 1 test service",
  "userId": 10
}
```

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```
{
    "title": "This is a Test 1",
    "body": "This is a test 1 test service",
    "userId": 10,
    "id": 101
}
```


>:x: **_Retorno default_**

>**HTTP Status** `500`

**Response**
```
{ "description": "Internal Server Error" }
```

### **PUT** /posts/:id
- Aqui é a descrição de retorno do endpoint.
**_payload_**
```json
{
  "title": "This is a Test 1",
  "body": "This is a test 1 test service",
  "userId": 10
}
```

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```
{
    "title": "This is a Test 1",
    "body": "This is a test 1 test service",
    "userId": 10,
    "id": :id
}
```


>:x: **_Retorno default_**

>**HTTP Status** `500`

**Response**
```
{ "description": "Internal Server Error" }
```

### Dependências (microservices, Koa, koa-routers, koa-body, request, request-promise, Bristol, etc)

### Instalação
**Caso esteja em ambiente Windows, você deverá utilizar o terminal do Ubuntu para Windows.**

Para executar a aplicação em ambiente local, basta executar os seguintes comandos no terminal: 
```bash
nvm install
nvm use

npm install
npm start
```
A aplicação estará rodando em http://localhost:3000