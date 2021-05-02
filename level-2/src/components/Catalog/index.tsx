import { FC } from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

const Description = styled.p`
	display: none;
	color: ${({ theme }) => theme.colors.gray};
`

export const CatalogItem = styled.li`
	position: relative;
	cursor: pointer;
	height: 220px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	transition: all 1s;

	&:hover {
		transform: translateY(-15px);

		${Description} {
			display: block;
			font-size: 14px;
			padding-top: 10px;
			text-transform: lowercase;
		}
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		height: 13vw;

		&:hover {
			transform: translateY(-30px);

			${Description} {
				padding-top: 3%;
				font-size: 1.1vw;
			}
		}
	}
`

export const CatalogList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 26px;

	${({ theme }) => theme.breakpoints.TV5K} {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
		gap: 5% 3%;
	}
`

const Link = styled(LinkR)<{ cursorPointer: boolean }>`
	text-decoration: none;
	cursor: ${({ cursorPointer }) => cursorPointer && 'pointer'};
	height: 100%;
	width: 100%;
`

const OverflowImg = styled.div`
	height: 100%;
	overflow: hidden;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%) scale(1.2);
	left: 0;
	z-index: ${({ theme }) => theme.zIndex[1]};
`

const ContentImg = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex[2]};
	text-align: center;
	background-color: white;
	padding: 25px 10px;
	color: ${({ theme }) => theme.colors.black};
	font-size: 16px;

	${({ theme }) => theme.breakpoints.TV5K} {
		padding: 5% 2%;
		font-size: 1.2vw;
	}
`

const Title = styled.p`
	text-transform: uppercase;
`

interface CatalogLinkProps {
	img: string
	title?: string
	href?: string
	count?: number
}

export const CatalogLink: FC<CatalogLinkProps> = ({ img, title, count, href }) => (
	<Link to={href || '#'} cursorPointer={!!href?.length}>
		<OverflowImg>
			<Image src={img} alt={title} />
		</OverflowImg>
		{(title || count) && (
			<ContentImg>
				{title && <Title>{title}</Title>}
				{count ? <Description>{count} fotiek</Description> : null}
			</ContentImg>
		)}
	</Link>
)
