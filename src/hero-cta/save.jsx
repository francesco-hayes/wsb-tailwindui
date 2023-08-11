/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

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

	return (
		<div className="relative isolate overflow-hidden">
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
					<RichText.Content
						tagName="h1"
						className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
						value={title}
						style={{ color: titleTextColor }}
					/>
					<RichText.Content
						{...blockProps}
						tagName="p"
						className="mt-6 text-lg leading-8 text-gray-300"
						value={paragraph}
						style={{ color: paragraphTextColor }}
					/>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						{buttons.map((button, index) => (
							<a
								key={index}
								href={button.url}
								className={
									index == 0
										? "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
										: "text-sm font-semibold leading-6 text-white"
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
