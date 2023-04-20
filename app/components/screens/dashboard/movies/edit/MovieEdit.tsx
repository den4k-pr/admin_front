import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import UploadField from '@/ui/upload-field/UploadField'

import { IMovieDto } from '@/shared/interfaces/movie.interface'

import { IMediaResponse } from '@/services/media.service'
import { MovieService } from '@/services/movie.service'

const MovieEdit: FC = () => {
	const { query, push } = useRouter()
	const moviedId = Number(query.id)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMovieDto>({
		mode: 'onChange'
	})

	const { isLoading } = useQuery(
		['get movie by id', moviedId],
		() => MovieService.getMovieById(moviedId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('fess', data.fess)
				setValue('poster', data.poster)
			},
			enabled: !!moviedId
		}
	)

	const { mutate } = useMutation(
		['update movie', moviedId],
		(data: IMovieDto) => MovieService.updateMovie(moviedId, data),
		{
			onSuccess() {
				push('/manage/movies')
			}
		}
	)

	const onSubmit: SubmitHandler<IMovieDto> = data => {
		mutate(data)
	}

	return (
		<Layout title="Movie edit">
			<Heading>Edit movie</Heading>

			{isLoading ? (
				<Loader count={4} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
					<Field
						{...register('name', {
							required: 'Name is required'
						})}
						placeholder="Name"
						error={errors.name}
					/>
					<Field
						{...register('fess', {
							required: 'fess is required',
							valueAsNumber: true
						})}
						type="number"
						placeholder="fess ($)"
						error={errors.fess}
					/>
					<div className="my-8">
						<Controller
							control={control}
							name="poster"
							render={({ field: { onChange, value } }) => (
								<UploadField
									folder="posters"
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									value={value}
								/>
							)}
						/>
					</div>

					<Button>Save</Button>
				</form>
			)}
		</Layout>
	)
}

export default MovieEdit
