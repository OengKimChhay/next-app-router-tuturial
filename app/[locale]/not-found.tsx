export default function NotFound() {
	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center">
			<div className="max-w-md text-center">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					404 Page Not Found
				</h1>
				<p className="text-gray-600 mb-8">
					Oops! Looks like you stumbled upon a page that doesnt exist.
				</p>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
					Go Back Home
				</button>
			</div>
		</div>
	);
}
