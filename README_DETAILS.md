# Visão geral:
O seguinte Serviço foi criado para mostrar algumas maneiras de executar o 'Unit Test' utilizando [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai) e [sinon](https://www.npmjs.com/package/sinon).

Alguns padrões de projeto foram implementados como o [Singleton](https://www.sitepoint.com/javascript-design-patterns-singleton/), para criar uma única instância que será utilizada em toda a aplicação, [Observer Pattern](https://netbasal.com/javascript-observables-under-the-hood-2423f760584), que será implementado no modelo de logging.

  
A principal funcionalidade da aplicação é se comunicar com serviços externos. Usamos como exemplo um serviço chamado [JSONPlaceholder](https://jsonplaceholder.typicode.com/), Que possibilita dentre outras opções, listar usuários e posts e criar um novo post. Usamos a biblioteca [request-promise](https://www.npmjs.com/package/request-promise), para manipular as requisições HTTP.

Para criar o web service foi utilizado o [Koa framework](https://koajs.com/) que facilita a criação de web services é incrivelmente pequeno, modular e poderoso.

Alguns caracteristicas do Koa:

Livre de middlewares: Talvez isso pareça uma desvantagem, mas é o oposto, porque muitas vezes não precisamos de todo o pacote de recursos, isso nos permite ter um serviço rápido, podendo adicionar recursos conforme necessário.

Adeus Callbacks: Koa funciona completamente bem com os novos recursos desde o ES6, que facilita o uso de `promises` e `async/await`, que melhoram a leitura do código e evita erros de retorno em funções.

Middlewares em cascata: A aplicação de middlewares é muito mais legível e o koa os aplica de maneira descendente, ou seja, conforme os encontra, e quando retorna respostas, retorna para cada um dos middlewares, será detalhado mais a frente e você entenderá perfeitamente .

Tratamento de erros: Com o koa, podemos ter um controle mais preciso quando as exceções ocorrem, um único middleware é suficiente para ajudar a resolver isso, acredite ou não, é muito útil enviar respostas personalizadas quando um erro de 500 ocorre.

Excelente desempenho: Comparado a outras estruturas, o koa está entre os mais rápidos, o que não seria possível sem um núcleo simples e leve.

# Criando o Servidor
```
    .
    ├── configs                # Dentro dessa pasta estão os arquivos contendo as constantes da aplicação.
    └── server                 # Arquivos contendo as configurações gerais do servidor da aplicação.
       ├── create-server.js    # Onde é criado o servidor com as configurações necessárias para iniciar o serviço,
       |                       # essa mesma configuração é utilizada para os testes de integração. 
        ├── server.js          # Monta o servidor para uso dev e prod.
        └── index.js           # E o Main.
    
```

# Unit Test (Testes Unitários e de integração)

[Aqui](https://www.taniarascia.com/unit-testing-in-javascript/) temos um exemplo de testes unitários com Mocha.

### Vantagens do testes unitarios 

1. Fornece trabalho ágil: Como um procedimento ágil, permite detectar erros a tempo, para que você possa reescrever o código ou corrigir erros sem precisar voltar ao início e refazer o trabalho. Como os pequenos são feitos periodicamente e em embalagens pequenas. Tempo e custo decrescentes.

2. Qualidade do código: Testando e detectando continuamente erros, quando o código é finalizado, é um código de qualidade limpo.

3. Detecte erros rapidamente: Diferentemente de outros processos, os testes de unidade nos permitem detectar erros rapidamente, analisamos o código por partes, realizando pequenos testes e, periodicamente, além disso, os testes podem ser realizados quantas vezes forem necessárias para obter o resultado ideal.

4. Facilita mudanças e favorece a integração: Os testes de unidade nos permitem modificar partes do código sem afetar o todo, simplesmente para poder solucionar os erros que encontramos ao longo do caminho. Os testes de unidade, divididos em blocos individuais, permitem a integração de novas contribuições para criar um código mais complexo ou atualizá-lo, dependendo do que o cliente exige.

5. Forneça informações: Graças ao fluxo contínuo de informações e à superação de erros, uma grande quantidade de informações pode ser coletada para evitar futuros erros.

6. Processo de depuração: Testes de unidade ajudam no processo de depuração. Quando um erro ou bug é encontrado no código, é necessário apenas decompor o trecho de código testado. Essa é uma das principais razões pelas quais os testes de unidade são feitos em pequenos pedaços de código, simplificando bastante a tarefa de solução de problemas.

#### No diagrama a seguir é a montagens dos test unitarios Feitos neste sistema:

```
    .
    ├── configs                   # Dentro dessa pasta estão os arquivos contendo as constantes da aplicação.
    ├── server                    # Arquivos contendo as configurações gerais do servidor da aplicação.
    ├── src                       # lib, models, services, logs...
    └── test                      # Testes unitários.
        ├── api                   # Test de integração.
        ├── controller            # Test unitarios para os controllers.
        ├── expected              # resultados final do test.
        ├── mocks                 # Fake recives dos serviços extesrnos.
        └── helpers               # helpers de configuração para os test unitarios e o de integra;ão.
            ├── create-server.js  # Monta o servidor fake para realizar os test de integração.
            └── index.js          # Prepara as bibliotecas de de test unitarios para as variaveis globals
                                  # para assim carregar apenas uma vez so.
```

## Rodar os test unitarios

Para Verifiar a covertura do Codigo se usa a biblioteca [NYC](https://www.npmjs.com/package/nyc), onde a mesma e configurara para 
para exportar o relatorio de covertura, onde depois de executar o test gera o relatorio na rota`coverage/lcov-report/index.html` 

#### Para Rodar os test:
```bash
$ npm run test  # é para rodar so os test unitarios.
$ npm run cover # é para rodar os test unitarios e verificar a covertura do codigo.
```
Assim estão confgurados os script no `package.json` para os testes:
```json
{
  "script": {
    ...,
    "test": "cross-env NODE_ENV=test; mocha --require test/helpers \"@(src|test)/**/*@(.spec.js)\" --timeout 5000 --exit",
    "cover": "nyc npm test"
  }
}
```
