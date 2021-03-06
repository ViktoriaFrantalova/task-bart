import { FC } from 'react'
import styled from 'styled-components'

interface OverlayBcProps {
	activeBc: string
}

const Wrapper = styled.div`
	position: absolute;
	overflow: hidden;
	height: 335px;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex[0]};

	&::after {
		z-index: ${({ theme }) => theme.zIndex[1]};
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

const Img = styled.div<OverlayBcProps>`
	height: inherit;
	width: inherit;
	background-image: url(${({ activeBc }) => activeBc});
	background-size: cover;
	background-position: center;
	filter: blur(4px);
	height: 100%;
`

export const OverlayBc: FC<OverlayBcProps> = ({ activeBc }) => (
	<Wrapper>
		<Img activeBc={activeBc} />
	</Wrapper>
)
