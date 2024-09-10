var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n        <fieldset>\n            <legend>Personal Information</legend>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Education</legend>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Experience</legend>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Skills</legend>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n        </fieldset>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
