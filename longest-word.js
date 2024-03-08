function longWord(str){
    if(str.length === 0)
    return 0

    let length = 0
    for (let i = 0; i < str.length; i++){
        const word = str[i].length
        if (word > length){
            length = word
        }
    }
    return length
}

const arr = ['pizza', 'toothpaste', 'backpack', 'vehicle']
console.log(longWord(arr))

// runtime: 0(1)