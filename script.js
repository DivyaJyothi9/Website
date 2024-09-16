document.addEventListener("DOMContentLoaded", function () {
    const mentorSelect = document.getElementById("mentor");
    const enrollmentForm = document.querySelector("form");

    // Sample data for mentor limits
    const mentorLimits = {
        "Mentor 1": 0,
        "Mentor 2": 0,
        "Mentor 3": 0,
        "Mentor 4": 0,
        "Mentor 5": 0,
        "Mentor 6": 0,
        "Mentor 7": 0,
        "Mentor 8": 0,
        "Mentor 9": 0,
        "Mentor 10": 0,
        "Mentor 11": 0,
        "Mentor 12": 0,
        "Mentor 13": 0,
        "Mentor 14": 0,
        "Mentor 15": 0
    };

    function populateInstructors() {
        const instructors = Object.keys(mentorLimits);
        mentorSelect.innerHTML = '<option value="" disabled selected>Select a Mentor</option>'; // Clear existing options

        instructors.forEach(function (instructor) {
            if (mentorLimits[instructor] < 30) {
                const option = document.createElement("option");
                option.value = instructor;
                option.textContent = instructor;
                mentorSelect.appendChild(option);
            }
        });
    }

    function updateMentorOptions() {
        // Update available mentors based on limits
        Array.from(mentorSelect.options).forEach(option => {
            if (mentorLimits[option.value] >= 30) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        });
    }

    enrollmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedMentor = mentorSelect.value;
        if (selectedMentor && mentorLimits[selectedMentor] < 30) {
            mentorLimits[selectedMentor]++;
            if (mentorLimits[selectedMentor] >= 30) {
                // Update the dropdown options to reflect the change
                populateInstructors();
            }
            alert("Enrollment successful!");
            enrollmentForm.reset();
            updateMentorOptions(); // Update the options display
        } else {
            alert("Selected mentor is not available.");
        }
    });

    // Initial population of the dropdown
    populateInstructors();
});
