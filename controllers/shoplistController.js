var shoplistModel = require('../models/shoplistModel.js');
var crud = require('../functions/crud.js');

exports.list_all_shop = function(req, res) {
    crud.getlistAll('shop', function(err, task){
        console.log("controller");
        if(err){
            res.send(err);
        }else{
            res.send(task);
        }
    })
}


// exports.getlistbyid = function(req, res) {
//     shoplistModel.NameShop = req['body'].NameShop,
//     shoplistModel.DetailShop = req['body'].DetailShop
//     const idshop = "(`_id_shop`)";
//     crud.getlistbyId('shop', shoplistMode ,idshop , function (err, resule) {
//         if(err){
//             res.send(err)
//         }else{
//             res.json(resule)
//         }
//     })
// }

exports.creat_shop = function(req, res) {
    shoplistModel.NameShop = req['body'].NameShop,
    shoplistModel.DetailShop = req['body'].DetailShop
    const shoplist = "(`_id`,`NameShop`,`DetailShop`)";
    crud.InsertShop(shoplistMode,shoplist , function (err, resule) {
        if(err){
            res.send(err)
        }else{
            res.json(resule)
        }
    })
}


