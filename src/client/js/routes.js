angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('menu.informacioN', {
      url: '/page4',
      views: {
        'side-menu22': {
          templateUrl: 'templates/informacioN.html',
          controller: 'informacioNCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.transferencias', {
      url: '/page5',
      views: {
        'side-menu22': {
          templateUrl: 'templates/transferencias.html',
          controller: 'transferenciasCtrl'
        }
      }
    })
        
      .state('menu.confirmar', {
      url: '/page8',
      views: {
        'side-menu22': {
          templateUrl: 'templates/confirmar.html',
          controller: 'confirmarCtrl'
        }
      }
    })
    .state('menu.confirmar1', {
      url: '/page9',
      views: {
        'side-menu22': {
          templateUrl: 'templates/confirmar1.html',
          controller: 'confirmar1Ctrl'
        }
      }
    })
      
        
    .state('menu.consultas', {
      url: '/page6',
      views: {
        'side-menu22': {
          templateUrl: 'templates/consultas.html',
          controller: 'consultasCtrl'
        }
      }
    })
        
      
    
      
    // .state('tabsController', {
    //   url: '/page3',
    //   abstract:true,
    //   templateUrl: 'templates/tabsController.html'
    // })
      
    
      
        
    .state('menu.transferencia', {
      url: '/page7',
       views: {
        'side-menu22': {
      templateUrl: 'templates/transferencia.html',
      controller: 'transferenciaCtrl'
        }
       }
    })
        
      
    
      
        
    .state('menu.transferenciaEntreTusCuentas', {
      url: '/page18',
      views: {
        'side-menu22': {
      templateUrl: 'templates/transferenciaEntreTusCuentas.html',
      controller: 'transferenciaEntreTusCuentasCtrl'
        }
      }
    })
    .state('menu.pagos', {
      url: '/page3',
      views: {
        'side-menu22': {
      templateUrl: 'templates/pagos.html',
      controller: 'PagosCtrl'
        }
      }
    })    
    .state('menu.pagoServicio', {
      url: '/page11',
      views: {
        'side-menu22': {
      templateUrl: 'templates/pagoservicio.html',
      controller: 'PagosCtrl'
        }
      }
    })  
    .state('menu.consultarpago', {
      url: '/page12',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarpago.html',
      controller: 'PagosCtrl'
        }
      }
    })  
    .state('menu.consultarpagoe', {
      url: '/page14',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarpagoe.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.consultarpagoc', {
      url: '/page15',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarpagoc.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.consultarpagot', {
      url: '/page16',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarpagot.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.consultarecargac', {
      url: '/page19',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarecargac.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.consultarecargam', {
      url: '/page20',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarecargam.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.consultarecargak', {
      url: '/page21',
      views: {
        'side-menu22': {
      templateUrl: 'templates/consultarecargak.html',
      controller: 'PagosCtrl'
        }
      }
    })
    .state('menu.pagorecarga', {
      url: '/page13',
      views: {
        'side-menu22': {
      templateUrl: 'templates/pagorecarga.html',
      controller: 'PagosCtrl'
        }
      }
    }) 
      
    .state('menu', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    ;

  // // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/side-menu22/page4');
  // $urlRouterProvider.otherwise('/side-menu22/page6');

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});

