import React  from 'react';
import './Card.css';
const Card = ({events}) => {
    const getCards = () => {
        if (!events){
            return(<div>Loading products...</div>)
        }
        if (events) {
            return events.map(event => {
                    return(
                        <div className='container'>
                            <div className='info-container'>
                                <div align='left' className='title'>{event.text}</div>
                                <div align='left' className='date'>{event.year}</div>
                            </div>
                        </div>
                    )
                }
            )
        }
    }


    return(
        <div className='wrap-container'>
            {getCards()}
        </div>
    )
}
export default Card