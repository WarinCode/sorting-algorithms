import BasicSortingAlgorithm from "../classes/BasicSortingAlgorithm";
import SortArray from "../classes/SortArray";

namespace SortingAlgorithms {
    export class SelectionSort extends BasicSortingAlgorithm {
        private minIndex: number = 0;

        public constructor(array: number[]){
            super(array, "Selection Sort");
        }

        public override sort(): number[] {
            if(this.isSorted() || this.getArray().length <= 2){
                return this.getArray();
            }

            for(let i: number = 0; i < this.array.length; i++){
                this.minIndex = i;
                for(let j: number = i + 1; j < this.array.length; j++){
                    if(this.array[j] < this.array[this.minIndex]){
                        this.minIndex = j;
                    }
                }
    
                [this.array[i], this.array[this.minIndex]] = [this.array[this.minIndex], this.array[i]]
            }

            return this.getArray();
        }
    }

    export class BubbleSort extends BasicSortingAlgorithm {
        private n: number = 0;

        public constructor(array: number[]){
            super(array, "Bubble Sort");
            this.n = this.getArray().length;
        }

        public override sort(): number[] {
            if(this.isSorted() || this.getArray().length <= 2){
                return this.getArray();
            }

            for(let i: number = 0; i < this.n; i++){
                for(let j: number = 0; j < this.n - i - 1; j++){
                    if(this.array[j] > this.array[j + 1]){
                        [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
                    }
                }
            }

            return this.getArray();
        }
    }

    export class InsertionSort extends BasicSortingAlgorithm {
        private key: number = -1;

        public constructor(array: number[]){
            super(array, "Insertion Sort");
        }

        public override sort(): number[] {
            if(this.isSorted() || this.getArray().length <= 2){
                return this.getArray();
            }

            for(let i: number = 1; i < this.array.length; i++){
                this.key = this.array[i];

                let j: number = i - 1;
                while(j >= 0 && this.array[j] > this.key){
                    this.array[j + 1] = this.array[j];
                    j -= 1;
                }
                this.array[j + 1] = this.key;
            }


            return this.getArray();
        }
    }

    export class MergeSort extends BasicSortingAlgorithm {
        private midIndex: number;
        private smallerHalf: number[];
        private largerHalf: number[];

        public constructor(array: number[]){
            super(array, "Merge Sort");
            this.midIndex = Math.trunc(this.getArray().length / 2);
            this.smallerHalf = this.getArray().slice(0, this.midIndex);
            this.largerHalf = this.getArray().slice(this.midIndex, this.getArray().length);    
        }

        public override sort(): number[]{
            if(this.isSorted() || this.getArray().length <= 2){
                return this.getArray();
            }

            [this.smallerHalf, this.largerHalf] = SortArray.sort(this.smallerHalf, this.largerHalf);
            [this.array] = SortArray.sort([...this.smallerHalf, ...this.largerHalf]);
            return this.getArray();
        }
    }

    export class QuickSort extends BasicSortingAlgorithm {
        private pivot: number;
        private smallerHalf: number[];
        private largerHalf: number[];

        public constructor(array: number[]){
            super(array, "Quick Sort");
            this.pivot = this.getPivot();
            this.smallerHalf = this.getSmaller();
            this.largerHalf = this.getBigger();
        }   

        public getPivot(array: number[] = this.array.map((element: number): number => element)): number {
            [array] = SortArray.sort(array);
            let midIndex: number = Math.trunc(array.length / 2);
            return array[midIndex];
        }

        public getSmaller(): number[] {
            return this.array.filter((element: number): boolean => element <= this.pivot && element != this.pivot);
        }

        public getBigger(): number[] {
            return this.array.filter((element: number): boolean => element > this.pivot && element != this.pivot);
        }

        public override sort(): number[] {
            if(this.isSorted() || this.getArray().length <= 2){
                return this.getArray();
            }

            [this.smallerHalf, this.largerHalf] = SortArray.sort(this.smallerHalf, this.largerHalf);
            this.array = [...this.smallerHalf, this.pivot, ...this.largerHalf];
            return this.getArray();
        }
    }
}

export default SortingAlgorithms;