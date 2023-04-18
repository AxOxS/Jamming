import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if(this.props.isRemoval) {
      return <button onClick={this.removeTrack} className="Track-action">-</button>
    } else {
      return <button onClick={this.addTrack} className="Track-action">+</button>
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <h3>Track Name</h3> */}
          {/* <p>Track artist | Track album</p> */}
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {/* <button className="Track-action">+ or -</button> */}
        {this.renderAction()}
      </div>
    );
  }
}