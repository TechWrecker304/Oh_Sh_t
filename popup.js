const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('li');

  listItems.forEach(item => {
    const linkText = item.textContent.toLowerCase();
    item.style.display = linkText.includes(searchTerm) ? '' : 'none';
  });
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
