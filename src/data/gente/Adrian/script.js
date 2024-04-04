 
buscarEstrategia('empinado', 'comun',  42);
 
 
 
 function buscarEstrategia (inclinacion  , terreno , viento ) {

    const AutonomoTable = [
       {
          inclinacion: 'empinado',
          terreno : 'rocoso',
          viento : 12,
          estrategia: 3
       },
       {
          inclinacion: 'llano',
          terreno : 'arenoso',
          viento :2 ,
          estrategia: 2
       },
       {
          inclinacion: 'irregular',
          terreno : 'comun',
          viento :5 ,
          estrategia: 2
       },
       {
          inclinacion: 'llano',
          terreno : 'pavimento',
          viento : 21,
          estrategia: 1
       },
       {
          inclinacion: 'empinado',
          terreno : 'rocoso',
          viento :35 ,
          estrategia: 1
       },
    ]
 
 

    let array = [];
    let result = 0;
    let bandera = false;
    let comp = -1;
 
    for (let i = 0; i < AutonomoTable.length; i++) {
 
       result =
          funcion_de_Semejanza(AutonomoTable[i].inclinacion, inclinacion) * 0.33 +
          funcion_de_Semejanza(AutonomoTable[i].terreno, terreno) * 0.33 +
          funcion_de_Semejanza(AutonomoTable[i].viento, viento) * 0.33;
 
       array[i] = result;
       result = 0;
 
       if (
          AutonomoTable[i].inclinacion == inclinacion &&
          AutonomoTable[i].terreno == terreno &&
          AutonomoTable[i].viento == viento
       ) {
          bandera = true;
          comp = i;
          i = AutonomoTable.length + 20
       }
    }
 
    if (bandera ) {
        console.log('Para este caso se utilizara la Estrategia #: ' + autonomo[comp].dataValues.estrategia);
       return 'Para este caso se utilizara la Estrategia #: ' + autonomo[comp].dataValues.estrategia
    }
 
    else {
 
       let mayor = 0;
       let pos = -1;
 
       for (let i = 0; i < array.length; i++) {
          if (array[i] > mayor) {
             mayor = array[i];
             pos = i;
          }
       }
       console.log('Para este caso se utilizara la Estrategia #: ' + AutonomoTable[pos].estrategia);
       return 'Para este caso se utilizara la Estrategia #: ' + AutonomoTable[pos].estrategia
         
    
    }
 
 }
 
 
 
 function  funcion_de_Semejanza(inicial, final) {
 
    if (inicial == 'empinado' || inicial == 'llano' ||
       inicial == 'irregular' || inicial == 'rocoso' ||
       inicial == 'arenoso' || inicial == 'comun' ||
       inicial == 'pavimento') {
       if (inicial == final) {
          return 1;
       }
       return 0;
    }
    else {
 
       let valor = final - inicial;
 
       if (valor < 0) valor = inicial - final;
 
       return 1 / valor;
    }
 
 }



