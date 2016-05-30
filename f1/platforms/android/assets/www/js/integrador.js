angular.module('integrador', ['ionic','starter'])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$stateProvider){
	$urlRouterProvider.otherwise('/integrador');
	//$ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.views.forwardCache(true);

	var integrador = {
		name: 'integrador',
		url: '/integrador',
		params: {
			param1: { array: true }
		},
		templateUrl: 'integrador.html',
		controller: 'AppCtrl'};

		$stateProvider
		.state(integrador)

	})
.run(function($ionicPlatform,$rootScope,$state,$rootScope) {
	$rootScope.barra="barra";
	$ionicPlatform.ready(function() {
	});
})
.controller('AppCtrl', function($scope, MercadoPagoService){
	//$scope.barra="barra";
	// $ionicHistory.clearHistory();
	// $ionicHistory.clearCache();
	MercadoPagoService.setAccessToken("APP_USR-244508097630521-031308-29cafdb25ffb6404fba1f5e24e0c4599__LA_LD__-150216849");
	MercadoPagoService.setPublicKey("TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a");
	MercadoPagoService.setPrefId("150216849-9fa110ac-8351-4526-b874-00871f9f94ef");
var pm={
          "children": null,
          "children_header": null,
          "comment": "Se acreditará en 7 dias hábiles",
          "description": "",
          "id": "bapropagos",
          "show_icon": true,
          "type": "payment_method"
        };
	var pagooff={"id":585794,
   "date_created":"2016-05-03T13:23:30.000-04:00",
   "date_approved":null,
   "date_last_updated":"2016-05-03T13:23:30.000-04:00",
   "money_release_date":null,
   "operation_type":"regular_payment",
   "issuer_id":null,
   "payment_method_id":"rapipago",
   "payment_type_id":"ticket",
   "status":"pending",
   "status_detail":"pending_waiting_payment",
   "currency_id":"ARS",
   "description":null,
   "live_mode":false,
   "sponsor_id":null,
   "authorization_code":null,
   "collector_id":150216849,
   "payer":{
      "type":"guest",
      "id":null,
      "email":"test-email@email.com",
      "identification":{
         "type":null,
         "number":null
      },
      "phone":{
         "area_code":null,
         "number":null,
         "extension":null
      },
      "first_name":null,
      "last_name":null
   },
   "metadata":{

   },
   "order":{

   },
   "external_reference":null,
   "transaction_amount":1000,
   "transaction_amount_refunded":0,
   "coupon_amount":0,
   "differential_pricing_id":null,
   "deduction_schema":null,
   "transaction_details":{
      "net_received_amount":0,
      "total_paid_amount":1000,
      "overpaid_amount":0,
      "external_resource_url":"https://sandbox.mercadopago.com/coupon/rapipago",
      "installment_amount":0,
      "financial_institution":null,
      "payment_method_reference_id":"585793"
   },
   "fee_details":[

   ],
   "captured":true,
   "binary_mode":false,
   "call_for_authorize_id":null,
   "statement_descriptor":null,
   "installments":1,
   "card":{

   },
   "notification_url":null,
   "refunds":[

   ]};
	var callback=function(datos){
		console.log(datos);
	}
	$scope.grupos=function(){
		MercadoPagoService.startGrupos(callback);
	}
	$scope.ryc=function(){
		MercadoPagoService.startRyc(callback, pm);
	}
	$scope.ins=function(){
		MercadoPagoService.startIns(callback, pagooff);
	}
	$scope.con=function(){
		//MercadoPagoService.startCongrats(callback);
	}
	$scope.f3=function(){
		MercadoPagoService.startCheckout(callback);
	}
	$scope.f2=function(){
		MercadoPagoService.startF2(callback);
	}
})
