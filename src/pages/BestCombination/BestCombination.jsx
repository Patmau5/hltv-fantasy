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
                    "cost": 195000,
                    "playerData": {
                        "name": "dexter",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/AU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/uR7pvoYSI0mZDpJbfkyllq.png?ixlib=java-2.1.0&w=400&s=ff3b550aa628ec590fb5475e466472d4",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.89",
                            "ctRating": "0.92",
                            "tRating": "0.86",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.2%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "17.9%",
                            "multiKillRounds": "13.3%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 9115
                        },
                        "statsLocation": "/stats/players/9115/dexter?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 239000,
                    "playerData": {
                        "name": "frozen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/00kf3AiLPaswr8RKwsCZ7u.png?ixlib=java-2.1.0&w=400&s=c7248d2505e2b8ace0b1e0ce8f8fdb87",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.22",
                            "ctRating": "1.30",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "47.5%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "22.3%",
                            "multiKillRounds": "19.6%",
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
                        "statsLocation": "/stats/players/9960/frozen?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "JDC",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/NEJjjwIkqFuxPzSUSsfmCJ.png?ixlib=java-2.1.0&w=400&s=5a41dfe27ec30c6f8a562a8daaa3ba5a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "0.99",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.3%",
                            "entryFragsPerRound": "6.8%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "22.4%",
                            "multiKillRounds": "15.1%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "MOUZ",
                            "link": "/team/4494/mouz",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=50&s=051cbffad4d1c25468d83abee6f4fe23"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14929
                        },
                        "statsLocation": "/stats/players/14929/jdc?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 216000,
                    "playerData": {
                        "name": "torzsi",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/HU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6UkS2jMd7V7atVdaOQ_Az6.png?ixlib=java-2.1.0&w=400&s=5dd11a5fd283978b8376bc3009b7215c",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.14",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "28.6%",
                            "entryFragsPerRound": "11.2%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.6%",
                            "multiKillRounds": "16.2%",
                            "dpr": "0.58"
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
                        "statsLocation": "/stats/players/18072/torzsi?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 226000,
                    "playerData": {
                        "name": "xertioN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RNCWFqU_0FSsV8_S3KQkTU.png?ixlib=java-2.1.0&w=400&s=98928ef9fa2d25b1687c29247b0c7aa1",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.12",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.9%",
                            "entryFragsPerRound": "14.2%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "16.1%",
                            "multiKillRounds": "18.3%",
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
                        "statsLocation": "/stats/players/20312/xertion?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 10
        },
        {
            "players": [
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "sdy",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2wldXzlfsYMBhkJgfWZS2c.png?ixlib=java-2.1.0&w=400&s=d4fc6480a1728ebd6ad57da9d37346de",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.15",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "47.0%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "17.0%",
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
                        "statsLocation": "/stats/players/12731/sdy?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 219000,
                    "playerData": {
                        "name": "Woro2k",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/UA.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PV3jy5dkCmEbQ-c7JUGDo7.png?ixlib=java-2.1.0&w=400&s=3408d6915ba97548f7b6a8249bcec44c",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.16",
                            "tRating": "1.16",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "32.9%",
                            "entryFragsPerRound": "12.0%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "15.2%",
                            "multiKillRounds": "18.8%",
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
                        "statsLocation": "/stats/players/16885/woro2k?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
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
                            "hsPercentage": "52.6%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "21.2%",
                            "multiKillRounds": "14.4%",
                            "dpr": "0.63"
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
                        "statsLocation": "/stats/players/19733/demqq?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 218000,
                    "playerData": {
                        "name": "BOROS",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/JO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8UCFXtQN6F8NjdxqcqZe6d.png?ixlib=java-2.1.0&w=400&s=adacc52ec63ca5d10fcf7786f3a12e32",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.14",
                            "tRating": "1.18",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "62.4%",
                            "entryFragsPerRound": "14.3%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "13.1%",
                            "multiKillRounds": "20.6%",
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
                        "statsLocation": "/stats/players/19763/boros?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "kRaSnaL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tqTf6mVhsr6hESsrdlTxma.png?ixlib=java-2.1.0&w=400&s=8b76c23dc1e5c8db82fe7602f20e55cf",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.04",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.5%",
                            "entryFragsPerRound": "8.6%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "16.2%",
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
                        "statsLocation": "/stats/players/20282/krasnal?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 23
        },
        {
            "players": [
                {
                    "cost": 209000,
                    "playerData": {
                        "name": "alex",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/V9YQYgZz3lYnosllZWiSFq.png?ixlib=java-2.1.0&w=400&s=14c65846467c6700ee1867e2fea600ef",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.08",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "45.6%",
                            "entryFragsPerRound": "10.5%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "19.7%",
                            "multiKillRounds": "16.4%",
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
                        "statsLocation": "/stats/players/8371/alex?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 200000,
                    "playerData": {
                        "name": "mopoz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/M0CdxbKd4em_XDouWMq8F9.png?ixlib=java-2.1.0&w=400&s=6383d0a3de377a91d5f44a31df4fb5d8",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.01",
                            "ctRating": "0.98",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.2%",
                            "entryFragsPerRound": "10.6%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "18.5%",
                            "multiKillRounds": "15.5%",
                            "dpr": "0.68"
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
                        "statsLocation": "/stats/players/9254/mopoz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "sausol",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/zRyw6ODx7urLaaPbaOAL9S.png?ixlib=java-2.1.0&w=400&s=3e172a946d3f67e414c94332db69e38e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.99",
                            "ctRating": "0.96",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.5%",
                            "entryFragsPerRound": "7.5%",
                            "cluthesPerRound": "0.6%",
                            "supportRounds": "20.1%",
                            "multiKillRounds": "14.8%",
                            "dpr": "0.66"
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
                        "statsLocation": "/stats/players/18749/sausol?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "dav1g",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/zK52OTf380On6fvznVJej7.png?ixlib=java-2.1.0&w=400&s=918d17d3ca195c3c76d3a35f766c1afb",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.99",
                            "tRating": "0.92",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.8%",
                            "entryFragsPerRound": "8.4%",
                            "cluthesPerRound": "0.7%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "13.7%",
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
                        "statsLocation": "/stats/players/19509/dav1g?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 215000,
                    "playerData": {
                        "name": "Martinez",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/ES.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JgrGmaOMh-4Cw1KKi_Ckp6.png?ixlib=java-2.1.0&w=400&s=ce9d94437d47b5d4537270590cb2ab93",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.16",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.43",
                            "hsPercentage": "27.7%",
                            "entryFragsPerRound": "13.2%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "20.6%",
                            "multiKillRounds": "16.1%",
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
                        "statsLocation": "/stats/players/21239/martinez?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 24
        },
        {
            "players": [
                {
                    "cost": 190000,
                    "playerData": {
                        "name": "STYKO",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/JuiFVsfRdoTqfka0ucTesa.png?ixlib=java-2.1.0&w=400&s=be7e72dd64a2714616e98a0d40e4d319",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "0.98",
                            "ctRating": "0.99",
                            "tRating": "0.97",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "58.2%",
                            "entryFragsPerRound": "8.1%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "20.5%",
                            "multiKillRounds": "14.2%",
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
                        "statsLocation": "/stats/players/6904/styko?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "jkaem",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/NO.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/cGokoxzE67Aq3hYZP6CEb0.png?ixlib=java-2.1.0&w=400&s=6d593a5e8e684e4afe3f3b112161b9db",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.12",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "51.4%",
                            "entryFragsPerRound": "13.8%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "14.5%",
                            "multiKillRounds": "18.3%",
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
                        "statsLocation": "/stats/players/8248/jkaem?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
                    "playerData": {
                        "name": "nawwk",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SFZ02-Zms8hzlm_qqwkiSG.png?ixlib=java-2.1.0&w=400&s=da3a33fbe2f319877e41c37a31e87d3c",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.17",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.32",
                            "hsPercentage": "34.3%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "2.2%",
                            "supportRounds": "21.1%",
                            "multiKillRounds": "17.6%",
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
                        "statsLocation": "/stats/players/13670/nawwk?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 217000,
                    "playerData": {
                        "name": "jL",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/LT.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8RHaSoJtue9_r0zEbxPnPb.png?ixlib=java-2.1.0&w=400&s=1a90f624e0df9e57f01a6b4accba2541",
                        "playerLevel": "GOLD",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.14",
                            "tRating": "1.14",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "54.4%",
                            "entryFragsPerRound": "11.5%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "15.5%",
                            "multiKillRounds": "18.9%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/19206/jl?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "kyxsan",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/MK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/FPOkipcC4FrK_I9qkyDAgX.png?ixlib=java-2.1.0&w=400&s=ca9592e909f3263da703dfe8e78123f7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.6%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "20.3%",
                            "multiKillRounds": "14.9%",
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
                        "statsLocation": "/stats/players/19677/kyxsan?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 33
        },
        {
            "players": [
                {
                    "cost": 213000,
                    "playerData": {
                        "name": "rallen",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/PL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/I1ABQFlv-1vKh0QfZqgJ2t.png?ixlib=java-2.1.0&w=400&s=a87f39842f0056664d21ced21c658e08",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.15",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "49.3%",
                            "entryFragsPerRound": "9.5%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.2%",
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
                        "statsLocation": "/stats/players/5388/rallen?startDate=2022-12-01&endDate=2023-06-01",
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
                            "rating": "1.08",
                            "ctRating": "1.11",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.34",
                            "hsPercentage": "27.8%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.7%",
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
                        "statsLocation": "/stats/players/7996/cruc1al?startDate=2022-12-01&endDate=2023-06-01",
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
                            "rating": "1.05",
                            "ctRating": "1.08",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "38.5%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "15.8%",
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
                        "statsLocation": "/stats/players/13018/thomas?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "CYPHER",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/2O8iemGgkX6tUOUzaZrRtc.png?ixlib=java-2.1.0&w=400&s=d4568a843a84deae87421c508b5a01b6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.05",
                            "tRating": "1.04",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.6%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "1.0%",
                            "supportRounds": "16.4%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.72"
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
                        "statsLocation": "/stats/players/18571/cypher?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "volt",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/GB.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/UWZQElkD5-inGTM72NGJXU.png?ixlib=java-2.1.0&w=400&s=763997cba47f7fe1c765ded00e2cd181",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.03",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "50.6%",
                            "entryFragsPerRound": "8.9%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "22.5%",
                            "multiKillRounds": "15.3%",
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
                        "statsLocation": "/stats/players/20358/volt?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 35
        },
        {
            "players": [
                {
                    "cost": 175000,
                    "playerData": {
                        "name": "niki1",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BG.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/3r3pR6DIegMWugYWbx32Ut.png?ixlib=java-2.1.0&w=400&s=bc3cf1d977430fd1dfbebb94f2a2ca4d",
                        "stats": {
                            "rating": "0.92",
                            "ctRating": "0.97",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.7%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "21.5%",
                            "multiKillRounds": "12.5%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "500",
                            "link": "/team/12000/500",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8917
                        },
                        "statsLocation": "/stats/players/8917/niki1?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "dennyslaw",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BG.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/In7gwaKIdb47roFko817T-.png?ixlib=java-2.1.0&w=400&s=99fe4e2299387dee0d81f41b4fd2a8b0",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.10",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.34",
                            "hsPercentage": "31.5%",
                            "entryFragsPerRound": "12.2%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.63"
                        },
                        "team": {
                            "name": "500",
                            "link": "/team/12000/500",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13466
                        },
                        "statsLocation": "/stats/players/13466/dennyslaw?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "Patrick",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BG.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/kpCh7FrO8Jtb8iqxWj4P5k.png?ixlib=java-2.1.0&w=400&s=8cc2dcc4412003faf691485094babcbb",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "0.95",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "48.2%",
                            "entryFragsPerRound": "8.0%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "20.5%",
                            "multiKillRounds": "13.6%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "500",
                            "link": "/team/12000/500",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 14380
                        },
                        "statsLocation": "/stats/players/14380/patrick?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 214000,
                    "playerData": {
                        "name": "REDSTAR",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BG.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tbI0b-MKmUayB7_mAvkn1k.png?ixlib=java-2.1.0&w=400&s=4f93f1c432bf57d8ca0110d9fab18de6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.16",
                            "ctRating": "1.19",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "49.9%",
                            "entryFragsPerRound": "11.7%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "500",
                            "link": "/team/12000/500",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15369
                        },
                        "statsLocation": "/stats/players/15369/redstar?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 212000,
                    "playerData": {
                        "name": "Rainwaker",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/BG.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/vkgKwJdDSphUHnto9vGmdd.png?ixlib=java-2.1.0&w=400&s=030edcd9f7aabcbf57c062e3c43609a6",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.19",
                            "tRating": "1.08",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "38.3%",
                            "entryFragsPerRound": "8.6%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "20.7%",
                            "multiKillRounds": "18.6%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "500",
                            "link": "/team/12000/500",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 17145
                        },
                        "statsLocation": "/stats/players/17145/rainwaker?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "500",
                "link": "/team/12000/500",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/7oM95kF4Z6kJ8wDAS32ioZ.svg?ixlib=java-2.1.0&s=f94f5e15672069ab1bed21566c0a50d8"
            },
            "rank": 42
        },
        {
            "players": [
                {
                    "cost": 201000,
                    "playerData": {
                        "name": "xseveN",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/IhoU14VnkCitZL1hqdA5di.png?ixlib=java-2.1.0&w=400&s=3ca255bb023843994d508cbbae52db1d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.08",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.8%",
                            "entryFragsPerRound": "9.3%",
                            "cluthesPerRound": "1.6%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "15.2%",
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
                        "statsLocation": "/stats/players/7248/xseven?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 165000,
                    "playerData": {
                        "name": "xartE",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6cGqh6lwRGfnbqdAdNMFqz.png?ixlib=java-2.1.0&w=400&s=bf649ed0fc5f3b418ff0210d33d5fecd",
                        "stats": {
                            "rating": "0.74",
                            "ctRating": "0.71",
                            "tRating": "0.77",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "42.3%",
                            "entryFragsPerRound": "5.6%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "7.8%",
                            "dpr": "0.72"
                        },
                        "team": {
                            "name": "HAVU",
                            "link": "/team/7865/havu",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/bGYa-QzoimP8JH5hcdXcu3.svg?ixlib=java-2.1.0&s=70ceee130e1571052313c6f74c078aa3"
                        },
                        "fantasyPlayerId": {
                            "playerId": 7537
                        },
                        "statsLocation": "/stats/players/7537/xarte?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 203000,
                    "playerData": {
                        "name": "ottoNd",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/4EEqR3ltF5kkPBvaGJKrrP.png?ixlib=java-2.1.0&w=400&s=6c76e06d9b7b37380c4ff4c921e4da9d",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.10",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.37",
                            "hsPercentage": "27.9%",
                            "entryFragsPerRound": "10.4%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "16.6%",
                            "dpr": "0.62"
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
                        "statsLocation": "/stats/players/11283/ottond?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 178000,
                    "playerData": {
                        "name": "Airax",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/1tIbSWxGfiQzakuuwECz3d.png?ixlib=java-2.1.0&w=400&s=151e5a19e906062e6c0e7ed4aff8b3dd",
                        "stats": {
                            "rating": "0.94",
                            "ctRating": "1.00",
                            "tRating": "0.88",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "44.0%",
                            "entryFragsPerRound": "11.0%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "16.3%",
                            "multiKillRounds": "14.8%",
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
                        "statsLocation": "/stats/players/20593/airax?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "Banjo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xnBm5FmReeaQBWs48fqNsc.png?ixlib=java-2.1.0&w=400&s=ef8101cabfe863fb7173c27df99b864a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.04",
                            "tRating": "1.09",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "47.4%",
                            "entryFragsPerRound": "8.5%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.8%",
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
                        "statsLocation": "/stats/players/20625/banjo?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 61
        },
        {
            "players": [
                {
                    "cost": 171000,
                    "playerData": {
                        "name": "ScrunK",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/bcvrbQArkVsCMzWxzVYluC.png?ixlib=java-2.1.0&w=400&s=059ba0f1e4d09ea6bbb26345673f5b86",
                        "stats": {
                            "rating": "0.91",
                            "ctRating": "0.91",
                            "tRating": "0.90",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "45.9%",
                            "entryFragsPerRound": "8.3%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.0%",
                            "multiKillRounds": "13.0%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "Sangal",
                            "link": "/team/10333/sangal",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8212
                        },
                        "statsLocation": "/stats/players/8212/scrunk?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 199000,
                    "playerData": {
                        "name": "kory",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/HU.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/qBrZkvSJ24whF1VBb6-Mog.png?ixlib=java-2.1.0&w=400&s=ea4eedadfed2c07c28d6acbcb019b56e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.05",
                            "ctRating": "1.03",
                            "tRating": "1.06",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "53.0%",
                            "entryFragsPerRound": "10.1%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "Sangal",
                            "link": "/team/10333/sangal",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
                        },
                        "fantasyPlayerId": {
                            "playerId": 16495
                        },
                        "statsLocation": "/stats/players/16495/kory?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "PANIX",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/bDByFH2r6O4wUngO7lpeCq.png?ixlib=java-2.1.0&w=400&s=ffb55af2e4abc09176e9c51028af9e01",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.13",
                            "ctRating": "1.12",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.41",
                            "hsPercentage": "27.6%",
                            "entryFragsPerRound": "13.3%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "17.9%",
                            "multiKillRounds": "17.8%",
                            "dpr": "0.61"
                        },
                        "team": {
                            "name": "Sangal",
                            "link": "/team/10333/sangal",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19283
                        },
                        "statsLocation": "/stats/players/19283/panix?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 207000,
                    "playerData": {
                        "name": "kyuubii",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/zD5rprQf7xKOh2-nzElL_x.png?ixlib=java-2.1.0&w=400&s=ee29c9f47a64daf20f5bcee1075e0122",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.08",
                            "ctRating": "1.07",
                            "tRating": "1.10",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "50.6%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.9%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "Sangal",
                            "link": "/team/10333/sangal",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20170
                        },
                        "statsLocation": "/stats/players/20170/kyuubii?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Soulfly",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/TR.gif",
                        "picture": "https://img-cdn.hltv.org/gallerypicture/6c6wJp-FDwjv8Avayo7iBa.jpg?bg=3e4c54&h=400&ixlib=java-2.1.0&rect=589%2C24%2C395%2C395&w=400&s=6de5e4e647a4cf2625737609b913b9df",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.05",
                            "tRating": "1.03",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "52.2%",
                            "entryFragsPerRound": "13.4%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "16.7%",
                            "multiKillRounds": "16.1%",
                            "dpr": "0.71"
                        },
                        "team": {
                            "name": "Sangal",
                            "link": "/team/10333/sangal",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20968
                        },
                        "statsLocation": "/stats/players/20968/soulfly?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "Sangal",
                "link": "/team/10333/sangal",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/zPv_FeMF8CANC10Jz32P9l.png?ixlib=java-2.1.0&w=50&s=741a13d27b484b39f24cdc76dbf80568"
            },
            "rank": 71
        },
        {
            "players": [
                {
                    "cost": 194000,
                    "playerData": {
                        "name": "flusha",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/a_veCKLxdOAKN3abx0HOOp.png?ixlib=java-2.1.0&w=400&s=0044c462967121ccc6885343575671ce",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.02",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "42.6%",
                            "entryFragsPerRound": "7.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "21.4%",
                            "multiKillRounds": "15.2%",
                            "dpr": "0.65"
                        },
                        "team": {
                            "name": "EYEBALLERS",
                            "link": "/team/11737/eyeballers",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 3055
                        },
                        "statsLocation": "/stats/players/3055/flusha?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 197000,
                    "playerData": {
                        "name": "JW",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/XIhLIDzqnZwQcSyYJ3q1eG.png?ixlib=java-2.1.0&w=400&s=54a6a85a5b218cba5c56ea4a01f17ad9",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.06",
                            "tRating": "1.01",
                            "awpKillsPerRound": "0.26",
                            "hsPercentage": "32.3%",
                            "entryFragsPerRound": "13.5%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "14.4%",
                            "multiKillRounds": "16.5%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "EYEBALLERS",
                            "link": "/team/11737/eyeballers",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 3849
                        },
                        "statsLocation": "/stats/players/3849/jw?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 196000,
                    "playerData": {
                        "name": "Sapec",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/i1Cibs66EbakkA_sI_vqMG.png?ixlib=java-2.1.0&w=400&s=e5d6fb84af75a9bb0b362040d30f9789",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.03",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "52.2%",
                            "entryFragsPerRound": "12.4%",
                            "cluthesPerRound": "0.8%",
                            "supportRounds": "16.2%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "EYEBALLERS",
                            "link": "/team/11737/eyeballers",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15569
                        },
                        "statsLocation": "/stats/players/15569/sapec?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 198000,
                    "playerData": {
                        "name": "Peppzor",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/GNyUlhpIq2gmWpf8KiDXIM.png?ixlib=java-2.1.0&w=400&s=7fca930747906cc56bf766b0fc3b63f3",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.04",
                            "ctRating": "1.02",
                            "tRating": "1.05",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "51.9%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "17.3%",
                            "multiKillRounds": "16.8%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "EYEBALLERS",
                            "link": "/team/11737/eyeballers",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15949
                        },
                        "statsLocation": "/stats/players/15949/peppzor?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 183000,
                    "playerData": {
                        "name": "SHiNE",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/SE.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/pUYJzem15ERAijQB-5RBar.png?ixlib=java-2.1.0&w=400&s=5231855c80fe4cf4b2a19d32a2d8e31b",
                        "stats": {
                            "rating": "0.97",
                            "ctRating": "0.98",
                            "tRating": "0.95",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "54.1%",
                            "entryFragsPerRound": "6.7%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "18.8%",
                            "multiKillRounds": "13.7%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "EYEBALLERS",
                            "link": "/team/11737/eyeballers",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19065
                        },
                        "statsLocation": "/stats/players/19065/shine?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "EYEBALLERS",
                "link": "/team/11737/eyeballers",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?invert=true&ixlib=java-2.1.0&sat=-100&w=50&s=2ffde3e377d01663937bf08b74d2057b",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/3-Mfc-yWBTls8MPSEFhma5.png?ixlib=java-2.1.0&w=50&s=752381fe4abe6ccbdbacb226f2c0ebb8"
            },
            "rank": 80
        },
        {
            "players": [
                {
                    "cost": 206000,
                    "playerData": {
                        "name": "anarkez",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/IL.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/tKuXbJmRbzLvOKOyxXpDZJ.png?ixlib=java-2.1.0&w=400&s=fec75aebc2ab3e987e215bdc82ef81fd",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.14",
                            "ctRating": "1.16",
                            "tRating": "1.11",
                            "awpKillsPerRound": "0.39",
                            "hsPercentage": "32.5%",
                            "entryFragsPerRound": "12.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "16.9%",
                            "multiKillRounds": "18.5%",
                            "dpr": "0.62"
                        },
                        "team": {
                            "name": "ECLOT",
                            "link": "/team/7441/eclot",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
                        },
                        "fantasyPlayerId": {
                            "playerId": 11815
                        },
                        "statsLocation": "/stats/players/11815/anarkez?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 181000,
                    "playerData": {
                        "name": "Valencio",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/lcOm2rWQhM1phBhPfbfpak.png?ixlib=java-2.1.0&w=400&s=f3aa8d1251e23ab2ff12ee221a400a0e",
                        "stats": {
                            "rating": "0.96",
                            "ctRating": "0.95",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "50.8%",
                            "entryFragsPerRound": "8.7%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "19.1%",
                            "multiKillRounds": "13.8%",
                            "dpr": "0.69"
                        },
                        "team": {
                            "name": "ECLOT",
                            "link": "/team/7441/eclot",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
                        },
                        "fantasyPlayerId": {
                            "playerId": 13569
                        },
                        "statsLocation": "/stats/players/13569/valencio?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 180000,
                    "playerData": {
                        "name": "K1-FiDa",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/3uE7oGP13oOZOBSiypobtz.png?ixlib=java-2.1.0&w=400&s=790569b0a242997b2f3cd048a3fa390b",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.96",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "41.1%",
                            "entryFragsPerRound": "7.9%",
                            "cluthesPerRound": "1.1%",
                            "supportRounds": "22.1%",
                            "multiKillRounds": "13.0%",
                            "dpr": "0.66"
                        },
                        "team": {
                            "name": "ECLOT",
                            "link": "/team/7441/eclot",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
                        },
                        "fantasyPlayerId": {
                            "playerId": 15818
                        },
                        "statsLocation": "/stats/players/15818/k1-fida?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 204000,
                    "playerData": {
                        "name": "nbqq",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/L68aB9J9FJQpHXRCdpXWig.png?ixlib=java-2.1.0&w=400&s=c4968a73113c28ece2a3326f292962aa",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.07",
                            "ctRating": "1.07",
                            "tRating": "1.07",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "51.1%",
                            "entryFragsPerRound": "11.1%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "16.7%",
                            "dpr": "0.67"
                        },
                        "team": {
                            "name": "ECLOT",
                            "link": "/team/7441/eclot",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19594
                        },
                        "statsLocation": "/stats/players/19594/nbqq?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 211000,
                    "playerData": {
                        "name": "Dytor",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/CZ.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/NmSRieSMifCexaJ3H72Abp.png?ixlib=java-2.1.0&w=400&s=128b5f9abe10368411999b5a657410d1",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.11",
                            "ctRating": "1.10",
                            "tRating": "1.12",
                            "awpKillsPerRound": "0.01",
                            "hsPercentage": "46.9%",
                            "entryFragsPerRound": "12.4%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "15.8%",
                            "multiKillRounds": "17.7%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "ECLOT",
                            "link": "/team/7441/eclot",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19815
                        },
                        "statsLocation": "/stats/players/19815/dytor?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "ECLOT",
                "link": "/team/7441/eclot",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png?ixlib=java-2.1.0&w=50&s=2c4728b37003e75e724612383c869247"
            },
            "rank": 100
        },
        {
            "players": [
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "allu",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/KNvhI3V8fNzC4wp3TOK1cH.png?ixlib=java-2.1.0&w=400&s=2462a4ff7b859b92da8b451c6680533a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.12",
                            "ctRating": "1.12",
                            "tRating": "1.13",
                            "awpKillsPerRound": "0.40",
                            "hsPercentage": "28.8%",
                            "entryFragsPerRound": "10.9%",
                            "cluthesPerRound": "1.8%",
                            "supportRounds": "16.2%",
                            "multiKillRounds": "18.3%",
                            "dpr": "0.64"
                        },
                        "team": {
                            "name": "JANO",
                            "link": "/team/11827/jano",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
                        },
                        "fantasyPlayerId": {
                            "playerId": 695
                        },
                        "statsLocation": "/stats/players/695/allu?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 177000,
                    "playerData": {
                        "name": "ZOREE",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/AeellaH2JoljSPsh8S_AR3.png?ixlib=java-2.1.0&w=400&s=71a7e1d014bddd768c1faa0f4f16d9da",
                        "stats": {
                            "rating": "0.93",
                            "ctRating": "0.94",
                            "tRating": "0.93",
                            "awpKillsPerRound": "0.04",
                            "hsPercentage": "46.0%",
                            "entryFragsPerRound": "7.4%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.3%",
                            "multiKillRounds": "13.4%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "JANO",
                            "link": "/team/11827/jano",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
                        },
                        "fantasyPlayerId": {
                            "playerId": 8576
                        },
                        "statsLocation": "/stats/players/8576/zoree?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 181000,
                    "playerData": {
                        "name": "Sm1llee",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/xRpVGVGU2MBv7aRo-4wumA.png?ixlib=java-2.1.0&w=400&s=317a86354fe9b846a0d391af6db2f17e",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.97",
                            "tRating": "0.94",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "56.1%",
                            "entryFragsPerRound": "9.0%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "17.1%",
                            "multiKillRounds": "14.3%",
                            "dpr": "0.70"
                        },
                        "team": {
                            "name": "JANO",
                            "link": "/team/11827/jano",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
                        },
                        "fantasyPlayerId": {
                            "playerId": 18643
                        },
                        "statsLocation": "/stats/players/18643/sm1llee?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "Jelo",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/UIQsYn04QdYgarjhaaP-ON.png?ixlib=java-2.1.0&w=400&s=5626d38eea404f1f024ecd51f5cea0d7",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.01",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "51.0%",
                            "entryFragsPerRound": "8.8%",
                            "cluthesPerRound": "1.4%",
                            "supportRounds": "19.2%",
                            "multiKillRounds": "16.0%",
                            "dpr": "0.68"
                        },
                        "team": {
                            "name": "JANO",
                            "link": "/team/11827/jano",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
                        },
                        "fantasyPlayerId": {
                            "playerId": 19996
                        },
                        "statsLocation": "/stats/players/19996/jelo?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 170000,
                    "playerData": {
                        "name": "Jerppa",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/FI.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/8R0AmDN1KFb_qdK6uOKtP-.png?ixlib=java-2.1.0&w=400&s=e886935d4dc62dd5699bb219da1a4287",
                        "stats": {
                            "rating": "0.90",
                            "ctRating": "0.79",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.5%",
                            "entryFragsPerRound": "12.1%",
                            "cluthesPerRound": "0.4%",
                            "supportRounds": "10.8%",
                            "multiKillRounds": "14.6%",
                            "dpr": "0.77"
                        },
                        "team": {
                            "name": "JANO",
                            "link": "/team/11827/jano",
                            "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                            "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
                        },
                        "fantasyPlayerId": {
                            "playerId": 20594
                        },
                        "statsLocation": "/stats/players/20594/jerppa?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                }
            ],
            "teamData": {
                "name": "JANO",
                "link": "/team/11827/jano",
                "logoDay": "https://img-cdn.hltv.org/teamlogo/uR94Zy7IIJ2SG89Di2IE_B.png?ixlib=java-2.1.0&w=50&s=150a14beab3000f31e75e579df3e1fc7",
                "logoNight": "https://img-cdn.hltv.org/teamlogo/k2JdXuIbFREUABEIcCMeAI.png?ixlib=java-2.1.0&w=50&s=e5b84838c3a8de05fe0b1a2295604de2"
            },
            "rank": 111
        },
        {
            "players": [
                {
                    "cost": 202000,
                    "playerData": {
                        "name": "raalz",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/RkGQs7eaA56rFh1zYruSyl.png?ixlib=java-2.1.0&w=400&s=30a1bf82cf8950e108988bf3a93e8c0e",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.06",
                            "ctRating": "1.10",
                            "tRating": "1.02",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "57.4%",
                            "entryFragsPerRound": "9.7%",
                            "cluthesPerRound": "1.5%",
                            "supportRounds": "18.7%",
                            "multiKillRounds": "16.3%",
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
                        "statsLocation": "/stats/players/2898/raalz?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 193000,
                    "playerData": {
                        "name": "b0RUP",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/PdFjThtge39ctHi2MGkwgY.png?ixlib=java-2.1.0&w=400&s=17b61e27fe750b8867da58bac525df7a",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.02",
                            "ctRating": "1.03",
                            "tRating": "1.00",
                            "awpKillsPerRound": "0.00",
                            "hsPercentage": "60.6%",
                            "entryFragsPerRound": "9.9%",
                            "cluthesPerRound": "0.9%",
                            "supportRounds": "18.1%",
                            "multiKillRounds": "15.4%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/9896/b0rup?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 195000,
                    "playerData": {
                        "name": "TMB",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/6vckVjFSfdm8zpbt581d3K.png?ixlib=java-2.1.0&w=400&s=4cab39070081b64ad5e71f51aef6a834",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.03",
                            "ctRating": "1.06",
                            "tRating": "0.99",
                            "awpKillsPerRound": "0.03",
                            "hsPercentage": "49.2%",
                            "entryFragsPerRound": "10.0%",
                            "cluthesPerRound": "1.2%",
                            "supportRounds": "18.2%",
                            "multiKillRounds": "15.0%",
                            "dpr": "0.69"
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
                        "statsLocation": "/stats/players/11995/tmb?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 208000,
                    "playerData": {
                        "name": "Farlig",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/gifDokJeA2rbOvuQ6EY_hH.png?ixlib=java-2.1.0&w=400&s=dc8d5f20c08bae73b74f6831c71c4123",
                        "playerLevel": "SILVER",
                        "stats": {
                            "rating": "1.15",
                            "ctRating": "1.15",
                            "tRating": "1.15",
                            "awpKillsPerRound": "0.38",
                            "hsPercentage": "32.8%",
                            "entryFragsPerRound": "11.6%",
                            "cluthesPerRound": "1.7%",
                            "supportRounds": "18.4%",
                            "multiKillRounds": "17.9%",
                            "dpr": "0.61"
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
                        "statsLocation": "/stats/players/13300/farlig?startDate=2022-12-01&endDate=2023-06-01",
                        "male": true
                    }
                },
                {
                    "cost": 179000,
                    "playerData": {
                        "name": "birdfromsky",
                        "flag": "https://www.hltv.org/img/static/flags/30x20/DK.gif",
                        "picture": "https://img-cdn.hltv.org/playerbodyshot/SX_71RVwOASG_ZvROJ-SW9.png?ixlib=java-2.1.0&w=400&s=01090919402b4a88ca272c38fd3b6357",
                        "stats": {
                            "rating": "0.95",
                            "ctRating": "0.94",
                            "tRating": "0.96",
                            "awpKillsPerRound": "0.02",
                            "hsPercentage": "42.6%",
                            "entryFragsPerRound": "9.8%",
                            "cluthesPerRound": "1.3%",
                            "supportRounds": "20.4%",
                            "multiKillRounds": "12.4%",
                            "dpr": "0.71"
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
                        "statsLocation": "/stats/players/13718/birdfromsky?startDate=2022-12-01&endDate=2023-06-01",
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
            "rank": 51
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