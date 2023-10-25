function getFullYear() {
    const date = new Date()
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    return isIndex ? "Holberton school" : "Holberton School main dashboard";
}

export { getFullYear, getFooterCopy }