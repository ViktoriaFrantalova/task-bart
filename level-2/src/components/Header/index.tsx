import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
	position: relative;
	z-index: ${({ theme }) => theme.zIndex[2]};
	padding: 100px 10px 0;
	max-width: ${({ theme }) => theme.contentMaxWidth};
	margin: 0 auto;

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 80%;
		padding-top: 5%;
	}
`

const Title = styled.h1`
	font-size: 22px;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 3vw;
	}
`

const Description = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	padding-bottom: 15px;
	margin: 45px 0 30px 0;
	border-bottom: 2px solid ${({ theme }) => theme.colors.white};

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 2vw;
		padding-bottom: 2%;
		margin: 3% 0 2% 0;
	}
`

export const Header: FC = () => (
	<Wrapper>
		<Title>Fotogaléria</Title>
		<Description>Kategórie</Description>
	</Wrapper>
)
