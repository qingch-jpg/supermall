const path = require('path');

module.exports ={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    publicPath:'/supermall/',
    outputDir:path.resolve(__dirname,'docs'),
    devServer:{
        proxy:{
            '/api':{
                target:'http://152.136.185.210:7878'
            }
        }
    }
}


