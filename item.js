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

var _classSet = require('class-set');

var _classSet2 = _interopRequireWildcard(_classSet);

var ItemGroupItem = _React2['default'].createClass({
  displayName: 'ItemGroupItem',

  propTypes: {
    className: _React2['default'].PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      isDragHandleGrabbed: false
    };
  },

  handleDragStart: function handleDragStart(event) {
    if (!this.state.isDragHandleGrabbed) {
      event.preventDefault();
      return false;
    }
    if (this.props.handleDragStart) {
      this.props.handleDragStart(event);
    }
  },

  handleMouseDown: function handleMouseDown(event) {
    var handleElement = _React2['default'].findDOMNode(this.refs.handle);
    var isDragHandleGrabbed = handleElement.contains(event.target);
    this.setState({ isDragHandleGrabbed: isDragHandleGrabbed });
  },

  render: function render() {
    var classes = _classSet2['default'](this.props.className, 'ReactSortableItemGroups__item');

    return _React2['default'].createElement(
      _SortableItem2['default'],
      {
        className: classes,
        type: this.props.type,
        data: this.props.data,
        handleDrop: this.props.handleDrop,
        handleDragStart: this.handleDragStart,
        handleDragEnd: this.props.handleDragEnd,
        handleAcceptTest: this.props.handleAcceptTest },
      _React2['default'].createElement(
        'li',
        { onMouseDown: this.handleMouseDown },
        _React2['default'].createElement(_DragHandle2['default'], { ref: 'handle' }),
        _React2['default'].createElement(
          'div',
          { className: 'ReactSortableItemGroups__item-content' },
          this.props.children
        )
      )
    );
  }
});

exports['default'] = ItemGroupItem;
module.exports = exports['default'];
