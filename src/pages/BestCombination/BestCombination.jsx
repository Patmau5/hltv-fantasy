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
                    "cost": 197000,
                    "playerData": {
                        "name": "Snappi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/YcM10KQ5AA_CjX6uEemkna.png?ixlib=java-2.1.0&w=400&s=546f182cff21b191625068c347d74121",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.96",
                            "ctRating": "0.97",
                            "tRating": "0.94",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.9%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "13.0%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "ENCE",
                            "link": "/team/4869/ence",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 922
                        },
                        "statsLocation": "/stats/players/922/snappi?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 226000,
                    "playerData": {
                        "name": "NertZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CSE5aJJQxzbZ1-c2Yvpiad.png?ixlib=java-2.1.0&w=400&s=c4ce234b5cd64da0279ad42491e1482e",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.22",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.3%",
                            "entryFragsPerRound": "14.5%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "19.7%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "ENCE",
                            "link": "/team/4869/ence",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9436
                        },
                        "statsLocation": "/stats/players/9436/nertz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "Maden",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ME.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/0DHr1zgMuykiW51TI56B1t.png?ixlib=java-2.1.0&w=400&s=f566ab8739c8b6609c68865d7d532116",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.7%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "ENCE",
                            "link": "/team/4869/ence",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11777
                        },
                        "statsLocation": "/stats/players/11777/maden?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "dycha",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2wHhhKTMmOLlBXfn5aiq8u.png?ixlib=java-2.1.0&w=400&s=32710ef961c1a88c8af71218701a95ed",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.13",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.7%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "18.3%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "ENCE",
                            "link": "/team/4869/ence",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16080
                        },
                        "statsLocation": "/stats/players/16080/dycha?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "SunPayus",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Yr4pnhhkgN5pPRpdkzAV4Z.png?ixlib=java-2.1.0&w=400&s=eab0b361e8a4327030284564d80cfc73",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.17",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.33",
                            "hsPercentage": "28.0%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "21.4%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.56"
                        },
                        "team": {
                            "name": "ENCE",
                            "link": "/team/4869/ence",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19164
                        },
                        "statsLocation": "/stats/players/19164/sunpayus?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "ENCE",
                "link": "/team/4869/ence",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/-X8NoyWC_1gYqUHvZqcpkc.svg?ixlib=java-2.1.0&s=85bb9daa6f846fa097c5942f2565fdb8"
            },
            "rank": 4
        },
        {
            "players": [
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "Krad",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/QZ_zS3e8skrhChdyQgQuWR.png?ixlib=java-2.1.0&w=400&s=14d23ab9c3fe37fcfa90a53dd01e8b28",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.00",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.6%",
                            "entryFragsPerRound": "10.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "15.2%",
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
                        "statsLocation": "/stats/players/12027/krad?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "Jerry",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/jQKgKDBqEXV8aul_UcOjC_.png?ixlib=java-2.1.0&w=400&s=4b6aa7f8fd91d5325968090016703b10",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.02",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "44.7%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "14.7%",
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
                        "statsLocation": "/stats/players/13157/jerry?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "zorte",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/pc7WZPg8UMe4lCtM1p2e6L.png?ixlib=java-2.1.0&w=400&s=4f7882c4305b65ab293be1728333d48e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.18",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "33.8%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.57"
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
                        "statsLocation": "/stats/players/15662/zorte?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "shalfey",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/0DIX92ABFI-kAzLRwO9wm8.png?ixlib=java-2.1.0&w=400&s=1fe03b019ad8ba7dcd72bea0527bd477",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.16",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.5%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.5%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/17011/shalfey?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "r3salt",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/MXMqBI637--gU4PYhrJ40e.png?ixlib=java-2.1.0&w=400&s=32fcbc120d1c9667f3aaacc70d72e1da",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.04",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "59.1%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "17.4%",
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
                        "statsLocation": "/stats/players/20709/r3salt?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 20
        },
        {
            "players": [
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "FL1T",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PTTTGaBMGxEywZuOC6V8zC.png?ixlib=java-2.1.0&w=400&s=632028609675900efa8329bcdacfa0b1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.13",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.5%",
                            "entryFragsPerRound": "11.9%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "17.4%",
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
                        "statsLocation": "/stats/players/12732/fl1t?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "Qikert",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/KZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ccC67anW4y0JCcXvKlZc0z.png?ixlib=java-2.1.0&w=400&s=7981dd7946918a7464216f24a6edd198",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.89",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.0%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "23.6%",
                            "multiKillRounds": "10.5%",
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
                        "statsLocation": "/stats/players/13239/qikert?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "Jame",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DcDRN_LocUAEh6st6YL-fx.png?ixlib=java-2.1.0&w=400&s=fb51c8d91009aeb92400f7e5af5eeced",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.24",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "25.7%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "24.7%",
                            "multiKillRounds": "15.7%",
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
                        "statsLocation": "/stats/players/13776/jame?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 177000,
                    "playerData": {
                        "name": "n0rb3r7",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CwwXFqJK1qJdpgoE_mvu7o.png?ixlib=java-2.1.0&w=400&s=f851f948e14e8a2910663fa32158eeab",
                        "stats": {
                            "rating": "0.81",
                            "ctRating": "0.95",
                            "tRating": "0.70",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.0%",
                            "entryFragsPerRound": "5.1%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "12.9%",
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
                        "statsLocation": "/stats/players/16612/n0rb3r7?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "fame",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ioll0YITulS0JL_s7jKcWx.png?ixlib=java-2.1.0&w=400&s=a794abf591f43e43aade39f44804b221",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.00",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.2%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "12.9%",
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
                        "statsLocation": "/stats/players/20101/fame?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 22
        },
        {
            "players": [
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "NEKIZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7udnpi5xCHRiyDx28d3_DA.png?ixlib=java-2.1.0&w=400&s=2fa39aafca9369e5ddf3c3ab07747c06",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.10",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.7%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "paiN",
                            "link": "/team/4773/pain",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9482
                        },
                        "statsLocation": "/stats/players/9482/nekiz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "hardzao",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CQYEgsIzd3SNrUT7oegnq4.png?ixlib=java-2.1.0&w=400&s=c8ac07c6b920a326b1dfee31f28f03fb",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.02",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "45.0%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "22.8%",
                            "multiKillRounds": "14.8%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "paiN",
                            "link": "/team/4773/pain",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16817
                        },
                        "statsLocation": "/stats/players/16817/hardzao?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "biguzera",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dJrcqoPX31d7U0iK0PVvih.png?ixlib=java-2.1.0&w=400&s=90ce8d29d8d76368538025608e1b4508",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.18",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.0%",
                            "entryFragsPerRound": "12.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "paiN",
                            "link": "/team/4773/pain",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18141
                        },
                        "statsLocation": "/stats/players/18141/biguzera?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 216000,
                    "playerData": {
                        "name": "skullz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Qd1zPG_C7Z5nfzXSryfq9w.png?ixlib=java-2.1.0&w=400&s=8711a92556e00f874948e336a7f7ad1a",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.17",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.7%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "21.3%",
                            "multiKillRounds": "17.7%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "paiN",
                            "link": "/team/4773/pain",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18676
                        },
                        "statsLocation": "/stats/players/18676/skullz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "zevy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/fqbWAdwnvyQUZcfwAPifbg.png?ixlib=java-2.1.0&w=400&s=80d9183bbdd7151657dde4389a6ef99e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.22",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.30",
                            "hsPercentage": "34.4%",
                            "entryFragsPerRound": "11.5%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "17.5%",
                            "multiKillRounds": "19.4%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "paiN",
                            "link": "/team/4773/pain",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19692
                        },
                        "statsLocation": "/stats/players/19692/zevy?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "paiN",
                "link": "/team/4773/pain",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/iUUCFwCOFmOrwhB8q8smMg.svg?ixlib=java-2.1.0&s=1446e1cf3d02deb8190fe6efd14e4ce4",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=50&s=e4435bf7c351b546b867adc1d7886795"
            },
            "rank": 23
        },
        {
            "players": [
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "max",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UY.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/UU5gTT1iRsdy-ll7L7CnsO.png?ixlib=java-2.1.0&w=400&s=894449fc1ad3df947f2c33ee238f7da5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.05",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "43.7%",
                            "entryFragsPerRound": "12.4%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "13.5%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "9z",
                            "link": "/team/9996/9z",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12092
                        },
                        "statsLocation": "/stats/players/12092/max?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "dgt",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UY.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LcZu2yF057O_vN6XJsnSxg.png?ixlib=java-2.1.0&w=400&s=cafc4a765d4f754b468cd43ae292f000",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.16",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.7%",
                            "entryFragsPerRound": "9.2%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "9z",
                            "link": "/team/9996/9z",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14736
                        },
                        "statsLocation": "/stats/players/14736/dgt?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "dav1deuS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/sHm9GOhRzjoP4RKCz6_ntS.png?ixlib=java-2.1.0&w=400&s=4bed2afdd10181e24e6602384e3a8e11",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.12",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.3%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "9z",
                            "link": "/team/9996/9z",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18865
                        },
                        "statsLocation": "/stats/players/18865/dav1deus?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "try",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/mrxgwSFFQ5gEdgQwHgEFSQ.png?ixlib=java-2.1.0&w=400&s=4200ce2be0bb66ca8723ad3b62c80b8a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.23",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "33.8%",
                            "entryFragsPerRound": "12.2%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "18.5%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "9z",
                            "link": "/team/9996/9z",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19869
                        },
                        "statsLocation": "/stats/players/19869/try?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 165000,
                    "playerData": {
                        "name": "buda",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tSL23t7Km_OiftQnYBOaI3.png?ixlib=java-2.1.0&w=400&s=be88d2f29d8d81ed908d49faf54bc04a",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.89",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.1%",
                            "entryFragsPerRound": "6.6%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "22.5%",
                            "multiKillRounds": "12.5%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "9z",
                            "link": "/team/9996/9z",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20607
                        },
                        "statsLocation": "/stats/players/20607/buda?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "9z",
                "link": "/team/9996/9z",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/XPx9dt1CGihL-t2ljJ5Iai.png?ixlib=java-2.1.0&w=50&s=86d6e8de8486275e0724a80a16f7a877",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/cL5XYBECBOmc1rn9edoWuq.png?ixlib=java-2.1.0&w=50&s=0cdcc8d9cc39ebad5b32d0cdbf5ae10a"
            },
            "rank": 29
        },
        {
            "players": [
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "Nodios",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HfcSLHYha5ad__CK13mUBT.png?ixlib=java-2.1.0&w=400&s=952bc7c7a01bdd165e952c2fb301058a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.05",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "55.4%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "16.2%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8891
                        },
                        "statsLocation": "/stats/players/8891/nodios?startDate=2022-12-01&endDate=2023-06-01",
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
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.1%",
                            "entryFragsPerRound": "9.2%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "21.3%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13749
                        },
                        "statsLocation": "/stats/players/13749/queenix?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "maNkz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dgTcvjQcW3P3ephkETE_Ky.png?ixlib=java-2.1.0&w=400&s=2685ac1408e120c32294f9b65da4f601",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.05",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.4%",
                            "entryFragsPerRound": "11.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "15.3%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15349
                        },
                        "statsLocation": "/stats/players/15349/mankz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "kraghen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ReS9kBazXYwGlydn6PLIiL.png?ixlib=java-2.1.0&w=400&s=049b72a82724c94c133cc7954dbebb05",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.04",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.1%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20300
                        },
                        "statsLocation": "/stats/players/20300/kraghen?startDate=2022-12-01&endDate=2023-06-01",
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
                            "rating": "1.05",
                            "ctRating": "1.11",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "28.7%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "20.3%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "ECSTATIC",
                            "link": "/team/11419/ecstatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21379
                        },
                        "statsLocation": "/stats/players/21379/salazar?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "ECSTATIC",
                "link": "/team/11419/ecstatic",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/Ox1eFAB6o8VM6jwgPbQuks.svg?ixlib=java-2.1.0&s=66680f6d946ff4a93bc311f3bbab8d9e"
            },
            "rank": 30
        },
        {
            "players": [
                {
                    "cost": 165000,
                    "playerData": {
                        "name": "ben1337",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LNZt2n5Qkbv0CMXzTjO81f.png?ixlib=java-2.1.0&w=400&s=df6cae7c3c57fdb18dde8da918847264",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.93",
                            "tRating": "0.87",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "42.7%",
                            "entryFragsPerRound": "7.2%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "13.3%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Party Astronauts",
                            "link": "/team/8038/party-astronauts",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13250
                        },
                        "statsLocation": "/stats/players/13250/ben1337?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "PwnAlone",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/YfqP_lMI7AVg-vtkAzJWiy.png?ixlib=java-2.1.0&w=400&s=0f7238aaac9e1f70fbdf03d5807b7167",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.24",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.42",
                            "hsPercentage": "24.6%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "19.0%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Party Astronauts",
                            "link": "/team/8038/party-astronauts",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15090
                        },
                        "statsLocation": "/stats/players/15090/pwnalone?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "cxzi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/yQlFJfFVEKPPvz8RC4zPV9.png?ixlib=java-2.1.0&w=400&s=2101f849457fa8c3cee69802c46907df",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.08",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "38.3%",
                            "entryFragsPerRound": "13.2%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "15.5%",
                            "multiKillRounds": "16.2%",
                            "dpr": "0.73"
                        },
                        "team": {
                            "name": "Party Astronauts",
                            "link": "/team/8038/party-astronauts",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17353
                        },
                        "statsLocation": "/stats/players/17353/cxzi?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "viz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/5aGx82ecxVA8ZBGEuU0eYR.png?ixlib=java-2.1.0&w=400&s=ab1998ceea727676642a3cb85e063312",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "1.04",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.8%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "14.9%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Party Astronauts",
                            "link": "/team/8038/party-astronauts",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18761
                        },
                        "statsLocation": "/stats/players/18761/viz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "chop",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/j-mFWPlW9Ii9XKonihuYSD.png?ixlib=java-2.1.0&w=400&s=7602be20372caa7560cb5ac30c114090",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.06",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.8%",
                            "entryFragsPerRound": "7.9%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "17.4%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Party Astronauts",
                            "link": "/team/8038/party-astronauts",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19705
                        },
                        "statsLocation": "/stats/players/19705/chop?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Party Astronauts",
                "link": "/team/8038/party-astronauts",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/5u8WkSr7yNWGWTNAfbEYjD.png?ixlib=java-2.1.0&w=50&s=6d1141a37578edbb5ed61cf53c28832b"
            },
            "rank": 57
        },
        {
            "players": [
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "SloWye",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ihCvg3nnm4f2yL-1CSJQ5h.png?ixlib=java-2.1.0&w=400&s=2704cbeca552ec7ce8487c6f2e15f9b5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.25",
                            "ctRating": "1.46",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.39",
                            "hsPercentage": "27.7%",
                            "entryFragsPerRound": "17.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "17.5%",
                            "multiKillRounds": "19.2%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "Bravado",
                            "link": "/team/5158/bravado",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14904
                        },
                        "statsLocation": "/stats/players/14904/slowye?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 173000,
                    "playerData": {
                        "name": "march",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/sJaPNXZzgjDO_G7dX1M7zE.png?ixlib=java-2.1.0&w=400&s=656cc7c3ee3c2ac2f4ffa943ef5cfef2",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "1.02",
                            "tRating": "0.86",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "48.0%",
                            "entryFragsPerRound": "5.9%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Bravado",
                            "link": "/team/5158/bravado",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17371
                        },
                        "statsLocation": "/stats/players/17371/march?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "wilj",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/bHDShqawHRBCetjdMu5hbQ.png?ixlib=java-2.1.0&w=400&s=34d8605b93cd57a12216d85f0271ec4c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.36",
                            "ctRating": "1.35",
                            "tRating": "1.36",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "54.9%",
                            "entryFragsPerRound": "16.7%",
                            "cluthesPerRound": "2.4%",
                            "supportRounds": "12.0%",
                            "multiKillRounds": "23.1%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Bravado",
                            "link": "/team/5158/bravado",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18882
                        },
                        "statsLocation": "/stats/players/18882/wilj?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 173000,
                    "playerData": {
                        "name": "Doru",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Yr13JKfZZebcFAfYbOSCGp.png?ixlib=java-2.1.0&w=400&s=c5a1ee9d46175c8050d808f561eadf5e",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.97",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.5%",
                            "entryFragsPerRound": "4.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "30.1%",
                            "multiKillRounds": "12.5%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Bravado",
                            "link": "/team/5158/bravado",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18883
                        },
                        "statsLocation": "/stats/players/18883/doru?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "Triton",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/o80JX9RUXmC6JPS-ZkdYzR.png?ixlib=java-2.1.0&w=400&s=88ed14408914f0e94c71791fbdf9fc70",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.20",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.4%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "16.5%",
                            "multiKillRounds": "20.5%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Bravado",
                            "link": "/team/5158/bravado",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21150
                        },
                        "statsLocation": "/stats/players/21150/triton?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Bravado",
                "link": "/team/5158/bravado",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/h_0Ife5rhAIsOhJnGKeG8D.png?ixlib=java-2.1.0&w=50&s=0dfeff925fd53f7dd311f2588a33144d"
            },
            "rank": 130
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