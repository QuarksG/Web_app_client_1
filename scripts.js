// Sidebar Menu Interactivity
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function () {
      // Remove 'active' class from all menu links
      document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });
  