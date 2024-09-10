document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeOutput = `
        <fieldset>
            <legend>Personal Information</legend>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </fieldset>
        
        <fieldset>
            <legend>Education</legend>
            <p><strong>Education:</strong> ${education}</p>
        </fieldset>
        
        <fieldset>
            <legend>Experience</legend>
            <p><strong>Experience:</strong> ${experience }</p>
        </fieldset>
        
        <fieldset>
            <legend>Skills</legend>
            <p><strong>Skills:</strong> ${skills}</p>
        </fieldset>
        `;
        
        const resumeOutputElement = document.getElementById('resumeOutput');
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error(`The resume output element is missing`);
        }
    } else {
        console.error(`One or more input elements are missing`);
    }
});
