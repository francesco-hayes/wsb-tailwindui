/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { RichText } from "@wordpress/block-editor";

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
	const { images } = attributes;

	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
						alt="Transistor"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
						alt="Reform"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
						alt="Tuple"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
						alt="SavvyCal"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
						alt="Statamic"
						width={158}
						height={48}
					/>
				</div>
			</div>
		</div>
	);
}
