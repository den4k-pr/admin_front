export interface IViewsByMonth {
	views: string
	month: Date
}

export interface IMiddleStatisticsResponse {
	totalfess: number
	viewsByMonth: IViewsByMonth[]
}
