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
                    "cost": 215000,
                    "playerData": {
                        "name": "cadiaN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/LPx5hvA81pdvJlvThrFUiY.png?ixlib=java-2.1.0&w=400&s=f8b245d912ed237ef6f23a4a7efc5290",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.14",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.35",
                            "hsPercentage": "27.9%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "2.2%",
                            "supportRounds": "22.0%",
                            "multiKillRounds": "16.3%",
                            "dpr": "0.55"
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
                        "statsLocation": "/stats/players/7964/cadian?startDate=2023-05-31&endDate=2023-08-31",
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
                            "rating": "1.17",
                            "ctRating": "1.26",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "46.2%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.0%",
                            "multiKillRounds": "19.0%",
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
                        "statsLocation": "/stats/players/10994/stavn?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "TeSeS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Ch1VId8enAzmbsiOZPvzds.png?ixlib=java-2.1.0&w=400&s=63cfeac2176a9af822ea9ba9abb6d555",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.10",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.0%",
                            "entryFragsPerRound": "10.3%",
                            "cluthesPerRound": "0.4%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "16.2%",
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
                        "statsLocation": "/stats/players/12018/teses?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "sjuush",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/H4-F8tiCLLNLBg7PQ83pKY.png?ixlib=java-2.1.0&w=400&s=8d7f620fe1539ab79289c5a983a71644",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.07",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.2%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "15.2%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/14148/sjuush?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 205000,
                    "playerData": {
                        "name": "jabbi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/nerctHcVDo6Jodpj7ww-PC.png?ixlib=java-2.1.0&w=400&s=328d76b65b590f8d65eb74f364913974",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.05",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.8%",
                            "entryFragsPerRound": "12.9%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.65"
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
                        "statsLocation": "/stats/players/17956/jabbi?startDate=2023-05-31&endDate=2023-08-31",
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
                    "cost": 191000,
                    "playerData": {
                        "name": "Snappi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/KRtd5ZnIds7gRZFqBQgNg2.png?ixlib=java-2.1.0&w=400&s=dcfd2624386d6ae6ed1c1dd10258b9be",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.93",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.0%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "13.5%",
                            "dpr": "0.67"
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
                        "statsLocation": "/stats/players/922/snappi?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "NertZ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/AoTEcWzdaTAmnO_yEMSe4K.png?ixlib=java-2.1.0&w=400&s=c06df4fed4aa6ada791e426ca80abdc0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.10",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.1%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/9436/nertz?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "Maden",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ME.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tfjQy7-PZ1ye3ATRh2_bzZ.png?ixlib=java-2.1.0&w=400&s=bfea6658d58f43218eb13690db38ef11",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "1.01",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.3%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "15.3%",
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
                        "statsLocation": "/stats/players/11777/maden?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "dycha",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/FKge2mSxps3yqa1NfhkqHB.png?ixlib=java-2.1.0&w=400&s=71931eb068be1dfdce109a6b00ed86eb",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.09",
                            "tRating": "0.95",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.6%",
                            "entryFragsPerRound": "9.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.65"
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
                        "statsLocation": "/stats/players/16080/dycha?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 222000,
                    "playerData": {
                        "name": "SunPayus",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/5cAiZ9Ttk6pwtp7mstX9Ni.png?ixlib=java-2.1.0&w=400&s=05848ba216aec41c9ff67b9275c5bf65",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.25",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.39",
                            "hsPercentage": "26.4%",
                            "entryFragsPerRound": "13.2%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "18.4%",
                            "dpr": "0.58"
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
                        "statsLocation": "/stats/players/19164/sunpayus?startDate=2023-05-31&endDate=2023-08-31",
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
                    "cost": 229000,
                    "playerData": {
                        "name": "frozen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/HBPp9kcyYSrqPEXgCUjgzm.png?ixlib=java-2.1.0&w=400&s=ac283bdfcc1befc0b2c1218e8f69aa3b",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.28",
                            "ctRating": "1.43",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "51.2%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "20.7%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9960
                        },
                        "statsLocation": "/stats/players/9960/frozen?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 180000,
                    "playerData": {
                        "name": "siuhy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/L5VdlAHF0ihBn2HyZtkji1.png?ixlib=java-2.1.0&w=400&s=c1a8927c0ccba70dd796359e2ef66ad0",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "1.04",
                            "tRating": "0.76",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.8%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "11.6%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16820
                        },
                        "statsLocation": "/stats/players/16820/siuhy?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "torzsi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/HU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/j4T6CAChfHuPD303TkY6bJ.png?ixlib=java-2.1.0&w=400&s=8a139e1f92ceb612287df9b3740176f5",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.24",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.41",
                            "hsPercentage": "34.1%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "21.5%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.55"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18072
                        },
                        "statsLocation": "/stats/players/18072/torzsi?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "Jimpphat",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/VqB0egkyFbg7J5VpGy5mwA.png?ixlib=java-2.1.0&w=400&s=0a1199cc585d4af409db19705e68a3d6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.10",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "49.7%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "23.3%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18850
                        },
                        "statsLocation": "/stats/players/18850/jimpphat?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "xertioN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/ukW2IrnckoVVGQhr8I9h4x.png?ixlib=java-2.1.0&w=400&s=7757aa310718304275253a6f6743028c",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.02",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.3%",
                            "entryFragsPerRound": "14.0%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20312
                        },
                        "statsLocation": "/stats/players/20312/xertion?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "MOUZ",
                "link": "/team/4494/mouz",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
            },
            "rank": 12
        },
        {
            "players": [
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "sdy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/3M3mtgbaruCDFGpJ2ErIw3.png?ixlib=java-2.1.0&w=400&s=4399b71b816da85a806515f984557e83",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.09",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "44.2%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.0%",
                            "multiKillRounds": "16.9%",
                            "dpr": "0.64"
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
                        "statsLocation": "/stats/players/12731/sdy?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "br0",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/FU9Jy-z5lW2erdZ-A-O-qs.png?ixlib=java-2.1.0&w=400&s=743f88175a33ecd1e490e5e65deb43d7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.05",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "57.9%",
                            "entryFragsPerRound": "7.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.6%",
                            "multiKillRounds": "15.8%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Monte",
                            "link": "/team/11811/monte",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=50&s=7334ef0dd24ba5349b404dfd0e8c6148"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16717
                        },
                        "statsLocation": "/stats/players/16717/br0?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "Woro2k",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/vG5OTNybu9n2pQexqyxtbE.png?ixlib=java-2.1.0&w=400&s=8b52d89d3180aa8d466ae522e1d34a4a",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.14",
                            "tRating": "1.18",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "30.5%",
                            "entryFragsPerRound": "13.1%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "15.0%",
                            "multiKillRounds": "19.0%",
                            "dpr": "0.64"
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
                        "statsLocation": "/stats/players/16885/woro2k?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "DemQQ",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RzNzI7myPYWBeZNIMnHB4Q.png?ixlib=java-2.1.0&w=400&s=673e74e6cd5407c43e5bcf9987b1ce2f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.09",
                            "ctRating": "1.08",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "10.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.64"
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
                        "statsLocation": "/stats/players/19733/demqq?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "kRaSnaL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/NjbiKjv32TDCiiPk6sUvAH.png?ixlib=java-2.1.0&w=400&s=8138733483032dc4902428e455b02c2d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "1.08",
                            "tRating": "0.89",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.3%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.8%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.70"
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
                        "statsLocation": "/stats/players/20282/krasnal?startDate=2023-05-31&endDate=2023-08-31",
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
            "rank": 14
        },
        {
            "players": [
                {
                    "cost": 188000,
                    "playerData": {
                        "name": "tabseN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/70nLpIlCd_Vi4tY-eJTMrz.png?ixlib=java-2.1.0&w=400&s=71e4251f7d748a870736bceaa5e3fe54",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.05",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.7%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "16.4%",
                            "multiKillRounds": "15.6%",
                            "dpr": "0.71"
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
                        "statsLocation": "/stats/players/5794/tabsen?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "mantuu",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xZ2gPv0sn7N82mHqGk_3ju.png?ixlib=java-2.1.0&w=400&s=0b774b1e326f2fe5655f2d7c7d05e5da",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.13",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.42",
                            "hsPercentage": "25.0%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "19.3%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 10981
                        },
                        "statsLocation": "/stats/players/10981/mantuu?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 185000,
                    "playerData": {
                        "name": "prosus",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/b8lu3yLl46qWLtOrGsqLL_.png?ixlib=java-2.1.0&w=400&s=ced10bb44f8a49f68941bfe20d808eab",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "0.99",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "60.2%",
                            "entryFragsPerRound": "11.4%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "17.7%",
                            "multiKillRounds": "14.4%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19284
                        },
                        "statsLocation": "/stats/players/19284/prosus?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "Krimbo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/0JnjwW0RYccry9xElNqQsn.png?ixlib=java-2.1.0&w=400&s=e06a694f38db5fdea1d73794bd57827a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.11",
                            "tRating": "1.21",
                            "awpKillsPerRound": "0.04",
                            "hsPercentage": "49.5%",
                            "entryFragsPerRound": "9.1%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "17.5%",
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
                        "statsLocation": "/stats/players/19899/krimbo?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "s1n",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/bixHt3_O7ZN9Mxfx2Im9Ss.png?ixlib=java-2.1.0&w=400&s=4c4aa88932c7d42a5457d2a3c181673d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.07",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.9%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "21.0%",
                            "multiKillRounds": "16.3%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "BIG",
                            "link": "/team/7532/big",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/OgMRQA35hopXA8kDwMFHIY.svg?ixlib=java-2.1.0&s=ec7bc44165c7acf4224a22a1338ab7d7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/yQB6cm3KZ_BcyrgppBQMjc.svg?ixlib=java-2.1.0&s=06825290bfb61c9f8467f5c323f51974"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20104
                        },
                        "statsLocation": "/stats/players/20104/s1n?startDate=2023-05-31&endDate=2023-08-31",
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
            "rank": 21
        },
        {
            "players": [
                {
                    "cost": 192000,
                    "playerData": {
                        "name": "autimatic",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Fhmim9gDJbFCkQ7LpT1jnA.png?ixlib=java-2.1.0&w=400&s=400953b9353dc2ea1b0024e632a1a1e2",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.22",
                            "tRating": "0.89",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.6%",
                            "entryFragsPerRound": "12.6%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "17.1%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "Evil Geniuses",
                            "link": "/team/10399/evil-geniuses",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8735
                        },
                        "statsLocation": "/stats/players/8735/autimatic?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "junior",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/BkBenOWBqQDxvRHqUVKOAx.png?ixlib=java-2.1.0&w=400&s=f651de4bb749ec376c1097a020990efd",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.27",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.47",
                            "hsPercentage": "26.9%",
                            "entryFragsPerRound": "12.7%",
                            "cluthesPerRound": "2.0%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "18.2%",
                            "dpr": "0.57"
                        },
                        "team": {
                            "name": "Evil Geniuses",
                            "link": "/team/10399/evil-geniuses",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14494
                        },
                        "statsLocation": "/stats/players/14494/junior?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 175000,
                    "playerData": {
                        "name": "Walco",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/1diR2Tg_DdxB0sInnBeOk6.png?ixlib=java-2.1.0&w=400&s=f596b25f0fa5536f02a3088487020170",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.97",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "56.5%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.8%",
                            "multiKillRounds": "14.2%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "Evil Geniuses",
                            "link": "/team/10399/evil-geniuses",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17929
                        },
                        "statsLocation": "/stats/players/17929/walco?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "HexT",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/VKX3GdNudQTFKzpA6v_Ckw.png?ixlib=java-2.1.0&w=400&s=a167feeb5e17bf1a88fed2626b3e9b80",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.10",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "46.6%",
                            "entryFragsPerRound": "9.4%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "17.5%",
                            "multiKillRounds": "16.3%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Evil Geniuses",
                            "link": "/team/10399/evil-geniuses",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18838
                        },
                        "statsLocation": "/stats/players/18838/hext?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 176000,
                    "playerData": {
                        "name": "Jeorge",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/US.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/5R9mp6jgPnZ43ehbMq6tqF.png?ixlib=java-2.1.0&w=400&s=2b5545728b1bdd13218cb6b567cef1d4",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.99",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.1%",
                            "entryFragsPerRound": "7.1%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "14.3%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "Evil Geniuses",
                            "link": "/team/10399/evil-geniuses",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20333
                        },
                        "statsLocation": "/stats/players/20333/jeorge?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Evil Geniuses",
                "link": "/team/10399/evil-geniuses",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?ixlib=java-2.1.0&w=50&s=41a619052f610fec335d17028d1f32af",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/p6OXTVsTFEhOcbTJ8gmuP6.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=50eee4fe4fa84d1e0159c0270c67ae26"
            },
            "rank": 42
        },
        {
            "players": [
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "exit",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PnYPOESWvU-zgz31PUB8zS.png?ixlib=java-2.1.0&w=400&s=a5821c491d2c1d9d8f4cf04bbb766a21",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.02",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.0%",
                            "entryFragsPerRound": "7.3%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "24.6%",
                            "multiKillRounds": "12.9%",
                            "dpr": "0.60"
                        },
                        "team": {
                            "name": "MIBR",
                            "link": "/team/9215/mibr",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11154
                        },
                        "statsLocation": "/stats/players/11154/exit?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "saffee",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/Q1xLCZVFfopHUYciBQV5KQ.png?ixlib=java-2.1.0&w=400&s=c4fe19f5d2f380b31ccfaeca6090d56f",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.22",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.43",
                            "hsPercentage": "27.1%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "19.4%",
                            "multiKillRounds": "18.7%",
                            "dpr": "0.59"
                        },
                        "team": {
                            "name": "MIBR",
                            "link": "/team/9215/mibr",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18835
                        },
                        "statsLocation": "/stats/players/18835/saffee?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 181000,
                    "playerData": {
                        "name": "drop",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/g_VQX8ODGxfXQpi8T3Yh2n.png?ixlib=java-2.1.0&w=400&s=e070508b32ce086227d8d1f57352e866",
                        "stats": {
                            "rating": "1.00",
                            "ctRating": "0.98",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.3%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "21.6%",
                            "multiKillRounds": "13.6%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "MIBR",
                            "link": "/team/9215/mibr",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19750
                        },
                        "statsLocation": "/stats/players/19750/drop?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "brnz4n",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/n94k7DdLY8U5yPSPRTjLAv.png?ixlib=java-2.1.0&w=400&s=bf6006be38b8f265bc99e39882a4605f",
                        "stats": {
                            "rating": "0.97",
                            "ctRating": "1.02",
                            "tRating": "0.91",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "58.8%",
                            "entryFragsPerRound": "12.9%",
                            "cluthesPerRound": "0.5%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "16.4%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "MIBR",
                            "link": "/team/9215/mibr",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20987
                        },
                        "statsLocation": "/stats/players/20987/brnz4n?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 186000,
                    "playerData": {
                        "name": "insani",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BR.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/_wMRzlzJi2WclMge2OoEah.png?ixlib=java-2.1.0&w=400&s=40fd658cc419cd0419696b08fb8c56c0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.02",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.6%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "0.2%",
                            "supportRounds": "14.8%",
                            "multiKillRounds": "16.2%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "MIBR",
                            "link": "/team/9215/mibr",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
                        },
                        "fantasyPlayerId": {
                            "playerId": 21037
                        },
                        "statsLocation": "/stats/players/21037/insani?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "MIBR",
                "link": "/team/9215/mibr",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/m_JQ624LNFHWiUY-25uuaE.png?ixlib=java-2.1.0&w=50&s=80a1e479dd1b15b974d3e2d5588763af"
            },
            "rank": 45
        },
        {
            "players": [
                {
                    "cost": 179000,
                    "playerData": {
                        "name": "chelleos",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NZ.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "stats": {
                            "rating": "1.10",
                            "ctRating": "1.13",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.34",
                            "hsPercentage": "30.8%",
                            "entryFragsPerRound": "14.2%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "18.0%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "Rooster",
                            "link": "/team/9881/rooster",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 12877
                        },
                        "statsLocation": "/stats/players/12877/chelleos?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 165000,
                    "playerData": {
                        "name": "ADK",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "stats": {
                            "rating": "0.80",
                            "ctRating": "0.89",
                            "tRating": "0.70",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "37.8%",
                            "entryFragsPerRound": "4.3%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "8.2%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Rooster",
                            "link": "/team/9881/rooster",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17390
                        },
                        "statsLocation": "/stats/players/17390/adk?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 191000,
                    "playerData": {
                        "name": "nettik",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NZ.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.18",
                            "ctRating": "1.12",
                            "tRating": "1.26",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "57.2%",
                            "entryFragsPerRound": "12.0%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "17.8%",
                            "multiKillRounds": "20.5%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "Rooster",
                            "link": "/team/9881/rooster",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18214
                        },
                        "statsLocation": "/stats/players/18214/nettik?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 189000,
                    "playerData": {
                        "name": "asap",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.17",
                            "ctRating": "1.09",
                            "tRating": "1.26",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "53.9%",
                            "entryFragsPerRound": "12.6%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "17.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Rooster",
                            "link": "/team/9881/rooster",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18545
                        },
                        "statsLocation": "/stats/players/18545/asap?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                },
                {
                    "cost": 187000,
                    "playerData": {
                        "name": "TjP",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://www.hltv.org/img/static/player/player_silhouette.png",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.13",
                            "tRating": "1.19",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.9%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "17.6%",
                            "multiKillRounds": "19.4%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Rooster",
                            "link": "/team/9881/rooster",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20527
                        },
                        "statsLocation": "/stats/players/20527/tjp?startDate=2023-05-31&endDate=2023-08-31",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Rooster",
                "link": "/team/9881/rooster",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/LPjU8AAPrha2zdFvetTTMp.png?ixlib=java-2.1.0&w=50&s=e3db90a303823ddd00ad39fa7b963a8d"
            },
            "rank": 104
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