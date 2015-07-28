require(['../config'], function(){
	require(['$', '_', 'tabslet', 'mTpl', '../js/template/common/header'], 
		function($, _, tabslet, mTpl, header){
			
			this.data = {};
			var tplHeader = mTpl( header, this.data );
			$('.wrapper').prepend(tplHeader);

			
			/* 问答页面切换 */
			$('#tabAsk').tabslet({
				// active: 2

				// mouseevent: 'hover',
				// attribute: 'href',
				animation: true

				// autorotate: true,
				// delay: 3000
			});


			$('#tabAsk2').tabslet({});



	});
});