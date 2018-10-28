<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lusine');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&DVm?_kA^E<Q?51,okFdW> gHRO+aC0dRt)_VC>~qu9AaG=d xLE}`cH&k[BEb]W');
define('SECURE_AUTH_KEY',  '|~jci.n^=ONGeR][G[%zCG%3wh@.J~kyvlP#0wPw@lp;;BNy?w{82p!ZQGoq$R@g');
define('LOGGED_IN_KEY',    '`DjsQT+6q1%&)|B.@XP:QyvYBprd</*MSJ|RWSE%?6dga%FU{EJeDgFs80@:zxP^');
define('NONCE_KEY',        '(M#H#X%[$@F|vO ]7v.?zV51n[sw]`}@]-;nJH2*_Q3tuQ70S79p&7w$q+GAhTqb');
define('AUTH_SALT',        'FA/nRMR^MEshXqw]+M:41KN#?yO 7+,)*JH;]#OFr#7i+Vt;K.UF8OXSF>h$@M;J');
define('SECURE_AUTH_SALT', 'b[$htN4aLq.*R|.?amEfMW{Nd}ZcT_a@~Xm-p8zm2ii3$1dfBA2/MSp-z|bjY&Xf');
define('LOGGED_IN_SALT',   'Hqc0TUf{^kvXHz[Msf)?J& tb$GO<{}KQf-35d+%(V<~EW0W=/])Ym}nt2X/#? c');
define('NONCE_SALT',       'Ex!B{$W2GiwvD,2m}4)ARrKRXFa5^]v<B8I#q<jGou9M1fWtn~p@u0@rApsSq04~');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
