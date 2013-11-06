var fido= { 
name:'fido', 
weight:40, 
breed:'puddle', 
loves:["walks",'fetching ball' ] 
};
var fidoJSON=
JSON.stringify(fido);
console.log(fido);
console.log(fidoJSON);
var fidoObjeto=JSON.parse(fidoJSON);
console.log(fidoObjeto);
console.log("El tipo de dato de la variable fido es:"+ typeof(fido));
console.log("El tipo de dato de la variable fidoJSON es:"+typeof(fidoJSON));
console.log("El tipo de dato de la variable fidoObjeto es:"+typeof(fidoObjeto));