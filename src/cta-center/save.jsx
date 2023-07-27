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
	const { buttons } = attributes;

	return (
		<div className="bg-indigo-700">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<RichText.Content
						tagName="h2"
						className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
						value={attributes.title}
					/>
					<RichText.Content
						tagName="p"
						className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200"
						value={attributes.sub_title}
					/>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						{buttons.map((button, index) => {
							if (index === 0) {
								return (
									<a
										href={button.url}
										className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
									>
										{button.text}
									</a>
								);
							}
							return (
								<a
									href={button.url}
									className="text-sm font-semibold leading-6 text-white"
								>
									{button.text} <span aria-hidden="true">→</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
