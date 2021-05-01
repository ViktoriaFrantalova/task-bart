import type { FC } from 'react'
import styled from 'styled-components'
import dataJsonIcons from './selection.json'

const Wrapper = styled.i`
	display: inline-block;
	position: relative;
	z-index: ${({ theme }) => theme.zIndex[1]};
	width: 30px;
	height: 30px;

	&:before {
		color: inherit;
		font-size: inherit;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

type ListIcon = typeof dataJsonIcons
export const getListIcons = (): ListIcon => dataJsonIcons

interface IconProps {
	className?: string
	name: 'arrow_back' | 'arrow_forward_ios' | 'arrow_back_ios' | 'add_a_photo' | 'add_circle_outline' | 'control_point' | 'add' | 'clear' | 'close'
	onClick?: () => void
}

export const Icon: FC<IconProps> = ({ name, className = '', onClick, children }) => (
	<Wrapper onClick={onClick} className={`icon icon-${name} ${className} rotate`} />
)
