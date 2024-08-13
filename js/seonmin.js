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


    // 히스토리 모바일 창 닫기
    const historyWindow = this.document.querySelector(".brand-history");
    const historyClose = this.document.querySelector(".history-close");
    historyClose.addEventListener("click", function(){
        historyWindow.style.display = "none"
    });







// 버튼 요소들 가져오기
// 버튼 요소들 가져오기
let currentIndex = 0;
const buttons = document.querySelectorAll("#red, #white, #yellow, #blue, #black");

// 슬라이드 이미지 그룹 선택
const redImg = document.querySelectorAll(".redImgs");
const whiteImg = document.querySelectorAll(".whiteImgs");
const yellowImg = document.querySelectorAll(".yellowImgs");
const blueImg = document.querySelectorAll(".blueImgs");
const blackImg = document.querySelectorAll(".blackImgs");

// 현재 색상 및 인덱스 추적
let currentColor = 'red'; // 초기 색상 설정
// 모든 이미지를 숨기는 함수
function hideAllImages() {
    redImg.forEach(img => img.classList.remove("color-active"));
    whiteImg.forEach(img => img.classList.remove("color-active"));
    yellowImg.forEach(img => img.classList.remove("color-active"));
    blueImg.forEach(img => img.classList.remove("color-active"));
    blackImg.forEach(img => img.classList.remove("color-active"));
}

// 모든 버튼에서 button-width 클래스를 제거하는 함수
function removeButtonClass() {
    buttons.forEach(button => button.classList.remove("button-width"));
}

// 각 색상에 대한 슬라이드를 보여주는 함수 (클래스를 추가)
function showSlideForColor(color) {
    hideAllImages(); // 모든 이미지를 숨깁니다.
    
    const imgGroup = {
        red: redImg,
        white: whiteImg,
        yellow: yellowImg,
        blue: blueImg,
        black: blackImg
    };
    
    const images = imgGroup[color];
    images.forEach(img => img.classList.add("color-active"));
}

// 슬라이드와 버튼을 업데이트하는 함수
function updateSlides() {
    showSlideForColor(currentColor); // 현재 색상에 맞는 슬라이드를 표시합니다
}

// 버튼 상태를 업데이트하는 함수
function showSlideBtn(index) {
    removeButtonClass(); // 모든 버튼에서 클래스 제거
    buttons[index].classList.add("button-width"); // 현재 버튼에 클래스 추가
}

// 자동 슬라이드를 위한 함수
function nextSlide() {
    const imgGroup = {
        red: redImg,
        white: whiteImg,
        yellow: yellowImg,
        blue: blueImg,
        black: blackImg
    };
    
    const images = imgGroup[currentColor];
    currentIndex = (currentIndex + 1) % images.length; // 인덱스 증가
    updateSlides(); // 슬라이드 업데이트
    showSlideBtn(Array.from(buttons).findIndex(button => button.id === currentColor));
}

// 자동 슬라이드를 시작하는 함수
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // 3초마다 슬라이드 변경
}

// 초기 상태 설정 및 자동 슬라이드 시작
function initialize() {
    updateSlides(); // 초기 슬라이드 업데이트
    autoSlide(); // 자동 슬라이드 시작
    showSlideBtn(Array.from(buttons).findIndex(button => button.id === currentColor)); // 초기 버튼 상태 설정
}

// 버튼 클릭 이벤트 핸들러 설정
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        currentColor = this.id; // 클릭된 버튼의 색상으로 설정
        currentIndex = 0; // 슬라이드를 첫 번째로 리셋
        updateSlides(); // 슬라이드 업데이트
        showSlideBtn(Array.from(buttons).indexOf(this)); // 버튼 상태 업데이트
    });
});

// 초기화 함수 호출
autoSlide();
initialize(currentIndex);
nextSlide();

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