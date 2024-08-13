// 헤더 메뉴
window.onload = function(){
    const mainMenu = document.querySelector(".subHover");
    const subDisplay = document.querySelector(".subDisplay")
    const subMenu = document.querySelector(".header-submenu");
    const menuHover = document.querySelector(".menu-hover");
    const mainLogo = document.querySelector(".main-logo");
    mainMenu.addEventListener("click", function(){
        subMenu.classList.toggle("hovering")
    });
    
    // 모바일 헤더 메뉴 영역
    // 메뉴
    // 모바일 헤더 메뉴 영역
    // 메뉴
    const mBt = this.document.querySelector(".m-menuBt");
    const mMenu = this.document.querySelector(".m-menu");
    const htmlRoot = this.document.querySelector("html");
    const closeBtM = this.document.querySelector(".closeBt-m");
    const closeBtC = this.document.querySelector(".closeBt-c");
    const closeMoreBtn = this.document.querySelector(".close-moreBtn")
    // 메뉴 또는 카트 클릭시 body의 백그라운드가 어둡게 변함
    const btBlur = this.document.querySelector("html");

    mBt.addEventListener("click", function(){
        const mstate = this.classList.contains("m-active");
        if(!mstate){
            this.classList.add("m-active");
            mMenu.classList.add("m-menuActive");
            htmlRoot.classList.add("m-menuActive")
            cartList.classList.remove("c-menuActive");
            btBlur.classList.add("bt-blur");
        }
        else{
            this.classList.remove("m-active");
            mMenu.classList.remove("m-menuActive");
            htmlRoot.classList.remove("m-menuActive");
            btBlur.classList.remove("bt-blur");
        }
    });

    // // 모바일 메뉴 클릭시 해당하는 메뉴의 서브 메뉴창의 display가 block이 된다
    // const ifWindow = document.querySelector(".m-menu > ul > li .ifWindow");
    // const mMenuUlLi = this.document.querySelector(".m-menu > ul > li");
    // mMenuUlLi.addEventListener("click", function(){
    //     ifWindow.style.display = "block"
    // })
    // closeMoreBtn.addEventListener("click", function(){
    //     ifWindow.style.display = "none"
    // })

    // 검색
    const searchBtn = this.document.querySelector(".search-btn");
    const searchXBtn = this.document.querySelector(".search-xbtn");
    const searchBar = this.document.querySelector(".search-bar");
    searchBtn.addEventListener("click", function(event) {
        // 각 요소의 클래스에 대해 toggle 메서드를 사용하여 추가/제거를 처리합니다.
            searchBar.classList.toggle("search-active");
            btBlur.classList.toggle("bt-blur");
            htmlRoot.classList.toggle("m-menuActive");
            menuHover.classList.toggle("white-fixed");
            mainLogo.classList.toggle("logo-margin");
            subDisplay.classList.toggle("hidden");
            event.stopPropagation(); // 이벤트 버블링을 막아 document 클릭 이벤트에 의해 닫히지 않도록 함
    });
    document.addEventListener("click", function(event) {
        // 클릭한 요소가 searchBtn, searchBar 또는 menuHover 내부에 속하지 않는지 확인
        if (!searchBar.contains(event.target) && !searchBtn.contains(event.target) && !menuHover.contains(event.target)) {
            searchBar.classList.remove("search-active");
            btBlur.classList.remove("bt-blur");
            htmlRoot.classList.remove("m-menuActive");
            menuHover.classList.remove("white-fixed");
            mainLogo.classList.remove("logo-margin");
            event.stopPropagation();
        }
        if(!cartList.contains(event.target) && !cartBt.contains(event.target) &&!menuHover.contains(event.target)){
            cartList.classList.remove("c-menuActive");
            btBlur.classList.remove("bt-blur");
        }
        if(!mMenu.contains(event.target) && !mBt.contains(event.target) &&!menuHover.contains(event.target)){
            mMenu.classList.remove("m-menuActive");
            btBlur.classList.remove("bt-blur");
        }
    });

    //카트(장바구니)
    const cartBt = this.document.querySelector(".cartBt");
    const cartList = this.document.querySelector(".cartList");
    cartBt.addEventListener("click" , function(){
        const carting = this.classList.contains("cart-active");
        if(!carting){
            this.classList.add("cart-active");
            cartList.classList.add("c-menuActive")
            mMenu.classList.remove("m-menuActive");
            htmlRoot.classList.remove("m-menuActive");
            btBlur.classList.add("bt-blur");
        }
        else{
            this.classList.remove("cart-active");
            cartList.classList.remove("c-menuActive");
            btBlur.classList.remove("bt-blur");
        }
    });
    closeBtM.addEventListener("click", function(){
        mMenu.classList.remove("m-menuActive");
        htmlRoot.classList.remove("m-menuActive");
        btBlur.classList.remove("bt-blur");
    });
    closeBtC.addEventListener("click", function(){
        mMenu.classList.remove("c-menuActive");
        cartList.classList.remove("c-menuActive");
        btBlur.classList.remove("bt-blur");
    });
};