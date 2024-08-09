window.addEventListener("load", function() {
    // 모든 링크에 클릭 이벤트 설정
    document.querySelectorAll('a').forEach(function(anchor) {
        // href 속성이 'login.html'이 아니면 preventDefault 적용
        if (anchor.getAttribute('href') !== 'login.html') {
            anchor.addEventListener('click', function(event) {
                // 로고 링크일 경우는 기본 동작을 허용
                if (anchor.id === 'logo') {
                    // 기본 동작을 수행하도록 설정
                    window.location.href = anchor.href;
                } else {
                    // 기본 동작(스크롤 업) 방지
                    event.preventDefault();
                }
            });
        }
    });
});
