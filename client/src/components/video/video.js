//this gets React's installed module
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail'


//youtube api key so we can search
const API_KEY = 'AIzaSyBeUNf0ZrDzfU_y6v2k_c5QvuowjwyeDiY';

// 1.  Create a new component - it should produce some html
// fat arrow is a way to replace function key word
class Video extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null

		};

		this.videoSearch('bucketlist');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			}); // this.setState({videos})same as this.setState({videos: videos})
		});
	}

	render() {
		const videoSearch = _.debounce((term)=>{ this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
			</div>
		);
	}
}

export default Video;
// <VideoList videos={this.state.videos} /> is called passing a prop
// the prop becomes a parameter in video-list.js and then we have access to the data 
// called from the youtube API query
// 2.  Take this component's generated HTML and put it in the DOM

// ReactDOM.render(<App />, document.querySelector('.container'));