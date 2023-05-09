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

- É por meio de `Componentes` que podemos dividir o nosso layout em partes;
- O nível de abstratação e reutilização de código pode ser escolhida
- `Cada componente tem a sua responsabilidade`, por exemplo: um componente que é uma tabela e outro que é um rodapé;
- Dividir as entidades desta maneira deixa o projeto com uma `separação de responsabilidades` maior;
- De certa forma, os componentes respeitam a 1° princípio do acrônimo SOLID - `Single Responsibility Principle` - , que estabelece que uma classe deve ter apenas uma única responsabilidade, o que pode tornar o código mais fácil de entender, testar e manter.
- Cada um tendo seu CSS e também os dados que manipula;

### Exemplo 01: FirstComponent

Antes de começarmos a criar vamos deletar alguns arquivos vue.js para estruturarmos do zero:

- Todos dentro da pasta components;
- Todos dentro da pasta views;
- Limpar o arquivo App.vue

Tendo feito isso, no arquivo vue vamos inserir as seguintes linhas de código:

- `Template:` É uma seção de código que descreve a estrutura e a aparência de uma página web ou componente. Ele contém o HTML, CSS e marcações de dados do Vue que definem a aparência e o comportamento de um componente.
    - É uma tag essencial para determinar um componente
    - Seria o Return do React ou o Body do HTML

```vue

<!--App.vue-->

<template>
  <h1>Hello World</h1>
</template>

```

- `Script:` Bem como no HTML usamos a tag <script> para linkdar uma página js ou até mesmo inserir blocos de códigos js, aqui iremos usar para marcação lógica javascript.

    - Precisamos exportar o template que criamos. Assim como, no React quando fazemos `export default app = () -> {}`.
    - `Name:`  Se eu mudar o nome daqui para qualquer outro não vai importar, porque eu estou chamando a página corretamente em "main", mas como boas práticas é importante cada nomeação fazer jus a sua referência.
    - `Components:`  Criando um outro objeto declarando ao vue que usaremos components

```vue

<!--App.vue-->

<script>
  import FirstComponent from './components/FirstComponent.vue';

  export default {
    name: 'App',
    components: {
      FirstComponent
    }
  }
</script>

```

- `Components:`  Criando um outro objeto declarando ao vue que usaremos components

```vue

<!--App.vue-->

<template>
  <!--Essa chamada funciona com letras minusculas e um (-) separando tbm-->
  <FirstComponent/> <!--Devemos chamar o componente importado-->
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue';

  export default {
    name: 'App',
    components: {
      FirstComponent
    }
  }
</script>

```

```vue

<!--FirstComponent.vue-->

<template>
    <h1>Hello Vue!!</h1>
</template>

<script>
    export default {
        name: 'FirstComponent'
    }
</script>

```

## Dados em Componentes (data)

- Os components podem conter dados;
- Podemos `inicializar já com algum valor` e também modificar durante a execução do programa;
- Os dados ficam em uma função chamada `data`;
- Esta função deve retornar os dados em `formato de objeto`;

### Exemplo 02: Inserindo dados nos componentes

- `Data():` É um método específico, no qual tem como responsabilidade expor dados no componente onde está junto no arquivo.
    - Sendo uma função, como qualquer outra, será evocada com o ();
    - Os dados só podem ser utilizados dentro do próprio componente, não pode exportar.

```vue

<template>
    <!--Devemos colcoar um elemento pai-->
    <div id="first-component">
        <h1>Hello Vue!!</h1>
        <p>I'm {{ name }} and my ocupation is {{ ocupation }}</p>
    </div>
</template>

<script>
    export default {
        name: 'FirstComponent',
        // Evocada como uma função com ()
        data () {
            return {
                name: "Samara",
                ocupation: "Developer FrontEnd"
            }
        }
    }
</script>

```

- Só porque o `App.vue` abriga componentes não quer dizer que ele não possa ter o seu próprio data também.

```vue

<template>
  <div id="app">
    <FirstComponent/>
    Test: {{test }}
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue';

  export default {
    name: 'App',
    components: {
      FirstComponent
    },
    data(){
      return {
        test: "Testing"
      }
    }
  }
</script>

```

## Lyfe Cycle Hooks

- Os `Life Cycle Hooks` são eventos que podem ser ativados em determinadas partes ou momentos da execução do programa;
- Exemplo: `created` - Aqui teremos um hook quando uma view ou componente for criada.
- Executa o código a partir do momento que o componente é criado;
- Estes gatilhos são interessantes para alterar a aplicação em diversas etapas diferentes;

```vue

<template>
    <h1>My name is: {{ name }}</h1>
</template>

<script>
export default {
    name: 'LyfeCycle',
    data() {
        return {
            name: "I don't know yet"
        }
    },
    // Hook que vai refletir na minha aplicação
    // Me ajudará a tornar dinâmico os meus dados
    created(){
        // this.name = "Samara"
        // Ao fazer isso passamos por cima do "mounted"
        setTimeout(() => {
            this.name = "Samara"
        }, 1000)
    },
    // Hook que está acima da hierarquia
    
    mounted(){
        // Isso nos ajuda a vê melhor o que está acontecendo
        setTimeout(() => {
            this.name = "Matheus"
        }, 2000)
    }
}
</script>

```

## Hierarquia de Componentes

- É comum `componentes terem outros componentes`que dependem deles;
- Ou seja, criamos uma `árvore de componentes`;
- Precisamos tomar cuidado para isso não virar uma `bagunça`;
- Com essa divisão de componentes em subcomponentes, separamos mais ainda as responsabilidades de cada um dos componentes;
- A ideia da componentização é que quando um determinado recurso se é utilizado mais de uma vez e em lugares diferentes é interessante se criar um componente disso.

### Exemplo 03: Person e Info

- Vamos criar um componente `Person.vue`, no quaal dentro dele estará outro componente para exportar informações.

```vue
<template>
    <!--Descrever uma pessoa-->
    <div id="info-person">
        <p>I'm working actually with Developer Frontend</p>
        <p>I use this technologies at work: </p>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Info"
    }
</script>
```

```vue 

<!--Person.vue-->

<template>
    <div id="person">
        <h2>Esta é a descrição da pessoa <span>{{ name }}</span> </h2>
        <Info/>
    </div>
</template>

<script>

import Info from '../components/Info.vue';

    export default {
        name: "Person",
        // Se eu coloco components embaixo não é renderizado
        components:{
            Info
        },
        data(){
            return{
                name: "Samara",
            }
        }
    }
</script>

```

- `Lang="ts":` Esse é um termo colocado quando um _export default_ não tem um _data()_ apenas o name do arquivo, por isso o TypeScript é acionado.

```vue 

<!--Info.vue-->

<template>
    <!--Descrever uma pessoa-->
    <div id="info-person">
        <p>I'm working actually with Developer Frontend</p>
        <p>I use this technologies at work: </p>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Info"
    }
</script>

```

- Analisando o comportamento de `Person` e `Info` podemos perceber que `App` também é um componente.

- Ao reutilizarmos um componente podemos chamá-lo para representar ao diferente, como no exemplo de "Form".

## Diretivas

- As `diretivas `no Vue.js são instruções especiais que são usadas para manipular o DOM (Document Object Model) de forma declarativa.
- Existem muitas delas como `v-if`, `v-for`, `v-show`...
- A sua sintaxe é sempre `v - none`, sendo "none" alguma lógica que você queira implementar como for, else..., mas lembre-se que tem que ser algo que exista no VUE, não vale imventar não.
- Pode mudar a exibição de uma parte do layout, baseada em uma condição;
- `As diretivas são essenciais` para uma aplicação dinâmica;
- Podemos alterar a lógica pelos valores inseridos em `data`.

### Exemplos 

- `v-if`, `v-else-if` e `v-else`: São usados para implementar a lógica de condicionais.
    - Tudo que estiver dentro de "" é lógica JS
    - If sempre precisa do else

```vue

<template>
    <div id="info-person">
        <!--As diretivas permite implemntar lógica js no html-->
        <p v-if="is_working">I'm working actually with Developer Frontend</p>
        <p v-else>I'm looking for new opportunities!</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Info",
        data(){
            return {
                is_working: true,
            }
        }
    }
</script>

```

- `v-show`: Caso não queira usar o if pode usar ele. Ele funciona como um togle

```vue

<template>
    <div id="info-person">
        <p v-if="is_working">I'm working actually with Developer Frontend</p>
        <p v-else>I'm looking for new opportunities!</p>
        <p>I use this technologies at work: </p>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
        </ul>
        <p v-show="show_email">Send a message for : {{ email }} </p>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Info",
        data(){
            return {
                is_working: true,
                show_email: true,
                email: "info@gmail.com"
            }
        }
    }
</script>
```

## Atributos Dinâmicos

- Os `argumentos são valores dinâmicos` que podem ser inseridos em:
    - `Diretivas:` baseados nestes valores para executar um determinado comportamento;
    - `Atribuitos:` mudar URL de links ou src de imagens;
- Essenciais para alterar a experiência do usuário no uso da aplicação;

### Exemplos: Picture e Email 

- `v-bind:` É uma diretiva usada para atribuir dinamicidade aos atributos/argumentados, de modo que possamos usar dados do data() sem chamá-los diretamente.

```vue

<!--Info.vue-->

<template>
    <!--Descrever uma pessoa-->
    <div id="info-person">
        <Picture/>
        <!--Usamos o v-bind, se não a url que passamos estaria ativa na própria tag e queremos que ela seja apenas uma referência. Assim como, ocorre com "is_working"-->
        <p>If you want acess my portfolio <a v-bind:href="my_link" target="_blank"> just click here </a> </p>
    </div>
</template>

<script lang="ts">

    import Picture from './Picture.vue';

    export default {
        name: "Info",
        components:{
            Picture
        },
        data(){
            return {
                my_link: "http://google.com"
            }
        }
    }
</script>

```

- `:` Importante ressaltar que o `v-bind` também possue essa nomecnlatura mais breve.

```vue

<!--Picture.vue-->

<template>
    <div id="picture">
        <!--Podemos encurtar v-bind só colocando :-->
        <img :src="avatar" :alt="description">
    </div>
</template>

<script lang="ts">
    export default {
        name: "Picture",
        data(){
            return {
                avatar: "../img/avatar.jpg",
                description: "Avatar developer"
            }
        }
    }
</script>

```