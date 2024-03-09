/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    if (head.next == null){
        return head
    }
    let result = new ListNode(0,null)
    let curr = result
    while (head.next){
        let x = head.val
        let y = head.next.val
        let k = greatestCommonDivisors(x,y)
        curr.next = new ListNode(x)
        curr = curr.next
        curr.next = new ListNode(k)
        curr = curr.next
        curr.next = new ListNode(y)
        
        head = head.next
    }
    return result.next
};

function greatestCommonDivisors(num1,num2){
    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}