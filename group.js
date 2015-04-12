'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _ArrowDown = require('./arrow-down.es6');

var _ArrowDown2 = _interopRequireWildcard(_ArrowDown);

var _classSet = require('class-set');

var _classSet2 = _interopRequireWildcard(_classSet);

var ItemGroup = _React2['default'].createClass({
  displayName: 'ItemGroup',

  getInitialState: function getInitialState() {
    return {
      expanded: true
    };
  },

  handleExpandToggle: function handleExpandToggle() {
    this.setState({ expanded: !this.state.expanded });
  },

  render: function render() {
    var hasExpandedChildren = this.props.children && this.state.expanded;
    var classes = _classSet2['default']('ItemGroup', {
      'ItemGroup--expanded': this.state.expanded,
      'ItemGroup--collapsed': !this.state.expanded
    });

    return _React2['default'].createElement(
      'li',
      { className: classes },
      _React2['default'].createElement(
        'div',
        { className: 'ItemGroup-header' },
        _React2['default'].createElement(
          'button',
          { className: 'ItemGroup__expand-button', onClick: this.handleExpandToggle },
          _React2['default'].createElement(
            'span',
            { className: 'ItemGroup__expand-arrow' },
            _React2['default'].createElement(_ArrowDown2['default'], null)
          )
        ),
        _React2['default'].createElement(
          'div',
          { className: 'ItemGroup-title' },
          this.props.title || 'Empty'
        )
      ),
      _React2['default'].createElement(
        'ol',
        { className: 'ItemGroup-itemlist' },
        hasExpandedChildren && this.props.children
      )
    );
  }
});

exports['default'] = ItemGroup;
module.exports = exports['default'];
