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
          // fishcrab: {
          //     bundleName: "GameFishCrabBundle",
          //     sceneName: "GameFishCrab",
          // },
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

System.register("chunks:///_virtual/dataTable.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Prefab, instantiate, UITransform, Size, Label, Color, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Size = module.Size;
      Label = module.Label;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "1b05ajQljJFhakKOAAdha9t", "dataTable", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DataTable = exports('DataTable', (_dec = ccclass('DataTable'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DataTable, _Component);

        function DataTable() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "trHeadPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tdHeadPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "trBodyPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tdBodyPrefab", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "trChildren", 0);

          _defineProperty(_assertThisInitialized(_this), "thead", null);

          _defineProperty(_assertThisInitialized(_this), "tbody", null);

          _defineProperty(_assertThisInitialized(_this), "data", [{
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }, {
            0: '763275',
            1: '2021-01-01',
            2: '大',
            3: '2-2-1 5'
          }, {
            0: '762415',
            1: '2020-01-01',
            2: '小',
            3: '6-3-5 14'
          }, {
            0: '762311',
            1: '2019-01-01',
            2: '大',
            3: '5-1-4 10'
          }]);

          _defineProperty(_assertThisInitialized(_this), "tableConfig", {
            thead: [{
              name: '0',
              title: '期号',
              width: 200,
              height: 70,
              fontSize: 25,
              color: "#ffffff",
              isBold: true,
              fontFamily: "Bookman"
            }, {
              name: '1',
              title: '订单时间',
              width: 300,
              height: 70,
              fontSize: 25,
              color: "#ffffff",
              isBold: true,
              fontFamily: "Bookman"
            }, {
              name: '2',
              title: '下注内容',
              width: 200,
              height: 70,
              fontSize: 25,
              color: "#ffffff",
              isBold: true,
              fontFamily: "Bookman"
            }, {
              name: '3',
              title: '结果',
              width: 200,
              height: 70,
              fontSize: 25,
              color: "#ffffff",
              isBold: true,
              fontFamily: "Bookman"
            }],
            tbody: [{
              name: '0',
              title: '期号',
              width: 200,
              height: 50,
              fontSize: 25,
              color: "#ffaa00",
              isBold: true,
              fontFamily: "Algerian"
            }, {
              name: '1',
              title: '订单时间',
              width: 300,
              height: 50,

              /*fontSize: 20,*/
              color: "#ff00aa",
              isBold: false,
              fontFamily: "Arial"
            }, {
              name: '2',
              title: '下注内容',
              width: 200,
              height: 50,
              fontSize: 20,

              /*color: "#ffffff",*/
              isBold: false,
              fontFamily: "Arial"
            }, {
              name: '3',
              title: '结果',
              width: 200,
              height: 50,
              fontSize: 20,
              color: "#ffaa00",
              isBold: false,
              fontFamily: "Arial"
            }]
          });

          return _this;
        }

        var _proto = DataTable.prototype;

        _proto.start = function start() {// this.init()
        };

        _proto.init = function init() {
          var item_container = this.node;
          this.trChildren = Object.keys(this.data[0]).length;
          this.thead = item_container.getChildByName("thead");
          this.tbody = item_container.getChildByName("tbody").getChildByName("ScrollView").getChildByName("view").getChildByName("Content"); // thead

          this.initTableHead(); // tbody

          this.initTableBody();
        };

        _proto.initTableHead = function initTableHead() {
          var trHeadPrefab = instantiate(this.trHeadPrefab);
          var theadItem;

          for (var j = 0; j < this.tableConfig.thead.length; j++) {
            theadItem = this.tableConfig.thead[j];
            var tdHeadPrefab = instantiate(this.tdHeadPrefab);
            this.renderTd(theadItem, theadItem.title, tdHeadPrefab);
            trHeadPrefab.addChild(tdHeadPrefab);
          }

          this.thead.addChild(trHeadPrefab);
        };

        _proto.initTableBody = function initTableBody() {
          console.time("dataTable");

          for (var i = 0; i < this.data.length; i++) {
            var trBodyPrefab = instantiate(this.trBodyPrefab);
            var tbodyItem = void 0;

            for (var j = 0; j < this.tableConfig.tbody.length; j++) {
              tbodyItem = this.tableConfig.tbody[j];
              var tdBodyPrefab = instantiate(this.tdBodyPrefab);
              this.renderTd(tbodyItem, this.data[i][tbodyItem.name], tdBodyPrefab);
              trBodyPrefab.addChild(tdBodyPrefab);
            }

            this.tbody.addChild(trBodyPrefab);
          }

          console.timeEnd("dataTable");
        };

        _proto.renderTd = function renderTd(prop, data, tdBodyPrefab) {
          if (typeof (prop === null || prop === void 0 ? void 0 : prop.render) === 'function') {
            prop === null || prop === void 0 ? void 0 : prop.render(prop, data, tdBodyPrefab);
          } else {
            this.initLabel(prop, data, tdBodyPrefab);
          }
        };

        _proto.initLabel = function initLabel(tableConfig, labelString, prefab) {
          var _tableConfig$width = tableConfig.width,
              width = _tableConfig$width === void 0 ? 200 : _tableConfig$width,
              _tableConfig$height = tableConfig.height,
              height = _tableConfig$height === void 0 ? 50 : _tableConfig$height,
              _tableConfig$fontSize = tableConfig.fontSize,
              fontSize = _tableConfig$fontSize === void 0 ? 25 : _tableConfig$fontSize,
              _tableConfig$color = tableConfig.color,
              color = _tableConfig$color === void 0 ? "#ffffff" : _tableConfig$color,
              _tableConfig$isBold = tableConfig.isBold,
              isBold = _tableConfig$isBold === void 0 ? false : _tableConfig$isBold,
              _tableConfig$fontFami = tableConfig.fontFamily,
              fontFamily = _tableConfig$fontFami === void 0 ? "Arial" : _tableConfig$fontFami;
          var transform = prefab.getComponent(UITransform);
          transform.setContentSize(new Size(width, height));
          var label = prefab.getChildByName("Label").getComponent(Label);
          label.string = labelString;
          label.fontSize = fontSize;
          label.color = new Color(color);
          label.isBold = isBold;
          label.useSystemFont = true;
          label.fontFamily = fontFamily;
        };

        return DataTable;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trHeadPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tdHeadPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trBodyPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tdBodyPrefab", [_dec5], {
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

System.register("chunks:///_virtual/GameController.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './user.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, game, Component, _inheritsLoose, setAppData;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      setAppData = module.setAppData;
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

        _proto.onLoad = function onLoad() {
          setAppData();
        };

        _proto.start = function start() {
          // 将当前节点设置为常驻节点
          game.addPersistRootNode(this.node);
          console.log(game._persistRootNodes);
        } // // 加载场景
        // _loadScene(sceneName: string) {
        //     director.loadScene(sceneName);
        // }
        // // 预加载场景
        // _preLoadScene(sceneName: string) {
        //     director.preloadScene(sceneName,
        //         (progress, count, item) => {
        //             // 加载中
        //             let p = (progress / count) * 100;
        //             let pt = parseInt(p.toString()) + " %";
        //             // this.progressBar.getComponent(ProgressBar).progress = progress / count;
        //         },
        //         (err, scene) => {
        //             // 加载完成
        //             console.log(scene);
        //             this._onSceneLoaded(scene, sceneName);
        //         });
        // }
        // // 场景加载完成，可以切换场景
        // _onSceneLoaded(scene, sceneName) {
        //     console.log( sceneName + 'loaded');
        //     director.loadScene(sceneName);
        // }
        ;

        return GameController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/modalCommon.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Prefab, Animation, instantiate, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Animation = module.Animation;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "34ce7pbfiVJ4a36q6FPnR3v", "modalCommon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ModalCommon = exports('ModalCommon', (_dec = ccclass('ModalCommon'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalCommon, _Component);

        function ModalCommon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dataTable", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ModalCommon.prototype;

        _proto.onEnable = function onEnable() {
          this.node.getComponent(Animation).play("modalFadeIn");
          console.log(123);
          var tableNode = instantiate(this.dataTable);
          var bg = this.node.getChildByName("bg");
          bg.addChild(tableNode);
          var obj = bg.getChildByName("dataTable").getComponent("DataTable");
          obj.init();
        } // 关闭动画 暂时没用
        ;

        _proto.onDisable = function onDisable() {
          // this.node.getComponent(Animation).play("modalFadeOut");
          var bg = this.node.getChildByName("bg");
          bg.destroyAllChildren();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ModalCommon;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataTable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

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
      cclegacy._RF.push({}, "60b0fCb+itKjq10AE9iIMcx", "socket", undefined);
      /**
       * WebSocket 
       */


      var Socket = exports('default', /*#__PURE__*/function () {
        function Socket() {
          _defineProperty(this, "tryConnectCountLimit", 10);

          _defineProperty(this, "tryConnectIntever", 3000);

          _defineProperty(this, "_ws", null);

          _defineProperty(this, "_options", null);

          _defineProperty(this, "_heartBeatInterval", void 0);

          _defineProperty(this, "_reconnectTimer", void 0);

          _defineProperty(this, "_connectCount", 0);
        }

        var _proto = Socket.prototype;

        _proto.onConnected = function onConnected(event) {
          var _this$_options, _this$_options$onConn;

          console.log('onConnected', event);
          this._connectCount = 0;
          (_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : (_this$_options$onConn = _this$_options.onConnected) === null || _this$_options$onConn === void 0 ? void 0 : _this$_options$onConn.call(_this$_options, event);
        };

        _proto.onMessage = function onMessage(data) {
          var _this$_options2;

          console.log('onMessage', data);
          (_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.onMessage(data);
        };

        _proto.onError = function onError(event) {
          var _this$_options3, _this$_options3$onErr;

          console.log('onError', event);
          (_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : (_this$_options3$onErr = _this$_options3.onError) === null || _this$_options3$onErr === void 0 ? void 0 : _this$_options3$onErr.call(_this$_options3, event);
        };

        _proto.onClosed = function onClosed(event) {
          var _this$_options4, _this$_options4$onClo;

          console.log('onClose=', event);

          if (event.code !== 4002) {
            // try connect
            this.reconnect();
          }

          (_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : (_this$_options4$onClo = _this$_options4.onClosed) === null || _this$_options4$onClo === void 0 ? void 0 : _this$_options4$onClo.call(_this$_options4, event);
        };
        /**
         * WebSocket重连
         * @returns boolean
         */


        _proto.reconnect = function reconnect() {
          var _this2 = this;

          if (this._connectCount >= this.tryConnectCountLimit) {
            console.log('Over limited reconnect count!');
            return false;
          }

          this._connectCount++;
          clearInterval(this._reconnectTimer);
          this._reconnectTimer = setInterval(function () {
            if (_this2._ws.readyState !== WebSocket.CONNECTING && _this2._ws.readyState !== WebSocket.OPEN) {
              _this2.connect(_this2._options);
            }
          }, this.tryConnectIntever);
          return true;
        };
        /**
         * 初始化WebSocket连接
         * @param options { ConnectOptions }
         * @returns boolean
         */


        _proto.connect = function connect(options) {
          var _options$binaryType,
              _this3 = this;

          if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
              return false;
            }
          }

          this._options = options;
          this._ws = new WebSocket(options.url, options.protocols);
          this._ws.binaryType = (_options$binaryType = options.binaryType) !== null && _options$binaryType !== void 0 ? _options$binaryType : 'arraybuffer';
          this._ws.onopen = this.onConnected;

          this._ws.onmessage = function (event) {
            _this3.onMessage(event.data);
          };

          this._ws.onerror = function (event) {
            _this3.onError(event);
          };

          this._ws.onclose = function (event) {
            _this3.onClosed(event);
          };

          this.startHeartBeat();
          return true;
        };

        _proto.send = function send(data) {
          if (this._ws.readyState === WebSocket.OPEN) {
            this._ws.send(data);

            return true;
          }

          return false;
        };

        _proto.close = function close(code, phrase) {
          if (code === void 0) {
            code = 4002;
          }

          if (phrase === void 0) {
            phrase = 'USER_TRIGGER_CLOSE';
          }

          this._ws.close(code, phrase);
        };

        _proto.startHeartBeat = function startHeartBeat() {
          var _this4 = this;

          clearInterval(this._heartBeatInterval);
          this._heartBeatInterval = setInterval(function () {
            if (_this4._ws.readyState === WebSocket.OPEN) {
              _this4._ws.send('1');
            }
          }, 10000);
        };

        return Socket;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventBus.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c60bdymvZF9rDaPP13W2q6", "EventBus", undefined);

      var listensers = [];
      /**
       * 事件订阅,发布
       * 
       * @example
       * 1,先订阅
       * EventBus.add('ws_msg', (data) => {  
       *    // TODO 处理接收的data
       * });
       * 
       * 2.触发通知 
       * EventBus.emit('ws_msg', { score: 100 });
       */

      var EventBus = exports('default', /*#__PURE__*/function () {
        function EventBus() {}
        /**
         * 订阅
         * @param name  事件名
         * @param handler 事件处理函数
         */


        EventBus.addListenser = function addListenser(name, handler) {
          listensers.push({
            name: name,
            handler: handler
          });
        };

        EventBus.removeListenser = function removeListenser(name) {
          for (var i = 0, len = listensers.length; i < len; i++) {
            var _listensers$i;

            if (((_listensers$i = listensers[i]) === null || _listensers$i === void 0 ? void 0 : _listensers$i.name) === name) {
              listensers.splice(i, 1);
            }
          }
        }
        /**
         * 通知订阅者
         * @param name 事件名
         * @param data 数据
         */
        ;

        EventBus.emit = function emit(name, data) {
          for (var i = 0, len = listensers.length; i < len; i++) {
            var _listensers$i2;

            if (((_listensers$i2 = listensers[i]) === null || _listensers$i2 === void 0 ? void 0 : _listensers$i2.name) === name) {
              var _listensers$i3;

              if (typeof ((_listensers$i3 = listensers[i]) === null || _listensers$i3 === void 0 ? void 0 : _listensers$i3.handler) === 'function') {
                listensers[i].handler(data);
              }
            }
          }
        };

        EventBus.removeAll = function removeAll() {
          listensers = [];
        };

        EventBus.getListensers = function getListensers() {
          return listensers;
        };

        EventBus.has = function has(name) {
          return listensers.find(function (item) {
            return item.name === name;
          });
        };

        return EventBus;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Base.ts", ['cc', './config.ts', './_rollupPluginModLoBabelHelpers.js', './methods.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, assetManager, director, ProgressBar, Label, Component, gameConfig, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, getGameFromURL;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "818efl6NItJ7a1jfE/w6bIi", "Base", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; //     [key: string]: any
      // }

      var Base = exports('Base', (_dec = ccclass('Base'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Base, _Component);

        function Base() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "progressBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "progressText", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "newGame", {
            bundleName: "MiniPokerBundle",
            sceneName: "MiniPoker"
          });

          _defineProperty(_assertThisInitialized(_this), "game", getGameFromURL() || "");

          return _this;
        }

        var _proto = Base.prototype;

        _proto.onLoad = function onLoad() {
          this.checkGame();
        };

        _proto.start = function start() {
          console.log('@base - APPDATA = ', window._APPDATA);
          this.toGame();
        };

        _proto.checkGame = function checkGame() {
          var game = this.game;
          if (game == "") return;
          this.newGame = gameConfig.games[game];

          if (!this.newGame) {
            alert("Game config loading wrong, check the query params of url");
            return;
          }

          this.toGame();
        };

        _proto.toGameMiniPoker = function toGameMiniPoker() {
          this.newGame = gameConfig.games["miniPoker"];
          this.toGame();
        };

        _proto.toGameToubao = function toGameToubao() {
          this.newGame = gameConfig.games["toubao"];
          this.toGame();
        };

        _proto.toGame = function toGame() {
          var _this2 = this; // let GameController: GameController = find("GameController").getComponent("GameController");

          /**
           * @string1 bundle名
           * @string2 scene名
           * @function1 loadBundle的onProgress回调
           * @function2 loadScene的onProgress回调
           */
          // 加载AB包
          // remote bundle Testing code


          var _files = [// { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
            // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
            // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
            // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
            // { url: 'https://source.unsplash.com/random/300x200' },
            // { url: 'https://source.unsplash.com/random/300x200' },
            // { url: 'https://source.unsplash.com/random/300x200' },
            // { url: 'https://source.unsplash.com/random/300x200' },
            // { url: 'https://source.unsplash.com/random/300x200' },
            // { url: 'https://source.unsplash.com/random/300x200' },
          ];
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
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressText", [_dec3], {
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

System.register("chunks:///_virtual/HttpRequest.ts", ['cc', './HttpCore.ts', './Config2.ts'], function (exports) {
  'use strict';

  var cclegacy, httpCore, RequestMethods, Config;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      httpCore = module.default;
      RequestMethods = module.RequestMethods;
    }, function (module) {
      Config = module.default;
    }],
    execute: function () {
      exports('default', request);

      cclegacy._RF.push({}, "9106c4ppyFKfpRyNJvdhewn", "HttpRequest", undefined);

      var DEFAULT_TIMEOUT = 5000;

      function request(options) {
        var _options$headers, _options$timeout;

        options.headers = (_options$headers = options.headers) !== null && _options$headers !== void 0 ? _options$headers : {};
        options.headers = Object.assign({
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }, options.headers);
        options.timeout = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : DEFAULT_TIMEOUT;
        options.url = Config.getServerHost() + options.url;
        return httpCore(options).then(function (res) {
          return Promise.resolve(res);
        }, function (err) {
          return Promise.reject(err);
        });
      }
      /**
       * Http请求封装
       * 
       * @example
       * // 发起一个GET请求
       * HttpRequest.get('/getInfo').then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * // 带参数发起一个GET请求
       * HttpRequest.get('/getInfo', { name: 'xxx' }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * 
       * // 发起一个POST请求
       * HttpRequest.post('/login').then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * // 带参数发起一个POST请求
       * HttpRequest.post('/login', { name: 'xxx' }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       */


      var HttpRequest = exports('HttpRequest', {
        get: function get(url, data, options) {
          if (data === void 0) {
            data = {};
          }

          var config = {
            url: url,
            data: data
          };
          Object.assign(config, options);
          config.method = RequestMethods.GET;
          return request(config);
        },
        post: function post(url, data, options) {
          var _config$headers;

          if (data === void 0) {
            data = {};
          }

          var config = {
            url: url,
            data: data
          };
          Object.assign(config, options);
          config.headers = (_config$headers = config.headers) !== null && _config$headers !== void 0 ? _config$headers : {};
          config.headers = Object.assign({
            'Content-Type': 'application/json; charset=utf-8'
          }, config.headers);
          config.method = RequestMethods.POST;
          return request(config);
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpCore.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        HttpExceptionType: void 0,
        RequestMethods: void 0,
        ResponseDataType: void 0,
        default: httpCore
      });

      cclegacy._RF.push({}, "a34ccS9HQRLWq4Bvqqb9o9K", "HttpCore", undefined);

      var toString = Object.prototype.toString;

      function objToUrl(obj) {
        var temp = [];

        for (var k in obj) {
          temp.push(k + '=' + obj[k]);
        }

        return temp.join('&');
      }

      function isPlainObject(val) {
        if (toString.call(val) !== '[object Object]') {
          return false;
        }

        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }

      function isUndefined(val) {
        return typeof val === 'undefined';
      }

      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }

      var RequestMethods;

      (function (RequestMethods) {
        RequestMethods["GET"] = "GET";
        RequestMethods["POST"] = "POST";
        RequestMethods["DELETE"] = "DELETE";
        RequestMethods["OPTIONS"] = "OPTIONS";
        RequestMethods["PUT"] = "PUT";
      })(RequestMethods || (RequestMethods = exports('RequestMethods', {})));

      var ResponseDataType;

      (function (ResponseDataType) {
        ResponseDataType["arraybuffer"] = "arraybuffer";
        ResponseDataType["blob"] = "blob";
        ResponseDataType["document"] = "document";
        ResponseDataType["json"] = "json";
        ResponseDataType["text"] = "text";
        ResponseDataType["stream"] = "stream";
      })(ResponseDataType || (ResponseDataType = exports('ResponseDataType', {})));

      var HttpExceptionType;

      (function (HttpExceptionType) {
        HttpExceptionType[HttpExceptionType["ABORT"] = 0] = "ABORT";
        HttpExceptionType[HttpExceptionType["ERROR"] = 1] = "ERROR";
        HttpExceptionType[HttpExceptionType["TIMEOUT"] = 2] = "TIMEOUT";
      })(HttpExceptionType || (HttpExceptionType = exports('HttpExceptionType', {})));

      var DEFAULT_HEADERS = {
        accept: 'application/json, text/plain, */*',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8'
      };
      /**
       * Http请求
       * @param { HttpRequestOptions } options 
       * 默认值:
       * 1,默认GET请求方式  mehtods: GET
       * 2,默认JSON类型
       * 
       * @returns Promise 
       * @example
       * // 发起一个GET请求
       * httpCore({ url: '/getInfo' }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * // 带参数发起一个GET请求
       * httpCore({ url: '/getInfo', data: { name: 'xxx' } }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * 
       * // 发起一个POST请求
       * httpCore({ url: '/login', method: 'POST' }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       * // 带参数发起一个POST请求
       * httpCore({ url: '/login', method: 'POST', data: { name: 'xxx' }  }).then(
       *    // TODO 请求成功
       * ).catch(() => {
       *    // TODO 请求异常
       * });
       * 
       */

      function httpCore(options) {
        return new Promise(function (resolve, reject) {
          var _options$headers, _options$method, _options$responseType;

          var headers = (_options$headers = options.headers) !== null && _options$headers !== void 0 ? _options$headers : {
            Accept: DEFAULT_HEADERS.accept
          };
          var requestData = options.data;
          var method = (_options$method = options.method) !== null && _options$method !== void 0 ? _options$method : RequestMethods.GET;
          var url = options.url;
          var responseType = (_options$responseType = options.responseType) !== null && _options$responseType !== void 0 ? _options$responseType : ResponseDataType.json;

          if (method.toUpperCase() === RequestMethods.GET) {
            if (requestData) {
              url += (url.includes('?') ? '&' : '?') + objToUrl(requestData);
              requestData = null;
            }
          }

          if (method.toUpperCase() === RequestMethods.POST) {
            if (isPlainObject(requestData)) {
              requestData = JSON.stringify(requestData);
            }
          }

          if (isFormData(requestData)) {
            delete headers['Content-Type'];
          }

          var xhr = new XMLHttpRequest();
          xhr.open(method.toUpperCase(), url, true);
          xhr.timeout = options.timeout;

          if (headers) {
            if (!headers['Accept']) {
              headers['Accept'] = DEFAULT_HEADERS.accept;
            }

            for (var k in headers) {
              xhr.setRequestHeader(k, String(headers[k]));
            }
          }

          if (!isUndefined(options.withCredentials)) {
            xhr.withCredentials = !!options.withCredentials;
          }

          function onloadend() {
            if (!xhr) {
              return;
            }

            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? xhr.responseText : xhr.response;

            if (responseType === 'json') {
              responseData = JSON.parse(responseData);
            }

            resolve(responseData);
          }

          if ('onloadend' in xhr) {
            xhr.onloadend = onloadend;
          } else {
            xhr.onreadystatechange = function () {
              if (!xhr || xhr.readyState !== 4) {
                return;
              }

              if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) {
                return;
              }

              setTimeout(onloadend);
            };
          }

          xhr.onabort = function () {
            reject({
              type: HttpExceptionType.ABORT,
              message: 'Request aborted',
              xhr: xhr
            });
            xhr = null;
          };

          xhr.onerror = function () {
            reject({
              type: HttpExceptionType.ERROR,
              message: 'Notwork Error',
              xhr: xhr
            });
            xhr = null;
          };

          xhr.ontimeout = function () {
            reject({
              type: HttpExceptionType.TIMEOUT,
              message: 'ETIMEDOUT',
              xhr: xhr
            });
            xhr = null;
          };

          xhr.send(requestData);
        });
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetInterfaces.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "af93113o4VMF7ULTH16doWk", "NetInterfaces", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/user.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('setAppData', setAppData);

      cclegacy._RF.push({}, "b13f2XxlGZEbKeZAT1dLd38", "user", undefined); // userData


      function setAppData() {
        var data = {
          player: 'Jimmy',
          age: 36,
          miniPokerValues: ["黑桃1", "黑桃2", "黑桃3", "黑桃4", "黑桃5"],
          values: [{
            type: 1,
            name: '结果1',
            num: 7
          }, {
            type: 2,
            name: '结果2',
            num: 8
          }, {
            type: 3,
            name: '结果3',
            num: 9
          }, {
            type: 4,
            name: '结果4',
            num: 10
          }, {
            type: 1,
            name: '结果5',
            num: 11
          }]
        };
        window._APPDATA = data;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Config2.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, Component, _inheritsLoose;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcf2epV6NVBtZ2J1p+HvQJY", "Config", undefined);

      var Env;

      (function (Env) {
        Env["dev"] = "dev";
        Env["test"] = "test";
        Env["pro"] = "pro";
      })(Env || (Env = {}));

      var curEnv = Env.pro;
      var SERVER_HOST_DEV = 'http://localhost/';
      var SERVER_HOST_TEST = '';
      var SERVER_HOST_PRO = '';
      var WEBSOCKET_HOST_DEV = 'ws://localhost/';
      var WEBSOCKET_HOST_TEST = '';
      var WEBSOCKET_HOST_PRO = '';
      var Config = exports('default', /*#__PURE__*/function (_Component) {
        _inheritsLoose(Config, _Component);

        function Config() {
          return _Component.apply(this, arguments) || this;
        }

        Config.getServerHost = function getServerHost(env) {
          if (env === void 0) {
            env = curEnv;
          }

          switch (env) {
            case Env.dev:
              return SERVER_HOST_DEV;

            case Env.test:
              return SERVER_HOST_TEST;

            case Env.pro:
              return SERVER_HOST_PRO;

            default:
              return SERVER_HOST_PRO;
          }
        };

        Config.getWebsocketHost = function getWebsocketHost(env) {
          if (env === void 0) {
            env = curEnv;
          }

          switch (env) {
            case Env.dev:
              return WEBSOCKET_HOST_DEV;

            case Env.test:
              return WEBSOCKET_HOST_TEST;

            case Env.pro:
              return WEBSOCKET_HOST_PRO;

            default:
              return WEBSOCKET_HOST_PRO;
          }
        };

        return Config;
      }(Component));

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
        fillNumber: fillNumber,
        getGameFromURL: getGameFromURL,
        getRandomItemFromArray: getRandomItemFromArray,
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
      } // 从数组中随机取一个item


      function getRandomItemFromArray(arr) {
        if (arr.length <= 0) {
          return;
        }

        var i = Math.floor(Math.random() * arr.length);
        return arr[i] || null;
      } // 小于10的数字在前面补0


      function fillNumber(num) {
        var n = parseInt(num + '');
        return n < 10 ? '0' + n : n;
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

System.register("chunks:///_virtual/main", ['./config.ts', './websocket.ts', './dataTable.ts', './user.ts', './GameController.ts', './modalCommon.ts', './socket.ts', './EventBus.ts', './methods.ts', './Base.ts', './main.ts', './HttpCore.ts', './Config2.ts', './HttpRequest.ts', './NetInterfaces.ts', './request.mjs_cjs=&original=.js', './api.mjs_cjs=&original=.js'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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