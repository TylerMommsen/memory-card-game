import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Background from './components/background';
import './styles/App.css';

function App() {
	return (
		<>
			<Background></Background>
			<Header></Header>
			<div className="dark-overlay"></div>
			<Main></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
