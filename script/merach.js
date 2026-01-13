/**
 * Merach (麦瑞克) 开屏去广告脚本
 */

let body = $response.body;
try {
    let obj = JSON.parse(body);
    if (obj.data && obj.data.id == 41) {
        obj.data.adverts = obj.data.adverts.filter(ad => ad.id === "740");
    } else {
        obj.data.adverts = [];
    }
    body = JSON.stringify(obj);
} catch (error) {
    console.log("Merach AdScript Error: " + error);
}
$done({ body });