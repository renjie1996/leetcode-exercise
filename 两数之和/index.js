/**
 * 利用数字的相加特性做mapping，例如和为10
 * 2 -> 8, 3 -> 7
 * map中一一对应，时间O(n)即可解决，伴随空间复杂O(n)
 * 
 * 如果使用两次循环，最坏情况则是时间复杂O(n2)，空间复杂 O(1)
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const numMappingValue = map.get(num)
      if (numMappingValue !== undefined) {
        return [numMappingValue, i]
      } else {
        map.set(target - num, i)
      }
  }
}
console.time("exec")
console.log(twoSum([1, 2, 3, 7], 9), [ 1, 3 ])
console.timeEnd("exec")