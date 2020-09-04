import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		maxNo: 3,
		boards: [
			{
				brdno: 1,
				brdwriter: 'Lee Sunsin',
				brdtitle: 'If you intend to live then you die',
				brddate: new Date()
			},
			{
				brdno: 2,
				brdwrite: 'So SiNo',
				brdtitle: 'Founder for two countries',
				brddate: new Date()
			}
		]
	}

	handleSaveData = (data) => {
		this.setState({
			maxNo: this.state.maxNo+1,
			boards: this.state.boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data})
		});
	}

	handleRemove = (brdno) => {
		this.setState({
			boards: this.state.boards.filter(row => row.brdno !== brdno)
		})
	}

	render() {
		const { boards } = this.state;

		return (
			<div>
				<BoardForm onSaveData={this.handleSaveData}/>
				<table border="1">
					<tbody>
						<tr align="center">
							<td width="50">No.</td>
							<td width="300">Title</td>
							<td width="100">Name</td>
							<td width="100">Date</td>
						</tr>
						{
							boards.map(row =>
								(<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
							)
						}
					</tbody>
				</table>
			</div>
		)
	}
}

class BoardForm extends Component {
	state = {}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSaveData(this.state);
		this.setState();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
				<input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
				<button type="submit">Save</button>
			</form>
		)
	}
}

class BoardItem extends React.Component {

	handleRemove = () => {
		const { row, onRemove } = this.props;
		onRemove(row.brdno);
	}

	render() {
		return(
			<tr>
				<td>{this.props.row.brdno}</td>
				<td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
				<td>{this.props.row.brdwriter}</td>
				<td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
				<td><button onClick={this.handleRemove}>X</button></td>
			</tr>
		)
	}
}

export default App;
