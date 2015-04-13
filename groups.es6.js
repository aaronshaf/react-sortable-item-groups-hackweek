import React from 'react'

const Groups = React.createClass({
  displayName: 'Groups',

  render() {
    return (
      <ol className="ReactSortableItemGroups">
        {this.props.children}
      </ol>
    )
  }
})

export default Groups
