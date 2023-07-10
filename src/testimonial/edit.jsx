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
import { SelectControl } from "@wordpress/block-editor";
import {  } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useSelect, withDispatch, withSelect } from "@wordpress/data";

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
	// const props = useBlockProps();

	// const [isOpen, setOpen] = useState(false);
	// const openModal = () => setOpen(true);
	// const closeModal = () => setOpen(false);

	// const posts = useSelect((select) => {
	// 	return select("core").getEntityRecords("postType", "testimonials", {
	// 		per_page: 10,
	// 	});
	// }, []);

	// if (!posts) {
	// 	return "Loading testimonials...";
	// }

	// if (posts.length === 0) {
	// 	return "No testimonials found.";
	// }

	// const postOptions = posts.map((post) => {
	// 	return { value: post.id, label: post.title.rendered };
	// });

	let PostSelector = (props) => {
		const { posts, postID, setPostID } = props;

		const options = posts.map((post) => ({
			value: post.id,
			label: post.title.rendered,
		}));

		return (
			<SelectControl
				label="Select a Post"
				value={postID}
				options={options}
				onChange={(selectedID) => setPostID(selectedID)}
			/>
		);
	};

	PostSelector = withSelect((select) => {
		return {
			posts: select("core").getEntityRecords("postType", "post", {
				per_page: -1,
			}),
		};
	})(PostSelector);

	PostSelector = withDispatch((dispatch, ownProps, registry) => {
		return {
			setPostID(postID) {
				const { setAttributes } = ownProps;
				setAttributes({ postID: parseInt(postID, 10) });
			},
		};
	})(PostSelector);

	return (
		<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0">
			<figure className="mt-10 flex flex-auto flex-col justify-between">
				
				{/* <blockquote className="text-lg leading-8 text-gray-900">
					<p>
						“Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
						Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
						tortor consequat at. Vulputate gravida sociis enim nullam ultricies
						habitant malesuada lorem ac. Tincidunt urna dui pellentesque
						sagittis.”
					</p>
				</blockquote>
				<figcaption className="mt-10 flex items-center gap-x-6">
					<img
						className="h-14 w-14 rounded-full bg-gray-50"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<div className="text-base">
						<div className="font-semibold text-gray-900">Judith Black</div>
						<div className="mt-1 text-gray-500">CEO of Tuple</div>
					</div>
				</figcaption> */}
			</figure>
		</div>
	);
}
