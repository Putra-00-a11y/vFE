function filterTools() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const level = document.getElementById('levelFilter').value;
    const cards = document.querySelectorAll('.tool-card');
  
    cards.forEach(card => {
      const name = card.querySelector('h2').textContent.toLowerCase();
      const toolLevel = card.dataset.level;
  
      const matchSearch = name.includes(input);
      const matchLevel = level === '' || toolLevel === level;
  
      if (matchSearch && matchLevel) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  }
  
  // © 2025 Putra - Unauthorized use is strictly prohibited.