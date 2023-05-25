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
                    "cost": 204000,
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
                    "cost": 199000,
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
                    "cost": 205000,
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
                    "cost": 219000,
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
                    "cost": 208000,
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
            "rank": 11
        },
        {
            "players": [
                {
                    "cost": 176000,
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
                    "cost": 188000,
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
                    "cost": 218000,
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
                    "cost": 199000,
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
            "rank": 34
        },
        {
            "players": [
                {
                    "cost": 170000,
                    "playerData": {
                        "name": "S0tF1k",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Hu24t02qbBVWS6TbfvhXYv.png?ixlib=java-2.1.0&w=400&s=7cc2feb26f17825abaf83c5ef235ec66",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.97",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.5%",
                            "entryFragsPerRound": "9.1%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "22.6%",
                            "multiKillRounds": "12.9%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Spirit Academy",
                            "link": "/team/7900/spirit-academy",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9081
                        },
                        "statsLocation": "/stats/players/9081/s0tf1k?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 223000,
                    "playerData": {
                        "name": "zont1x",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.15",
                            "tRating": "1.17",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "40.4%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Spirit Academy",
                            "link": "/team/7900/spirit-academy",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20423
                        },
                        "statsLocation": "/stats/players/20423/zont1x?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 231000,
                    "playerData": {
                        "name": "donk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.24",
                            "ctRating": "1.18",
                            "tRating": "1.30",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "64.2%",
                            "entryFragsPerRound": "14.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "15.1%",
                            "multiKillRounds": "20.9%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Spirit Academy",
                            "link": "/team/7900/spirit-academy",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21167
                        },
                        "statsLocation": "/stats/players/21167/donk?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 227000,
                    "playerData": {
                        "name": "ArtFr0st",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.22",
                            "ctRating": "1.24",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.49",
                            "hsPercentage": "23.8%",
                            "entryFragsPerRound": "12.3%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.54"
                        },
                        "team": {
                            "name": "Spirit Academy",
                            "link": "/team/7900/spirit-academy",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21348
                        },
                        "statsLocation": "/stats/players/21348/artfr0st?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "baz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.01",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.7%",
                            "entryFragsPerRound": "7.1%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "25.3%",
                            "multiKillRounds": "13.1%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Spirit Academy",
                            "link": "/team/7900/spirit-academy",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
                        },
                        "fantasyPlayerId": {
                            "playerId": 22688
                        },
                        "statsLocation": "/stats/players/22688/baz?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Spirit Academy",
                "link": "/team/7900/spirit-academy",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png?ixlib=java-2.1.0&w=50&s=0be2e166db241569e89ac4ab8f5fb9a2",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/6iL7hUvamkQZnyOjw2MInU.png?ixlib=java-2.1.0&w=50&s=12daa825503b72771041c83e6d1e3638"
            },
            "rank": 43
        },
        {
            "players": [
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "NickelBack",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/9nWmj-FgalbI4ptoOA8fS4.png?ixlib=java-2.1.0&w=400&s=5952de29b8715142c2c605161ba9d1de",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.02",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.5%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "20.1%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "1WIN",
                            "link": "/team/10621/1win",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11498
                        },
                        "statsLocation": "/stats/players/11498/nickelback?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "Boombl4",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/d6nsspWv6OYMfRqNaddXPK.png?ixlib=java-2.1.0&w=400&s=a5fbb74fd5e1135738508c6d7d7d2df8",
                        "stats": {
                            "rating": "0.96",
                            "ctRating": "1.00",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "36.9%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "14.3%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "1WIN",
                            "link": "/team/10621/1win",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11840
                        },
                        "statsLocation": "/stats/players/11840/boombl4?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "Forester",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/iXsiaiSvWPYXvcHvAYxTTg.png?ixlib=java-2.1.0&w=400&s=57ed02b25623ff270fcc8b6ed7ad1982",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.08",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.1%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "1WIN",
                            "link": "/team/10621/1win",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13982
                        },
                        "statsLocation": "/stats/players/13982/forester?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "TRAVIS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/P9jPpiTsRUJScQmWnC9RN0.png?ixlib=java-2.1.0&w=400&s=694d62f864c83f64522074e11cfc7662",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.17",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.3%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "1WIN",
                            "link": "/team/10621/1win",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16948
                        },
                        "statsLocation": "/stats/players/16948/travis?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 220000,
                    "playerData": {
                        "name": "deko",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/K1fVqH-UFcuokmUhW4UgDY.png?ixlib=java-2.1.0&w=400&s=75882042125d324844654c4c4f106db5",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.20",
                            "tRating": "1.17",
                            "awpKillsPerRound": "0.32",
                            "hsPercentage": "36.7%",
                            "entryFragsPerRound": "9.2%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "19.7%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "1WIN",
                            "link": "/team/10621/1win",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20113
                        },
                        "statsLocation": "/stats/players/20113/deko?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "1WIN",
                "link": "/team/10621/1win",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/v4iuCrozhnSqN1bTS4VnzE.png?ixlib=java-2.1.0&w=50&s=c00b22316ebbe5bc825c6e6367199b3d"
            },
            "rank": 45
        },
        {
            "players": [
                {
                    "cost": 189000,
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
                    "cost": 190000,
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
                    "cost": 194000,
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
                    "cost": 198000,
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
                    "cost": 195000,
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
            "rank": 44
        },
        {
            "players": [
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "Q-Q",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/lCAAD65qSZrdTkNBqswxdI.png?ixlib=java-2.1.0&w=400&s=04077bf6e434a816ae80aff206f56e8f",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.00",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.3%",
                            "entryFragsPerRound": "7.1%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "22.1%",
                            "multiKillRounds": "13.0%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "MOUZ NXT",
                            "link": "/team/11176/mouz-nxt",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16741
                        },
                        "statsLocation": "/stats/players/16741/q-q?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 223000,
                    "playerData": {
                        "name": "Jimpphat",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/L3RFrbrAtGePacusRUf-Us.png?ixlib=java-2.1.0&w=400&s=5683331610ccf55537284421ad827cb8",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.20",
                            "ctRating": "1.23",
                            "tRating": "1.17",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "7.1%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "20.1%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "MOUZ NXT",
                            "link": "/team/11176/mouz-nxt",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18850
                        },
                        "statsLocation": "/stats/players/18850/jimpphat?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "sl3nd",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/HU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2xRNV_NaZzTRY8HWiqnDH6.png?ixlib=java-2.1.0&w=400&s=baa89eccd0a448217e7db8aa5e9571b1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.17",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "26.0%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "MOUZ NXT",
                            "link": "/team/11176/mouz-nxt",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20870
                        },
                        "statsLocation": "/stats/players/20870/sl3nd?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "Nexius",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ggJlFKT9q0_ds8ADqCqnNQ.png?ixlib=java-2.1.0&w=400&s=7c17319b7f6d445207210943bf024565",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.02",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.4%",
                            "entryFragsPerRound": "14.1%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "MOUZ NXT",
                            "link": "/team/11176/mouz-nxt",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20872
                        },
                        "statsLocation": "/stats/players/20872/nexius?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "Chr1zN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Nua5EaULjZI8KrHmMOEikP.png?ixlib=java-2.1.0&w=400&s=0df360084a2e3ffb83dbe501ccdd5f2e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "54.8%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "MOUZ NXT",
                            "link": "/team/11176/mouz-nxt",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21983
                        },
                        "statsLocation": "/stats/players/21983/chr1zn?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "MOUZ NXT",
                "link": "/team/11176/mouz-nxt",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
            },
            "rank": 73
        },
        {
            "players": [
                {
                    "cost": 170000,
                    "playerData": {
                        "name": "seized",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/V9PzrUFWcXrxdpGlj9NmW4.png?ixlib=java-2.1.0&w=400&s=877c3654e3281f867051c840ad181160",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.98",
                            "tRating": "0.86",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.2%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "13.4%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "9 Pandas",
                            "link": "/team/11883/9-pandas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
                        },
                        "fantasyPlayerId": {
                            "playerId": 3347
                        },
                        "statsLocation": "/stats/players/3347/seized?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "clax",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/4JTwJnYHjHHEFMprfYrG1y.png?ixlib=java-2.1.0&w=400&s=480eb776d826c8b2210cccbcb0e7dd0c",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "0.95",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "56.8%",
                            "entryFragsPerRound": "6.8%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.8%",
                            "multiKillRounds": "14.6%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "9 Pandas",
                            "link": "/team/11883/9-pandas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12004
                        },
                        "statsLocation": "/stats/players/12004/clax?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "iDISBALANCE",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6h69ImqVluimyVPIkVMMQO.png?ixlib=java-2.1.0&w=400&s=c0091f0ff04c2220df13477b9971a8c5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.15",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "25.4%",
                            "entryFragsPerRound": "12.1%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "20.8%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "9 Pandas",
                            "link": "/team/11883/9-pandas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14273
                        },
                        "statsLocation": "/stats/players/14273/idisbalance?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "glowiing",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/cNHPF_NOq4HNH2iApq77R9.png?ixlib=java-2.1.0&w=400&s=c58e8f6ff1b649f568621ca01cc0ef86",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.15",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.3%",
                            "entryFragsPerRound": "13.6%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "18.3%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "9 Pandas",
                            "link": "/team/11883/9-pandas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17508
                        },
                        "statsLocation": "/stats/players/17508/glowiing?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "d1Ledez",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/L9rdOscThTlPujLKN-txcC.png?ixlib=java-2.1.0&w=400&s=fba17a1108539cd1a913458b40b1dcbb",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.11",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "62.6%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "17.1%",
                            "multiKillRounds": "18.3%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "9 Pandas",
                            "link": "/team/11883/9-pandas",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20357
                        },
                        "statsLocation": "/stats/players/20357/d1ledez?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "9 Pandas",
                "link": "/team/11883/9-pandas",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/m0wZSJulILDkRooXHsd97i.png?ixlib=java-2.1.0&w=50&s=3943592e4c6551b165febbdcfd02841f"
            },
            "rank": 80
        },
        {
            "players": [
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "hAdji",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Iwr3ItRgPFb_kFWGlCWlRj.png?ixlib=java-2.1.0&w=400&s=939e6df7ae2409834b356bda7e19e2ca",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.10",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.5%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Looking4Org",
                            "link": "/team/12260/looking4org",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9656
                        },
                        "statsLocation": "/stats/players/9656/hadji?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 220000,
                    "playerData": {
                        "name": "Maka",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/cb0isw7_2PR5FegpVCqiKn.png?ixlib=java-2.1.0&w=400&s=255851e1a58f55c4ae179c54b7fa3724",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.21",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "32.0%",
                            "entryFragsPerRound": "13.0%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.58"
                        },
                        "team": {
                            "name": "Looking4Org",
                            "link": "/team/12260/looking4org",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13138
                        },
                        "statsLocation": "/stats/players/13138/maka?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "Lucky",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/86dVryTPfa7WdeSOTPEbP3.png?ixlib=java-2.1.0&w=400&s=1423b790d0848319fafcea7983099600",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.11",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "41.5%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Looking4Org",
                            "link": "/team/12260/looking4org",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13497
                        },
                        "statsLocation": "/stats/players/13497/lucky?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Djoko",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qoLVz8csqdfvcAHk-WRxjj.png?ixlib=java-2.1.0&w=400&s=3c809dbe56006b49fb457899cfdb156e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.07",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "62.0%",
                            "entryFragsPerRound": "11.9%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "16.6%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Looking4Org",
                            "link": "/team/12260/looking4org",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19738
                        },
                        "statsLocation": "/stats/players/19738/djoko?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "Ex3rcice",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CUMpcO5BXJ4PJ22BuUW1Uj.png?ixlib=java-2.1.0&w=400&s=648093c295863cc85b1123a419f1974b",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.05",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.6%",
                            "entryFragsPerRound": "9.1%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Looking4Org",
                            "link": "/team/12260/looking4org",
                            "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                            "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19739
                        },
                        "statsLocation": "/stats/players/19739/ex3rcice?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Looking4Org",
                "link": "/team/12260/looking4org",
                "logoDay": "https://www.hltv.org/img/static/team/placeholder.svg",
                "logoNight": "https://www.hltv.org/img/static/team/placeholder.svg"
            },
            "rank": 57
        },
        {
            "players": [
                {
                    "cost": 198000,
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
                    "cost": 190000,
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
                    "cost": 190000,
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
                    "cost": 214000,
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
                    "cost": 174000,
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
            "rank": 53
        },
        {
            "players": [
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "FL1T",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PTTTGaBMGxEywZuOC6V8zC.png?ixlib=java-2.1.0&w=400&s=632028609675900efa8329bcdacfa0b1",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.15",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.3%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "17.6%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Virtus.pro",
                            "link": "/team/5378/virtuspro",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12732
                        },
                        "statsLocation": "/stats/players/12732/fl1t?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "Qikert",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/KZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ccC67anW4y0JCcXvKlZc0z.png?ixlib=java-2.1.0&w=400&s=7981dd7946918a7464216f24a6edd198",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.89",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.4%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "24.0%",
                            "multiKillRounds": "10.1%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Virtus.pro",
                            "link": "/team/5378/virtuspro",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13239
                        },
                        "statsLocation": "/stats/players/13239/qikert?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
                    "playerData": {
                        "name": "Jame",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DcDRN_LocUAEh6st6YL-fx.png?ixlib=java-2.1.0&w=400&s=fb51c8d91009aeb92400f7e5af5eeced",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.24",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "25.6%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "25.1%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.53"
                        },
                        "team": {
                            "name": "Virtus.pro",
                            "link": "/team/5378/virtuspro",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13776
                        },
                        "statsLocation": "/stats/players/13776/jame?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "n0rb3r7",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CwwXFqJK1qJdpgoE_mvu7o.png?ixlib=java-2.1.0&w=400&s=f851f948e14e8a2910663fa32158eeab",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.83",
                            "ctRating": "1.09",
                            "tRating": "0.63",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.7%",
                            "entryFragsPerRound": "4.8%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "13.3%",
                            "dpr": "0.75"
                        },
                        "team": {
                            "name": "Virtus.pro",
                            "link": "/team/5378/virtuspro",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16612
                        },
                        "statsLocation": "/stats/players/16612/n0rb3r7?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "fame",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ioll0YITulS0JL_s7jKcWx.png?ixlib=java-2.1.0&w=400&s=a794abf591f43e43aade39f44804b221",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "1.00",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.0%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "13.1%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Virtus.pro",
                            "link": "/team/5378/virtuspro",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20101
                        },
                        "statsLocation": "/stats/players/20101/fame?startDate=2022-11-16&endDate=2023-05-16",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Virtus.pro",
                "link": "/team/5378/virtuspro",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875"
            },
            "rank": 10
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