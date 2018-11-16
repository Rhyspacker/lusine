<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

get_header();
?>

<div class="page">
  <div class="container">

    <header class="page-header">
      <h1 class="page-header__title">Live Dates</h1>
      <ul class="page-header__breadcrumb">
        <li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
        <li>Live Dates</li>
      </ul>
    </header>
    <section class="section mw-950">
      <div class="section__block">
        <h2 class="h3 text--center text--uppercase">Upcoming Dates</h2>
        <span class="divider divider--sm divider--center" aria-hidden="true"></span>
        <div class="live-dates mt-2 mb-4">
          <?php

          $the_query = new WP_Query(array(
            'post_type'			=> 'live-dates',
            'posts_per_page'	=> -1,
            'meta_key'			=> 'live_date_date',
            'orderby'			=> 'meta_value',
            'order'				=> 'DESC',
            'meta_query' => array( // WordPress has all the results, now, return only the events after today's date
              array(
                'key' => 'live_date_date', // Check the start date field
                'value' => date("Y-m-d"), // Set today's date (note the similar format)
                'compare' => '>=', // Return the ones greater than today's date
                'type' => 'DATE' // Let WordPress know we're working with date
              )
            ),
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

            <?php
          else:
          ?>
          <p class="text--center mb-2">
            No upcoming live dates to show, please check back soon for updates
          </p>
          <?php
          endif;
          ?>
        </div>

        <h2 class="h3 text--center text--uppercase mt-4">Past Dates</h2>
        <span class="divider divider--sm divider--center" aria-hidden="true"></span>
        <div class="live-dates mt-2 mb-4">
          <?php

          $the_query = new WP_Query(array(
            'post_type'			=> 'live-dates',
            'posts_per_page'	=> -1,
            'meta_key'			=> 'live_date_date',
            'orderby'			=> 'meta_value',
            'order'				=> 'DESC',
            'meta_query' => array( // WordPress has all the results, now, return only the events after today's date
              array(
                'key' => 'live_date_date', // Check the start date field
                'value' => date("Y-m-d"), // Set today's date (note the similar format)
                'compare' => '<', // Return the ones greater than today's date
                'type' => 'DATE' // Let WordPress know we're working with date
              )
            ),
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
        			get_template_part( 'template-parts/content-live-dates-past', get_post_type() );

        		endwhile;
      		endif;
      		?>
        </div>

        <img class="img-fluid mt-4" src="../wp-content/themes/lusine/img/content/lusine-live.jpg" alt="Lusine live">

      </div>
    </section>

	</div>
</div>

<?php
get_footer();
