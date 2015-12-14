var conn, models;
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (db) {
    conn = db.connection;
    models = db.models;
    var api = {
        dataAcount: dataAcount,
        dataCliAcount: dataCliAcount,
        transac: transac
    };
    return api;
};
//muestra los datos de una cuenta
function dataAcount(payload){
    return conn.pgm('COUCONSPGM',
 	    [
 	        {name: 'idAcount', size: 20},
 	        {
 	            dsAcount:
 	            [
 	                {name: 'idAcounts',typeName: 'NUMERIC', precision: 20, scale: 0},
					{name: 'clients_idC', size: 10},
					{name: 'acountType',typeName: 'NUMERIC', precision: 3, scale: 0},
					{name: 'statusAcount',size: 1},
					{name: 'balance',typeName: 'NUMERIC', precision: 15, scale: 2}
 	            ]
 	        }
        ])({
            idAcount:payload.idAcount,
            dsAcount: {idAcounts:payload.idAcount,clients_idC: '0', acountType: '0', statusAcount: '0',balance: '0'}
        })
        .then(function(result){
            console.log(result);
            return result.dsAcount ? result : null
        });
}
//consulta cliente con num cuenta
function dataCliAcount(payload){
   
        return conn.pgm('COUICLIPGM',
 	    [
 	        {name: 'numCu', size: 20},
 	        {
 	            dsAcount:
 	            [
 	                {name: 'idAcounts',typeName: 'NUMERIC', precision: 20, scale: 0},
					{name: 'clients_idC', size: 10},
					{name: 'nombre',size: 50},
					{name: 'apellido1',size: 50},
					{name: 'apellido2',size: 50}
 	            ]
 	        }
        ])({
            numCu:payload.idAcount,
            dsAcount: {idAcounts:payload.idAcount,clients_idC: '0', nombre: '0', apellido1: '0',apellido2: '0'}
        })
        .then(function(result){
            console.log(result);
            return result.dsAcount ? result : null
        });
    
}
//actualiza el saldo
function transac(payload){
    return conn.pgm('COUBALPGM',
 	    [
 	                {name: 'sal', size: 1},
 	                {name: 'numc1',size: 20},
					{name: 'balCal1',size: 15},
					{name: 'numc2',size: 20},
					{name: 'balCal2',size: 15},
					
        ])({
            sal :'0', numc1:payload.idAcount1, balCal1: payload.monto1, numc2:payload.idAcount2 , balCal2: '0'
        })
        .then(function(result){
            console.log(result);
            return result.sal==='1' ? result : '0'
        });
}