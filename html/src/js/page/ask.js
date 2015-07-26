require(['../config'], function(){
	require(['$', '_', 'tabslet', '../js/template/common/header.html'], 
		function($, _, tabslet, header){

			console.log(header);

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