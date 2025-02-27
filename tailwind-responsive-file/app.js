const menuBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');

  if (mobileMenu.classList.contains('hidden')) {
    menuBtn.innerHTML = '<i class="fas fa-bars text-[20px]"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-times text-[20px]"></i>'; 
  }
});
