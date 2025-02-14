document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const cardSelectionList = document.getElementById('card-selection-list');
    const resetButton = document.getElementById('reset-button');

    // 카드 버튼 배열
    const cardButtons = Array.from(document.querySelectorAll('.card-button'));
    let activeButton = null; // 현재 활성화된 카드 버튼을 저장

    // 각 카드 버튼에 클릭 이벤트 추가
    cardButtons.forEach((button) => {
        button.addEventListener('click', () => {
            activeButton = button; // 현재 선택된 버튼 저장
            modal.style.display = 'block'; // 모달 열기
        });
    });

    // 모달 닫기
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 해제 이미지 추가
    const deselectImg = document.createElement('img');
    deselectImg.src = 'images/image_deselect.png'; // 해제 이미지 경로
    deselectImg.alt = '선택 해제';
    deselectImg.classList.add('card-image'); // CSS 클래스 추가

    // 해제 이미지 클릭 시 동작
    deselectImg.addEventListener('click', () => {
        if (activeButton) {
            activeButton.style.backgroundImage = ''; // 배경 이미지 제거
            activeButton.style.color = ''; // 텍스트 복원
        }
        modal.style.display = 'none'; // 모달 닫기
    });

    // 해제 이미지 추가
    cardSelectionList.appendChild(deselectImg);

    // 카드 이미지 생성
    cards.forEach(card => {
        const img = document.createElement('img');
        img.src = card.image; // 이미지 URL
        img.alt = card.name;
        img.classList.add('card-image'); // CSS 클래스 추가

        // 카드 선택 시 동작
        img.addEventListener('click', () => {
            if (activeButton) { // 현재 활성화된 카드 버튼이 있을 때
                activeButton.style.backgroundImage = `url(${card.image})`; // 선택한 이미지로 배경 업데이트
                activeButton.style.backgroundSize = 'cover'; // 이미지 크기 조절
                activeButton.style.color = 'transparent'; // 기존 텍스트 숨기기
                modal.style.display = 'none'; // 모달 닫기
            }
        });

        cardSelectionList.appendChild(img); // 카드 리스트에 이미지 추가
    });

    // Reset 버튼 클릭 시 모든 슬롯 초기화
    resetButton.addEventListener('click', () => {
        cardButtons.forEach(button => {
            button.style.backgroundImage = ''; // 배경 이미지 제거
            button.style.color = ''; // 텍스트 복원
        });
    });
});
