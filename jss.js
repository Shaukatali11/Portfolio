const roles = ['Data Science Enthusiast', 'Data Analyst', 'Software Engineer'];
let index = 0;

function changeRoleText() {
    document.getElementById('specificRole').textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeRoleText, 3000); // Change text every 3 seconds
