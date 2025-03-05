// Toggle functionality for expandable sections
document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
  // Load Inspiring Stories Section
fetch('features/stories.html')
.then(response => response.text())
.then(data => {
  document.getElementById('stories').innerHTML = data;
})
.catch(error => console.error('Error loading stories:', error));
