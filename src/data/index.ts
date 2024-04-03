import { IAlgorithm } from "../models/ia_algorithm";

export const InfoAlgorithm: IAlgorithm[] = [
  {
    name: 'Tabu',
    clasification: 'Optimizaición y Búsqueda',
    description: 'Optimiza la búsqueda de soluciones explorando vecindarios, evitando soluciones previas para evitar óptimos locales.',
    complexity: 'O(n^2)'
  },
  {
    name: 'Selection Sort',
    clasification: 'Sorting',
    description: 'The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning.',
    complexity: 'O(n^2)'
  },
  {
    name: 'Insertion Sort',
    clasification: 'Sorting',
    description: 'Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.',
    complexity: 'O(n^2)'
  },
  {
    name: 'Merge Sort',
    clasification: 'Sorting',
    description: 'Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.',
    complexity: 'O(n log n)'
  },
  {
    name: 'Quick Sort',
    clasification: 'Sorting',
    description: 'QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.',
    complexity: 'O(n log n)'
  },
  {
    name: 'Heap Sort',
    clasification: 'Sorting',
    description: 'Heap sort is a comparison based sorting technique based on Binary Heap data structure.',
    complexity: 'O(n log n)'
  },
  {
    name: 'Counting Sort',
    clasification: 'Sorting',
    description: 'Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values.',
    complexity: 'O(n + k)'
  },
  {
    name: 'Radix Sort',
    clasification: 'Sorting',
    description: 'Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix.',
    complexity: 'O(nk)'
  },
  {
    name: 'Bucket Sort',
    clasification: 'Sorting',
    description: 'Bucket sort is mainly useful when input is uniformly distributed over a range.',
    complexity: 'O(n^2)'
  }
]

