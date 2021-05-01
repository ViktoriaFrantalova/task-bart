import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './components/Layout'
import reportWebVitals from './reportWebVitals'
import { Routing } from './routes'
import { Styler } from './styles'

ReactDOM.render(
	<React.StrictMode>
		<Styler>
			<Layout>
				<Routing />
			</Layout>
		</Styler>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
