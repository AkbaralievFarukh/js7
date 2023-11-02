// const arr = [1, 2, 3, 4, 5]
// const handleFilter = (arg) => {
//     return arg.reduce((acc, el) => acc += el, 0)
// }
// console.log(handleFilter(arr))

// const names = ['Farukh', 'Shabdan', 'Leo', 'Alina']
// const handleName = arg => {
//     return arg.reduce((acc, el, idx) => {
//        return [...acc, {name: el, id: idx + 1}]
//     },[])
// }
// console.log(handleName(names))

function likes(names) {
    if (names.length === 0) {
        return `no one likes this`;
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
    } else {
        let countNames = names.length - 2;
        return `${names[0]}, ${names[1]}, and ${countNames} others like this`;
    }
}

console.log(likes([]))
console.log(likes(['Jacob']))
console.log(likes(['Jacob', 'Alex', 'Karina']))
console.log(likes(['Farukh', 'Shabdan', 'Karina', 'ALina']))
console.log(likes(['Farukh', 'Shabdan', 'Karina', 'ALina', 'Madina', 'Kamilla']))