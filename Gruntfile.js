'use strict'

module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-include-source');


	grunt.initConfig({
		wiredep: {
		  task: {

		    // Point to the files that should be updated when
		    // you run `grunt wiredep`
		    src: [
		      'index.html'   // .html support...
		    ],
		    ignorePath: '/\.\.\//'
		  }
		},
		includeSource: {
			options: {
				basePath: '',
				baseUrl: '',
				templates: {
			      	html: {
			        	js: '<script src="{filePath}"></script>',
			        	css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
			    	}
				}
			},
			index: {
				files: {
					'index.html': 'index.tpl.html'
				}
			}
		}	
	})
	grunt.registerTask('html', ['includeSource:index','wiredep:task'])
}