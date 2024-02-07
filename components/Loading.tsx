import Head from 'next/head';

function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="animate-pulse text-6xl text-blue-500">Loading...</div>
		</div>
	);
}

export default Loading;
