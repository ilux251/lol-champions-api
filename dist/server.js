/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst env = \"development\" || false;\nconst development = {\n  port: 8000,\n  apiURL: 'http://localhost:8000/api/',\n  dbConfig: {\n    instance: {\n      dbName: 'lol-champions',\n      dbPort: 8001,\n      dbPath: 'C:\\\\mongodb\\\\data',\n      storageEngine: 'mmapv1'\n    },\n    debug: true\n  }\n};\nconst production = {\n  port: 8000,\n  dbConfig: {\n    instance: {\n      dbName: 'lol-champions',\n      dbPort: 8001,\n      dbPath: 'C:\\\\mongodb\\\\data',\n      storageEngine: 'mmapv1'\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  development,\n  production\n}[env]);\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./controller/Champion.js":
/*!********************************!*\
  !*** ./controller/Champion.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Champion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Champion */ \"./model/Champion.js\");\n\n\nclass ChampionController {\n  getChampions() {\n    return _model_Champion__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).then(docs => {\n      return docs;\n    });\n  }\n\n  async createChampion(params) {\n    const champion = new _model_Champion__WEBPACK_IMPORTED_MODULE_0__[\"default\"](params);\n    await champion.save();\n    return {\n      message: 'Champion erfolgreich hinzugefügt'\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChampionController);\n\n//# sourceURL=webpack:///./controller/Champion.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongodb_memory_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb-memory-server */ \"mongodb-memory-server\");\n/* harmony import */ var mongodb_memory_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb_memory_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_Champions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/Champions */ \"./routes/Champions.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ \"./config.js\");\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst {\n  dbConfig,\n  port\n} = _config__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconsole.log(dbConfig);\nconst mongoServer = new mongodb_memory_server__WEBPACK_IMPORTED_MODULE_4__[\"MongoMemoryServer\"](dbConfig);\napp.set('view engine', 'ejs');\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: false\n}));\nmongoServer.getConnectionString().then(mongoUri => {\n  const mongooseOpts = {\n    autoReconnect: true,\n    reconnectTries: Number.MAX_VALUE,\n    reconnectInterval: 1000,\n    useNewUrlParser: true\n  };\n  mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(mongoUri, mongooseOpts, () => {\n    console.log(`MongoDB successfully connected to ${mongoUri}`);\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connection.on('error', e => {\n    if (e.message.code === 'ETIMEDOUT') {\n      console.log(e);\n      mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(mongoUri, mongooseOpts);\n    }\n\n    console.log(e);\n  });\n});\napp.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');\n  res.header('Access-Control-Allow-Headers', 'Content-Type');\n  next();\n});\napp.get('/', (req, res) => {\n  res.render('index');\n});\napp.use('/api/', _routes_Champions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.listen(port, () => {\n  console.log('app listen on PORT: ', port);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./model/Champion.js":
/*!***************************!*\
  !*** ./model/Champion.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ChampionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: String,\n  icon: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"champion\", ChampionSchema));\n\n//# sourceURL=webpack:///./model/Champion.js?");

/***/ }),

/***/ "./routes/Champions.js":
/*!*****************************!*\
  !*** ./routes/Champions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_Champion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/Champion */ \"./controller/Champion.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst controller = new _controller_Champion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get('/champions', (req, res) => {\n  controller.getChampions().then(result => {\n    res.send(result);\n  });\n});\nrouter.post('/champion', (req, res) => {\n  console.log(req);\n\n  if (req.body !== null || Object.keys(req.body).length === 0) {\n    res.status(301).send({\n      message: 'Data-Object ist leer'\n    });\n  }\n\n  controller.createChampion(req.body).then(result => {\n    res.status(200).send({\n      result\n    });\n  });\n});\nrouter.post('/champions', (req, res) => {\n  console.log(req);\n  const content = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(req.query);\n  console.log(content);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/Champions.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongodb-memory-server":
/*!****************************************!*\
  !*** external "mongodb-memory-server" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb-memory-server\");\n\n//# sourceURL=webpack:///external_%22mongodb-memory-server%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });