import './menu-item.styles.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type menuItemProps = {
    title: string;
    imageUrl: string;
    size?: string;
};
const MenuItem: React.FC<menuItemProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`shop/${props.title}`)}
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
            className={`${props.size} menu-item`}
        >
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
