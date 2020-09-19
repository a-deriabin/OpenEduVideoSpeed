// ==UserScript==
// @name     Openedu.ru video speed
// @version  1
// @grant    none
// @match    https://courses.openedu.ru/*
// @author   Andrej Deriabin
// ==/UserScript==

// ================================
// Usage:
// 		1. Install Greasemonkey browser plugin
//		2. Click 'New user script' option
//		3. Copy-paste this script. Save it.
//		4. Enjoy!
//
//	Might sometimes require page refresh to work.
//
//	If you don't want Greasemonkey plugin, just copy add_speed_option function and call it manually in browser console.
//	Greasemonkey does this for you each time you (re)load page.
//
//=================================


{
  function add_speed_option(speed) {
		  const el_first = document.getElementsByClassName('video-speeds')[0].children[0];
      const el_cpy = el_first.cloneNode(true);
      el_cpy.dataset['speed'] = speed;
      el_cpy.children[0].textContent = speed + 'x';
      el_first.before(el_cpy);
  }
  
  window.onload = () => {
    	setTimeout(() => {
      	add_speed_option(2.0);
    		add_speed_option(2.5);
      }, 1000);
  };
}
