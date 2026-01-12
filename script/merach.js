/**
 * Merach (麦瑞克) 开屏去广告脚本
 */

let body = $response.body;
try {
    let obj = JSON.parse(body);
    if (obj.data && obj.data.adverts) {
        obj.data.adverts = [{productIds: ["6"]}];
    }
    body = JSON.stringify(obj);
    console.log("Merach AdScript Body: " + body);
} catch (error) {
    console.log("Merach AdScript Error: " + error);
}
$done({ body });