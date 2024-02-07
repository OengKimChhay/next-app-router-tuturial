const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white text-center py-4">
			<div className="container mx-auto px-4">
				<div className="flex justify-between">
					<p className="text-sm">&copy; 2024 Your Name/Company Name</p>
					<ul className="flex items-center space-x-4">
						<li>
							<a href="#" className="hover:text-gray-300">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">
								Terms of Service
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
