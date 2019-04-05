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
 
项目介绍：
---
  1.首页和搜索页都有列表 于是组件化》》组件---/components/lists
  2.评分组件 高度出现 》》》组件----/components/stars
   
    
   
