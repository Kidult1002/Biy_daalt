document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
  
    toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const faqItem = this.parentElement.parentElement;
        const answer = faqItem.querySelector('.answer');
        const isActive = faqItem.classList.contains('active');
  
        if (isActive) {
          answer.style.display = 'none';
          faqItem.classList.remove('active');
          this.textContent = '+';
        } else {
          answer.style.display = 'block';
          faqItem.classList.add('active');
          this.textContent = '-';
        }
      });
    });
  });
  