(function() {
	"use strict";
	/*[pan and well CSS scrolls]*/
	var pnls = document.querySelectorAll('.panel').length,
		scdir, hold = false;

	function _scrollY(obj) {
		var slength, plength, pan, step = 100,
			vh = window.innerHeight / 100,
			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
		if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
			pan = this || obj;
			plength = parseInt(pan.offsetHeight / vh);
		}
		if (pan === undefined) {
			return;
		}
		plength = plength || parseInt(pan.offsetHeight / vmin);
		slength = parseInt(pan.style.transform.replace('translateY(', ''));
		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
			slength = slength - step;
		} else if (scdir === 'down' && slength < 0) {
			slength = slength + step;
		} else if (scdir === 'top') {
			slength = 0;
		}
		if (hold === false) {
			hold = true;
			pan.style.transform = 'translateY(' + slength + 'vh)';
			setTimeout(function() {
				hold = false;
			}, 1000);
		}
		console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
	}
	/*[swipe detection on touchscreen devices]*/
	function _swipe(obj) {
		var swdir,
			sX,
			sY,
			dX,
			dY,
			threshold = 100,
			/*[min distance traveled to be considered swipe]*/
			slack = 50,
			/*[max distance allowed at the same time in perpendicular direction]*/
			alT = 500,
			/*[max time allowed to travel that distance]*/
			elT, /*[elapsed time]*/
			stT; /*[start time]*/
		obj.addEventListener('touchstart', function(e) {
			var tchs = e.changedTouches[0];
			swdir = 'none';
			sX = tchs.pageX;
			sY = tchs.pageY;
			stT = new Date().getTime();
			//e.preventDefault();
		}, false);

		obj.addEventListener('touchmove', function(e) {
			e.preventDefault(); /*[prevent scrolling when inside DIV]*/
		}, false);

		obj.addEventListener('touchend', function(e) {
			var tchs = e.changedTouches[0];
			dX = tchs.pageX - sX;
			dY = tchs.pageY - sY;
			elT = new Date().getTime() - stT;
			if (elT <= alT) {
				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
					swdir = (dX < 0) ? 'left' : 'right';
				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
					swdir = (dY < 0) ? 'up' : 'down';
				}
				if (obj.id === 'well') {
					if (swdir === 'up') {
						scdir = swdir;
						_scrollY(obj);
					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
						scdir = swdir;
						_scrollY(obj);

					}
					e.stopPropagation();
				}
			}
		}, false);
	}
	/*[assignments]*/
	var well = document.getElementById('well');
	well.style.transform = 'translateY(0)';
	well.addEventListener('wheel', function(e) {
		if (e.deltaY < 0) {
			scdir = 'down';
		}
		if (e.deltaY > 0) {
			scdir = 'up';
		}
		e.stopPropagation();
	});
	well.addEventListener('wheel', _scrollY);
	_swipe(well);
	var tops = document.querySelectorAll('.top');
	for (var i = 0; i < tops.length; i++) {
		tops[i].addEventListener('click', function() {
			scdir = 'top';
			_scrollY(well);
		});
	}
})();

let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

$(document).ready(function(){
	$('.spoiler_links').click(function(){
	 $(this).parent().children('div.spoiler_body').toggle('normal');
	 return false;
	});
   });



   consoleText(['THE END!', 'GOOD BYE!', 'THE END!'], 'text',['#89253e','thistle','snow']);

   function consoleText(words, id, colors) {
	 if (colors === undefined) colors = ['#fff'];
	 var visible = true;
	 var con = document.getElementById('console');
	 var letterCount = 1;
	 var x = 1;
	 var waiting = false;
	 var target = document.getElementById(id)
	 target.setAttribute('style', 'color:' + colors[0])
	 window.setInterval(function() {
   
	   if (letterCount === 0 && waiting === false) {
		 waiting = true;
		 target.innerHTML = words[0].substring(0, letterCount)
		 window.setTimeout(function() {
		   var usedColor = colors.shift();
		   colors.push(usedColor);
		   var usedWord = words.shift();
		   words.push(usedWord);
		   x = 1;
		   target.setAttribute('style', 'color:' + colors[0])
		   letterCount += x;
		   waiting = false;
		 }, 1000)
	   } else if (letterCount === words[0].length + 1 && waiting === false) {
		 waiting = true;
		 window.setTimeout(function() {
		   x = -1;
		   letterCount += x;
		   waiting = false;
		 }, 1000)
	   } else if (waiting === false) {
		 target.innerHTML = words[0].substring(0, letterCount)
		 letterCount += x;
	   }
	 }, 120)
	 window.setInterval(function() {
	   if (visible === true) {
		 con.className = 'console-underscore hidden'
		 visible = false;
   
	   } else {
		 con.className = 'console-underscore'
   
		 visible = true;
	   }
	 }, 400)
   }