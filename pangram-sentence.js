function pangram(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const letters = new Set(alphabet)
    const lowerCase = str.toLowerCase()

    for(let i = 0; i < lowerCase.length; i++){
        const char = lowerCase[i]
        if (letters.has(char)){
            letters.delete(char)

        }
    }
}