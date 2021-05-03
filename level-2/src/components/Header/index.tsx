import { FC } from 'react'
import { Link as LinkR, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import { Icon as IconC, IconEnumName } from '../Icon'

interface HeaderProps {
	title: string
	description: string
	isCategory?: boolean
}

const Wrapper = styled.header`
	position: relative;
	padding-top: 100px;
	width: 100%;
	margin-bottom: 30px;

	${({ theme }) => theme.breakpoints.TV5K} {
		margin-bottom: 3%;
		padding-top: 2vw;
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

const Icon = styled(IconC)`
	position: absolute;
	left: 0;
	top: 50%;
	transform: translate(0, -50%);
	font-size: 30px;
	transition: transform 1s;

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 2vw;
		transform: translate(1vw, -50%);
		width: 2vw;
		height: 2vw;
	}
`

const Link = styled(LinkR)<LinkProps & { isCategory?: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	user-select: none;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	margin: 45px 0 15px 0;
	padding-left: ${({ isCategory }) => (isCategory ? '40px' : '0')};

	&:hover {
		text-decoration: none;

		${Icon} {
			transform: translate(0, -50%);
		}
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 2vw;
		padding-left: ${({ isCategory }) => (isCategory ? '4vw' : '0')};
		margin: 3% 0 2% 0;
	}
`

const Line = styled.div`
	position: absolute;
	content: '';
	top: 100%;
	left: 0;
	width: 100%;
	margin-top: 10px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.white};

	${({ theme }) => theme.breakpoints.TV5K} {
		margin-top: 1vw;
		border-bottom-width: 0.2vw;
	}
`

export const Header: FC<HeaderProps> = ({ title, description, isCategory }) => (
	<Wrapper>
		<Title>{title}</Title>
		<Link to="/task-bart" isCategory={!isCategory}>
			{!isCategory && <Icon name={IconEnumName.ARROW_BACK} />}
			{description}
		</Link>
		<Line />
	</Wrapper>
)
