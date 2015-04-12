import React from 'react'

class DragHandle extends React.Component {
  render() {
    return (
      <div className="ItemGroup-draghandle">
        <svg className="ItemGroup-draghandle-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 220" enable-background="new 0 0 100 220">
          <path fill="#808080" d="M38.5 37.9H0V0h38.5v37.9zM100 0H61.5v37.9H100V0zM38.5 60.7H0v37.9h38.5V60.7zm61.5 0H61.5v37.9H100V60.7zm-61.5 60.7H0v37.9h38.5v-37.9zm61.5 0H61.5v37.9H100v-37.9zm-61.5 60.7H0V220h38.5v-37.9zm61.5 0H61.5V220H100v-37.9z"/>
        </svg>
      </div>
    )
  }
}

export default DragHandle
