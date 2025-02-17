 document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-button');
    const studentDashboard = document.getElementById('student-dashboard');
    const enrolledCourses = document.getElementById('enrolled-courses');
    const courseDetailsSection = document.getElementById('course-details');
    const courseName = document.getElementById('course-name');
    const courseObjective = document.getElementById('course-objective');
    const courseVideo = document.getElementById('course-video');
    const courseText = document.getElementById('course-text');

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

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseElement = button.closest('.course');
            const courseId = courseElement.getAttribute('data-id');
            const course = courses[courseId];

            courseName.textContent = course.name;
            courseObjective.textContent = course.objective;
            courseVideo.querySelector('source').setAttribute('src', course.videoUrl);
            courseVideo.load();
            courseText.textContent = course.text;

            courseDetailsSection.style.display = 'block';
            studentDashboard.style.display = 'none';
        });
    });
});
