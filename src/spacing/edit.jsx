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
import {
	InspectorControls,
	PanelColorSettings,

} from "@wordpress/block-editor";
import { __experimentalDimensionControl as DimensionControl } from "@wordpress/components";
import { useState } from "@wordpress/element";


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

	const [paddingSize, setPaddingSize] = useState("");

	const {
		backgroundColor,
		spacing
	} = attributes;

	return (
		<div style={{ backgroundColor: backgroundColor }} className="bg-white">
			<DimensionControl
				label={"Padding"}
				icon={"desktop"}
				onChange={(value) => setPaddingSize(value)}
				value={paddingSize}
			/>
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
					]}
				/>
			</InspectorControls>
		</div>
	);
}
