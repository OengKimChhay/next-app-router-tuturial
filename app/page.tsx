import { useTranslations } from 'next-intl';
import Layout from '@/components/layout';
export default function Home() {
	const t = useTranslations('Index');
	return (
		<Layout>
			<div>
				{t('title')}
				<main className="container mx-auto px-4 py-16">
					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Hero Section</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							eu odio et nibh congue laoreet vitae sed arcu. Proin aliquam lorem
							eu augue ullamcorper, at consectetur leo rutrum.
						</p>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Call to Action
						</button>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Features</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="shadow-md rounded-lg p-4">
								<h3 className="text-lg font-bold mb-2">Feature 1</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
							<div className="shadow-md rounded-lg p-4">
								<h3 className="text-lg font-bold mb-2">Feature 2</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
							<div className="shadow-md rounded-lg p-4">
								<h3 className="text-lg font-bold mb-2">Feature 3</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Testimonials</h2>
						<div className="flex items-center space-x-8">
							<div>
								<p className="text-gray-700">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<p className="text-sm font-bold">Person 1 - Company Name</p>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
}
