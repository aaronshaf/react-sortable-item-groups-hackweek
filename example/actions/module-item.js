import Uniflow from 'uniflow'
import ModuleItemsStore from '../stores/module-items'
// import ModulesStore at bottom due to circular dependency
import pull from 'lodash-node/modern/array/pull'
import findIndex from 'lodash-node/modern/array/findIndex'
import cloneDeep from 'lodash-node/modern/lang/cloneDeep'

var ModuleItemActions = Uniflow.createActions({
  drop(dropTargetHref, position, event) {
    const itemDroppedHref = event.dataTransfer.getData('text/plain')

    /*
    console.log({
      dropTargetHref,
      itemDroppedHref,
      position,
      event
    })
    */

    const moduleItem = ModuleItemsStore.state.itemsByHref[itemDroppedHref]
    const dropTarget = ModuleItemsStore.state.itemsByHref[dropTargetHref]

    if(moduleItem) {
      const module = ModulesStore.state.modulesByHref[moduleItem.moduleHref]
      module.items = module.items.filter((item) => {
        return item.href !== moduleItem.href
      })
      ModulesStore.state.changeMe = Math.random()
      ModulesStore.replaceState(cloneDeep(ModulesStore.state)) // TODO: yuck. refactor and move to store!
    }

    if(moduleItem && dropTarget) {
      const module = ModulesStore.state.modulesByHref[dropTarget.moduleHref]
      const destinationIndex = findIndex(module.items, item => dropTargetHref === item.href)
      moduleItem.moduleHref = module.href
      module.items.splice(destinationIndex + position, 0, moduleItem)
      ModulesStore.state.changeMe = Math.random()
      ModulesStore.replaceState(cloneDeep(ModulesStore.state)) // TODO: yuck. refactor and move to store!
    }

    /*
    const origin = findIndex(items, item => data === item.href)
    const destination = findIndex(items, item => dropTargetHref === item.href)

    if(destination > origin) {
      items.move(origin, destination + position - 1)
    } else {
      items.move(origin, destination + position)
    }
    */
  }
})

export default ModuleItemActions

import ModulesStore from '../stores/modules'
