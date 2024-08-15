function hide_loader() {
  const loader = document.querySelector('.loader');

  setTimeout(function() {
    loader.className += ' hidden';
  }, 1000)
  
}

window.addEventListener('load', hide_loader());

