let currentSection = 0;
const sections = ['profile-section', 'project-section', 'project-section-2'];

document.getElementById('next-button').addEventListener('click', () => {
    document.getElementById(sections[currentSection]).style.display = 'none';
    currentSection = (currentSection + 1) % sections.length;
    document.getElementById(sections[currentSection]).style.display = 'block';
});

document.getElementById('prev-button').addEventListener('click', () => {
    document.getElementById(sections[currentSection]).style.display = 'none';
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    document.getElementById(sections[currentSection]).style.display = 'block';
});
