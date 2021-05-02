import styled from 'styled-components'
import { Icon } from '../../Icon'

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.zIndex[5]};
	padding: 10px;
`

export const Form = styled.form`
	position: relative;
	max-width: 960px;
	width: 100%;
	padding: 25px 15px;
	background-color: white;
	margin: 10px;
	border-radius: 4px;

	${({ theme }) => theme.breakpoints.tablet} {
		padding: 50px 40px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 40vw;
		width: 100%;
		margin: 2vw;
		padding: 4vw 3vw;
		border-radius: 10px;
	}
`

export const Label = styled.label`
	display: block;
	margin-bottom: 25px;
	color: ${({ theme }) => theme.colors.gray3};
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 26px;
		margin-bottom: 52px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		margin-bottom: 1.5vw;
		font-size: 2vw;
	}
`

export const ButtonAddCategory = styled.button`
	position: relative;
	border: 0;
	font-size: 14px;
	text-transform: uppercase;
	background-color: ${({ theme }) => theme.colors.green};
	padding: 10px 15px 10px 45px;
	border-radius: 4px;
	color: white;
	cursor: pointer;
	font-weight: 600;
	width: 100%;
	margin-top: 10px;

	&:hover {
		opacity: 0.8;
	}

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 18px;
		padding: 15px 25px 10px 50px;
		margin: 0 0 10px;
		width: auto;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 1.5vw;
		padding: 1vw 2vw 1vw 4vw;
		margin-bottom: 0.5vw;
		border-radius: 10px;
	}
`

export const IconAdd = styled(Icon)`
	position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 25px;
	font-family: 'fonts';

	${({ theme }) => theme.breakpoints.tablet} {
		left: 20px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		font-size: 2.5vw;
		left: 1.5vw;
	}
`
