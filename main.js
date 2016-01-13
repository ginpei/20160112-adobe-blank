(function() {
	function start() {
		var elStatus = document.querySelector('.js-status');
		elStatus.textContent = 'Loading...';

		checkFontLoaded({
			fontName: 'Source Code Pro',
			onload: function() {
				elStatus.textContent = 'Loaded.';
			}
		});
	}

	// ----------------------------------------------------------------
	// Checker

	function checkFontLoaded(options) {
		var checker = new Checker(options);
		checker.start();
		return checker;
	}

	function Checker(options) {
		this.initialize(options);
	}
	(function(prototype) {
		var p = Checker.prototype;
		for (var key in prototype) {
			p[key] = prototype[key];
		}
	})({
		elChecker: null,
		tmCheck: null,

		fontName: null,
		interval: null,
		onload: null,

		defaults: {
			interval: 250
		},

		initialize: function(options) {
			this.fontName = options.fontName;
			this.interval = options.interval || this.defaults.interval;
			this.onload = options.onload;
		},

		start: function() {
			this.prepareChecker();
			this.tmCheck = window.setInterval(this.check.bind(this), this.interval);
		},

		prepareChecker: function() {
			var el = document.createElement('div');
			el.textContent = 'X';
			el.style.fontFamily = 'AdobeBlank';
			el.style.position = 'absolute';

			// WIP
			// el.style.left = '-9999px';
			el.style.top = '0px';

			el.style.border = 'solid 1px #f00';
			document.body.appendChild(el);

			this.elChecker = el;

			// make sure the checker is rendered using Adobe Bank once
			setTimeout(function() {
				el.style.fontFamily = '"' + this.fontName + '", AdobeBlank';
			}.bind(this), 1);
		},

		check: function() {
			var width = this.elChecker.clientWidth;
			if (width !== 0) {
				this.destroy();
				this.onload();
			}
		},

		destroy: function() {
			window.clearInterval(this.tmCheck);

			// WIP
			// document.body.removeChild(this.elChecker);

			this.elChecker = this.tmCheck = null;
		}
	});

	// ----------------------------------------------------------------

	start();
})();
