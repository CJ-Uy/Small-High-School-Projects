function hover(element, i) {
    switch(i){
        case 1:
            element.setAttribute('src', '../images/about_images/facebook_hover.png');
            break;
        case 2:
            element.setAttribute('src', '../images/about_images/twitter_hover.png');
            break;
        case 3:
            element.setAttribute('src', '../images/about_images/youtube_hover.png');
            break;
    }
    
  }
  
  function unhover(element, i) {
    switch(i){
        case 1:
            element.setAttribute('src', '../images/about_images/facebook.png');
            break;
        case 2:
            element.setAttribute('src', '../images/about_images/twitter.png');
            break;
        case 3:
            element.setAttribute('src', '../images/about_images/youtube.png');
            break;
    }
  }