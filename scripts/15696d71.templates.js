angular.module("artpopApp").run(["$templateCache",function(a){"use strict";a.put("views/artpop.html","<artpop><div ng-include=\" 'views/bummer.html' \"></div></artpop>"),a.put("views/bummer.html",'Bummer :( System Error<br>You are suppose to see this image:<br><img src="images/d7c00ed6.supposeToSee.gif" alt=""><br>P.S. Requires WebGL & JavaScript Enabled.<br>Simply use desktop Google Chrome/ Latest 4.4 Andoird Google Chrome.'),a.put("views/credit.html",'<div class="apwgl-credit"><div class="credit-title">Credit - Software & Library</div><div class="list-group"><a href="http://threejs.org" class="credit-item">ThreeJS by Mr.doob!</a> <a href="http://yeoman.io/" class="credit-item">AngularJS</a> <a href="http://yeoman.io/" class="credit-item">Karma</a> <a href="http://yeoman.io/" class="credit-item">Jasmine</a> <a href="http://jquery.com/" class="credit-item">jQuery</a> <a href="http://getbootstrap.com/" class="credit-item">Bootstrap</a> <a href="https://github.com/yeoman/generator-angular" class="credit-item">Angular Generator</a> <a href="http://yeoman.io/" class="credit-item">Yeoman</a> <a href="http://github.com/" class="credit-item">Github Desktop Client</a> <a href="http://webgl.org" class="credit-item">WebGL-DebugUtil</a> <a href="https://gist.github.com/paulirish/5438650" class="credit-item">Perf.now() by Paul Irish</a> <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/" class="credit-item">rAF.js by Paul Irish</a> <a href="https://github.com/callumlocke/h5bp-console-polyfill" class="credit-item">Console Polyfill by Callumlocke</a> <a href="https://github.com/wonglok/FrameBudget.js" class="credit-item">FrameBudget.js</a> <a href="http://www.html5rocks.com/en/tutorials/workers/basics/" class="credit-item">Web Worker</a> <a href="https://github.com/h5bp/mothereffinganimatedgif" class="credit-item">MotherEffing Animated Gif</a> <a href="https://github.com/deanm/omggif" class="credit-item">Dean McNamee OMGGif</a> <a href="https://github.com/antimatter15/jsgif/blob/master/NeuQuant.js" class="credit-item">NeuQuant Neural-Net Quantization Algorithm</a> <a href="http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript" class="credit-item">Base64 - Nick Galbreath</a> <a href="https://code.google.com/p/dat-gui/" class="credit-item">DatGUI</a> <a href="http://stackoverflow.com/questions/14710559/dat-gui-how-hide-menu-from-code" class="credit-item">Remove Folder Fix</a> <!-- <a href="" class="credit-item"></a> --> <!-- <a href="" class="credit-item"></a> --> <!-- <a href="" class="credit-item"></a> --> <!-- <a href="" class="credit-item"></a> --> <a href="http://webgl.org" class="credit-item">OpenGL ESSL - Kronos Group</a> <!-- <a href="" class="credit-item"></a> --></div></div><div class="apwgl-credit"><div class="credit-title">Example Code Reference *Goodies*</div><div class="list-group"><a href="http://threejs.org/examples/webgl_custom_attributes.html" class="credit-item">Custom Attribute - Shader Material</a> <a href="http://lab.aerotwist.com/webgl/undulating-monkey/" class="credit-item">Undulating monkey - A3 Engine</a> <a href="http://stemkoski.github.io/Three.js/Text3D-Textures.html" class="credit-item">3D Text Creation</a> <a href="http://jsfiddle.net/p3ZMR/3/" class="credit-item">Active Link Menu</a> <a href="http://stemkoski.github.io/Three.js/" class="credit-item">ThreeJS Examples</a> <!--\n    <a href="" class="credit-item"></a>\n    --></div></div><div class="apwgl-credit"><div class="credit-title">Texture</div><div class="list-group"><span class="credit-item">ThreeJS.org</span> <a href="http://threejs.org/examples/webgl_custom_attributes.html" class="credit-item">Custom Attribute - Shader Material</a> <a href="http://lab.aerotwist.com/webgl/undulating-monkey/" class="credit-item">Undulating monkey - A3 Engine</a> <a href="http://stemkoski.github.io/Three.js/Text3D-Textures.html" class="credit-item">3D Text Creation</a> <a href="http://jsfiddle.net/p3ZMR/3/" class="credit-item">Active Link Menu</a> <a href="http://stemkoski.github.io/Three.js/" class="credit-item">ThreeJS Examples</a> <!--\n    <a href="" class="credit-item"></a>\n    --></div></div><div class="apwgl-credit"><div class="credit-title">WebGL Optimisation</div><div class="list-group"><a href="https://developer.mozilla.org/en-US/docs/Web/WebGL/WebGL_best_practices" class="credit-item">WebGL best pactices - MDN</a> <a href="https://www.youtube.com/watch?v=QVvHtWePQdA" class="credit-item">Optimizing WebGL Applications with Don Olmstead</a> <!--\n    <a href="" class="credit-item"></a>\n    --></div></div><div class="apwgl-credit"><div class="credit-title">Devtools Web Renedring Perf Profiling & Optmisation</div><div class="list-group"><a href="https://www.youtube.com/watch?v=x6qe_kVaBpg" class="credit-item">Chrome DevTools Gogole I/O 2013 - Paul Irish</a> <a href="https://www.youtube.com/watch?v=9xjpmpX4NJE" class="credit-item">A rendering perf guide for develoeprs by Paul Lewis</a> <a href="http://jankfree.org/" class="credit-item">JankFree.org</a> <a href="https://www.youtube.com/watch?v=L3ugr9BJqIs" class="credit-item">Memory Profiling - McCutchan and Loreena Lee</a> <a href="http://www.html5rocks.com/en/tutorials/memory/effectivemanagement/" class="credit-item">Memory Debugging - McCutchan and Loreena Lee</a> <!--\n    <a href="" class="credit-item"></a>\n    --></div></div><div class="apwgl-credit"><div class="credit-title">Tutorials</div><div class="list-group"><a href="http://www.html5rocks.com/en/tutorials/canvas/hidpi/" class="credit-item">HighDPI Canvas</a> <a href="http://aerotwist.com/lab/undulating-monkey/" class="credit-item">Monkey Article - Aerotwist</a> <a href="http://aerotwist.com/tutorials/an-introduction-to-shaders-part-2/" class="credit-item">Into to Shaders Part 2 - Aerotwist</a> <a href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="credit-item">Learning JavaScript Design Patterns - Addy Osmani</a> <a href="http://learningthreejs.com/" class="credit-item">Learning ThreeJS</a> <a href="http://learningwebgl.com/blog/" class="credit-item">Learning WebGL</a> <!--\n    <a href="" class="credit-item"></a>\n    --></div></div><div class="apwgl-footer">Made with love <span class="glyphicon glyphicon-heart"></span> from @wonglok831. Fan ART. Copyright belongs to Respective Owner.<br></div>'),a.put("views/loading.html",'<img src="images/f88320e1.radr.gif" alt="loading">'),a.put("views/main.html","<webgl-detector><div ng-include=\" 'views/bummer.html' \"></div></webgl-detector>"),a.put("views/todos.html","<p>Pre-Alpha ARTPOP WebGL.</p><ul><li>Realtime Collaboration *o*</li><li>More Materials</li><li>More PostProcessing Effect</li><li>More OMG</li></ul>")}]),angular.module("artpopApp").factory("ShaderSun",["BaseShader","CustomControl","ShaderText",function(a,b,c){function d(){var a=new THREE.ImageUtils.loadTexture("textures/cloud.png");a.wrapS=a.wrapT=THREE.RepeatWrapping;var b=new THREE.ImageUtils.loadTexture("textures/lava.jpg");b.wrapS=b.wrapT=THREE.RepeatWrapping,this.uniforms={baseTexture:{type:"t",value:b},baseSpeed:{type:"f",value:.1},noiseTexture:{type:"t",value:a},noiseScale:{type:"f",value:1},alpha:{type:"f",value:.5},time:{type:"f",value:1}},this.select={},this.factors={},this.ctr=null,this.clock=null,this.material=null}return d.prototype=Object.create(a.prototype),d.prototype.constructor=d,d.prototype.init=function(a){a=a||{},this.clock=a.clock||new THREE.Clock,this.ctr=new b,this.setFactors(),this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:c.sun.vs,fragmentShader:c.sun.fs,wireframe:!1}),this.material.side=THREE.DoubleSide},d.prototype.setFactors=function(){this.factors=this.factors||{},this.factors.timerSpeed=1,this.factors.rotateX=!0,this.factors.rotateY=!0,this.factors.rotateZ=!0},d.prototype.reconfig=function(a){a=a||{},this.mesh=a.mesh||function(){throw new Error("Requires Mesh.")}(),this.mesh.material=this.material},d.prototype.setUpCtr=function(){this.ctr.addFolder("SunSahder"),this.ctr.folder.add(this.factors,"timerSpeed",-3,3).listen(),this.ctr.addCtr({type:"slider",name:"Noise Scale",ctx:this.uniforms.noiseScale,get:function(){return this.value},set:function(a){this.value=a},min:.1,max:3}),this.ctr.addCtr({type:"checkbox",name:"wireframe",ctx:this.material,get:function(){return this.wireframe},set:function(a){this.wireframe=a}}),Modernizr.touch||this.ctr.folder.open()},d.prototype.resetAnimation=function(){for(var a in this.uniforms)this.uniforms[a].animate=!0;this.setFactors()},d.prototype.update=function(){var a=this.factors,b=this.clock.getDelta();this.uniforms.time.value+=b*a.timerSpeed,this.ctr.syncController()},d}]),angular.module("artpopApp").factory("BaseShader",function(){function a(){}return a.prototype={init:a,constructor:a,update:function(){},cleanUp:function(){this.cleanUpMesh(),this.cleanUpCtr()},cleanUpMesh:function(){this.mesh&&(this.mesh.material=null,this.mesh=null)},cleanUpCtr:function(){this.ctr&&this.ctr.removeAll()}},a}),angular.module("artpopApp").factory("MeshControl",["CustomControl",function(a){function b(){this.mesh=null,this.factors={},this.ctr=new a}return b.prototype.constructor=b,b.fn=b.prototype,b.prototype.reconfig=function(a){this.mesh=a},b.prototype.resetCtr=function(){this.factors=this.factors||{},this.factors.speed=1,this.factors.rotateX=!1,this.factors.rotateY=!1,this.factors.rotateZ=!0},b.fn.setUpCtr=function(){this.resetCtr(),this.ctr.addFolder("Mesh"),this.ctr.folder.add(this.factors,"speed",-3,3).listen(),this.ctr.folder.add(this.factors,"rotateX").listen(),this.ctr.folder.add(this.factors,"rotateY").listen(),this.ctr.folder.add(this.factors,"rotateZ").listen(),Modernizr.touch||this.ctr.folder.open()},b.fn.cleanUpCtr=function(){this.ctr.removeAll()},b.fn.update=function(){if(this.mesh){var a=this.factors,b=this.mesh;a.rotateX&&(b.rotation.x+=a.speed/50),a.rotateY&&(b.rotation.y+=a.speed/50),a.rotateZ&&(b.rotation.z+=a.speed/50)}},b}]).factory("meshControl",["MeshControl",function(a){return new a}]);