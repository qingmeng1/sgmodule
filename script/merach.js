/**
 * Merach (麦瑞克) 开屏去广告脚本
 */

let body = $response.body;
try {
    let obj = JSON.parse(body);
    if (obj.data && obj.data.adverts) {
        obj.data.adverts = [];
        obj.data.adverts[0].productIds = [];
        obj.data.adverts[0].endTime = "2026-01-01 00:00:00";
    }
    body = JSON.stringify(obj);
} catch (error) {
    console.log("Merach AdScript Error: " + error);
}
$done({ body });