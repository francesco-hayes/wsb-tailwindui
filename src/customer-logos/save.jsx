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
	const { images, title, titleTextColor, backgroundColor } = attributes;

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="bg-gray-900 py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<RichText.Content
					tagName="h2"
					className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10"
					value={title}
					style={{ color: titleTextColor }}
				/>
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{images.map((image, index) => (
						<img
							className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src={image.src}
							alt={image.alt}
							width={158}
							height={48}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
