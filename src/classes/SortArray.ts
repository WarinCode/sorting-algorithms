import SortingAlgorithms from "../algorithms/SortingAlgorithms";
import AlgorithmNames from "../enums/AlgorithmNames";

export default class SortArray {
    public static selectedAlgorithm: AlgorithmNames = AlgorithmNames.SelectionSort;
    public static sort(...arrays: number[][]): number[][] {        
        return arrays.map((array: number[]): number[] => {
            switch(this.selectedAlgorithm){
                case AlgorithmNames.SelectionSort:
                    return new SortingAlgorithms.SelectionSort(array).sort();
                case AlgorithmNames.BubbleSort:
                    return new SortingAlgorithms.BubbleSort(array).sort();
                case AlgorithmNames.InsertionSort:
                    return new SortingAlgorithms.InsertionSort(array).sort();
                case AlgorithmNames.MergeSort:
                    return new SortingAlgorithms.MergeSort(array).sort();
                case AlgorithmNames.QuickSort:
                    return new SortingAlgorithms.QuickSort(array).sort();
                default:
                    return array.sort((x: number, y: number): number => x - y);
            }
        });
    }
}