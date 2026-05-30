import { product } from "./interfaces";
(function(){
  var userName:string= "hazem";
  var userAge:number=40;
  var user:object={name:"ahmed", age:"34"};
  var onSale:boolean=true;
  var friends:string[]=["Hazem","Abdelazez","ave"];
var numb:number[]=[23,56,67];

 var product1:product[]=[
  {id:1,name:"laptop",price:5000,category:"electronics"},
  {id:1,name:"laptop",price:5000,category:"electronics", onSale:true},
  {id:1,name:"laptop",price:5000,category:"electronics"}
  ];

function sayHello(name:string){
return(`hello ${name}`);
}
sayHello("John");

}())