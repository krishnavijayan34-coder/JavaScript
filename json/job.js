let job = {
  jobId: 50,
  title: "Electronics Engineer",
  skills: ["Embedded C", "PCB Design", "Lab View"],
  experience: 4,
  salary: 30000
};

document.getElementById("output").innerHTML =
  "Job ID: " + job.jobId + "<br>" +
  "Title: " + job.title + "<br>" +
  "Skills: " + job.skills.join(", ") + "<br>" +
  "Experience: " + job.experience + " years<br>" +
  "Salary: " + job.salary;