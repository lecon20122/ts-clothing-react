import React from 'react';
import CollectionPreviewPage from '../../components/preview-collection/collection-preview.component';
import { SHOP_DATA } from '../../data/shop.data';

export interface IShopPageProps {}
export interface IShopPageState {
    collection: {
        id: number;
        title: string;
        routeName: string;
        items: {
            id: number;
            name: string;
            imageUrl: string;
            price: number;
        }[];
    }[];
}

class ShopPage extends React.Component<IShopPageProps, IShopPageState> {
    constructor(props: IShopPageProps) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        };
    }

    render() {
        return (
            <div className="shop-page">
                {this.state.collection.map(({ id, title, items }) => (
                    <CollectionPreviewPage key={id} title={title} items={items} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
