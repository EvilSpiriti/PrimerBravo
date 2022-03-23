class Service {
    constructor(title, description, img, clock, pin, category){
        this.title = title;
        this.description = description;
        this.img = img; 
        this.clock = clock;
        this.pin = pin;
        this.category = category;
    }
    render(){
        const serviceHtml = `                
        <div class="product-item">
        <div class="product_img">
            <a href="#"><img src="${this.img}" alt="" class="img_cart"></a>
        </div>
        <div class="product_info">
            <a class="product_btn">
                <div class="product_btn__p">Подробнее</div>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384086 8.31946 0.0384085 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM-8.74228e-08 8.5L15 8.5L15 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="white"/>
                </svg>
            </a>
            <a href="#" class="title_desc">${this.title}</a>
            <p>${this.description}</p>
            <div class="clock_pin">
                <div class="clock">
                    <img src="img/clock.png" alt="">
                    <p>${this.clock}</p>
                </div>
                <div class="pin">
                    <img src="img/pin.png" alt="">
                    <p>${this.pin}</p>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector(".wrapper").insertAdjacentHTML("beforeend", serviceHtml);
    }
}

const currentCategory = {
    name: "Приодеться"
}

function renderServices(){
    const newServices = servicesByCategory();
    removeServices();
    removeButtonMore();
    for(let i = 0; i < 8; i++){
        if(newServices[i] == null){
            break;
        }
        newServices[i].render();
    }
    const countServiceOnPage = document.querySelector(".wrapper").children.length;

    if(newServices.length > countServiceOnPage){
        renderButtonMore();
    }
}

function renderServicesMore() {
    const neededServices = servicesByCategory();
    removeButtonMore();
    let countServiceOnPage = document.querySelector(".wrapper").children.length;
    for(countServiceOnPage; countServiceOnPage < countServiceOnPage +8; countServiceOnPage++){
        if(neededServices[countServiceOnPage] == null){
            return;
        }
        else{
            neededServices[countServiceOnPage].render();
        }
    }
    if(neededServices[countServiceOnPage + 1] != null){
        renderButtonMore();
    }
}

function renderButtonMore  (){
    const buttonMoreHtml = `<button class="product_more__button" onclick="renderServicesMore()">Еще +53 магазина</button>`;
    document.querySelector(".product_more").insertAdjacentHTML("beforeend", buttonMoreHtml);
    renderContentButtonMore();
}
function renderContentButtonMore (){
    const button = document.querySelector(".product_more__button");
    const countServiceOnPage = document.querySelector(".wrapper").children.length;
    const neededServices = servicesByCategory();
    button.innerHTML = `Еще  + ${neededServices.length - countServiceOnPage} магазина`;
}

function removeServices (){
    var element = document.querySelector(".wrapper");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function removeButtonMore (){
    const button = document.querySelector(".product_more__button");
    if(button == null)
        return;
    button.parentNode.removeChild(button);
}

function servicesByCategory(){
    return services.filter(service => service.category == currentCategory.name);
}

function onClickCategory (){
    const nav_page = document.querySelector('.nav_page');
    nav_page.classList.toggle('nav_page__active');
    const header_page = document.querySelector('.header_page');
    header_page.classList.toggle('header_page__active');
    const section_name = document.querySelector('.section_name');
    section_name.classList.toggle('section_name__active');
    document.querySelector('.search_page').classList.toggle('search_page__active');
}


const btn_tabs = document.querySelectorAll('.btn_tabs');
btn_tabs.forEach(element => {
    element.addEventListener('click', onClickNavLink);
});

function onClickNavLink(e) {
    btn_tabs.forEach(btn_tab => {
        btn_tab.classList.remove('nav_link__active');
        btn_tab.querySelector('img').classList.remove('nav_link__img__active');
    });
    e.currentTarget.classList.add('nav_link__active');
    e.currentTarget.querySelector('img').classList.add('nav_link__img__active');
    
    const nav_link = e.currentTarget.querySelector('.nav_link').querySelector('span');
    currentCategory.name = nav_link.innerHTML;
    renderServices();
}

const services = [
    new Service("FUN1DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN2DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN3DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN4DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUNDAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Продукты"),
    new Service("FUN5DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN6DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN7DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN8DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUNDAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Продукты"),
    new Service("FUN9DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUNsDAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Развлечение"),
    new Service("FUNsDAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Развлечение"),
    new Service("FUN1DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN2DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN3DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
    new Service("FUN4DAY", "Магазины яркой, доступной и практичной одежды для всей семьи!", "img/product-img.png", "10:00 — 22:00", "2 этаж", "Приодеться"),
];
renderServices();
