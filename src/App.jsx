import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/App.css';

function App() {
	return (
		<>
			<Header></Header>
			<div className="dark-overlay"></div>
			<Main></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
