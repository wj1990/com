豆瓣电影
==
运行
---
1.下载微信开发者工具  
2.注册微信公众平台小程序账号 https://mp.weixin.qq.com/wxopen/waregister?action=step1    
  （最好不要用腾讯系 邮箱，我用的163邮箱，因为有限制没办法）  
3.拿到appid   
4.开发者工具》》开启项目   

注意事项：
---
  1.豆瓣开放api 在开发这工具里面 用不了，费了半天在百度找到 可用的  
    http://t.yushu.im/v2/movie/coming_soon //即将上映 字段 start=1 count=10  
    'http://t.yushu.im/v2/movie/subject/' + options.id//电影详情   
  2.新建文件 删除文件必须在 微信开发者工具里面新建文件，禁止在win10系统右键新建文件，不然会引起莫名的bug,不信你可以试试。
 
项目介绍：
---
  1.首页和搜索页都有列表 于是想起封装一下 即组件---lists  
    小程序封装组件：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/  
  2.微信小程序不支持 过滤器，只是模仿 vue react,可是还模仿的不全，呵呵！
    <view>{{ dodel() }}</view> ------ 函数执行竟然不支持，如果你知道可以 @我。。。  
    没办法只能 在数据请求的回调里面 把data二次组装 ：例如 data.seconDname = data.name+'AAA';    
    <view>{{ seconDname }}</view>   
    
   
