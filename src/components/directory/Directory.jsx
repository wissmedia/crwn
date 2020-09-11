import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import './Directory.scss'
import SectionData from './section.data'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: SectionData
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory