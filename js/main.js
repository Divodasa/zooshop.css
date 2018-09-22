const siteNames = {
    "index":`Интернет&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Зоомагазин`,
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
