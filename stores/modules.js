import Uniflow from 'uniflow'
import ModulesActions from '../actions/modules'
import flatten from 'lodash-node/modern/array/flatten'
import indexBy from 'lodash-node/modern/collection/indexBy'

const ModulesStore = Uniflow.createStore({
  state: {
    modules: [],
    modulesByHref: {}
  }
})

ModulesActions.on('modules-fetch-success', function (modules) {
  let modulesByHref = indexBy(modules, 'href')
  ModulesStore.setState({
    modules,
    modulesByHref
  })
})

export default ModulesStore
