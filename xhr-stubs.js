import Interceptor from 'xhr-interceptor'
import loremHipsum from 'lorem-hipsum'
import flatten from 'lodash-node/modern/array/flatten'
import range from 'lodash-node/modern/utility/range'
import random from 'lodash-node/modern/number/random'
import moment from 'moment'

const app = new Interceptor

app.get('/api/v1/courses/:course_id/modules', (req, res) => {
  // TODO: check for include[]=items,content_details

  const courseId = 1

  const modules = range(0, 5).map(() => {
    const moduleId = Math.random()
    const moduleHref = `https://myschool.instructure.com/courses/${courseId}/modules/${moduleId}`

    return {
      id: moduleId,
      href: moduleHref,
      type: 'module',
      title: loremHipsum({count: random(3, 10), units: 'words'}),
      items: range(0, 5).map(() => {
        const dueDate = moment()
          .add(random(0, 100), 'days')
          .add(random(0, 24), 'hours')
          .add(random(0, 60), 'minutes')
        const dueDateFormatted = 'Due ' + dueDate.format('MMM Do') + ' at ' + dueDate.format('h:MMa')
        const availabilityDate = dueDate
          .subtract(random(0, 20), 'days')
        const availabilityDateFormatted = 'Available ' + availabilityDate.format('MMM Do')
        const itemId = Math.random()

        return {
          id: itemId,
          moduleHref,
          href: `https://myschool.instructure.com/courses/${courseId}/modules/${moduleId}/items/${itemId}`,
          type: 'text/plain',
          dueDate: random(0, 1) ? dueDateFormatted : null, // half the time blank
          availabilityDate: random(0, 1) ? availabilityDateFormatted : null, // half the time blank
          points: random(0, 1) && random(1, 100), // half the time 0, otherwise from 1-100
          title: loremHipsum({count: random(3, 10), units: 'words'})
        }
      })
    }
  })

  res.json(modules)
})

