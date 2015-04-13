import React from 'react'
import SortableItem from 'react-sortable-item'
import DragHandle from './drag-handle.es6'
import classSet from 'class-set'

const ItemGroupItem = React.createClass({
  displayName: 'ItemGroupItem',

  propTypes: {
    className: React.PropTypes.string
  },

  getInitialState () {
    return {
      isDragHandleGrabbed: false
    }
  },

  handleDragStart (event) {
    if(!this.state.isDragHandleGrabbed) {
      event.preventDefault()
      return false
    }
    if(this.props.handleDragStart) {
      this.props.handleDragStart(event)
    }
  },

  handleMouseDown (event) {
    const handleElement = React.findDOMNode(this.refs.handle)
    const isDragHandleGrabbed = handleElement.contains(event.target)
    this.setState({isDragHandleGrabbed})
  },

  render () {
    const classes = classSet(this.props.className, 'ReactSortableItemGroups__item')

    return (
      <SortableItem
          className={classes}
          type={this.props.type}
          data={this.props.data}
          handleDrop={this.props.handleDrop}
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.props.handleDragEnd}
          handleAcceptTest={this.props.handleAcceptTest}>
        <li onMouseDown={this.handleMouseDown}>
          <DragHandle ref="handle" />
          <div className="ReactSortableItemGroups__item-content">
            {this.props.children}
          </div>
        </li>
      </SortableItem>
    )
  }
})

export default ItemGroupItem
