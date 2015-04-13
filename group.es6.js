import React from 'react'
import ArrowDown from './arrow-down.es6'
import classSet from 'class-set'

const ItemGroup = React.createClass({
  displayName: 'ItemGroup',

  getInitialState() {
    return {
      expanded: true
    }
  },

  handleExpandToggle() {
    this.setState({expanded: !this.state.expanded})
  },

  render() {
    const hasExpandedChildren = this.props.children && this.state.expanded
    const classes = classSet('ReactSortableItemGroups__group', {
      'ItemGroup--expanded': this.state.expanded,
      'ItemGroup--collapsed': !this.state.expanded
    })

    return (
      <li className={classes}>
        <div className="ReactSortableItemGroups__group-header">
          <button className="ReactSortableItemGroups__expand-button" onClick={this.handleExpandToggle}>
            <span className="ReactSortableItemGroups__expand-arrow">
              <ArrowDown />
            </span>
          </button>
          <div className="ReactSortableItemGroups__group-title">{this.props.title || 'Empty'}</div>
        </div>
        <ol className="ItemGroup-itemlist">
          {hasExpandedChildren && this.props.children}
        </ol>
      </li>
    )
  }
})

export default ItemGroup

