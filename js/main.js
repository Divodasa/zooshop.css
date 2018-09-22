const siteNames = {
    "index":`<i>stay</i>`,
    "mkorder":"order",
    "feedback1":"feed",
    "contactus":"connection",
    "peace":"shanti",
    "phgallery":"photos",
    "default":"zoshop"
};

function getSiteName() {
    const url = document.location.pathname;
    let siteName = siteNames.default;
    for (let key in siteNames) {
        if (url.includes(key)) {
            siteName = siteNames[key];
            console.log("Совпадение найдено! Устанавливаем имя страницы: " + siteName);
            break;
        }
    }
    return siteName;
}
