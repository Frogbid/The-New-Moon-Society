let members = $(".team__members");
let isHover = false;
function mediaSize() { 
  	
$(members).hover(

  () => {
    if (window.matchMedia('(min-width: 480px)').matches) {
    $(members).removeClass("team__members--show");
    isHover = true;
      console.log('hover');
    }
  },
  () => {
     if (window.matchMedia('(min-width: 480px)').matches) {
    isHover = false;
     }
  }
);
    
}

	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);