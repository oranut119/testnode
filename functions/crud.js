var sql = require('./db.js')

module.exports = {
    getlistAll : function(tbName, result){
        sql.query("Select * from " + tbName, function(err, res){
            if(err) {
                console.log("error:", err);
                result(err);
                
            }else{
                console.log("task", res);
                result(res);
                
            }
        })
    },
    // getlistbyId : function(tbName, idShop ,id, result){
    //     sql.query("Select * from " + tbName + "WHERE" + idShop + "=" + id, function(err, res){
    //         if(err) {
    //             console.log("error:", err);
    //             result(err);
                
    //         }else{
    //             console.log("task", res);
    //             result(res);
                
    //         }
    //     })
    // },
    InsertShop : function (newShop, shopName, DetailName) {
        sql.query('INSERT INTO `' + shopName + '`' + DetailName + ' VALUES (' +  newShop._id + ", '" + newShop.shopName + "', '" + newShop.DetailName + "')", function(err , res) {
            if(err) {
                result(err)
            }else{
                result(res);
            }
        } )
    }
}