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
	MediaUpload,
	InspectorControls,
	PanelColorSettings,
	RichText,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
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
	const { images, title, backgroundColor, titleTextColor } = attributes;

	const [isHovered, setIsHovered] = useState(null);

	const setImage = (index, media) => {
		const newImages = [...images];

		newImages[index] = {
			id: media.id,
			src: media.url,
			alt: media.alt,
		};

		setAttributes({ images: newImages });
	};

	const addImage = () => {
		setAttributes({
			images: [
				...images,
				{
					src: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
					alt: "Placeholder image",
				},
			],
		});
	};

	const removeImage = (index) => {
		const newImages = [...images];

		newImages.splice(index, 1);

		setAttributes({ images: newImages });
	};

	const handleMouseOver = (index) => {
		setIsHovered(index);
	};

	const handleMouseOut = () => {
		setIsHovered(null);
	};

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="relative bg-gray-900 py-24 sm:py-32"
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
							value: titleTextColor,
							onChange: (content) => setAttributes({ titleTextColor: content }),
							label: __("Title text color"),
						},
					]}
				/>
			</InspectorControls>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<RichText
					tagName="h2"
					className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10"
					onChange={(content) => setAttributes({ title: content })}
					value={title}
					placeholder={__("Title for this section...")}
					style={{ color: titleTextColor }}
				/>
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{images.map((image, index) => (
						<MediaUpload
							onMouseOut={handleMouseOut}
							onSelect={(media) => setImage(index, media)}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={image.id}
							render={({ open }) => {
								if (isHovered === index) {
									return (
										<>
											<div
												className="col-span-2 col-start-2 max-h-12 w-full sm:col-start-auto lg:col-span-1"
												onMouseOut={handleMouseOut}
											>
												<Button
													className="text-white"
													onClick={() => removeImage(index)}
												>
													Remove Image
												</Button>
												<Button className="text-white" onClick={open}>
													Change Image
												</Button>
											</div>
										</>
									);
								}
								return (
									<img
										onMouseOver={() => handleMouseOver(index)}
										onMouseOut={handleMouseOut}
										className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
										src={image.src}
										alt={image.alt}
										width={158}
										height={48}
									/>
								);
							}}
						/>
					))}
				</div>
			</div>
			<div className="absolute bottom-2 left-0 w-full flex justify-center">
				<Button className="text-black bg-white" onClick={addImage}>
					Add Image
				</Button>
			</div>
		</div>
	);
}
