import { Carousel } from 'flowbite-react'

type Props = {}

const Carrousel = (props: Props) => {
	return (
		<div className='h-56 sm:h-64 xl:h-80 2xl:h-96 shadow-lg rounded-md'>
			<Carousel slideInterval={5000}>
				<img
					src='https://tvencasaperu.com/wp-content/uploads/2023/07/shop5_home_slide3.jpg.jpg'
					alt='...'
				/>
				<img
					src='https://tvencasaperu.com/wp-content/uploads/2023/07/shop5_home_slide1.jpg.jpg'
					alt='...'
				/>
				<img
					src='https://tvencasaperu.com/wp-content/uploads/2023/07/shop5_home_slide3.jpg.jpg'
					alt='...'
				/>
				<img
					src='https://tvencasaperu.com/wp-content/uploads/2023/07/shop5_home_slide1.jpg.jpg'
					alt='...'
				/>
			</Carousel>
		</div>
	)
}

export default Carrousel
