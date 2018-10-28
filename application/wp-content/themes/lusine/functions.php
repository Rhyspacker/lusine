<?php
/**
 * lusine functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package lusine
 */

if ( ! function_exists( 'lusine_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function lusine_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on lusine, use a find and replace
		 * to change 'lusine' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'lusine', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'lusine' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'lusine_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'lusine_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lusine_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'lusine_content_width', 640 );
}
add_action( 'after_setup_theme', 'lusine_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lusine_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'lusine' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'lusine' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'lusine_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function lusine_scripts() {
	wp_enqueue_style( 'lusine-style', get_stylesheet_uri() );
	wp_enqueue_script( 'lusine-jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
	wp_enqueue_script( 'lusine-timeline', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TimelineMax.min.js');
	wp_enqueue_script( 'lusine-tweenmax', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js');
	wp_enqueue_script( 'lusine', get_template_directory_uri() . '/js/main.js#asyncload', true);
}
add_action( 'wp_enqueue_scripts', 'lusine_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/*
// ========================================= //
	Custom Functions
// ========================================= //
*/

// Async load
function ikreativ_async_scripts($url) {
  if ( strpos( $url, '#asyncload') === false )
    return $url;
  else if ( is_admin() )
    return str_replace( '#asyncload', '', $url );
  else
	return str_replace( '#asyncload', '', $url )."' async='async";
}
add_filter( 'clean_url', 'ikreativ_async_scripts', 11, 1 );


function convertYoutube($url) {
  $shortUrlRegex = '/youtu.be\/([a-zA-Z0-9_]+)\??/i';
  $longUrlRegex = '/youtube.com\/((?:embed)|(?:watch))((?:\?v\=)|(?:\/))(\w+)/i';

  if (preg_match($longUrlRegex, $url, $matches)) {
    $youtube_id = $matches[count($matches) - 1];
  }

  if (preg_match($shortUrlRegex, $url, $matches)) {
    $youtube_id = $matches[count($matches) - 1];
  }
  return 'https://www.youtube.com/embed/' . $youtube_id ;
}

function get_iframe_src( $input ) {
	preg_match_all("/<iframe[^>]*src=[\"|']([^'\"]+)[\"|'][^>]*>/i", $input, $output );

	$return = $output[1];

	return $return;
	}

/*
// ========================================= //
	Custom Post Types
// ========================================= //
*/

function news_post_type() {
	$labels = array(
		'name' => 'News',
		'singular_name' => 'News',
		'add_new' => 'Add News Item',
		'all_items' => 'All Items',
		'add_new_item' => 'Add News Item',
		'edit_item' => 'Edit News Item',
		'new_item' => 'New News Item',
		'view_item' => 'View News Item',
		'search_item' => 'Search News',
		'not_found' => 'No items found',
		'not_found_in_trash' => 'No items found in trash',
		'parent_item_colon' => 'Parent Item'
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => true,
		'publicly_queryable' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'supports' => array(
			'title',
			'custom-fields',
			'editor'
		),
		'menu_position' => 3,
		'exclude_from_search' => true,
	);

	register_post_type('news', $args);
}
add_action( 'init', 'news_post_type');


function work_post_type() {
	$labels = array(
		'name' => 'Work',
		'singular_name' => 'Work',
		'add_new' => 'Add Work Item',
		'all_items' => 'All Items',
		'add_new_item' => 'Add Work Item',
		'edit_item' => 'Edit Work Item',
		'new_item' => 'New Work Item',
		'view_item' => 'View Work Item',
		'search_item' => 'Search Work',
		'not_found' => 'No items found',
		'not_found_in_trash' => 'No items found in trash',
		'parent_item_colon' => 'Parent Item'
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => true,
		'publicly_queryable' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'supports' => array(
			'title',
			'custom-fields',
		),
		'menu_position' => 4,
		'exclude_from_search' => true,
	);

	register_post_type('work', $args);
}
add_action( 'init', 'work_post_type');


function create_my_taxonomies() {
    register_taxonomy(
        'work_category',
        'work',
        array(
            'labels' => array(
                'name' => 'Work Categories',
                'add_new_item' => 'Add New Work Category',
                'new_item_name' => "New Work Category"
            ),
            'show_ui' => true,
            'show_tagcloud' => false,
						'show_admin_column' => true,
            'hierarchical' => true
        )
    );
}

add_action( 'init', 'create_my_taxonomies', 0 );

function checktoradio(){
    echo '<script type="text/javascript">jQuery("#work_categorychecklist input").each(function(){this.type="radio"});</script>';
}

add_action('admin_footer', 'checktoradio');
