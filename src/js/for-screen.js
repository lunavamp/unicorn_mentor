// Frontend Mentor - Build your future
const mentor = {
    name: "Karina Kolesnichenko",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    experience: 3, // years
    teach: function(student) {
      console.log(`Mentoring ${student}...`);
      setTimeout(() => {
        this.skills.forEach(skill => console.log(`Teaching: ${skill}`));
        console.log(`${student} is ready to build amazing apps!`);
      }, 2000); // simulate teaching delay
    }
  };
  
  // Student
  const student = {
    name: "YOU",
    level: "beginner",
    projects: [],
    learn: function(mentor) {
      console.log(`${this.name} is learning from ${mentor.name}...`);
      mentor.teach(this.name);
    },
    buildProject: function(name) {
      console.log(`Building project: ${name}`);
      this.projects.push(name);
    }
  };
  
  // Start learning journey
  student.learn(mentor);
  student.buildProject("Personal Portfolio");
  student.buildProject("To-Do App");
  






  