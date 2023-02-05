import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading : false,
      page:1
    }
  }

  async componentDidMount()
  {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a292951ef1a94cdd871951fbd23bc74d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles , totalResults: parseddata.totalResults,loading: false})
  }

  handleNextClick = async()=>{

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a292951ef1a94cdd871951fbd23bc74d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parseddata.articles,
      loading: false
    })
  }
  }

  handlePrevClick = async ()=>{
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a292951ef1a94cdd871951fbd23bc74d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '35px 0px'}}>KhabarApp - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,63):""} description={element.description?element.description.slice(0,106):""} imageUrl={element.urlToImage} newsUrl={element.url}/>   
        </div>
})}
        </div> 
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

          </div>    
      </div>
    )
  }
}

export default News
