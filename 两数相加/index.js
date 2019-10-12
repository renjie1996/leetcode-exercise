/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
  如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
  您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  示例：
  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
*/

const addTwoNumbers = function(l1, l2) {
  const resultNode = new ListNode(0)
  let carry = 0
  while(l1 || l2) {
      let currentNode = resultNode
      while(currentNode.next) {
          currentNode = currentNode.next
      }
      let val = carry
      if(l1) {
          val += l1.val
      } 
      if(l2) {
          val += l2.val
      } 
      
      currentNode.val = val % 10
      carry = Math.floor(val / 10)
      l1 = l1 ? l1.next : l1
      l2 = l2 ? l2.next : l2   
      if(l1 || l2 || carry) {
          currentNode.next = new ListNode(carry)
      }
  }
  return resultNode
};

// 正向
// pop函数
function getLastNodeValue(linkListStartNode) {
  let lastNodeValue = 0
  if(linkListStartNode 
    && linkListStartNode.next 
    && linkListStartNode.next.next) {
      lastNodeValue = getLastNodeValue(linkListStartNode.next)
  } else if(linkListStartNode && linkListStartNode.next ) {
      lastNodeValue = linkListStartNode.next.val
      linkListStartNode.next = null
  } else {
      lastNodeValue =  linkListStartNode.val
      linkListStartNode.val = 0 // 防止之后短的数字仍然保留
  }
  return lastNodeValue
}

const addTwoNumbers = function(l1, l2) {
  const resultNode = new ListNode(0)
  let carry = 0 // 进位
  while(l1.val || l2.val || carry) {
      let currentNode = resultNode
      while(currentNode.next) {
          currentNode = currentNode.next
      }
      const oriVal = getLastNodeValue(l1) + getLastNodeValue(l2) + carry
      const val = oriVal % 10
      currentNode.val = val
      if(l1.val || l2.val) {
        currentNode.next = new ListNode(val)
      }
      carry = Math.floor(oriVal / 10)
  }
  return resultNode
  
};