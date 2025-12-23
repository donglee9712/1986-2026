document.addEventListener("DOMContentLoaded", () => {
  const locationLinks = document.querySelectorAll(".location-link");
  if (!locationLinks.length) return;

  let modal = document.querySelector(".footer-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "footer-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="footer-modal__backdrop" data-footer-close></div>
      <div class="footer-modal__content" role="dialog" aria-modal="true" aria-label="Address">
        <button class="footer-modal__close" type="button" aria-label="닫기" data-footer-close>&times;</button>
        <h2 class="footer-modal__label">Address</h2>
        <p class="footer-modal__text">서울특별시 서초구 언남길64 덕성빌딩 2층</p>
        <p class="footer-modal__text">2F, 64, Eonnam-gil, Seocho-gu, Seoul, Republic of Korea</p>
        <div
          class="footer-modal__image"
          role="img"
          aria-label="회사 위치 이미지"
        ></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const openModal = () => {
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  modal.querySelectorAll("[data-footer-close]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  locationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });
});
