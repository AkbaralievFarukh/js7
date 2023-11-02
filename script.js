const arr = [1, 2, 3, 4, 5]
const handleFilter = (arg) => {
    return arg.reduce((acc, el) => acc += el, 0)
}
console.log(handleFilter(arr))