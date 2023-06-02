var edad1,edad2,edad3,cantidad,suma,edads,fc,cociente,cociente2,cociente3
var persona,mcm,MCM,edad1Inv,edad2Inv,edad3Inv,Inverso

function calcular_rs(){
   edad1 = $("#edad1").val()
   edad2 = $("#edad2").val()
   edad3 = $("#edad3").val()
    cantidad = $("#cantidad").val()
    edads = parseInt(edad1) + parseInt(edad2) + parseInt(edad3)
    mcm = minimoComunMultiplo(edad1,edad2)
    MCM = minimoComunMultiplo(mcm, edad3)
    edad1Inv = (1/edad1)/(1/MCM), edad2Inv = (1/edad2)/(1/MCM), edad3Inv = (1/edad3)/(1/MCM)
    Inverso = edad1Inv + edad2Inv + edad3Inv
    fc = parseFloat(cantidad/Inverso)

    col1()
    col2()
    col3()
    col4()
}

const maximoComunDivisor = (a, b) => {
    let temporal
    while (b !== 0) {
        temporal = b
        b = a % b
        a = temporal
    }
    return a
}

const minimoComunMultiplo = (a, b) => {
    return (a * b) / maximoComunDivisor(a, b)
}

function col1(){
    persona = 1 
	html = "";
	if(edads > 0 ){
		cociente = parseFloat(fc*edad1Inv)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad1)}</td>
                    <td>${`1/${edad1}`}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente)}</td>					
				</tr>`;	
        	
	}
	$("#col1").html(html);
}

function col2(){
    persona = 2 
	html = "";
	if(edads > 0 ){
		cociente2 = parseFloat(fc*edad2Inv)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad2)}</td>
                    <td>${`1/${edad2}`}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente2)}</td>
					
				</tr>`;	
	}
	$("#col2").html(html);
}


function col3(){
    persona = 3 
	html = "";
	if(edads > 0 ){
		cociente3 = parseFloat(fc*edad3Inv)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad3)}</td>
                    <td>${`1/${edad3}`}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente3)}</td>
					
				</tr>`;	
	}
	$("#col3").html(html);
}

function col4(){
    persona = "Total"
	html = "";
	if(edads > 0 ){
        var cocienteTotal = cociente + cociente2 + cociente3
		html += `<tr class="table-light">
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(edads)}</td>
                    <td>${`1/${MCM}`}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cocienteTotal)}</td>
					
				</tr>`;	
	}
	$("#col4").html(html);
}