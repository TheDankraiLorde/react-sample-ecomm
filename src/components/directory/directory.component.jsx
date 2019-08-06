import React from 'react';
import MenuItem from '../menu_item/menu-item.components';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor()
    {
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://www.villagehatshop.com/photos/product/standard/4511390S61402/straw-hats/mj-panama-straw-outback-hat.jpg',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0108/7802/products/NEW_PRODUCTIMAGES_leather-jacket-br-1.jpg?v=1540036930',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0877/4986/products/006_Deep_Navy_104_2x_f0b6050a-5a12-4549-82ac-67b81333502d.jpg?v=1551157467',
                    id: 3
                },
                {
                    title: 'Men',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaP6acHNiaCeqxgODhV9sUZFvnBNv3nTXDVVk6tlGxzElRa8c',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'Women',
                    imageUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8375271/2019/1/7/582995a9-d9c8-4129-8538-bf6492edc0191546853353174-Ives-Women-Olive-Green-Solid-Shirt-Style-Top-342154685335233-1.jpg',
                    id: 5,
                    size: 'large'
                }
            ]
        }
    }
    render() 
    {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        );
    }
}

export default Directory;