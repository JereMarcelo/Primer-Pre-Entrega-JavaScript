function saludo(){
    alert(`Bienvenidos a la tienda deportiva "Los Mellis"`);
    }
    
    let acumulado = 0
    
    function seleccionCompra(tipoDeElementoDeportivo){
        tipoDeElementoDeportivo = prompt(`Seleccione el elemento de entrenamiento que desea comprar:
        1) Entrenamiento Muscular
        2) Entrenamiento Funcional
        
        9) Salir`);
    
        while (tipoDeElementoDeportivo != 0){
            switch (tipoDeElementoDeportivo) {
                case "1":
                    elementoDeEntrenamientoMuscular();
                    break;
                case "2":
                    elementosDeEntrenamientoFuncional();
                    break;
                default:
                    alert(`No seleccionaste ninguna opcion!`)
                    break;
            }
            tipoDeElementoDeportivo = prompt(`Seleccione el elemento de entrenamiento que desea comprar:
            1) Entrenamiento Muscular
            2) Entrenamiento Funcional
            
            0) Finalizar compra
            
            SUBTOTAL: $${acumulado}`);
        }
        alert(`El monto total a abonar es $${acumulado}.`)
        alert(`Muchas gracias por tu compra!`)
    }
    
    class elementosEnVenta{
        constructor(id, nombre, marca, precio){
            this.id = id;
            this.nombre = nombre;
            this.marca = marca;
            this.precio = precio;
        }
    }
    
    const elemento1 = new elementosEnVenta(1, `"VM Fitness"`, `Mancuernas`, `8500`, 8500);
    const elemento2 = new elementosEnVenta(2, `"Sonnos"`, `Barras`, `8300`, 8300);
    const elemento3 = new elementosEnVenta(3, `"Geneti Pro"`, `Discos`, `10000`, 10000);
    
    const listaDeElementos = [];
    
    listaDeElementos.push(elemento1, elemento2, elemento3);
    
    
    function elementoDeEntrenamientoMuscular(){
        alert(`Elegiste la seccion de entrenamiento muscular`);
        let seleccionMuscular = prompt(`Que elemento desea comprar?
        ${elemento1.id}) ${elemento1.nombre}, ${elemento1.marca} - $${elemento1.precio}
        ${elemento2.id}) ${elemento2.nombre}, ${elemento2.marca} - $${elemento2.precio}
        ${elemento3.id}) ${elemento3.nombre}, ${elemento3.marca} - $${elemento3.precio}
        
        0) Salir`);
        
        while (seleccionMuscular!= 0){
            switch (seleccionMuscular) {
                case `${elemento1.id}`:
                    acumulado += parseInt(`${elemento1.precio}`)
                    alert(`Elegiste: VM Fitness, "Mancuernas" , 8kg.
                
                    Llevas gastando: $${acumulado}`)
                    break;
                case `${elemento2.id}`:
                    acumulado += parseInt(`${elemento2.precio}`)
                    alert(`Elegiste: Sonnos, Barras, 10kg.
                
                    Llevas gastando: $${acumulado}`)
                    break;
                case `${elemento3.id}`:
                    acumulado += parseInt(`${elemento3.precio}`)
                    alert(`Elegiste: Geneti Pro, Discos, 15kg.
                
                    Llevas gastando: $${acumulado}`)
                    break;
                default:
                    alert(`No seleccionaste ningun elemento`)
                    break;
            }
            seleccionMuscular = prompt(`Que elemento desea comprar?
            ${elemento1.id}) ${elemento1.nombre}, ${elemento1.marca} - $${elemento1.precio}
            ${elemento2.id}) ${elemento2.nombre}, ${elemento2.marca} - $${elemento2.precio}
            ${elemento3.id}) ${elemento3.nombre}, ${elemento3.marca} - $${elemento3.precio}
            0) Salir
            
            Subtotal a abonar: $${acumulado}`);
        }
        alert(`El monto subtotal a abonar es: $${acumulado}`)
    }
    
    function elementosDeEntrenamientoFuncional(){
        alert(`Elegiste la seccion de Entrenamiento Funcional`);
        let seleccionfuncional = prompt(`Que elemento desea comprar?
        1) Rueda abdominal, "2M Sposts" - $1000
        2) Escalera Coordinacion, Expert - $900
        3) Banda de Suspension, Fiamma - $4905

        0) Salir`);
    
        
        
        while (seleccionfuncional != 0){
            switch (seleccionfuncional) {
                case "1":
                    acumulado = parseInt(acumulado + 1000)
                    alert(`Elegiste: Rueda abdominal, "2M Sports".
                
                    Llevas gastando: $${acumulado}`)
                    break;
                case "2":
                    acumulado = parseInt(acumulado + 900)
                    alert(`Elegiste: Escalera Coordinacion, "Expert".
                
                    Llevas gastando: $${acumulado}`)
                    break;
                case "3":
                    acumulado = parseInt(acumulado + 4905)
                    alert(`Elegiste: Banda de Suspension, "Fiamma".
                
                    Llevas gastando: $${acumulado}`)
                    break;

                default:
                    alert(`No seleccionaste ningun vino`)
                    break;
            }
            seleccionfuncional = prompt(`Que elemento desea comprar?
        1) Rueda abdominal, "2M Sposts" - $1000
        2) Escalera Coordinacion, Expert - $900
        3) Banda de Suspension, Fiamma - $4905

        0) Salir
        
        Subtotal a abonar: $${acumulado}`);
        }
        alert(`El monto subtotal a abonar es: $${acumulado}`)
    }
    
    saludo();
    seleccionCompra();
    
