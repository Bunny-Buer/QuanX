/****************
更新时间：2023-4-07
版本：12.1
使用说明：此脚本仅供学习，请勿传播，因个人传播可能造成后果的概不负责
[rewrite_local]
^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/Bunny-Buer/QuanX/Script/Notability.js
[mitm] 
hostname=notability.com
****************/

var body = JSON["parse"]($response["body"]);
var modifiedStatus = "HTTP/1.1 200 OK";
body = {
  data: {
    processAppleReceipt: {
      __typename: "SubscriptionResult",
      error: 0,
      subscription: {
        __typename: "AppStoreSubscription",
        status: "active",
        originalPurchaseDate: "2022-10-31T23:35:29.000Z",
        originalTransactionId: "300001262346134",
        expirationDate: "2099-12-31T23:35:25.000Z",
        productId: "com.gingerlabs.Notability.premium_subscription",
        tier: "premium",
        refundedDate: null,
        refundedReason: null,
        isInBillingRetryPeriod: false,
        gracePeriodExpiresAt: null,
        expirationIntent: null,
        overDeviceLimit: false,
        user: null
      }
    }
  }
};
$done({ status: modifiedStatus, body: JSON["stringify"](body) });
