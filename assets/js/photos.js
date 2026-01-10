const tabButtons = document.querySelectorAll('.tab-btn');
const categoryItems = document.querySelectorAll('.collage-item');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    categoryItems.forEach(item => {
      if (filter === "all" || item.dataset.filter === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
