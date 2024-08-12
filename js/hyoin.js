window.onload = function(){
    // 메인 로고 및 미니 로고
    const mainLogo = document.querySelector(".main-logo");
    const miniLogo = document.querySelector(".mini_logo");  // 미니 로고의 클래스 이름을 지정

    // 미니 로고 클릭 시 인덱스 페이지로 이동
    miniLogo.addEventListener("click", function(){
        window.location.href = "index.html";  // 인덱스 페이지로 이동
    });

    // 모든 링크에 클릭 이벤트 설정
    document.querySelectorAll('a').forEach(function(anchor) {
        // href 속성이 'login.html'이 아니면 preventDefault 적용
        if (anchor.getAttribute('href') !== 'login.html') {
            anchor.addEventListener('click', function(event) {
                // 로고 링크일 경우는 기본 동작을 허용
                if (anchor.id === 'logo' || anchor.classList.contains('mini_logo')) {
                    // 기본 동작을 수행하도록 설정
                    window.location.href = anchor.href;
                } else {
                    // 기본 동작(스크롤 업) 방지
                    event.preventDefault();
                }
            });
        }
    });
};
