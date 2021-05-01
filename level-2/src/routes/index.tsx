import { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Gallery } from '../pages'
import { Header } from '../components'

interface RouteProps {
	exact?: boolean
	link: string
	component: typeof Gallery
}

const routes: RouteProps[] = [
	{
		link: '/',
		component: Gallery,
	},
]

export const Routing: FC = () => {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Switch>
					{routes.map((route, i) => (
						<Route key={i} path={route.link} exact={route.exact} component={route.component} />
					))}
				</Switch>
			</BrowserRouter>
		</>
	)
}
