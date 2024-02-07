'use client';
import Layout from '@/components/layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				);
				const json = await response.json();
				setPosts(json);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout>
			<div className="grid grid-cols-3 gap-5">
				{posts.map((post: any) => (
					<div key={post.id} className="shadow-lg p-5 rounded-lg bg-slate-100">
						<p className="text-lg font-bold">{post.title}</p>
						<p>{post.body}</p>
						<Link href={`/posts/${post.id}`}>Read more</Link>
					</div>
				))}
			</div>
		</Layout>
	);
}
