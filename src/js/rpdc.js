var edad1,edad2,edad3,edad4,cantidad,suma,edads,fc,cociente,cociente2,cociente3,cociente4
var persona,mcm,MCM,tiempo1,tiempo2,tiempo3,tiempo4
var edtiempo1,edtiempo2,edtiempo3,edtiempo4
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
   edtiempo1 = (parseInt(edad1) * parseInt(tiempo1))
   edtiempo2 = (parseInt(edad2) * parseInt(tiempo2))
   edtiempo3 = (parseInt(edad3) * parseInt(tiempo3))
   edtiempo4 = (parseInt(edad4) * parseInt(tiempo4))

   edads =  edtiempo1 + edtiempo2 + edtiempo3 + edtiempo4
  
   
   fc = parseFloat(cantidad/edads)
   console.log(fc)
    col1()
    col2()
    col3()
    col4()
    col5()
}

function col1(){
    persona = 1 
	html = "";
	if(edads > 0 ){
		cociente = parseFloat(fc*edtiempo1)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad1)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo1)}</td>
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
		cociente2 = parseFloat(fc*edtiempo2)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad2)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo2)}</td>
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
		cociente3 = parseFloat(fc*edtiempo3)
		html += `<tr class="table-light">
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad3)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo3)}</td>
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
        cociente4 = parseFloat(fc*edtiempo4)
		html += `<tr class="table-light">
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(edad4)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo4)}</td>
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
                    <td>${new Intl.NumberFormat().format(edads)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cocienteTotal)}</td>
					
				</tr>`;	
	}
	$("#col5").html(html);
}