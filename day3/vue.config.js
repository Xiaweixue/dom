const { defineConfig } = require('@vue/cli-service')
module.exports={
  Proxy:{
    '/lejuAdmin, /admin':{
      target:'http://leju.bufan.cloud/',
      ChangeOrigin:true,
    }
  }
}
