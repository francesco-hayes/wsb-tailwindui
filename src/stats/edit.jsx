/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<RichText
							tagName="h2"
							className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							value={attributes.title}
							onChange={(content) => setAttributes({ title: content })}
						/>
						{/* <p className="mt-4 text-lg leading-8 text-gray-600">
							Lorem ipsum dolor sit amet consect adipisicing possimus.
						</p> */}
					</div>
					<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex flex-col bg-gray-400/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-600">
								Years
							</dt>
							<RichText
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.years}
								onChange={(content) => setAttributes({ years: content })}
							/>
						</div>
						<div className="flex flex-col bg-gray-400/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-600">
								Events
							</dt>
							<RichText
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.events}
								onChange={(content) => setAttributes({ events: content })}
							/>
						</div>
						<div className="flex flex-col bg-gray-400/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-600">
								Speakers
							</dt>
							<RichText
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.speakers}
								onChange={(content) => setAttributes({ speakers: content })}
							/>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
}
