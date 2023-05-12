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
                    "cost": 202000,
                    "playerData": {
                        "name": "cadiaN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LPx5hvA81pdvJlvThrFUiY.png?ixlib=java-2.1.0&w=400&s=f8b245d912ed237ef6f23a4a7efc5290",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.14",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.29",
                            "hsPercentage": "29.3%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Heroic",
                            "link": "/team/7175/heroic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7964
                        },
                        "statsLocation": "/stats/players/7964/cadian?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "stavn",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7-vEqTQE4CAAFsXSVapF8p.png?ixlib=java-2.1.0&w=400&s=6b3cb8cd2e5b5b51a3cd057887c9dac3",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.20",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "42.8%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Heroic",
                            "link": "/team/7175/heroic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10994
                        },
                        "statsLocation": "/stats/players/10994/stavn?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
                    "playerData": {
                        "name": "TeSeS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Ch1VId8enAzmbsiOZPvzds.png?ixlib=java-2.1.0&w=400&s=63cfeac2176a9af822ea9ba9abb6d555",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.13",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.5%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Heroic",
                            "link": "/team/7175/heroic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12018
                        },
                        "statsLocation": "/stats/players/12018/teses?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "sjuush",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/H4-F8tiCLLNLBg7PQ83pKY.png?ixlib=java-2.1.0&w=400&s=8d7f620fe1539ab79289c5a983a71644",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.10",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.2%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Heroic",
                            "link": "/team/7175/heroic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14148
                        },
                        "statsLocation": "/stats/players/14148/sjuush?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 211000,
                    "playerData": {
                        "name": "jabbi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nerctHcVDo6Jodpj7ww-PC.png?ixlib=java-2.1.0&w=400&s=328d76b65b590f8d65eb74f364913974",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.12",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.8%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "17.6%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Heroic",
                            "link": "/team/7175/heroic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17956
                        },
                        "statsLocation": "/stats/players/17956/jabbi?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Heroic",
                "link": "/team/7175/heroic",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615"
            },
            "rank": 1
        },
        {
            "players": [
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "apEX",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/vDksHfTWrFDEnn0l1SZs0Z.png?ixlib=java-2.1.0&w=400&s=a4bb4d87a77197f89550e2b0dbefcecc",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.93",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "42.9%",
                            "entryFragsPerRound": "7.7%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "21.9%",
                            "multiKillRounds": "12.0%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Vitality",
                            "link": "/team/9565/vitality",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7322
                        },
                        "statsLocation": "/stats/players/7322/apex?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "dupreeh",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/o7msRJxwfm_ocbomcixhyK.png?ixlib=java-2.1.0&w=400&s=c467bce055bc7fca693f975758438103",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.03",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "48.5%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "13.6%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Vitality",
                            "link": "/team/9565/vitality",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7398
                        },
                        "statsLocation": "/stats/players/7398/dupreeh?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "Magisk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2YQBwCCs3DnkjuzdZAbpel.png?ixlib=java-2.1.0&w=400&s=7db9549eb0b68633dff0fde24ec09db5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.12",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.2%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "22.2%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Vitality",
                            "link": "/team/9565/vitality",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9032
                        },
                        "statsLocation": "/stats/players/9032/magisk?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 245000,
                    "playerData": {
                        "name": "ZywOo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/cDLEVO33Lh8PtHQtUyF4Q9.png?ixlib=java-2.1.0&w=400&s=5ebc8a972b11d0fd81bfd922f4e0902c",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.32",
                            "ctRating": "1.36",
                            "tRating": "1.29",
                            "awpKillsPerRound": "0.26",
                            "hsPercentage": "44.5%",
                            "entryFragsPerRound": "13.6%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "21.3%",
                            "dpr": "0.56"
                        },
                        "team": {
                            "name": "Vitality",
                            "link": "/team/9565/vitality",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11893
                        },
                        "statsLocation": "/stats/players/11893/zywoo?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 221000,
                    "playerData": {
                        "name": "Spinx",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/g48HwD49Zckp1HwfSPs1ln.png?ixlib=java-2.1.0&w=400&s=e38bf6a0c1516d109127a14d528cba87",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.17",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "54.2%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "19.2%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Vitality",
                            "link": "/team/9565/vitality",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18221
                        },
                        "statsLocation": "/stats/players/18221/spinx?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Vitality",
                "link": "/team/9565/vitality",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=50&s=e1f6019aa9f274ffe45a5e99c88dbc02",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6"
            },
            "rank": 2
        },
        {
            "players": [
                {
                    "cost": 222000,
                    "playerData": {
                        "name": "s1mple",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/M_HZ0vz7Cd9dNP7lS283jo.png?ixlib=java-2.1.0&w=400&s=dd291b44af34444878bc9db7fbd89e29",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.24",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.31",
                            "hsPercentage": "39.8%",
                            "entryFragsPerRound": "12.8%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.5%",
                            "multiKillRounds": "19.2%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "Natus Vincere",
                            "link": "/team/4608/natus-vincere",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7998
                        },
                        "statsLocation": "/stats/players/7998/s1mple?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
                    "playerData": {
                        "name": "electroNic",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/M60OPidppxktmBkxtWxRZb.png?ixlib=java-2.1.0&w=400&s=68b152c1f167d0a0a5ff3661b33eb6c2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.11",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.1%",
                            "entryFragsPerRound": "12.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Natus Vincere",
                            "link": "/team/4608/natus-vincere",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8918
                        },
                        "statsLocation": "/stats/players/8918/electronic?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "Perfecto",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ZC0J_jEmkGRfQXmlncezRS.png?ixlib=java-2.1.0&w=400&s=0353fba645f82ee92ff205756999e04c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.01",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "44.1%",
                            "entryFragsPerRound": "7.2%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "22.8%",
                            "multiKillRounds": "13.9%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Natus Vincere",
                            "link": "/team/4608/natus-vincere",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16947
                        },
                        "statsLocation": "/stats/players/16947/perfecto?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "b1t",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-wpQWEgpPtJERr0fGhpsaI.png?ixlib=java-2.1.0&w=400&s=7e7143243c98eae3cbafd7e984a8ecfa",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.05",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "65.0%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.9%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Natus Vincere",
                            "link": "/team/4608/natus-vincere",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18987
                        },
                        "statsLocation": "/stats/players/18987/b1t?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "npl",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SMebvNX13AiGybec1L9HbK.png?ixlib=java-2.1.0&w=400&s=229146cf1cebcf195aa484d837b4f78d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.96",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.7%",
                            "entryFragsPerRound": "7.6%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "22.2%",
                            "multiKillRounds": "13.0%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Natus Vincere",
                            "link": "/team/4608/natus-vincere",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21708
                        },
                        "statsLocation": "/stats/players/21708/npl?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Natus Vincere",
                "link": "/team/4608/natus-vincere",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
            },
            "rank": 3
        },
        {
            "players": [
                {
                    "cost": 226000,
                    "playerData": {
                        "name": "NiKo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ryEzkk38b_L-5BdkIG23c3.png?ixlib=java-2.1.0&w=400&s=62e42f9862a878e552236e0df10e7249",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.20",
                            "ctRating": "1.24",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.0%",
                            "entryFragsPerRound": "14.6%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "19.1%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "G2",
                            "link": "/team/5995/g2",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 3741
                        },
                        "statsLocation": "/stats/players/3741/niko?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "huNter-",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JLe3rUhWZC-HbEhh3PhQvz.png?ixlib=java-2.1.0&w=400&s=279647d28d5b2006cba10866faeab816",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.15",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.2%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "17.0%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "G2",
                            "link": "/team/5995/g2",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 3972
                        },
                        "statsLocation": "/stats/players/3972/hunter?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "jks",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/E0oAsznGp67mqgNjGGOZia.png?ixlib=java-2.1.0&w=400&s=850c7701777957dbf957d845b7fd9f09",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.12",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "55.7%",
                            "entryFragsPerRound": "7.0%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "23.3%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "G2",
                            "link": "/team/5995/g2",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 4679
                        },
                        "statsLocation": "/stats/players/4679/jks?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 171000,
                    "playerData": {
                        "name": "HooXi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ZD7YDVWTDqZ5Bf8hEagZMi.png?ixlib=java-2.1.0&w=400&s=f4af7f7c4f2593c024c0dcbb3c9f1168",
                        "stats": {
                            "rating": "0.87",
                            "ctRating": "0.88",
                            "tRating": "0.86",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.7%",
                            "entryFragsPerRound": "7.3%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "10.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "G2",
                            "link": "/team/5995/g2",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10096
                        },
                        "statsLocation": "/stats/players/10096/hooxi?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 231000,
                    "playerData": {
                        "name": "m0NESY",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/aGl4zm62SBHK44DuGvb_91.png?ixlib=java-2.1.0&w=400&s=1393e027bbd92e38bba88f77e8be1ef9",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.22",
                            "ctRating": "1.28",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.43",
                            "hsPercentage": "34.7%",
                            "entryFragsPerRound": "13.1%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "19.3%",
                            "dpr": "0.55"
                        },
                        "team": {
                            "name": "G2",
                            "link": "/team/5995/g2",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19230
                        },
                        "statsLocation": "/stats/players/19230/m0nesy?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "G2",
                "link": "/team/5995/g2",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=50&s=affb583e6716d8ee904826992255cc4b"
            },
            "rank": 4
        },
        {
            "players": [
                {
                    "cost": 173000,
                    "playerData": {
                        "name": "karrigan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HBq_UoWU_p_yC7jkxXD3Lp.png?ixlib=java-2.1.0&w=400&s=68522238b911e44997cad4e63d67398e",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.97",
                            "tRating": "0.84",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.5%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "11.4%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "FaZe",
                            "link": "/team/6667/faze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
                        },
                        "fantasyPlayerId": {
                            "playerId": 429
                        },
                        "statsLocation": "/stats/players/429/karrigan?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "rain",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/BcLwaUMx36y5OQHAVnLmhR.png?ixlib=java-2.1.0&w=400&s=93fd97d57d89f0c530b299405da9aaa5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.16",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "56.2%",
                            "entryFragsPerRound": "13.4%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "FaZe",
                            "link": "/team/6667/faze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8183
                        },
                        "statsLocation": "/stats/players/8183/rain?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "Twistzz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/MtlmsJNL2i-7kMiNcG5I8t.png?ixlib=java-2.1.0&w=400&s=a9c0718e152a595d660a763f5057a339",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.17",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.2%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "FaZe",
                            "link": "/team/6667/faze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10394
                        },
                        "statsLocation": "/stats/players/10394/twistzz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 221000,
                    "playerData": {
                        "name": "ropz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/EE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/OYZih3h-_cJrZDFq5ButZP.png?ixlib=java-2.1.0&w=400&s=3edd66ad46b03465cc98d235a46297cf",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.15",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "53.6%",
                            "entryFragsPerRound": "10.1%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "20.1%",
                            "multiKillRounds": "18.7%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "FaZe",
                            "link": "/team/6667/faze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11816
                        },
                        "statsLocation": "/stats/players/11816/ropz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 216000,
                    "playerData": {
                        "name": "broky",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LV.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uz_gYKYS-cjdlEJ-tpikrV.png?ixlib=java-2.1.0&w=400&s=61eea26e2076802840dacc42bf8fd4ea",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.24",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "31.7%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "FaZe",
                            "link": "/team/6667/faze",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18053
                        },
                        "statsLocation": "/stats/players/18053/broky?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "FaZe",
                "link": "/team/6667/faze",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa"
            },
            "rank": 5
        },
        {
            "players": [
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "arT",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6iOItsKZEyu3Y_wYNBQmTO.png?ixlib=java-2.1.0&w=400&s=e859d4b236658de19458b79cad43668e",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "1.06",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.08",
                            "hsPercentage": "43.1%",
                            "entryFragsPerRound": "14.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "17.6%",
                            "multiKillRounds": "13.3%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "FURIA",
                            "link": "/team/8297/furia",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12521
                        },
                        "statsLocation": "/stats/players/12521/art?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "yuurih",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/m3fnMeP4-iiVdIL3sjBG3O.png?ixlib=java-2.1.0&w=400&s=0551a397b2cdf4ed0b23218f6b55a244",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.11",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "41.9%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.8%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "FURIA",
                            "link": "/team/8297/furia",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12553
                        },
                        "statsLocation": "/stats/players/12553/yuurih?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 229000,
                    "playerData": {
                        "name": "KSCERATO",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/4keim78MaUz3n9oyXr6Dbu.png?ixlib=java-2.1.0&w=400&s=433b5e54304994a90eaff5826205f2c6",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.26",
                            "ctRating": "1.33",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.0%",
                            "entryFragsPerRound": "11.5%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "21.5%",
                            "multiKillRounds": "19.8%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "FURIA",
                            "link": "/team/8297/furia",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15631
                        },
                        "statsLocation": "/stats/players/15631/kscerato?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "saffee",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xurBY5sdmYUu7l2bQyNK8f.png?ixlib=java-2.1.0&w=400&s=8ab2989b8b98b08efb19a4bc71ec82b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.14",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "27.3%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "20.2%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "FURIA",
                            "link": "/team/8297/furia",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18835
                        },
                        "statsLocation": "/stats/players/18835/saffee?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "drop",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qEsZ9huhuqIeeNBj9UOP44.png?ixlib=java-2.1.0&w=400&s=3f23307136d8854ea2e39b531687ce5b",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "0.99",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.0%",
                            "entryFragsPerRound": "7.3%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "22.4%",
                            "multiKillRounds": "14.4%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "FURIA",
                            "link": "/team/8297/furia",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19750
                        },
                        "statsLocation": "/stats/players/19750/drop?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "FURIA",
                "link": "/team/8297/furia",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
            },
            "rank": 8
        },
        {
            "players": [
                {
                    "cost": 179000,
                    "playerData": {
                        "name": "Snappi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/YcM10KQ5AA_CjX6uEemkna.png?ixlib=java-2.1.0&w=400&s=546f182cff21b191625068c347d74121",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.98",
                            "tRating": "0.92",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.3%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "12.7%",
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
                        "statsLocation": "/stats/players/922/snappi?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 221000,
                    "playerData": {
                        "name": "NertZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/CSE5aJJQxzbZ1-c2Yvpiad.png?ixlib=java-2.1.0&w=400&s=c4ce234b5cd64da0279ad42491e1482e",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.19",
                            "ctRating": "1.24",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.1%",
                            "entryFragsPerRound": "14.8%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "15.9%",
                            "multiKillRounds": "20.0%",
                            "dpr": "0.67"
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
                        "statsLocation": "/stats/players/9436/nertz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "Maden",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ME.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/0DHr1zgMuykiW51TI56B1t.png?ixlib=java-2.1.0&w=400&s=f566ab8739c8b6609c68865d7d532116",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.02",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/11777/maden?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "dycha",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2wHhhKTMmOLlBXfn5aiq8u.png?ixlib=java-2.1.0&w=400&s=32710ef961c1a88c8af71218701a95ed",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.15",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.2%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "18.7%",
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
                        "statsLocation": "/stats/players/16080/dycha?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "SunPayus",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Yr4pnhhkgN5pPRpdkzAV4Z.png?ixlib=java-2.1.0&w=400&s=eab0b361e8a4327030284564d80cfc73",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.20",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.33",
                            "hsPercentage": "28.6%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "16.4%",
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
                        "statsLocation": "/stats/players/19164/sunpayus?startDate=2022-11-08&endDate=2023-05-08",
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
            "rank": 9
        },
        {
            "players": [
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "k0nfig",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/IEAvwsdTtAJ0DUZsHYeljz.png?ixlib=java-2.1.0&w=400&s=d5d8b818304dbd762260878fd0220191",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.06",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "58.9%",
                            "entryFragsPerRound": "11.4%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "17.0%",
                            "multiKillRounds": "17.1%",
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
                        "statsLocation": "/stats/players/9078/k0nfig?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
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
                            "hsPercentage": "50.4%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "16.2%",
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
                        "statsLocation": "/stats/players/9278/rez?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 173000,
                    "playerData": {
                        "name": "Aleksib",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dgFQooikdq8hA0UFfUDghb.png?ixlib=java-2.1.0&w=400&s=8614b853ba7ed56b3359c40b1b8c2768",
                        "stats": {
                            "rating": "0.93",
                            "ctRating": "0.99",
                            "tRating": "0.86",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.1%",
                            "entryFragsPerRound": "7.3%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "12.2%",
                            "dpr": "0.66"
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
                        "statsLocation": "/stats/players/9816/aleksib?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "Brollan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tle_HlrL6OjIXDgtNaXpvs.png?ixlib=java-2.1.0&w=400&s=12fe49e622ea4400ffdcdbc948f30fab",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.07",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.4%",
                            "entryFragsPerRound": "14.5%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "15.3%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/13666/brollan?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "headtr1ck",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ahxfIiKlKDAkloRSdNDZVI.png?ixlib=java-2.1.0&w=400&s=689ce17a945f835c15252cdbb63bda93",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.14",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.33",
                            "hsPercentage": "32.2%",
                            "entryFragsPerRound": "9.1%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "16.6%",
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
                        "statsLocation": "/stats/players/19592/headtr1ck?startDate=2022-11-08&endDate=2023-05-08",
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
            "rank": 14
        },
        {
            "players": [
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "KRIMZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/DR0kC2eiMIcOeJwA3-zCua.png?ixlib=java-2.1.0&w=400&s=cfc07566661f64a15a0c2dca72df6620",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.07",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.9%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.2%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "fnatic",
                            "link": "/team/4991/fnatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7528
                        },
                        "statsLocation": "/stats/players/7528/krimz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 184000,
                    "playerData": {
                        "name": "FASHR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JNgYnLgjC-PoYDof9gvUlA.png?ixlib=java-2.1.0&w=400&s=2c565026234c909ea0c31c0c81e22a52",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "1.08",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.6%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "14.5%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "fnatic",
                            "link": "/team/4991/fnatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11954
                        },
                        "statsLocation": "/stats/players/11954/fashr?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "nicoodoz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2ONC-ZoRr4oR67YUqsZfIG.png?ixlib=java-2.1.0&w=400&s=911899ca7b72008862698de5e807f009",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.11",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.32",
                            "hsPercentage": "32.9%",
                            "entryFragsPerRound": "12.0%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "22.1%",
                            "multiKillRounds": "14.9%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "fnatic",
                            "link": "/team/4991/fnatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13602
                        },
                        "statsLocation": "/stats/players/13602/nicoodoz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "roeJ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RiMtwnmTfM15fqoOtbMIao.png?ixlib=java-2.1.0&w=400&s=30a60fddb7722ba1386dc65a303db757",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.14",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.8%",
                            "entryFragsPerRound": "14.1%",
                            "cluthesPerRound": "0.5%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "16.4%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "fnatic",
                            "link": "/team/4991/fnatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14419
                        },
                        "statsLocation": "/stats/players/14419/roej?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "mezii",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/v48_aMPwWtYS3cYAzBZdsv.png?ixlib=java-2.1.0&w=400&s=76a932311c3e2f376d02918a34f72d36",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.06",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "55.0%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "21.3%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "fnatic",
                            "link": "/team/4991/fnatic",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18462
                        },
                        "statsLocation": "/stats/players/18462/mezii?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "fnatic",
                "link": "/team/4991/fnatic",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/dLtWEdSV58lIX1amAFggy0.svg?ixlib=java-2.1.0&s=f24d0a7b3ef24ed57184a51d35202b4e"
            },
            "rank": 15
        },
        {
            "players": [
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "mynio",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-uaG_roOxK_iNF0t9i6JW3.png?ixlib=java-2.1.0&w=400&s=b37067e688fa59f7d40046b5262f2436",
                        "stats": {
                            "rating": "0.97",
                            "ctRating": "0.98",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.3%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "14.2%",
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
                        "statsLocation": "/stats/players/4829/mynio?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "Goofy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/lKA1seMfS0aqlfEXSJjujy.png?ixlib=java-2.1.0&w=400&s=982037f9fd8e25723ea528c57a88f3b1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.11",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "38.4%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "16.6%",
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
                        "statsLocation": "/stats/players/15428/goofy?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "hades",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/-p6yxNicbjdldpjtgdGscF.png?ixlib=java-2.1.0&w=400&s=84eca1f9d36b50fbb8b3ec10008e2ce1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.16",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "28.8%",
                            "entryFragsPerRound": "12.2%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "17.5%",
                            "dpr": "0.59"
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
                        "statsLocation": "/stats/players/16848/hades?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 210000,
                    "playerData": {
                        "name": "KEi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Kv1uTEaoL149Grf3Pe4L04.png?ixlib=java-2.1.0&w=400&s=0dadaf00b5825b15b53ead393a5d7e1c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.14",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "42.0%",
                            "entryFragsPerRound": "12.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "15.8%",
                            "multiKillRounds": "18.8%",
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
                        "statsLocation": "/stats/players/17504/kei?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "Kylar",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nU4fgkFU-Zl9MnfGI6OloE.png?ixlib=java-2.1.0&w=400&s=66d541434e97840222a486ba89f02eee",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.06",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "56.6%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "17.0%",
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
                        "statsLocation": "/stats/players/19114/kylar?startDate=2022-11-08&endDate=2023-05-08",
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
            "rank": 17
        },
        {
            "players": [
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "rigoN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CH.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/H82X1oyOfqQTzKPprcX-t-.png?ixlib=java-2.1.0&w=400&s=85e81666899eddcb20c2788a6d55482a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "55.8%",
                            "entryFragsPerRound": "13.2%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "14.2%",
                            "multiKillRounds": "17.2%",
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
                        "statsLocation": "/stats/players/12708/rigon?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 168000,
                    "playerData": {
                        "name": "SENER1",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RSZYO4IKSPT2bm8FunvaVJ.png?ixlib=java-2.1.0&w=400&s=541497a08917d7086fb4fd22cb4f802b",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.96",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.2%",
                            "entryFragsPerRound": "6.6%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "21.6%",
                            "multiKillRounds": "12.4%",
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
                        "statsLocation": "/stats/players/15778/sener1?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "juanflatroo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/oV24TRwK_J_w2BMOTIZVxM.png?ixlib=java-2.1.0&w=400&s=de5a413bec0179d0cc3e30629bcb64a0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.06",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.2%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "14.5%",
                            "multiKillRounds": "18.0%",
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
                        "statsLocation": "/stats/players/17147/juanflatroo?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 185000,
                    "playerData": {
                        "name": "sinnopsyy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6dBcVDwhwKENG-PwOnqDC1.png?ixlib=java-2.1.0&w=400&s=a7d1b41c8d2d1be06e07e14be8af9337",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.06",
                            "tRating": "0.98",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "54.8%",
                            "entryFragsPerRound": "11.3%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "14.1%",
                            "multiKillRounds": "16.0%",
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
                        "statsLocation": "/stats/players/18120/sinnopsyy?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "gxx-",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/XK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/X-0xepcrbV8UVVosToCHfr.png?ixlib=java-2.1.0&w=400&s=cec0524eda021a00ead4584336dc3d7e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.12",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "32.1%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "2.1%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "17.3%",
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
                        "statsLocation": "/stats/players/19725/gxx?startDate=2022-11-08&endDate=2023-05-08",
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
                    "cost": 178000,
                    "playerData": {
                        "name": "STYKO",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JuiFVsfRdoTqfka0ucTesa.png?ixlib=java-2.1.0&w=400&s=be7e72dd64a2714616e98a0d40e4d319",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.02",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "58.8%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "14.4%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Apeks",
                            "link": "/team/9806/apeks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
                        },
                        "fantasyPlayerId": {
                            "playerId": 6904
                        },
                        "statsLocation": "/stats/players/6904/styko?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "jkaem",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/cGokoxzE67Aq3hYZP6CEb0.png?ixlib=java-2.1.0&w=400&s=6d593a5e8e684e4afe3f3b112161b9db",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.15",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.9%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "15.0%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "Apeks",
                            "link": "/team/9806/apeks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8248
                        },
                        "statsLocation": "/stats/players/8248/jkaem?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "nawwk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SFZ02-Zms8hzlm_qqwkiSG.png?ixlib=java-2.1.0&w=400&s=da3a33fbe2f319877e41c37a31e87d3c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.19",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.32",
                            "hsPercentage": "33.9%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "21.4%",
                            "multiKillRounds": "17.4%",
                            "dpr": "0.54"
                        },
                        "team": {
                            "name": "Apeks",
                            "link": "/team/9806/apeks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13670
                        },
                        "statsLocation": "/stats/players/13670/nawwk?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 211000,
                    "playerData": {
                        "name": "jL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LT.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8RHaSoJtue9_r0zEbxPnPb.png?ixlib=java-2.1.0&w=400&s=1a90f624e0df9e57f01a6b4accba2541",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.18",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "54.1%",
                            "entryFragsPerRound": "11.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "15.9%",
                            "multiKillRounds": "19.4%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Apeks",
                            "link": "/team/9806/apeks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19206
                        },
                        "statsLocation": "/stats/players/19206/jl?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "kyxsan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/MK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/FPOkipcC4FrK_I9qkyDAgX.png?ixlib=java-2.1.0&w=400&s=ca9592e909f3263da703dfe8e78123f7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.04",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.7%",
                            "entryFragsPerRound": "9.2%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "14.8%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Apeks",
                            "link": "/team/9806/apeks",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19677
                        },
                        "statsLocation": "/stats/players/19677/kyxsan?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Apeks",
                "link": "/team/9806/apeks",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/IBGw2qcLFA7xL1Ju9HwJpe.png?ixlib=java-2.1.0&w=50&s=23679f2fa7cc90bddd18f54650b79b56"
            },
            "rank": 24
        },
        {
            "players": [
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "rallen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/I1ABQFlv-1vKh0QfZqgJ2t.png?ixlib=java-2.1.0&w=400&s=a87f39842f0056664d21ced21c658e08",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.16",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.6%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "17.0%",
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
                        "statsLocation": "/stats/players/5388/rallen?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "CRUC1AL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/NQ9EkN_JfInD-s2xphdfy9.png?ixlib=java-2.1.0&w=400&s=83ffe82afd8ab13cc2511c3d61d37a00",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.11",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "27.7%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "19.0%",
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
                        "statsLocation": "/stats/players/7996/cruc1al?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
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
                            "hsPercentage": "37.5%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "15.9%",
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
                        "statsLocation": "/stats/players/13018/thomas?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "CYPHER",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2O8iemGgkX6tUOUzaZrRtc.png?ixlib=java-2.1.0&w=400&s=d4568a843a84deae87421c508b5a01b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.09",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.2%",
                            "entryFragsPerRound": "13.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.3%",
                            "multiKillRounds": "17.0%",
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
                        "statsLocation": "/stats/players/18571/cypher?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
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
                            "hsPercentage": "50.4%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "22.5%",
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
                        "statsLocation": "/stats/players/20358/volt?startDate=2022-11-08&endDate=2023-05-08",
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
            "rank": 27
        },
        {
            "players": [
                {
                    "cost": 192000,
                    "playerData": {
                        "name": "acoR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/h5F40rdhSoc2EAoI0n-EmA.png?ixlib=java-2.1.0&w=400&s=f2874478f725ce62f0c15252360d0b4c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.09",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "32.3%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "18.2%",
                            "multiKillRounds": "17.2%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "GamerLegion",
                            "link": "/team/9928/gamerlegion",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10330
                        },
                        "statsLocation": "/stats/players/10330/acor?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "iM",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/g_FbICtOLzlJSjJjH6nC0g.png?ixlib=java-2.1.0&w=400&s=96bd09401ffa4ee21a8682f138cf8b0a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.17",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "41.9%",
                            "entryFragsPerRound": "12.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.4%",
                            "multiKillRounds": "19.3%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "GamerLegion",
                            "link": "/team/9928/gamerlegion",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14759
                        },
                        "statsLocation": "/stats/players/14759/im?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 169000,
                    "playerData": {
                        "name": "Keoz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/hxgkAsIs6ZcKQ4YK4sKW3N.png?ixlib=java-2.1.0&w=400&s=d16950701f0c6d293027de8f3d991e71",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.97",
                            "tRating": "0.92",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "55.4%",
                            "entryFragsPerRound": "8.6%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "GamerLegion",
                            "link": "/team/9928/gamerlegion",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15117
                        },
                        "statsLocation": "/stats/players/15117/keoz?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "siuhy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/hpOmcDPmCwZDjvKt_mudkV.png?ixlib=java-2.1.0&w=400&s=44a1096bd12cd6689ba5cab54f2b85f7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.08",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.5%",
                            "multiKillRounds": "16.6%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "GamerLegion",
                            "link": "/team/9928/gamerlegion",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16820
                        },
                        "statsLocation": "/stats/players/16820/siuhy?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 175000,
                    "playerData": {
                        "name": "isak",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7XC1oNJqnipSQRbNuaBwuz.png?ixlib=java-2.1.0&w=400&s=02d63eacc092410e4f264caccb079926",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "1.00",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.9%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "20.9%",
                            "multiKillRounds": "13.2%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "GamerLegion",
                            "link": "/team/9928/gamerlegion",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17937
                        },
                        "statsLocation": "/stats/players/17937/isak?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "GamerLegion",
                "link": "/team/9928/gamerlegion",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=50&s=11e6eacde0fea931c65c2437b1568027"
            },
            "rank": 31
        },
        {
            "players": [
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "sdy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2wldXzlfsYMBhkJgfWZS2c.png?ixlib=java-2.1.0&w=400&s=d4fc6480a1728ebd6ad57da9d37346de",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.15",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "47.3%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12731
                        },
                        "statsLocation": "/stats/players/12731/sdy?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "Woro2k",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PV3jy5dkCmEbQ-c7JUGDo7.png?ixlib=java-2.1.0&w=400&s=3408d6915ba97548f7b6a8249bcec44c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.17",
                            "tRating": "1.17",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "32.8%",
                            "entryFragsPerRound": "12.1%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "15.0%",
                            "multiKillRounds": "19.3%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16885
                        },
                        "statsLocation": "/stats/players/16885/woro2k?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "DemQQ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/X82JOzCmNJa38JUVkFIHRA.png?ixlib=java-2.1.0&w=400&s=33567f9bdd678e267dd7812fa4944c28",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.06",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.8%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "21.6%",
                            "multiKillRounds": "14.3%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19733
                        },
                        "statsLocation": "/stats/players/19733/demqq?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "BOROS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/JO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8UCFXtQN6F8NjdxqcqZe6d.png?ixlib=java-2.1.0&w=400&s=adacc52ec63ca5d10fcf7786f3a12e32",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.14",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "62.7%",
                            "entryFragsPerRound": "14.1%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "13.2%",
                            "multiKillRounds": "20.7%",
                            "dpr": "0.72"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19763
                        },
                        "statsLocation": "/stats/players/19763/boros?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "kRaSnaL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tqTf6mVhsr6hESsrdlTxma.png?ixlib=java-2.1.0&w=400&s=8b76c23dc1e5c8db82fe7602f20e55cf",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.0%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20282
                        },
                        "statsLocation": "/stats/players/20282/krasnal?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Monte",
                "link": "/team/11811/monte",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
            },
            "rank": 22
        },
        {
            "players": [
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "nitr0",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qjUR71O_V0VqiVBPlEecGc.png?ixlib=java-2.1.0&w=400&s=2432f16a71a761075404038b5c679ec7",
                        "stats": {
                            "rating": "0.93",
                            "ctRating": "0.95",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.7%",
                            "entryFragsPerRound": "7.9%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "20.8%",
                            "multiKillRounds": "12.2%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Liquid",
                            "link": "/team/5973/liquid",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7687
                        },
                        "statsLocation": "/stats/players/7687/nitr0?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "NAF",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xqJ4nf0aCIE7ooM2G8LaMa.png?ixlib=java-2.1.0&w=400&s=3ff473729f38383683c87e738402585f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.09",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.8%",
                            "entryFragsPerRound": "6.2%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "22.9%",
                            "multiKillRounds": "15.0%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Liquid",
                            "link": "/team/5973/liquid",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8520
                        },
                        "statsLocation": "/stats/players/8520/naf?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "EliGE",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/gjvrflLVoMAhNbPUZlaYAb.png?ixlib=java-2.1.0&w=400&s=16d38c8b7ffb303445c5d80187dbac23",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.14",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.6%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "17.3%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Liquid",
                            "link": "/team/5973/liquid",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8738
                        },
                        "statsLocation": "/stats/players/8738/elige?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "oSee",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/v7m_0PPIhCAZzML3h7-USx.png?ixlib=java-2.1.0&w=400&s=2f17335a99a7cb33da58dce9478bffa0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.14",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.31",
                            "hsPercentage": "29.1%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "22.1%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "Liquid",
                            "link": "/team/5973/liquid",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13249
                        },
                        "statsLocation": "/stats/players/13249/osee?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                },
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "YEKINDAR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LV.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/VNBNNDhHu_YVgAonpsBLIm.png?ixlib=java-2.1.0&w=400&s=feff564c89a098a920d755b6f3576e38",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.11",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "57.6%",
                            "entryFragsPerRound": "16.5%",
                            "cluthesPerRound": "0.5%",
                            "supportRounds": "15.7%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "Liquid",
                            "link": "/team/5973/liquid",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13915
                        },
                        "statsLocation": "/stats/players/13915/yekindar?startDate=2022-11-08&endDate=2023-05-08",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Liquid",
                "link": "/team/5973/liquid",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62"
            },
            "rank": 7
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
            <div className="fixed-bottom w-100 sticky-botom-bg p-2">
                <div className="d-flex flex-row justify-content-between">
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
        </div>
    );
};

export default BestCombination;