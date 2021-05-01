import type { FC } from 'react'
import { OverlayBc } from '../OverlayBc'
import styled from 'styled-components'

const Section = styled.section`
	padding: 0 10px;
	max-width: ${({ theme }) => theme.contentMaxWidth};
	margin: 0 auto;

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 80%;
	}
`

const Copyright = styled.p`
	color: ${({ theme }) => theme.colors.gray2};
	padding: 30px 0 10px;
	font-size: 16px;

	${({ theme }) => theme.breakpoints.TV5K} {
		margin-top: 3vw;
		font-size: 1vw;
	}
`

export const Layout: FC = ({ children }) => (
	<>
		<OverlayBc />
		<Section>
			{children}
			<Copyright>webdesign bart.sk</Copyright>
		</Section>
	</>
)
