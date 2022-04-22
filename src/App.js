
import Registration from './components/Registration'
import Login from './components/Login'

import { Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
 


  return (
		<div className="app">
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Registration />
				</Route>
				<Route path="*">
					<h2>Not found</h2>
				</Route>
			</Switch>
		</div>
	);
}

export default App;

