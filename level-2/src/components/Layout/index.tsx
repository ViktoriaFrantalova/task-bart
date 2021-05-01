import type { FC } from 'react'
import { OverlayBc } from '../OverlayBc'
import { Header } from '../Header'
import styled from 'styled-components'

const Section = styled.section`
	padding: 0 10px;
	max-width: ${({ theme }) => theme.contentMaxWidth};
	margin: 0 auto;

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 80%;
	}
`

export const Layout: FC = ({ children }) => (
	<>
		<OverlayBc />
		<Header />
		<Section>{children}</Section>
	</>
)
