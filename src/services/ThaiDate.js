const ThaiDate = (input) => {
    input = new Date(input)
    const date = input.getDate();
    const month = input.getMonth();
    const year = input.getFullYear();
    return date + "/" + month + "/" + (year + 543)
}

export default ThaiDate;