'use strict';
/* global THREE, Modernizr */
angular.module('artpopApp')
.factory('APWGLAPP', function (X3, shaderBank, meshBank, CustomControl, meshControl, gifMaker) {
	// Service logic
	// ...

	function APWGL(){
		X3.call(this);

		this.parent = X3.prototype;

		this.ctr = new CustomControl();

		this.last = {
			mesh: null,
			shader: null
		};

		this.select = {
			options: {
				mesh: Object.keys(meshBank.factories),
				shader: Object.keys(shaderBank.factories)
			}
		};

		this.select.current = {
			mesh: this.select.options.mesh[0],
			shader: this.select.options.shader[0],
		};



		this.prebind = this.prebind || {};
	}
	APWGL.prototype = Object.create(X3.prototype);
	APWGL.prototype.constructor = APWGL;

	//shortcut
	APWGL.fn = APWGL.prototype;

	/* ============================================
		init
	   ============================================ */
	APWGL.fn.init = function(){
		this.parent.init.apply(this, arguments);





		this.addTask(this.setUpCtr);
		this.addTask(this.setUpScene);
	};

	/* ============================================
		Directive
	   ============================================ */
	APWGL.fn.reconfig = function($scope, $element, container){

		//Gif
		gifMaker.switchTo(this);


		this.resizeRenderer(window.innerWidth, window.innerHeight);


		var controls = new THREE.OrbitControls(this.camera, container);

		this.controls = controls;
		$scope.$on('$destroy', function(){
			controls.camera = null;
			controls.domElement = null;
		});

		this.parent.reconfig.apply(this, arguments);


		// //Camera
		// var controls = new THREE.TrackballControls( this.camera, container);
		// this.controls = controls;

		// controls.rotateSpeed = 1.0;
		// controls.zoomSpeed = 1.2;
		// controls.panSpeed = 0.8;

		// this.minDistance = 50;
		// this.maxDistance = 50;

		// controls.noZoom = false;
		// controls.noPan = true;

		// controls.staticMoving = false;
		// controls.dynamicDampingFactor = 0.2;

		// controls.keys = [ 65, 83, 68 ];

		// $scope.$on('$destroy', function(){
		// 	controls._removeEventHandler();
		// 	controls.camera = null;
		// 	controls.domElement = null;
		// });



	};

	APWGL.fn.setUpScene = function(){
		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);


		// mesh.rotation.x = 350;
		// mesh.rotation.y = 350;

		meshControl.reconfig(mesh);
		meshControl.setUpCtr();

		//config shader with mesh
		shader.reconfig({
			mesh: mesh,
			url: 'textures/disturb.jpg',
			scene: this.scene,
			camera: this.camera,
			renderer: this.renderer
		});


		shader.setUpCtr();


		// shader.factors.wireframe = true;
		// shader.material.wireframe = true;


		//add to scene
		this.scene.add( mesh  );


		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
	};


	/* ============================================
		GIF
	   ============================================ */
	APWGL.fn.MakeGif = gifMaker.start.bind(gifMaker);

	/* ============================================
		Controllers
	   ============================================ */
	APWGL.fn.setUpCtr = function(){
		this.ctr.addFolder('APWGL');
		this.ctr.folder.add(this.select.current, 'shader', this.select.options.shader).onChange(this.onChangeShader.bind(this));
		this.ctr.folder.add(this.select.current, 'mesh', this.select.options.mesh).onChange(this.onChangeMesh.bind(this));
		this.ctr.folder.add(this, 'MakeGif');

		this.ctr.folder.add(gifMaker.config, 'autoDownload').listen();
		if (Modernizr.touch){
			gifMaker.config.autoDownload = true;
			gifMaker.config.displayGif = false;
		}else{
			//desktop
			this.ctr.folder.open();
			gifMaker.config.displayGif = true;
			gifMaker.config.autoDownload = false;
		}
	};
	APWGL.fn.cleanUpCtr = function(){
		this.ctr.removeAll();
	};

	/* ============================================
		Selects
	   ============================================ */
	APWGL.fn.onChangeMesh = function(){
		if (this.last.mesh){
			//delete last item
			this.scene.remove( this.last.mesh );
		}

		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);


		meshControl.reconfig(mesh);

		//config shader with mesh
		shader.reconfig({
			mesh: mesh,
			url: 'textures/disturb.jpg',
			scene: this.scene,
			camera: this.camera,
			renderer: this.renderer
		});

		this.scene.add( mesh );


		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
	};
	APWGL.fn.onChangeShader = function(){
		if (this.last.shader){
			this.last.shader.cleanUp();
		}

		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);

		//config shader with mesh
		shader.reconfig({
			mesh: mesh,
			url: 'textures/disturb.jpg',
			scene: this.scene,
			camera: this.camera,
			renderer: this.renderer
		});

		shader.setUpCtr();

		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
	};

	/* ============================================
		Mesh
	   ============================================ */


	/* ============================================
		Shaders
	   ============================================ */
	APWGL.fn.update = function(){
		this.parent.update.apply(this,arguments);

		if (typeof this.last.shader.update === 'function'){
			this.last.shader.update();
		}

		meshControl.update();

	};



	// Public API here
	return APWGL;
});
