const tabButtons = document.querySelectorAll('.tab-btn');
const categoryItems = document.querySelectorAll('.catogery-box');

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




// Video Animations
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("mediaModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");

  document.querySelectorAll(".video-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();

      console.log("Play button clicked");


      const card = this.closest(".catogery-box");
      const img = card.querySelector("img");

      modalImage.src = img.src;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImage.src = "";
    }
  });

});





document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("storyModal");
  const video = document.getElementById("storyVideo");

  document.querySelectorAll(".video-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const card = btn.closest(".catogery-box");

      video.src = card.dataset.video + "?autoplay=1";
      storyName.textContent = card.dataset.name;
      storyCategory.textContent = card.dataset.category;
      storyNotes.textContent = card.dataset.notes;
      storyCamera.textContent = card.dataset.camera;
      storySettings.textContent = card.dataset.settings;
      storySize.textContent = card.dataset.size;
      storyFormat.textContent = card.dataset.format;

      modal.style.display = "block";
    });
  });

  document.querySelector(".story-close").onclick = () => {
    modal.style.display = "none";
    video.src = "";
  };

});

