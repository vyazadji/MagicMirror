/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'ru',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third',
            disabled: true
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Odessag',
				locationID: '698740',  //ID from http://www.openweathermap.org
				appid: '07ecdcb2d4d25a1e1a3309c9ab276b62'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Odessag',
				locationID: '698740',  //ID from http://www.openweathermap.org
				appid: '984d547837c83f16e3499e3f8bb944a7'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Afisha www.048.ua Odessa",
						url: "http://www.048.ua/rss/afisha"
					},
					{
						title: "Афиша Одесса",
						url: "http://md-eksperiment.org/rss.php"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
