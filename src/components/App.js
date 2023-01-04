import React from "react";
import Nav from "./Nav";
import Titles from "./Titles";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Titles data={hogs}/>
		</div>
	);
}

export default App;
