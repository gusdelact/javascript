/* Codigo JavaScript para representar el concepto de un objeto con sus metodos */

//Definir el constructor 
function Movie(title,genre,rating,showtimes) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes; 
}

//Definir metodos de la clase
Movie.prototype.getNextShowing = function() {
  var now = new Date().getTime();
  var result="No showtime available";
  for (var i=0;i<this.showtimes.length;i++) {
     var showtime = getTimeFromString(this.showtimes[i]);
    if ((showtime-now) > 0 ) {
       result= 'Next show of ' + this.title + ' is  ' + this.showtimes[i];
       break;
    }
  }
  return result;
};
//Retorna la representacion del objeto como un elemento ul con elementos li
Movie.prototype.view= function() {
  var ul = document.createElement('ul');
  for (var prop in this ) {
    //se imprimen todas las propiedades menos las funciones
    if (typeof(this[prop]) !=  'function' ) {
     var value = this[prop];
     var li=document.createElement('li');
     li.innerHTML= 'Propiedad ' + prop + ' Valor ' + value;
     ul.appendChild(li);
    }
  }
  return ul;
}
//funcion para convertir el objeto de tipo Movie a JSON
Movie.prototype.toJSON = function() {
  return JSON.stringify({
    title: this.title,
    genre: this.genre,
    rating: this.rating,
    shotimes:this.showtimes}
  );
}
//funciones de soporte
function getTimeFromString(str) {
	var theTime = new Date();
	var time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}
