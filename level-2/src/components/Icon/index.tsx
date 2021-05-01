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

export enum IconEnumName {
	ARROW_BACK = 'arrow_back',
	ARROW_FORWARD_IOS = 'arrow_forward_ios',
	ARROW_BACK_IOS = 'arrow_back_ios',
	ADD_A_PHOTO = 'add_a_photo',
	ADD_CIRCLE_OUTLINE = 'add_circle_outline',
	CONTROL_POINT = 'control_point',
	ADD = 'add',
	CLEAR = 'clear',
	CLOSE = 'close',
}

export interface IconProps {
	className?: string
	name: IconEnumName
	onClick?: () => void
}

export const Icon: FC<IconProps> = ({ name, className = '', onClick }) => (
	<Wrapper onClick={onClick} className={`icon icon-${name} ${className} rotate`} />
)
