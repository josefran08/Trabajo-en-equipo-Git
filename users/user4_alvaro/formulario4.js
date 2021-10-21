var formulario = document.getElementById('formulario4');
	var nombre = formulario.nombre;
	
	
	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Nombre de aula');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
		

	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Capacidad');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}

	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Planta');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}


	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Descripción');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}


	function validarForm(e){
		error.innerHTML="";
		validarNombre(e);
	}

	formulario.addEventListener('submit', validarForm);