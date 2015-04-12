'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _SortableItem = require('react-sortable-item');

var _SortableItem2 = _interopRequireWildcard(_SortableItem);

var _DragHandle = require('./drag-handle.es6');

var _DragHandle2 = _interopRequireWildcard(_DragHandle);

// import classSet from 'class-set'

var ItemGroupItem = _React2['default'].createClass({
  propTypes: {
    className: _React2['default'].PropTypes.string
  },

  displayName: 'ItemGroupItem',

  render: function render() {
    return _React2['default'].createElement(
      _SortableItem2['default'],
      {
        className: this.props.className,
        type: this.props.type,
        data: this.props.data,
        handleDrop: this.props.handleDrop,
        handleDragStart: this.props.handleDragStart,
        handleDragEnd: this.props.handleDragEnd,
        handleAcceptTest: this.props.handleAcceptTest },
      _React2['default'].createElement(
        'li',
        { className: 'ItemGroup-item' },
        _React2['default'].createElement(_DragHandle2['default'], null),
        _React2['default'].createElement(
          'div',
          { className: 'ItemGroup-item-content' },
          this.props.children
        )
      )
    );
  }
});

exports['default'] = ItemGroupItem;
module.exports = exports['default'];
