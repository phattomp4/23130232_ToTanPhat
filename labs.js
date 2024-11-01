

function openTab(evt, labName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(labName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Initialize with sample data for demonstration purposes
const courses = {
  1: {
    courseId: 1,
    courseName: "Introduction to Programming",
    courseDescription: "Learn the basics of programming.",
    instructor: "Instructor 1",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
};

function submitCourse(event) {
  event.preventDefault();
  const courseId = document.getElementById("courseId").value;
  const courseName = document.getElementById("courseName").value;
  const courseDescription = document.getElementById("courseDescription").value;
  const instructor = document.getElementById("instructor").value;

  // Generate or update course details
  const currentDate = new Date().toLocaleString();
  if (courseId) {
    // Update existing course
    courses[courseId] = {
      ...courses[courseId],
      courseName,
      courseDescription,
      instructor,
      updatedAt: currentDate,
    };
  } else {
    // Create new course (increment course ID based on existing data)
    const newId = Object.keys(courses).length + 1;
    courses[newId] = {
      courseId: newId,
      courseName,
      courseDescription,
      instructor,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
  }

  // Reset form
  document.getElementById("courseForm").reset();
  document.getElementById("createdAt").value = currentDate;
  document.getElementById("updatedAt").value = currentDate;

  alert("Course saved successfully!");
}

function confirmDelete() {
  const courseId = document.getElementById("courseId").value;
  if (courseId && confirm("Are you sure you want to delete this course?")) {
    delete courses[courseId];
    alert("Course deleted!");
    document.getElementById("courseForm").reset();
  }
}

function viewCourse() {
  const courseId = document.getElementById("courseId").value;
  const course = courses[courseId];

  if (course) {
    document.getElementById("detailsContent").innerHTML = `
            <strong>Course ID:</strong> ${course.courseId}<br>
            <strong>Course Name:</strong> ${course.courseName}<br>
            <strong>Description:</strong> ${course.courseDescription}<br>
            <strong>Instructor:</strong> ${course.instructor}<br>
            <strong>Created At:</strong> ${course.createdAt}<br>
            <strong>Updated At:</strong> ${course.updatedAt}
        `;
    document.getElementById("courseDetails").style.display = "block";
  } else {
    alert("Course not found.");
  }
}

function closeDetails() {
  document.getElementById("courseDetails").style.display = "none";
}

// Initialize with sample data for demonstration purposes
const exercisesData = [
  {
    title: "Exercise 1",
    description: "A simple exercise in C.",
    language: "C",
    difficulty: "Easy",
    completed: false,
  },
  {
    title: "Exercise 2",
    description: "A simple exercise in Python.",
    language: "Python",
    difficulty: "Medium",
    completed: false,
  },
  // Add more exercises as needed
];

function login(event) {
  event.preventDefault();
  // Simulate successful login
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  displayExercises();
}

function displayExercises() {
  const exercisesDiv = document.getElementById("exercises");
  exercisesDiv.innerHTML = "";

  exercisesData.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.className = "exercise";
    exerciseDiv.innerHTML = `
            <h3>${exercise.title}</h3>
            <p>${exercise.description}</p>
            <p>Language: ${exercise.language} | Difficulty: ${exercise.difficulty}</p>
            <button onclick="selectExercise('${exercise.title}')">Select Exercise</button>
        `;
    exercisesDiv.appendChild(exerciseDiv);
  });
}

function selectExercise(title) {
  // Redirect to coding environment or open a modal with coding interface
  alert(`Selected exercise: ${title}`);
}

function filterExercises() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const languageValue = document.getElementById("languageFilter").value;

  const filteredExercises = exercisesData.filter((exercise) => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchValue);
    const matchesLanguage =
      !languageValue || exercise.language === languageValue;
    return matchesSearch && matchesLanguage;
  });

  const exercisesDiv = document.getElementById("exercises");
  exercisesDiv.innerHTML = "";

  filteredExercises.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.className = "exercise";
    exerciseDiv.innerHTML = `
            <h3>${exercise.title}</h3>
            <p>${exercise.description}</p>
            <p>Language: ${exercise.language} | Difficulty: ${exercise.difficulty}</p>
            <button onclick="selectExercise('${exercise.title}')">Select Exercise</button>
        `;
        exercisesDiv.appendChild(exerciseDiv);
    });
}

function logout() {
    // Hide dashboard and show login form
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    
    // Reset the login form
    document.getElementById("loginForm").reset();
}

// Add event listeners for filtering and searching
document.getElementById('search').addEventListener('input', filterExercises);
document.getElementById('languageFilter').addEventListener('change', filterExercises);

const materials = [];

function uploadMaterial(event) {
    event.preventDefault();

    const subject = document.getElementById('subject').value;
    const materialType = document.getElementById('materialType').value;
    const materialFile = document.getElementById('materialFile').files[0];

    if (materialFile) {
        const material = {
            subject: subject,
            type: materialType,
            name: materialFile.name,
            url: URL.createObjectURL(materialFile) // Simulating a file URL
        };
        materials.push(material);
        displayMaterials();
        document.getElementById('materialForm').reset();
    }
}

function displayMaterials() {
    const materialList = document.getElementById('materialList');
    materialList.innerHTML = ''; // Clear the list before displaying

    materials.forEach((material, index) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `
            <strong>${material.subject} - ${material.type}</strong><br>
            <a href="${material.url}" target="_blank">${material.name}</a>
        `;
        materialList.appendChild(div);
    });
}
