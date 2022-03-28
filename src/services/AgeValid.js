const AgeValid = () => {
    const now = new Date();
    return now.getFullYear() - 18 + '-' + now.getMonth() + '-' + now.getDate();
}

export default AgeValid;