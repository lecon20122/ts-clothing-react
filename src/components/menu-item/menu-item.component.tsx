import './menu-item.styles.scss'
import React from 'react'

type menuItemProps = {
    title: string,
}


const MenuItem = ({ title } : menuItemProps) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
