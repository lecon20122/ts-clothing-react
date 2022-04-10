import React, { Component } from 'react'
import MenuItem from '../../components/menu-item/menu-item.component'
import './homepage.styles.scss'
export class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <MenuItem title='HATS' />
          <MenuItem title='SNEAKERS' />
          <MenuItem title='JACKETS' />
          <MenuItem title='MANS' />
          <MenuItem title='WOMENS' />
        </div>
      </div>
    )
  }
}

export default HomePage