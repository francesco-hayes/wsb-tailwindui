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
		backgroundColor,
		statBackgroundColor,
		statTextColor,
		titleTextColor,
	} = attributes;

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="bg-white py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<RichText.Content
							{...blockProps}
							tagName="h2"
							className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							value={attributes.title}
							style={{ color: titleTextColor }}
						/>
					</div>
					<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
						<div
							style={{ backgroundColor: statBackgroundColor }}
							className="flex flex-col bg-gray-400/5 p-8"
						>
							<dt
								style={{ color: statTextColor }}
								className="text-sm font-semibold leading-6 text-gray-600"
							>
								Years
							</dt>
							<RichText.Content
								{...blockProps}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.years}
								style={{ color: statTextColor }}
							/>
						</div>
						<div
							style={{ backgroundColor: statBackgroundColor }}
							className="flex flex-col bg-gray-400/5 p-8"
						>
							<dt
								style={{ color: statTextColor }}
								className="text-sm font-semibold leading-6 text-gray-600"
							>
								Events
							</dt>
							<RichText.Content
								{...blockProps}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.events}
								style={{ color: statTextColor }}
							/>
						</div>
						<div
							style={{ backgroundColor: statBackgroundColor }}
							className="flex flex-col bg-gray-400/5 p-8"
						>
							<dt
								style={{ color: statTextColor }}
								className="text-sm font-semibold leading-6 text-gray-600"
							>
								Speakers
							</dt>
							<RichText.Content
								{...blockProps}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.speakers}
								style={{ color: statTextColor }}
							/>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
}
