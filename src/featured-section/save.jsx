/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

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

	const {
		direction,
		image,
		title,
		sub_title,
		paragraph,
		textColor,
		backgroundColor,
	} = attributes;

	return (
		<div
			className="overflow-hidden bg-white py-24 sm:py-32"
			style={{ backgroundColor: backgroundColor }}
		>
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
										style={{ color: textColor }}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={sub_title}
										style={{ color: textColor }}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={paragraph}
										style={{ color: textColor }}
									/>
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
										style={{ color: textColor }}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={sub_title}
										style={{ color: textColor }}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={paragraph}
										style={{ color: textColor }}
									/>
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
