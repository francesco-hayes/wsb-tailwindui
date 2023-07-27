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
	RichText,
	InspectorControls,
	URLInputButton,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
} from "@wordpress/components";

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
	const { buttons } = attributes;

	const addURLInput = () => {
		const newInputs = [...buttons, { url: "", text: "" }];
		setAttributes({ buttons: newInputs });
	};

	const removeURLInput = (index) => {
		const newInputs = [...buttons];
		newInputs.splice(index, 1);
		setAttributes({ buttons: newInputs });
	};

	const updateURLInput = (index, property, value) => {
		const newInputs = [...buttons];
		newInputs[index][property] = value;
		setAttributes({ buttons: newInputs });
	};

	return (
		<div className="bg-indigo-700">
			<InspectorControls key="setting">
				<div id="tw-settings">
					<PanelBody title={__("Settings", "basic-block")} initialOpen={true}>
						{buttons.map((input, index) => (
							<PanelRow>
								<fieldset>
									<legend className="blocks-base-control__label">
										{__(`Button ${index + 1}`, "gutenpride")}
									</legend>
									<div key={index}>
										<TextControl
											value={input.text}
											onChange={(value) => updateURLInput(index, "text", value)}
											placeholder="Button Text"
										/>
										<URLInputButton
											onChange={(value) => updateURLInput(index, "url", value)}
											url={input.url}
											allowedTypes={["page"]}
										/>
										<Button
											className="my-2"
											isDestructive
											onClick={() => removeURLInput(index)}
										>
											Remove URL
										</Button>
									</div>
								</fieldset>
							</PanelRow>
						))}
						<PanelRow>
							<Button onClick={addURLInput}>Add URL</Button>
						</PanelRow>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<RichText
						tagName="h2"
						className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
						onChange={(content) => setAttributes({ title: content })}
						value={attributes.title}
						placeholder={__("Write the title here...")}
					/>
					<RichText
						tagName="p"
						className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200"
						onChange={(content) => setAttributes({ sub_title: content })}
						value={attributes.sub_title}
						placeholder={__("Write the sub title text here...")}
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
