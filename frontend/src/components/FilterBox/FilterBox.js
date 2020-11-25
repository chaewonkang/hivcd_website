import React from 'react';
import './FilterBox.css'

const FilterBox = () => {
	return (
		<div>
			<label className="container">
				<input type="checkbox"></input>
				<span className="checkmark"></span>
				<span className="filter_title">notice</span>
			</label>
			<label className="container">
				<input type="checkbox"></input>
				<span className="checkmark"></span>
				<span className="filter_title">event</span>

			</label>
			<label className="container">
				<input type="checkbox"></input>
				<span className="checkmark"></span>
				<span className="filter_title">lost/found</span>

			</label>
			<label className="container">
				<input type="checkbox"></input>
				<span className="checkmark"></span>
				<span className="filter_title">job</span>

			</label>
		</div>
	);
}

export default FilterBox;
