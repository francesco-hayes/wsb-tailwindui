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
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockProps
 */
import {
	RichText,
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

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
	const {
		spacing,
		backgroundColor,
		statBackgroundColor,
		statTextColor,
		titleTextColor,
	} = attributes;

	const spacingStyles = () => {
		let style = {};
		if (spacing) {
			style = {
				paddingTop: spacing.top,
				paddingBottom: spacing.bottom,
				paddingLeft: spacing.left,
				paddingRight: spacing.right,
			};
		}
		return style;
	}

	return (
		<div
			className="bg-white py-24 sm:py-32"
			style={{ backgroundColor: backgroundColor, ...spacingStyles() }}
		>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color settings")}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (content) =>
								setAttributes({ backgroundColor: content }),
							label: __("Background color"),
						},
						{
							value: statBackgroundColor,
							onChange: (content) =>
								setAttributes({ statBackgroundColor: content }),
							label: __("Stat background color"),
						},
						{
							value: titleTextColor,
							onChange: (content) => setAttributes({ titleTextColor: content }),
							label: __("Title text color"),
						},
						{
							value: statTextColor,
							onChange: (content) => setAttributes({ statTextColor: content }),
							label: __("Stat text color"),
						},
					]}
				/>
				<BoxControl onChange={(values) => setAttributes({ spacing: values })} />
			</InspectorControls>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<RichText
							{...useBlockProps()}
							tagName="h2"
							className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							value={attributes.title}
							onChange={(content) => setAttributes({ title: content })}
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
							<RichText
								{...useBlockProps()}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.years}
								onChange={(content) => setAttributes({ years: content })}
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
							<RichText
								{...useBlockProps()}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.events}
								onChange={(content) => setAttributes({ events: content })}
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
							<RichText
								{...useBlockProps()}
								tagName="dd"
								className="order-first text-3xl font-semibold tracking-tight text-gray-900"
								value={attributes.speakers}
								onChange={(content) => setAttributes({ speakers: content })}
								style={{ color: statTextColor }}
							/>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
}
