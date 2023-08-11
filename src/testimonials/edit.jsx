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
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";

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
	const blockProps = useBlockProps();

	const { testimonial_one, testimonial_two, backgroundColor, textColor } =
		attributes;

	const setTestimonial = (position, { keys, content }) => {
		const testimonial = position === "left" ? testimonial_one : testimonial_two;

		// Split the nested key into its segments
		const segments = keys.split(".");
		let target = testimonial;

		// Traverse the object structure using the segments
		for (let i = 0; i < segments.length - 1; i++) {
			target = target[segments[i]];
		}

		// Update the value of the nested key
		target[segments[segments.length - 1]] = content;

		if (position === "left") {
			setAttributes({
				testimonial_one: { ...testimonial_one, ...testimonial },
			});
		} else {
			setAttributes({
				testimonial_two: { ...testimonial_two, ...testimonial },
			});
		}
	};

	return (
		<div className="relative isolate overflow-hidden">
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
							value: textColor,
							onChange: (content) => setAttributes({ textColor: content }),
							label: __("Text color"),
						},
					]}
				/>
			</InspectorControls>
			<section
				className="bg-white py-24 sm:py-32"
				style={{ backgroundColor: backgroundColor }}
			>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:gap-20">
						<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
							<figure className="flex flex-auto flex-col justify-between">
								<blockquote className="text-lg leading-8 text-gray-900">
									<RichText
										{...blockProps}
										tagName="p"
										value={testimonial_one.text}
										onChange={(content) =>
											setTestimonial("left", {
												keys: "text",
												content,
											})
										}
										placeholder={__("Write the testimonial here...")}
										style={{
											color: textColor,
										}}
									/>
								</blockquote>
								<figcaption className="mt-10 flex items-center gap-x-6">
									<MediaUpload
										onSelect={(media) => {
											setTestimonial("left", {
												keys: "author.image.url",
												content: media.url,
											});
											setTestimonial("left", {
												keys: "author.image.alt",
												content: media.alt,
											});
										}}
										allowedTypes={["image"]}
										value={testimonial_one.author?.image?.url}
										render={({ open }) => (
											<img
												onClick={open}
												className="h-14 w-14 rounded-full bg-gray-50 cursor-pointer"
												src={testimonial_one.author?.image?.url}
												alt=""
											/>
										)}
									/>
									<div className="text-base">
										<RichText
											tagName="div"
											className="font-semibold text-gray-900"
											value={testimonial_one.author?.name}
											onChange={(content) =>
												setTestimonial("left", {
													keys: "author.name",
													content,
												})
											}
											placeholder={__("Author name")}
											style={{
												color: textColor,
											}}
										/>
										<RichText
											tagName="div"
											className="mt-1 text-gray-500"
											value={testimonial_one.author?.title}
											onChange={(content) =>
												setTestimonial("left", {
													keys: "author.title",
													content,
												})
											}
											placeholder={__("Author title")}
											style={{
												color: textColor,
											}}
										/>
									</div>
								</figcaption>
							</figure>
						</div>
						<div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
							<figure className="flex flex-auto flex-col justify-between">
								<blockquote className="text-lg leading-8 text-gray-900">
									<RichText
										{...blockProps}
										tagName="p"
										value={testimonial_two.text}
										onChange={(content) =>
											setTestimonial("right", {
												keys: "text",
												content,
											})
										}
										placeholder={__("Write the testimonial here...")}
										style={{
											color: textColor,
										}}
									/>
								</blockquote>
								<figcaption className="mt-10 flex items-center gap-x-6">
									<MediaUpload
										onSelect={(media) => {
											setTestimonial("right", {
												keys: "author.image.url",
												content: media.url,
											});
											setTestimonial("right", {
												keys: "author.image.alt",
												content: media.alt,
											});
										}}
										allowedTypes={["image"]}
										value={testimonial_two.author?.image?.url}
										render={({ open }) => (
											<img
												onClick={open}
												className="h-14 w-14 rounded-full bg-gray-50 cursor-pointer"
												src={testimonial_two.author?.image?.url}
												alt=""
											/>
										)}
									/>
									<div className="text-base">
										<RichText
											tagName="div"
											className="font-semibold text-gray-900"
											value={testimonial_two.author?.name}
											onChange={(content) =>
												setTestimonial("right", {
													keys: "author.name",
													content,
												})
											}
											placeholder={__("Author name")}
											style={{
												color: textColor,
											}}
										/>
										<RichText
											tagName="div"
											className="mt-1 text-gray-500"
											value={testimonial_two.author?.title}
											onChange={(content) =>
												setTestimonial("right", {
													keys: "author.title",
													content,
												})
											}
											placeholder={__("Author title")}
											style={{
												color: textColor,
											}}
										/>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
