document.querySelectorAll('.cidportal-frame').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href');
      const width = this.getAttribute('data-width');
      const height = this.getAttribute('data-height');
      window.open(url, '_blank', `width=${width},height=${height}`);
    });
  });
  