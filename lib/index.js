'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _silkSwipe = require('silk-swipe');

var _silkSwipe2 = _interopRequireDefault(_silkSwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSwipe = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ReactSwipe, _Component);

    function ReactSwipe() {
        (0, _classCallCheck3.default)(this, ReactSwipe);
        return (0, _possibleConstructorReturn3.default)(this, (ReactSwipe.__proto__ || (0, _getPrototypeOf2.default)(ReactSwipe)).apply(this, arguments));
    }

    (0, _createClass3.default)(ReactSwipe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var swipeOptions = this.props.swipeOptions;


            this.swipe = (0, _silkSwipe2.default)(this.container, swipeOptions);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.swipe.kill();
            delete this.swipe;
        }
    }, {
        key: 'getPos',
        value: function getPos() {
            return this.swipe.getPos();
        }
    }, {
        key: 'getNumSlides',
        value: function getNumSlides() {
            return this.swipe.getNumSlides();
        }
    }, {
        key: 'slide',
        value: function slide() {
            var _swipe;

            (_swipe = this.swipe).slide.apply(_swipe, arguments);
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.swipe.prev();
        }
    }, {
        key: 'next',
        value: function next() {
            this.swipe.next();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                id = _props.id,
                className = _props.className,
                style = _props.style,
                children = _props.children; // eslint-disable-line react/prop-types

            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(_ref) {
                        _this2.container = _ref;
                    },
                    id: id, className: 'react-swipe-container ' + className,
                    style: style.container
                },
                _react2.default.createElement(
                    'div',
                    { style: style.wrapper },
                    _react2.default.Children.map(children, function (child) {
                        if (child instanceof Object) {
                            return _react2.default.cloneElement(child, {
                                style: child.props.style ? (0, _assign2.default)(child.props.style, style.child) : style.child
                            });
                        }
                        return child;
                    })
                )
            );
        }
    }]);
    return ReactSwipe;
}(_react.Component), _class.propTypes = {
    swipeOptions: _react.PropTypes.shape({
        startSlide: _react.PropTypes.number,
        speed: _react.PropTypes.number,
        auto: _react.PropTypes.number,
        continuous: _react.PropTypes.bool,
        disableScroll: _react.PropTypes.bool,
        stopPropagation: _react.PropTypes.bool,
        swiping: _react.PropTypes.func,
        callback: _react.PropTypes.func,
        transitionEnd: _react.PropTypes.func
    }),
    style: _react.PropTypes.shape({
        container: _react.PropTypes.object,
        wrapper: _react.PropTypes.object,
        child: _react.PropTypes.object
    }),
    id: _react.PropTypes.string,
    className: _react.PropTypes.string
}, _class.defaultProps = {
    swipeOptions: {},
    style: {
        container: {
            overflow: 'hidden',
            visibility: 'hidden',
            position: 'relative'
        },

        wrapper: {
            overflow: 'hidden',
            position: 'relative'
        },

        child: {
            float: 'left',
            width: '100%',
            position: 'relative',
            transitionProperty: 'transform',
            minHeight: '1px'
        }
    },
    className: ''
}, _temp);
exports.default = ReactSwipe;