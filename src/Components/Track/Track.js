import React from 'react';
import './Track.css';

export class Track extends React.Component {
    renderAction() {
        if(this.props.isRemoval) {
            return <button className='Track-action'>-</button>
        } else {
            return <button className='Track-action'>+</button>
        }
    }

    render() {
        return (
            <div className='Track'>
                <div className='Track-information'>
                    <h3>{/*Track name will go here*/}</h3>
                    <p>{/*Track Artist | track album */}</p>
                </div>
                {/* <button className='Track-action'>{/*+ or - will go here*/}
                {this.renderAction()}
            </div>
        );
    }
}