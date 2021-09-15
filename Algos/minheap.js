class MinHeap {
    constructor () {
        this.heap = [null];
    }

    addValue(newValue){
        // push the new value to the heap
        this.heap.push(newValue);
        // set the index to check equal to the length of the heap - 1 (we just pushed it so it's at the end)
        let currentIndex = this.heap.length - 1;
        // while loop to swap values if necessary (if the new value is less than the parent (half the index rounded down)
        while (this.heap[currentIndex] < this.heap[Math.floor(currentIndex/2)]){
            // swap the two values at the indices we are comparing
            [this.heap[currentIndex], this.heap[Math.floor(currentIndex/2)]] = [this.heap[Math.floor(currentIndex/2)], this.heap[currentIndex]];
            // change the current index of our new value to the one we swapped it with
            currentIndex = Math.floor(currentIndex/2);
        }
    }
}

let testHeap1 = new MinHeap();
testHeap1.addValue(4);
testHeap1.addValue(10);
testHeap1.addValue(8);
testHeap1.addValue(13);
testHeap1.addValue(17);
testHeap1.addValue(9);
testHeap1.addValue(5);
testHeap1.addValue(6);
testHeap1.addValue(8);
console.log(testHeap1);