/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { image, direction, title, sub_title, paragraph } = attributes;

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{direction === "left" ? (
						<>
							<div className="lg:ml-auto lg:pl-4 lg:pt-4">
								<div className="lg:max-w-lg">
									<RichText.Content
										tagName="h2"
										className="text-base font-semibold leading-7 text-indigo-600"
										value={title}
									/>
									<RichText.Content
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={sub_title}
									/>
									<RichText.Content
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={paragraph}
									/>
									{/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										{features.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-gray-900">
													<feature.icon
														className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
														aria-hidden="true"
													/>
													{feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl> */}
								</div>
							</div>
							<div className="flex items-start justify-end lg:order-first">
								<img
									src={image.src}
									alt={image.alt}
									className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
									width={2432}
									height={1442}
								/>
							</div>
						</>
					) : (
						<>
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									<RichText.Content
										tagName="h2"
										className="text-base font-semibold leading-7 text-indigo-600"
										value={title}
									/>
									<RichText.Content
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={sub_title}
									/>
									<RichText.Content
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={paragraph}
									/>
									{/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										{features.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-gray-900">
													<feature.icon
														className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
														aria-hidden="true"
													/>
													{feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl> */}
								</div>
							</div>
							<img
								src={image.src}
								alt={image.alt}
								className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
								width={2432}
								height={1442}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
