
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    

    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
    };
  
  
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('toggle-btn');
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', toggleSidebar);
  });



  
 