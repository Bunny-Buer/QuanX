/****************
更新时间：2023-4-09
版本：xxx
使用说明：此脚本仅供学习，请勿传播，因个人传播可能造成后果的概不负责
[rewrite_local]
^https?:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info* url script-response-body https://ghproxy.com/https://raw.githubusercontent.com/Bunny-Buer/QuanX/Script/xingtu.js
[mitm] 
hostname=*.faceu.mobi
****************/
let obj = JSON.parse($response.body);
 obj.data.flag = true;
 obj.data.end_time = 8092599349;
 obj.data.vip_real_end = 8092599349;
obj.data.is_first_subscribe = true;
obj.data.is_cancel_subscribe = false;
 $done({
 body: JSON.stringify(obj)
}
);
