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
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

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
	const { direction, image } = attributes;

	const directions = [
		{
			label: "Left",
			value: "left",
		},
		{
			label: "Right",
			value: "right",
		},
	];

	const [isHovered, setIsHovered] = useState(null);

	const onSelectImage = function (media) {
		setAttributes({
			image: {
				id: media.id,
				src: media.url,
				alt: media.alt,
			},
		});
	};

	const handleMouseOver = () => {
		setIsHovered(true);
	};

	const handleMouseOut = () => {
		setIsHovered(null);
	};

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<InspectorControls key="setting">
				<div id="tw-settings">
					<PanelBody title={__("Settings")} initialOpen={true}>
						<PanelRow>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__("Image Direction")}
								</legend>
								<div>
									<SelectControl
										options={directions}
										value={direction}
										onChange={(value) => setAttributes({ direction: value })}
									/>
								</div>
							</fieldset>
						</PanelRow>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{direction === "left" ? (
						<>
							<div className="lg:ml-auto lg:pl-4 lg:pt-4">
								<div className="lg:max-w-lg">
									<RichText
										tagName="h2"
										className="text-base font-semibold leading-7 text-indigo-600"
										value={attributes.title}
										onChange={(content) => setAttributes({ title: content })}
										placeholder={__("Write the title here...")}
									/>
									<RichText
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={attributes.sub_title}
										onChange={(content) =>
											setAttributes({ sub_title: content })
										}
										placeholder={__("Write the sub title here...")}
									/>
									<RichText
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={attributes.paragraph}
										onChange={(content) =>
											setAttributes({ paragraph: content })
										}
										placeholder={__("Write the paragraph here...")}
									/>
									{/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										{features.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-gray-900">
													<feature.icon
														className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
														aria-hidden="true"
													/>
													{feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl> */}
								</div>
							</div>
							<div className="flex items-start justify-end lg:order-first">
								<MediaUpload
									onSelect={(media) => setImage(media)}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={image.id}
									render={({ open }) => {
										return (
											<div
												className="relative cursor-pointer"
												onMouseOver={handleMouseOver}
												onMouseOut={handleMouseOut}
												onClick={open}
											>
												{isHovered ? (
													<>
														<div className="absolute bg-black opacity-20 top-0 left-0 w-full h-full z-10"></div>
														<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
															Edit Image
														</p>
													</>
												) : null}
												<img
													src={image.src}
													alt={image.alt}
													className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
													width={2432}
													height={1442}
												/>
											</div>
										);
									}}
								></MediaUpload>
							</div>
						</>
					) : (
						<>
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									<RichText
										tagName="h2"
										className="text-base font-semibold leading-7 text-indigo-600"
										value={attributes.title}
										onChange={(content) => setAttributes({ title: content })}
										placeholder={__("Write the title here...")}
									/>
									<RichText
										tagName="p"
										className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
										value={attributes.sub_title}
										onChange={(content) =>
											setAttributes({ sub_title: content })
										}
										placeholder={__("Write the sub title here...")}
									/>
									<RichText
										tagName="p"
										className="mt-6 text-lg leading-8 text-gray-600"
										value={attributes.paragraph}
										onChange={(content) =>
											setAttributes({ paragraph: content })
										}
										placeholder={__("Write the paragraph here...")}
									/>
									{/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										{features.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-gray-900">
													<feature.icon
														className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
														aria-hidden="true"
													/>
													{feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl> */}
								</div>
							</div>
							<MediaUpload
								onSelect={(media) => setImage(media)}
								allowedTypes={ALLOWED_MEDIA_TYPES}
								value={image.id}
								render={({ open }) => {
									return (
										<div
											className="relative cursor-pointer"
											onMouseOver={handleMouseOver}
											onMouseOut={handleMouseOut}
											onClick={open}
										>
											{isHovered ? (
												<>
													<div className="absolute bg-black opacity-20 top-0 left-0 w-full h-full z-10"></div>
													<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
														Edit Image
													</p>
												</>
											) : null}
											<img
												src={image.src}
												alt={image.alt}
												className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
												width={2432}
												height={1442}
											/>
										</div>
									);
								}}
							></MediaUpload>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
