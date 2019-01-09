# PHPSetter
PHPSetter is a simple tool that can be run in any web browser.
PHPSetter é uma simples ferramenta que pode ser executada em qualquer navegador web. 

With it the PHP developer can easily enter the name of their variables that the application will generate a complete class with the Getter, Setter and Constructor methods.
Com ela o desenvolvedor PHP pode facilmente inserir o nome de suas variáveis que a aplicação vai gerar uma classe completa com os métodos Getter, Setter e Constructor.


The use of this tool is very simple, it consists of a few steps and rules for everything to work correctly.
A utilização dessa ferramenta é muito simples, ela é composta por algumas etapas e regras para que tudo funcione corretamente.

Check out our working example
Confira nosso exemplo em funcionamento
https://www.satellasoft.com/servicos/phpsetter


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
name email password
```


# Getter, Setter And Construtor
There are three checkboxes, which by default are active, you can choose not to select them before generating the code.
Existem três checkbox, que por padrão estão ativos, você pode optar em não seleciona-los antes de gerar o código. 

## Setter
When this option is checked, it creates the Setter methods, as shown in the block below.
Quando essa opção estiver marcada, cria os métodos Setter, como mostra o bloco abaixo.

```php
public function setName($Name){
  $this->name = $Name;
}
```

## Getter
When this option is checked, the Getters methods will be created, as shown by the code below.
Quando essa opção estiver marcada, será criado os métodos Getters, como mostra o código abaixo.

```php
public function getName(){
  return $this->name;
}
```

## Constructor
The constructor is an optional method for many developers, but when it is checked, the attributes with all the predefined parameters in the method will be created. See an example below.
O construtor é um método opcional para muitos desenvolvedores, porém quando ele estiver marcado, será criado os atributos com todos os parâmetros pré-definidos no método. Veja um exeplo abaixo.

```php
public function __construct($name, $email, $password){
  $this->name = $name;
  $this->email = $email;
  $this->password = $password;
}
```

# Final Result/Resultado Final
```php
<?php
	namespace ../../;

	class ClassName{

		private $name;
		private $email;

		public function __construct($name, $email){
			$this->name = $name;
			$this->email = $email;
		}
		public function setName($Name){
			$this->name = $Name;
		}

		public function setEmail($Email){
			$this->email = $Email;
		}

		public function getName(){
			 return $this->name;
		}

		public function getEmail(){
			 return $this->email;
		}

	}
?>
```
