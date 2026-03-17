const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(function(link) { 
  link.addEventListener('click', function(e) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const appUrl = this.getAttribute('data-app-url');
    const webUrl = this.getAttribute('href');

    if (isMobile && appUrl) {
      e.preventDefault();
      window.location.href = appUrl;
      
      setTimeout(function() { 
        window.location.href = webUrl;
      }, 1000);
    }
  });
});