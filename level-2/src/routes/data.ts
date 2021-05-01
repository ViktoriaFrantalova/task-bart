export interface dataCategoryProps {
	img: string
	title: string
	href: string
	count: number
}

export const dataCategory: dataCategoryProps[] = [
	{
		img: 'images/category/landscape-meadow-field-mountains-66874.jpeg',
		title: 'Príroda',
		href: '/nature',
		count: 0,
	},
	{
		img: 'images/category/pexels-photo-261187.jpeg',
		title: 'Architektúra',
		href: '/architecture',
		count: 6,
	},
	{
		img: 'images/category/pexels-photo-27411.jpg',
		title: 'Ľudia',
		href: '/people',
		count: 0,
	},
	{
		img: 'images/category/food-salad-healthy-lunch.jpg',
		title: 'Jedlo',
		href: '/food',
		count: 0,
	},
	{
		img: 'images/category/pexels-photo-210019.jpeg',
		title: 'Autá',
		href: '/car',
		count: 0,
	},
]

export interface DataArchitectureprops {
	img: string
}

export const data: DataArchitectureprops[] = [
	{
		img: 'images/architecture/pexels-photo-24464.jpeg',
	},
	{
		img: 'images/architecture/pexels-photo-186077.jpeg',
	},
	{
		img: 'images/architecture/pexels-photo-221506.jpeg',
	},
	{
		img: 'images/architecture/pexels-photo-261146.jpeg',
	},
	{
		img: 'images/architecture/pexels-photo-323780.jpeg',
	},
]
