import { FC, useState } from 'react'
import { CatalogList, CatalogItem, Header, AddCatalog, IconEnumName, OverlayBc, CatalogLink } from '../../components'
import styled from 'styled-components'
import { AddCategoryModal, AddPhotoModal } from '../../components/Modals'
import { useStickyState } from '../../utils'
export interface DataProps {
	img: string
	title?: string
	href?: string
	count?: number
}

interface GalleryProps {
	data: DataProps[]
	description: string
	isCategory?: boolean
}

const Section = styled.section`
	position: relative;
	padding: 0 10px;
	max-width: ${({ theme }) => theme.contentMaxWidth};
	margin: 0 auto;
	z-index: ${({ theme }) => theme.zIndex[2]};

	${({ theme }) => theme.breakpoints.TV5K} {
		max-width: 80%;
	}
`

const Copyright = styled.p`
	color: ${({ theme }) => theme.colors.gray2};
	padding: 30px 0 10px;
	font-size: 16px;

	${({ theme }) => theme.breakpoints.TV5K} {
		margin-top: 3vw;
		font-size: 1vw;
	}
`

export const Gallery: FC<GalleryProps> = ({ data, description, isCategory }) => {
	const [showModalCategory, setShowModalCategory] = useState(false)
	const [showModalPhoto, setShowModalPhoto] = useState(false)
	const [hoveredBc, sethoveredBc] = useStickyState('/images/category/food-salad-healthy-lunch.jpg', 'hoveredImg')

	return (
		<>
			<OverlayBc activeBc={hoveredBc} />
			<Section>
				<Header title="FotoGaléria" description={description} isCategory={isCategory} />
				<CatalogList>
					{data.map((item, index) => (
						<CatalogItem key={index} onMouseOver={() => sethoveredBc(item.img)}>
							<CatalogLink {...item} />
						</CatalogItem>
					))}
					{isCategory ? (
						<AddCatalog onClick={() => setShowModalCategory(true)} iconName={IconEnumName.ADD_CIRCLE_OUTLINE}>
							Pridať kategóriu
						</AddCatalog>
					) : (
						<AddCatalog onClick={() => setShowModalPhoto(true)} iconName={IconEnumName.ADD_A_PHOTO}>
							Pridať fotky
						</AddCatalog>
					)}
				</CatalogList>
				{showModalCategory && <AddCategoryModal setShowModal={setShowModalCategory} />}
				{showModalPhoto && <AddPhotoModal setShowModal={setShowModalPhoto} />}
				<Copyright>webdesign bart.sk</Copyright>
			</Section>
		</>
	)
}
