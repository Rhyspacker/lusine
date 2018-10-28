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

	<div class="page">
		<div class="container">

			<?php  if ( is_front_page() ) { ?>
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
						<div class="live-dates__row">
							<div class="live-dates__date">Sept 8, 2018</div>
							<div class="live-dates__info">Mesa por Vida, Santa Fe, NM</div>
							<div class="live-dates__btn"><a href="/" class="btn btn--light btn--sm">Buy tickets</a></div>
						</div>
						<div class="live-dates__row">
							<div class="live-dates__date">Sept 14, 2018</div>
							<div class="live-dates__info">Strategic Reserve, Oakland, CA</div>
							<div class="live-dates__btn"><a href="/" class="btn btn--light btn--sm">Buy tickets</a></div>
						</div>
						<div class="live-dates__row">
							<div class="live-dates__date">Nov 10, 2018</div>
							<div class="live-dates__info">Cervantes Masterpiece Ballroom, Denver, CO</div>
							<div class="live-dates__btn"><a href="/" class="btn btn--light btn--sm">Buy tickets</a></div>
						</div>
					</div>
				</div>
				<div class="section__footer text--center mt-2-tablet-down">
					<a href="./live-dates.html" class="btn btn--light">See more</a>
				</div>
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
					<p class="lead">Jeff McIlwain has been producing his diverse, melodic strain of abstract electronic music as Lusine for a decade and a half.</p>
					<img src="./wp-content/themes/lusine/img/content/jeff-mcilwain.jpg" class="img-fluid">
					<p>Originally a Texas native, McIlwain moved to the West Coast in the late '90s to study electronic music and sound design at CalArts. It was during this time in L.A. that he would meet Shad T. Scott, who subsequently put out Lusine's self-titled debut on his Isophlux imprint. McIlwain relocated to his current home of Seattle in late 2002 and began steadily releasing his music on Ghostly International. He has also contributed tracks to various compilations and remix releases from Mute, !K7, Kompakt, Asthmatic Kitty, and Shitkatapult.</p>
					<p>As Lusine, McIlwain has performed throughout the US and abroad, including sets at London's esteemed Fabric nightclub (RIP), Tokyo's Unit, Berlin's Watergate, and Melbourne's Electric Owl. Recent tour dates include appearances with electronic luminaries like Tipper and Blockhead, as well as playing at 2016's Further Future festival with a live drummer (Trent Moorman).</p>
					<p>In addition to his Lusine productions, McIlwain has been involved with various film projects that include The Sitter (Jonah Hill, 2011) and two David Gordon Green movies, Snow Angels (featuring Kate Beckinsale and Sam Rockwell, 2007) and Joe (Nicolas Cage, Tye Sheridan, 2013) with music writing partner David Wingo. McIlwain is also currently collaborating with Wingo on the film score for Meredith Danluck's upcoming State Like Sleep. Following Lusine's acclaimed The Waiting Room from 2013 and 2014's Arterial EP (which was accompanied by a groundbreaking video from Christophe Thockler), comes the new full-length, Sensorimotor, set for release in early 2017 on Ghostly International.</p>
				</div>
			</section>

			<?php } else { ?>

			<header class="page-header">
		    <h1 class="page-header__title"><?php single_post_title() ?></h1>
		    <ul class="page-header__breadcrumb">
		      <li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
		      <li><?php single_post_title() ?></li>
		    </ul>
		  </header>

			<?php } ?>

		</div>
	</div>
<?php
get_footer();
