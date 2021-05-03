import { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Gallery } from '../pages'
import { dataCategory, data } from './data'
interface RouteProps {
	exact?: boolean
	link: string
	component: typeof Gallery
}

const routes: RouteProps[] = [
	{
		link: '/task-bart',
		exact: true,
		component: () => <Gallery data={dataCategory} description="Kategórie" isCategory></Gallery>,
	},
	{
		link: '/nature',
		component: () => <Gallery data={[]} description="Príroda"></Gallery>,
	},
	{
		link: '/architecture',
		component: () => <Gallery data={data} description="Architektúra"></Gallery>,
	},
	{
		link: '/people',
		component: () => <Gallery data={[]} description="Ľudia"></Gallery>,
	},
	{
		link: '/food',
		component: () => <Gallery data={[]} description="Jedlo"></Gallery>,
	},
	{
		link: '/car',
		component: () => <Gallery data={[]} description="Autá"></Gallery>,
	},
]

export const Routing: FC = () => {
	return (
		<>
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
