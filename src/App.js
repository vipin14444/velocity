import React from 'react';
import './App.css';
import 'simplebar/dist/simplebar.min.css';
import ResponsiveTable from './components/ResponsiveTable/ResponsiveTable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './components/Booking';
import SwitchCard from './components/SwitchCard/SwitchCard';
import HoverCard from './components/HoverCard/HoverCard';
import CombinedView from './components/CombinedView/CombinedView';

const columns = [
	{
		id: 'FirstName',
		label: 'First Name',
		minWidth: 110
	},
	{
		id: 'LastName',
		label: 'Last Name',
		minWidth: 110
	},
	{
		id: 'Email',
		label: 'E-mail',
		minWidth: 150
	},
	{
		id: 'Address1',
		label: 'Address 1',
		minWidth: 100
		// minWidth: 430
	},
	{
		id: 'Company',
		label: 'Company',
		minWidth: 265
	},
	{
		id: 'Mobile',
		label: 'Mobile Number',
		minWidth: 140
	}
]

const data = [
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	},
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	},
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	},
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Address2: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	},
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	},
	{
		FirstName: 'Vipin',
		LastName: 'Sharma',
		Email: 'vipin@gmail.com',
		Address1: '2323  Amethyst Drive, California, United States of America',
		Company: 'Coaching and Mentoring, Rocketry',
		Mobile: '9999999999'
	}
]

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path='/switch' component={SwitchCard}></Route>
					<Route path='/hover' component={HoverCard}></Route>
					<Route path='/combined' component={CombinedView}></Route>
					<Route path='/booking' render={(props) => <Booking {...props}></Booking>}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
