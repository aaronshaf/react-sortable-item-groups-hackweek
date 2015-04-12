import React from 'react'
import Group from '../../group.es6'
import ModuleItem from './module-item'

class Module extends React.Component {
  render () {
    let items = this.props.items

    let itemComponents = items.map((item) => {
      return (
        <ModuleItem key={item.id} {...item} items={items} />
      )
    })

    return (
      <Group key={this.props.id} {...this.props}>
        {itemComponents}
      </Group>
    )
  }
}

export default Module
