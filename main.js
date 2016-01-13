(function() {
	function start() {
		var elStatus = document.querySelector('.js-status');
		elStatus.textContent = 'Loading...';

		checker.start({
			fontName: 'Source Code Pro',
			onload: function() {
				elStatus.textContent = 'Loaded.';
			}
		});
	}

	// ----------------------------------------------------------------
	// Checker

	var checker = {
		elChecker: null,
		tmCheck: null,

		defaults: {
			interval: 250
		},

		start: function(options) {
			options = options || {};
			options.interval = options.interval || this.defaults.interval;
			this.prepareChecker(options);
			this.tmCheck = window.setInterval(this.check.bind(this, options), options.interval);
		},

		prepareChecker: function(options) {
			var el = document.createElement('div');
			el.textContent = 'X';
			el.style.fontFamily = 'AdobeBlank';
			el.style.position = 'absolute';
			// el.style.left = '-9999px';
			el.style.top = '0px';
			el.style.border = 'solid 1px #f00';
			document.body.appendChild(el);

			this.elChecker = el;

			setTimeout(function() {
				el.style.fontFamily = '"' + options.fontName + '", AdobeBlank';
			}.bind(this), 1);
		},

		check: function(options) {
			var width = this.elChecker.clientWidth;
			if (width !== 0) {
				this.clean();
				options.onload();
			}
		},

		clean: function() {
			window.clearInterval(this.tmCheck);
			// WIP
			// document.body.removeChild(this.elChecker);

			this.elChecker = this.tmCheck = null;
		}
	};

	// ----------------------------------------------------------------

	start();
})();
