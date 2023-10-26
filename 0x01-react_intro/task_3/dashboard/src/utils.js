function getFullYear() {
    const date = new Date()
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    return isIndex ? "Holberton school" : "Holberton School main dashboard";
}

function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFullYear, getFooterCopy, getLatestNotification}