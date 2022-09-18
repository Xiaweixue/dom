const { defineConfig } = require('@vue/cli-service')
module.exports={
  devServer:{
    proxy:{
      '/lejuAdmin, /admin':{
        target:'http://leju.bufan.cloud/',
        ChangeOrigin:true
      }
    }
  }
}
