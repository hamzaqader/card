import { Component } from "react";
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.png'

import './card.css'


class Card extends Component {

    constructor(props) {
        super(props)
        this.arr = [
            {
                title: 'NOKIA 1010',
                img: img1,
                discription: 'Connecting people',
                price: '$1200'
            },
            {
                title: 'LENOVO',
                img: img2,
                discription: ' ',
                price: '899 pkr'
            },
            {
                title: 'IPHONE 11',
                img: img3,
                discription:  'Keep it simple and smart',
                price: '$1200'
            },
            {
                title: 'LENOVO',
                img: img4,
                discription: 'SMART MOBILES ',
                price: '799 pkr'
            },
            {
                title: 'IPHONE 13',
                img: img5,
                discription: 'Keep it simple and smart ',
                price: '499 pkr'
            },
            {
                title: 'LENOVO',
                img: img6,
                discription: 'SMART MOBILES ',
                price: '999 pkr'
            },
            {
                title: 'IPHONE 12 pro',
                img: img7,
                discription: 'Keep it simple and smart ',
                price: '499 pkr'
            },
            {
                title: 'LENOVO',
                img: img8,
                discription: ' ',
                price: '499 pkr'
            }
        ]

        // console.log(arr[0].name);
    }

    render() {
        return (
            <div>
               
                {
                    this.arr.map((item) => {
                        let { title, img, discription, price } = item
                        return <div className='card-main-div'>
                            <img className='card-img' src={img} ></img>
                            <div className='card-text'>
                                <div className='title'><b>{title}</b></div>
                                <figcaption className='card-discription'>{discription}</figcaption>
                                
                            </div>
                        </div>

                    })
                }
            </div>
        )
    }
}

export default Card