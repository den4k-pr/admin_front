export interface ITableItem {
	id: number
	image?: string
	name: string
	viewLink: string
	editLink?: string
	removeHandler: () => void
}
