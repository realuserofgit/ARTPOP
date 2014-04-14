'use strict';
/* global THREE, Modernizr */
angular.module('artpopApp')
.factory('APWGLAPP', function (X3, shaderBank, meshBank, CustomControl, gifMaker) {
	// Service logic
	// ...

	function APWGLAPP(){
		X3.call(this);

		this.parent = X3.prototype;

		this.ctr = new CustomControl();

		this.last = {
			mesh: null,
			shader: null,
			shaderUpdater: null
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
	APWGLAPP.prototype = Object.create(X3.prototype);
	APWGLAPP.prototype.constructor = APWGLAPP;

	APWGLAPP.fn = APWGLAPP.prototype;

	/* ============================================
		init
	   ============================================ */
	APWGLAPP.fn.init = function(){
		this.parent.init.apply(this, arguments);

		this.addTask(this.setUpCtr);
		this.addTask(this.setUpScene);
		// //setup controller
		// this.setUpCtr();
		// //3d scene
		// this.setUpScene();
	};

	/* ============================================
		Directive
	   ============================================ */
	APWGLAPP.fn.reconfig = function($scope, $element, container){
		this.parent.reconfig.apply(this, arguments);

		//Gif
		gifMaker.switchTo(this);

		//Camera
		var controls = new THREE.TrackballControls( this.camera, container);
		this.controls = controls;

		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;

		this.minDistance = 50;
		this.maxDistance = 50;

		controls.noZoom = false;
		controls.noPan = true;

		controls.staticMoving = false;
		controls.dynamicDampingFactor = 0.2;

		controls.keys = [ 65, 83, 68 ];

		$scope.$on('$destroy', function(){
			controls._removeEventHandler();
			controls.camera = null;
			controls.domElement = null;
		});

	};

	APWGLAPP.fn.setUpScene = function(){
		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);

		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
		this.last.shaderUpdater = this.last.shader.prebind.update;

		shader.factors.wireframe = true;

		//config shader with mesh
		shader.reconfig({
			mesh: this.last.mesh,
			url: 'textures/disturb.jpg'
		});

		shader.material.wireframe = true;

		shader.setUpCtr();

		this.scene.add( this.last.mesh  );
	};


	/* ============================================
		GIF
	   ============================================ */
	APWGLAPP.fn.MakeGif = gifMaker.start.bind(gifMaker);

	/* ============================================
		Controllers
	   ============================================ */
	APWGLAPP.fn.setUpCtr = function(){
		this.ctr.addFolder('APWGL');
		this.ctr.folder.add(this.select.current, 'mesh', this.select.options.mesh).onChange(this.onChangeMesh.bind(this));
		this.ctr.folder.add(this.select.current, 'shader', this.select.options.shader).onChange(this.onChangeShader.bind(this));
		this.ctr.folder.add(this, 'MakeGif');

		this.ctr.folder.add(gifMaker.config, 'autoDownload').listen();
		if (!Modernizr.touch){
			this.ctr.folder.open();
		}else{
			gifMaker.config.autoDownload = true;
			gifMaker.config.displayGif = false;
		}
	};
	APWGLAPP.fn.cleanUpCtr = function(){
		this.ctr.removeAll();
	};

	/* ============================================
		Selects
	   ============================================ */
	APWGLAPP.fn.onChangeMesh = function(){
		if (this.last.mesh){
			//delete last item
			this.scene.remove( this.last.mesh );
		}

		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);

		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
		this.last.shaderUpdater = this.last.shader.prebind.update;

		//config shader with mesh
		shader.reconfig({
			mesh: mesh,
			url: 'textures/disturb.jpg'
		});

		this.scene.add( mesh );



	};
	APWGLAPP.fn.onChangeShader = function(){
		if (this.last.shader){
			this.last.shader.cleanUpCtr();
		}

		var mesh = meshBank.getLazy(this.select.current.mesh);
		var shader = shaderBank.getLazy(this.select.current.shader);

		//export
		this.last.mesh = mesh;
		this.last.shader = shader;
		this.last.shaderUpdater = this.last.shader.prebind.update;

		//config shader with mesh
		shader.reconfig({
			mesh: mesh,
			url: 'textures/disturb.jpg'
		});

		this.scene.add( mesh );

	};

	/* ============================================
		Mesh
	   ============================================ */


	/* ============================================
		Shaders
	   ============================================ */


	APWGLAPP.fn.update = function(){
		this.parent.update.apply(this,arguments);
		if (typeof this.last.shaderUpdater === 'function'){
			this.last.shaderUpdater();
		}
	};



	// Public API here
	return APWGLAPP;
});