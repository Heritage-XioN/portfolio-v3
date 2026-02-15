import Link from 'next/link';

export function Logo() {
	return (
		<Link href='/' className='text-xl font-bold tracking-tight text-white'>
			<span className='text-amber-500'>&lt;</span> HX{' '}
			<span className='text-amber-500'>/&gt;</span>
		</Link>
	);
}
