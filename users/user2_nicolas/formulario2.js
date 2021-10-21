var formulario2 = document.getElementById('formulario');
	var nombre = formulario.nombre;
    var apellido = formulario.apellido;
	var Edad = formulario.Edad;
	var Dirección = formulario.Dirección;

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

    function validarApellido(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa sus apellidos');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
	function validarDireccion(e){
		if(Direccion.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingrese su dirección');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
	function validarEdad(e){
		if(Edad.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingrese su edad');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
	
	
	function validarForm(e){
		error.innerHTML="";
		validarNombre(e);
        validarApellido(e);
		validarEdad(e);
		validarDireccion(e);

	}

	formulario.addEventListener('submit', validarForm);