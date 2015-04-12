import React from 'react'

const Groups = React.createClass({
  displayName: 'Groups',

  render() {
    return (
      <ol className="ItemGroup-list">
        {this.props.children}
      </ol>
    )
  }
})

export default Groups
