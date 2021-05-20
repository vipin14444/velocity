import React from 'react';
import './App.css';
import 'simplebar/dist/simplebar.min.css';
import ResponsiveTable from './components/ResponsiveTable/ResponsiveTable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './components/Booking';
import SwitchCard from './components/SwitchCard/SwitchCard';
import HoverCard from './components/HoverCard/HoverCard';
import CombinedView from './components/CombinedView/CombinedView';
import SocialLogin from './components/SocialLogin/SocialLogin';
import AccordionList from './components/ZenAccordionList/AccordionList'
import Accordion from './components/ZenAccordionList/Accordion';
import FunctionalComponent from './components/FunctionalComponents/FunctionalComponent';
import Adscouter from './components/Adscouter/Adscouter';
import PDF from './components/PDF/PDF';
import ThemeSwitchContainer from './components/ThemeSwitch/ThemeSwitchContainer';
import Fashion from './pages/fashion/Fashion';
import NestedListContainer from './pages/nestedlist/NestedListContainer';
import Ellipsis from './pages/ellipsis/Ellipsis';
import MyToastComponent from './pages/MyToastComponent/MyToastComponent';
import ZenToast from './components/Toast/ZenToast';

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
					<Route path='/accordion' render={(props) => {
						return (
							<AccordionList>
								<Accordion />
							</AccordionList>
						)
					}} />
					<Route path='/social' component={SocialLogin}></Route>
					<Route path='/switch' component={SwitchCard}></Route>
					<Route path='/hover' component={HoverCard}></Route>
					<Route path='/combined' component={CombinedView}></Route>
					<Route path='/functional' component={FunctionalComponent}></Route>
					<Route path='/ad' component={Adscouter}></Route>
					<Route path='/booking' render={(props) => <Booking {...props}></Booking>}></Route>
					<Route path='/pdf' render={(props) => <PDF {...props}></PDF>}></Route>
					<Route path='/theme' render={(props) => <ThemeSwitchContainer {...props}></ThemeSwitchContainer>}></Route>
					<Route path='/nest' component={NestedListContainer} />

					<Route path='/fashion' component={Fashion} />
					<Route path='/ellipsis' component={Ellipsis} />

					<Route path='/toast' component={MyToastComponent} />
				</Switch>
			</BrowserRouter>

			<ZenToast />
		</div>
	);
}

export default App;
