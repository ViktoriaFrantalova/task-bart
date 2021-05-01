import React, { FC } from 'react'
import { AddCatalog, CatalogList } from '../../components'
import { data } from './data'

export const Gallery: FC = () => (
	<CatalogList data={data}>
		<AddCatalog></AddCatalog>
	</CatalogList>
)
