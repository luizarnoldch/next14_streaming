import CardPlan from '@/components/CardPlan'
import Footer from '@/components/Footer'
import Carrousel from '@/components/Carrousel'
import { Button } from 'flowbite-react'

export default function Home() {
	return (
		<main className='container mx-auto h-full w-full'>
			<section className='flex h-full w-full flex-col lg:flex-row my-10 lg:space-y-0 space-y-10 items-center'>
				<section className='flex h-full flex-col items-center justify-center lg:w-1/2 space-y-4'>
					<div className='w-4/5 text-center'>
						<h1>
							Disfruta de las mejores series en tu plataforma favorita
						</h1>
					</div>
					
					<Button gradientDuoTone='pinkToOrange' size='xl' className='shadow-md'>
						Subscribete
					</Button>
				</section>
				<section className='h-full w-full lg:w-1/2'>
					<Carrousel />
				</section>
			</section>
			<section className='w-full'>
				<div className='w-4/5 mx-auto text-center'>
					<h1>
						Elige tu mejor plan
					</h1>
				</div>
			</section>
			<section className='my-10 w-full'>
				<section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
				 gap-6'>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
					<CardPlan></CardPlan>
				</section>
			</section>
			<Footer />
		</main>
	)
}
