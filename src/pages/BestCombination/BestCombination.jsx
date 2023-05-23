import {Fragment, useEffect, useRef, useState} from 'react';
import Loading from "../../components/layout/Loading.jsx";
import './index.css'

const BestCombination = () => {

    const effectRan = useRef(false)

    let teams;
    teams = [
        {
            "players": [
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "k0nfig",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/IEAvwsdTtAJ0DUZsHYeljz.png?ixlib=java-2.1.0&w=400&s=d5d8b818304dbd762260878fd0220191",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.07",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "58.2%",
                            "entryFragsPerRound": "11.8%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "16.6%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Ninjas in Pyjamas",
                            "link": "/team/4411/ninjas-in-pyjamas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9078
                        },
                        "statsLocation": "/stats/players/9078/k0nfig?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "REZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Wgc0uYCP9jvw0lTC-4MbE-.png?ixlib=java-2.1.0&w=400&s=1331b00f7a379079e6d67db2a0514431",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.06",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.04",
                            "hsPercentage": "49.8%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.9%",
                            "multiKillRounds": "16.4%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Ninjas in Pyjamas",
                            "link": "/team/4411/ninjas-in-pyjamas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9278
                        },
                        "statsLocation": "/stats/players/9278/rez?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "Aleksib",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dgFQooikdq8hA0UFfUDghb.png?ixlib=java-2.1.0&w=400&s=8614b853ba7ed56b3359c40b1b8c2768",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "1.01",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.6%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "12.6%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Ninjas in Pyjamas",
                            "link": "/team/4411/ninjas-in-pyjamas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9816
                        },
                        "statsLocation": "/stats/players/9816/aleksib?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "Brollan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tle_HlrL6OjIXDgtNaXpvs.png?ixlib=java-2.1.0&w=400&s=12fe49e622ea4400ffdcdbc948f30fab",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.08",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "14.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Ninjas in Pyjamas",
                            "link": "/team/4411/ninjas-in-pyjamas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13666
                        },
                        "statsLocation": "/stats/players/13666/brollan?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "headtr1ck",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ahxfIiKlKDAkloRSdNDZVI.png?ixlib=java-2.1.0&w=400&s=689ce17a945f835c15252cdbb63bda93",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.17",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.34",
                            "hsPercentage": "31.3%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "Ninjas in Pyjamas",
                            "link": "/team/4411/ninjas-in-pyjamas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19592
                        },
                        "statsLocation": "/stats/players/19592/headtr1ck?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Ninjas in Pyjamas",
                "link": "/team/4411/ninjas-in-pyjamas",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/-ttGATBV_P_HcZazxNNtIb.png?ixlib=java-2.1.0&w=50&s=ba94f7812d1f47183a83f3f34ab959eb",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/mbY2YeFKUAbL9NyO6ab7-c.png?ixlib=java-2.1.0&w=50&s=33901dc1e88dc81e479574095806fcb9"
            },
            "rank": 13
        },
        {
            "players": [
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "tabseN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/g22dLV-mFCkVFJHBGWy0yd.png?ixlib=java-2.1.0&w=400&s=405572fbd92d9c331d89446e2dfec5cd",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.07",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "51.5%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 5794
                        },
                        "statsLocation": "/stats/players/5794/tabsen?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "k1to",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CMhB2EMPV7yTDJg1L3dkIz.png?ixlib=java-2.1.0&w=400&s=713df01a72949e24953bd102e27cd861",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.04",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "60.2%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "17.6%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12781
                        },
                        "statsLocation": "/stats/players/12781/k1to?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "faveN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ogOOkSn18ezJF6wi7YjXtP.png?ixlib=java-2.1.0&w=400&s=72537b854a7e70bd1d0f333c905b3d29",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.04",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "56.3%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14932
                        },
                        "statsLocation": "/stats/players/14932/faven?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
                    "playerData": {
                        "name": "Krimbo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/9xY1Z3aixu-5mfus4BHuPS.png?ixlib=java-2.1.0&w=400&s=621ab192d3cb2e0a2eb2f1a107c9a5fe",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.12",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "49.9%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "23.6%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.58"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19899
                        },
                        "statsLocation": "/stats/players/19899/krimbo?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "hyped",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uc1wCCkL-HEad1Gqn-4fS9.png?ixlib=java-2.1.0&w=400&s=eb0c77c66eca277461a162d8568a0cef",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.13",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.43",
                            "hsPercentage": "24.1%",
                            "entryFragsPerRound": "12.3%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "17.5%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21468
                        },
                        "statsLocation": "/stats/players/21468/hyped?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "BIG",
                "link": "/team/7532/big",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
            },
            "rank": 16
        },
        {
            "players": [
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "mynio",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-uaG_roOxK_iNF0t9i6JW3.png?ixlib=java-2.1.0&w=400&s=b37067e688fa59f7d40046b5262f2436",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.96",
                            "ctRating": "0.98",
                            "tRating": "0.95",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.5%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "9INE",
                            "link": "/team/10278/9ine",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
                        },
                        "fantasyPlayerId": {
                            "playerId": 4829
                        },
                        "statsLocation": "/stats/players/4829/mynio?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "Goofy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/lKA1seMfS0aqlfEXSJjujy.png?ixlib=java-2.1.0&w=400&s=982037f9fd8e25723ea528c57a88f3b1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.10",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "38.3%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "9INE",
                            "link": "/team/10278/9ine",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15428
                        },
                        "statsLocation": "/stats/players/15428/goofy?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 222000,
                    "playerData": {
                        "name": "hades",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-p6yxNicbjdldpjtgdGscF.png?ixlib=java-2.1.0&w=400&s=84eca1f9d36b50fbb8b3ec10008e2ce1",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.16",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "28.8%",
                            "entryFragsPerRound": "12.2%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "17.4%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "9INE",
                            "link": "/team/10278/9ine",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16848
                        },
                        "statsLocation": "/stats/players/16848/hades?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "KEi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Kv1uTEaoL149Grf3Pe4L04.png?ixlib=java-2.1.0&w=400&s=0dadaf00b5825b15b53ead393a5d7e1c",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.13",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "41.9%",
                            "entryFragsPerRound": "12.5%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "15.5%",
                            "multiKillRounds": "18.7%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "9INE",
                            "link": "/team/10278/9ine",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17504
                        },
                        "statsLocation": "/stats/players/17504/kei?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "Kylar",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nU4fgkFU-Zl9MnfGI6OloE.png?ixlib=java-2.1.0&w=400&s=66d541434e97840222a486ba89f02eee",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.05",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "57.2%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "9INE",
                            "link": "/team/10278/9ine",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19114
                        },
                        "statsLocation": "/stats/players/19114/kylar?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "9INE",
                "link": "/team/10278/9ine",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/BGC4LXlC8s4W0xWyelk2BI.png?ixlib=java-2.1.0&w=50&s=9b131e9589738e2c66ad28f1c1ed1d4b",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/59EeJjjh_x-MUuUzupO48J.png?ixlib=java-2.1.0&w=50&s=1e7daabab5fabc1b07abaff3d8fb0566"
            },
            "rank": 21
        },
        {
            "players": [
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Krad",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/QZ_zS3e8skrhChdyQgQuWR.png?ixlib=java-2.1.0&w=400&s=14d23ab9c3fe37fcfa90a53dd01e8b28",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.00",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.7%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "FORZE",
                            "link": "/team/8135/forze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12027
                        },
                        "statsLocation": "/stats/players/12027/krad?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "Jerry",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/jQKgKDBqEXV8aul_UcOjC_.png?ixlib=java-2.1.0&w=400&s=4b6aa7f8fd91d5325968090016703b10",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "44.1%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "15.0%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "FORZE",
                            "link": "/team/8135/forze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13157
                        },
                        "statsLocation": "/stats/players/13157/jerry?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
                    "playerData": {
                        "name": "zorte",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/pc7WZPg8UMe4lCtM1p2e6L.png?ixlib=java-2.1.0&w=400&s=4f7882c4305b65ab293be1728333d48e",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.18",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "33.3%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "17.0%",
                            "dpr": "0.56"
                        },
                        "team": {
                            "name": "FORZE",
                            "link": "/team/8135/forze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15662
                        },
                        "statsLocation": "/stats/players/15662/zorte?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 216000,
                    "playerData": {
                        "name": "shalfey",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/0DIX92ABFI-kAzLRwO9wm8.png?ixlib=java-2.1.0&w=400&s=1fe03b019ad8ba7dcd72bea0527bd477",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.15",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.4%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "FORZE",
                            "link": "/team/8135/forze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17011
                        },
                        "statsLocation": "/stats/players/17011/shalfey?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
                    "playerData": {
                        "name": "r3salt",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/MXMqBI637--gU4PYhrJ40e.png?ixlib=java-2.1.0&w=400&s=32fcbc120d1c9667f3aaacc70d72e1da",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.9%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "17.3%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "FORZE",
                            "link": "/team/8135/forze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20709
                        },
                        "statsLocation": "/stats/players/20709/r3salt?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "FORZE",
                "link": "/team/8135/forze",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/x0iXzbuTd75816rzdvXwnQ.png?ixlib=java-2.1.0&w=50&s=37c00d1a45352772ac1211efddb163eb"
            },
            "rank": 22
        },
        {
            "players": [
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "rigoN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CH.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/H82X1oyOfqQTzKPprcX-t-.png?ixlib=java-2.1.0&w=400&s=85e81666899eddcb20c2788a6d55482a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.04",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "55.8%",
                            "entryFragsPerRound": "13.0%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "14.1%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.75"
                        },
                        "team": {
                            "name": "Bad News Eagles",
                            "link": "/team/11518/bad-news-eagles",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12708
                        },
                        "statsLocation": "/stats/players/12708/rigon?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 179000,
                    "playerData": {
                        "name": "SENER1",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RSZYO4IKSPT2bm8FunvaVJ.png?ixlib=java-2.1.0&w=400&s=541497a08917d7086fb4fd22cb4f802b",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.95",
                            "tRating": "0.89",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.7%",
                            "entryFragsPerRound": "6.6%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "22.0%",
                            "multiKillRounds": "12.5%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Bad News Eagles",
                            "link": "/team/11518/bad-news-eagles",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15778
                        },
                        "statsLocation": "/stats/players/15778/sener1?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "juanflatroo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/oV24TRwK_J_w2BMOTIZVxM.png?ixlib=java-2.1.0&w=400&s=de5a413bec0179d0cc3e30629bcb64a0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.06",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.8%",
                            "entryFragsPerRound": "9.8%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "14.6%",
                            "multiKillRounds": "18.1%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "Bad News Eagles",
                            "link": "/team/11518/bad-news-eagles",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17147
                        },
                        "statsLocation": "/stats/players/17147/juanflatroo?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "sinnopsyy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6dBcVDwhwKENG-PwOnqDC1.png?ixlib=java-2.1.0&w=400&s=a7d1b41c8d2d1be06e07e14be8af9337",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.05",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.0%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "14.3%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.72"
                        },
                        "team": {
                            "name": "Bad News Eagles",
                            "link": "/team/11518/bad-news-eagles",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18120
                        },
                        "statsLocation": "/stats/players/18120/sinnopsyy?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "gxx-",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/X-0xepcrbV8UVVosToCHfr.png?ixlib=java-2.1.0&w=400&s=cec0524eda021a00ead4584336dc3d7e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.11",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "31.5%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "2.1%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "17.4%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Bad News Eagles",
                            "link": "/team/11518/bad-news-eagles",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19725
                        },
                        "statsLocation": "/stats/players/19725/gxx?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Bad News Eagles",
                "link": "/team/11518/bad-news-eagles",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/vinm_rDyYrRmG6QnRISxCK.png?ixlib=java-2.1.0&w=50&s=1c4347c36dea5d035caa2538e2fc4cce",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/ohLs36jqZnmOpBFWDjk5Az.png?ixlib=java-2.1.0&w=50&s=9134cd551f79a9b0df6cb88f1c70d8a6"
            },
            "rank": 20
        },
        {
            "players": [
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "alex",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/V9YQYgZz3lYnosllZWiSFq.png?ixlib=java-2.1.0&w=400&s=14c65846467c6700ee1867e2fea600ef",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.10",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.8%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Movistar Riders",
                            "link": "/team/7718/movistar-riders",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8371
                        },
                        "statsLocation": "/stats/players/8371/alex?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "mopoz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/M0CdxbKd4em_XDouWMq8F9.png?ixlib=java-2.1.0&w=400&s=6383d0a3de377a91d5f44a31df4fb5d8",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "0.95",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.7%",
                            "entryFragsPerRound": "10.8%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Movistar Riders",
                            "link": "/team/7718/movistar-riders",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9254
                        },
                        "statsLocation": "/stats/players/9254/mopoz?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "sausol",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/zRyw6ODx7urLaaPbaOAL9S.png?ixlib=java-2.1.0&w=400&s=3e172a946d3f67e414c94332db69e38e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "0.97",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.5%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Movistar Riders",
                            "link": "/team/7718/movistar-riders",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18749
                        },
                        "statsLocation": "/stats/players/18749/sausol?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "dav1g",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/zK52OTf380On6fvznVJej7.png?ixlib=java-2.1.0&w=400&s=918d17d3ca195c3c76d3a35f766c1afb",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.94",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.1%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "21.4%",
                            "multiKillRounds": "13.5%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Movistar Riders",
                            "link": "/team/7718/movistar-riders",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19509
                        },
                        "statsLocation": "/stats/players/19509/dav1g?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "Martinez",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JgrGmaOMh-4Cw1KKi_Ckp6.png?ixlib=java-2.1.0&w=400&s=ce9d94437d47b5d4537270590cb2ab93",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.12",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.42",
                            "hsPercentage": "27.9%",
                            "entryFragsPerRound": "12.9%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "Movistar Riders",
                            "link": "/team/7718/movistar-riders",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21239
                        },
                        "statsLocation": "/stats/players/21239/martinez?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Movistar Riders",
                "link": "/team/7718/movistar-riders",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/-7fkMK6VsGFO0xbSpG2_o5.png?ixlib=java-2.1.0&w=50&s=d7fb712d19f78ec615655adb6fc2457d"
            },
            "rank": 28
        },
        {
            "players": [
                {
                    "cost": 211000,
                    "playerData": {
                        "name": "rallen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/I1ABQFlv-1vKh0QfZqgJ2t.png?ixlib=java-2.1.0&w=400&s=a87f39842f0056664d21ced21c658e08",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.16",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.2%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Into the Breach",
                            "link": "/team/11164/into-the-breach",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 5388
                        },
                        "statsLocation": "/stats/players/5388/rallen?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "CRUC1AL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/NQ9EkN_JfInD-s2xphdfy9.png?ixlib=java-2.1.0&w=400&s=83ffe82afd8ab13cc2511c3d61d37a00",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.13",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "27.8%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Into the Breach",
                            "link": "/team/11164/into-the-breach",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7996
                        },
                        "statsLocation": "/stats/players/7996/cruc1al?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "Thomas",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/19lZmEgLlFpQl0FP_89OEr.png?ixlib=java-2.1.0&w=400&s=ce6a66e60feacb2cbe0a6161a77f4ff2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.09",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "37.6%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Into the Breach",
                            "link": "/team/11164/into-the-breach",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13018
                        },
                        "statsLocation": "/stats/players/13018/thomas?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "CYPHER",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2O8iemGgkX6tUOUzaZrRtc.png?ixlib=java-2.1.0&w=400&s=d4568a843a84deae87421c508b5a01b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.08",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.9%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.5%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "Into the Breach",
                            "link": "/team/11164/into-the-breach",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18571
                        },
                        "statsLocation": "/stats/players/18571/cypher?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "volt",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/UWZQElkD5-inGTM72NGJXU.png?ixlib=java-2.1.0&w=400&s=763997cba47f7fe1c765ded00e2cd181",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.05",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "50.5%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "22.2%",
                            "multiKillRounds": "15.2%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Into the Breach",
                            "link": "/team/11164/into-the-breach",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20358
                        },
                        "statsLocation": "/stats/players/20358/volt?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Into the Breach",
                "link": "/team/11164/into-the-breach",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/Tgyea9TVbc37YisEY4Y13a.png?ixlib=java-2.1.0&w=50&s=025fb7569e69eaec5121872fa0b1125b"
            },
            "rank": 15
        },
        {
            "players": [
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "Lack1",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/KZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/VYRakvLaePZ5Hzmn5sm8QM.png?ixlib=java-2.1.0&w=400&s=ef07e16b1c0ef2b86104f31054ca29ce",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.97",
                            "tRating": "0.94",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "45.5%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "14.2%",
                            "dpr": "0.73"
                        },
                        "team": {
                            "name": "Aurora",
                            "link": "/team/11861/aurora",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13240
                        },
                        "statsLocation": "/stats/players/13240/lack1?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "SELLTER",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7LuB5317-LI90uw7K5bYyH.png?ixlib=java-2.1.0&w=400&s=4752b56eb395bbd867248bc36f8c03b4",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.4%",
                            "entryFragsPerRound": "7.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.2%",
                            "multiKillRounds": "14.8%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Aurora",
                            "link": "/team/11861/aurora",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18670
                        },
                        "statsLocation": "/stats/players/18670/sellter?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 216000,
                    "playerData": {
                        "name": "KENSI",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7yDRLdQLkoP3D50rsisivX.png?ixlib=java-2.1.0&w=400&s=53647e66fc7ce25a157799eb03d75748",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.22",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.2%",
                            "entryFragsPerRound": "12.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "16.0%",
                            "multiKillRounds": "18.9%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Aurora",
                            "link": "/team/11861/aurora",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19236
                        },
                        "statsLocation": "/stats/players/19236/kensi?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "Norwi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/y_3xBA_7OssIGy-_KTQeFg.png?ixlib=java-2.1.0&w=400&s=8c1c91f44620a82091747aff261309cc",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.15",
                            "tRating": "1.20",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.1%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "19.8%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Aurora",
                            "link": "/team/11861/aurora",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19882
                        },
                        "statsLocation": "/stats/players/19882/norwi?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "lattykk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/iHiyHgEj7jUW0y3-F49ajj.png?ixlib=java-2.1.0&w=400&s=f209bccba524d3845fd60b6be3b54791",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.15",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.39",
                            "hsPercentage": "30.8%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "Aurora",
                            "link": "/team/11861/aurora",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20700
                        },
                        "statsLocation": "/stats/players/20700/lattykk?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Aurora",
                "link": "/team/11861/aurora",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/gnIBKS3DMiTL9yfX8VN5xx.png?ixlib=java-2.1.0&w=50&s=1e6bc5cbbf21ded0e06473bed7f8ac84"
            },
            "rank": 35
        },
        {
            "players": [
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "Nodios",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HfcSLHYha5ad__CK13mUBT.png?ixlib=java-2.1.0&w=400&s=952bc7c7a01bdd165e952c2fb301058a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.03",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.7%",
                            "entryFragsPerRound": "7.6%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8891
                        },
                        "statsLocation": "/stats/players/8891/nodios?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "Queenix",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/95YaV0ZypzlBOr3PotM682.png?ixlib=java-2.1.0&w=400&s=294fd702572e06e84d5181b7c60b520e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.01",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.0%",
                            "entryFragsPerRound": "9.2%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13749
                        },
                        "statsLocation": "/stats/players/13749/queenix?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "maNkz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dgTcvjQcW3P3ephkETE_Ky.png?ixlib=java-2.1.0&w=400&s=2685ac1408e120c32294f9b65da4f601",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.06",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.4%",
                            "entryFragsPerRound": "11.9%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "15.3%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15349
                        },
                        "statsLocation": "/stats/players/15349/mankz?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "kraghen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ReS9kBazXYwGlydn6PLIiL.png?ixlib=java-2.1.0&w=400&s=049b72a82724c94c133cc7954dbebb05",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.02",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.4%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20300
                        },
                        "statsLocation": "/stats/players/20300/kraghen?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "salazar",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/WakyRy-CkOZ6D6wN4d56PV.png?ixlib=java-2.1.0&w=400&s=cd1c0b407da5282d577addbaeb82dd6a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.07",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "28.9%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "19.5%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21379
                        },
                        "statsLocation": "/stats/players/21379/salazar?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "ECSTATIC",
                "link": "/team/11419/ecstatic",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/nsKC2ztfBgdVPooTvvAFPV.svg?ixlib=java-2.1.0&s=b288ecdaf8ad11ffcaaf08e949417868"
            },
            "rank": 39
        },
        {
            "players": [
                {
                    "cost": 167000,
                    "playerData": {
                        "name": "MiGHTYMAX",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/1OU7Q8WevGesjv7xsXqb6P.png?ixlib=java-2.1.0&w=400&s=542cec7ab6b7e425a7876ece9d191b94",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.92",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "51.6%",
                            "entryFragsPerRound": "7.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "24.4%",
                            "multiKillRounds": "11.3%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Endpoint",
                            "link": "/team/7234/endpoint",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8983
                        },
                        "statsLocation": "/stats/players/8983/mightymax?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "Surreal",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/vAOlVBAnEgphPGd3DTg36m.png?ixlib=java-2.1.0&w=400&s=5ba2a928e69d5346e0b006726ee52247",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "1.00",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.4%",
                            "entryFragsPerRound": "7.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "19.9%",
                            "multiKillRounds": "14.8%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Endpoint",
                            "link": "/team/7234/endpoint",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9019
                        },
                        "statsLocation": "/stats/players/9019/surreal?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "Fessor",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/hyXqHi65i0N7TL5q9vKNkW.png?ixlib=java-2.1.0&w=400&s=eb8c331d522d9a41f66280fd361deb2b",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.10",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "57.1%",
                            "entryFragsPerRound": "12.2%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "15.7%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Endpoint",
                            "link": "/team/7234/endpoint",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16718
                        },
                        "statsLocation": "/stats/players/16718/fessor?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "mhL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/yEMKq108EMk3C8o6q6SWyO.png?ixlib=java-2.1.0&w=400&s=8e6429aa9a208ac4295d62a974e6e976",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.20",
                            "ctRating": "1.20",
                            "tRating": "1.21",
                            "awpKillsPerRound": "0.34",
                            "hsPercentage": "32.9%",
                            "entryFragsPerRound": "12.6%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "16.0%",
                            "multiKillRounds": "19.4%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Endpoint",
                            "link": "/team/7234/endpoint",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16847
                        },
                        "statsLocation": "/stats/players/16847/mhl?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "HeavyGod",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xt4xo0wl9it_40shMlo9TB.png?ixlib=java-2.1.0&w=400&s=ed0f0ed241ff3ccb3f625c739e1e6b15",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.06",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.4%",
                            "entryFragsPerRound": "9.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Endpoint",
                            "link": "/team/7234/endpoint",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20447
                        },
                        "statsLocation": "/stats/players/20447/heavygod?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Endpoint",
                "link": "/team/7234/endpoint",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/LrJW0lI8ifto6tzTjNkxpw.png?ixlib=java-2.1.0&w=50&s=57e8d46eb4d443936734da803412311f",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/EtlS2mffWkVEo3j0cY7QYo.png?ixlib=java-2.1.0&w=50&s=c517783056d810033f607a33afdbc287"
            },
            "rank": 58
        },
        {
            "players": [
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "Xyp9x",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dZY7rUhYU7fjZ03E85thjX.png?ixlib=java-2.1.0&w=400&s=e82bef1d84825edb482d63c745617cdd",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.03",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "42.3%",
                            "entryFragsPerRound": "7.9%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "22.0%",
                            "multiKillRounds": "13.7%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Astralis Talent",
                            "link": "/team/10954/astralis-talent",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
                        },
                        "fantasyPlayerId": {
                            "playerId": 4954
                        },
                        "statsLocation": "/stats/players/4954/xyp9x?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "Kristou",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/3AkRxPlCvCl_wtx4imYfeP.png?ixlib=java-2.1.0&w=400&s=adb63ae5c5f58972ad188ad3cc9605fe",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.03",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.30",
                            "hsPercentage": "39.0%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Astralis Talent",
                            "link": "/team/10954/astralis-talent",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10961
                        },
                        "statsLocation": "/stats/players/10961/kristou?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "Patti",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uV3b0iZluM3x1zHPTb_3PW.png?ixlib=java-2.1.0&w=400&s=ce9d33f99269a4e08a29bc1041d656f5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.08",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.7%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Astralis Talent",
                            "link": "/team/10954/astralis-talent",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13077
                        },
                        "statsLocation": "/stats/players/13077/patti?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "br0",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/GKaoL8dX0M6FsanKmxTkYh.png?ixlib=java-2.1.0&w=400&s=684d53fe6a2b6774c75c4116c5567d89",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.03",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "52.9%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Astralis Talent",
                            "link": "/team/10954/astralis-talent",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16717
                        },
                        "statsLocation": "/stats/players/16717/br0?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "MistR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/kigpqRqSKcjxg4itRiyCMN.png?ixlib=java-2.1.0&w=400&s=f2d0f79675f9e25a0ae99ad1d34b34e2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.3%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Astralis Talent",
                            "link": "/team/10954/astralis-talent",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21199
                        },
                        "statsLocation": "/stats/players/21199/mistr?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Astralis Talent",
                "link": "/team/10954/astralis-talent",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/CjJ724E0EVB8cIXAVmwi5w.svg?ixlib=java-2.1.0&s=41f113b08d461bee5d8673d4612811dd"
            },
            "rank": 51
        },
        {
            "players": [
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "raalz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RkGQs7eaA56rFh1zYruSyl.png?ixlib=java-2.1.0&w=400&s=30a1bf82cf8950e108988bf3a93e8c0e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.10",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.8%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "ex-Copenhagen Flames",
                            "link": "/team/12259/ex-copenhagen-flames",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 2898
                        },
                        "statsLocation": "/stats/players/2898/raalz?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 192000,
                    "playerData": {
                        "name": "b0RUP",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PdFjThtge39ctHi2MGkwgY.png?ixlib=java-2.1.0&w=400&s=17b61e27fe750b8867da58bac525df7a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "61.0%",
                            "entryFragsPerRound": "10.1%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "ex-Copenhagen Flames",
                            "link": "/team/12259/ex-copenhagen-flames",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9896
                        },
                        "statsLocation": "/stats/players/9896/b0rup?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 192000,
                    "playerData": {
                        "name": "TMB",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6vckVjFSfdm8zpbt581d3K.png?ixlib=java-2.1.0&w=400&s=4cab39070081b64ad5e71f51aef6a834",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.05",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "49.0%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "14.7%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "ex-Copenhagen Flames",
                            "link": "/team/12259/ex-copenhagen-flames",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11995
                        },
                        "statsLocation": "/stats/players/11995/tmb?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "Farlig",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/gifDokJeA2rbOvuQ6EY_hH.png?ixlib=java-2.1.0&w=400&s=dc8d5f20c08bae73b74f6831c71c4123",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.13",
                            "tRating": "1.17",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "34.4%",
                            "entryFragsPerRound": "12.1%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "ex-Copenhagen Flames",
                            "link": "/team/12259/ex-copenhagen-flames",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13300
                        },
                        "statsLocation": "/stats/players/13300/farlig?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "birdfromsky",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SX_71RVwOASG_ZvROJ-SW9.png?ixlib=java-2.1.0&w=400&s=01090919402b4a88ca272c38fd3b6357",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.93",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "42.7%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "12.2%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "ex-Copenhagen Flames",
                            "link": "/team/12259/ex-copenhagen-flames",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13718
                        },
                        "statsLocation": "/stats/players/13718/birdfromsky?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "ex-Copenhagen Flames",
                "link": "/team/12259/ex-copenhagen-flames",
                "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
            },
            "rank": 55
        },
        {
            "players": [
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "xseveN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/IhoU14VnkCitZL1hqdA5di.png?ixlib=java-2.1.0&w=400&s=3ca255bb023843994d508cbbae52db1d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.08",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.5%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "19.5%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7248
                        },
                        "statsLocation": "/stats/players/7248/xseven?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "sLowi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DEaq_4y8x1cN10Sm7ZXShn.png?ixlib=java-2.1.0&w=400&s=39f52e0352a718a1c81f1933cd9c1ba7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.08",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "60.6%",
                            "entryFragsPerRound": "13.3%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "15.6%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.73"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9271
                        },
                        "statsLocation": "/stats/players/9271/slowi?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "ottoNd",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/4EEqR3ltF5kkPBvaGJKrrP.png?ixlib=java-2.1.0&w=400&s=6c76e06d9b7b37380c4ff4c921e4da9d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.11",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "27.7%",
                            "entryFragsPerRound": "10.1%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11283
                        },
                        "statsLocation": "/stats/players/11283/ottond?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 174000,
                    "playerData": {
                        "name": "Airax",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/1tIbSWxGfiQzakuuwECz3d.png?ixlib=java-2.1.0&w=400&s=151e5a19e906062e6c0e7ed4aff8b3dd",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.96",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "44.6%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "17.1%",
                            "multiKillRounds": "14.4%",
                            "dpr": "0.74"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20593
                        },
                        "statsLocation": "/stats/players/20593/airax?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Banjo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xnBm5FmReeaQBWs48fqNsc.png?ixlib=java-2.1.0&w=400&s=ef8101cabfe863fb7173c27df99b864a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.02",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.6%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20625
                        },
                        "statsLocation": "/stats/players/20625/banjo?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "HAVU",
                "link": "/team/7865/havu",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
            },
            "rank": 70
        },
        {
            "players": [
                {
                    "cost": 180000,
                    "playerData": {
                        "name": "drg",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-a9m4mak3UCIOq967CZtYP.png?ixlib=java-2.1.0&w=400&s=b68ab32c35b55b38b545e36157567491",
                        "stats": {
                            "rating": "0.96",
                            "ctRating": "0.95",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "57.5%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "13.9%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Sharks",
                            "link": "/team/8113/sharks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16645
                        },
                        "statsLocation": "/stats/players/16645/drg?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "chay",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/K9IiCpOktR6vECQhkAgyOX.png?ixlib=java-2.1.0&w=400&s=0c88db42f43196600cfa53cbef87b620",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.13",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.2%",
                            "entryFragsPerRound": "13.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "17.4%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Sharks",
                            "link": "/team/8113/sharks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20026
                        },
                        "statsLocation": "/stats/players/20026/chay?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "togs",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/eiyt4YdP087YKTunoYw-Y5.png?ixlib=java-2.1.0&w=400&s=39097f2a4d8bb965b29c9a6b22620848",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.20",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.1%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "19.3%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Sharks",
                            "link": "/team/8113/sharks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20084
                        },
                        "statsLocation": "/stats/players/20084/togs?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "Gafolo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/O01r1QfzOXvAQH7CCo9H3b.png?ixlib=java-2.1.0&w=400&s=fb427beb2d212618f53c4322787a845d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.15",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "29.0%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "21.6%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "Sharks",
                            "link": "/team/8113/sharks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20558
                        },
                        "statsLocation": "/stats/players/20558/gafolo?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
                    "playerData": {
                        "name": "rdnzao",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7_ORa2O-H5y2s_Nzwzew0E.png?ixlib=java-2.1.0&w=400&s=5c96d5440ed3b869900eb4fe99642833",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.15",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.0%",
                            "entryFragsPerRound": "9.8%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Sharks",
                            "link": "/team/8113/sharks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21921
                        },
                        "statsLocation": "/stats/players/21921/rdnzao?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Sharks",
                "link": "/team/8113/sharks",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/Lz3hxbOkMmSc2mXbblw-O7.png?ixlib=java-2.1.0&w=50&s=2e14a4de2558cca7d212e13f5686edee"
            },
            "rank": 89
        },
        {
            "players": [
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "Demonos",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DSgieY-6n0IrDsF1HCma6q.png?ixlib=java-2.1.0&w=400&s=0bb9a07d5a132c61ca18a00dba803601",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.06",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "42.9%",
                            "entryFragsPerRound": "11.8%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Corinthians",
                            "link": "/team/11814/corinthians",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13290
                        },
                        "statsLocation": "/stats/players/13290/demonos?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 183000,
                    "playerData": {
                        "name": "r4ul",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/57VEqTsgjDuohML045iJtM.png?ixlib=java-2.1.0&w=400&s=2d0b64869253f3869bfef386440e32b1",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "1.06",
                            "tRating": "0.89",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.6%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "13.3%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Corinthians",
                            "link": "/team/11814/corinthians",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14011
                        },
                        "statsLocation": "/stats/players/14011/r4ul?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "voltera",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.17",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.8%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "15.9%",
                            "multiKillRounds": "18.7%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Corinthians",
                            "link": "/team/11814/corinthians",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19290
                        },
                        "statsLocation": "/stats/players/19290/voltera?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "proSHOW",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.14",
                            "tRating": "0.94",
                            "awpKillsPerRound": "0.32",
                            "hsPercentage": "29.3%",
                            "entryFragsPerRound": "12.4%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Corinthians",
                            "link": "/team/11814/corinthians",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19831
                        },
                        "statsLocation": "/stats/players/19831/proshow?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 183000,
                    "playerData": {
                        "name": "fREQ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/_8kMFMnVM5_1d_qiIgy-Oc.png?ixlib=java-2.1.0&w=400&s=4337adae0a5bca0a0d3b1ec374b84078",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "1.00",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.4%",
                            "entryFragsPerRound": "7.8%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Corinthians",
                            "link": "/team/11814/corinthians",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20885
                        },
                        "statsLocation": "/stats/players/20885/freq?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Corinthians",
                "link": "/team/11814/corinthians",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/Q9vtsznWEOK6yiakCWx0n2.png?ixlib=java-2.1.0&w=50&s=f7d33a9ee197c1753d6e6fcb0bcf55bb"
            },
            "rank": 145
        },
        {
            "players": [
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "delboNi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/hOTOUBfZtZJ3udhk--wr-b.png?ixlib=java-2.1.0&w=400&s=71431d793c8b4a6f072d3357ac1b3118",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.06",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.5%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "20.2%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Meta",
                            "link": "/team/11249/meta",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11213
                        },
                        "statsLocation": "/stats/players/11213/delboni?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "abr",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DLX6Vnh4v4xS1A8leoEANh.png?ixlib=java-2.1.0&w=400&s=e827c7c4e22f5fddbccdffd1ded0df3b",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.01",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "49.3%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "22.2%",
                            "multiKillRounds": "13.1%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "Meta",
                            "link": "/team/11249/meta",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17028
                        },
                        "statsLocation": "/stats/players/17028/abr?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "CutzMeretz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uwMzgdbdxDnUNdBoerYPpW.png?ixlib=java-2.1.0&w=400&s=8a14ef1bf3deb5a2bc2602f68a0255ef",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.04",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.0%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "16.3%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Meta",
                            "link": "/team/11249/meta",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18891
                        },
                        "statsLocation": "/stats/players/18891/cutzmeretz?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 234000,
                    "playerData": {
                        "name": "supLexN1",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/9OysuL_2wNJSedkkV-Ozgr.png?ixlib=java-2.1.0&w=400&s=784673adef03c838ecee28abd7e13b54",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.24",
                            "ctRating": "1.27",
                            "tRating": "1.21",
                            "awpKillsPerRound": "0.41",
                            "hsPercentage": "29.9%",
                            "entryFragsPerRound": "11.4%",
                            "cluthesPerRound": "2.4%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "19.6%",
                            "dpr": "0.55"
                        },
                        "team": {
                            "name": "Meta",
                            "link": "/team/11249/meta",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18963
                        },
                        "statsLocation": "/stats/players/18963/suplexn1?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "Alisson",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/v_UIIQDAM39NlUmTLUBXJU.png?ixlib=java-2.1.0&w=400&s=6fcd59081f12fa4b281f08c15e17552a",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.07",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "41.3%",
                            "entryFragsPerRound": "8.6%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "19.9%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Meta",
                            "link": "/team/11249/meta",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20521
                        },
                        "statsLocation": "/stats/players/20521/alisson?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Meta",
                "link": "/team/11249/meta",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/4UHOWy9b2gY2b_jqeqt0gj.png?ixlib=java-2.1.0&w=50&s=c3f776282bcabab62a542a5d2d026628"
            },
            "rank": 194
        }
    ];

    const [bestCombination, setBestCombination] = useState([]);
    const [modifiedTeams, setModifiedTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!effectRan.current){
            addCheckedPlayers(teams);
        }
        return () => {
            effectRan.current = true;
        }
    }, [teams])

    function findBestCombination(teams) {
        const startTime = performance.now();
        const players = teams.flatMap(team => team.players);

        let bestCombination = [];
        let bestRating = 0;

        const stack = [{ combination: [], startIndex: 0, teamCount: {}, ratingTotal: 0 }];

        while (stack.length > 0) {
            const { combination, startIndex, teamCount, ratingTotal } = stack.pop();

            if (combination.length === 5) {
                const totalCost = combination.reduce((sum, player) => sum + player.cost, 0);
                if (totalCost <= 1000000 && ratingTotal > bestRating) {
                    bestCombination = [...combination];
                    bestRating = ratingTotal;
                }
            } else {
                for (let i = startIndex; i < players.length; i++) {
                    const { playerData: { stats: { rating }, team: { name } } } = players[i];
                    const currentTeamCount = teamCount[name] || 0;
                    if (currentTeamCount < 2) {
                        stack.push({
                            combination: [...combination, players[i]],
                            startIndex: i + 1,
                            teamCount: { ...teamCount, [name]: currentTeamCount + 1 },
                            ratingTotal: ratingTotal + parseFloat(rating)
                        });
                    }
                }
            }
        }

        const endTime = performance.now();
        const elapsedTime = (endTime - startTime) / 1000;
        console.log(`Tiempo transcurrido: ${elapsedTime} segundos`);
        return bestCombination;
    }

    const addCheckedPlayers = (teams) => {
        const newTeams = [...teams];

        for (const team of newTeams) {
            for (const player of team.players) {
                player.checked = true;
            }
        }
        setModifiedTeams(newTeams);
    }

    const handleDeletePlayer = (name) => {

        const newTeams = [...modifiedTeams];

        for (let i = 0; i < newTeams.length; i++) {
            let indexToSet = newTeams[i].players.findIndex(player => player.playerData.name === name);
            if (indexToSet !== -1) {
                newTeams[i].players[indexToSet].checked = false
                setModifiedTeams(newTeams);
            }
        }
    }

    const handleRestorePlayer = (name) => {
        const newTeams = [...modifiedTeams];

        for (let i = 0; i < newTeams.length; i++) {
            let indexToSet = newTeams[i].players.findIndex(player => player.playerData.name === name);
            if (indexToSet !== -1) {
                newTeams[i].players[indexToSet].checked = true
                setModifiedTeams(newTeams);
            }
        }
    }

    const handleGenerateBestCombination = async (teams) => {

        setLoading(true);

        let newTeams = JSON.parse(JSON.stringify(teams));

        newTeams = newTeams.filter(function(team) {
            const newPlayers = team.players.filter(function(player) {
                return player.checked === true;
            });

            team.players = newPlayers;

            return newPlayers.length > 0;
        })

        const result = findBestCombination(newTeams)
        setBestCombination(result);
        setLoading(false)

    }

    const handleReset = () => {
        addCheckedPlayers(teams);
        setBestCombination([]);
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <Fragment>
            <div className="d-flex flex-column align-items-center gap-2 p-3 bc-bg">
                {modifiedTeams && modifiedTeams.length > 0 && modifiedTeams.map((team, i) => (
                    <div key={'0' + i} className="d-flex flex-row gap-2">
                        {team.players.map((player, index) => (
                            <div key={'1' + index}  className={`card ${!player.checked && "inactive-bg"}`}>
                                <div className="position-relative">
                                    <img src={player.playerData.picture} className="card-img-top img-picture" alt="..."/>
                                    <img src={player.playerData.flag} className="img-flag" alt="..."/>
                                    <img src={player.playerData.team.logoDay} className="img-logo" alt="..."/>
                                </div>
                                <div className="card-body text-center">
                                    <h2 className="fw-bold">{player.playerData.name}</h2>
                                    <p>Rating: <span className="float-end">{player.playerData.stats.rating}</span></p>
                                    <p>Cost: <span className="float-end">${player.cost}</span></p>
                                </div>
                                {player.checked ?
                                    <button onClick={() => handleDeletePlayer(player.playerData.name)} className="btn btn-danger">Delete</button>
                                    :
                                    <button onClick={() => handleRestorePlayer(player.playerData.name)} className="btn btn-primary">Restore</button>
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="sticky-bottom sticky-botom-bg p-2">
                <div className="d-flex flex-row justify-content-evenly">
                    <button type="button" onClick={() => handleReset()} className="btn btn-warning my-3">Reset all</button>
                    <button type="button" onClick={() => handleGenerateBestCombination(modifiedTeams)} className="btn btn-success my-3">Generate best possible combination</button>
                </div>
                {bestCombination.length > 0 &&
                    <div className="d-flex flex-row justify-content-center gap-2">
                        {bestCombination.map((player, i) => (
                            <Fragment key={'1' + i}>
                                <div className="card">
                                    <div className="position-relative">
                                        <img src={player.playerData.picture} className="card-img-top img-picture" alt="..."/>
                                        <img src={player.playerData.flag} className="img-flag" alt="..."/>
                                        <img src={player.playerData.team.logoDay} className="img-logo" alt="..."/>
                                    </div>
                                    <div className="card-body text-center">
                                        <p className="fw-bold">{player.playerData.name}</p>
                                        <p>Rating: {player.playerData.stats.rating}</p>
                                        <p>Cost: ${player.cost}</p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                }
            </div>
        </Fragment>
    );
};

export default BestCombination;