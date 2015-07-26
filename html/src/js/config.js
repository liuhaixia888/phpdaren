require.config({
	baseUrl: 'js/',
	paths: {
		'$': 		'lib/jquery.min'
		,'_': 		'lib/underscore'
		,'tabslet': 'vendor/jquery.tabslet.min'
	},
	shim: {
		'$': {
			exports: '$'
		}
		,'_': {
			exports: '_'
		}
		,'tabslet': {
			exports: '$'
		}
	}
});