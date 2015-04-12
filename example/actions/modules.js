import Uniflow from 'uniflow'
import axios from 'axios'

const COURSE_ID = '1'

var ModuleActions = Uniflow.createActions({
  load: async function () {
    const response = await axios.get(`/api/v1/courses/${COURSE_ID}/modules`)
    this.emit('modules-fetch-success', response.data)
  }
})

export default ModuleActions
