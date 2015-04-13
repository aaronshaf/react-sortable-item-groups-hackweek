import React from 'react'
import SortableItem from 'react-sortable-item'
import DragHandle from './drag-handle.es6'
import classSet from 'class-set'

const ItemGroupItem = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  displayName: 'ItemGroupItem',

  render() {
    const classes = classSet(this.props.className, 'ItemGroup-item')

    return (
      <SortableItem
          className={classes}
          type={this.props.type}
          data={this.props.data}
          handleDrop={this.props.handleDrop}
          handleDragStart={this.props.handleDragStart}
          handleDragEnd={this.props.handleDragEnd}
          handleAcceptTest={this.props.handleAcceptTest}>
        <li className="ItemGroup-item">
          <DragHandle />
          <div className="ItemGroup-item-content">
            {this.props.children}
          </div>
        </li>
      </SortableItem>
    )
  }
})

export default ItemGroupItem
