import React from 'react'
import styled from 'styled-components'
import { Item } from '../Catalog'
import { Icon as IconC } from '../Icon'

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-items: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border: 0;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.gray2};
	cursor: pointer;
`

const Text = styled.span`
	position: relative;
	width: 100%;
	padding-top: 60px;
	font-size: 16px;

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 1.5vw;
		padding-top: 4vw;
	}
`

const Icon = styled(IconC)`
	position: absolute;
	font-size: 40px;
	width: 40px;
	height: 40px;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	${({ theme }) => theme.breakpoints.TV5K} {
		width: 3vw;
		height: 3vw;
		font-size: 3vw;
	}
`

export const AddCatalog = () => {
	return (
		<Item>
			<Button>
				<Text>
					<Icon name="add_circle_outline" />
					Pridať kategóriu
				</Text>
			</Button>
		</Item>
	)
}
