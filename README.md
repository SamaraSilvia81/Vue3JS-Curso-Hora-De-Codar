# VUE 3 JS

> Vue é um framework progressivo para criar interfaces

- Tem a construção de layouts baseada em `componentes`;
- A curva de aprendizado é `baixa` (muito com pouco - tipo Python);
- Está entre os frameworks front-end mais utilizados (assim )
- Possui módulos para manipulação de rotas (`Vue Router`) e também state (`Vuex`);
- É flexível, o que permite que ser usado em uma parte de um projeto server-side já criado, até se adaptar a todo o projeto.

## Pré-Requisitos

> O ideal é: Conhecimentos intermediários em HTML, CSS e JavaScript

- Principalmenente JS e seus `recursos da versão ES6` (map, filter, reduce e ...);
- Porém, tudo será `explicado em detalhes`;
- Além disso, teremos exemplos práticos que envolvem os conhecimentos necessários;

## Instalação 

- Instalar o Vue em um projeto é simples, podemos utilizar `via CDN`;
- Basta inserir o link de script e pronto!
- Porém para ter acesso a todas as funcionalidades do Vue.js, é recomendado instalar pelo `CLI` (veremos depois);
- Vamos criar o nosso `primeiro projeto em Vue!`.

## Inputs e Data Binding 

- Uma das funcionalidades mais interessantes é o `date binding`;
- Onde temos a possibilidade de `mudar em tempo real um dado`, por meio do que é recebido de um input, por exemplo;
- O Vue torna isso mais fácil ainda, `algumas linhas e pronto`;

### Options API

> Estilos de API - Os componentes do Vue podem ser criados em dois estilos de API diferentes: API Options e API Composition.

Com a API Options, definimos a lógica de um componente usando um objeto de opções como , e . As propriedades definidas pelas opções são expostas em funções internas, o que aponta para a ocorrência do componente: `data` `methods` `mounted` `this`. 

Ele vai lembrar a lógica da linguagem de OPP.

#### `Exemplo 01:` Inserindo Nome

- `JavaScript`

```js

const MyNameApp = {

    data() {
        return  {
            name: "",
            age: 19,
            input_name: "" // Criamos no próprio data uma referência para o input
        }
    },

    methods: {
        submitForm(e){
            e.preventDefault(); // Não permite o envio do formulário, atualizando a página
            this.name = this.input_name // Atribuição de valores - Alteração simultânea
        }
    }
}

```

- `HTML`

Para a exemplicação do `Data Binding` iremos criar um formulário padrão do HTML.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Vue</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="src/app.js" defer></script>
</head>
<body>
    <div id="app">

        <!--Input e Data Binding-->
        <form action="" id="app-form">
            <input type="text" v-model="input_name" placeholder="Type your name">
            <input type="submit" value="Send" v-on:click="submitForm">
        </form>

        <p> My name is: {{name}} </p>
        <p> Data Binding: {{input_name}} </p>
    </div>
</body>
</html>

```

- `v-model:` Forma de comunicar ao vue. Esse dado exposto será salvo em alguma parte dele.

```html
<input type="text" v-model="input_name" placeholder="Type your name">
```

- `v-on:click` Aqui estamos estabelecendo uma `Diretiva de click`.

    Nessa parte da lógica podemos observar os seguintes pontos:

    - Vamos emitir uma chamada para o vue que procurará por essa instância.
    - O click está ouvindo (on) a emissão do evento que será captado e enviada quando a função "submitform" for ativada.

```html
<input type="submit" value="Send" v-on:click="submitForm">
```

- `input_name:` Crio um dado e ele reflete na minha aplicação em tempo real.

```html
<p> Data Binding: {{input_name}} </p>
```

## Utilizando o Vue CLI

- O `CLI` é uma ferramenta de linha de comando do VUE;
- Possibilita `criar e configurar` projetos de forma mais avançada;
- `Por exemplo:` Adicionar o Vue Router desde a instalação do projeto;
- Isso flexibiliza muito as coisas, vamos então instalar o Vue CLI e testar ele!

## Criando Componentes 
## Dados em Componentes (data)
