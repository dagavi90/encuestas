//window.localStorage.clear();
if(window.localStorage.getItem("registros")==null){
	window.localStorage.setItem("registros", "");	
}
	function getOpcion(opcienes){
		var contA=document.createElement("div");
		contA.className="radio"
		var spanA=document.createElement("span");
		spanA.innerHTML=opcienes.label;


		var r1=document.createElement("input");	
		r1.type="radio";
		r1.id=opcienes.id;
		r1.value=opcienes.label;
		
		r1.name=opcienes.id;
		contA.appendChild(r1);
		contA.appendChild(spanA);
		
		return(contA);
	}
	function crearRadio(opciones){
		var cont=document.createElement("div");
		cont.className="control";
		var label=document.createElement("label");
		label.appendChild(document.createTextNode(opciones.label));
		label.setAttribute("for", opciones.id);
		
		
		cont.appendChild(label);
		cont.appendChild(getOpcion({label:'Excelente', id:opciones.id}));
		cont.appendChild(getOpcion({label:'Buena', id:opciones.id}));
		cont.appendChild(getOpcion({label:'Regular', id:opciones.id}));
		cont.appendChild(getOpcion({label:'Mala', id:opciones.id}));
		
		document.getElementById("form").appendChild(cont);
	}
	function crearInput(opciones){
		var cont=document.createElement("div");
		cont.className="control";
		var label=document.createElement("label");
		label.appendChild(document.createTextNode(opciones.label));
		label.setAttribute("for", opciones.id);
		var inp=document.createElement("input");	
		inp.type="text";
		inp.id=opciones.id;
		
		cont.appendChild(label);
		cont.appendChild(inp);
		
		document.getElementById("form").appendChild(cont);
	}
	function getDatosRadios(){
		var txt="";
		for(var i=0;i<campos.length;i++){
			var inputs=document.getElementsByName(campos[i].id);
			
			for(var j=0; j<inputs.length;j++){
				if(inputs[j].checked){
					txt+=inputs[j].value+";";
					inputs[j].checked=false;
				}
			}
			
		}
		txt+="\n"	
		
		
		return (txt);
	}
	function getDatosCampos(){
		var txt="";
		for(var i=0;i<campos.length;i++){
			txt+=document.getElementById(campos[i].id).value+";";
			document.getElementById(campos[i].id).value="";
		}
		txt+="\n"	
		
		return (txt);
	}
	
	for(var i=0;i<campos.length;i++){
		campos[i].id="inp"+i;
		crearRadio(campos[i]);
	}
	
	function almacenarRegistro(){
		window.localStorage.setItem("registros", window.localStorage.getItem("registros")+ getDatosRadios());
	}
	function getRegistros(){
		return (window.localStorage.getItem("registros"));	
	}
	document.getElementById("guardar").addEventListener('click', function(eve){
		almacenarRegistro();
	}, false);
	
	document.getElementById("obtener").addEventListener('click', function(e){
		e.preventDefault();
		document.getElementById("resultado").value=getRegistros();
		document.getElementById("control2").style.display="block";
		document.getElementById("pass").focus();
	}, false);
	document.getElementById("cifrar").addEventListener('click', function(e){
		e.preventDefault();
		if(document.getElementById("pass").value=="encue2015"){
			document.getElementById("control2").style.display="none";
			document.getElementById("dialogo").style.display="block";
		}else{
			alert("Contraseña Incorrecta");

		}
		document.getElementById("pass").value="";
		document.getElementById("pass").focus();
		
	}, false);