document.addEventListener("DOMContentLoaded", function () {

  const cardsPerPage = 2;
  const cards = document.querySelectorAll(".paginated-card");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const pageLinks = document.querySelectorAll(".blog-pagination .page-link:not(.prev-btn):not(.next-btn)");

  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function showPage(page) {
    cards.forEach((card, index) => {
      card.style.display =
        index >= (page - 1) * cardsPerPage &&
        index < page * cardsPerPage
          ? "block"
          : "none";
    });

    pageLinks.forEach(link => link.classList.remove("active"));
    if (pageLinks[page - 1]) {
      pageLinks[page - 1].classList.add("active");
    }

    prevBtn.classList.toggle("disabled", page === 1);
    nextBtn.classList.toggle("disabled", page === totalPages);
  }

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  pageLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = index + 1;
      showPage(currentPage);
    });
  });

  showPage(currentPage);
});