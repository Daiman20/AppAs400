var conn, models;
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (db) {
    conn = db.connection;
    models = db.models;
    var api = {
        authenticate: authenticate,
        dataClient: dataClient,
        acountClient: acountClient,
        openCursor: openCursor,
        nextCursor: nextCursor,
        closeCursor: closeCursor,
        numCuenta: numCuenta
        
    };
    return api;
};

function authenticate(payload){
    return conn.pgm('ESUSU',
 	    [
 	        {name: 'sal', size: 1,},
 	        {name: 'idUser', size: 10},
 	        {name: 'passCli', size: 10}
        ])({
            sal: '0' ,
            idUser: payload.idUser,
            passCli: payload.password
            
        })
        .then(function(result){
            console.log(result);
            return result.sal === '1' ? result : null
        });
}
function dataClient(payload){
    return conn.pgm('CLIPANTPRC',
 	    [
 	        {name: 'idUserCon', size: 10},
 	        {dsCli: 
 	         [
 	             {name: 'id',typeName: 'NUMERIC', precision: 10, scale: 0},
 	             {name: 'username', size: 50},
					{name: 'firstname', size: 50},
					{name: 'secondname',size: 50},
					{name: 'numberClientID',size: 10},
					{name: 'nationality',size: 50},
					{name: 'birthdate',size: 10},
					{name: 'districtName',size: 50},
					{name: 'address',size: 100},
					{name: 'cantonName',size: 50},
					{name: 'provinceName',size: 30},
					{name: 'nameTypeID',size: 45}
					]}
        ])({
            idUserCon: payload.idUserCon,
            dsCli: 
            {
                id:'0',
                username: '0', 
                firstname: '0', 
                secondname: '0',
                numberClientID: '0',
                nationality: '0',
                birthdate: '0',
                districtName: '0',
                address: '0',
                cantonName: '0',
                provinceName: '0',
                nameTypeID: '0'}
        })
        .then(function(result){
            console.log(result);
            return result.dsCli  ? result : null
        });
}

//muestra las cunetas de un cliente version dos devuelve un string de 1000
function acountClient(payload){
    return conn.pgm('COUTODCUEN',
 	    [
 	        {name: 'idUserC', size: 10},
 	        {name: 'cuentasString',size: 1000}
		])({
            idUserC:payload.idUserAcount,
            cuentasString:''
        })
        .then(function(result){
            console.log(result);
            return result.cuentasString ? result : null
        });
}
// abre cursor de las cuentas de un cliente
function openCursor(payload){
    return conn.pgm('OPENCURPGM',
 	    [
 	        {name: 'idUserC', size: 10},
 	       {name: 'sal', size: 1}
        ])({
            idUserC:payload.idUser, sal:'0'
         })
        .then(function(result){
            console.log('****Aqui va el resull del metodo openCursor en usermodel¨****** ');
            console.log(result);
            console.log('*************************************************** ***********');
           // console.log("cursor open...");
            return result.sal==='1' ? result : null
        });
}
// next cursor, saca uno por uno los elementos
function nextCursor(){
    return conn.pgm('NEXTCURPGM',
 	    [
 	        {name: 'idAcounts',size: 20}
 	  
        ])({
            idAcounts:''
        })
        .then(function(result){
            console.log('****Aqui va el resull del metodo nextCursor en usermodel¨****** ');
            console.log(result);
            console.log('*************************************************** ');
           // console.log((result.idAcounts!='-1'));
            return result.idAcounts!='-1' ? result : null
        });
}
// abre cursor de las cuentas de un cliente
function closeCursor(){
    return conn.pgm('CLOSECUR');
}
//muestra el numero de cuentas de un cliente
function numCuenta(payload){
    return conn.pgm('COUNUMPGM',
 	    [
 	        {name: 'idUserC', size: 10},
 	        {name: 'numC', size: 10}
        ])({
            idUserC:payload.idUserCon,numC:'0'
            
        })
        .then(function(result){
           console.log('****Aqui va el resull del metodo numCuenta en usermodel¨****** '); 
           console.log(result);
           console.log('*************************************************** ');
            return result.numC ? result : null
        });
}