# PHPSetter
PHPSetter is a simple tool that can be run in any web browser.

With it the PHP developer can easily enter the name of their variables that the application will generate a complete class with the Getter, Setter and Constructor methods.

PHPSetter é uma simples ferramenta que pode ser executada em qualquer navegador web. 

Com ela o desenvolvedor PHP pode facilmente inserir o nome de suas variáveis que a aplicação vai gerar uma classe completa com os métodos Getter, Setter e Constructor.


The use of this tool is very simple, it consists of a few steps and rules for everything to work correctly.

A utilização dessa ferramenta é muito simples, ela é composta por algumas etapas e regras para que tudo funcione corretamente.

# Declaring the variables/Declarando as variáveis
In the Variables field, you need to enter the name of the variables, without $ and also without visibility.

No campo Variables, você precisa inserir o nome das variáveis, sem $ e também sem delcarar a visibilidade

> **Right/Certo**
```
name
email
password
```

> **Wrong/Errado**
```
private $name;
$email
password;
```


# Getter, Setter And Construtor
There are three checkboxes, which by default are active, you can choose not to select them before generating the code.

Existem três checkbox, que por padrão estão ativos, você pode optar em não seleciona-los antes de gerar o código. 

## Setter
When this option is checked, it creates the Setter methods, as shown in the block below.
Quando essa opção quando marcada, cria os métodos Setter, como mostra o bloco abaixo.

`
public function setName($Name){
  $this->name = $Name;
}
`

## Getter

## Constructor
