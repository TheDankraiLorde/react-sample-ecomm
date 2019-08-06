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
                    title: 'hats',
                    imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj9ze305-vjAhVjneAKHdZmACkQjRx6BAgBEAU&url=https%3A%2F%2Fallgxxd.com%2Fcollections%2Fhats&psig=AOvVaw1IrXQY5257EiCwbh0KF7Uu&ust=1565097292001590',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://www.google.com/search?q=jackets&source=lnms&tbm=isch&sa=X&ved=0ahUKEwigkYqE6OvjAhXKmeAKHZmtCP0Q_AUIESgB&biw=739&bih=752#',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjxzp2X6OvjAhXGnOAKHQ6ODUUQjRx6BAgBEAU&url=https%3A%2F%2Frothys.com%2Fproducts%2Fthe-sneaker-garnet&psig=AOvVaw0y53SOYhaGLu2I5w-LeJhY&ust=1565097361926446',
                    id: 3
                },
                {
                    title: 'men',
                    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb4%2Fde%2F8f%2Fb4de8f3209d47c3926edde689aac152f.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F328833210284149545%2F&docid=thKzrK_PeZfS5M&tbnid=M7ZgVgyQGHpGCM%3A&vet=10ahUKEwiT69ih6OvjAhUOyFkKHTLFD90QMwinASgbMBs..i&w=601&h=900&bih=752&biw=739&q=male%20fashion&ved=0ahUKEwiT69ih6OvjAhUOyFkKHTLFD90QMwinASgbMBs&iact=mrc&uact=8',
                    id: 4
                },
                {
                    title: 'women',
                    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.dhgate.com%2F0x0%2Ff2%2Falbu%2Fg7%2FM01%2F54%2F6B%2FrBVaSVsUy1uAf6LrAAJXmLYy6Ao847.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fproduct%2Fsummer-women-fashion-dress-floral-printed%2F414392823.html&docid=9sevdIFdKUXwqM&tbnid=QYpsu6vChKUDVM%3A&vet=10ahUKEwiR8Zu46OvjAhXQjVkKHcgfC7sQMwh_KAAwAA..i&w=1000&h=1000&bih=752&biw=739&q=women%20fashion&ved=0ahUKEwiR8Zu46OvjAhXQjVkKHcgfC7sQMwh_KAAwAA&iact=mrc&uact=8',
                    id: 5
                }
            ]
        }
    }
    render() 
    {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                    <MenuItem key={id} title={title}/>
                ))}
            </div>
        );
    }
}

export default Directory;