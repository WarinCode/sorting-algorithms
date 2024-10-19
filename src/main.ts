import { BunFile } from "bun";
import SortingAlgorithms from "./algorithms/SortingAlgorithms";
import AlgorithmAdapter from "./classes/AlgorithmAdapter";
import BasicSortingAlgorithm from "./classes/BasicSortingAlgorithm";
import { JsonData } from "./types";

(async (): Promise<void> => {
    const file: BunFile = Bun.file(import.meta.dirname.concat("/json/data.json"));
    if(await file.exists()){
        const { arrays } = await file.json() as JsonData;
        const algorithms: BasicSortingAlgorithm[] = [
            new SortingAlgorithms.SelectionSort(arrays[0]),
            new SortingAlgorithms.BubbleSort(arrays[1]),
            new SortingAlgorithms.InsertionSort(arrays[2]),
            new SortingAlgorithms.MergeSort(arrays[3]),
            new SortingAlgorithms.QuickSort(arrays[4])
        ];
        algorithms.forEach((algorithm: BasicSortingAlgorithm): void => {
            AlgorithmAdapter.run(algorithm);
        });
    } else {
        process.exit(process?.exitCode);
    }
})();