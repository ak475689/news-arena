import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageurl,newsurl,author,date} =this.props;
        let defaulturl="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
        return (
            
            <div className="card">
            <img src={!imageurl?defaulturl:imageurl} className="card-img-top" alt="error" />
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}...</p>
              <p classname="card-text"><small classname="text-muted">By {!author?"unknown":author} on {new Date(date).toUTCString()}</small></p>
              <a  rel="noreferrer"href={newsurl} target="_blank" className="btn btn-dark">read more</a>
            </div>
          </div>
        )
    }
}
export default NewsItem
