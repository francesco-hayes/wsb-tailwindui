/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
	const blockProps = useBlockProps.save();

	return (
		<div className="relative isolate overflow-hidden pt-14">
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:gap-20">
						<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
							<figure className="flex flex-auto flex-col justify-between">
								<blockquote className="text-lg leading-8 text-gray-900">
									<RichText.Content
										tagName="p"
										value={attributes.testimonial_one.text}
									/>
								</blockquote>
								<figcaption className="mt-10 flex items-center gap-x-6">
									<img
										onClick={open}
										className="h-14 w-14 rounded-full bg-gray-50"
										src={attributes.testimonial_one.author?.image?.url}
										alt={attributes.testimonial_one.author?.image?.alt}
									/>
									<div className="text-base">
										<RichText.Content
											tagName="div"
											className="font-semibold text-gray-900"
											value={attributes.testimonial_one.author?.name}
										/>
										<RichText.Content
											tagName="div"
											className="mt-1 text-gray-500"
											value={attributes.testimonial_one.author?.title}
										/>
									</div>
								</figcaption>
							</figure>
						</div>
						<div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
							<figure className="flex flex-auto flex-col justify-between">
								<blockquote className="text-lg leading-8 text-gray-900">
									<RichText.Content
										tagName="p"
										value={attributes.testimonial_two.text}
									/>
								</blockquote>
								<figcaption className="mt-10 flex items-center gap-x-6">
									<img
										onClick={open}
										className="h-14 w-14 rounded-full bg-gray-50"
										src={attributes.testimonial_two.author?.image?.url}
										alt={attributes.testimonial_two.author?.image?.alt}
									/>
									<div className="text-base">
										<RichText.Content
											tagName="div"
											className="font-semibold text-gray-900"
											value={attributes.testimonial_two.author?.name}
										/>
										<RichText.Content
											tagName="div"
											className="mt-1 text-gray-500"
											value={attributes.testimonial_two.author?.title}
										/>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
