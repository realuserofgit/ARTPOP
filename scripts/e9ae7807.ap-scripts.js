"use strict";angular.module("artpopApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/electric-chapel",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/credit",{templateUrl:"views/credit.html",controller:"CreditCtrl"}).otherwise({redirectTo:"/electric-chapel"})}]),angular.module("artpopApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["ARTPOP","WebGL","Yeoman","Facebook","HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("artpopApp").controller("CreditCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("artpopApp").directive("webglDetector",["THREE",function(a){function b(b){i=b.find(".gl-detector-container");var c=window.innerWidth,d=window.innerHeight,e=d/c;o=[],j=new a.Scene,l=new a.PerspectiveCamera(75,e,.1,1e3),k=new a.Projector,m=m||new a.WebGLRenderer,m.setSize(c,d),l.position.z=5,i.html(m.domElement),m.setClearColor(255*Math.random(),0)}function c(){function b(){e.rotation.x+=.05,e.rotation.y+=.05}var c=new a.OctahedronGeometry(3,3),d=new a.MeshBasicMaterial({color:16711935,wireframe:!0}),e=new a.Mesh(c,d);j.add(e),o.push(b)}function d(){var b=new a.AmbientLight(16777215);j.add(b);var c=new a.PointLight(16711680,1,100);c.position.set(50,50,-50),j.add(c)}function e(){m.render(j,l)}function f(){for(var a=o.length-1;a>=0;a--){var b=o[a];"function"==typeof b&&b()}}function g(){n=window.requestAnimationFrame(function a(){n=window.requestAnimationFrame(a),e(),f()})}function h(a){a.$on("$destroy",function(){window.cancelAnimationFrame(n)})}var i,j,k,l,m,n,o,p=!1;return{template:'<div class="gl-detector-container"></div>',restrict:"E",link:function(a,e,f){b(e,f),d(),c(),g(),h(a),p=!0}}}]),angular.module("artpopApp").factory("THREE",function(){return THREE}),angular.module("artpopApp").directive("activeLink",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=c.find("a").attr("ng-href");-1!==f.indexOf("#")&&(f=f.substring(1)),b.location=a,b.$watch("location.path()",function(a){0===a.indexOf("/")&&(a=a.substring(1)),f===a?c.addClass(e):c.removeClass(e)})}}}]);