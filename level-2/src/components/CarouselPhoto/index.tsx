import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { IconEnumName, Icon } from '../Icon'
import { CloseButton } from '../CloseButton'

interface DataProps {
	img: string
	title?: string
	href?: string
	count?: number
}

interface CarouselPhotoProps {
	data: DataProps[]
	setShowModal: (value: boolean) => void
}

const CarouselImage = styled(Carousel)`
	max-width: 320px;
	position: relative;

	${({ theme }) => theme.breakpoints.tablet} {
		max-width: 600px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 60vw;
	}
`

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	z-index: ${({ theme }) => theme.zIndex[6]};

	.carousel.carousel-slider {
		padding: 0 40px;
	}
	.carousel-status {
		display: none;
	}

	${({ theme }) => theme.breakpoints.tablet} {
		.carousel.carousel-slider {
			padding: 0 4vw;
		}
	}
`

const Overlay = styled.div`
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

const Button = styled.button`
	position: absolute;
	z-index: ${({ theme }) => theme.zIndex[6]};
	background-color: transparent;
	border: 0;
	outline: 0;
	top: 0;
	width: 40px;
	height: 100%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-size: 30px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 3vw;
		width: 4vw;
	}
`

const StyledCloseButton = styled(CloseButton)`
	padding-right: 40px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 20px;
		padding: 15px 45px;
	}

	${({ theme }) => theme.breakpoints.TV5K} {
		padding: 1.5vw 3vw 1.5vw;
		border-radius: 10px;
		font-size: 1.5vw;
	}
`

const Image = styled.img`
	overflow: hidden;
	border-radius: 0.5vw;
`

export const CarouselPhoto: FC<CarouselPhotoProps> = ({ data, setShowModal }) => {
	return (
		<Overlay>
			<Wrapper>
				<StyledCloseButton
					onClick={e => {
						e.preventDefault()
						setShowModal(false)
					}}
				/>
				<CarouselImage
					autoPlay
					infiniteLoop
					showThumbs={false}
					showIndicators={false}
					dynamicHeight={true}
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<Button type="button" onClick={onClickHandler} title={label} style={{ right: 0 }}>
								<Icon name={IconEnumName.ARROW_FORWARD_IOS} />
							</Button>
						)
					}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<Button type="button" onClick={onClickHandler} title={label} style={{ left: 0 }}>
								<Icon name={IconEnumName.ARROW_BACK_IOS} />
							</Button>
						)
					}
				>
					{data.map(item => (
						<div>
							<Image src={item.img} alt={item.title} />
						</div>
					))}
				</CarouselImage>
			</Wrapper>
		</Overlay>
	)
}
