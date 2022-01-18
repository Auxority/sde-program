/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst StartButton_1 = __importDefault(__webpack_require__(/*! ./custom-elements/StartButton */ \"./src/custom-elements/StartButton.ts\"));\nconst Resizer_1 = __importDefault(__webpack_require__(/*! ./utils/Resizer */ \"./src/utils/Resizer.ts\"));\nconst GameStates = __importStar(__webpack_require__(/*! ./game-states/GameStateExports */ \"./src/game-states/GameStateExports.ts\"));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ./utils/Vector */ \"./src/utils/Vector.ts\"));\nconst FrameLimiter_1 = __importDefault(__webpack_require__(/*! ./utils/FrameLimiter */ \"./src/utils/FrameLimiter.ts\"));\n// TODO: Apply Singleton design pattern to game\nclass Game {\n    static GRAVITY = new Vector_1.default(0, -0.2);\n    static game;\n    // elements\n    _startButton;\n    _state;\n    _canvas;\n    _ctx;\n    _resizer;\n    _frameLimit;\n    constructor(canvasId) {\n        this._canvas = document.getElementById(canvasId);\n        this._ctx = this._canvas.getContext(\"2d\");\n        this._resizer = new Resizer_1.default(this._canvas);\n        this._startButton = new StartButton_1.default(this);\n        this._frameLimit = new FrameLimiter_1.default();\n        this._state = new GameStates.Starting(this._ctx);\n        requestAnimationFrame(this.loop);\n    }\n    static createGame(canvasId) {\n        if (!this.game) {\n            this.game = new Game(canvasId);\n        }\n        return this.game;\n    }\n    /**\n     * When the \"start\" button of the game is pressed, to start the game\n     */\n    start() {\n        this._resizer.enableAutoResize();\n        this._state = new GameStates.Running(this._ctx);\n    }\n    /**\n     * When a pipe is hit within the game\n     * @param endScore the score gathered over time\n     */\n    end(endScore) {\n        this._state = new GameStates.Ending(this._ctx, endScore);\n    }\n    /**\n     * Main game loop\n     */\n    loop = () => {\n        this.clear();\n        this.processInput();\n        if (this._frameLimit.withinLimit()) {\n            this.update();\n        }\n        this.render();\n        requestAnimationFrame(this.loop);\n    };\n    /**\n     * Call the input processor in the current state\n     */\n    processInput() {\n        this._state.processInput();\n    }\n    /**\n     * Call the updater in current state\n     */\n    update() {\n        this._state.update(this);\n    }\n    /**\n     * Call the renderer in current state\n     */\n    render() {\n        this._state.render();\n    }\n    /**\n     * Clear the canvas\n     */\n    clear() {\n        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);\n    }\n}\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://sde-program/./src/Game.ts?");

/***/ }),

/***/ "./src/custom-elements/StartButton.ts":
/*!********************************************!*\
  !*** ./src/custom-elements/StartButton.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Resizer_1 = __importDefault(__webpack_require__(/*! ../utils/Resizer */ \"./src/utils/Resizer.ts\"));\nclass StartButton {\n    _currentGame;\n    _button;\n    /**\n     * Create the start button\n     * @param currentGame The game itself for starting on press\n     */\n    constructor(currentGame) {\n        this._currentGame = currentGame;\n        this._button = document.createElement(\"button\");\n        this._button.innerText = \"START\";\n        this._button.id = \"start-button\";\n        this._button.style.width = `${Resizer_1.default.INITIAL_CANVAS_SIZE + 3}px`;\n        this._button.style.height = `${Resizer_1.default.INITIAL_CANVAS_SIZE * 0.2}px`;\n        document.body.appendChild(this._button);\n        this.addStartButtonEvent();\n    }\n    /**\n     * add event listener to start the game on click\n     * @param startButton HTML button\n     */\n    addStartButtonEvent() {\n        this._button.addEventListener(\"click\", () => this.onStartButtonClicked());\n    }\n    /**\n     * Start the game and remove the button\n     * @param startButton HTML button\n     */\n    onStartButtonClicked() {\n        this._currentGame.start();\n        this._button.remove();\n    }\n}\nexports[\"default\"] = StartButton;\n\n\n//# sourceURL=webpack://sde-program/./src/custom-elements/StartButton.ts?");

/***/ }),

/***/ "./src/enums/KeyCodes.ts":
/*!*******************************!*\
  !*** ./src/enums/KeyCodes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.KeyCodes = void 0;\nvar KeyCodes;\n(function (KeyCodes) {\n    KeyCodes[\"A\"] = \"KeyA\";\n    KeyCodes[\"B\"] = \"KeyB\";\n    KeyCodes[\"C\"] = \"KeyC\";\n    KeyCodes[\"D\"] = \"KeyD\";\n    KeyCodes[\"E\"] = \"KeyE\";\n    KeyCodes[\"F\"] = \"KeyF\";\n    KeyCodes[\"G\"] = \"KeyG\";\n    KeyCodes[\"H\"] = \"KeyH\";\n    KeyCodes[\"I\"] = \"KeyI\";\n    KeyCodes[\"J\"] = \"KeyJ\";\n    KeyCodes[\"K\"] = \"KeyK\";\n    KeyCodes[\"L\"] = \"KeyL\";\n    KeyCodes[\"M\"] = \"KeyM\";\n    KeyCodes[\"N\"] = \"KeyN\";\n    KeyCodes[\"O\"] = \"KeyO\";\n    KeyCodes[\"P\"] = \"KeyP\";\n    KeyCodes[\"Q\"] = \"KeyQ\";\n    KeyCodes[\"R\"] = \"KeyR\";\n    KeyCodes[\"S\"] = \"KeyS\";\n    KeyCodes[\"T\"] = \"KeyT\";\n    KeyCodes[\"U\"] = \"KeyU\";\n    KeyCodes[\"V\"] = \"KeyV\";\n    KeyCodes[\"W\"] = \"KeyW\";\n    KeyCodes[\"X\"] = \"KeyX\";\n    KeyCodes[\"Y\"] = \"KeyY\";\n    KeyCodes[\"Z\"] = \"KeyZ\";\n    KeyCodes[\"One\"] = \"Digit1\";\n    KeyCodes[\"Two\"] = \"Digit2\";\n    KeyCodes[\"Three\"] = \"Digit3\";\n    KeyCodes[\"Four\"] = \"Digit4\";\n    KeyCodes[\"Five\"] = \"Digit5\";\n    KeyCodes[\"Six\"] = \"Digit6\";\n    KeyCodes[\"Seven\"] = \"Digit7\";\n    KeyCodes[\"Eight\"] = \"Digit8\";\n    KeyCodes[\"Nine\"] = \"Digit9\";\n    KeyCodes[\"Zero\"] = \"Digit0\";\n    KeyCodes[\"Space\"] = \"Space\";\n    KeyCodes[\"ShiftLeft\"] = \"ShiftLeft\";\n    KeyCodes[\"ShiftRight\"] = \"ShiftRight\";\n    KeyCodes[\"ControlLeft\"] = \"ControlLeft\";\n    KeyCodes[\"ControlRight\"] = \"ControlRight\";\n    KeyCodes[\"AltLeft\"] = \"AltLeft\";\n    KeyCodes[\"AltRight\"] = \"AltRight\";\n    KeyCodes[\"ArrowUp\"] = \"ArrowUp\";\n    KeyCodes[\"ArrowRight\"] = \"ArrowRight\";\n    KeyCodes[\"ArrowLeft\"] = \"ArrowLeft\";\n    KeyCodes[\"ArrowDown\"] = \"ArrowDown\";\n})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));\n\n\n//# sourceURL=webpack://sde-program/./src/enums/KeyCodes.ts?");

/***/ }),

/***/ "./src/game-elements/Background.ts":
/*!*****************************************!*\
  !*** ./src/game-elements/Background.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst Backgrounds_1 = __importDefault(__webpack_require__(/*! ./backgrounds/Backgrounds */ \"./src/game-elements/backgrounds/Backgrounds.ts\"));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ \"./src/game-elements/GameObject.ts\"));\nclass Background extends GameObject_1.default {\n    static BACKGROUND_SPEED = 1.25;\n    _scrollingPictures;\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._scrollingPictures = [];\n        for (let i = 0; i < 2; i++) {\n            this.createNewBackground();\n        }\n    }\n    render() {\n        this._scrollingPictures.forEach(background => {\n            background.render();\n        });\n    }\n    update() {\n        this._scrollingPictures.forEach(background => {\n            background.update();\n        });\n        const currentBackground = this._scrollingPictures[0];\n        if (currentBackground.onScreen()) {\n            this.createNewBackground();\n        }\n        if (currentBackground.offScreen()) {\n            this._scrollingPictures.shift();\n        }\n    }\n    /**\n     * Add new backgrounds\n     */\n    createNewBackground() {\n        const backgroundPosition = new Vector_1.default(\n        // use beginning position for first background, otherwise add to the back\n        this._scrollingPictures.length === 0 ? 0 : this.ctx.canvas.width * 1.9, 0);\n        const newPipe = new Backgrounds_1.default(this.ctx, backgroundPosition);\n        this._scrollingPictures.push(newPipe);\n    }\n}\nexports[\"default\"] = Background;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/Background.ts?");

/***/ }),

/***/ "./src/game-elements/Birb.ts":
/*!***********************************!*\
  !*** ./src/game-elements/Birb.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ \"./src/game-elements/GameObject.ts\"));\nconst BirbStateExports_1 = __webpack_require__(/*! ./birb_states/BirbStateExports */ \"./src/game-elements/birb_states/BirbStateExports.ts\");\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst Keyboard_1 = __importDefault(__webpack_require__(/*! ../input/Keyboard */ \"./src/input/Keyboard.ts\"));\nconst KeyCodes_1 = __webpack_require__(/*! ../enums/KeyCodes */ \"./src/enums/KeyCodes.ts\");\nconst Game_1 = __importDefault(__webpack_require__(/*! ../Game */ \"./src/Game.ts\"));\nclass Birb extends GameObject_1.default {\n    static STATE_IMAGE_DIR = \"./assets/images/birb_assets\";\n    static IMAGE_SIZE = new Vector_1.default(22, 32);\n    MAX_SPEED = 20;\n    JUMP_FORCE = 6;\n    _keyboard;\n    _state;\n    _jumpPressed;\n    _jumpExecuted;\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._state = new BirbStateExports_1.IdleState();\n        this._keyboard = new Keyboard_1.default();\n        this._jumpPressed = true;\n        this._jumpExecuted = false;\n    }\n    processInput() {\n        if (this._keyboard.isKeyDown(KeyCodes_1.KeyCodes.Space)) {\n            this._jumpPressed = true;\n        }\n        else {\n            this._jumpPressed = false;\n            this._jumpExecuted = false;\n        }\n    }\n    update() {\n        this.applyPhysics();\n        this.changeState();\n    }\n    render() {\n        this._state.render(this.ctx, this.position);\n    }\n    get size() {\n        return new Vector_1.default(this._state.getImage().width, this._state.getImage().height);\n    }\n    getYPosition() {\n        return this.position.y;\n    }\n    applyPhysics() {\n        if (this._jumpPressed && !this._jumpExecuted) {\n            this._jumpExecuted = true;\n            this.acceleration.sub(new Vector_1.default(0, this.JUMP_FORCE));\n        }\n        this.acceleration.sub(Game_1.default.GRAVITY);\n        this.velocity.add(this.acceleration).limitY(-this.MAX_SPEED, this.MAX_SPEED);\n        this.position.add(this.velocity).limitY(-this.size.y * 0.5, this.ctx.canvas.height - this.size.y * 0.5);\n        this.acceleration.mul(0);\n    }\n    changeState() {\n        if (this.velocity.y > 0) {\n            this._state = new BirbStateExports_1.IdleState();\n        }\n        else {\n            this._state = new BirbStateExports_1.FlyState();\n        }\n    }\n}\nexports[\"default\"] = Birb;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/Birb.ts?");

/***/ }),

/***/ "./src/game-elements/GameObject.ts":
/*!*****************************************!*\
  !*** ./src/game-elements/GameObject.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nclass GameObject {\n    _ctx;\n    _position;\n    _velocity;\n    _acceleration;\n    constructor(ctx, position) {\n        this._ctx = ctx;\n        this._position = position;\n        this._velocity = new Vector_1.default(0, 0);\n        this._acceleration = new Vector_1.default(0, 0);\n    }\n    /**\n     * Run this on every new frame.\n     */\n    update() {\n        this._velocity.add(this._acceleration);\n        this._position.add(this._velocity);\n        this._acceleration.mul(0);\n    }\n    get ctx() {\n        return this._ctx;\n    }\n    get position() {\n        return this._position;\n    }\n    get velocity() {\n        return this._velocity;\n    }\n    get acceleration() {\n        return this._acceleration;\n    }\n}\nexports[\"default\"] = GameObject;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/GameObject.ts?");

/***/ }),

/***/ "./src/game-elements/GameObjectExports.ts":
/*!************************************************!*\
  !*** ./src/game-elements/GameObjectExports.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Background = exports.Scoreboard = exports.StartingBirb = exports.Pipe = exports.Birb = void 0;\nconst Background_1 = __importDefault(__webpack_require__(/*! ./Background */ \"./src/game-elements/Background.ts\"));\nexports.Background = Background_1.default;\nconst Birb_1 = __importDefault(__webpack_require__(/*! ./Birb */ \"./src/game-elements/Birb.ts\"));\nexports.Birb = Birb_1.default;\nconst Pipe_1 = __importDefault(__webpack_require__(/*! ./Pipe */ \"./src/game-elements/Pipe.ts\"));\nexports.Pipe = Pipe_1.default;\nconst StartingBirb_1 = __importDefault(__webpack_require__(/*! ./StartingBirb */ \"./src/game-elements/StartingBirb.ts\"));\nexports.StartingBirb = StartingBirb_1.default;\nconst Scoreboard_1 = __importDefault(__webpack_require__(/*! ./Scoreboard */ \"./src/game-elements/Scoreboard.ts\"));\nexports.Scoreboard = Scoreboard_1.default;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/GameObjectExports.ts?");

/***/ }),

/***/ "./src/game-elements/Pipe.ts":
/*!***********************************!*\
  !*** ./src/game-elements/Pipe.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ \"./src/game-elements/GameObject.ts\"));\nconst GameObjects = __importStar(__webpack_require__(/*! ./GameObjectExports */ \"./src/game-elements/GameObjectExports.ts\"));\nconst Pipes_1 = __importDefault(__webpack_require__(/*! ./pipes/Pipes */ \"./src/game-elements/pipes/Pipes.ts\"));\nclass Pipe extends GameObject_1.default {\n    _pipes;\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._pipes = [];\n        for (let i = 0; i < 10; i++) {\n            this.createNewPipe();\n        }\n    }\n    update() {\n        this._pipes.forEach((pipe) => this.updatePipe(pipe));\n    }\n    render() {\n        this._pipes.forEach((pipe) => pipe.render());\n    }\n    /**\n     * check if the player hit the pipe closest\n     * @param yPositionTop top position of player\n     * @param yPositionBottom bottom position of player\n     * @returns bool true if hit\n     */\n    hasHitPipe(yPositionTop, yPositionBottom) {\n        return this._pipes[0].hasHitPipe(yPositionTop, yPositionBottom);\n    }\n    /**\n     * Run update function for each pipe\n     * @param pipe current pipe\n     */\n    updatePipe(pipe) {\n        pipe.update();\n        if (pipe.isGone()) {\n            const scoreboard = GameObjects.Scoreboard.getScoreboard(this.ctx);\n            scoreboard.increase();\n            this.removeOldestPipe();\n            this.createNewPipe();\n        }\n    }\n    /**\n     * Remove oldest pipe from the list\n     */\n    removeOldestPipe() {\n        this._pipes.shift();\n    }\n    /**\n     * Replace the current pipe for a new one at the back of the line\n     */\n    createNewPipe() {\n        const pipePosition = new Vector_1.default(this._pipes.length > 0 ? this._pipes[this._pipes.length - 1].getXPosition() + 200 : this.ctx.canvas.width, (0.3 + Math.random() * 0.5) * this.ctx.canvas.height);\n        const newPipe = new Pipes_1.default(this.ctx, pipePosition);\n        this._pipes.push(newPipe);\n    }\n}\nexports[\"default\"] = Pipe;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/Pipe.ts?");

/***/ }),

/***/ "./src/game-elements/Scoreboard.ts":
/*!*****************************************!*\
  !*** ./src/game-elements/Scoreboard.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ \"./src/game-elements/GameObject.ts\"));\nclass Scoreboard extends GameObject_1.default {\n    static _scoreboard;\n    _score;\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._score = 0;\n    }\n    static getScoreboard(ctx) {\n        if (!this._scoreboard) {\n            const position = new Vector_1.default(ctx.canvas.width * 0.5, ctx.canvas.height * 0.05);\n            this._scoreboard = new Scoreboard(ctx, position);\n        }\n        return this._scoreboard;\n    }\n    get score() {\n        return this._score;\n    }\n    reset() {\n        this._score = 0;\n    }\n    increase() {\n        this._score++;\n    }\n    render() {\n        this.ctx.save();\n        this.ctx.font = \"48px Mario\";\n        this.ctx.fillStyle = \"#ffffff\";\n        this.ctx.strokeStyle = \"#000000\";\n        this.ctx.fillText(`${this._score}`, this.position.x, this.position.y);\n        this.ctx.strokeText(`${this._score}`, this.position.x, this.position.y);\n        this.ctx.restore();\n    }\n}\nexports[\"default\"] = Scoreboard;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/Scoreboard.ts?");

/***/ }),

/***/ "./src/game-elements/StartingBirb.ts":
/*!*******************************************!*\
  !*** ./src/game-elements/StartingBirb.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ \"./src/game-elements/GameObject.ts\"));\nclass StartingBirb extends GameObject_1.default {\n    _image = new Image();\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._image.src = './assets/favicon.svg';\n    }\n    update() {\n        throw new Error(\"Method not implemented.\");\n    }\n    render() {\n        this.ctx.drawImage(this._image, this.position.x, this.position.y, 200, 200);\n    }\n}\nexports[\"default\"] = StartingBirb;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/StartingBirb.ts?");

/***/ }),

/***/ "./src/game-elements/backgrounds/Backgrounds.ts":
/*!******************************************************!*\
  !*** ./src/game-elements/backgrounds/Backgrounds.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst Background_1 = __importDefault(__webpack_require__(/*! ../Background */ \"./src/game-elements/Background.ts\"));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ../GameObject */ \"./src/game-elements/GameObject.ts\"));\nclass Backgrounds extends GameObject_1.default {\n    static CURRENT_IMG = \"./assets/images/backgrounds/1.png\";\n    _image = new Image();\n    _sendOnScreen = false;\n    constructor(ctx, position) {\n        super(ctx, position);\n        this._image.src = Backgrounds.CURRENT_IMG;\n        this.velocity.sub(new Vector_1.default(Background_1.default.BACKGROUND_SPEED, 0));\n    }\n    render() {\n        this.ctx.drawImage(this._image, this.position.x, this.position.y, this.ctx.canvas.width * 2, this.ctx.canvas.height);\n    }\n    /**\n     * check if the background appears on screen\n     * @returns bool if true\n     */\n    onScreen() {\n        if ((this.position.x + this.ctx.canvas.width) < 0 && !this._sendOnScreen) {\n            this._sendOnScreen = true;\n            return true;\n        }\n        return false;\n    }\n    /**\n     * Check if the background is no longer visable\n     * @returns bool if true\n     */\n    offScreen() {\n        return (this.position.x + this.ctx.canvas.width * 2) < 0;\n    }\n}\nexports[\"default\"] = Backgrounds;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/backgrounds/Backgrounds.ts?");

/***/ }),

/***/ "./src/game-elements/birb_states/BirbStateExports.ts":
/*!***********************************************************!*\
  !*** ./src/game-elements/birb_states/BirbStateExports.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DeadState = exports.FlyState = exports.IdleState = void 0;\nconst DeadBirbState_1 = __importDefault(__webpack_require__(/*! ./DeadBirbState */ \"./src/game-elements/birb_states/DeadBirbState.ts\"));\nexports.DeadState = DeadBirbState_1.default;\nconst FlyBirbState_1 = __importDefault(__webpack_require__(/*! ./FlyBirbState */ \"./src/game-elements/birb_states/FlyBirbState.ts\"));\nexports.FlyState = FlyBirbState_1.default;\nconst IdleBirbState_1 = __importDefault(__webpack_require__(/*! ./IdleBirbState */ \"./src/game-elements/birb_states/IdleBirbState.ts\"));\nexports.IdleState = IdleBirbState_1.default;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/birb_states/BirbStateExports.ts?");

/***/ }),

/***/ "./src/game-elements/birb_states/DeadBirbState.ts":
/*!********************************************************!*\
  !*** ./src/game-elements/birb_states/DeadBirbState.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Functions_1 = __importDefault(__webpack_require__(/*! ../../utils/Functions */ \"./src/utils/Functions.ts\"));\nconst Birb_1 = __importDefault(__webpack_require__(/*! ../Birb */ \"./src/game-elements/Birb.ts\"));\nclass DeadState {\n    _image = new Image();\n    constructor() {\n        this._image = Functions_1.default.createImage(this.getImageSource());\n    }\n    render(ctx, position) {\n        // Empty filler\n        ctx.drawImage(this._image, position.x, position.y);\n    }\n    getImage() {\n        return this._image;\n    }\n    getImageSource() {\n        return `${Birb_1.default.STATE_IMAGE_DIR}/dead.png`;\n    }\n}\nexports[\"default\"] = DeadState;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/birb_states/DeadBirbState.ts?");

/***/ }),

/***/ "./src/game-elements/birb_states/FlyBirbState.ts":
/*!*******************************************************!*\
  !*** ./src/game-elements/birb_states/FlyBirbState.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Functions_1 = __importDefault(__webpack_require__(/*! ../../utils/Functions */ \"./src/utils/Functions.ts\"));\nconst Birb_1 = __importDefault(__webpack_require__(/*! ../Birb */ \"./src/game-elements/Birb.ts\"));\nclass FlyState {\n    _image = new Image();\n    constructor() {\n        this._image = Functions_1.default.createImage(this.getImageSource());\n    }\n    render(ctx, position) {\n        // Empty filler\n        ctx.drawImage(this._image, position.x, position.y);\n    }\n    getImage() {\n        return this._image;\n    }\n    getImageSource() {\n        return `${Birb_1.default.STATE_IMAGE_DIR}/fly.png`;\n    }\n}\nexports[\"default\"] = FlyState;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/birb_states/FlyBirbState.ts?");

/***/ }),

/***/ "./src/game-elements/birb_states/IdleBirbState.ts":
/*!********************************************************!*\
  !*** ./src/game-elements/birb_states/IdleBirbState.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Functions_1 = __importDefault(__webpack_require__(/*! ../../utils/Functions */ \"./src/utils/Functions.ts\"));\nconst Birb_1 = __importDefault(__webpack_require__(/*! ../Birb */ \"./src/game-elements/Birb.ts\"));\nclass IdleState {\n    _image = new Image();\n    constructor() {\n        this._image = Functions_1.default.createImage(this.getImageSource());\n    }\n    render(ctx, position) {\n        // Empty filler\n        ctx.drawImage(this._image, position.x, position.y);\n    }\n    getImage() {\n        return this._image;\n    }\n    getImageSource() {\n        return `${Birb_1.default.STATE_IMAGE_DIR}/idle.png`;\n    }\n}\nexports[\"default\"] = IdleState;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/birb_states/IdleBirbState.ts?");

/***/ }),

/***/ "./src/game-elements/pipes/Pipes.ts":
/*!******************************************!*\
  !*** ./src/game-elements/pipes/Pipes.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Functions_1 = __importDefault(__webpack_require__(/*! ../../utils/Functions */ \"./src/utils/Functions.ts\"));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../../utils/Vector */ \"./src/utils/Vector.ts\"));\nconst Birb_1 = __importDefault(__webpack_require__(/*! ../Birb */ \"./src/game-elements/Birb.ts\"));\nconst GameObject_1 = __importDefault(__webpack_require__(/*! ../GameObject */ \"./src/game-elements/GameObject.ts\"));\nclass Pipes extends GameObject_1.default {\n    static IMAGE_SIZE = new Vector_1.default(32, 48);\n    static EXT_IMAGE_SIZE = new Vector_1.default(30, 32);\n    static PIPE_SPEED = 2.5;\n    static PIPE_GAP = 150;\n    _image = new Image();\n    _extendedImage = new Image();\n    // TODO: Pipe factory design pattern?\n    constructor(ctx, position) {\n        super(ctx, position);\n        this.velocity.sub(new Vector_1.default(Pipes.PIPE_SPEED, 0));\n        this.setRandomPipeImage();\n    }\n    render() {\n        this.drawBottomPipe();\n        this.drawTopPipe();\n    }\n    getXPosition() {\n        return this.position.x;\n    }\n    /**\n     * Check if its already of the screen on the left\n     * @returns boolean if true\n     */\n    isGone() {\n        return this.position.x < 0 - Pipes.IMAGE_SIZE.x;\n    }\n    /**\n     * check if player hit the pipe, X position is static\n     * @param yPositionTop top position of player\n     * @param yPositionBottom bottom position of player\n     * @returns bool true if hit\n     */\n    hasHitPipe(yPositionTop, yPositionBottom) {\n        // check X axes of pipe with static player X axes\n        if (0.1 * this.ctx.canvas.width + Birb_1.default.IMAGE_SIZE.x > this.position.x && 0.1 * this.ctx.canvas.width < this.position.x + Pipes.IMAGE_SIZE.x) {\n            const topPipePosition = this.position.y - Pipes.PIPE_GAP;\n            return !(topPipePosition < yPositionTop && this.position.y > yPositionBottom);\n        }\n        return false;\n    }\n    /**\n     * Draw the bottom pipe\n     */\n    drawBottomPipe() {\n        this.ctx.drawImage(this._image, this.position.x, this.position.y);\n        this.ctx.drawImage(this._extendedImage, this.position.x + 1, this.position.y + Pipes.IMAGE_SIZE.y, Pipes.EXT_IMAGE_SIZE.x, this.ctx.canvas.height);\n    }\n    /**\n     * Draw the top pipe\n     */\n    drawTopPipe() {\n        const positionY = this.ctx.canvas.height - this.position.y + Pipes.PIPE_GAP;\n        this.ctx.save();\n        this.ctx.translate(0, this.ctx.canvas.height);\n        this.ctx.scale(1, -1);\n        this.ctx.drawImage(this._image, this.position.x, positionY);\n        this.ctx.drawImage(this._extendedImage, this.position.x + 1, positionY + Pipes.IMAGE_SIZE.y, Pipes.EXT_IMAGE_SIZE.x, this.ctx.canvas.height);\n        this.ctx.restore();\n    }\n    /**\n     * Get a random pipe color\n     */\n    setRandomPipeImage() {\n        const imageNumber = Math.round(Functions_1.default.getRandomArbitrary(1, 7));\n        this._image.src = `./assets/images/pipes/${imageNumber}.png`;\n        this._extendedImage.src = `./assets/images/extend_pipes/${imageNumber}.png`;\n    }\n}\nexports[\"default\"] = Pipes;\n\n\n//# sourceURL=webpack://sde-program/./src/game-elements/pipes/Pipes.ts?");

/***/ }),

/***/ "./src/game-states/Ending.ts":
/*!***********************************!*\
  !*** ./src/game-states/Ending.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameObjects = __importStar(__webpack_require__(/*! ../game-elements/GameObjectExports */ \"./src/game-elements/GameObjectExports.ts\"));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nclass Ending {\n    _ctx;\n    _endScore;\n    _background;\n    constructor(ctx, endScore) {\n        this._ctx = ctx;\n        this._endScore = endScore;\n        this._background = new GameObjects.Background(ctx, new Vector_1.default(0, 0));\n    }\n    processInput() {\n        // empty\n    }\n    update(currentGame) {\n        // empty\n    }\n    render() {\n        this._background.render();\n        this.renderText();\n    }\n    ;\n    renderText() {\n        this._ctx.save();\n        this._ctx.font = \"48px Mario\";\n        this._ctx.fillStyle = \"#ffffff\";\n        this._ctx.strokeStyle = \"#000000\";\n        const textString = `Highscore: ${this._endScore}`;\n        const textWidth = this._ctx.measureText(textString).width;\n        const renderInMiddle = (this._ctx.canvas.width / 2) - (textWidth / 2);\n        this._ctx.fillText(textString, renderInMiddle, this._ctx.canvas.height / 2);\n        this._ctx.strokeText(textString, renderInMiddle, this._ctx.canvas.height / 2);\n        this._ctx.restore();\n    }\n}\nexports[\"default\"] = Ending;\n\n\n//# sourceURL=webpack://sde-program/./src/game-states/Ending.ts?");

/***/ }),

/***/ "./src/game-states/GameStateExports.ts":
/*!*********************************************!*\
  !*** ./src/game-states/GameStateExports.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Ending = exports.Running = exports.Starting = void 0;\nconst Starting_1 = __importDefault(__webpack_require__(/*! ./Starting */ \"./src/game-states/Starting.ts\"));\nexports.Starting = Starting_1.default;\nconst Running_1 = __importDefault(__webpack_require__(/*! ./Running */ \"./src/game-states/Running.ts\"));\nexports.Running = Running_1.default;\nconst Ending_1 = __importDefault(__webpack_require__(/*! ./Ending */ \"./src/game-states/Ending.ts\"));\nexports.Ending = Ending_1.default;\n\n\n//# sourceURL=webpack://sde-program/./src/game-states/GameStateExports.ts?");

/***/ }),

/***/ "./src/game-states/Running.ts":
/*!************************************!*\
  !*** ./src/game-states/Running.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameObjects = __importStar(__webpack_require__(/*! ../game-elements/GameObjectExports */ \"./src/game-elements/GameObjectExports.ts\"));\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nclass Running {\n    _ctx;\n    _background;\n    _player;\n    _pipes;\n    _scoreboard;\n    constructor(ctx) {\n        this._ctx = ctx;\n        this._background = new GameObjects.Background(ctx, new Vector_1.default(0, 0));\n        this._player = new GameObjects.Birb(ctx, new Vector_1.default(0.1 * ctx.canvas.width, 0.5 * ctx.canvas.height));\n        this._pipes = new GameObjects.Pipe(ctx, new Vector_1.default(0, 0));\n        this._scoreboard = GameObjects.Scoreboard.getScoreboard(ctx);\n    }\n    processInput() {\n        this._player.processInput();\n    }\n    update(currentGame) {\n        this._player.update();\n        this._background.update();\n        this._pipes.update();\n        this.checkHitDetection(currentGame);\n        this._scoreboard.update();\n    }\n    render() {\n        this._background.render();\n        this._player.render();\n        this._pipes.render();\n        this._scoreboard.render();\n    }\n    /**\n     * check if the player hit the pipe\n     */\n    checkHitDetection(currentGame) {\n        const playerPosition = this._player.getYPosition();\n        if (this._pipes.hasHitPipe(playerPosition, this._player.size.y + playerPosition)) {\n            currentGame.end(this._scoreboard.score);\n        }\n    }\n}\nexports[\"default\"] = Running;\n\n\n//# sourceURL=webpack://sde-program/./src/game-states/Running.ts?");

/***/ }),

/***/ "./src/game-states/Starting.ts":
/*!*************************************!*\
  !*** ./src/game-states/Starting.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst GameObjectExports_1 = __webpack_require__(/*! ../game-elements/GameObjectExports */ \"./src/game-elements/GameObjectExports.ts\");\nconst Vector_1 = __importDefault(__webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\"));\nclass Starting {\n    _startingBirb;\n    constructor(ctx) {\n        this._startingBirb = new GameObjectExports_1.StartingBirb(ctx, new Vector_1.default(0, -8));\n    }\n    processInput() {\n        // empty\n    }\n    update(currentGame) {\n        // empty\n    }\n    render() {\n        // Fill the void\n        // console.log(\"Render a starting game.\");\n        this._startingBirb.render();\n    }\n    ;\n}\nexports[\"default\"] = Starting;\n\n\n//# sourceURL=webpack://sde-program/./src/game-states/Starting.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Game_1 = __importDefault(__webpack_require__(/*! ./Game */ \"./src/Game.ts\"));\nwindow.addEventListener(\"load\", () => {\n    const game = Game_1.default.createGame(\"game-canvas\");\n});\n\n\n//# sourceURL=webpack://sde-program/./src/index.ts?");

/***/ }),

/***/ "./src/input/Keyboard.ts":
/*!*******************************!*\
  !*** ./src/input/Keyboard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Keyboard {\n    keyStates;\n    /**\n     * Creates the event listener for the keyboard function.\n     */\n    constructor() {\n        this.keyStates = new Map();\n        window.addEventListener(\"keydown\", this.keyDown);\n        window.addEventListener(\"keyup\", this.keyUp);\n    }\n    /**\n     * Method that checks if a key is currently pressed.\n     * @Param key key codes\n     */\n    isKeyDown(key) {\n        return this.keyStates.get(key) !== undefined;\n    }\n    /**\n     * Handles the keydown event and modifies the current keystates.\n     * @param ev keyboard event\n     */\n    keyDown = (ev) => {\n        if (ev.defaultPrevented) {\n            return;\n        }\n        this.keyStates.set(ev.code, true);\n    };\n    /**\n     * Handles the keyup event and modifies the current keystates.\n     * @param ev keyboard event\n     */\n    keyUp = (ev) => {\n        if (ev.defaultPrevented) {\n            return;\n        }\n        this.keyStates.delete(ev.code);\n    };\n}\nexports[\"default\"] = Keyboard;\n\n\n//# sourceURL=webpack://sde-program/./src/input/Keyboard.ts?");

/***/ }),

/***/ "./src/utils/FrameLimiter.ts":
/*!***********************************!*\
  !*** ./src/utils/FrameLimiter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass FrameLimiter {\n    static FPS = 60;\n    _now = 0;\n    _then = Date.now();\n    _interval = 1000 / FrameLimiter.FPS;\n    _delta = 0;\n    withinLimit() {\n        this._now = Date.now();\n        this._delta = this._now - this._then;\n        if (this._delta > this._interval) {\n            this._then = this._now - (this._delta % this._interval);\n            return true;\n        }\n        return false;\n    }\n}\nexports[\"default\"] = FrameLimiter;\n\n\n//# sourceURL=webpack://sde-program/./src/utils/FrameLimiter.ts?");

/***/ }),

/***/ "./src/utils/Functions.ts":
/*!********************************!*\
  !*** ./src/utils/Functions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Functions {\n    /**\n     * Get a random number between in between\n     * @param min Minimum value\n     * @param max Maximum value\n     * @returns Number in between\n     */\n    static getRandomArbitrary(min, max) {\n        return min + Math.random() * (max - min);\n    }\n    /**\n     * Creates an html image element with the given source.\n     * @param src The source of the image.\n     * @returns HTML Image element\n     */\n    static createImage(src) {\n        const image = new Image();\n        image.src = src;\n        return image;\n    }\n    static getRandomEnum(enumName) {\n        const enumValues = Object.values(enumName);\n        const randomIndex = Math.floor(Math.random() * enumValues.length);\n        return enumValues[randomIndex];\n    }\n}\nexports[\"default\"] = Functions;\n\n\n//# sourceURL=webpack://sde-program/./src/utils/Functions.ts?");

/***/ }),

/***/ "./src/utils/Resizer.ts":
/*!******************************!*\
  !*** ./src/utils/Resizer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Resizer {\n    static INITIAL_CANVAS_SIZE = 200;\n    _canvas;\n    _autoResize;\n    /**\n     * Initialize resizer\n     * @param canvas HTML Canvas to resize\n     */\n    constructor(canvas) {\n        this._canvas = canvas;\n        this._canvas.width = Resizer.INITIAL_CANVAS_SIZE;\n        this._canvas.height = Resizer.INITIAL_CANVAS_SIZE;\n        this._autoResize = false;\n        window.addEventListener('resize', () => this.onResize());\n        this.onResize();\n    }\n    /**\n     * Start resizing the canvas\n     */\n    enableAutoResize() {\n        this._autoResize = true;\n        this.onResize();\n    }\n    /**\n     * Set the browser to fullscreen\n     */\n    enableFullscreen() {\n        this._canvas.requestFullscreen();\n    }\n    /**\n     * Makes sure that the window always has a 1:1 ratio.\n     * And adjusts itself when the user resizes their browser.\n     */\n    onResize() {\n        if (this._autoResize) {\n            const smallestSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;\n            this._canvas.width = smallestSize;\n            this._canvas.height = smallestSize;\n        }\n    }\n}\nexports[\"default\"] = Resizer;\n\n\n//# sourceURL=webpack://sde-program/./src/utils/Resizer.ts?");

/***/ }),

/***/ "./src/utils/Vector.ts":
/*!*****************************!*\
  !*** ./src/utils/Vector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector {\n    _x;\n    _y;\n    static DIV_ZERO_WARNING = \"Cannot divide by zero.\";\n    /**\n     * Creates a new vector.\n     * @param x x-component of the vector.\n     * @param y y-component of the vector.\n     */\n    constructor(x = 0, y = 0) {\n        this._x = x;\n        this._y = y;\n    }\n    /**\n     * Creates a new vector from an angle.\n     * @param theta The angle of the vector in radians.\n     * @param magnitude The length of the vector.\n     */\n    static fromAngle(theta, magnitude = 1) {\n        return new Vector(Math.cos(theta) * magnitude, Math.sin(theta) * magnitude);\n    }\n    /**\n     * Creates a new random vector.\n     */\n    static random() {\n        return Vector.fromAngle(Math.random(), 1);\n    }\n    /**\n     * Copies the vector.\n     */\n    copy() {\n        return new Vector(this._x, this._y);\n    }\n    /**\n     * Sets the vector components directly.\n     * @param x x-component of the vector.\n     * @param y y-component of the vector.\n     */\n    set(x, y) {\n        this._x = x;\n        this._y = y;\n        return this;\n    }\n    /**\n     * Calculates the angle of the vector.\n     */\n    get angle() {\n        return Math.atan2(this._y, this._x);\n    }\n    /**\n     * Sets the x- and y-component of the vector based on the angle.\n     */\n    set angle(radians) {\n        const radius = this.magnitude;\n        this._x = radius * Math.cos(radians);\n        this._y = radius * Math.sin(radians);\n    }\n    /**\n     * Allows other code to read the x-value of the vector.\n     */\n    get x() {\n        return this._x;\n    }\n    /**\n     * Allows other code to read the y-value of the vector.\n     */\n    get y() {\n        return this._y;\n    }\n    /**\n     * Calculates the length of the current vector.\n     */\n    get magnitude() {\n        return Math.sqrt(this.magnitudeSq);\n    }\n    /**\n     * Sets the length of the current vector.\n     */\n    set magnitude(length) {\n        const n = this.normalize();\n        const result = n.mul(length);\n        this._x = result._x;\n        this._y = result._y;\n    }\n    /**\n     * Calculates the squared length of the vector.\n     */\n    get magnitudeSq() {\n        return this._x * this._x + this._y * this._y;\n    }\n    /**\n     * Normalizes the current vector.\n     */\n    normalize() {\n        const m = this.magnitude;\n        if (m !== 0) {\n            this._x /= m;\n            this._y /= m;\n        }\n        else {\n            this._x = 0;\n            this._y = 0;\n        }\n        return this;\n    }\n    /**\n     * Adds a vector or number to the vector.\n     * @param v Vector or number\n     */\n    add(v) {\n        if (v instanceof Vector) {\n            this._x += v._x;\n            this._y += v._y;\n        }\n        else {\n            this._x += v;\n            this._y += v;\n        }\n        return this;\n    }\n    /**\n     * Subtracts a vector or number from the vector.\n     */\n    sub(v) {\n        if (v instanceof Vector) {\n            this._x -= v._x;\n            this._y -= v._y;\n        }\n        else {\n            this._x -= v;\n            this._y -= v;\n        }\n        return this;\n    }\n    /**\n     * Multiplies the vector with another vector or number.\n     */\n    mul(v) {\n        if (v instanceof Vector) {\n            this._x *= v._x;\n            this._y *= v._y;\n        }\n        else {\n            this._x *= v;\n            this._y *= v;\n        }\n        return this;\n    }\n    /**\n     * Divides the vector by another vector or number.\n     */\n    div(v) {\n        if (v instanceof Vector) {\n            if (v._x === 0 || v._y === 0) {\n                throw new Error(Vector.DIV_ZERO_WARNING);\n            }\n            this._x /= v._x;\n            this._y /= v._y;\n        }\n        else {\n            if (v === 0) {\n                throw new Error(Vector.DIV_ZERO_WARNING);\n            }\n            this._x /= v;\n            this._y /= v;\n        }\n        return this;\n    }\n    /**\n     * Limits x values\n     */\n    limitX(min, max) {\n        if (typeof min === \"number\") {\n            this._x = Math.max(min, this._x);\n        }\n        if (typeof max === \"number\") {\n            this._x = Math.min(max, this._x);\n        }\n        return this;\n    }\n    /**\n     * Limits y values\n     */\n    limitY(min, max) {\n        if (typeof min === \"number\") {\n            this._y = Math.max(min, this._y);\n        }\n        if (typeof max === \"number\") {\n            this._y = Math.min(max, this._y);\n        }\n        return this;\n    }\n    /**\n     * Calculates the dot product of two vectors.\n     * @returns The dot product.\n     */\n    dot(v) {\n        return this.x * v.x + this.y * v.y;\n    }\n    /**\n     * Calculates the cross product of two vectors.\n     * @returns The cross product.\n     */\n    cross(v) {\n        return this.x * v.y - this.y * v.x;\n    }\n    /**\n     * Calculates the angle between two vectors.\n     * @returns The angle in radians\n     */\n    angleBetween(v) {\n        const squareSum = this.magnitudeSq * v.magnitudeSq;\n        return Math.acos((this.dot(v) * Math.sqrt(squareSum)) / squareSum);\n    }\n    /**\n     * Rotates the vector by a certain angle.\n     * @param radians The angle in radians.\n     */\n    rotate(radians) {\n        this.angle += radians;\n    }\n    /**\n     * Uses linear interpolation to change the current vector into another vector by a certain amount.\n     * @param target The vector to lerp towards.\n     * @param alpha A number between 0 and 1 (0% -> 100%)\n     */\n    lerp(target, alpha) {\n        this._x = this._x * (1 - alpha) + target._x * alpha;\n        this._y = this._y * (1 - alpha) + target._y * alpha;\n        return this;\n    }\n    /**\n     * Calculates the distance between two vectors.\n     * @returns Euclidian distance between two vectors.\n     */\n    distance(v) {\n        return Vector.sub(this, v).magnitude;\n    }\n    /**\n     * Checks if two vectors are equal.\n     */\n    equals(v) {\n        return this.x === v.x && this.y === v.y;\n    }\n    /**\n     * When String() or .toString() is called on the vector, the vector is converted to a string.\n     */\n    toString() {\n        return `X: ${this._x} Y: ${this._y}`;\n    }\n    // Static methods\n    // These do not modify the vector itself but create a new Vector instance instead.\n    /**\n     * Normalizes a vector.\n     */\n    static normalize(v) {\n        return this.fromAngle(v.angle, 1);\n    }\n    /**\n     * Adds two vectors.\n     */\n    static add(a, b) {\n        if (a instanceof Vector) {\n            if (b instanceof Vector) {\n                return new Vector(a._x + b._x, a._y + b._y);\n            }\n            return new Vector(a._x + b, a._y + b);\n        }\n        else if (b instanceof Vector) {\n            return new Vector(a + b._x, a + b._y);\n        }\n        return new Vector(a + b, a + b);\n    }\n    /**\n     * Subtracts two vectors.\n     */\n    static sub(a, b) {\n        if (a instanceof Vector) {\n            if (b instanceof Vector) {\n                return new Vector(a._x - b._x, a._y - b._y);\n            }\n            return new Vector(a._x - b, a._y - b);\n        }\n        else if (b instanceof Vector) {\n            return new Vector(a - b._x, a - b._y);\n        }\n        return new Vector(a - b, a - b);\n    }\n    /**\n     * Multiplies two vectors.\n     */\n    static mul(a, b) {\n        if (a instanceof Vector) {\n            if (b instanceof Vector) {\n                return new Vector(a._x * b._x, a._y * b._y);\n            }\n            return new Vector(a._x * b, a._y * b);\n        }\n        else if (b instanceof Vector) {\n            return new Vector(a * b._x, a * b._y);\n        }\n        return new Vector(a * b, a * b);\n    }\n    /**\n     * Divides two vectors.\n     */\n    static div(a, b) {\n        if (a instanceof Vector) {\n            if (b instanceof Vector) {\n                if (b._x === 0 || b._y === 0) {\n                    throw new Error(Vector.DIV_ZERO_WARNING);\n                }\n                return new Vector(a._x / b._x, a._y / b._y);\n            }\n            if (b === 0) {\n                throw new Error(Vector.DIV_ZERO_WARNING);\n            }\n            return new Vector(a._x / b, a._y / b);\n        }\n        else if (b instanceof Vector) {\n            if (b._x === 0 || b._y === 0) {\n                throw new Error(Vector.DIV_ZERO_WARNING);\n            }\n            return new Vector(a / b._x, a / b._y);\n        }\n        if (b === 0) {\n            throw new Error(Vector.DIV_ZERO_WARNING);\n        }\n        return new Vector(a / b, a / b);\n    }\n    /**\n     * Uses linear interpolation to change the current vector into another vector by a certain amount.\n     * @param alpha A number between 0 and 1 (0% -> 100%)\n     */\n    static lerp(current, target, alpha) {\n        return new Vector(current._x * (1 - alpha) + target._x * alpha, current._y * (1 - alpha) + target._y * alpha);\n    }\n    /**\n     * Rotates a vector.\n     * @param v The vector to rotate.\n     * @param radians The angle, in radians, to rotate the vector by.\n     */\n    static rotate(v, radians) {\n        return Vector.fromAngle(v.angle + radians, v.magnitude);\n    }\n}\nexports[\"default\"] = Vector;\n\n\n//# sourceURL=webpack://sde-program/./src/utils/Vector.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;