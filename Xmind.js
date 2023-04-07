/****************
更新时间：2023-4-07
软件版本：v22.111
使用说明：此脚本仅供学习，请勿传播，因个人传播可能造成后果的概不负责
[rewrite_local]
^https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/Bunny-Buer/QuanX/Script/Xmind.js
[mitm] 
hostname=www.xmind.cn, www.xmind.net
****************/

var obj = JSON.parse($response.body);
obj = {
   "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=",
   "license": {
     "status": "sub",
     "expireTime": 4102415999000
   },
   "_code": 200
 }
$done({body: JSON.stringify(obj)});
