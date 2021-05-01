import { FC } from 'react'
import { CatalogList } from '../../components/Catalog'
import { data } from './data'

export const Gallery: FC = () => <CatalogList data={data} />
