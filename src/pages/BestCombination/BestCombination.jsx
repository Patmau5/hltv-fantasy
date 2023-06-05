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
                    "cost": 180000,
                    "playerData": {
                        "name": "apEX",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/vDksHfTWrFDEnn0l1SZs0Z.png?ixlib=java-2.1.0&w=400&s=a4bb4d87a77197f89550e2b0dbefcecc",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.94",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "43.1%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "12.4%",
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
                        "statsLocation": "/stats/players/7322/apex?startDate=2022-11-26&endDate=2023-05-26",
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
                            "rating": "1.03",
                            "ctRating": "1.05",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.9%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "21.3%",
                            "multiKillRounds": "13.9%",
                            "dpr": "0.62"
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
                        "statsLocation": "/stats/players/7398/dupreeh?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "Magisk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2YQBwCCs3DnkjuzdZAbpel.png?ixlib=java-2.1.0&w=400&s=7db9549eb0b68633dff0fde24ec09db5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.10",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.9%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "22.1%",
                            "multiKillRounds": "16.3%",
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
                        "statsLocation": "/stats/players/9032/magisk?startDate=2022-11-26&endDate=2023-05-26",
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
                            "rating": "1.33",
                            "ctRating": "1.39",
                            "tRating": "1.27",
                            "awpKillsPerRound": "0.26",
                            "hsPercentage": "42.8%",
                            "entryFragsPerRound": "13.9%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "21.6%",
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
                        "statsLocation": "/stats/players/11893/zywoo?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 218000,
                    "playerData": {
                        "name": "Spinx",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/g48HwD49Zckp1HwfSPs1ln.png?ixlib=java-2.1.0&w=400&s=e38bf6a0c1516d109127a14d528cba87",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.17",
                            "tRating": "1.18",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.9%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "19.1%",
                            "dpr": "0.61"
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
                        "statsLocation": "/stats/players/18221/spinx?startDate=2022-11-26&endDate=2023-05-26",
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
            "rank": 1
        },
        {
            "players": [
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "cadiaN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LPx5hvA81pdvJlvThrFUiY.png?ixlib=java-2.1.0&w=400&s=f8b245d912ed237ef6f23a4a7efc5290",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.14",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.30",
                            "hsPercentage": "29.3%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "21.0%",
                            "multiKillRounds": "14.2%",
                            "dpr": "0.59"
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
                        "statsLocation": "/stats/players/7964/cadian?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "stavn",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7-vEqTQE4CAAFsXSVapF8p.png?ixlib=java-2.1.0&w=400&s=6b3cb8cd2e5b5b51a3cd057887c9dac3",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.20",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "41.9%",
                            "entryFragsPerRound": "10.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.64"
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
                        "statsLocation": "/stats/players/10994/stavn?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "TeSeS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Ch1VId8enAzmbsiOZPvzds.png?ixlib=java-2.1.0&w=400&s=63cfeac2176a9af822ea9ba9abb6d555",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.11",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.0%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.65"
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
                        "statsLocation": "/stats/players/12018/teses?startDate=2022-11-26&endDate=2023-05-26",
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
                            "rating": "1.06",
                            "ctRating": "1.10",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.2%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.64"
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
                        "statsLocation": "/stats/players/14148/sjuush?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
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
                            "hsPercentage": "58.2%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "20.1%",
                            "multiKillRounds": "17.2%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/17956/jabbi?startDate=2022-11-26&endDate=2023-05-26",
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
            "rank": 2
        },
        {
            "players": [
                {
                    "cost": 171000,
                    "playerData": {
                        "name": "karrigan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HBq_UoWU_p_yC7jkxXD3Lp.png?ixlib=java-2.1.0&w=400&s=68522238b911e44997cad4e63d67398e",
                        "stats": {
                            "rating": "0.88",
                            "ctRating": "0.95",
                            "tRating": "0.81",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.0%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "11.1%",
                            "dpr": "0.71"
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
                        "statsLocation": "/stats/players/429/karrigan?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "rain",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/BcLwaUMx36y5OQHAVnLmhR.png?ixlib=java-2.1.0&w=400&s=93fd97d57d89f0c530b299405da9aaa5",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.15",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "55.6%",
                            "entryFragsPerRound": "13.3%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "15.9%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/8183/rain?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "Twistzz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/MtlmsJNL2i-7kMiNcG5I8t.png?ixlib=java-2.1.0&w=400&s=a9c0718e152a595d660a763f5057a339",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.14",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.2%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "20.2%",
                            "multiKillRounds": "15.7%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/10394/twistzz?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 218000,
                    "playerData": {
                        "name": "ropz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/EE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/OYZih3h-_cJrZDFq5ButZP.png?ixlib=java-2.1.0&w=400&s=3edd66ad46b03465cc98d235a46297cf",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.16",
                            "tRating": "1.20",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "55.2%",
                            "entryFragsPerRound": "10.2%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "19.5%",
                            "multiKillRounds": "19.2%",
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
                        "statsLocation": "/stats/players/11816/ropz?startDate=2022-11-26&endDate=2023-05-26",
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
                            "ctRating": "1.22",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "33.1%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "18.2%",
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
                        "statsLocation": "/stats/players/18053/broky?startDate=2022-11-26&endDate=2023-05-26",
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
            "rank": 3
        },
        {
            "players": [
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "HObbit",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/KZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/wef-bKS0wTfwOWwVxhmINF.png?ixlib=java-2.1.0&w=400&s=d4d52fc0850983d7e1a90b72ba081788",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.16",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.4%",
                            "entryFragsPerRound": "13.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.5%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Cloud9",
                            "link": "/team/5752/cloud9",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8528
                        },
                        "statsLocation": "/stats/players/8528/hobbit?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 182000,
                    "playerData": {
                        "name": "buster",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/KZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/iHmReV66DHTx6rtQ-EXjMG.png?ixlib=java-2.1.0&w=400&s=ea3ed9f432f305601da26d9cdf5ea62e",
                        "stats": {
                            "rating": "0.97",
                            "ctRating": "0.98",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.2%",
                            "entryFragsPerRound": "6.4%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "24.1%",
                            "multiKillRounds": "12.7%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Cloud9",
                            "link": "/team/5752/cloud9",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11942
                        },
                        "statsLocation": "/stats/players/11942/buster?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 220000,
                    "playerData": {
                        "name": "Ax1Le",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JNG2MU0wL5AbyAioOs74oP.png?ixlib=java-2.1.0&w=400&s=dd1318a97169dcbcb3e04e3660243050",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.19",
                            "ctRating": "1.23",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "48.8%",
                            "entryFragsPerRound": "11.4%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "18.7%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Cloud9",
                            "link": "/team/5752/cloud9",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16555
                        },
                        "statsLocation": "/stats/players/16555/ax1le?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 232000,
                    "playerData": {
                        "name": "sh1ro",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Tbckd7KhHhZMtjk3b8kczG.png?ixlib=java-2.1.0&w=400&s=a938e7c660a5182db55b4f1afa69663b",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.28",
                            "ctRating": "1.30",
                            "tRating": "1.26",
                            "awpKillsPerRound": "0.41",
                            "hsPercentage": "30.6%",
                            "entryFragsPerRound": "10.1%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "19.9%",
                            "dpr": "0.54"
                        },
                        "team": {
                            "name": "Cloud9",
                            "link": "/team/5752/cloud9",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16920
                        },
                        "statsLocation": "/stats/players/16920/sh1ro?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "nafany",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/OpD5yOSKlcmjK_b5tjSdj3.png?ixlib=java-2.1.0&w=400&s=330e92aa83e286fc7895dd7fcc6e3adc",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.97",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "0.4%",
                            "supportRounds": "18.9%",
                            "multiKillRounds": "12.9%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "Cloud9",
                            "link": "/team/5752/cloud9",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16921
                        },
                        "statsLocation": "/stats/players/16921/nafany?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Cloud9",
                "link": "/team/5752/cloud9",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c"
            },
            "rank": 6
        },
        {
            "players": [
                {
                    "cost": 220000,
                    "playerData": {
                        "name": "NiKo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ryEzkk38b_L-5BdkIG23c3.png?ixlib=java-2.1.0&w=400&s=62e42f9862a878e552236e0df10e7249",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.20",
                            "ctRating": "1.20",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.6%",
                            "entryFragsPerRound": "14.5%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "19.7%",
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
                        "statsLocation": "/stats/players/3741/niko?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "huNter-",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JLe3rUhWZC-HbEhh3PhQvz.png?ixlib=java-2.1.0&w=400&s=279647d28d5b2006cba10866faeab816",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.12",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.0%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "16.7%",
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
                        "statsLocation": "/stats/players/3972/hunter?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "jks",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/E0oAsznGp67mqgNjGGOZia.png?ixlib=java-2.1.0&w=400&s=850c7701777957dbf957d845b7fd9f09",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.13",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "55.1%",
                            "entryFragsPerRound": "7.4%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "23.6%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.58"
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
                        "statsLocation": "/stats/players/4679/jks?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 169000,
                    "playerData": {
                        "name": "HooXi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ZD7YDVWTDqZ5Bf8hEagZMi.png?ixlib=java-2.1.0&w=400&s=f4af7f7c4f2593c024c0dcbb3c9f1168",
                        "stats": {
                            "rating": "0.87",
                            "ctRating": "0.86",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.0%",
                            "entryFragsPerRound": "7.7%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "10.8%",
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
                        "statsLocation": "/stats/players/10096/hooxi?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 222000,
                    "playerData": {
                        "name": "m0NESY",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/RU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/aGl4zm62SBHK44DuGvb_91.png?ixlib=java-2.1.0&w=400&s=1393e027bbd92e38bba88f77e8be1ef9",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.21",
                            "ctRating": "1.25",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.42",
                            "hsPercentage": "34.6%",
                            "entryFragsPerRound": "13.1%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "19.2%",
                            "dpr": "0.56"
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
                        "statsLocation": "/stats/players/19230/m0nesy?startDate=2022-11-26&endDate=2023-05-26",
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
            "rank": 5
        },
        {
            "players": [
                {
                    "cost": 167000,
                    "playerData": {
                        "name": "JT",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/gTE76DXI0j94vh6GQCAe4E.png?ixlib=java-2.1.0&w=400&s=f7c9654ad89f31faedc7d99944e2e92f",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.93",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.8%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "13.1%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "Complexity",
                            "link": "/team/5005/complexity",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11630
                        },
                        "statsLocation": "/stats/players/11630/jt?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 177000,
                    "playerData": {
                        "name": "floppy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/c2GqeZr6IKmAl0uaV55GN9.png?ixlib=java-2.1.0&w=400&s=893f25b0ba5d47651d78cf54fc111e64",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "0.95",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.3%",
                            "entryFragsPerRound": "6.8%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "23.9%",
                            "multiKillRounds": "14.1%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Complexity",
                            "link": "/team/5005/complexity",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12713
                        },
                        "statsLocation": "/stats/players/12713/floppy?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "Sonic",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ZA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/YrlM5FoCrwjJlRIpiITCXV.png?ixlib=java-2.1.0&w=400&s=9b45b6f56591162de89cd410912e277d",
                        "playerLevel": "SILVER",
                        "stats": {},
                        "team": {
                            "name": "Complexity",
                            "link": "/team/5005/complexity",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12840
                        },
                        "statsLocation": "/stats/players/8711/sonic?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "Grim",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dpKrUiYvetALnNMROZ2AaR.png?ixlib=java-2.1.0&w=400&s=fa422c09fbe8ea574d1b40cd441029d6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.12",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "16.1%",
                            "multiKillRounds": "18.8%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Complexity",
                            "link": "/team/5005/complexity",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13578
                        },
                        "statsLocation": "/stats/players/13578/grim?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 181000,
                    "playerData": {
                        "name": "FaNg",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nfQTxaPem3_-L59KKwmYIg.png?ixlib=java-2.1.0&w=400&s=8ab7548450b577649f82cda168a82d53",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.05",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "55.9%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.2%",
                            "multiKillRounds": "15.2%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Complexity",
                            "link": "/team/5005/complexity",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17372
                        },
                        "statsLocation": "/stats/players/17372/fang?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Complexity",
                "link": "/team/5005/complexity",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/R0CzydpyX02BnkAYhy3I89.svg?ixlib=java-2.1.0&s=8c5833d6069ef924fdbb2e220fefea00",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459"
            },
            "rank": 25
        },
        {
            "players": [
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "gla1ve",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/wF70Mh7ZoZxECIUMF6kz2h.png?ixlib=java-2.1.0&w=400&s=2d5e6c3e218dc0becd7f1dd6d60a5a88",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "1.02",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.0%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "13.9%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Astralis",
                            "link": "/team/6665/astralis",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7412
                        },
                        "statsLocation": "/stats/players/7412/gla1ve?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 222000,
                    "playerData": {
                        "name": "device",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/7ekOWJWIHJwwQARzAlKGqL.png?ixlib=java-2.1.0&w=400&s=c9dad87cfe515731c0a166c843e288be",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.24",
                            "ctRating": "1.29",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.36",
                            "hsPercentage": "34.1%",
                            "entryFragsPerRound": "15.4%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "16.2%",
                            "multiKillRounds": "19.4%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Astralis",
                            "link": "/team/6665/astralis",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7592
                        },
                        "statsLocation": "/stats/players/7592/device?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "blameF",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2E6cPM2mB5MHoAXrP9fMlr.png?ixlib=java-2.1.0&w=400&s=e15f3d4349c719e0b63ce0d17bf1fe93",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.26",
                            "ctRating": "1.31",
                            "tRating": "1.22",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "37.8%",
                            "entryFragsPerRound": "13.8%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "19.1%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "Astralis",
                            "link": "/team/6665/astralis",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15165
                        },
                        "statsLocation": "/stats/players/15165/blamef?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Altekz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/oJ8J14zbYHmE1LLgS7Y_M_.png?ixlib=java-2.1.0&w=400&s=a1ac264c8d3e4727130a6ad97d6b8615",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.04",
                            "tRating": "1.20",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "20.1%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Astralis",
                            "link": "/team/6665/astralis",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16705
                        },
                        "statsLocation": "/stats/players/16705/altekz?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "Buzz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/gcLri2WLx-l_mvZsZQE_mV.png?ixlib=java-2.1.0&w=400&s=cc2d8d42841cae15f6a315c1dd2a80b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.04",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.5%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "16.2%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Astralis",
                            "link": "/team/6665/astralis",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20941
                        },
                        "statsLocation": "/stats/players/20941/buzz?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Astralis",
                "link": "/team/6665/astralis",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067"
            },
            "rank": 17
        },
        {
            "players": [
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "FalleN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/XVxima19pmAiFmDuaCX9yj.png?ixlib=java-2.1.0&w=400&s=e3ca062482376d91eb5837090009d68d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.12",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.41",
                            "hsPercentage": "28.1%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "21.9%",
                            "multiKillRounds": "17.0%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "Imperial",
                            "link": "/team/9455/imperial",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
                        },
                        "fantasyPlayerId": {
                            "playerId": 2023
                        },
                        "statsLocation": "/stats/players/2023/fallen?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "boltz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/r3y-G1gAgld0Sq5PawpQUD.png?ixlib=java-2.1.0&w=400&s=643aca268b38aa993af05d477b5eb82f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.13",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "36.8%",
                            "entryFragsPerRound": "9.3%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "22.5%",
                            "multiKillRounds": "16.6%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "Imperial",
                            "link": "/team/9455/imperial",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8568
                        },
                        "statsLocation": "/stats/players/8568/boltz?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "chelo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/9ViFkzVOxBYZEzJH_4mNre.png?ixlib=java-2.1.0&w=400&s=2411a65541d92d16e1a9a46e830398ea",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.07",
                            "tRating": "1.18",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "58.5%",
                            "entryFragsPerRound": "13.2%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "18.5%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Imperial",
                            "link": "/team/9455/imperial",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10566
                        },
                        "statsLocation": "/stats/players/10566/chelo?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "VINI",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qVM7Dg9tPjTo1iV6kF5bE0.png?ixlib=java-2.1.0&w=400&s=a57d248aec2e63ff149eb1a363028d49",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.06",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.9%",
                            "entryFragsPerRound": "10.8%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "23.9%",
                            "multiKillRounds": "15.2%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "Imperial",
                            "link": "/team/9455/imperial",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12822
                        },
                        "statsLocation": "/stats/players/12822/vini?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "JOTA",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/dVZUV04EYUjhbmXMc49avl.png?ixlib=java-2.1.0&w=400&s=5da12f00caf369ef2610c3b9f44fea9f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.21",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "43.5%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "22.0%",
                            "multiKillRounds": "16.3%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "Imperial",
                            "link": "/team/9455/imperial",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17861
                        },
                        "statsLocation": "/stats/players/17861/jota?startDate=2022-11-26&endDate=2023-05-26",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Imperial",
                "link": "/team/9455/imperial",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png?ixlib=java-2.1.0&w=50&s=ecc0a33173ed783477ab8be4cfa6e215"
            },
            "rank": 33
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