System.register("chunks:///_virtual/chatRoom.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './socket.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Prefab, instantiate, Label, EditBox, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, GameWebsocket;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Label = module.Label;
      EditBox = module.EditBox;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      GameWebsocket = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "160b5f4CrhGVrsLu4FHLtxR", "chatRoom", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChatRoom = exports('ChatRoom', (_dec = ccclass('ChatRoom'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChatRoom, _Component);

        function ChatRoom() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "input", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chatLogContent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PRE_chatLogItem", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ChatRoom.prototype;

        _proto.onLoad = function onLoad() {
          GameWebsocket.getInstance().init(this.showGetMsg, this);
        };

        _proto.start = function start() {
          var _this2 = this;

          this.node.getChildByName("SpriteSplash").on(Node.EventType.TOUCH_MOVE, function (event) {
            // console.log(event);
            // console.log(this.node.position);
            var delta = event.touch.getDelta();
            delta.z = 0; // console.log(delta);

            _this2.node.position = delta.add(_this2.node.position); // this.node.x += delta.x;
            // this.node.y += delta.y;
          }, this);
        } // ws接收消息
        ;

        _proto.showGetMsg = function showGetMsg(data) {
          // 从prefab创建一个聊天记录item，添加到chatLogContent
          if (this.PRE_chatLogItem) {
            var newChatLogItem = instantiate(this.PRE_chatLogItem);
            newChatLogItem.getComponent(Label).string = data;
            this.chatLogContent.addChild(newChatLogItem);
            console.log(this.chatLogContent);
          }
        } // ws发送消息
        ;

        _proto.sendMsg = function sendMsg() {
          console.log(this.input.getComponent(EditBox).string);
          var msg = this.input.getComponent(EditBox).string;
          GameWebsocket.getInstance().sendMsg(msg);
          this.input.getComponent(EditBox).string = "";
        };

        return ChatRoom;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatLogContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PRE_chatLogItem", [_dec4], {
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

System.register("chunks:///_virtual/gameToubao.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, find, director, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      find = module.find;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "83f0cMQH4ZNx4mBpR1qif5B", "gameToubao", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameToubao = exports('GameToubao', (_dec = ccclass('GameToubao'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: [Float32Array]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameToubao, _Component);

        function GameToubao() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "fastMoneyContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameStatus", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "serializableDummy", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "fastMoneyArray", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameToubao.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.start = function start() {// [3]
        };

        _proto.init = function init() {
          // GameWebsocket.getInstance().init(this.showGetMsg, this);
          this.fastMoneyInit();
        };

        _proto.showGetMsg = function showGetMsg(data) {
          console.log(data);
        } // 快选金额初始化
        ;

        _proto.fastMoneyInit = function fastMoneyInit() {
          this.fastMoneyArray = [10000, 50000, 500000, 1000000, 5000000, 10000000, 50000000000];
          this.fastMoneyContainer.getComponent("FastMoney").init(this.fastMoneyArray);
        }
        /**
         * 桌子两侧按钮点击开启弹窗
         * @param {Event} e
         * @param {string} nodeName
         * @memberof GameToubao
         */
        ;

        _proto.modalOpenBtnClick = function modalOpenBtnClick(e, nodeName) {
          // 显示节点
          this.node.getChildByName(nodeName).active = true;
        }
        /**
         * modal弹窗关闭按钮点击事件
         * @param {Event} e 点击事件
         * @param {string} d 传递参数
         * @memberof GameToubao
         */
        ;

        _proto.modalCloseBtnClick = function modalCloseBtnClick(e, nodeName) {
          // 不显示节点
          this.node.getChildByName(nodeName).active = false;
        } // 打开聊天室
        ;

        _proto.openChatRoom = function openChatRoom() {
          this.node.getChildByName('chatRoom').active = true;
        } // 切换场景
        ;

        _proto.toScene = function toScene() {
          var GameController = find("GameController").getComponent("GameController");
          director.loadScene("Base");
        };

        return GameToubao;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fastMoneyContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameStatus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "serializableDummy", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fastMoneyArray", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/table.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Label, tween, sp, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

      cclegacy._RF.push({}, "e7b19Jl7G5MT7SWc4a01Ed4", "table", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Table = exports('Table', (_dec = ccclass('Table'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Table, _Component);

        function Table() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "secondNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "secondString", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "secondAnimation", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "rollAnimation", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "resultTouzi", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nodeText5", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nodeText6", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "text5Number", 0);

          _defineProperty(_assertThisInitialized(_this), "textNum", {
            text_1: 0,
            text_2: 0,
            text_3: 0,
            text_4: 0,
            text_5: 0,
            text_6: 0
          });

          return _this;
        }

        var _proto = Table.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.start = function start() {} // update (deltaTime: number) {
        //     // [4]
        // }
        // 游戏初始化
        ;

        _proto.init = function init() {
          this.startTimedown(30);
          this.rollAnimation.active = false;
          this.secondNode.active = true;
          this.secondAnimation.active = true;
        } // 开始倒计时
        ;

        _proto.startTimedown = function startTimedown(second) {
          // 播放倒计时动画
          this.secondAnimation.active = true;
          this.animationFunc(this.secondAnimation, "1sec", true); // 倒计时

          this.secondNode.active = true;
          this.secondString = second;
          this.schedule(this.timeDownFunc, 1);
        } // 倒计时方法
        ;

        _proto.timeDownFunc = function timeDownFunc() {
          this.numCountTween();
          this.secondString -= 1;

          if (this.secondString <= 0) {
            this.unschedule(this.timeDownFunc);
            this.secondString = 0;
            this.timeEnd();
          } else {
            this.secondNode.getComponent(Label).string = this.secondString;
          }
        } // 数字增长tween动画
        ;

        _proto.numCountTween = function numCountTween() {
          var label5 = this.nodeText6.getComponent(Label);
          var label6 = this.nodeText6.getComponent(Label);
          var n = this.textNum.text_5 + 12653891;
          tween(this.textNum).to(0.5, {
            'text_5': n
          }, {
            progress: function progress(start, end, current, ratio) {
              if (label5) {
                label5.string = Math.ceil(start + (end - start) * ratio);
              }

              if (label6) {
                label6.string = Math.ceil(start + (end - start) * ratio);
              }

              return start + (end - start) * ratio;
            }
          }).start();
        } // 倒计时结束
        ;

        _proto.timeEnd = function timeEnd() {
          // 隐藏倒计时节点和动画
          this.secondNode.active = false;
          this.secondAnimation.active = false; // 显示摇骰子节点、播放摇骰子动画

          this.rollAnimation.active = true;
          this.animationFunc(this.rollAnimation, "rolling", false);
          this.init();
        } // 动画播放
        ;

        _proto.animationFunc = function animationFunc(animNode, animName, isLoop) {
          var animComp = animNode.getComponent(sp.Skeleton);
          animComp.setAnimation(0, animName, isLoop);
        };

        return Table;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "secondNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "secondAnimation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rollAnimation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resultTouzi", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeText5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeText6", [_dec7], {
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

System.register("chunks:///_virtual/fastMoney.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './methods.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Prefab, instantiate, Label, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, moneyFormatToKM;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      moneyFormatToKM = module.moneyFormatToKM;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "eab66wk6OFNYJ3cET6f5Vch", "fastMoney", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FastMoney = exports('FastMoney', (_dec = ccclass('FastMoney'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FastMoney, _Component);

        function FastMoney() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "PRE_fastMoneyItem", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = FastMoney.prototype;

        _proto.start = function start() {// [3]
        }
        /**
         * 初始化快捷金额
         * 被gameToubao.ts调用
         * @param {Array<number>} fastMoneyArray
         * @memberof FastMoney
         */
        ;

        _proto.init = function init(fastMoneyArray) {
          var _this2 = this;

          fastMoneyArray.forEach(function (item) {
            // 从Prefab创建fastMoneyItem节点
            var newFastMoneyItem = instantiate(_this2.PRE_fastMoneyItem);
            newFastMoneyItem.getChildByName("chip").getChildByName("Label").getComponent(Label).string = moneyFormatToKM(item);

            _this2.node.addChild(newFastMoneyItem);
          });
        };

        return FastMoney;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "PRE_fastMoneyItem", [_dec2], {
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

System.register("chunks:///_virtual/GameToubaoBundle", ['./chatRoom.ts', './gameToubao.ts', './table.ts', './fastMoney.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/GameToubaoBundle', 'chunks:///_virtual/GameToubaoBundle'); 
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