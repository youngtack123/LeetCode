var findKthLargest = function(nums, k) {
    const heap = new MaxHeap();

    // 주어진 배열의 요소를 최대 힙에 추가합니다.
    for (const num of nums) {
        heap.insert(num);
    }

    // k번째로 큰 요소를 찾습니다.
    let kthLargest = null;
    for (let i = 0; i < k; i++) {
        kthLargest = heap.extractMax();
    }

    return kthLargest;
};

// 최대 힙 구현
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return maxValue;
    }

    bubbleDown(index) {
        while (index < this.heap.length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex === index) {
                break;
            }

            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            index = largestIndex;
        }
    }
}
