// 헤더 메뉴
window.onload = function(){
    const mainMenu = document.querySelector(".subHover");
    const subMenu = document.querySelector(".header-submenu");
    mainMenu.addEventListener("click", function(){
        subMenu.classList.toggle("hovering")
    });


    // 모바일 헤더 메뉴 영역
    // 메뉴
    const mBt = this.document.querySelector(".m-menuBt");
    const mMenu = this.document.querySelector(".m-menu");
    const htmlRoot = this.document.querySelector("html");
    const closeBtM = this.document.querySelector(".closeBt-m");
    const closeBtC = this.document.querySelector(".closeBt-c");
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


    // 푸터 subscribe 버튼 커서
    const subscribeBt = document.querySelector(".button")
    const subscribeBtColor = document.querySelector(".subscribe")
    subscribeBt.addEventListener("mouseover", function(){
        subscribeBtColor.classList.add("subscribeOver");
        subscribeBtColor.classList.remove("subscribeOut");
    });
    subscribeBt.addEventListener("mouseout", function(){
        subscribeBtColor.classList.add("subscribeOut");
    });



    
    // 메뉴 1 슬라이드 영역
    // const menu1 = new Swiper(".colorSwiper", {
    //     slidesPerView: 1,
    //     grid: {
    //         rows: 1,
    //         fill: "row",
    //     },
    //     spaceBetween: 30,
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });


    // 메뉴 2 슬라이드 영역
    const menu2 = new Swiper(".menu-2Img-wrap", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row",
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
};







$(document).ready(function() {
  // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
  const $counters = $(".focusLine");
  // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
  const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window).on('scroll', function() {
      // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
      $counters.each(function() {
          const $el = $(this);
  
          // 요소의 위치 정보를 가져옵니다.
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
          const contentHeight = rect.bottom - rect.top; // 요소의 높이
          
          // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
          if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
              $el.addClass('active');
          }
          // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
              $el.removeClass('active');
          }
      });
  }).scroll();
})