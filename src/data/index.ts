import { IAlgorithm } from "../models/ia_algorithm";

export const InfoAlgorithm: IAlgorithm[] = [
  {
    name: 'Tabu',
    clasification: 'Optimizaición y Búsqueda',
    short_description: 'Optimiza la búsqueda de soluciones explorando vecindarios, evitando soluciones previas para evitar óptimos locales.',
    large_description: 'El algoritmo de inteligencia artificial llamado "Tabú" es una técnica de búsqueda que se utiliza para la resolución de problemas combinatorios, especialmente en problemas de optimización. Fue desarrollado con el objetivo de mejorar los algoritmos de búsqueda local, superando algunas de sus limitaciones como la convergencia prematura o la convergencia a mínimos locales subóptimos. ',
    concept: 'El concepto fundamental detrás del algoritmo Tabú es mantener un registro de las soluciones visitadas recientemente, conocidas como "movimientos tabú", y evitar volver a visitar estas soluciones durante un cierto período de tiempo o número de iteraciones. Esto permite al algoritmo explorar un espacio de búsqueda más amplio y evitar quedarse atascado en mínimos locales subóptimos.',
    components: [
      'Función Objetivo: Define el objetivo del problema de optimización que se está tratando de resolver. Esta función es la que se intenta maximizar o minimizar, dependiendo de la naturaleza del problema.',
      'Solución Inicial: Se genera una solución inicial de forma aleatoria o utilizando alguna estrategia heurística. Esta solución inicial sirve como punto de partida para la búsqueda.',
      'Movimientos: Se definen los posibles movimientos que se pueden aplicar a una solución para generar nuevas soluciones vecinas. Estos movimientos pueden incluir intercambios, permutaciones, o cualquier otra operación que modifique la solución actual de manera válida.',
      'Criterio de Aspiración: En algunos casos, puede ser beneficioso considerar soluciones tabú si mejoran significativamente la función objetivo, incluso si están marcadas como tabú. El criterio de aspiración define las condiciones bajo las cuales se pueden considerar estas soluciones tabú.',
      'Lista Tabú: Es el registro de las soluciones visitadas recientemente. Esta lista tabú contiene información sobre los movimientos que llevaron a estas soluciones y el tiempo restante que deben permanecer como tabú.',
      'Condición de Parada: Define el criterio bajo el cual se termina la búsqueda, como alcanzar un cierto número de iteraciones o un tiempo de ejecución máximo.'
    ],
    process: [
      'Se inicializa la solución inicial y la lista tabú.',
      'Se generan soluciones vecinas aplicando movimientos a la solución actual.',
      'Se evalúa cada solución vecina utilizando la función objetivo y se selecciona la mejor solución que no esté marcada como tabú.',
      'Se actualiza la lista tabú, eliminando las soluciones que hayan estado marcadas durante un período de tiempo determinado y añadiendo las nuevas soluciones marcadas como tabú.',
      'Se repite el proceso hasta que se cumpla la condición de parada.',
    ]
  },
  {
    name: 'Min-Max (Alpha-Beta)',
    clasification: 'Búsqueda de Adversarios',
    short_description: 'Optimiza la búsqueda de soluciones explorando vecindarios, evitando soluciones previas para evitar óptimos locales.',
    large_description: 'El algoritmo Minimax con poda alfa-beta es un algoritmo utilizado en juegos de adversario, como el ajedrez o el juego de damas, para determinar el mejor movimiento posible para un jugador, asumiendo que el oponente también juega de forma óptima. El objetivo del algoritmo es maximizar el valor de la posición para el jugador y minimizarlo para el oponente.',
    concept: 'El algoritmo Minimax recibe su nombre de la estrategia que sigue: maximizar la ganancia mínima posible. Funciona de manera recursiva, explorando el árbol de juego hasta una cierta profundidad o hasta un estado terminal (por ejemplo, el final del juego), y luego retrocediendo para evaluar las posiciones de acuerdo con el valor heurístico.',
    components: [
      'Árbol de Juego: Representa todas las posibles secuencias de movimientos que pueden ocurrir durante el juego. Cada nodo del árbol representa un estado del juego, y las aristas representan los movimientos posibles desde ese estado.',
      'Función de Evaluación: Evalúa el valor de un estado del juego desde el punto de vista del jugador. Esta función puede ser determinística o heurística y proporciona una estimación del valor de la posición para el jugador en ese estado.',
      'Profundidad de Búsqueda: Determina hasta qué profundidad se explorará el árbol de juego. Una mayor profundidad de búsqueda permite una evaluación más precisa, pero también aumenta el tiempo de ejecución del algoritmo.',
      'Minimizar y Maximizar: En cada nivel del árbol, el algoritmo alterna entre maximizar y minimizar el valor de los nodos. En los niveles de maximización, el jugador intenta maximizar el valor de la posición, mientras que en los niveles de minimización, el oponente intenta minimizarlo.',
      'Poda Alfa-Beta: Es una técnica para reducir el número de nodos evaluados en el árbol de juego. Se utilizan dos valores, alfa y beta, para representar el valor mínimo garantizado y el valor máximo garantizado respectivamente. Durante la exploración del árbol, se eliminan las ramas que no contribuirán a la decisión final, es decir, las que no afectarán el resultado final. Esto se hace mediante la comparación de los valores alfa y beta. Si se encuentra una rama que no mejorará el resultado, se corta la exploración de esa rama.'
    ],
    process: [
      'Se explora recursivamente el árbol de juego hasta la profundidad deseada o hasta un estado terminal.',
      'En cada nivel, se alternan las fases de maximización y minimización.',
      'Se aplica la poda alfa-beta para eliminar las ramas que no afectarán la decisión final.',
      'Se retorna el valor de la mejor jugada encontrada.',
    ]
  }
]

