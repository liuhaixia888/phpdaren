require.config({
	baseUrl: 'js/',
	paths: {
		'$': 		'lib/jquery.min'
		,'_': 		'lib/underscore'
		,'tabslet': 'vendor/jquery.tabslet.min'
		,'mTpl': 'vendor/mTpl'
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