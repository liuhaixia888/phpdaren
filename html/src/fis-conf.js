//file: fis-conf.js

//后缀名的less的文件使用fis-parser-less编译
//modules.parser.less表示设置后缀名为less的文件的parser，第二个less表示使用fis-parser-less进行编译
fis.config.set('modules.parser.less', 'less');
//将less文件编译为css
fis.config.set('roadmap.ext.less', 'css');


fis.config.set('modules.parser.utc', 'html');
fis.config.set('roadmap.ext.utc', 'js');





// //项目排除掉_xxx.scss，这些属于框架文件，不用关心 
// fis.config.set('project.exclude', '**/_*.scss');
// //scss后缀的文件，用fis-parser-sass插件编译 
// fis.config.set('modules.parser.scss', 'sass');
// //scss文件产出为css文件 
// fis.config.set('roadmap.ext.scss', 'css');


fis.config.merge({
	pack:{
		'css/home.css': ['**.less'],
		'js/template/*.js': ['js/template/**/*.html'],
	}
});

fis.config.set('roadmap.path',[
    {
    	reg : "**.html",
        useStandard: false
    }
]);