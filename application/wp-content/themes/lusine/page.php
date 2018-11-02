<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

get_header();

// get iframe HTML
$FeaturedVideoSrc = get_field('featured_video_embed');
$ConvertedVideoSrc = convertYoutube($FeaturedVideoSrc);

?>

<?php  if ( is_front_page() ) : ?>
	<div class="hero">
		<div class="hero__content text--center-tablet-down mt-2-tablet-down">
			<div class="container">
				<div class="row">
					<div class="col-md-6 text--right-tablet-up pb-1-tablet-down">
						<article class="card box-border">
							<div class="card__inner">
								<a href="<?php the_field('latest_release_buy_link'); ?>" target="_blank">
									<div class="card__media ">
										<div class="aspect--1-1">
											<img alt="<?php the_field('latest_release_title'); ?> album cover" class="img-fluid" src="<?php the_field('latest_release_image'); ?>">
										</div>
									</div>
								</a>
							</div>
						</article>
					</div>
					<div class="col-md-6">
						<h1 class="h1 mb-1 text--uppercase"><?php the_field('latest_release_title'); ?></h1>
						<span class="divider divider--sm divider--center-tablet-down" aria-hidden="true"></span>
						<p class="mt-2"><?php if( get_field('latest_release_listen_link') ): ?><a href="<?php the_field('latest_release_listen_link'); ?>" class="btn btn--light mr-1">Listen</a><?php endif; ?><a href="<?php the_field('latest_release_buy_link'); ?>" class="btn btn--light">Buy</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<span class="decor decor--main" aria-hidden="true"></span>

	<div class="intro" aria-hidden="true">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3364.99 680" aria-hidden="true" class="icon icon--logo" width="100" height="25">
			<defs>
					<linearGradient id="logo-gradient-intro" x1="0%" y1="50%" x2="100%" y2="50%" >
					<stop offset="0%" stop-color="#000000">
							<animate attributeName="stop-color" values="#000000; #6b6b6b; #ffffff; #6b6b6b; #000000;" dur="2.5s" repeatCount="1"></animate>
					</stop>
					<stop offset="100%" stop-color="#000000">
							<animate attributeName="stop-color" values="#000000; #222; #eee; #222; #000000;" dur="2.5s" repeatCount="1"></animate>
					</stop>
				</linearGradient>
			</defs>
			<path fill="url('#logo-gradient-intro')" d="M511 500c-8 39-28 137-37 165H0v-32c85-7 95-14 95-99V145c0-85-9-91-87-97V15h289v33c-77 6-86 12-86 97v393c0 49 4 68 24 77 18 8 47 10 82 10 48 0 83-6 106-33 19-20 37-52 54-100l34 8zM1207 48c-57 3-81 21-86 59-4 29-7 68-7 147v99c0 110-17 195-74 255-46 48-114 72-183 72-63 0-124-14-171-50-57-45-85-119-85-236V153c0-93-9-98-85-105V15h286v33c-75 6-84 12-84 105v221c0 154 57 243 171 243 128 0 178-101 178-268v-95c0-78-5-118-9-149-6-36-28-53-97-57V15h246v33zM1614.99 174c-20-63-54-135-137-135-63 0-102 46-102 102 0 62 41 95 126 137 95 48 175 100 175 204 0 111-94 198-236 198-38 0-72-6-99-15-27-8-45-15-57-21-9-24-22-108-29-164l34-10c18 63 72 171 170 171 67 0 108-44 108-111 0-64-48-101-123-140-89-46-171-99-171-201 0-104 83-189 220-189 58 0 109 17 135 25 4 37 10 79 18 142l-32 7zM1736 665v-32c77-7 86-13 86-98V146c0-85-9-92-86-98V15h287v33c-77 6-85 13-85 98v389c0 84 8 91 85 98v32h-287zM2783.99 47c-54 3-76 17-81 62-4 30-8 77-8 167v399h-42l-420-508h-2v235c0 89 4 134 7 164 5 47 24 63 96 67v32h-242v-32c56-4 80-19 85-64 3-33 8-78 8-167V189c0-68-1-82-20-105-20-25-41-33-86-37V15h172l395 461h3V276c0-90-5-137-7-166-6-43-27-59-99-63V15h241v32zM3364.99 502c-6 40-26 133-35 163h-500v-32c87-7 96-14 96-98V146c0-88-9-92-82-98V15h461c1 20 6 90 10 148l-34 5c-9-38-21-67-37-86s-43-26-105-26h-58c-35 0-38 2-38 34v217h77c86 0 96-6 109-75h34v198h-34c-13-72-23-76-109-76h-77v178c0 48 5 71 24 82 18 10 53 11 94 11 61 0 94-7 117-33 19-21 37-54 54-96l33 6z"/>
		</svg>
	</div>


	<div class="page">
		<div class="container">

			<div class="section mt-4">
				<div class="section__block">
					<div class="figure mb-0">
						<picture class="figure__media">
							<source srcset="<?php the_field('featured_video_image_desktop'); ?>" media="(min-width: 415px)">
							<img src="<?php the_field('featured_video_image_mobile'); ?>" alt="Just a Cloud music video">
						</picture>
					</div>
					<div class="modal__trigger__outer">
						<button class="modal__trigger" data-iframe="<?php echo $ConvertedVideoSrc ?>?autoplay=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&color=white">
							<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="icon icon--play">
								<path d="M0 0h48v48H0z" fill="none"/>
								<path d="M24 4a20 20 0 1 0-.01 39.99A20 20 0 0 0 24 4zm-4 29V15l12 9-12 9z"/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<section class="section mt-10-tablet-up mw-950">
				<div class="section__header text--center">
					<h2 class="h2 text--uppercase">Live dates</h2>
					<span class="divider divider--sm divider--center" aria-hidden="true"></span>
				</div>
				<div class="section__block">
					<div class="live-dates">
						<?php

	          $the_query = new WP_Query(array(
	            'post_type'			=> 'live-dates',
	            'posts_per_page'	=> 3,
	            'meta_key'			=> 'live_date_date',
	            'orderby'			=> 'meta_value',
	            'order'				=> 'DESC'
	          ));

	          if ( $the_query->have_posts() ) :
	      		/* Start the Loop */
	        		while ( $the_query->have_posts() ) :
	        			$the_query->the_post();
	        			/*
	        			 * Include the Post-Type-specific template for the content.
	        			 * If you want to override this in a child theme, then include a file
	        			 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
	        			 */
	        			get_template_part( 'template-parts/content-live-dates-upcoming', get_post_type() );

	        		endwhile;
							?>
					</div>
				</div>
				<div class="section__footer text--center mt-2-tablet-down">
					<a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>live-dates" class="btn btn--light">See more</a>
				</div>
						<?php
						else:
						?>
						<p class="text--center mb-2">
							No upcoming live dates to show, please check back soon for updates
						</p>
					</div>
				</div>
						<?php
	      		endif;
	      		?>
			</section>

			<section class="section mw-950">
				<div class="section__header text--center">
					<h2 class="h2 text--uppercase">Latest Work</h2>
					<span class="divider divider--sm divider--center" aria-hidden="true"></span>
				</div>
				<div class="section__block">
					<div class="row">
						<?php
						/* Solo Work */
						$args = array(
							'post_type' => 'work',
							'posts_per_page' => '3',
							'tax_query' => array(
								array(
									'taxonomy' => 'work_category',
									'terms' => 9,
								),
							),
						);
						$query = new WP_Query($args);

							// The Loop
							if ( $query->have_posts() ) {

								while ( $query->have_posts() ) {

									$query->the_post();

									/*
									 * Include the Post-Type-specific template for the content.
									 * If you want to override this in a child theme, then include a file
									 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
									 */
									get_template_part( 'template-parts/content-work-solo-work-home', get_post_type() );


								}
								// Reset Query
								wp_reset_postdata();
							}
						?>
					</div>
				</div>
				<div class="section__footer text--center">
					<a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>work" class="btn btn--light">See more</a>
				</div>
			</section>

			<section class="section section--about mw-750">
				<div class="section__header text--center-wide-down">
					<h2 class="h2 text--uppercase">About</h2>
					<span class="divider divider--sm divider--center-wide-down" aria-hidden="true"></span>
				</div>
				<div class="section__block">
					<p class="lead"><?php the_field("about_introduction_line") ?></p>
					<img src="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>wp-content/themes/lusine/img/content/jeff-mcilwain.jpg" class="img-fluid">
					<p><?php the_field("about_text_block_1") ?></p>
					<?php if (get_field("about_text_block_2")) : ?><p><?php the_field("about_text_block_2") ?></p><?php endif; ?>
					<?php if (get_field("about_text_block_3")) : ?><p><?php the_field("about_text_block_3") ?></p><?php endif; ?>
				</div>
			</section>

<?php else: ?>

	<div class="page">
		<div class="container">

			<header class="page-header">
		    <h1 class="page-header__title"><?php single_post_title() ?></h1>
		    <ul class="page-header__breadcrumb">
		      <li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
		      <li><?php single_post_title() ?></li>
		    </ul>
		  </header>

<?php endif; ?>

		<?php if (is_page( 'Contact' )) : ?>
			<section class="section mw-950">
		    <div class="section__block">
		      <div class="pb-4">
		        <h2 class="display-1">North American Bookings</h2>
		        <p class="lead"><a href="https://pivotal-agency.com/artists/lusine/">Cole Jones/Pivotal Agency</a></p>
		      </div>
		      <div class="pb-4">
		        <h2 class="display-1">Worldwide Bookings</h2>
		        <p class="lead"><a href="mailto:info@connectbookings.com">Connect Bookings</a></p>
		      </div>
		      <div class="pb-4">
		        <h2 class="display-1">All Other Inquiries</h2>
		        <p class="lead"><a href="mailto:jeff@lusineweb.com">Jeff@lusineweb.com</a></p>
		      </div>
		    </div>
		  </section>
		<?php endif; ?>

		</div>
	</div>
<?php
get_footer();
