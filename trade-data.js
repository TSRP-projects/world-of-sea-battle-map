// WOSB Trade Data - Complete Pricing Matrix
// Generated from WOSB Trade Calculations spreadsheet

var TRADE_DATA = {

    // Display name corrections
    displayNames: {
        'corsa_noir_bay': 'Corsa-Noir Bay',
        'santa_marta': 'Santa Marta',
        'grey_island': 'Grey Island',
        'al_khalif': 'Al-Khalif',
        'naabad_stronghold': 'Naabad Stronghold'
    },

    getDisplayName: function(portKey) {
        return this.displayNames[portKey] || portKey.split('_').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    },

    // Port regions for grouping in dropdowns
    regions: {
        southern: ['devios', 'los_catuano', 'puerto_salada', 'santa_marta', 'el_tigre', 'pirate_city', 'bord_radel', 'san_cristobel', 'san_martinas', 'south_bastion'],
        northern: ['aldansk', 'corsa_noir_bay', 'nisogora', 'northside', 'oneg', 'grey_island', 'everston', 'aruba', 'severoangelsk', 'north_bastion'],
        arabian: ['sharhat', 'masadora', 'assab', 'al_khalif', 'west_bastion', 'cursed_city'],
        sell_only: ['gelbion', 'surako', 'nevis', 'thermopylae', 'fiji', 'brandport', 'freedom_bay', 'la_navidad', 'charleston', 'bridgetown', 'laguna_blanco', 'freebooter_bay'],
        no_trade: ['naabad_stronghold', 'tortuga']
    },

    // Port metadata for warnings (shallow water = ship rate restrictions)
    portMeta: {
        shallowWater: {
            // Rate 2-7 only (Rate 1 cannot enter)
            'oneg': 'Rates 2-7 only',
            'everston': 'Rates 2-7 only',
            'aruba': 'Rates 2-7 only',
            // Rate 3-7 only (Rate 1-2 cannot enter)
            'gelbion': 'Rates 3-7 only',
            'nisogora': 'Rates 3-7 only',
            'cursed_city': 'Rates 3-7 only',
            'el_tigre': 'Rates 3-7 only',
            // Rate 4-7 only (Rate 1-3 cannot enter)
            'aldansk': 'Rates 4-7 only',
            'severoangelsk': 'Rates 4-7 only',
            'north_bastion': 'Rates 4-7 only',
            'san_cristobel': 'Rates 4-7 only',
            // Rate 5-7 only (Rate 1-4 cannot enter)
            'northside': 'Rates 5-7 only',
            'south_bastion': 'Rates 5-7 only',
            // Rate 6-7 only (Rate 1-5 cannot enter)
            'fiji': 'Rates 6-7 only',
            'los_catuano': 'Rates 6-7 only',
            'puerto_salada': 'Rates 6-7 only',
            'santa_marta': 'Rates 6-7 only',
            'freebooter_bay': 'Rates 6-7 only'
        },
        // Ports where peace flag is not allowed (pirate strongholds)
        noPeaceFlag: ['pirate_city', 'tortuga', 'naabad_stronghold', 'freebooter_bay', 'corsa_noir_bay']
    },

    // Commodity icons mapping
    commodityIcons: {
        pineapples: 'pineapples.png',
        vanilla: 'vanilla.png',
        leather: 'leather.png',
        coffee: 'coffee.png',
        oil: 'oil.png',
        nuts: 'nuts.png',
        pepper: 'pepper.png',
        sugar: 'sugar.png',
        tobacco: 'tobacco.png',
        wine: 'wine.png',
        grog: 'grog.png',
        beer: 'beer.png',
        salt: 'salt.png',
        rugs: 'rugs.png',
        cinnamon: 'cinnamon.png',
        mango: 'mango.png',
        paprika: 'paprika.png',
        dates: 'dates.png',
        saffron: 'saffron.png',
        silk: 'silk.png'
    },

    // Grid display order (matches in-game layout - 3 columns)
    commodityOrder: [
        'sugar', 'beer', 'saffron',
        'paprika', 'cinnamon', 'salt',
        'silk', 'rugs', 'dates',
        'mango', 'tobacco', 'coffee',
        'leather', 'pepper', 'vanilla',
        'nuts', 'wine', 'pineapples',
        'oil', 'grog'
    ],

    // Complete commodity pricing data
    commodities: {
        pineapples: {
            name: 'Pineapples',
            min: 11,
            max: 19,
            weight: 4,
            profitPerWeight: 2.00,
            rating: 1,
            prices: {
                devios: 11, los_catuano: 11, puerto_salada: 11, santa_marta: 11, el_tigre: 11,
                pirate_city: 11, bord_radel: 11, san_cristobel: 11, san_martinas: 11, south_bastion: 11,
                aldansk: 19, corsa_noir_bay: 19, nisogora: 19, northside: 19, oneg: 19,
                grey_island: 19, everston: 19, aruba: 19, severoangelsk: 19, north_bastion: 19,
                gelbion: 19, surako: 18, cursed_city: 19, west_bastion: 16, al_khalif: 16,
                assab: 16, masadora: 15, sharhat: 14, naabad_stronghold: 17, brandport: 15,
                freedom_bay: 17, fiji: 15, freebooter_bay: 13, la_navidad: 15, charleston: 14,
                bridgetown: 15, laguna_blanco: 15, nevis: 19, thermopylae: 18, tortuga: 17
            }
        },
        vanilla: {
            name: 'Vanilla',
            min: 22,
            max: 38,
            weight: 7,
            profitPerWeight: 2.29,
            rating: 2,
            prices: {
                devios: 22, los_catuano: 22, puerto_salada: 22, santa_marta: 22, el_tigre: 22,
                pirate_city: 22, bord_radel: 22, san_cristobel: 22, san_martinas: 22, south_bastion: 22,
                aldansk: 38, corsa_noir_bay: 38, nisogora: 38, northside: 38, oneg: 38,
                grey_island: 38, everston: 38, aruba: 38, severoangelsk: 38, north_bastion: 37,
                gelbion: 38, surako: 36, cursed_city: 37, west_bastion: 32, al_khalif: 31,
                assab: 31, masadora: 29, sharhat: 27, naabad_stronghold: 33, brandport: 29,
                freedom_bay: 33, fiji: 29, freebooter_bay: 25, la_navidad: 29, charleston: 27,
                bridgetown: 29, laguna_blanco: 30, nevis: 37, thermopylae: 35, tortuga: 33
            }
        },
        leather: {
            name: 'Leather',
            min: 20,
            max: 34,
            weight: 5,
            profitPerWeight: 2.80,
            rating: 3,
            prices: {
                devios: 20, los_catuano: 20, puerto_salada: 20, santa_marta: 20, el_tigre: 25,
                pirate_city: 20, bord_radel: 20, san_cristobel: 20, san_martinas: 20, south_bastion: 20,
                aldansk: 34, corsa_noir_bay: 34, nisogora: 34, northside: 34, oneg: 34,
                grey_island: 34, everston: 34, aruba: 34, severoangelsk: 34, north_bastion: 34,
                gelbion: 34, surako: 33, cursed_city: 34, west_bastion: 29, al_khalif: 28,
                assab: 28, masadora: 26, sharhat: 25, naabad_stronghold: 30, brandport: 26,
                freedom_bay: 30, fiji: 27, freebooter_bay: 23, la_navidad: 26, charleston: 25,
                bridgetown: 27, laguna_blanco: 27, nevis: 34, thermopylae: 32, tortuga: 30
            }
        },
        coffee: {
            name: 'Coffee',
            min: 25,
            max: 43,
            weight: 12,
            profitPerWeight: 1.50,
            rating: 2,
            prices: {
                devios: 25, los_catuano: 25, puerto_salada: 25, santa_marta: 25, el_tigre: 25,
                pirate_city: 25, bord_radel: 25, san_cristobel: 25, san_martinas: 25, south_bastion: 25,
                aldansk: 43, corsa_noir_bay: 43, nisogora: 43, northside: 43, oneg: 43,
                grey_island: 43, everston: 43, aruba: 43, severoangelsk: 43, north_bastion: 42,
                gelbion: 43, surako: 41, cursed_city: 42, west_bastion: 36, al_khalif: 35,
                assab: 35, masadora: 32, sharhat: 30, naabad_stronghold: 37, brandport: 33,
                freedom_bay: 37, fiji: 33, freebooter_bay: 29, la_navidad: 33, charleston: 31,
                bridgetown: 33, laguna_blanco: 34, nevis: 42, thermopylae: 40, tortuga: 38
            }
        },
        oil: {
            name: 'Oil',
            min: 13,
            max: 22,
            weight: 3,
            profitPerWeight: 3.00,
            rating: 3,
            prices: {
                devios: 13, los_catuano: 13, puerto_salada: 13, santa_marta: 13, el_tigre: 13,
                pirate_city: 13, bord_radel: 13, san_cristobel: 13, san_martinas: 13, south_bastion: 13,
                aldansk: 22, corsa_noir_bay: 22, nisogora: 22, northside: 22, oneg: 22,
                grey_island: 22, everston: 22, aruba: 22, severoangelsk: 22, north_bastion: 22,
                gelbion: 22, surako: 21, cursed_city: 22, west_bastion: 19, al_khalif: 18,
                assab: 18, masadora: 17, sharhat: 16, naabad_stronghold: 19, brandport: 17,
                freedom_bay: 19, fiji: 17, freebooter_bay: 15, la_navidad: 17, charleston: 16,
                bridgetown: 18, laguna_blanco: 18, nevis: 22, thermopylae: 21, tortuga: 20
            }
        },
        nuts: {
            name: 'Nuts',
            min: 9,
            max: 16,
            weight: 5,
            profitPerWeight: 1.40,
            rating: 1,
            prices: {
                devios: 9, los_catuano: 9, puerto_salada: 9, santa_marta: 9, el_tigre: 9,
                pirate_city: 9, bord_radel: 9, san_cristobel: 9, san_martinas: 9, south_bastion: 9,
                aldansk: 16, corsa_noir_bay: 16, nisogora: 16, northside: 16, oneg: 16,
                grey_island: 16, everston: 16, aruba: 16, severoangelsk: 16, north_bastion: 15,
                gelbion: 16, surako: 15, cursed_city: 16, west_bastion: 13, al_khalif: 13,
                assab: 13, masadora: 12, sharhat: 11, naabad_stronghold: 14, brandport: 12,
                freedom_bay: 14, fiji: 12, freebooter_bay: 11, la_navidad: 12, charleston: 11,
                bridgetown: 12, laguna_blanco: 13, nevis: 16, thermopylae: 15, tortuga: 14
            }
        },
        pepper: {
            name: 'Pepper',
            min: 21,
            max: 36,
            weight: 6,
            profitPerWeight: 2.50,
            rating: 2,
            prices: {
                devios: 21, los_catuano: 21, puerto_salada: 21, santa_marta: 21, el_tigre: 21,
                pirate_city: 21, bord_radel: 21, san_cristobel: 21, san_martinas: 21, south_bastion: 21,
                aldansk: 36, corsa_noir_bay: 36, nisogora: 36, northside: 36, oneg: 36,
                grey_island: 35, everston: 36, aruba: 36, severoangelsk: 36, north_bastion: 35,
                gelbion: 36, surako: 34, cursed_city: 36, west_bastion: 30, al_khalif: 29,
                assab: 29, masadora: 27, sharhat: 25, naabad_stronghold: 31, brandport: 28,
                freedom_bay: 31, fiji: 28, freebooter_bay: 24, la_navidad: 28, charleston: 26,
                bridgetown: 28, laguna_blanco: 29, nevis: 36, thermopylae: 33, tortuga: 32
            }
        },
        sugar: {
            name: 'Sugar',
            min: 30,
            max: 51,
            weight: 20,
            profitPerWeight: 1.05,
            rating: 2,
            prices: {
                devios: 30, los_catuano: 30, puerto_salada: 30, santa_marta: 30, el_tigre: 30,
                pirate_city: 30, bord_radel: 30, san_cristobel: 30, san_martinas: 30, south_bastion: 30,
                aldansk: 51, corsa_noir_bay: 51, nisogora: 51, northside: 51, oneg: 51,
                grey_island: 51, everston: 51, aruba: 51, severoangelsk: 51, north_bastion: 50,
                gelbion: 51, surako: 49, cursed_city: 51, west_bastion: 43, al_khalif: 42,
                assab: 42, masadora: 39, sharhat: 36, naabad_stronghold: 44, brandport: 39,
                freedom_bay: 44, fiji: 40, freebooter_bay: 34, la_navidad: 39, charleston: 37,
                bridgetown: 40, laguna_blanco: 41, nevis: 51, thermopylae: 47, tortuga: 45
            }
        },
        tobacco: {
            name: 'Tobacco',
            min: 32,
            max: 55,
            weight: 14,
            profitPerWeight: 1.64,
            rating: 3,
            prices: {
                devios: 32, los_catuano: 32, puerto_salada: 32, santa_marta: 32, el_tigre: 32,
                pirate_city: 32, bord_radel: 32, san_cristobel: 32, san_martinas: 32, south_bastion: 32,
                aldansk: 55, corsa_noir_bay: 55, nisogora: 55, northside: 55, oneg: 55,
                grey_island: 55, everston: 55, aruba: 55, severoangelsk: 55, north_bastion: 54,
                gelbion: 55, surako: 52, cursed_city: 54, west_bastion: 46, al_khalif: 44,
                assab: 44, masadora: 41, sharhat: 38, naabad_stronghold: 47, brandport: 42,
                freedom_bay: 47, fiji: 42, freebooter_bay: 37, la_navidad: 42, charleston: 39,
                bridgetown: 43, laguna_blanco: 44, nevis: 54, thermopylae: 51, tortuga: 48
            }
        },
        wine: {
            name: 'Wine',
            min: 9,
            max: 16,
            weight: 3,
            profitPerWeight: 2.33,
            rating: 1,
            prices: {
                devios: 16, los_catuano: 16, puerto_salada: 16, santa_marta: 15, el_tigre: 16,
                pirate_city: 16, bord_radel: 16, san_cristobel: 16, san_martinas: 16, south_bastion: 16,
                aldansk: 9, corsa_noir_bay: 9, nisogora: 9, northside: 9, oneg: 9,
                grey_island: 9, everston: 9, aruba: 9, severoangelsk: 9, north_bastion: 9,
                gelbion: 11, surako: 12, cursed_city: 11, west_bastion: 12, al_khalif: 16,
                assab: 16, masadora: 14, sharhat: 15, naabad_stronghold: 12, brandport: 12,
                freedom_bay: 11, fiji: 12, freebooter_bay: 14, la_navidad: 14, charleston: 16,
                bridgetown: 14, laguna_blanco: 15, nevis: 12, thermopylae: 11, tortuga: 13
            }
        },
        grog: {
            name: 'Grog',
            min: 9,
            max: 16,
            weight: 5,
            profitPerWeight: 1.40,
            rating: 1,
            prices: {
                devios: 16, los_catuano: 16, puerto_salada: 16, santa_marta: 15, el_tigre: 16,
                pirate_city: 16, bord_radel: 16, san_cristobel: 16, san_martinas: 16, south_bastion: 16,
                aldansk: 9, corsa_noir_bay: 9, nisogora: 9, northside: 9, oneg: 9,
                grey_island: 9, everston: 9, aruba: 9, severoangelsk: 9, north_bastion: 9,
                gelbion: 11, surako: 12, cursed_city: 11, west_bastion: 12, al_khalif: 16,
                assab: 16, masadora: 14, sharhat: 15, naabad_stronghold: 12, brandport: 12,
                freedom_bay: 11, fiji: 12, freebooter_bay: 14, la_navidad: 14, charleston: 16,
                bridgetown: 14, laguna_blanco: 15, nevis: 12, thermopylae: 11, tortuga: 13
            }
        },
        beer: {
            name: 'Beer',
            min: 5,
            max: 9,
            weight: 6,
            profitPerWeight: 0.67,
            rating: 1,
            prices: {
                devios: 9, los_catuano: 9, puerto_salada: 9, santa_marta: 9, el_tigre: 9,
                pirate_city: 9, bord_radel: 9, san_cristobel: 9, san_martinas: 9, south_bastion: 9,
                aldansk: 5, corsa_noir_bay: 5, nisogora: 5, northside: 5, oneg: 5,
                grey_island: 5, everston: 5, aruba: 5, severoangelsk: 5, north_bastion: 5,
                gelbion: 6, surako: 7, cursed_city: 6, west_bastion: 7, al_khalif: 9,
                assab: 9, masadora: 8, sharhat: 9, naabad_stronghold: 7, brandport: 7,
                freedom_bay: 6, fiji: 7, freebooter_bay: 8, la_navidad: 8, charleston: 9,
                bridgetown: 8, laguna_blanco: 8, nevis: 7, thermopylae: 6, tortuga: 7
            }
        },
        salt: {
            name: 'Salt',
            min: 18,
            max: 31,
            weight: 5,
            profitPerWeight: 2.60,
            rating: 2,
            prices: {
                devios: 31, los_catuano: 31, puerto_salada: 31, santa_marta: 30, el_tigre: 31,
                pirate_city: 31, bord_radel: 31, san_cristobel: 30, san_martinas: 31, south_bastion: 31,
                aldansk: 18, corsa_noir_bay: 18, nisogora: 18, northside: 18, oneg: 18,
                grey_island: 18, everston: 18, aruba: 18, severoangelsk: 18, north_bastion: 18,
                gelbion: 22, surako: 24, cursed_city: 21, west_bastion: 24, al_khalif: 31,
                assab: 31, masadora: 27, sharhat: 30, naabad_stronghold: 23, brandport: 23,
                freedom_bay: 22, fiji: 24, freebooter_bay: 27, la_navidad: 27, charleston: 31,
                bridgetown: 28, laguna_blanco: 29, nevis: 23, thermopylae: 21, tortuga: 25
            }
        },
        rugs: {
            name: 'Rugs',
            min: 24,
            max: 41,
            weight: 6,
            profitPerWeight: 2.83,
            rating: 3,
            prices: {
                devios: 29, los_catuano: 41, puerto_salada: 41, santa_marta: 41, el_tigre: 31,
                pirate_city: 39, bord_radel: 41, san_cristobel: 35, san_martinas: 41, south_bastion: 41,
                aldansk: 41, corsa_noir_bay: 39, nisogora: 28, northside: 41, oneg: 37,
                grey_island: 41, everston: 39, aruba: 41, severoangelsk: 41, north_bastion: 41,
                gelbion: 31, surako: 28, cursed_city: 24, west_bastion: 24, al_khalif: 24,
                assab: 24, masadora: 24, sharhat: 24, naabad_stronghold: 24, brandport: 41,
                freedom_bay: 41, fiji: 41, freebooter_bay: 41, la_navidad: 41, charleston: 30,
                bridgetown: 28, laguna_blanco: 35, nevis: 33, thermopylae: 41, tortuga: 39
            }
        },
        cinnamon: {
            name: 'Cinnamon',
            min: 23,
            max: 39,
            weight: 7,
            profitPerWeight: 2.29,
            rating: 3,
            prices: {
                devios: 28, los_catuano: 39, puerto_salada: 39, santa_marta: 39, el_tigre: 30,
                pirate_city: 37, bord_radel: 39, san_cristobel: 34, san_martinas: 39, south_bastion: 39,
                aldansk: 39, corsa_noir_bay: 37, nisogora: 27, northside: 39, oneg: 35,
                grey_island: 39, everston: 37, aruba: 39, severoangelsk: 39, north_bastion: 39,
                gelbion: 30, surako: 27, cursed_city: 23, west_bastion: 23, al_khalif: 23,
                assab: 23, masadora: 23, sharhat: 23, naabad_stronghold: 23, brandport: 39,
                freedom_bay: 39, fiji: 39, freebooter_bay: 39, la_navidad: 39, charleston: 29,
                bridgetown: 27, laguna_blanco: 33, nevis: 32, thermopylae: 39, tortuga: 37
            }
        },
        mango: {
            name: 'Mango',
            min: 11,
            max: 19,
            weight: 4,
            profitPerWeight: 2.00,
            rating: 2,
            prices: {
                devios: 14, los_catuano: 19, puerto_salada: 19, santa_marta: 19, el_tigre: 15,
                pirate_city: 18, bord_radel: 19, san_cristobel: 17, san_martinas: 19, south_bastion: 19,
                aldansk: 19, corsa_noir_bay: 18, nisogora: 13, northside: 19, oneg: 17,
                grey_island: 19, everston: 18, aruba: 19, severoangelsk: 19, north_bastion: 19,
                gelbion: 14, surako: 13, cursed_city: 11, west_bastion: 11, al_khalif: 11,
                assab: 11, masadora: 11, sharhat: 11, naabad_stronghold: 11, brandport: 19,
                freedom_bay: 19, fiji: 19, freebooter_bay: 19, la_navidad: 19, charleston: 14,
                bridgetown: 13, laguna_blanco: 16, nevis: 16, thermopylae: 19, tortuga: 18
            }
        },
        paprika: {
            name: 'Paprika',
            min: 15,
            max: 26,
            weight: 9,
            profitPerWeight: 1.22,
            rating: 2,
            prices: {
                devios: 18, los_catuano: 26, puerto_salada: 26, santa_marta: 26, el_tigre: 20,
                pirate_city: 24, bord_radel: 26, san_cristobel: 22, san_martinas: 26, south_bastion: 26,
                aldansk: 26, corsa_noir_bay: 24, nisogora: 18, northside: 26, oneg: 23,
                grey_island: 26, everston: 24, aruba: 26, severoangelsk: 26, north_bastion: 26,
                gelbion: 19, surako: 18, cursed_city: 15, west_bastion: 15, al_khalif: 15,
                assab: 15, masadora: 15, sharhat: 15, naabad_stronghold: 15, brandport: 26,
                freedom_bay: 26, fiji: 26, freebooter_bay: 26, la_navidad: 26, charleston: 19,
                bridgetown: 18, laguna_blanco: 22, nevis: 21, thermopylae: 26, tortuga: 24
            }
        },
        dates: {
            name: 'Dates',
            min: 8,
            max: 14,
            weight: 6,
            profitPerWeight: 1.00,
            rating: 1,
            prices: {
                devios: 10, los_catuano: 14, puerto_salada: 14, santa_marta: 14, el_tigre: 11,
                pirate_city: 13, bord_radel: 14, san_cristobel: 12, san_martinas: 14, south_bastion: 14,
                aldansk: 14, corsa_noir_bay: 13, nisogora: 10, northside: 14, oneg: 13,
                grey_island: 14, everston: 13, aruba: 14, severoangelsk: 14, north_bastion: 14,
                gelbion: 11, surako: 10, cursed_city: 8, west_bastion: 8, al_khalif: 8,
                assab: 8, masadora: 8, sharhat: 8, naabad_stronghold: 8, brandport: 14,
                freedom_bay: 14, fiji: 14, freebooter_bay: 14, la_navidad: 14, charleston: 10,
                bridgetown: 10, laguna_blanco: 12, nevis: 11, thermopylae: 14, tortuga: 13
            }
        },
        saffron: {
            name: 'Saffron',
            min: 37,
            max: 63,
            weight: 15,
            profitPerWeight: 1.73,
            rating: 3,
            prices: {
                devios: 44, los_catuano: 63, puerto_salada: 63, santa_marta: 63, el_tigre: 48,
                pirate_city: 59, bord_radel: 63, san_cristobel: 54, san_martinas: 63, south_bastion: 63,
                aldansk: 63, corsa_noir_bay: 59, nisogora: 43, northside: 63, oneg: 56,
                grey_island: 63, everston: 60, aruba: 63, severoangelsk: 63, north_bastion: 63,
                gelbion: 47, surako: 43, cursed_city: 37, west_bastion: 37, al_khalif: 37,
                assab: 37, masadora: 37, sharhat: 37, naabad_stronghold: 37, brandport: 63,
                freedom_bay: 63, fiji: 63, freebooter_bay: 63, la_navidad: 63, charleston: 46,
                bridgetown: 43, laguna_blanco: 53, nevis: 51, thermopylae: 63, tortuga: 59
            }
        },
        silk: {
            name: 'Silk',
            min: 52,
            max: 88,
            weight: 20,
            profitPerWeight: 1.80,
            rating: 3,
            prices: {
                devios: 62, los_catuano: 88, puerto_salada: 88, santa_marta: 88, el_tigre: 68,
                pirate_city: 83, bord_radel: 88, san_cristobel: 76, san_martinas: 88, south_bastion: 88,
                aldansk: 88, corsa_noir_bay: 83, nisogora: 60, northside: 88, oneg: 79,
                grey_island: 88, everston: 84, aruba: 88, severoangelsk: 88, north_bastion: 88,
                gelbion: 66, surako: 60, cursed_city: 52, west_bastion: 52, al_khalif: 52,
                assab: 52, masadora: 52, sharhat: 52, naabad_stronghold: 52, brandport: 88,
                freedom_bay: 88, fiji: 88, freebooter_bay: 88, la_navidad: 88, charleston: 46,
                bridgetown: 61, laguna_blanco: 75, nevis: 72, thermopylae: 88, tortuga: 83
            }
        }
    },

    // Ports that cannot be sold to (pirate strongholds - no commodity markets)
    noSellPorts: ['naabad_stronghold', 'tortuga', 'pirate_city', 'corsa_noir_bay', 'freebooter_bay'],

    // Get all sellable ports
    getSellablePorts: function() {
        var allPorts = [];
        var self = this;
        Object.keys(this.regions).forEach(function(region) {
            if (region !== 'no_trade') {
                self.regions[region].forEach(function(port) {
                    if (self.noSellPorts.indexOf(port) === -1) {
                        allPorts.push(port);
                    }
                });
            }
        });
        return allPorts;
    },

    // Calculate profit for a commodity to a destination
    calculateProfit: function(commodityKey, destPort) {
        var commodity = this.commodities[commodityKey];
        if (!commodity) return null;

        var buyPrice = commodity.min; // Always buy at minimum (home region) price
        var sellPrice = commodity.prices[destPort];
        
        if (!sellPrice) return null;

        var profit = sellPrice - buyPrice;
        var profitPerWeight = profit / commodity.weight;
        var maxProfit = commodity.max - commodity.min;

        return {
            commodity: commodityKey,
            name: commodity.name,
            buyPrice: buyPrice,
            sellPrice: sellPrice,
            profit: profit,
            profitPerWeight: parseFloat(profitPerWeight.toFixed(2)),
            weight: commodity.weight,
            maxProfit: maxProfit,
            isMaxProfit: sellPrice === commodity.max,
            profitPercent: maxProfit > 0 ? Math.round((profit / maxProfit) * 100) : 0
        };
    },

    // Get ranked recommendations for selected commodities
    getRecommendations: function(selectedCommodities, destPort) {
        var self = this;
        var results = [];

        selectedCommodities.forEach(function(commodityKey) {
            var calc = self.calculateProfit(commodityKey, destPort);
            if (calc && calc.profit > 0) {
                results.push(calc);
            }
        });

        // Sort by profit per weight (descending)
        results.sort(function(a, b) {
            return b.profitPerWeight - a.profitPerWeight;
        });

        return results;
    },

    // Hold size configurations
    // Hold size configurations
    holdSizes: {
        small: { min: 0, max: 7000, label: 'Small Hold', description: '< 7,000' },
        medium: { min: 7000, max: 25000, label: 'Medium Hold', description: '7,000 - 25,000' },
        large: { min: 25000, max: Infinity, label: 'Large Hold', description: '> 25,000' }
    },

    // Calculate best ports to sell selected commodities
    getBestPorts: function(selectedCommodities) {
        var self = this;
        var allPorts = this.getSellablePorts();
        var portResults = [];

        allPorts.forEach(function(port) {
            var totalProfit = 0;
            var totalWeight = 0;
            var commodityDetails = [];

            selectedCommodities.forEach(function(commodityKey) {
                var commodity = self.commodities[commodityKey];
                if (commodity && commodity.prices[port]) {
                    var buyPrice = commodity.min;
                    var sellPrice = commodity.prices[port];
                    var profit = sellPrice - buyPrice;
                    
                    if (profit > 0) {
                        totalProfit += profit;
                        totalWeight += commodity.weight;
                        commodityDetails.push({
                            name: commodity.name,
                            profit: profit,
                            sellPrice: sellPrice,
                            isMax: sellPrice === commodity.max
                        });
                    }
                }
            });

            if (totalProfit > 0) {
                portResults.push({
                    port: port,
                    displayName: self.getDisplayName(port),
                    totalProfit: totalProfit,
                    totalWeight: totalWeight,
                    profitPerWeight: parseFloat((totalProfit / totalWeight).toFixed(2)),
                    commodities: commodityDetails,
                    shallowWater: self.portMeta.shallowWater[port] || null,
                    noPeaceFlag: self.portMeta.noPeaceFlag.indexOf(port) !== -1
                });
            }
        });

        // Sort by total profit descending
        portResults.sort(function(a, b) {
            return b.totalProfit - a.totalProfit;
        });

        return portResults.slice(0, 3);
    }
};