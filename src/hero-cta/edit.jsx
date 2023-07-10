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
	// const props = useBlockProps();
	const { buttons } = attributes;

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
		<div className="relative isolate overflow-hidden pt-14">
			<InspectorControls key="setting">
				<div id="tw-settings">
					<PanelBody title={__("Settings", "basic-block")} initialOpen={true}>
						<PanelRow>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__("Background image", "gutenpride")}
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
			<img
				src={attributes.imageURL}
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>

			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<RichText
						tagName="h1"
						className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
						value={attributes.title}
						onChange={(content) => setAttributes({ title: content })}
						placeholder={__("Write the title here...")}
					/>
					<RichText
						tagName="p"
						className="mt-6 text-lg leading-8 text-gray-300"
						value={attributes.paragraph}
						onChange={(content) => setAttributes({ paragraph: content })}
						placeholder={__("Write the paragraph here...")}
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
							>
								{button.text}
							</a>
						))}
					</div>
				</div>
			</div>
			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
		</div>
		// <RichText
		// 	{ ...blockProps }
		// 	tagName="p"
		// 	onChange={onChangeContent}
		// 	allowedFormats={["core/bold", "core/italic"]}
		// 	value={attributes.content}
		// 	placeholder={__("Write your text...")}
		// />
	);
}
