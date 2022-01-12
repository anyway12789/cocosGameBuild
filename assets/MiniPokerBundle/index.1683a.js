System.register("chunks:///_virtual/Bonus.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './dataTable.ts', './DataTableConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, resources, SpriteAtlas, Component, Sprite, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, DataTable, theadTdConfig, tbodyTdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      resources = module.resources;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
      Sprite = module.Sprite;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      DataTable = module.DataTable;
    }, function (module) {
      theadTdConfig = module.theadTdConfig;
      tbodyTdConfig = module.tbodyTdConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "0f909ZNITlKZbdaItrGg6iS", "Bonus", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          menu = _decorator.menu;
      var Bonus = exports('Bonus', (_dec = ccclass('Bonus'), _dec2 = menu('MiniPoker/Bonus'), _dec3 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bonus, _Component);

        function Bonus() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dataTable", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "pokeSpriteAtlas", null);

          _defineProperty(_assertThisInitialized(_this), "thead", [{
            name: 'rank',
            title: '排名',
            width: 130
          }, {
            name: 'user_id',
            title: '玩家ID',
            width: 200
          }, {
            name: 'bet_amount',
            title: '赌注',
            width: 140
          }, {
            name: 'win_amount',
            title: '中奖金额',
            width: 200
          }, {
            name: 'win_date',
            title: '中奖时间',
            width: 200
          }]);

          _defineProperty(_assertThisInitialized(_this), "tbody", [{
            name: 'rank',
            title: '排名',
            width: 130
          }, {
            name: 'user_id',
            title: '玩家ID',
            width: 200
          }, {
            name: 'bet_amount',
            title: '赌注',
            width: 140
          }, {
            name: 'win_amount',
            title: '中奖金额',
            width: 200
          }, {
            name: 'win_date',
            title: '中奖时间',
            width: 200
          }]);

          _defineProperty(_assertThisInitialized(_this), "data", [{
            rank: 1,
            user_id: 't****001',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 2,
            user_id: 'a**001',
            bet_amount: 100,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 3,
            user_id: 'cc**001',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 4,
            user_id: 't****xx',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 5,
            user_id: 't****ew1',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 6,
            user_id: 't****001',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 6,
            user_id: 't****0bx1',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 7,
            user_id: 'b***sf01',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 8,
            user_id: 'tsfda**001',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }, {
            rank: 9,
            user_id: 't****mn',
            bet_amount: 1000,
            win_amount: 1000000,
            win_date: '2022-01-09 10:01'
          }]);

          return _this;
        }

        var _proto = Bonus.prototype;

        _proto.onLoad = function onLoad() {
          this.thead = this.thead.map(function (item) {
            return Object.assign({}, theadTdConfig, item);
          });
          this.tbody = this.tbody.map(function (item) {
            return Object.assign({}, tbodyTdConfig, item);
          });
        };

        _proto.start = function start() {
          console.log('Rank = start');
        };

        _proto.onEnable = function onEnable() {
          console.log('Rank = onEnable');
          this.getData();

          var _dataTable = this.dataTable.getComponent(DataTable);

          _dataTable.tableConfig.thead = this.thead;
          _dataTable.tableConfig.tbody = this.tbody;
          _dataTable.data = this.data;

          _dataTable.init();
        };

        _proto.onDisable = function onDisable() {
          console.log('Rank = onDisable');
        };

        _proto.getData = function getData() {// APIs.getRankList().then((res) => {
          //     // TODO
          // });
        };

        _proto.renderTbody = function renderTbody(prop, data, tdBodyPrefab) {
          var _this2 = this;

          var label = tdBodyPrefab.getChildByName('Label');
          label.active = false;
          var containerNode = new Node();
          tdBodyPrefab.addChild(containerNode);

          function setContent(spriteFrame) {
            var spriteNode = new Node();
            var sprite = spriteNode.addComponent(Sprite);
            sprite.spriteFrame = spriteFrame;
            containerNode.addChild(spriteNode);
          }

          if (!this.pokeSpriteAtlas) {
            resources.load('GameMiniPoker/popups_poke_words', SpriteAtlas, function (err, atlas) {
              _this2.pokeSpriteAtlas = atlas;
              var spriteFrame = atlas.getSpriteFrame('poke_001');
              setContent(spriteFrame);
            });
          } else {
            var spriteFrame = this.pokeSpriteAtlas.getSpriteFrame('poke_001');
            setContent(spriteFrame);
          }
        };

        return Bonus;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataTable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseDialog.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Label, Node, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "1b8bfTfqK1OmZv0wJ2z/pu/", "BaseDialog", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          menu = _decorator.menu;
      var BaseDialog = exports('BaseDialog', (_dec = ccclass('BaseDialog'), _dec2 = menu('MiniPoker/BaseDialog'), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseDialog, _Component);

        function BaseDialog() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "title", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btnClose", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "openCB", null);

          _defineProperty(_assertThisInitialized(_this), "closeCB", null);

          return _this;
        }

        var _proto = BaseDialog.prototype;

        _proto.show = function show() {
          var _this$openCB;

          this.node.active = true;
          (_this$openCB = this.openCB) === null || _this$openCB === void 0 ? void 0 : _this$openCB.call(this);
        };

        _proto.close = function close() {
          var _this$closeCB;

          this.node.active = false;
          (_this$closeCB = this.closeCB) === null || _this$closeCB === void 0 ? void 0 : _this$closeCB.call(this);
        };

        _proto.setTitle = function setTitle(title) {
          this.title.string = title;
        };

        return BaseDialog;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rank.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './dataTable.ts', './DataTableConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, UITransform, Size, Layout, resources, SpriteAtlas, Component, Sprite, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, DataTable, theadTdConfig, tbodyTdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Size = module.Size;
      Layout = module.Layout;
      resources = module.resources;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
      Sprite = module.Sprite;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      DataTable = module.DataTable;
    }, function (module) {
      theadTdConfig = module.theadTdConfig;
      tbodyTdConfig = module.tbodyTdConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "1cd231PsaBHla0BHB1vCERr", "Rank", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          menu = _decorator.menu;
      var Rank = exports('Rank', (_dec = ccclass('Rank'), _dec2 = menu('MiniPoker/Rank'), _dec3 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rank, _Component);

        function Rank() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dataTable", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "pokeSpriteAtlas", null);

          _defineProperty(_assertThisInitialized(_this), "thead", [{
            name: 'rank',
            title: '排名',
            width: 100
          }, {
            name: 'name',
            title: '玩家ID',
            width: 200
          }, {
            name: 'betAmount',
            title: '投注金额',
            width: 130
          }, {
            name: 'prize',
            title: '中奖金额',
            width: 160
          }, {
            name: 'prizeNum',
            title: '中奖号码',
            width: 250
          }]);

          _defineProperty(_assertThisInitialized(_this), "tbody", [{
            name: 'rank',
            title: '排名',
            width: 100
          }, {
            name: 'name',
            title: '玩家ID',
            width: 200
          }, {
            name: 'betAmount',
            title: '投注金额',
            width: 130
          }, {
            name: 'prize',
            title: '中奖金额',
            width: 160
          }, {
            name: 'prizeNum',
            title: '中奖号码',
            width: 250,
            render: _this.renderTbody
          }]);

          _defineProperty(_assertThisInitialized(_this), "data", [{
            rank: 1,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4,6'
          }, {
            rank: 2,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '11,2,3,4,5'
          }, {
            rank: 3,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,22,3,4,25'
          }, {
            rank: 4,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,32,33,4,5'
          }, {
            rank: 5,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,43,4,5'
          }, {
            rank: 3,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,24,3,4,5'
          }, {
            rank: 4,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4,5'
          }, {
            rank: 5,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4,5'
          }, {
            rank: 5,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4'
          }, {
            rank: 3,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4'
          }, {
            rank: 4,
            name: 'a***001',
            betAmount: 1000,
            prize: '100000',
            prizeNum: '1,2,3,4'
          }]);

          return _this;
        }

        var _proto = Rank.prototype;

        _proto.onLoad = function onLoad() {
          this.thead = this.thead.map(function (item) {
            return Object.assign({}, theadTdConfig, item);
          });
          this.tbody = this.tbody.map(function (item) {
            return Object.assign({}, tbodyTdConfig, item);
          });
        };

        _proto.start = function start() {
          console.log('Rank = start');
        };

        _proto.onEnable = function onEnable() {
          console.log('Rank = onEnable', this.dataTable);
          this.getData();

          var _dataTable = this.dataTable.getComponent(DataTable);

          _dataTable.tableConfig.thead = this.thead;
          _dataTable.tableConfig.tbody = this.tbody;
          _dataTable.data = this.data;

          _dataTable.init();
        };

        _proto.onDisable = function onDisable() {
          console.log('Rank = onDisable');
        };

        _proto.getData = function getData() {// APIs.getRankList().then((res) => {
          //     // TODO
          // });
        };

        _proto.renderTbody = function renderTbody(prop, data, tdBodyPrefab) {
          var _this2 = this;

          var label = tdBodyPrefab.getChildByName('Label');
          label.active = false;
          var transform = tdBodyPrefab.getComponent(UITransform);
          transform.setContentSize(new Size(prop.width, prop.height));
          var containerNode = new Node();
          var layout = containerNode.addComponent(Layout);
          layout.type = Layout.Type.HORIZONTAL;
          layout.resizeMode = Layout.ResizeMode.CONTAINER;
          tdBodyPrefab.addChild(containerNode);

          function setContent(spriteFrame) {
            var spriteNode = new Node();
            var sprite = spriteNode.addComponent(Sprite);
            sprite.spriteFrame = spriteFrame;
            containerNode.addChild(spriteNode);
          }

          function parseData(atlas) {
            if (!data) {
              return;
            }

            var resultNums = data.split(',');
            var num = '';
            resultNums.forEach(function (item) {
              if (item) {
                num = item.padStart(2, '0');
                var spriteFrame = atlas.getSpriteFrame("poke_0" + num);
                setContent(spriteFrame);
              }
            });
          }

          if (!this.pokeSpriteAtlas) {
            resources.load('GameMiniPoker/popups_poke_words', SpriteAtlas, function (err, atlas) {
              _this2.pokeSpriteAtlas = atlas;
              parseData(atlas);
            });
          } else {
            parseData(this.pokeSpriteAtlas);
          }
        };

        return Rank;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataTable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerItem.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, sp, Component, _inheritsLoose, _defineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "2a202JkmKVEVpoj0DHG16NX", "PokerItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerItem = exports('PokerItem', (_dec = ccclass('PokerItem'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerItem, _Component);

        function PokerItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "animName", '');

          _defineProperty(_assertThisInitialized(_this), "colNum", 0);

          _defineProperty(_assertThisInitialized(_this), "isFastScroll", false);

          return _this;
        }

        var _proto = PokerItem.prototype;

        _proto.start = function start() {
          var _this2 = this;

          var delaySecond = 0;

          if (!this.isFastScroll) {
            delaySecond = 0.15;
          }

          this.scheduleOnce(function () {
            _this2.node.getChildByName("Anim").getComponent(sp.Skeleton).setAnimation(0, _this2.animName, false);
          }, delaySecond * this.colNum);
        };

        _proto.setAnimData = function setAnimData(name, colNum, isFastScroll) {
          this.animName = name;
          this.colNum = colNum;
          this.isFastScroll = isFastScroll;
        };

        return PokerItem;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokersScrollContainer.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, tween, Vec3, Component, _inheritsLoose, _defineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "30419NHr0dE55fKGMMvIsDe", "PokersScrollContainer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokersScrollContainer = exports('PokersScrollContainer', (_dec = ccclass('PokersScrollContainer'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokersScrollContainer, _Component);

        function PokersScrollContainer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isFastScroll", false);

          _defineProperty(_assertThisInitialized(_this), "scrollOnceTime", 0.15);

          return _this;
        }

        var _proto = PokersScrollContainer.prototype;

        _proto.start = function start() {} // 开始滚动的回弹
        ;

        _proto.pokerMoveStart = function pokerMoveStart(delaySecond, index, finishCallback) {
          var _this2 = this;

          this.tweenParallel = tween(this.node) // 5组扑克开始滚动延迟时间递增
          .delay(this.isFastScroll ? 0 : delaySecond) // 开始时回弹
          .by(0.2, {
            position: new Vec3(0, 20, 0)
          }, {
            easing: "quartOut"
          }).by(0.1, {
            position: new Vec3(0, -20, 0)
          }, {
            "onComplete": function onComplete() {
              _this2.pokerMoveContinue(finishCallback);
            }
          }).start();
        } // 重复滚动（直到获取到真实数据停止滚动，并调用pokerMoveMore拼接后续滚动，每列拼接的滚动次数递增）
        ;

        _proto.pokerMoveContinue = function pokerMoveContinue(finishCallback) {
          var _this3 = this;

          this.tweenParallel1 = tween(this.node) // 重复多次滚动（获取到服务器数据时添加真实数据，滚动到真实结果扑克时停止滚动）
          .by(this.scrollOnceTime, {
            position: new Vec3(0, -180, 0)
          }, {
            //每滚动一张牌回调
            "onComplete": function onComplete(e) {
              finishCallback(_this3.tweenParallel1);
            }
          }).repeatForever().start();
        } // 拼接滚动，每列拼接的滚动次数递增，结束后调用pokerMoveEnd
        ;

        _proto.pokerMoveMore = function pokerMoveMore(i, oneFinishCallback, finishCallback) {
          var _this4 = this;

          var repeatTimes = this.isFastScroll ? 0 : i;
          this.tweenParallel2 = tween(this.node) // 重复多次滚动（获取到服务器数据时添加真实数据，滚动到真实结果扑克时停止滚动）
          .by(this.scrollOnceTime, {
            position: new Vec3(0, -180, 0)
          }, {
            "onComplete": function onComplete() {
              oneFinishCallback();
            }
          }).repeat(repeatTimes + 2).call(function () {
            _this4.pokerMoveEnd(i, finishCallback);
          }).start();
        } // 滚动结束回弹
        ;

        _proto.pokerMoveEnd = function pokerMoveEnd(i, finishCallback) {
          this.tweenParallel3 = tween(this.node) // 结束时回弹
          .by(0.1, {
            position: new Vec3(0, -20, 0)
          }, {
            easing: "quartOut"
          }).by(0.1, {
            position: new Vec3(0, 20, 0)
          }, {
            "onComplete": function onComplete() {
              finishCallback(i);
            }
          }).start();
        };

        return PokersScrollContainer;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMiniPoker.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './methods.ts', './BaseDialog.ts', './Enums.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Prefab, NodePool, Toggle, instantiate, Vec3, find, Button, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, fillNumber, getRandomItemFromArray, BaseDialog, MiniPokerType;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      NodePool = module.NodePool;
      Toggle = module.Toggle;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      find = module.find;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      fillNumber = module.fillNumber;
      getRandomItemFromArray = module.getRandomItemFromArray;
    }, function (module) {
      BaseDialog = module.BaseDialog;
    }, function (module) {
      MiniPokerType = module.MiniPokerType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

      cclegacy._RF.push({}, "58d26VLoBBMQa8QC67eOvUd", "GameMiniPoker", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameMiniPoker = exports('GameMiniPoker', (_dec = ccclass('GameMiniPoker'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMiniPoker, _Component);

        function GameMiniPoker() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "Pokers", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PokerScrollContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PokerItem", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "helpDialog", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "rankDialog", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "historyDialog", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bonusDialog", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "BetButtonContainer", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "BetAmountButtons", _descriptor9, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "allPokerArray", []);

          _defineProperty(_assertThisInitialized(_this), "pokerArray", []);

          _defineProperty(_assertThisInitialized(_this), "pokersNodePool", null);

          _defineProperty(_assertThisInitialized(_this), "isGotResult", false);

          _defineProperty(_assertThisInitialized(_this), "isScrolling", false);

          _defineProperty(_assertThisInitialized(_this), "pokerValues", []);

          _defineProperty(_assertThisInitialized(_this), "isFirstScroll", true);

          _defineProperty(_assertThisInitialized(_this), "isFastScroll", false);

          _defineProperty(_assertThisInitialized(_this), "scrollParams", {
            resAnimDelay: 0.15 // 结果牌按列出现动画的延迟

          });

          _defineProperty(_assertThisInitialized(_this), "selectedAmount", '1000');

          return _this;
        }

        var _proto = GameMiniPoker.prototype;

        _proto.start = function start() {
          this.pokerValues = window._APPDATA.values; // 装载52张扑克的对象池

          this.pokersNodePool = new NodePool();

          for (var i = 0; i < 52; i++) {
            var pokerData = {
              name: "" + Object.keys(MiniPokerType)[i % 4] + (i % 13 + 1),
              type: i % 4 + 1,
              num: i % 13 + 1
            }; // 扑克数据数组

            this.allPokerArray.push(pokerData); // 生成扑克节点，放入对象池

            var poker = this.createNewPoker(pokerData, false, false);
            this.pokersNodePool.put(poker);
          }

          console.log(this.allPokerArray);
          this.pokerInit();
          this.BetAmountButtons.children[0].getComponent(Toggle).isChecked = true;
        } // 扑克节点初始化(每次滚动之前初始化)
        ;

        _proto.pokerInit = function pokerInit() {
          for (var i = 0; i < 5; i++) {
            var item_container = instantiate(this.PokerScrollContainer);
            this.Pokers.addChild(item_container);
            var scrollContent = this.Pokers.children[i].getChildByName("Content"); // 移除当前列除第一张以外的所有牌

            if (scrollContent.children.length > 0) {
              var pokers = scrollContent.children;

              for (var p = pokers.length - 1; p > 0; p--) {
                this.pokersNodePool.put(pokers[p]);
                scrollContent.position = new Vec3(0, 0, 0);
              }
            } // 每列扑克初始数量，如果是快速滚动每列数量一致，如果是普通滚动每列数量递增


            var N = 2;

            if (this.isFastScroll) {
              // 在上方随机补充两张牌
              for (var j = 0; j < N; j++) {
                scrollContent.addChild(this.getNewPoker());
              }
            } else {
              for (var k = 0; k < i + N; k++) {
                scrollContent.addChild(this.getNewPoker());
              }
            }
          }
        } // 获取当前显示的5张牌数据
        ;

        _proto.getShowPokers = function getShowPokers() {
          var res = []; // 第一次滚动，取每列的第一张牌数据

          if (this.isFirstScroll) {
            for (var i = 0; i < 5; i++) {
              var scrollContent = this.Pokers.children[i].getChildByName("Content");
              res.push(scrollContent.children[0].pokerData);
            }
          } else {
            res = this.pokerValues;
          }

          return res;
        }
        /**
         * 生成一张新扑克
         * @param pokerData 扑克数据，包括花色和牌号
         * @param isResult 是否是结果牌
         * @param isSpecialResult 是否是特殊结果牌（比如对子、顺子需要播放特殊动画）
         * @param colNum 当前为第几列的牌（只有渲染结果牌的时候生效）
         * @returns {Node} 返回实例化的扑克节点 
         */
        ;

        _proto.createNewPoker = function createNewPoker(pokerData, isResult, isSpecialResult, colNum) {
          var poker_item = instantiate(this.PokerItem);
          poker_item["pokerData"] = pokerData;
          poker_item["isResult"] = isResult;
          var specialName = isSpecialResult ? 'win' : 'n'; // n:普通牌显示(n_01_001)   win:特殊结果牌动画展示(win_01_001)

          var animationName = specialName + "_0" + pokerData.type + "_0" + fillNumber(pokerData.num); // 特殊牌开奖时有动画，动画按照列数延迟播放。如果是快速滚动则不开启延迟

          poker_item.getComponent("PokerItem").setAnimData(animationName, colNum, this.isFastScroll); // poker_item.getChildByName("Label").getComponent(Label).string = `${pokerData.name}`;

          return poker_item;
        } // 获取一张新扑克节点(优先从对象池获取)
        ;

        _proto.getNewPoker = function getNewPoker() {
          // 判断扑克对象池是否有剩余对象，否则create新节点
          if (this.pokersNodePool.size() > 0) {
            var poker = this.pokersNodePool.get();
            return poker;
          } else {
            return this.createNewPoker(getRandomItemFromArray(this.allPokerArray), false, false);
          }
        } // 扑克滚动
        ;

        _proto.pokerMove = function pokerMove() {
          var _this2 = this;

          this.pokerInit();
          this.isGotResult = false; // 滚动过程中不允许再滚动

          if (this.isScrolling) {
            return;
          }

          this.pokerMoveStarted();

          var _loop = function _loop(i) {
            // 单列滚动容器
            var scrollContent = _this2.Pokers.children[i].getChildByName("Content"); // 单列滚动容器上的脚本组件


            var scrollContentScript = scrollContent.getComponent("PokersScrollContainer");
            scrollContentScript.isFastScroll = _this2.isFastScroll; // 单列滚动开始，i=列数

            scrollContentScript.pokerMoveStart(i * 0.1, i, function (tweenNode) {
              // 将滚动结束的扑克节点放回对象池
              if (scrollContent.children[0].isResult) {
                // 第一张牌为上一次的结果牌，不放入节点池
                scrollContent.children[0].destroy();
              } else {
                _this2.pokersNodePool.put(scrollContent.children[0]);
              } // scrollContent使用的layout组件在子节点变动之后会重新计算高度，所以position要归0


              scrollContent.position = new Vec3(0, 0, 0); // 出现结果

              if (_this2.isGotResult) {
                tweenNode.stop(); // 渲染结果

                scrollContent.addChild(_this2.createNewPoker(_this2.pokerValues[i], true, true, i + 1)); // 拼接结束之前的滚动，完全结束后回调
                // 快速滚动不需要按列拼接，统一拼接2张

                scrollContentScript.pokerMoveMore(i, function () {
                  // 每张牌滚动结束的回调
                  _this2.pokersNodePool.put(scrollContent.children[0]);

                  scrollContent.position = new Vec3(0, 0, 0);
                }, function (I) {
                  // 当前列全部滚动结束的回调
                  if (I == 4) {
                    // 停止滚动
                    _this2.pokerMoveFinished();
                  }
                }); // 未出现结果，继续滚动
              } else {
                // 在上方新增一张扑克
                scrollContent.addChild(_this2.getNewPoker());
              }
            });
          };

          for (var i = 0; i < 5; i++) {
            _loop(i);
          }
        } // 扑克停止滚动
        ;

        _proto.pokerMoveStop = function pokerMoveStop() {
          this.isGotResult = true;
        };

        _proto.openHelp = function openHelp() {
          this.openDialog('HelpScreen', this.helpDialog);
        };

        _proto.openRank = function openRank() {
          this.openDialog('RankScreen', this.rankDialog);
        };

        _proto.openHistory = function openHistory() {
          this.openDialog('HistoryScreen', this.historyDialog);
        };

        _proto.openBonus = function openBonus() {
          this.openDialog('BonusScreen', this.bonusDialog);
        };

        _proto.openDialog = function openDialog(dialogContainerCanvasPathName, curDialogNode) {
          var screen = find(dialogContainerCanvasPathName);
          var dialog = curDialogNode === null || curDialogNode === void 0 ? void 0 : curDialogNode.getComponent(BaseDialog);
          screen.active = true;

          dialog.closeCB = function () {
            screen.active = false;
          };

          dialog.show();
        } // 切换快速滚动模式
        ;

        _proto.toggleFastScrollMode = function toggleFastScrollMode(e) {
          this.isFastScroll = e.isChecked;
        } // 扑克开始滚动
        ;

        _proto.pokerMoveStarted = function pokerMoveStarted() {
          this.isScrolling = true;
          console.log("\u5F00\u59CB\u6447\u53F7,\u91D1\u989D" + this.selectedAmount + ",\u662F\u5426\u5FEB\u901F" + this.isFastScroll); // 滚动过程中禁止操控按钮,滚动结束允许操控

          this.BetButtonContainer.children.forEach(function (item, index) {
            var comp = item.getComponent(Toggle) ? item.getComponent(Toggle) : item.getComponent(Button);
            comp.interactable = false;
          });
        } // 扑克滚动结束
        ;

        _proto.pokerMoveFinished = function pokerMoveFinished() {
          this.isScrolling = false;
          this.isFirstScroll = false; // 滚动过程中禁止操控按钮,滚动结束允许操控

          this.BetButtonContainer.children.forEach(function (item, index) {
            var comp = item.getComponent(Toggle) ? item.getComponent(Toggle) : item.getComponent(Button);
            comp.interactable = true;
          });
        } // 金额选择
        ;

        _proto.selectAmount = function selectAmount(e, a) {
          e.target.getComponent(Toggle).interactable = false;
          this.BetAmountButtons.children.forEach(function (item, index) {
            if (item.name != e.target.name) {
              item.getComponent(Toggle).isChecked = false;
              item.getComponent(Toggle).interactable = true;
            }
          });
          this.selectedAmount = a;
        };

        return GameMiniPoker;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Pokers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PokerScrollContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PokerItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "helpDialog", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rankDialog", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "historyDialog", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bonusDialog", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "BetButtonContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "BetAmountButtons", [_dec10], {
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

System.register("chunks:///_virtual/JackPot.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Prefab, instantiate, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "8e8e6zFcUVPeYEemWNwudzM", "JackPot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var JackPot = exports('JackPot', (_dec = ccclass('JackPot'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JackPot, _Component);

        function JackPot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "JackPotScroll", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "value", 1234567890);

          _defineProperty(_assertThisInitialized(_this), "valueArray", [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

          return _this;
        }

        var _proto = JackPot.prototype;

        _proto.start = function start() {
          // 初始化12个数字
          for (var i = 0; i < 12; i++) {
            var scrollItem = instantiate(this.JackPotScroll);
            this.node.addChild(scrollItem);
          }
        };

        return JackPot;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "JackPotScroll", [_dec2], {
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

System.register("chunks:///_virtual/History.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './dataTable.ts', './DataTableConfig.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, SpriteFrame, UITransform, Size, Layout, resources, SpriteAtlas, Component, Sprite, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, DataTable, theadTdConfig, tbodyTdConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Size = module.Size;
      Layout = module.Layout;
      resources = module.resources;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
      Sprite = module.Sprite;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      DataTable = module.DataTable;
    }, function (module) {
      theadTdConfig = module.theadTdConfig;
      tbodyTdConfig = module.tbodyTdConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "94b89kY2BdM44VcqdUjiLvc", "History", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          menu = _decorator.menu;
      var History = exports('History', (_dec = ccclass('History'), _dec2 = menu('MiniPoker/History'), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(History, _Component);

        function History() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dataTable", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bgSpFrame", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "pokeSpriteAtlas", null);

          _defineProperty(_assertThisInitialized(_this), "thead", [{
            name: 'time',
            title: '开奖时间',
            width: 200
          }, {
            name: 'result',
            title: '结果',
            width: 280
          }, {
            name: 'betAmount',
            title: '投注金额',
            width: 140
          }, {
            name: 'winOrLose',
            title: '输赢',
            width: 180
          }]);

          _defineProperty(_assertThisInitialized(_this), "tbody", [{
            name: 'time',
            title: '开奖时间',
            width: 200
          }, {
            name: 'result',
            title: '结果',
            width: 280,
            render: _this.renderTbody
          }, // , render: this.renderTbody
          {
            name: 'betAmount',
            title: '投注金额',
            width: 140
          }, {
            name: 'winOrLose',
            title: '输赢',
            width: 180
          }]);

          _defineProperty(_assertThisInitialized(_this), "data", [{
            time: '2022-01-01',
            result: '1,2,3,4,5',
            betAmount: 1000,
            winOrLose: '200000'
          }, {
            time: '2022-01-02',
            result: '1,2,9,4,5',
            betAmount: 1000,
            winOrLose: '200000'
          }, {
            time: '2022-01-03',
            result: '1,2,10,4,5',
            betAmount: 1000,
            winOrLose: '200000'
          }, {
            time: '2022-01-04',
            result: '1,2,3,11,5',
            betAmount: 1000,
            winOrLose: '102000000000'
          }, {
            time: '2022-01-05',
            result: '1,12,3,4,5',
            betAmount: 1000,
            winOrLose: '200000'
          }, {
            time: '2022-01-06',
            result: '1,2,13,4,5',
            betAmount: 1000,
            winOrLose: '100000'
          }, {
            time: '2022-01-07',
            result: '21,2,3,4,5',
            betAmount: 1000,
            winOrLose: '100000'
          }, {
            time: '2022-01-08',
            result: '1,22,3,4,5',
            betAmount: 1000,
            winOrLose: '100000'
          }, {
            time: '2022-01-09',
            result: '1,2,23,4,5',
            betAmount: 1000,
            winOrLose: '100000'
          }, {
            time: '2022-01-10',
            result: '1,2,3,34,5',
            betAmount: 1000,
            winOrLose: '100000'
          }, {
            time: '2022-01-01',
            result: '1,2,3,4,5',
            betAmount: 1000,
            winOrLose: '100000'
          }]);

          return _this;
        }

        var _proto = History.prototype;

        _proto.onLoad = function onLoad() {
          this.thead = this.thead.map(function (item) {
            return Object.assign({}, theadTdConfig, item);
          });
          this.tbody = this.tbody.map(function (item) {
            return Object.assign({}, tbodyTdConfig, item);
          });
        };

        _proto.start = function start() {
          console.log('History = start');
        };

        _proto.onEnable = function onEnable() {
          console.log('History = onEnable', this.dataTable);
          this.getData();

          var _dataTable = this.dataTable.getComponent(DataTable);

          _dataTable.tableConfig.thead = this.thead;
          _dataTable.tableConfig.tbody = this.tbody;
          _dataTable.data = this.data;

          _dataTable.init();
        };

        _proto.onDisable = function onDisable() {
          console.log('History = onDisable');
        };

        _proto.getData = function getData() {// APIs.getHistoryList().then((res) => {
          //     // TODO
          // });
        };

        _proto.renderTbody = function renderTbody(prop, data, tdBodyPrefab) {
          var _this2 = this;

          var label = tdBodyPrefab.getChildByName('Label');
          var sprite = tdBodyPrefab.getChildByName('Sprite');
          label.removeFromParent();
          sprite.removeFromParent();
          var transform = tdBodyPrefab.getComponent(UITransform);
          transform.setContentSize(new Size(prop.width, prop.height));
          var containerNode = new Node();
          var layout = containerNode.addComponent(Layout);
          layout.type = Layout.Type.HORIZONTAL;
          layout.resizeMode = Layout.ResizeMode.CONTAINER;
          tdBodyPrefab.addChild(containerNode);

          function setContent(spriteFrame) {
            var spriteNode = new Node();
            var sprite = spriteNode.addComponent(Sprite);
            sprite.spriteFrame = spriteFrame;
            containerNode.addChild(spriteNode);
          }

          function parseData(atlas) {
            if (!data) {
              return;
            }

            var resultNums = data.split(',');
            var num = '';
            resultNums.forEach(function (item) {
              if (item) {
                num = item.padStart(2, '0');
                var spriteFrame = atlas.getSpriteFrame("poke_0" + num);
                setContent(spriteFrame);
              }
            });
          }

          if (!this.pokeSpriteAtlas) {
            resources.load('GameMiniPoker/popups_poke_words', SpriteAtlas, function (err, atlas) {
              _this2.pokeSpriteAtlas = atlas;
              parseData(atlas);
            });
          } else {
            parseData(this.pokeSpriteAtlas);
          }
        };

        return History;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataTable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgSpFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataTableConfig.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c3235ubTQNAaYn81RQu09cy", "DataTableConfig", undefined);

      var theadTdConfig = exports('theadTdConfig', {
        width: 100,
        height: 70,
        fontSize: 25,
        color: '#f5b84b',
        isBold: true,
        fontFamily: 'Bookman'
      });
      var tbodyTdConfig = exports('tbodyTdConfig', {
        width: 100,
        height: 70,
        fontSize: 18,
        color: '#f5b84b',
        isBold: false,
        fontFamily: 'Bookman'
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/APIs.ts", ['cc', './HttpRequest.ts'], function (exports) {
  'use strict';

  var cclegacy, HttpRequest;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HttpRequest = module.HttpRequest;
    }],
    execute: function () {
      exports('getRankList', getRankList);

      cclegacy._RF.push({}, "ccad9zy3E9FCayBrsMf/TyN", "APIs", undefined);

      function getRankList() {
        return HttpRequest.get('/');
      }

      var APIs = exports('default', {
        getRankList: getRankList
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enums.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('MiniPokerType', void 0);

      cclegacy._RF.push({}, "cd0ecAFSYpFU7//q5romjf4", "Enums", undefined); // https://www.typescriptlang.org/docs/handbook/enums.html


      var MiniPokerType;

      (function (MiniPokerType) {
        MiniPokerType["\u9ED1\u6843"] = "\u9ED1\u6843";
        MiniPokerType["\u65B9\u5757"] = "\u65B9\u5757";
        MiniPokerType["\u7EA2\u6843"] = "\u7EA2\u6843";
        MiniPokerType["\u6885\u82B1"] = "\u6885\u82B1";
      })(MiniPokerType || (MiniPokerType = exports('MiniPokerType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniPokerBundle", ['./DataTableConfig.ts', './Bonus.ts', './BaseDialog.ts', './Rank.ts', './PokerItem.ts', './PokersScrollContainer.ts', './Enums.ts', './GameMiniPoker.ts', './JackPot.ts', './History.ts', './APIs.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MiniPokerBundle', 'chunks:///_virtual/MiniPokerBundle'); 
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