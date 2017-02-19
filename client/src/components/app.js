import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video'
import BandList from '../containers/BandList';
import BucketList from '../containers/BucketList';
import BandDetail from '../containers/BandDetail';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
	      			<NavBarHeader />
              <BandList />
              <BandDetail />
      			</div>
    			);
  		}
	}
