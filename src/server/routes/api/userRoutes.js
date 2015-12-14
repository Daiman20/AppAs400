var router = require('express').Router();
var models = require('../../models');
router.route('/authenticate')
    .get(
        function (req, res, next) {
            console.log('Logging in...');
            var idUser = req.query.iduser;
            var password = req.query.password;
            console.log(idUser+" "+password);
            models.user.authenticate(
                {
                    idUser: idUser,
                    password: password
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
    
    /*---------------------------------------------------------------
    Ruta para consulta de datos de clientes**************************/
    
    router.route('/dataClient')
    .get(
        function (req, res, next) {
            console.log('Extrayendo Datos...');
            var idUserCon = req.query.idusercon;
            
            models.user.dataClient(
                {
                    idUserCon: idUserCon
                
                }
            ).then(function(result){
                if(result){
                   return res.json(result);
                }else{
                    return res.status(404).json('not Found');
                }
            });
        }
    );
        /*---------------------------------------------------------------
    Ruta para consulta de las cuentas de clientes**************************/
    
   
    router.route('/acountClient')
    .get(
        function (req, res, next) {
            console.log('Extrayendo Datos de Cuenta...');
            var idUserAcount = req.query.iduseracount;
            models.user.acountClient(
                {
                    idUserAcount: idUserAcount
                }
            ).then(function(result){
                if(result){
                   return res.json(result);
                }else{
                    return res.status(404).json('not Found');
                }
            });
        }
    );
    
/*abre el cursor para obtener todos los numeros de cuenta ligados a un cliente-----------------*/

router.route('/openCursor')
    .get(
        function (req, res, next) {
            console.log('Abriendo  Cursor...');
            var idUserClient = req.query.idacount;
             models.user.openCursor(
                {
                    idUser: idUserClient
                }
            ).then(function(result){
                if(result){
                   return res.json(result);
                }else{
                    return res.status(404).json('not Found');
                }
            });
        }
    );
    
/*obtiene uno por uno los numeros de cuenta ligados a un cliente-----------------*/
 router.route('/nextCursor')
    .get(
        function (req, res, next) {
            console.log('Next Cursor...');
            models.user.nextCursor().then(function(result){
                if(result){
                    console.log('Aqui va el nextCursor de username********');
                    console.log(result.idAcounts)
                    console.log('*******************************************')
                   return res.json(result);
                }else{
                    return res.status(404).json('not Found');
                }
            });
        }
    );
    
/*cierra el cursor-----------------*/
 router.route('/closeCursor')
    .get(
        function (req, res, next) {
            console.log('Cerrando el cursor de cuentas del cliente...');

            models.user.closeCursor();
        }
    );
    router.route('/numCuenta')
    .get(
        function (req, res, next) {
            console.log('Extrayendo Datos...');
            var idUserCon = req.query.idusercon;
            
            models.user.numCuenta(
                {
                    idUserCon: idUserCon
                }
            ).then(function(result){
                if(result){
                   return res.json(result);
                }else{
                    return res.status(404).json('not Found');
                }
            });
        }
    );

module.exports = router;

/*
 * https://as400-daiman20.c9.io/api/users/authenticate?iduser=2&password=2
 * https://as400-daiman20.c9.io/api/users/authenticate?idUser=2&password=2
 * iduser = 2
 * password = serdna
 */
