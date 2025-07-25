 const popup = document.getElementById('popupModal');
  const buttons = document.querySelectorAll('.card button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.display = 'flex';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 2500);
    });
  });