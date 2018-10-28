<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

?>

<div class="col-md-6 col-lg-4 col-xl-3 remix">
	<article class="card card--external-link">
		<div class="card__inner">
			<a href="<?php the_field('album_link'); ?>">
				<div class="card__media ">
					<div class="aspect--1-1">
						<img alt="<?php the_field('album_title'); ?>" class="img-fluid" src="<?php the_field('album_image'); ?>">
					</div>
				</div>
			</a>
			<div class="card__body">
				<h2 class="card__title lead text--uppercase">
					<a href="<?php the_field('album_link'); ?>">
						<?php the_field('album_title'); ?>
					</a>
				</h2>
				<?php if (get_field('album_year')) :?><div class="card__date"><?php the_field('album_year'); ?></div><?php endif; ?>
			</div>
		</div>
	</article>
</div>
