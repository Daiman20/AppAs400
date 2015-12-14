var conn, models;
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (db) {
    conn = db.connection;
    models = db.models;
    var api = {
        dataService: dataService,
        ConsultaNumeroTel: ConsultaNumeroTel,
        PagoServicios: PagoServicios
    };
    return api;
};

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++Consulta la existencia de un servico(agua,Luz, etc..) para gestioon de 
pago**********************************************************************************/
function dataService(payload){
    return conn.pgm('CONEXSRPGM',
 	    [
 	        {name: 'numServicio', size: 8},
 	        {name: 'tipo', size: 2},
 	        {name: 'existe', size: 1},
 	        {dsServ: 
 	         [
 	             {name: 'SerNun',size: 8},
 	             {name: 'nombre', size: 30},
					{name: 'P_Apellido', size: 15},
					{name: 'S_Apellido',size: 15},
					{name: 'Fecha_Fact',size: 10},
					{name: 'monto',typeName: 'NUMERIC', precision: 15, scale: 2}
					]}
        ])({
            numServicio: payload.numServicio,
            tipo: payload.tipo,
            existe: '0',
            dsServ: 
            {
                SerNun:'0',
                nombre: '0', 
                P_Apellido: '0', 
                S_Apellido: '0',
                Fecha_Fact: '0',
                monto: '0'
            }
        })
        .then(function(result){
            console.log(result);
            return result.dsServ  ? result : null
        });
}/*******************Fin de consulta de la existencia de un servciop*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++Consulta la existencia de un numero de telefono *********************** 
**************************************************************************************/
function ConsultaNumeroTel(payload){
    return conn.pgm('CONEXCEPGM',
 	    [
 	        {name: 'numCel', size: 8},
 	        {name: 'tipoEm', size: 2},
 	        {name: 'existe', size: 1}
        ])({
             
            numCel: payload.numero,
            tipoEm: payload.tipoEm,
            existe: '0'
            
        })
        .then(function(result){
            console.log(result);
            return result.existe === '1' ? result : null
        });
}/*******************Fin de consulta de la existencia de un servciop*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++ Realiza el pago de servicios ***************** *********************** 
**************************************************************************************/
function PagoServicios(payload){
    return conn.pgm('COBALSRPGM',
 	    [
 	        {name: 'sal', size: 1},
 	        {name: 'numCuenta',size: 20},
 	        {name: 'montoPago',size: 15}
        ])({
             
            sal: '0',
            numCuenta: payload.numCuenta,
            montoPago: payload.montoPago
            
        })
        .then(function(result){
            console.log(result);
            return result.sal === '1' ? result : null
        });
}/*******************Fin de consulta de la existencia de un servciop*/