"use strict";angular.module("artpopApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/electric-chapel",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/credit",{templateUrl:"views/credit.html",controller:"CreditCtrl"}).otherwise({redirectTo:"/electric-chapel"})}]),angular.module("artpopApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["ARTPOP","WebGL","Yeoman","Facebook","HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("artpopApp").controller("CreditCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("artpopApp").directive("webglDetector",["$rootScope","THREE","Modernizr",function(a,b,c){function d(){v.resize.invalidate=!0}function e(){u=u||[],q=q||new b.Scene,r=r||new b.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),s=s||new b.WebGLRenderer,s.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight}function f(a){p=a.find(".gl-detector-container"),p.html(s.domElement),s.setClearColor(255*Math.random(),0)}function g(){var a=new b.OctahedronGeometry(2,2),c=new b.MeshBasicMaterial({color:16711935,wireframe:!0}),d=new b.Mesh(a,c);q.add(d);var e=function(){d.rotation.z+=.005,d.rotation.x+=.005,d.rotation.y+=.005};u.push(e)}function h(){}function i(){s.render(q,r),j()}function j(){for(var a=u.length-1;a>=0;a--){var b=u[a];"function"==typeof b&&b()}}function k(){v.resize.invalidate&&!v.resize.throttle&&(v.render.throttle=!0,setTimeout(function(){s.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),v.resize.invalidate=!1,v.render.throttle=!1},1e3))}function l(){t=window.requestAnimationFrame(l),k(),v.render.throttle||i()}function m(){window.cancelAnimationFrame(t)}function n(a){window.addEventListener("resize",d,!1),a.$on("$destroy",function(){m(),window.removeEventListener("resize")})}function o(a,b){a.html(b())}var p,q,r,s,t,u,v={render:{throttle:!1},resize:{invalidate:!1}};return c.webgl&&(e(),h(),g()),{template:'<div class="gl-detector-container"></div>',restrict:"E",transclude:!0,precomplile:function(a){console.log(a.html())},controller:["$scope","$element","$attrs","$transclude",function(a,b,d,e){c.webgl?(f(b,d),n(a),l()):o(b,e)}]}}]),angular.module("artpopApp").factory("THREE",function(){return THREE}),angular.module("artpopApp").directive("activeLink",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=c.find("a").attr("ng-href");-1!==f.indexOf("#")&&(f=f.substring(1)),b.location=a,b.$watch("location.path()",function(a){0===a.indexOf("/")&&(a=a.substring(1)),f===a?c.addClass(e):c.removeClass(e)})}}}]),angular.module("artpopApp").factory("Modernizr",function(){return Modernizr});