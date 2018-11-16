<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

	$modalCode = get_field('item_modal_embed');

	// Get the src from the iframe code
	preg_match('/src="([^"]+)"/', $modalCode, $match);
	$modalSrc = $match[1];

?>

<div class="col-md-6 col-lg-4 col-xl-3 music-placement">
	<article class="card">
		<div class="card__inner">
			<div class="card__media">
				<div class="aspect--1-1">
					<img alt="<?php the_field('item_title'); ?>" class="img-fluid" src="<?php the_field('item_image'); ?>">
				</div>
				<div class="modal__trigger__outer">
					<button class="modal__trigger modal__trigger--card" data-iframe="<?php echo $modalSrc ?>">
						<svg aria-hidden="true" width="100" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="icon icon--play">
							<path d="M0 0h48v48H0z" fill="none"/>
							<path d="M24 4a20 20 0 1 0-.01 39.99A20 20 0 0 0 24 4zm-4 29V15l12 9-12 9z"/>
						</svg>
					</button>
				</div>
			</div>
			<div class="card__body">
				<h2 class="card__title lead text--uppercase"><?php the_field('item_title'); ?></h2>
				<?php if (get_field('item_date')) :?><div class="card__date"><?php the_field('item_date'); ?></div><?php endif; ?>
			</div>
		</div>
	</article>
</div>
