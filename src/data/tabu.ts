function funcion_objetivo(solucion: number[]): number {
  return solucion.reduce((a, b) => a + b, 0);
}

function generar_vecinos(solucion: number[]): number[][] {
  const vecinos: number[][] = [];
  for (let i = 0; i < solucion.length; i++) {
    for (let j = i + 1; j < solucion.length; j++) {
      const vecino = [...solucion];
      [vecino[i], vecino[j]] = [vecino[j], vecino[i]];
      vecinos.push(vecino);
    }
  }
  return vecinos;
}

function tabu_search(): number[] {
  let solucion_actual: number[] = [1, 2, 3, 4, 5];
  let mejor_solucion: number[] = solucion_actual.slice();
  let tabu_list: number[][] = [];
  let iteraciones: number = 0;
  const max_iteraciones: number = 100;

  while (iteraciones < max_iteraciones) {
    const valor_actual: number = funcion_objetivo(solucion_actual);
    const vecinos: number[][] = generar_vecinos(solucion_actual);
    let mejor_vecino: number[] | null = null;
    let mejor_valor: number = Infinity;

    for (const vecino of vecinos) {
      if (!tabu_list.some((item) => JSON.stringify(item) === JSON.stringify(vecino))) {
        const valor_vecino: number = funcion_objetivo(vecino);
        if (valor_vecino < mejor_valor) {
          mejor_vecino = vecino;
          mejor_valor = valor_vecino;
        }
      }
    }

    if (mejor_vecino !== null) {
      solucion_actual = mejor_vecino;
      tabu_list.push(mejor_vecino);
      if (tabu_list.length > 5) {
        tabu_list.shift();
      }

      if (mejor_valor < funcion_objetivo(mejor_solucion)) {
        mejor_solucion = mejor_vecino;
      }
    }

    iteraciones++;
  }

  return mejor_solucion;
}

const mejor_solucion: number[] = tabu_search();
console.log("Mejor solución encontrada:", mejor_solucion);
