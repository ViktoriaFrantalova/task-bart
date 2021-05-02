import { FC } from 'react'
import styled from 'styled-components'
import { CatalogItem } from '../Catalog'
import { Icon as IconC, IconEnumName } from '../Icon'
interface AddCatalogProps {
	iconName: IconEnumName
	onClick: () => void
}

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

export const AddCatalog: FC<AddCatalogProps> = ({ children, iconName, onClick }) => {
	return (
		<CatalogItem>
			<Button onClick={onClick}>
				<Text>
					<Icon name={iconName} />
					{children}
				</Text>
			</Button>
		</CatalogItem>
	)
}
