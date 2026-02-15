import { WavyLine } from '@/components/ui/wavy-line';

export function ResumeHeader() {
	return (
		<section className='pb-10 pt-16 md:pt-24'>
			<h1 className='text-3xl font-bold tracking-tight text-white md:text-4xl'>
				My Resume / CV
			</h1>

			<div className='mt-5 max-w-lg text-base leading-relaxed text-slate-400'>
				<p>
					I&apos;m a highly skilled full-stack engineer with experience in
					building robust production grade web applications and software. On
					this page, you can learn more about my knowledge stack and my previous
					work experience.
				</p>
			</div>

			<div className='mt-8'>
				<WavyLine />
			</div>
		</section>
	);
}
