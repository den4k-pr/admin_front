export const options = (isDark: boolean): any => ({
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				font: {
					size: 18
				},
				color: isDark ? '#fff' : '#222'
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				display: false
			}
		}
	},
	borderRadius: 15,
	borderSkipped: false,
	barThickness: 60,
	plugins: {
		tooltip: {
			bodyColor: isDark ? '#fff' : '#222',
			backgroundColor: !isDark ? '#fff' : '#222',
			titleColor: isDark ? '#fff' : '#222',
			titleFont: {
				size: 18,
				weight: 500
			},
			bodyFont: {
				size: 16
			},
			titleAlign: 'center',
			padding: 12,
			displayColors: false,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString('ru-Ru')
					}
				}
			}
		}
	}
})
