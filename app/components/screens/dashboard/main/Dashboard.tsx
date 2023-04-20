import { FC } from 'react'

import MiddleStatistics from '@/screens/dashboard/main/middle-statistics/MiddleStatistics'

import Layout from '@/ui/layout/Layout'

import MainStatistics from './MainStatistics'

const Dashboard: FC = () => {
	return (
		<Layout title="Dashboard">
			<MainStatistics />
			<MiddleStatistics />
		</Layout>
	)
}

export default Dashboard
