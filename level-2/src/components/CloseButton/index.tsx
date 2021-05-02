import { FC } from 'react'
import styled from 'styled-components'
import { Icon, IconEnumName } from '../Icon'

const ButtonCloseModal = styled.button`
	position: absolute;
	z-index: ${({ theme }) => theme.zIndex[6]};
	bottom: 100%;
	right: 0;
	outline: 0;
	cursor: pointer;
	border: 0;
	font-size: 16px;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	padding: 10px 0 10px 40px;

	&:hover {
		color: ${({ theme }) => theme.colors.green};
		text-decoration: underline;
	}

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 20px;
		padding: 15px 0 15px 45px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		padding: 1.5vw 0 1.5vw 3vw;
		border-radius: 10px;
		font-size: 1.5vw;
	}
`
const IconClose = styled(Icon)`
	position: absolute;
	left: 5px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 30px;
	font-family: 'fonts';

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 40px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 2.5vw;
	}
`

interface CloseButtonProps {
	onClick: (e: any) => void
	className?: string
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick, className }) => {
	return (
		<ButtonCloseModal onClick={onClick} className={className}>
			<IconClose name={IconEnumName.CLOSE} />
			Zavrieť
		</ButtonCloseModal>
	)
}
