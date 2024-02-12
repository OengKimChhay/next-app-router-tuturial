'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
export default function Haha() {
	const segments = useSelectedLayoutSegments();
	console.log(segments);
	return (
		<div>
			<h1>haha</h1>
		</div>
	);
}
