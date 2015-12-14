var router = require('express').Router();
var models = require('../../models');

router.route('/dataService')
  .get(
        function (req, res, next) {
            console.log('Consultando Servicio...');
            var numServicio = req.query.numservicio;
            var tipo = req.query.tipo;
            
            models.service.dataService(
                {
                    numServicio: numServicio,
                    tipo: tipo
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
    
router.route('/ConsultaNumeroTel')
    .get(
        function (req, res, next) {
            console.log('Consultando existencia de N°Telefono...');
            var numero = req.query.numero;
            var tipoEm = req.query.tipoem;
            console.log(numero+" "+tipoEm);
            models.service.ConsultaNumeroTel(
                {
                    numero: numero,
                    tipoEm: tipoEm
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
    
    router.route('/PagoServicios')
    .get(
        function (req, res, next) {
            console.log('Realizando Pago de servicio...');
            var numCuenta = req.query.numcuenta;
            var montoPago = req.query.montopago;
            console.log(numCuenta+" "+montoPago);
            models.service.PagoServicios(
                {
                    numCuenta: numCuenta,
                    montoPago: montoPago
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
    
    module.exports = router;