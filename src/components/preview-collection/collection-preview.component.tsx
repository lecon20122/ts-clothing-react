import React from 'react';
import CollectionItemPage from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
export interface ICollectionPreviewPageProps {
    title: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}

const CollectionPreviewPage: React.FunctionComponent<ICollectionPreviewPageProps> = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherProps }) => (
                        <CollectionItemPage key={id} {...otherProps} id={id} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreviewPage;
