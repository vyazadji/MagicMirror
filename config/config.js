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
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'События',
			position: 'top_left',
            maximumEntries: 20,
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
                        repeatingCountTitle: "Дни рождения",
						url: 'https://calendar.google.com/calendar/ical/4h5ajk6irlvakqm3b1le9j7g78%40group.calendar.google.com/private-ecbc42870296bffac13a063ddf51d5be/basic.ics'
					},
					{
						symbol: 'home ',
                        repeatingCountTitle: "Государственные праздники",
						url: 'https://calendar.google.com/calendar/ical/ru.ukrainian%23holiday%40group.v.calendar.google.com/public/basic.ics'
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
				location: 'Одесса',
				locationID: '698740',  //ID from http://www.openweathermap.org
				appid: '07ecdcb2d4d25a1e1a3309c9ab276b62'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Прогноз погоды',
            showRainAmount: true,
            maxNumberOfDays: 10,
			config: {
				location: 'Одесса',
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
						title: "Афиша www.048.ua",
						url: "http://www.048.ua/rss/afisha"
					},
					{
						title: "Афиша Одесса",
						url: "http://md-eksperiment.org/rss.php"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
                showDescription: true,
                updateInterval: 20000
			}
		},
        {
          module: "updatenotification",
          position: "top_bar"
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
