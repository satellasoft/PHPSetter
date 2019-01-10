/*

www.gunnarcorre.com
This software was developed by Gunnar Correa, and is available on Github.
*/
var variablesArray =  [];

function CreateData(){
  if(GetVariables().length > 0){
    GenerateClass();
  }else{
    UIkit.modal.alert('Invalid variable field!')
  }
}

function GenerateClass(){
  variablesArray = CreateVariables();

  var data = [
    "&lt;?php",
    "<br>",
    "\tnamespace ../../;",
    "<br>",
    "<br>",
    "\tclass ClassName{",
    "<br>",
    "<br>",
    DeclareVariables(),
    "<br>",
    Constructor(),
    "<br>",
    Setter(),
    Getter(),
    "\t}",
    "<br>",
    "?>",
  ];

  document.getElementById("finalResult").innerHTML = "";
  for(var i = 0; i < data.length; i++){
    document.getElementById("finalResult").innerHTML += data[i];
  }
  Syntax();
}

function Syntax(){
  block = document.getElementsByTagName("code");
  for(var i = 0; i < block.length; i++){
    hljs.highlightBlock(block[i])
  }
}

function GetVariables(){
  return document.getElementById("txtVariables").value;
}

function CreateVariables(){
  variablesArray = null;
  var datas = (GetVariables().trim()).split("\n");
  return datas;
}

function DeclareVariables() {
  var variables = "";
  for(var i = 0; i < variablesArray.length; i++){
    variables += "\t\tprivate $" +variablesArray[i]+ ";<br>";
  }

  return variables;
}

function Getter(){
  if(!document.getElementById("cbGetter").checked)
  return "";
  var getter = "";

  for(var i = 0; i < variablesArray.length; i++){
    var name = Ucfirst(variablesArray[i]);
    getter += "\t\tpublic function get" + name + "(){<br>";
    getter += "\t\t\t return $this->" + variablesArray[i] + ";<br>";
    getter += "\t\t}<br><br>";
  }

  return getter;
}

function Setter(){
  if(!document.getElementById("cbSetter").checked)
  return "";

  var setter = "";

  for(var i = 0; i < variablesArray.length; i++){
    var name = Ucfirst(variablesArray[i]);
    setter += "\t\tpublic function set"+name+"($"+name+"){<br>";
    setter += "\t\t\t$this->" + variablesArray[i] + " = $" +name + ";";
    setter += "<br>\t\t}<br><br>";
  }


  return setter;
}

function Constructor(){
  if(!document.getElementById("cbConstructor").checked)
  return "";

  var constructor = "";

  constructor +="\t\tpublic function __construct("

  for(var i = 0; i < variablesArray.length; i++){
    constructor += "$" + variablesArray[i] + " = ''" + ((i+1) < variablesArray.length ? ", " : "") ;
  }
  constructor+= "){";

  for(var i = 0; i < variablesArray.length; i++){
    constructor += "<br>\t\t\t$this->" + variablesArray[i] + " = $" + variablesArray[i] + ";";
  }

  constructor +="<br>\t\t}<br>";
  return constructor;
}

function Ucfirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
