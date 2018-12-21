/* check the check occurrence  of element in sequences*/
const checkOccurrence = (args,key) => {
    for (x of args) {
        if (x == key) {
            return true
        }
    }
    return false
}

/* sum of a numbers */
const sumOf = (number) => (number+1)*number/2 


const isEven = (number) => {
    if ((number & 1) == 0) {
        return true
    }else{
        return false
    }
}