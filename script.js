// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 프로젝트 카드 생성 함수
function createProjectCard(title, description, imageUrl, projectUrl) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${projectUrl}" target="_blank">프로젝트 보기</a>
    `;
    return card;
}

// 프로젝트 그리드에 카드 추가 예시
const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
    // 여기에 실제 프로젝트 데이터를 추가하세요
    const projects = [
        {
            title: '프로젝트 1',
            description: '프로젝트 설명',
            imageUrl: 'project1.jpg',
            projectUrl: '#'
        },
        // 추가 프로젝트들...
    ];

    projects.forEach(project => {
        projectGrid.appendChild(createProjectCard(
            project.title,
            project.description,
            project.imageUrl,
            project.projectUrl
        ));
    });
} 