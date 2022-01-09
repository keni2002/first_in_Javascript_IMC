window.onload = function(){
	
	var lista = new Array();
	var tabla = document.getElementById('tbody');
	var cajaNombre = document.f1.cajaNombre;
	cajaNombre.focus();
	var cajaAltura = document.f1.cajaAltura;
	var cajaPeso = document.f1.cajaPeso;
	var btnAceptar = document.f1.btnAceptar;
	var btnReset = document.f1.btnReset;
	var resultado = document.getElementById('resultado');
	
	
	/*Validar flotante:*/
	function esFlotante(num) {
		var numero = parseFloat(num);
		if (isNaN(numero)){
			return false;
		} else {
			return true;
		}
	}

	function redondear(n){
		redondo = Math.round(n*10);
		return redondo/10;
	}

	function mes(indice){
		switch(indice){
			case 0:
				return 'ene';break;
			case 1:
				return 'feb';break;
			case 2:
				return 'mar';break;
			case 3:
				return 'abr';break;
			case 4:
				return 'may';break;
			case 5:
				return 'jun';break;
			case 6:
				return 'jul';break;
			case 7:
				return 'agos';break;
			case 8:
				return 'sep';break;
			case 9:
				return 'oct';break;
			case 10:
				return 'nov';break;
			case 11:
				return 'dic';break;

		}
	}
	function min(sec){
		if(sec<10){
			return '0' + sec; 
		}else{
			return sec;
		}
	}

	
	btnAceptar.addEventListener('click', function(){ //evento
		var alturaValor = cajaAltura.value; //altura
		var pesoValor = cajaPeso.value; //peso
		var nombreValor = cajaNombre.value; //nombre
		var iMC; //el valor de indice de masa corporal
		var mensaje = ''; //si esta desnutrido o algo
		
		if(alturaValor == '' || pesoValor == '' || nombreValor == ''){
			alert('Rellene todos los campos'); 
		} else if(!esFlotante(alturaValor) || !esFlotante(pesoValor) ){
			alert('digite solo numeros en peso y altura');
		} else{
			console.log('ok')
			//paso la prueba
			pesoValor = parseFloat(pesoValor);
			alturaValor = parseFloat(alturaValor);
			iMC = redondear(pesoValor / Math.pow(alturaValor,2));
			
			switch(true){
				case iMC <= 16.5:
					mensaje = "Desnutricion";break;
					resultado.style.color = 'rgb(64, 74, 224)';
				case iMC > 16.5 && iMC <= 18.5: //    a < x <= b
					mensaje = "Delgadez";
					resultado.style.color = 'rgb(197, 53, 209)';break;
				case iMC > 18.5 && iMC <= 25:
					mensaje = "Corpulencia normal";
					resultado.style.color = 'rgb(21, 163, 30)';
					break;

				case iMC > 25 && iMC <= 30:
					mensaje = "Sobrepeso";
					resultado.style.color = 'rgb(226, 105, 45)';break;
				case iMC > 30 && iMC < 40:
					mensaje = "Obesidad moderada";
					resultado.style.color = 'rgb(226, 45, 45)';break;
				case iMC >= 40:
					mensaje = "Obesidad moderada o Masiva";
					resultado.style.color = 'red';break;
				default:
					mensaje = "Desconocida";		
			}
			resultado.innerText = mensaje + " ("+iMC+")";
			lista[0] = nombreValor;
			lista[1] = alturaValor +'m';
			lista[2] = pesoValor + 'kg';
			lista[3] = iMC;
			lista[4] = mensaje;
			let fecha = new Date()
			let ano = fecha.getFullYear();

			lista[5] = mes(fecha.getMonth()) + ' '+fecha.getDay()+ ', '+ano+'  ('+ fecha.getHours()+':'+min(fecha.getMinutes())+')';
			tabla.innerHTML += "<tr><td>"+lista[0]+"</td><td>"+lista[1]+"</td><td>"+lista[2]+"</td><td>"+lista[3]+"</td><td>"+lista[4]+"</td><td>"+lista[5]+"</td></tr>";
					

		}//FIN DEL ELSE

		
	})
	btnReset.addEventListener('click', function(){
		document.f1.reset();
		resultado.innerText="Resultado";
		resultado.style.color = "blue";
	})






}