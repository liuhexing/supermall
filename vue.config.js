/**
 * alias  取别名
 */
module.exports ={
    configureWebpack: {
        resolve: {
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/assets',
                'views':'@/views'
            }
        }
    }
}