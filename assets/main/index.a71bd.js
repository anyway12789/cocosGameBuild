System.register("chunks:///_virtual/config.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09713Pve+9LVqpzo9v2dklr", "config", undefined);

      var gameConfig = exports('default', {
        games: {
          toubao: {
            bundleName: "GameToubaoBundle",
            sceneName: "GameToubao"
          },
          miniPoker: {
            bundleName: "MiniPokerBundle",
            sceneName: "MiniPoker"
          }
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/websocket.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "16af82CZzpKvZY5yjtXoUr9", "websocket", undefined);

      var global_callback = {}; // let serverPort = ''; // 连接端口

      var heartPing = null;
      var failCount = 0;
      var websock = exports('websock', null); // 连接成功

      var webSocketOpen = exports('webSocketOpen', function webSocketOpen(e) {
        console.log('连接成功');
        clearTimeout(heartPing);
        pingConn();
      }); // 发送心跳包

      var pingConn = exports('pingConn', function pingConn() {
        clearTimeout(heartPing);
        heartPing = setTimeout(function () {
          sendSock({
            'type': 'ping'
          }, null);
          pingConn();
        }, 40000);
      });
      var initWebSocket = exports('initWebSocket', function initWebSocket(wsurl, callback) {
        if (callback) {
          global_callback = callback;
        } else {
          global_callback = global_callback;
        }

        if (!wsurl) return;
        websock = exports('websock', new WebSocket(wsurl));

        websock.onmessage = function (e) {
          webSocketOnMessage(e);
        };

        websock.onclose = function (e) {
          console.log('a');
          webSocketClose(e);
        };

        websock.onopen = function (e) {
          webSocketOpen();
        }; // 连接失败回调


        websock.onerror = function () {
          console.log('webSocket连接发生错误');
        };
      }); // 实际调用

      var sendSock = exports('sendSock', function sendSock(agentData, callback) {
        if (callback) {
          global_callback = callback;
        } else {
          global_callback = global_callback;
        }

        if (!websock) {
          setTimeout(function () {
            sendSock(agentData, callback);
          }, 1000);
        } else if (websock.readyState === websock.OPEN) {
          // 如果是开启状态
          webSocketSend(agentData);
        } else if (websock.readyState === websock.CONNECTIONG) {
          // 若是正在连接状态 则等待一秒后调用
          setTimeout(function () {
            sendSock(agentData, callback);
          }, 1000);
        } else {
          // 若是未状态 则等待一秒后调用
          setTimeout(function () {
            sendSock(agentData, callback);
          }, 1000);
        }
      }); // 数据接收

      var webSocketOnMessage = exports('webSocketOnMessage', function webSocketOnMessage(e) {
        if (typeof global_callback == 'function') {
          global_callback(JSON.parse(e.data));
        }
      }); // 数据发送

      var webSocketSend = exports('webSocketSend', function webSocketSend(agentData) {
        websock.send(JSON.stringify(agentData));
      }); // 关闭

      var webSocketClose = exports('webSocketClose', function webSocketClose(e) {
        console.log(failCount);
        setTimeout(function () {
          if (failCount > 5) {
            // 重连5次后请提示用户重新刷新页面
            // MessageBox.confirm(i18n.t('user.RequestErrorRefresh'), i18n.t('user.error'), {
            //     confirmButtonText: i18n.t('user.determine'),
            //     cancelButtonText: i18n.t('user.cancel'),
            //     type: 'warning'
            // }).then(() => {
            //     window.location.reload()
            // })
            console.log("多次重连失败");
            return;
          }

          failCount++; // const { links } = initInfo || {}
          // const { ws } = links || {}
          // if (links && ws) {
          //     store.dispatch('app/wsGetToken', ws);
          // }

          console.log("此处重连ws，代码待添加"); // initWebSocket(curUrl);
        }, 500);
        console.log("connection closed (" + e.code + ")");
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, game, director, Component, _inheritsLoose;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2ef62zfrWtKY6UiTfUu/x1M", "GameController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);

        function GameController() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameController.prototype;

        _proto.start = function start() {
          // 将当前节点设置为常驻节点
          game.addPersistRootNode(this.node);
          console.log(game._persistRootNodes);
        } // 加载场景
        ;

        _proto._loadScene = function _loadScene(sceneName) {
          director.loadScene(sceneName);
        } // 预加载场景
        ;

        _proto._preLoadScene = function _preLoadScene(sceneName) {
          var _this = this;

          director.preloadScene(sceneName, function (progress, count, item) {
            // 加载中
            var p = progress / count * 100;
            var pt = parseInt(p.toString()) + " %"; // this.progressBar.getComponent(ProgressBar).progress = progress / count;
          }, function (err, scene) {
            // 加载完成
            console.log(scene);

            _this._onSceneLoaded(scene, sceneName);
          });
        } // 场景加载完成，可以切换场景
        ;

        _proto._onSceneLoaded = function _onSceneLoaded(scene, sceneName) {
          console.log(sceneName + 'loaded');
          director.loadScene(sceneName);
        };

        return GameController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/modalCommon.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Animation, Component, _inheritsLoose;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "34ce7pbfiVJ4a36q6FPnR3v", "modalCommon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = ModalCommon
       * DateTime = Sun Oct 10 2021 18:49:18 GMT+0800 (新加坡标准时间)
       * Author = anyway123
       * FileBasename = modalCommon.ts
       * FileBasenameNoExtension = modalCommon
       * URL = db://assets/scripts/modalCommon.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      var ModalCommon = exports('ModalCommon', (_dec = ccclass('ModalCommon'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalCommon, _Component);

        function ModalCommon() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ModalCommon.prototype;

        _proto.onEnable = function onEnable() {
          this.node.getComponent(Animation).play("modalFadeIn");
        } // 关闭动画 暂时没用
        // onDisable() {
        //     this.node.getComponent(Animation).play("modalFadeOut");
        // }
        // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ModalCommon;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/socket.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      cclegacy._RF.push({}, "60b0fCb+itKjq10AE9iIMcx", "socket", undefined); // 单例模式websocket


      var GameWebsocket = exports('default', /*#__PURE__*/function () {
        function GameWebsocket() {
          _defineProperty(this, "ws", null);
        }

        GameWebsocket.getInstance = function getInstance() {
          if (GameWebsocket.instance === null) {
            GameWebsocket.instance = new GameWebsocket();
          }

          return GameWebsocket.instance;
        };

        var _proto = GameWebsocket.prototype;

        _proto.init = function init(callback, target) {
          if (this.ws != null) {
            return;
          }

          this.ws = new WebSocket("ws://82.157.123.54:9010/ajaxchattest");

          this.ws.onopen = function (event) {
            callback.call(target, "ws connected");
          };

          this.ws.onmessage = function (event) {
            callback.call(target, event.data);
          };
        };

        _proto.sendMsg = function sendMsg(data) {
          if (this.ws != null && this.ws.readyState != WebSocket.OPEN) {
            return;
          }

          this.ws.send(data);
        };

        return GameWebsocket;
      }());

      _defineProperty(GameWebsocket, "instance", null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Base.ts", ['cc', './config.ts', './_rollupPluginModLoBabelHelpers.js', './methods.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, find, assetManager, director, ProgressBar, Label, Component, gameConfig, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, getGameFromURL;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      find = module.find;
      assetManager = module.assetManager;
      director = module.director;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      gameConfig = module.default;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      getGameFromURL = module.getGameFromURL;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "818efl6NItJ7a1jfE/w6bIi", "Base", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Base = exports('Base', (_dec = ccclass('Base'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Base, _Component);

        function Base() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "GameController", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "progressBar", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "progressText", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "newGame", {
            bundleName: "GameToubaoBundle",
            sceneName: "GameToubao"
          });

          _defineProperty(_assertThisInitialized(_this), "game", "");

          return _this;
        }

        var _proto = Base.prototype;

        _proto.onLoad = function onLoad() {
          this.checkGame(getGameFromURL());
        };

        _proto.start = function start() {};

        _proto.checkGame = function checkGame(game) {
          if (game == "") return;
          this.newGame = gameConfig.games[game];

          if (!this.newGame) {
            alert("Game config loading wrong, check the query params of url");
            return;
          }

          this.game = game;
          this.toGame();
        };

        _proto.toGame = function toGame() {
          var _this2 = this;

          var GameController = find("GameController").getComponent("GameController");
          /**
           * @string1 bundle名
           * @string2 scene名
           * @function1 loadBundle的onProgress回调
           * @function2 loadScene的onProgress回调
           */
          // 加载AB包
          // remote bundle Testing code

          var _files = [{
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          }, {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
          }, {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }, {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
          }, {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }, {
            url: 'https://source.unsplash.com/random/300x200'
          }];
          assetManager.loadAny(_files, // loadBundle 的onProgress回调,用于控制进度条从0-80%的区域
          function (progress, count) {
            var p = progress / count * 80;
            var pt = parseInt(p.toString()) + " %";

            _this2.progressUpdated(pt, _this2.newGame.sceneName, progress / count * 0.8);
          }, function (err, data) {
            // loadBundle
            // 加载AssetBundle，目前是从本地加载，上线后会从服务器加载，上面的代码是模拟从服务器加载资源的过程；
            // 加载AssetBundle和加载场景各占progress的80%和20%
            assetManager.loadBundle(_this2.newGame.bundleName, function (err, bundle) {
              bundle.loadScene(_this2.newGame.sceneName, // loadScene 的onProgress回调，用于控制进度条从80%-100%的区域
              function (progress, count) {
                var p = progress / count * 20 + 80;
                var pt = parseInt(p.toString()) + " %";

                _this2.progressUpdated(pt, _this2.newGame.sceneName, progress / count * 0.2 + 0.8);
              }, function (err, scene) {
                director.runScene(scene);
              });
            });
          });
        } // 加载进度更新
        ;

        _proto.progressUpdated = function progressUpdated(pt, sceneName, progress) {
          this.progressBar.getComponent(ProgressBar).progress = progress;
          this.progressText.getComponent(Label).string = "\u6B63\u5728\u52A0\u8F7D\u573A\u666F: " + sceneName + ", \u52A0\u8F7D\u8FDB\u5EA6: " + pt;
        };

        return Base;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Component, _inheritsLoose;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "89d40LIPL5BQqMwMapSNJ+s", "main", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Main
       * DateTime = Fri Oct 08 2021 18:36:29 GMT+0800 (新加坡标准时间)
       * Author = anyway123
       * FileBasename = main.ts
       * FileBasenameNoExtension = main
       * URL = db://assets/scripts/main.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      var Main = exports('Main', (_dec = ccclass('Main'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);

        function Main() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Main.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Main;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/methods.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        getGameFromURL: getGameFromURL,
        moneyFormatToKM: moneyFormatToKM
      });

      cclegacy._RF.push({}, "c04ceBpkcdGcr/I8NjJLSTU", "methods", undefined); // 全局通用方法
      // 金额格式化 转K M


      function moneyFormatToKM(num) {
        if (num >= 1000000000) {
          return num / 1000000000 + "B";
        }

        if (num >= 1000000) {
          return num / 1000000 + "M";
        }

        if (num >= 1000) {
          return num / 1000 + "K";
        }

        return num;
      } // 从URL获取游戏


      function getGameFromURL() {
        var queryString = window.location.search,
            urlParams = new URLSearchParams(queryString);
        return urlParams.has('game') ? urlParams.get('game') : "";
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/request.js", ['./cjs-loader.mjs'], function (exports, module) {
  'use strict';

  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0); // ajax封装模块

      var _cjsExports;

      loader.define(module.meta.url, function (exports$1, _require, module, __filename, __dirname) {
        var require = loader.createRequireWithReqMap({}, _require);

        _cjsExports = exports('default', module.exports);
      });

      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
    }
  };
});

System.register("chunks:///_virtual/api.js", ['./cjs-loader.mjs'], function (exports, module) {
  'use strict';

  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0); //接口配置

      var _cjsExports;

      loader.define(module.meta.url, function (exports$1, _require, module, __filename, __dirname) {
        var require = loader.createRequireWithReqMap({}, _require);

        _cjsExports = exports('default', module.exports);
      });

      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
    }
  };
});

System.register("chunks:///_virtual/main", ['./config.ts', './websocket.ts', './GameController.ts', './modalCommon.ts', './socket.ts', './methods.ts', './Base.ts', './main.ts', './request.mjs_cjs=&original=.js', './api.mjs_cjs=&original=.js'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});