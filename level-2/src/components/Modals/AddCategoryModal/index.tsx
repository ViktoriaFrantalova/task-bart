import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconEnumName } from '../../Icon'
import { Overlay, Form, ButtonCloseModal, ButtonAddCategory, IconClose, Label, IconAdd } from '../styles'

const Underline = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	height: 2px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 3px solid ${({ theme }) => theme.colors.gray1};
	flex: 1;

	${({ theme }) => theme.breakpoints.TV5K} {
		border-bottom-width: 0.3vw;
		height: 0.3vw;
	}
`

const Input = styled.input`
	position: relative;
	font-size: 18px;
	outline: 0;
	padding: 10px 0;
	flex: 1;
	border: 0;
	text-transform: uppercase;
	border-bottom: 3px solid ${({ theme }) => theme.colors.white};

	&::placeholder {
		color: ${({ theme }) => theme.colors.black1};
	}

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 16px;
		padding: 15px 0;
		border-bottom: 0;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		padding: 1.5vw 0;
		font-size: 1.3vw;
	}
`

const Content = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
`

interface AddCategoryModalProps {
	setShowModal: (value: boolean) => void
}

export const AddCategoryModal: FC<AddCategoryModalProps> = ({ setShowModal }) => {
	const refOverlay = useRef<HTMLDivElement>(null)
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		const handleOutsideClick = (e: Event) => {
			const { current } = refOverlay
			const { target } = e
			if (current === target) {
				setShowModal(false)
			}
		}

		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [refOverlay, setShowModal])

	return (
		<Overlay ref={refOverlay}>
			<Form>
				<ButtonCloseModal
					onClick={e => {
						e.preventDefault()
						setShowModal(false)
					}}
				>
					<IconClose name={IconEnumName.CLOSE} />
					Zavrieť
				</ButtonCloseModal>
				<Label>Pridať kategóriu</Label>
				<Content>
					<Input value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Zadajte názov kategórie" />
					<Underline />
					<ButtonAddCategory
						onClick={e => {
							e.preventDefault()
							alert(`back-end call pridat category${inputValue}`)
						}}
					>
						<IconAdd name={IconEnumName.ADD} />
						Pridať
					</ButtonAddCategory>
				</Content>
			</Form>
		</Overlay>
	)
}
