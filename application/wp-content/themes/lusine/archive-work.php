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
      <h1 class="page-header__title">Work</h1>
      <ul class="page-header__breadcrumb">
        <li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
        <li>Work</li>
      </ul>
    </header>
    <section class="section">
      <div class="section__block">

        <ul class="card-deck__filters">
          <li>
            <button href="#" class="card-deck__filter btn btn--light is--active" data-filter=".solo-work">Solo work</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".remix">Remixes</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".music-video">Music Videos</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".film">Films</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".game">Games</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".ad">Ads</button>
          </li>
          <li>
            <button href="#" class="card-deck__filter btn btn--light" data-filter=".music-placement">Music Placements</button>
          </li>
        </ul>

        <div class="card-deck">
          <div class="card-deck__items pt-4">
            <div class="row">


          		<?php
              /* Solo Work */
              $args = array(
                'post_type' => 'work',
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
                    get_template_part( 'template-parts/content-work-solo-work', get_post_type() );


                  }
                  // Reset Query
                  wp_reset_postdata();
                }
          		?>

              <?php
              /* Remixes */
              $args = array(
                'post_type' => 'work',
                'tax_query' => array(
                  array(
                    'taxonomy' => 'work_category',
                    'terms' => 10,
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
                    get_template_part( 'template-parts/content-work-remixes', get_post_type() );


                  }
                  // Reset Query
                  wp_reset_postdata();
                }
          		?>

              <?php
              /* Music Videos */
              $args = array(
                'post_type' => 'work',
                'tax_query' => array(
                  array(
                    'taxonomy' => 'work_category',
                    'terms' => 11,
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
                    get_template_part( 'template-parts/content-work-music-videos', get_post_type() );


                  }
                  // Reset Query
                  wp_reset_postdata();
                }
          		?>

              <?php
              /* Films */
              $args = array(
                'post_type' => 'work',
                'tax_query' => array(
                  array(
                    'taxonomy' => 'work_category',
                    'terms' => 12,
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
                    get_template_part( 'template-parts/content-work-films', get_post_type() );


                  }
                  // Reset Query
                  wp_reset_postdata();
                }
          		?>

            </div>
          </div>
        </div>
      </div>
    </section>

	</div>
</div>

<?php
get_footer();
