function calcularimc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) 
     {
        const imc = peso / (altura * altura);
        document.getElementById("resultado").textContent = imc.toFixed(2);

        if (imc < 18.5) 
        {
            document.getElementById("estado").textContent = "Bajo peso";
        } else if (imc<24)
        {
            document.getElementById("estado").textContent = "Adecuado";
        } else if (imc >= 25 && imc <= 29.9) 
        {
            document.getElementById("estado").textContent = "Sobrepeso";
        } else if (imc<40) 
        {
            document.getElementById("estado").textContent = "Obesidad";
         
        }
    }
}