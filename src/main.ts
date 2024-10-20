import { BunFile } from "bun";
import SortingAlgorithms from "./algorithms/SortingAlgorithms";
import AlgorithmAdapter from "./classes/AlgorithmAdapter";
import BasicSortingAlgorithm from "./classes/BasicSortingAlgorithm";
import { JsonData } from "./types";
import AlgorithmError from "./errors/AlgorithmError";

(async (): Promise<void> => {
    const file: BunFile = Bun.file(import.meta.dirname.concat("/json/data.json"));
    try {
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
            throw new AlgorithmError("ไม่สามารถเปิดอ่านไฟล์ข้อมูล json ได้");
        }
    } catch(e: unknown){
        if(e instanceof AlgorithmError){
            console.log(`${e.name}: ${e.message}`);
            process.exit(process?.exitCode);
        }
    }
})();