import Config from './Config'
import * as M from 'materialize-css'
import { Tag } from './html/Tag'
import App from './component/App'
import TimeTableApi from './model/TimeTableApi'
import ConnectionParser from './ConnectionParser'
import AutoCompleteComponent from './component/AutoCompleteComponent'

document.addEventListener('DOMContentLoaded', () => {
  const queryParams = new URLSearchParams(window.location.search)
  const languageParam = queryParams.get(Config.LANGUAGE_KEY)
  const lang = languageParam ? languageParam : Config.LANGUAGES.DE.code
  const appElement = document.getElementById('app')
  const langMenuElement = document.getElementById('langMenu')
  const footerElement = document.getElementsByTagName(Tag.FOOTER)[0]

  if (appElement && langMenuElement && footerElement) {
    const sideNavElements = document.querySelectorAll('.sidenav')
    // const dropDownTriggerElements = document.querySelectorAll('.dropdown-trigger')

    if (sideNavElements) {
      M.Sidenav.init(sideNavElements)
    }

    /*if (dropDownTriggerElements) {
      M.Dropdown.init(dropDownTriggerElements)
    }*/

    document.documentElement.lang = lang

    const fromAutoComplete = new AutoCompleteComponent({})
    const toAutoComplete = new AutoCompleteComponent({})
    const submitButton = document.createElement('button')

    submitButton.textContent = 'Go!'
    submitButton.addEventListener('click', event => {
      appElement.querySelectorAll('.box').forEach(node => appElement.removeChild(node))
      event.preventDefault()
      const startLocation = fromAutoComplete.getSelection()
      const destination = toAutoComplete.getSelection()
      const travelDate = '25.06.2019'

      fetch(`https://transport.opendata.ch/v1/connections?from=${startLocation}&to=${destination}&date=${travelDate}`, {
        method: 'get'
      })
        .then(response => response.json())
        .then((data: TimeTableApi) => {
          const stops = ConnectionParser.parse(data.connections[0])
          const app = new App({ stops: stops })

          appElement.appendChild(app.build())
        })
        .catch(error => console.log(error))
    })

    appElement.appendChild(fromAutoComplete.build())
    appElement.appendChild(toAutoComplete.build())
    appElement.appendChild(submitButton)
  }
})
