function calcularGanancia() {

    //Captura de datos del formulario
    let monto = parseFloat(document.getElementById('mont').value);
    let cuota = parseFloat(document.getElementById('cuota').value);

    //Capturar errores con bloque try-catch
    try{
        //Dato constante de la tasa de bono
        const tasaBono = 0.05;

        //Calculo para hallar la ganancia
        let ganancia = monto * cuota;

        //Si la cuota es mayor a 3.0, se aplica un bono adicional del 5%
        if(cuota>3.0){
        ganancia= ganancia * (1 + tasaBono);  
        }
        //Mostrar resultado de la Apuesta
        //Usamos metodo toFixed() para limitar decimales y concatenacion para imprimir el mensaje
        document.getElementById('apuestaResult').innerHTML = `

        
        <p>Ganancia total: S/ ${ganancia.toFixed(2)}</p>
        `;
    }catch(error){  

        //Muestra mensaje de error al usuario si algo falla al calcular
        document.getElementById('apuestaResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
    
}


    

