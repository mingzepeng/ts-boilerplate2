import * as React from 'react'

interface AppProps {
	className : string;	
}

export default class App extends React.Component<AppProps,any> {
	render() {
		return (
			<div className="app">
				Hello,please enjoy it！
			</div>
		)
	}
}