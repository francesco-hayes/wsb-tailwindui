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
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	URLInputButton,
	PanelColorSettings,
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

const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const {
		title,
		paragraph,
		imageURL,
		imageALT,
		buttons,
		backgroundColor,
		titleTextColor,
		paragraphTextColor,
		buttonTextColor,
		buttonColor,
		backgroundColorOpacity,
	} = attributes;

	const onSelectImage = function (media) {
		setAttributes({
			imageURL: media.url,
			imageID: media.id,
			imageALT: media.alt,
		});
	};

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
		<div className="relative isolate overflow-hidden">
			<InspectorControls key="setting">
				<div id="tw-settings">
					<PanelBody title={__("Settings", "basic-block")} initialOpen={true}>
						<PanelRow>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__("Background image")}
								</legend>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => onSelectImage(media)}
										allowedTypes={ALLOWED_MEDIA_TYPES}
										value={attributes.imageID}
										render={({ open }) => (
											<Button onClick={open}>Change Image</Button>
										)}
									/>
								</MediaUploadCheck>
							</fieldset>
						</PanelRow>
						<PanelRow>
							<PanelColorSettings
								title={__("Color settings")}
								initialOpen={false}
								colorSettings={[
									{
										value: backgroundColor,
										onChange: (content) =>
											setAttributes({ backgroundColor: content }),
										label: __("Background gradient color"),
									},
									{
										value: buttonColor,
										onChange: (content) =>
											setAttributes({ buttonColor: content }),
										label: __("Button color"),
									},
									{
										value: buttonTextColor,
										onChange: (content) =>
											setAttributes({ buttonTextColor: content }),
										label: __("Button text color"),
									},
									{
										value: titleTextColor,
										onChange: (content) =>
											setAttributes({ titleTextColor: content }),
										label: __("Title text color"),
									},
									{
										value: paragraphTextColor,
										onChange: (content) =>
											setAttributes({ paragraphTextColor: content }),
										label: __("Paragraph text color"),
									},
								]}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								value={backgroundColorOpacity}
								onChange={(value) =>
									setAttributes({ backgroundColorOpacity: value })
								}
								placeholder="Background Opacity Value"
							/>
						</PanelRow>
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
			<div
				className="absolute inset-x-0 inset-y-0 z-10 transform-gpu overflow-hidden pointer-events-none bg-black opacity-30"
				aria-hidden="true"
				style={{
					backgroundColor: backgroundColor,
					opacity: backgroundColorOpacity,
				}}
			></div>
			<img
				src={imageURL}
				alt={imageALT}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="relative z-20 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<RichText
						tagName="h1"
						className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
						value={title}
						onChange={(content) => setAttributes({ title: content })}
						placeholder={__("Write the title here...")}
						style={{ color: titleTextColor }}
					/>
					<RichText
						{...blockProps}
						tagName="p"
						className="mt-6 text-lg leading-8 text-gray-300"
						value={paragraph}
						onChange={(content) => setAttributes({ paragraph: content })}
						placeholder={__("Write the paragraph here...")}
						style={{ color: paragraphTextColor }}
					/>
					<div className="button-group mt-10 flex items-center justify-center gap-x-6">
						{buttons.map((button, index) => (
							<a
								key={index}
								href={button.url}
								className={
									index == 0
										? "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
										: "text-sm font-semibold leading-6 text-white ml-2"
								}
								style={{
									backgroundColor: index == 0 ? buttonColor : "transparent",
									color: index == 0 ? buttonTextColor : "white",
								}}
							>
								{button.text}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
