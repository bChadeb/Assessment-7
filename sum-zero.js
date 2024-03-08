function sumZero(nums){
    const seen = new Set()

    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if (seen.has(-num)) return true
        seen.add(num)
    }

    return false
}

const numbers = [1, 2, -3, 4, -1]
console.log(sumZero(numbers))

// runtime: 0(n)