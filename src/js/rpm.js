var edad1,edad2,edad3,edad4,cantidad,suma,edads,fc,cociente,cociente2,cociente3,cociente4
var persona,mcm,MCM,MCMTotal,tiempo1,tiempo2,tiempo3,tiempo4
var edtiempo1,edtiempo2,edtiempo3,edtiempo4
var inverso1,inverso2,inverso3,inverso4,inversoTotal,tiempototal

function calcular_rs(){
   edad1 = $("#edad1").val()
   edad2 = $("#edad2").val()
   edad3 = $("#edad3").val()
   edad4 = $("#edad4").val()

   tiempo1 = $("#tiempo1").val()
   tiempo2 = $("#tiempo2").val()
   tiempo3 = $("#tiempo3").val()
   tiempo4 = $("#tiempo4").val()

   cantidad = $("#cantidad").val()
   edtiempo1 = (parseInt(edad1) / parseInt(tiempo1))
   edtiempo2 = (parseInt(edad2) / parseInt(tiempo2))
   edtiempo3 = (parseInt(edad3) / parseInt(tiempo3))
   edtiempo4 = (parseInt(edad4) / parseInt(tiempo4))

   mcm = minimoComunMultiplo(tiempo1,tiempo2)
   MCM = minimoComunMultiplo(mcm,tiempo3)
   MCMTotal = minimoComunMultiplo(MCM,tiempo4)

   inverso1 = ((edtiempo1) / (1/MCMTotal))
   inverso2 = ((edtiempo2) / (1/MCMTotal))
   inverso3 = ((edtiempo3) / (1/MCMTotal))
   inverso4 = ((edtiempo4) / (1/MCMTotal))

   inversoTotal = inverso1 + inverso2 + inverso3 + inverso4
   edads = parseInt(edad1) + parseInt(edad2) + parseInt(edad3) + parseInt(edad4)
   tiempototal = parseInt(tiempo1) + parseInt(tiempo2) + parseInt(tiempo3) + parseInt(tiempo4)

   fc = parseFloat(cantidad/inversoTotal)
   
   console.log(":" +edads + "::" + tiempototal)
    col1()
    col2()
    col3()
    col4()
    col5()
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
		cociente = parseFloat(fc*inverso1)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad1)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo1)}</td>
                    <td>${new Intl.NumberFormat().format(inverso1)}</td>
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
		cociente2 = parseFloat(fc*inverso2)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad2)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo2)}</td>
                    <td>${new Intl.NumberFormat().format(inverso2)}</td>
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
		cociente3 = parseFloat(fc*inverso3)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad3)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo3)}</td>
                    <td>${new Intl.NumberFormat().format(inverso3)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente3)}</td>
					
				</tr>`;	
	}
	$("#col3").html(html);
}

function col4(){
    persona = 4
	html = "";
	if(edads > 0 ){
        cociente4 = parseFloat(fc*inverso4)
		html += `<tr class="table-light">
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(edad4)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo4)}</td>
                    <td>${new Intl.NumberFormat().format(inverso4)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente4)}</td>
					
				</tr>`;	
	}
	$("#col4").html(html);
}

function col5(){
    persona = "Total"
	html = "";
	if(edads > 0 ){
        var cocienteTotal = cociente + cociente2 + cociente3 + cociente4
		html += `<tr class="table-light">
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(edads)}</td>
                    <td>${new Intl.NumberFormat().format(tiempototal)}</td>
                    <td>${new Intl.NumberFormat().format(inversoTotal)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cocienteTotal)}</td>
					
				</tr>`;	
	}
	$("#col5").html(html);
}