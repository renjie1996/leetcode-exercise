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