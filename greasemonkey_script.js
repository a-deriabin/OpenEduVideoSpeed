// ==UserScript==
// @name     Openedu.ru video speed
// @version  2
// @grant    none
// @match    https://courses.openedu.ru/*
// @author   Andrej Deriabin
// ==/UserScript==

// ================================
// Usage:
// 		1. Install Greasemonkey plugin for your browser
//		2. Click 'New user script' option
//		3. Copy-paste this script. Save it.
//		4. Refresh the page
//		5. Enjoy!
//
//=================================


{
  function get_speed_el() {
     return document.getElementsByClassName('video-speeds')[0];
  }
  
  function add_speed_option(speed) {
      const speed_el = get_speed_el();
      if (!speed_el)
      	  return;
	  const el_first = speed_el.children[0];
      const el_cpy = el_first.cloneNode(true);
      el_cpy.dataset['speed'] = speed;
      el_cpy.children[0].textContent = speed + 'x';
      el_first.before(el_cpy);
  }
  
  function is_missing_options() {
    	const speed_el = get_speed_el();
    	if (!speed_el)
        	return false;
   		return speed_el.children.length <= 4;
  }
  
  window.onload = () => {
    	setInterval(() => {
        if (is_missing_options()) {
      		add_speed_option(2.0);
    		add_speed_option(2.5);
          	add_speed_option(3.0);
        }
      }, 1000);
  };
}
