/*tratando de hacer funcionar con boton function arrow
const food = (comida) =>{
food = document.getElementById('comida').value;
		if (comida === 'ceviche'){
			alert("oouchh, lo sentimos se acabo");
		}else if(comida === 'tacos al pastor'){
			alert('lo sentimos, se los comieron todos');
		}else if(comida === 'empanada de pino'){ 
			alert('El guaton loyola se ha llevado la ultima');
	}else  if (comida === 'hamburgueza'){
			alert('justo queda la ultima, buen provecho');
		}
	}*/
/* intento por llamar a boton y ejectutar la funcion


const btn = document.getElementById('btnOk').value;
	btn.addEventListener('click', function(){
	if (comida === 'ceviche'){
			alert("oouchh, lo sentimos se acabo");
		}else if(comida === 'tacos al pastor'){
			alert('lo sentimos, se los comieron todos');
		}else if(comida === 'empanada de pino'){ 
			alert('El guaton loyola se ha llevado la ultima');
		}else  if (comida === 'hamburgueza'){
			alert('justo queda la ultima, buen provecho');
		};
	})
	*/
/*esta funcion arrow funciona pero no puedo llamarla*/
	const food = (comida) => {
	if (comida === 'ceviche'){
		alert("ooouch, no queda");
	}else if(comida === 'tacos al pastor'){
		alert('lo sentimos, se los comieron todos');
	}else if (comida === 'empanada de pino'){
		alert('chupalla, el guaton loyola se las comio todas');
    }else{
		alert('justo queda la ultima, buen provecho')
	}
}
    