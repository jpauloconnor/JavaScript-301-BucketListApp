const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band) {
	// selectBook is an ActionCreator, it needs to return an action
	// which happens to be an object with a type property
	console.log("You have selected:", band.name);
	return {
		type: SELECT_BAND,
		payload: band
	};
}

