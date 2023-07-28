/****************
更新时间：2023-7-28
软件版本：v22.111
使用说明：此脚本仅供学习，请勿传播，因个人传播可能造成后果的概不负责
[rewrite_local]
^https:\/\/www\.xmind\.app\/\_res\/devices url script-response-body https://raw.githubusercontent.com/Bunny-Buer/QuanX/Script/Xmind.js
[mitm] 
hostname = www.xmind.*
****************/
chxm1023 = {
  "license" : {
    "status" : "sub",
    "expireTime" : 4102415999000
  },
  "_code" : 200,
  "raw_data" : "bKnTeMMu/TJ86ZFoUqG+sfKC1nitD8b/NaUT93UBc0woo0BF5uBVYXsHUQJkQxLHGlZCbdnKaKzZ4iljM9xddkyMycpUbAtDoywnr4RNzxqXY20pDM0Bdgm+HssaS1RworH8aaaf0IYnnGplxIuqMyT9107PrenF0MBUIaKU9Cw="
};

$done({body : JSON.stringify(chxm1023)});
