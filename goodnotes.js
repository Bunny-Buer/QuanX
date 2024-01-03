/******************************************************************
更新时间：2024-01-03
软件版本：
使用说明：此脚本仅供学习，请勿传播，因个人传播可能造成后果的概不负责
[rewrite_local]
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://github.com/ddgksf2013/MoYu/raw/master/GoodNotesProCrack.js
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
[mitm] 
hostname=isi.csan.goodnotes.com
******************************************************************/
const body = {};
const obj = JSON.parse((typeof $response !== "undefined" && $response.body) || null);
const gn6 = "com.goodnotes.gn6_one_time_unlock_3999";
const modData = { purchase_date: "2022-09-01T09:12:34Z" };

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.subscriptions[gn6] = {
    original_purchase_date: "2022-09-01T09:12:34Z",
    purchase_date: "2022-09-01T09:12:34Z",
    store: "app_store",
    ownership_type: "PURCHASED"
  };
  obj.subscriber.entitlements["apple_access"] = modData;
  obj.subscriber.entitlements["apple_access"].product_identifier = gn6;
  obj.subscriber.entitlements["crossplatform_access"] = modData;
  obj.subscriber.entitlements["crossplatform_access"].product_identifier = gn6;
  body.body = JSON.stringify(obj);
}

$done(body);
