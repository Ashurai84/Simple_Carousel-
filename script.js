const data = [
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "John Doe",
    tech: "HTML, CSS",
    desc: "Built responsive UI for landing pages.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Arjun Singh",
    tech: "JavaScript, React",
    desc: "Developed dynamic SPAs with APIs.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Carlos Mendez",
    tech: "Python, Django",
    desc: "Handled backend APIs and database models.",
  },
];

let current = 0;

function showCard(index) {
  const item = data[index];
  document.getElementById("profile-img").src = item.img;
  document.getElementById("feature-name").textContent = item.name;
  document.getElementById("tech-used").textContent = item.tech;
  document.getElementById("feature-description").textContent = item.desc;
  document.getElementById("feature-number").textContent = index + 1;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + data.length) % data.length;
  showCard(current);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % data.length;
  showCard(current);
});

// Show the first card on load
showCard(current);
