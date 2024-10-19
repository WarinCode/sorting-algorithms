import AlgorithmError from "../errors/AlgorithmError";

export default abstract class BasicSortingAlgorithm {
    protected array: number[] = [];
    protected algorithmName: string | null = null;

    protected constructor(array: number[], algorithmName: string){
        this.array = [ ...new Set<number>(array)];
        this.algorithmName = algorithmName;

        if(this.isEmpty()){
            throw new AlgorithmError("Error an array is empty!");
        }
    }
    public abstract sort(): number[];
    
    public getAlgorithmName(): string | null {
        return this.algorithmName;
    }

    public getArray(): number[]{
        return this.array;
    }

    protected isSorted(): boolean {
        let firstElement: number = this.array.at(0) as number;
        return this.array.every((element: number): boolean => firstElement <= element);
    }

    protected isEmpty(): boolean {
        if(!this.array.length){
            return true;
        }
        return false;
    }
}