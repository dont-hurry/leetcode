/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let n = 0;
  let pointer = head;
  while (pointer !== null) {
    n++;
    pointer = pointer.next;
  }

  if (n === 1) return null;

  pointer = head;
  for (let i = 0; i < Math.floor(n / 2) - 1; i++) pointer = pointer.next;
  pointer.next = pointer.next.next; // Delete the next node

  return head;
};
