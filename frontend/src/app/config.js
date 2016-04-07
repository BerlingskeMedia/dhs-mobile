var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentWelcome: 'Kom med dine kommentarer nedenfor. Eller deltag i debatten på vores <a href="https://www.facebook.com/stiftstidende">Facebook-side</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 1418,
    frontpageQueueId: 1133,
    frontpageItems: 21,
    canonicalDomain: 'http://dagbladet-holstebro-struer.dk/',
    chartbeatApikey: '3b409894d95b1a406a72ce039bbc4b26',
    chartbeatHost: 'dagbladet-holstebro-struer.dk',
    defaultImageSize: '866x487-c',
    defaultMetaTitle: 'Dagbladet - mobil',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Holstebro',
    weatherIcons: {
            'day': {
              '200': 'thunderstorm',
              '300': 'showers',
              '500': 'rain',
              '520': 'showers',
              '600': 'snow',
              '800': 'day-sunny',
              '801': 'day-cloudy',
              '802': 'day-cloudy',
              '803': 'day-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            },
            'night': {
              '200': 'night-alt-thunderstorm',
              '300': 'night-alt-showers',
              '500': 'night-alt-rain',
              '520': 'night-alt-showers',
              '600': 'night-alt-snow',
              '800': 'night-clear',
              '801': 'night-alt-cloudy',
              '802': 'night-alt-cloudy',
              '803': 'night-alt-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            }
          },
    emediate: {
        "G1": {
            cu: "0",
            w: "930",
            h: "180"
        },
        "G2": {
            cu: "0",
            w: "930",
            h: "180"
        }
    },
    sectionsWithSubsectionsById: {
        64952: 'oestjylland', //Østjylland
        64954: 'oestjylland', //Århus
        64928: 'oestjylland', //Skanderborg
        64939: 'oestjylland', //Odder
        64930: 'oestjylland', //Favrskov
        64944: 'oestjylland', //Syddjurs
        64938: 'oestjylland', //Norddjurs
    },
    sections: {
      sport: {
        name: 'Sport',
        id: 1156
      },
      indland: {
        name: 'Danmark',
        id: 1151
      },
      verden: {
        name: 'Verden',
        id: 1152
      },
      erhverv: {
        name: 'Erhverv',
        id: 1153
      },
      fodbold: {
        name: 'Fodbold', //TODO
        id: 331535
      },
      alarm112: {
        name: 'Alarm 112',
        id: 1154
      },
      krimi: {
        name: 'Krimi',
        id: 1155
      },
      debat: {
        name: 'Debat',
        id: 1174
      },
    },
    sportsTeams: [
        {
            name: 'AGF',
            id: 66919,
            image: 'agf'
        },
        {
            name: 'Bakken Bears',
            id: 66922,
            image: 'bakken-bears'
        },
        {
            name: 'Aarhus Håndbold',
            id: 66921,
            image: 'aarhus-haandbold'
        },
        {
            name: 'SK Aarhus',
            id: 66920,
            image: 'skaarhus'
        },
        {
            name: 'Aarhus Fremad',
            id: 0,
            image: 'aarhus-fremad'
        },
        {
            name: 'Skanderborg Håndbold',
            id: 305761,
            image: 'skanderborg-haandbold'
        },
        {
            name: 'Odder Håndbold',
            id: 329953,
            image: 'odder-haandbold'
        }

    ],
    socials: {
        facebook: 'https://www.facebook.com/netavisen',
        twitter: 'https://twitter.com/Netavisen',
        instagram: 'https://www.instagram.com/dagbladetholstebro',
        google: 'https://plus.google.com/115329460845330231424/about'
    },
    footer: {
        copyright: "2016 Jysk Fynske Medier",
        tipmail: 'holstebro@bergske.dk',
        logo: '/assets/images/dhs_footer.svg',
        phoneNum: 'tel:+4599128300',
        phoneNumDisplay: '+45 9912 8300',
        maplink: 'https://www.google.dk/maps/place/Amtsavisen+-+Randers+Amtsavis/@56.4618659,10.0333604,17z/data=!3m1!4b1!4m2!3m1!1s0x464c1cd07e8dc1d9:0xdca291422097b172',
        postalAddress: 'Kirkestræde 1-3 · 7500 Holstebro',
        policies: {
            copyright: {
                text: 'Ophavsret og vilkår',
                link: 'http://www.berlingskemedia.dk/ophavsret-og-vilkaar/'
            },
            privacy: {
                text: 'Cookie-og Privatlivspolitik',
                link: 'http://www.berlingskemedia.dk/cookie-og-privatlivspolitik/'
            },
            terms: {
                text: 'Generelle handelsbetingelser',
                link: 'http://www.berlingskemedia.dk/generelle-handelsbetingelser/'
            }
        },
        business: {
            subscription: {
                text: 'Abonnement',
                link: 'http://abonnement.dagbladet-holstebro-struer.dk/'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: 'https://dagbladet-holstebro.kundeunivers.dk/kontakt'
            }
        },
    }
}

