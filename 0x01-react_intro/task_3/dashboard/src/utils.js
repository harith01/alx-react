export const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
}

export const getFooterCopy = (isIndex) => {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export const getLatestNotification = () => ("<strong>Urgent requirement</strong> - complete by EOD");