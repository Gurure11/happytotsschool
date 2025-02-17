document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-button');
    const courseDetailsSection = document.getElementById('course-details');
    const courseName = document.getElementById('course-name');
    const courseObjective = document.getElementById('course-objective');
    const courseVideo = document.getElementById('course-video');
    const courseText = document.getElementById('course-text');
    const startQuizButton = document.getElementById('start-quiz-button');
    const quizSection = document.getElementById('quiz-section');
    const quizForm = document.getElementById('quiz-form');
    const submitQuizButton = document.getElementById('submit-quiz-button');
    const certificateSection = document.getElementById('certificate-section');
    const downloadCertificateButton = document.getElementById('download-certificate-button');
    const studentDashboard = document.getElementById('student-dashboard');
    const progressBar = document.getElementById('progress');
    const enrolledCourses = document.getElementById('enrolled-courses');
    const passedCourses = document.getElementById('passed-courses');

    const courses = {
        1: {
            name: "Health Promotion Officer",
            objective: "This course aims to train students to become health promotion officers.",
            videoUrl: "health_promotion_officer_video.mp4",
            text: "This video covers the basics of health promotion."
        },
        2: {
            name: "Educare N4-N6",
            objective: "This course provides education on early childhood development.",
            videoUrl: "educare_n4_n6_video.mp4",
            text: "This video explains the essentials of early childhood education."
        },
        3: {
            name: "Medical Secretary N4-N6",
            objective: "This course trains students to become medical secretaries.",
            videoUrl: "medical_secretary_n4_n6_video.mp4",
            text: "This video introduces the role of a medical secretary."
        },
        4: {
            name: "Social Auxiliary",
            objective: "This course prepares students for roles in social auxiliary services.",
            videoUrl: "social_auxiliary_video.mp4",
            text: "This video outlines the responsibilities of a social auxiliary worker."
        }
    };

    const quizQuestions = [
        {
            question: "What is health promotion?",
            options: ["A", "B", "C", "D"],
            answer: "A"
        },
        // Add more quiz questions here
    ];

    let currentCourseId = null;
    let quizScore = 0;

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseElement = button.closest('.course');
            currentCourseId = courseElement.getAttribute('data-id');
            const course = courses[currentCourseId];

            courseName.textContent = course.name;
            courseObjective.textContent = course.objective;
            courseVideo.querySelector('source').setAttribute('src', course.videoUrl);
            courseVideo.load();
            courseText.textContent = course.text;

            courseDetailsSection.style.display = 'block';
            quizSection.style.display = 'none';
            certificateSection.style.display = 'none';
            studentDashboard.style.display = 'none';
        });
    });

    startQuizButton.addEventListener('click', () => {
        quizSection.style.display = 'block';
        courseDetailsSection.style.display = 'none';

        quizForm.innerHTML = '';
        quizQuestions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            questionElement.innerHTML = `
                <p>${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizForm.appendChild(questionElement);
        });
    });

    submitQuizButton.addEventListener('click', () => {
        const formData = new FormData(quizForm);
        quizScore = 0;

        quizQuestions.forEach((question, index) => {
            const selectedOption = formData.get(`question${index}`);
            if (selectedOption === question.answer) {
                quizScore++;
            }
        });

        if (quizScore >= 25) { // Assume passing score is 50%
            certificateSection.style.display = 'block';
            progressBar.style.width = `${(quizScore / quizQuestions.length)
