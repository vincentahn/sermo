export const setupHomePage = () => {
  const aboutIcon = document.getElementById("open-about-modal");
  aboutIcon.addEventListener('click', handleOpenAbout);

  const aboutCloseButton = document.getElementById('about-close-button');
  aboutCloseButton.addEventListener('click', handleCloseAbout);
}

const handleOpenAbout = e => {
  const aboutModal = document.getElementById('about-modal-id');
  aboutModal.style.display = "block";
}

const handleCloseAbout = e => {
  const aboutModal = document.getElementById('about-modal-id');
  aboutModal.style.display = "none";
}