
function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchSiteOrGoogle();
    }
  }
  
  function searchSiteOrGoogle() {
    var searchTerm = document.getElementById("search-input").value;
    if (searchTerm.trim() !== "") {
      if (checkContentOnSite(searchTerm)) {
        showContentOnSite(searchTerm);
      } else {
        searchGoogle(searchTerm);
      }
    }
  }

  function checkContentOnSite(searchTerm) {
    var leftContentLinks = document.querySelectorAll('.left-content a');
    for (var i = 0; i < leftContentLinks.length; i++) {
      if (leftContentLinks[i].textContent.toLowerCase() === searchTerm.toLowerCase()) {
        var searchUrl = leftContentLinks[i].getAttribute('href');
        window.open(searchUrl, '_blank');
        return true;
      }
    }
    return false;
  }

  function showContentOnSite(searchTerm) {
    var searchUrl = "https://www." + searchTerm + ".html";
    window.open(searchUrl, "_blank");
  }

  function searchGoogle(searchTerm) {
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    window.open(searchUrl, "_blank");
  }
  window.onscroll = function() {
    var button = document.querySelector('.scroll-up-button');
    if (window.scrollY > 0) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }