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
                    "cost": 205000,
                    "playerData": {
                        "name": "cadiaN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LPx5hvA81pdvJlvThrFUiY.png?ixlib=java-2.1.0&w=400&s=f8b245d912ed237ef6f23a4a7efc5290",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.14",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.28",
                            "hsPercentage": "29.5%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.5%",
                            "multiKillRounds": "14.0%",
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
                        "statsLocation": "/stats/players/7964/cadian?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
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
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.2%",
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
                        "statsLocation": "/stats/players/10994/stavn?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "TeSeS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Ch1VId8enAzmbsiOZPvzds.png?ixlib=java-2.1.0&w=400&s=63cfeac2176a9af822ea9ba9abb6d555",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.13",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.5%",
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
                        "statsLocation": "/stats/players/12018/teses?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 199000,
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
                            "hsPercentage": "47.3%",
                            "entryFragsPerRound": "8.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.5%",
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
                        "statsLocation": "/stats/players/14148/sjuush?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "jabbi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nerctHcVDo6Jodpj7ww-PC.png?ixlib=java-2.1.0&w=400&s=328d76b65b590f8d65eb74f364913974",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.12",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "58.1%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "17.4%",
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
                        "statsLocation": "/stats/players/17956/jabbi?startDate=2022-11-12&endDate=2023-05-12",
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
                        "statsLocation": "/stats/players/7322/apex?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
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
                        "statsLocation": "/stats/players/7398/dupreeh?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
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
                        "statsLocation": "/stats/players/9032/magisk?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 244000,
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
                        "statsLocation": "/stats/players/11893/zywoo?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
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
                        "statsLocation": "/stats/players/18221/spinx?startDate=2022-11-12&endDate=2023-05-12",
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
                    "cost": 172000,
                    "playerData": {
                        "name": "karrigan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HBq_UoWU_p_yC7jkxXD3Lp.png?ixlib=java-2.1.0&w=400&s=68522238b911e44997cad4e63d67398e",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.97",
                            "tRating": "0.83",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.2%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.9%",
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
                        "statsLocation": "/stats/players/429/karrigan?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "rain",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/BcLwaUMx36y5OQHAVnLmhR.png?ixlib=java-2.1.0&w=400&s=93fd97d57d89f0c530b299405da9aaa5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.16",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "56.0%",
                            "entryFragsPerRound": "13.4%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "16.4%",
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
                        "statsLocation": "/stats/players/8183/rain?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 210000,
                    "playerData": {
                        "name": "Twistzz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/MtlmsJNL2i-7kMiNcG5I8t.png?ixlib=java-2.1.0&w=400&s=a9c0718e152a595d660a763f5057a339",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.15",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.0%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "16.6%",
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
                        "statsLocation": "/stats/players/10394/twistzz?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 220000,
                    "playerData": {
                        "name": "ropz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/EE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/OYZih3h-_cJrZDFq5ButZP.png?ixlib=java-2.1.0&w=400&s=3edd66ad46b03465cc98d235a46297cf",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.15",
                            "tRating": "1.20",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "53.3%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "18.9%",
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
                        "statsLocation": "/stats/players/11816/ropz?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "broky",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LV.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uz_gYKYS-cjdlEJ-tpikrV.png?ixlib=java-2.1.0&w=400&s=61eea26e2076802840dacc42bf8fd4ea",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.24",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "32.1%",
                            "entryFragsPerRound": "8.2%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "17.5%",
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
                        "statsLocation": "/stats/players/18053/broky?startDate=2022-11-12&endDate=2023-05-12",
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
                    "cost": 176000,
                    "playerData": {
                        "name": "nitr0",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qjUR71O_V0VqiVBPlEecGc.png?ixlib=java-2.1.0&w=400&s=2432f16a71a761075404038b5c679ec7",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.96",
                            "tRating": "0.92",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.4%",
                            "entryFragsPerRound": "7.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "21.4%",
                            "multiKillRounds": "12.7%",
                            "dpr": "0.65"
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
                        "statsLocation": "/stats/players/7687/nitr0?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "NAF",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xqJ4nf0aCIE7ooM2G8LaMa.png?ixlib=java-2.1.0&w=400&s=3ff473729f38383683c87e738402585f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.13",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.5%",
                            "entryFragsPerRound": "6.8%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "23.1%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.59"
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
                        "statsLocation": "/stats/players/8520/naf?startDate=2022-11-12&endDate=2023-05-12",
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
                            "rating": "1.10",
                            "ctRating": "1.17",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.8%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "17.4%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.66"
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
                        "statsLocation": "/stats/players/8738/elige?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "oSee",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/v7m_0PPIhCAZzML3h7-USx.png?ixlib=java-2.1.0&w=400&s=2f17335a99a7cb33da58dce9478bffa0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.14",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.30",
                            "hsPercentage": "29.0%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "22.2%",
                            "multiKillRounds": "14.9%",
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
                        "statsLocation": "/stats/players/13249/osee?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "YEKINDAR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LV.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/VNBNNDhHu_YVgAonpsBLIm.png?ixlib=java-2.1.0&w=400&s=feff564c89a098a920d755b6f3576e38",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.14",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "57.8%",
                            "entryFragsPerRound": "16.7%",
                            "cluthesPerRound": "0.5%",
                            "supportRounds": "15.8%",
                            "multiKillRounds": "17.4%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/13915/yekindar?startDate=2022-11-12&endDate=2023-05-12",
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
        },
        {
            "players": [
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "sdy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2wldXzlfsYMBhkJgfWZS2c.png?ixlib=java-2.1.0&w=400&s=d4fc6480a1728ebd6ad57da9d37346de",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.16",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "47.1%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "17.2%",
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
                        "statsLocation": "/stats/players/12731/sdy?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 211000,
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
                            "entryFragsPerRound": "12.0%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "15.2%",
                            "multiKillRounds": "19.2%",
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
                        "statsLocation": "/stats/players/16885/woro2k?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "DemQQ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/X82JOzCmNJa38JUVkFIHRA.png?ixlib=java-2.1.0&w=400&s=33567f9bdd678e267dd7812fa4944c28",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.06",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "21.5%",
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
                        "statsLocation": "/stats/players/19733/demqq?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 211000,
                    "playerData": {
                        "name": "BOROS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/JO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8UCFXtQN6F8NjdxqcqZe6d.png?ixlib=java-2.1.0&w=400&s=adacc52ec63ca5d10fcf7786f3a12e32",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.14",
                            "tRating": "1.20",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "62.7%",
                            "entryFragsPerRound": "14.2%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "13.3%",
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
                        "statsLocation": "/stats/players/19763/boros?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "kRaSnaL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tqTf6mVhsr6hESsrdlTxma.png?ixlib=java-2.1.0&w=400&s=8b76c23dc1e5c8db82fe7602f20e55cf",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.05",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.2%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "16.1%",
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
                        "statsLocation": "/stats/players/20282/krasnal?startDate=2022-11-12&endDate=2023-05-12",
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
                    "cost": 190000,
                    "playerData": {
                        "name": "acoR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qtnobkNdNfChEHETZN_tIz.png?ixlib=java-2.1.0&w=400&s=6314338d056bbdf954f99e34248906ad",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.10",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "32.4%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.60"
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
                        "statsLocation": "/stats/players/10330/acor?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "iM",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/q5CZXJHs68uu-yyLpwZ6NS.png?ixlib=java-2.1.0&w=400&s=366ac8f6e56081f8a45b51311ce90fe2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.18",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "42.0%",
                            "entryFragsPerRound": "12.9%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.4%",
                            "multiKillRounds": "19.2%",
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
                        "statsLocation": "/stats/players/14759/im?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 167000,
                    "playerData": {
                        "name": "Keoz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SjJZJSZ2fEhPZzEwBqpIBq.png?ixlib=java-2.1.0&w=400&s=7c6c0af8bf625819f6f62db8b6199e4c",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.97",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "56.1%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "14.3%",
                            "dpr": "0.68"
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
                        "statsLocation": "/stats/players/15117/keoz?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "siuhy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/_RtGeNjjGzcXOe7cCPjhEY.png?ixlib=java-2.1.0&w=400&s=ba7cfcdecc9d21f5714724d881d189d2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.09",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "51.0%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "16.7%",
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
                        "statsLocation": "/stats/players/16820/siuhy?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 173000,
                    "playerData": {
                        "name": "isak",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PPLqW_IeUnHlkPgOCCKqUJ.png?ixlib=java-2.1.0&w=400&s=91a549eec5f824852a670054950468e7",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.00",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "44.7%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "13.3%",
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
                        "statsLocation": "/stats/players/17937/isak?startDate=2022-11-12&endDate=2023-05-12",
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
                    "cost": 201000,
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
                        "statsLocation": "/stats/players/5388/rallen?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 194000,
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
                        "statsLocation": "/stats/players/7996/cruc1al?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
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
                        "statsLocation": "/stats/players/13018/thomas?startDate=2022-11-12&endDate=2023-05-12",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "CYPHER",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2O8iemGgkX6tUOUzaZrRtc.png?ixlib=java-2.1.0&w=400&s=d4568a843a84deae87421c508b5a01b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.08",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.2%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.3%",
                            "multiKillRounds": "16.9%",
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
                        "statsLocation": "/stats/players/18571/cypher?startDate=2022-11-12&endDate=2023-05-12",
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
                        "statsLocation": "/stats/players/20358/volt?startDate=2022-11-12&endDate=2023-05-12",
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