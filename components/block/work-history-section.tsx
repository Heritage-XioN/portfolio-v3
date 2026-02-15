import { TimelineItem } from '@/components/ui/timeline-item';

const workHistory = [
	{
		title: 'Software Engineer',
		company: 'notiq',
		flag: '🇳🇬',
		location: 'Nigeria',
		type: 'project',
		dateRange: 'Jan 2025 - Present',
		bullets: [
			'built a production ready backend utility package/library.',
			'features include metrics monitoring and alerting, message queue background worker and cron like scheduler.',
			'built with python, redis, celery, prometheus, etc.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'metadata-scrubber',
		flag: '🇳🇬',
		location: 'Nigeria',
		type: 'project',
		dateRange: 'Dec 2025 - Jan 2026',
		bullets: [
			'designed and implemented a CLI based metadata scrubber.',
			'built with typer, python, pillow, rich etc.',
			'capabilities include office documents metadata scrubbing, jpg and png metadata scrubbing, and pdf metadata scrubbing.',
		],
	},
	{
		title: 'Front-end Engineer',
		company: 'Knowla',
		flag: '🇳🇬',
		location: 'Nigeria',
		type: 'intern',
		dateRange: 'Jan 2026 - Present',
		bullets: [
			'main front-end developer on the team, responsible for the development of the main site, and web application as a single codebase.',
			'built a production ready super admin dashboard for the company.',
			'Implemented video streaming functionality for the web application.',
		],
	},
	{
		title: 'Frontend group team lead',
		company: 'Skillupimo',
		flag: '🇳🇬',
		location: 'Nigeria',
		type: 'competition',
		dateRange: 'Nov 2024 - Dec 2024',
		bullets: [
			'Spearheaded the front-end design and architectural planning for a student-focused group-buying web platform',
			'Led a team of 4-5 developers in translating UI/UX mockups into a functional HTML/JS web application',
			'Implemented core user features including product listing, cart management, and a group formation dashboard',
			'Used HTML, JavaScript, CSS, and Git for version control',
		],
	},
];

export function WorkHistorySection() {
	return (
		<section className='py-8'>
			<h2 className='text-xl font-bold text-white'>Projects & Work History</h2>

			<p className='mt-3 text-sm leading-relaxed text-slate-400'>
				Below you will find a summary of my projects and past employment
				experience. Additionally, if you require, you can{' '}
				<a
					href='#'
					className='font-bold text-white underline underline-offset-4 transition-colors hover:text-amber-500'
					download
				>
					download my resume
				</a>{' '}
				📄 or visit my{' '}
				<a
					href='https://github.com/Heritage-XioN'
					target='_blank'
					rel='noopener noreferrer'
					className='font-bold text-white underline underline-offset-4 transition-colors hover:text-amber-500'
				>
					GitHub profile
				</a>
				{` `}for my projects.
			</p>

			<div className='mt-10 space-y-10'>
				{workHistory.map((entry, i) => (
					<TimelineItem key={i} {...entry} />
				))}
			</div>
		</section>
	);
}
