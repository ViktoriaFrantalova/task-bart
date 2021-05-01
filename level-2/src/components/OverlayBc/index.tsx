import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: absolute;
	overflow: hidden;
	height: 335px;
	width: 100%;

	&::after {
		z-index: 1;
		position: absolute;
		content: '';
		background-color: ${({ theme }) => theme.colors.black1};
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		height: 30%;
	}
`

const Img = styled.div`
	height: inherit;
	width: inherit;
	background-image: url(${process.env.PUBLIC_URL + '/images/food-salad-healthy-lunch.jpg'});
	background-size: cover;
	background-position: center;
	filter: blur(4px);
	height: 100%;
`

export const OverlayBc: FC = () => (
	<Wrapper>
		<Img />
	</Wrapper>
)
