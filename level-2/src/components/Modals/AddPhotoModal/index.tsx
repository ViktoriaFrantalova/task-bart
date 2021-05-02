import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Icon, IconEnumName } from '../../Icon'
import { CloseButton } from '../../CloseButton'
import { Overlay, Form, ButtonAddCategory, Label, IconAdd } from '../styles'

const Content = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`

const UploadImageInput = styled.input`
	background-color: ${({ theme }) => theme.colors.white};
	display: none;
	color: transparent;
	font-size: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	border: 0;
	left: 0;
	top: 0;
`

const AddImageContent = styled.div`
	position: relative;
	width: 100%;
	height: 160px;
	margin-bottom: 20px;

	${({ theme }) => theme.breakpoints.tablet} {
		height: 2vw;
		margin-bottom: 1vw;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		height: 23vw;
	}
`

const UploadImageLabel = styled.label`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 100%;
	height: 100%;
	border: 2px dashed ${({ theme }) => theme.colors.gray1};

	${({ theme }) => theme.breakpoints.tablet} {
		border-width: 0.3vw;
	}
`

const IconPhoto = styled(Icon)`
	color: ${({ theme }) => theme.colors.gray2};
	font-size: 30px;
	margin-bottom: 20px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 4vw;
		margin-bottom: 1.5vw;
	}
`

const Description = styled.p`
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.gray2};
	font-size: 14px;
	margin: 10px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 1.3vw;
		margin: 1vw;
	}
`

const Mark = styled.span`
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.gray2};
	font-size: 10px;
	margin-bottom: 10px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 1vw;
		margin: 1vw;
	}
`

const ButtonUploadImage = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.gray2};
	text-align: center;
	padding: 10px 15px;
	border: 2px solid ${({ theme }) => theme.colors.gray2};
	text-transform: uppercase;
	font-size: 14px;
	border-radius: 5px;

	${({ theme }) => theme.breakpoints.tablet} {
		padding: 1vw 1.5vw;
		border-width: 0.2vw;
		font-size: 1.2vw;
		border-radius: 0.2vw;
	}
`

interface AddPhotoModalProps {
	setShowModal: (value: boolean) => void
}

export const AddPhotoModal: FC<AddPhotoModalProps> = ({ setShowModal }) => {
	const refOverlay = useRef<HTMLDivElement>(null)

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
				<CloseButton
					onClick={e => {
						e.preventDefault()
						setShowModal(false)
					}}
				/>
				<Label>Pridať Fotky</Label>
				<AddImageContent>
					<UploadImageLabel>
						<UploadImageInput
							type="file"
							onChange={e => {
								console.log('trying upload image', e)
								alert('trying upload image')
							}}
							multiple
						/>
						<IconPhoto name={IconEnumName.ADD_A_PHOTO} />
						<Description>Sem presunute fotky</Description>
						<Mark>alebo</Mark>
						<ButtonUploadImage>Vyberte súbory</ButtonUploadImage>
					</UploadImageLabel>
				</AddImageContent>
				<Content>
					<ButtonAddCategory
						onClick={e => {
							e.preventDefault()
							alert(`back-end call pridat category`)
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
