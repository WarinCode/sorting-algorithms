import BasicSortingAlgorithm from "./BasicSortingAlgorithm";

export default class AlgorithmAdapter {
    public static run(instance: BasicSortingAlgorithm): void {
        console.log(`Algorithm: ${instance.getAlgorithmName()}`)
        console.log(`Array: ${instance.getArray()}`)
        console.log(`Sorted array: ${instance.sort()}`);
        console.log();
    }
}