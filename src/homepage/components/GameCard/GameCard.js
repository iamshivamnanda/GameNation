import React from 'react'
import './GameCard.scss'
import { Link } from 'react-router-dom'

export const GameCard = (props) => {
    return (
        // <div className='gameCard'>
        //     <img src={props.image} alt='gameImage' />
        //     <h3>{props.title}</h3>
        // </div>
        <div className="main-container">
			<div className="poster-container">
				<Link to= {"/game/" + props.title}> <img src={props.image} className="poster" alt={props.title} /></Link>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h3 className="ticket__movie-title">{props.title}</h3>
				</div>
			</div>
		</div>
    )
}
