import React, { ReactNode, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>
				<main className="p-10">{children}</main>
			</Suspense>
			<Footer />
		</>
	);
}
