import Layout from '@/components/layout';

export default function PostDetails({ params }: { params: { id: string } }) {
	return (
		<Layout>
			<div className="container mx-auto px-4 md:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
					<div className="md:col-span-7">
						<div className="mb-6">
							<h1 className="text-3xl font-bold mb-2">Post Title</h1>
							<p className="text-gray-600 text-sm">
								By Author Name - Published on Date
							</p>
						</div>
						<div className="prose mx-auto">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								eu odio et nibh congue laoreet vitae sed arcu. Proin aliquam
								lorem eu augue ullamcorper, at consectetur leo rutrum. Integer a
								laoreet ligula. Morbi vehicula leo et risus malesuada, sit amet
								tincidunt nulla aliquet. Nullam eget laoreet turpis. Proin
								ultrices est et augue consectetur, a blandit velit egestas.
								Morbi laoreet elit eget elit rutrum, ac dictum risus tincidunt.
								Phasellus euismod mi eu libero rutrum, id vehicula lorem
								laoreet.
							</p>
							<p>
								Donec non est ullamcorper, aliquam velit vitae, rutrum nulla.
								Cras justo odio, dapibus ac facilisis in, egestas eget quam.
								Mauris blandit aliquam elit, eget tincidunt nunc pulvinar a.
								Proin eget tortor risus. Donec rutrum congue leo eget malesuada.
							</p>
						</div>
					</div>
					<div className="md:col-span-5 sticky top-0">
						<div className="bg-gray-100 shadow-md rounded-lg py-4 px-6 mb-4">
							<h3 className="text-lg font-bold mb-2">Related Posts</h3>
							<ul className="space-y-4">
								<li>
									<a href="#" className="hover:text-blue-600">
										Related Post 1
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Related Post 2
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Related Post 3
									</a>
								</li>
							</ul>
						</div>
						<div className="bg-gray-100 shadow-md rounded-lg py-4 px-6">
							<h3 className="text-lg font-bold mb-2">Leave a Comment</h3>
							<form action="#" method="post">
								<div className="mb-4">
									<label htmlFor="name" className="block text-gray-700 mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="shadow-sm p-2 rounded-md w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="email" className="block text-gray-700 mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="shadow-sm p-2 rounded-md w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="comment" className="block text-gray-700 mb-2">
										Comment
									</label>
									<textarea
										id="comment"
										name="comment"
										rows={5}
										className="shadow-sm p-2 rounded-md w-full"
									></textarea>
								</div>
								<button
									type="submit"
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
