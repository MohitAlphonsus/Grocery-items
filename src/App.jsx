import MainContent from './components/MainContent';

function App() {
	return (
		<div className="overflow-hidden my-4 h-[calc(100vh-2rem)] grid grid-rows-app-specific gap-2 container max-w-lg mx-auto ">
			<header className="shadow-md text-center p-1 pb-4 rounded-lg">
				<h1 className="text-4xl">Grocery List</h1>
			</header>

			<MainContent />

			<footer className="border text-center p-2">grocery-items@2023</footer>
		</div>
	);
}

export default App;
