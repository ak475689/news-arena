import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './spinner.js'
export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:'4',
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url =
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5395d328752c411fb52d3ab436f94b84&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResult,loading:false })
    }
    handlenextclick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {

        }
        else {
            let url =
                `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5395d328752c411fb52d3ab436f94b84&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            this.setState({loading:true});
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading:false
            })
        }

    }
    handleprevclick = async () => {
        let url =
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5395d328752c411fb52d3ab436f94b84&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({loading:true});
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        })
    }
    render() {
        return (
            <div className="col-my-5 container text-center">
                <h1>News arena-top headlines on {this.props.category}</h1>
                {this.state.loading&&<Spinner/>}
                <div className="row">
                    {!this.state.loading&&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenextclick}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
