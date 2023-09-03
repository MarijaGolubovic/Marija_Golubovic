// Skrolovanje služi za promenu boje navbara kad se skroluje
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('.section');
const bigBox = document.querySelector('.experience_panel');
const smallBoxes = document.querySelectorAll('.expirience_small_box');

function checkVisible(element) {
    const position = element.getBoundingClientRect();
    return position.top >= 0 && position.bottom <= window.innerHeight;
}

function runAnimation() {
    if (!bigBox.classList.contains('show')) {
        bigBox.classList.add('show');
        setTimeout(() => {
            smallBoxes.forEach((box, i) => {
                setTimeout(() => {
                    box.classList.add('show', 'slide');
                }, i * 200);
            });
        }, 500);
    }
}

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        if (checkVisible(section) && index === 0) {
            runAnimation();
        }
    });
});

sections.forEach((section, index) => {
    section.addEventListener('click', () => {
        if (index === 0) {
            runAnimation();
        }
    });
});


const facultyPanel = document.querySelector('.faculty');
const highSchoolPanel = document.querySelector('.high_school');

window.addEventListener('scroll', () => {
    const positionFaculty = facultyPanel.getBoundingClientRect();
    const positionHighSchool = highSchoolPanel.getBoundingClientRect();

    if (positionFaculty.top >= 0 && positionFaculty.bottom <= window.innerHeight) {
        facultyPanel.style.opacity = 1;
        facultyPanel.style.transform = 'translateX(0)';
    }

    if (positionHighSchool.top >= 0 && positionHighSchool.bottom <= window.innerHeight) {
        highSchoolPanel.style.opacity = 1;
        highSchoolPanel.style.transform = 'translateX(0)';
    }
});

const educationPanel = document.querySelector('.education_panel');

window.addEventListener('scroll', () => {
    const positionEducation = educationPanel.getBoundingClientRect();

    if (positionEducation.top >= 0 && positionEducation.bottom <= window.innerHeight) {
        educationPanel.style.opacity = 1;
    }
});






