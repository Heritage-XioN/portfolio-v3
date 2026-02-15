import { WavyLine } from '@/components/ui/wavy-line';

export function HeroSection() {
	return (
		<section className='pb-10 pt-16 md:pt-24'>
			<h1 className='text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl'>
				Hey, I&apos;m <span className='text-amber-500'>Heritage Iyoke</span>!
			</h1>

			<div className='mt-5 space-y-0.5 text-base leading-relaxed text-slate-400 md:text-lg'>
				<p>
					A full-stack engineer based in{' '}
					<a
						href='#'
						className='text-slate-300 underline underline-offset-4 transition-colors hover:text-white'
					>
						Owerri
					</a>
					, Nigeria.
				</p>
				<p>
					I specialize in developing applications using the React
					ecosystem(nextjs) for frontend, python fastapi for backend and AI for
					automation and agentic based software development.
				</p>
				<p>
					Currently, I&apos;m learning Rust and AI for automation and agentic
					based software development. I&apos;m also open to freelance work and
					collaborations. You can{' '}
					<a
						href='/contact'
						className='text-slate-300 underline underline-offset-4 transition-colors hover:text-white'
					>
						reach out to me
					</a>{' '}
					anytime.
				</p>
			</div>

			<div className='mt-8'>
				<WavyLine />
			</div>
		</section>
	);
}
