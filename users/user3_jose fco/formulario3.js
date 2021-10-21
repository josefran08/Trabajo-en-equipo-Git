var formulario = document.getElementById('formulario');
	var nombre = formulario.nombre;
	var Curso = formulario.Curso;
	var horas = formulario.horas;
	var descripcion = formulario.descripcion;
	
	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa un nombre');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}

    function validarCurso(e){
		if(Curso.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa código de curso');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
	function validardescripcion(e){
		if(descripcion.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa una descripcion');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
	function validarhoras(e){
		if(horas.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa la hora');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
		
	function validarForm(e){
		error.innerHTML="";
		validarNombre(e);
        validarhoras(e);
		validardescripcion(e);
		validarCurso(e);
	}

	formulario.addEventListener('submit', validarForm);