// reverse a single linked list

//iterative solution
function reverseLinkedList (head) {
    let node = head,
    previous,
    tmp;

    while (node) {
        tmp = node.next;

        node.next = previous;

        previous = node;
        node=tmp;

        return previous;
    }
}

//recursive solution

function reverseLinkedRecursive (head) {
    if (!head || !head.next) {
        return head
    }

    let tmp = reverse (head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;

}