const siteNames = {
    "index":`Интернет&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Зоомагазин`,
    "mkorder":"Страница заказа",
    "feedback1":"Обратная связь",
    "contactus":"Контакты",
    "peace":"Релаксация",
    "phgallery":"Фотогалерея",
    "default":"Zooshop"
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

const modalWindow = {
    BLUR_CLASS: "blur",
    modal: '',

    init: (openButton) => {
        modalWindow.modal = $(".modal");
        modalWindow.initOpenListener(openButton);
        modalWindow.initCloseListener();
    },

    initOpenListener: (openButton) => {
        openButton.click(() => {
            modalWindow.modal.fadeIn(500);
            $("div.content").addClass(modalWindow.BLUR_CLASS)
        });
    },

    initCloseListener: () => {
       $(".modal span").click(() =>{
           modalWindow.modal.fadeOut(600);
           $("div.content").removeClass(modalWindow.BLUR_CLASS)
           });

    }
};

$(document).ready(() => {
    modalWindow.init($(".login-button"))
    })

const modalWindow1 = {
    BLUR_CLASS: "blur",
    modal1: '',

    init: (openButton) => {
        modalWindow1.modal1 = $(".modal1");
        modalWindow1.initOpenListener(openButton);
        modalWindow1.initCloseListener();
    },

    initOpenListener: (openButton) => {
        openButton.click(() => {
            modalWindow1.modal1.fadeIn(500);
            $("div.content").addClass(modalWindow1.BLUR_CLASS)
        });
    },

    initCloseListener: () => {
        $(".modal1 span").click(() =>{
            modalWindow1.modal1.fadeOut(600);
            $("div.content").removeClass(modalWindow1.BLUR_CLASS)
        });

    }
};

$(document).ready(() => {
    modalWindow1.init($(".registr-button"))
});
