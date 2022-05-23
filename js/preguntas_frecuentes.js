const preguntas = document.querySelectorAll('.categorias .categoria .contenedor-pregunta .pregunta img');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.categorias .contenedor-preguntas.activo .contenedor-pregunta .respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		


	});
});