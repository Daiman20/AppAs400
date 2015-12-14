var router = require('express').Router();
var models = require('../../models');
//modulo de cuentas
router.route('/dataAcount')
    .get(
        function (req, res, next) {
            console.log('data acount...');
            console.log("ide de cuenta "+ req.query.idacount)
            var idAcount = req.query.idacount;
            models.acount.dataAcount(
                {
                    idAcount: idAcount
                }
            ).then(function(result){
                if(result){
                    return res.json(result);
                }else{
                    return res.status(401).json('not Authorized');
                }
            });
        }
    );
 // ruta de consultar cliente con num cuenta
 router.route('/dataCliAcount')
    .get(
        function (req, res, next) {
            console.log('Loanding client info...');
            var idAcount = req.query.idacount;
            models.acount.dataCliAcount(
                {
                    idAcount: idAcount
                }
            ).then(function(result){
                if(result){
                    return res.json(result);
                }else{
                    return res.status(401).json('numero de cuenta invalido');
                }
            });
        }
    );
    // ruta de transaccion
 router.route('/transac')
    .get(
        function (req, res, next) {
            console.log('Loanding transac...');
            var idAcount1 = req.query.idacount1;
            var idAcount2 = req.query.idacount2;
            var monto1 = req.query.monto1;
            console.log(idAcount1+" "+idAcount2+" "+monto1);
            models.acount.transac(
                {
                    idAcount1: idAcount1,
                    idAcount2: idAcount2,
                    monto1: monto1
                }
            ).then(function(result){
                if(result.sal=='1'){
                    return res.json(result);
                }else{
                    return res.status(401).json('not Authorized');
                }
            });
        }
    );
   
module.exports = router;
    