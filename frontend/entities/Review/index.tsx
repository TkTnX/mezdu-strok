import { BookAudioIcon, HeartHandshakeIcon } from 'lucide-react'
import Image from 'next/image'

type Props = {
	className?: string
}

export const Review = ({ className }: Props) => {
	return (
		<div className='bg-accent-light rounded-2xl p-2'>
			<div className='bg-main/10 flex items-center justify-between rounded-2xl p-2'>
				<div className='flex items-center gap-2'>
					<Image
						src={'/images/users/user1.png'}
						alt={'User'}
						width={43}
						height={43}
						className='rounded-full'
					/>
					<p className='font-bold'>Тимур Г.</p>
				</div>
				<div className='text-right'>
					<p className='text-main text-3xl font-bold'>78</p>
					<div className='flex items-center gap-1'>
						<button className='font-semibold text-[#2365c7]'>
							8
						</button>
						<button className='font-semibold text-[#2365c7]'>
							9
						</button>
						<button className='font-semibold text-[#2365c7]'>
							10
						</button>
						<button className='font-semibold text-[#2365c7]'>
							10
						</button>
						<button className='text-main font-semibold'>9</button>
					</div>
				</div>
			</div>
			<h5 className='mt-2 text-2xl font-bold'>Название</h5>
			<p className='mt-2 text-lg'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
				ut veniam voluptatum quis. Minima ex maxime cumque enim
				incidunt, possimus iure natus! Aliquam commodi dicta ratione.
				Libero facere velit accusamus eligendi quod, exercitationem est
				obcaecati voluptatum fuga facilis, incidunt soluta earum,
				provident porro. Perspiciatis, repudiandae maiores expedita
				aliquam sit corporis. Odio, omnis corporis? Voluptatibus
				dolores, at officiis molestiae est libero mollitia eum quam iure
				illum recusandae accusantium. Voluptates provident, facilis
				blanditiis optio, rerum, porro ducimus nam delectus sed quo
				dolorum labore? Libero quas, voluptate placeat aliquid quae eius
				debitis saepe incidunt qui excepturi ut itaque quasi, recusandae
				inventore. Animi pariatur, accusamus provident quae nostrum odio
				itaque, ipsa repellat nesciunt minima, quasi sunt placeat.
				Labore nisi assumenda libero voluptatum fugiat reiciendis
				reprehenderit cupiditate repellat ut eos autem odio, iusto
				exercitationem dolores culpa vero suscipit, omnis laborum rerum.
				Quas at tenetur iure sequi maiores autem eos commodi nam dolore
				tempore repellendus tempora in a praesentium nemo necessitatibus
				placeat doloremque ea eum, ipsa facilis libero! At maxime quis
				facilis saepe magnam quidem fugit totam natus commodi fuga
				voluptatum impedit dicta nisi, laborum quod corrupti ipsa
				maiores dolorum eligendi temporibus ipsum soluta eveniet odit
				cum. Fugiat vitae sunt cumque culpa, nihil maiores commodi sint?
			</p>
			<p className='text-xs text-secondary'>19.03.2025</p>
			<div className='mt-3'>
				<button className='flex items-center text-white  gap-2 border px-4 py-2 rounded-full border-main bg-main/30'>
					<HeartHandshakeIcon />
					14
				</button>
			</div>
		</div>
	)
}
