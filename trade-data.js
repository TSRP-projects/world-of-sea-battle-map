// Trade Data for WOSB Map
// Converted from YAML v2 - Last Updated: 2024-12-27

const TRADE_DATA = {
    
    // Display name corrections (HTML name -> Display name)
    displayNames: {
        'Corsa-Nois Bay': 'Corsa-Noir Bay',
        'Santa Maria': 'Santa Marta',
        'Gray Island': 'Grey Island'
    },
    
    // Get display name for a port
    getDisplayName: function(htmlName) {
        return this.displayNames[htmlName] || htmlName;
    },
    
    // Hold size definitions
    holdSizes: {
        small: { max: 10000, label: 'Small Hold', description: 'Focus on highest efficiency goods' },
        medium: { min: 10001, max: 25000, label: 'Medium Hold', description: 'Balance efficiency with volume' },
        large: { min: 25001, label: 'Large Hold', description: 'Can prioritize high-margin bulk goods' }
    },
    
    // Commodity icons
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
    
    // Region definitions
    regions: {
        southern: ['Devios', 'El Tigre', 'San Cristobel', 'San Martinas', 'South Bastion', 'Bord Radel', 'Los Catuano', 'Puerto Salada', 'Santa Maria'],
        arabian: ['Sharhat', 'Assab', 'Al-Khalif', 'West Bastion', 'Masadora', 'Cursed City'],
        northern: ['Northside', 'North Bastion', 'Severoangelsk', 'Gray Island', 'Aldansk', 'Aruba', 'Everston', 'Oneg', 'Nordberg', 'Nisogora'],
        sell_only: ['Gelbion', 'Surako', 'Nevis', 'Thermopylae', 'Fiji', 'Brandport', 'Freedom Bay', 'La Navidad', 'Charleston', 'Bridgetown', 'Laguna Blanco', 'St. John'],
        no_trade: ['Tortuga', 'Pirate City', 'Corsa-Nois Bay', 'Naabad Stronghold', 'Freebooter Bay']
    },
    
    // Goods available by region
    goodsByRegion: {
        southern: ['pineapples', 'vanilla', 'leather', 'coffee', 'oil', 'nuts', 'pepper', 'sugar', 'tobacco'],
        arabian: ['paprika', 'silk', 'mango', 'cinnamon', 'rugs', 'dates', 'saffron'],
        northern: ['beer', 'wine', 'grog', 'salt']
    },
    
    // Get region for a port
    getRegion: function(portName) {
        for (const [region, ports] of Object.entries(this.regions)) {
            if (ports.includes(portName)) return region;
        }
        return 'unknown';
    },
    
    // Check if port can buy goods
    canBuy: function(portName) {
        const portData = this.ports[portName];
        return portData && portData.canBuy === true;
    },
    
    // Check if port can sell goods
    canSell: function(portName) {
        const portData = this.ports[portName];
        return portData && portData.canSell === true;
    },
    
    // Get optimal sell destinations for a region's goods
    getSellDestinations: function(buyRegion) {
        switch(buyRegion) {
            case 'southern':
                return 'Northern ports (max prices)';
            case 'arabian':
                return 'Southern ports (max prices)';
            case 'northern':
                return 'Southern ports (max prices)';
            default:
                return 'Various ports';
        }
    },
    
    // Port data with trade recommendations
    ports: {
        // =========================================================================
        // SOUTHERN REGION PORTS (Buy Southern goods)
        // =========================================================================
        
        'Devios': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 29, isMax: false, maxPrice: 41 },
                cinnamon: { price: 28, isMax: false, maxPrice: 39 },
                saffron: { price: 44, isMax: false, maxPrice: 63 },
                silk: { price: 62, isMax: false, maxPrice: 88 },
                mango: { price: 14, isMax: false, maxPrice: 19 },
                paprika: { price: 18, isMax: false, maxPrice: 26 },
                dates: { price: 10, isMax: false, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'El Tigre': {
            region: 'southern',
            type: 'trading_port',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 },
                    { good: 'vanilla', price: 22, profitPerWeight: 2.29 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 },
                    { good: 'coffee', price: 25, profitPerWeight: 1.50 }
                ]
            },
            sell: {
                rugs: { price: 31, isMax: false, maxPrice: 41 },
                cinnamon: { price: 30, isMax: false, maxPrice: 39 },
                saffron: { price: 48, isMax: false, maxPrice: 63 },
                silk: { price: 68, isMax: false, maxPrice: 88 },
                mango: { price: 15, isMax: false, maxPrice: 19 },
                paprika: { price: 20, isMax: false, maxPrice: 26 },
                dates: { price: 11, isMax: false, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            },
            notes: ['Leather price elevated (25 vs 20) - buy leather elsewhere']
        },
        
        'San Cristobel': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 35, isMax: false, maxPrice: 41 },
                cinnamon: { price: 34, isMax: false, maxPrice: 39 },
                saffron: { price: 54, isMax: false, maxPrice: 63 },
                silk: { price: 76, isMax: false, maxPrice: 88 },
                mango: { price: 17, isMax: false, maxPrice: 19 },
                paprika: { price: 22, isMax: false, maxPrice: 26 },
                dates: { price: 12, isMax: false, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 30, isMax: false, maxPrice: 31 }
            }
        },
        
        'San Martinas': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 15, isMax: false, maxPrice: 16 },
                grog: { price: 15, isMax: false, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'South Bastion': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 5-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Bord Radel': {
            region: 'southern',
            type: 'trading_port',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Los Catuano': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 6-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Puerto Salada': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 6-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Santa Maria': {
            region: 'southern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 6-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 15, isMax: false, maxPrice: 16 },
                grog: { price: 15, isMax: false, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 30, isMax: false, maxPrice: 31 }
            }
        },
        
        // =========================================================================
        // ARABIAN REGION PORTS (Buy Arabian goods)
        // =========================================================================
        
        'Sharhat': {
            region: 'arabian',
            type: 'trading_port_transport',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 14, isMax: false, maxPrice: 19 },
                vanilla: { price: 27, isMax: false, maxPrice: 38 },
                leather: { price: 25, isMax: false, maxPrice: 34 },
                coffee: { price: 30, isMax: false, maxPrice: 43 },
                oil: { price: 16, isMax: false, maxPrice: 22 },
                nuts: { price: 11, isMax: false, maxPrice: 16 },
                pepper: { price: 25, isMax: false, maxPrice: 36 },
                sugar: { price: 36, isMax: false, maxPrice: 51 },
                tobacco: { price: 38, isMax: false, maxPrice: 55 },
                wine: { price: 15, isMax: false, maxPrice: 16 },
                grog: { price: 15, isMax: false, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 30, isMax: false, maxPrice: 31 }
            }
        },
        
        'Assab': {
            region: 'arabian',
            type: 'trading_port_transport',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 16, isMax: false, maxPrice: 19 },
                vanilla: { price: 31, isMax: false, maxPrice: 38 },
                leather: { price: 28, isMax: false, maxPrice: 34 },
                coffee: { price: 35, isMax: false, maxPrice: 43 },
                oil: { price: 18, isMax: false, maxPrice: 22 },
                nuts: { price: 13, isMax: false, maxPrice: 16 },
                pepper: { price: 29, isMax: false, maxPrice: 36 },
                sugar: { price: 42, isMax: false, maxPrice: 51 },
                tobacco: { price: 44, isMax: false, maxPrice: 55 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Al-Khalif': {
            region: 'arabian',
            type: 'trading_port_transport',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 16, isMax: false, maxPrice: 19 },
                vanilla: { price: 31, isMax: false, maxPrice: 38 },
                leather: { price: 28, isMax: false, maxPrice: 34 },
                coffee: { price: 35, isMax: false, maxPrice: 43 },
                oil: { price: 18, isMax: false, maxPrice: 22 },
                nuts: { price: 13, isMax: false, maxPrice: 16 },
                pepper: { price: 29, isMax: false, maxPrice: 36 },
                sugar: { price: 42, isMax: false, maxPrice: 51 },
                tobacco: { price: 44, isMax: false, maxPrice: 55 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'West Bastion': {
            region: 'arabian',
            type: 'city',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 16, isMax: false, maxPrice: 19 },
                vanilla: { price: 32, isMax: false, maxPrice: 38 },
                leather: { price: 29, isMax: false, maxPrice: 34 },
                coffee: { price: 36, isMax: false, maxPrice: 43 },
                oil: { price: 19, isMax: false, maxPrice: 22 },
                nuts: { price: 13, isMax: false, maxPrice: 16 },
                pepper: { price: 30, isMax: false, maxPrice: 36 },
                sugar: { price: 43, isMax: false, maxPrice: 51 },
                tobacco: { price: 46, isMax: false, maxPrice: 55 },
                wine: { price: 12, isMax: false, maxPrice: 16 },
                grog: { price: 12, isMax: false, maxPrice: 16 },
                beer: { price: 7, isMax: false, maxPrice: 9 },
                salt: { price: 24, isMax: false, maxPrice: 31 }
            }
        },
        
        'Masadora': {
            region: 'arabian',
            type: 'city',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 15, isMax: false, maxPrice: 19 },
                vanilla: { price: 29, isMax: false, maxPrice: 38 },
                leather: { price: 26, isMax: false, maxPrice: 34 },
                coffee: { price: 32, isMax: false, maxPrice: 43 },
                oil: { price: 17, isMax: false, maxPrice: 22 },
                nuts: { price: 12, isMax: false, maxPrice: 16 },
                pepper: { price: 27, isMax: false, maxPrice: 36 },
                sugar: { price: 39, isMax: false, maxPrice: 51 },
                tobacco: { price: 41, isMax: false, maxPrice: 55 },
                wine: { price: 14, isMax: false, maxPrice: 16 },
                grog: { price: 14, isMax: false, maxPrice: 16 },
                beer: { price: 8, isMax: false, maxPrice: 9 },
                salt: { price: 27, isMax: false, maxPrice: 31 }
            }
        },
        
        'Cursed City': {
            region: 'arabian',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 37, isMax: false, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 42, isMax: false, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 54, isMax: false, maxPrice: 55 },
                wine: { price: 11, isMax: false, maxPrice: 16 },
                grog: { price: 11, isMax: false, maxPrice: 16 },
                beer: { price: 6, isMax: false, maxPrice: 9 },
                salt: { price: 22, isMax: false, maxPrice: 31 }
            }
        },
        
        // =========================================================================
        // NORTHERN REGION PORTS (Buy Northern goods)
        // =========================================================================
        
        'Northside': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 5-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'North Bastion': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 37, isMax: false, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 42, isMax: false, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 15, isMax: false, maxPrice: 16 },
                pepper: { price: 35, isMax: false, maxPrice: 36 },
                sugar: { price: 50, isMax: false, maxPrice: 51 },
                tobacco: { price: 54, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Severoangelsk': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Gray Island': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 35, isMax: false, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Aldansk': {
            region: 'northern',
            type: 'trading_port',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Aruba': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Everston': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Oneg': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Nordberg': {
            region: 'northern',
            type: 'trading_port',
            canBuy: true,
            canSell: true,
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        'Nisogora': {
            region: 'northern',
            type: 'city',
            canBuy: true,
            canSell: true,
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ],
                large: [
                    { good: 'salt', price: 18, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, profitPerWeight: 1.40 }
                ]
            },
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 38, isMax: true, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 43, isMax: true, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 16, isMax: true, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 55, isMax: true, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 }
            }
        },
        
        // =========================================================================
        // SELL-ONLY PORTS (Cannot buy commodities, only sell)
        // =========================================================================
        
        'Gelbion': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            shallowWater: 'rates 3-7',
            sell: {
                pineapples: { price: 17, isMax: false, maxPrice: 19 },
                vanilla: { price: 33, isMax: false, maxPrice: 38 },
                leather: { price: 30, isMax: false, maxPrice: 34 },
                coffee: { price: 38, isMax: false, maxPrice: 43 },
                oil: { price: 20, isMax: false, maxPrice: 22 },
                nuts: { price: 14, isMax: false, maxPrice: 16 },
                pepper: { price: 32, isMax: false, maxPrice: 36 },
                sugar: { price: 45, isMax: false, maxPrice: 51 },
                tobacco: { price: 49, isMax: false, maxPrice: 55 },
                rugs: { price: 31, isMax: false, maxPrice: 41 },
                cinnamon: { price: 30, isMax: false, maxPrice: 39 },
                saffron: { price: 47, isMax: false, maxPrice: 63 },
                silk: { price: 67, isMax: false, maxPrice: 88 },
                mango: { price: 15, isMax: false, maxPrice: 19 },
                paprika: { price: 20, isMax: false, maxPrice: 26 },
                dates: { price: 11, isMax: false, maxPrice: 14 },
                wine: { price: 13, isMax: false, maxPrice: 16 },
                grog: { price: 13, isMax: false, maxPrice: 16 },
                beer: { price: 7, isMax: false, maxPrice: 9 },
                salt: { price: 26, isMax: false, maxPrice: 31 }
            }
        },
        
        'Surako': {
            region: 'sell_only',
            type: 'trading_port',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 18, isMax: false, maxPrice: 19 },
                vanilla: { price: 36, isMax: false, maxPrice: 38 },
                leather: { price: 33, isMax: false, maxPrice: 34 },
                coffee: { price: 41, isMax: false, maxPrice: 43 },
                oil: { price: 21, isMax: false, maxPrice: 22 },
                nuts: { price: 15, isMax: false, maxPrice: 16 },
                pepper: { price: 34, isMax: false, maxPrice: 36 },
                sugar: { price: 49, isMax: false, maxPrice: 51 },
                tobacco: { price: 52, isMax: false, maxPrice: 55 },
                rugs: { price: 28, isMax: false, maxPrice: 41 },
                cinnamon: { price: 27, isMax: false, maxPrice: 39 },
                saffron: { price: 43, isMax: false, maxPrice: 63 },
                silk: { price: 60, isMax: false, maxPrice: 88 },
                mango: { price: 14, isMax: false, maxPrice: 19 },
                paprika: { price: 18, isMax: false, maxPrice: 26 },
                dates: { price: 10, isMax: false, maxPrice: 14 },
                wine: { price: 14, isMax: false, maxPrice: 16 },
                grog: { price: 14, isMax: false, maxPrice: 16 },
                beer: { price: 8, isMax: false, maxPrice: 9 },
                salt: { price: 27, isMax: false, maxPrice: 31 }
            }
        },
        
        'Nevis': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 19, isMax: true, maxPrice: 19 },
                vanilla: { price: 37, isMax: false, maxPrice: 38 },
                leather: { price: 34, isMax: true, maxPrice: 34 },
                coffee: { price: 42, isMax: false, maxPrice: 43 },
                oil: { price: 22, isMax: true, maxPrice: 22 },
                nuts: { price: 15, isMax: false, maxPrice: 16 },
                pepper: { price: 36, isMax: true, maxPrice: 36 },
                sugar: { price: 51, isMax: true, maxPrice: 51 },
                tobacco: { price: 54, isMax: false, maxPrice: 55 },
                rugs: { price: 33, isMax: false, maxPrice: 41 },
                cinnamon: { price: 32, isMax: false, maxPrice: 39 },
                saffron: { price: 51, isMax: false, maxPrice: 63 },
                silk: { price: 72, isMax: false, maxPrice: 88 },
                mango: { price: 16, isMax: false, maxPrice: 19 },
                paprika: { price: 21, isMax: false, maxPrice: 26 },
                dates: { price: 12, isMax: false, maxPrice: 14 },
                wine: { price: 12, isMax: false, maxPrice: 16 },
                grog: { price: 12, isMax: false, maxPrice: 16 },
                beer: { price: 7, isMax: false, maxPrice: 9 },
                salt: { price: 23, isMax: false, maxPrice: 31 }
            }
        },
        
        'Thermopylae': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 18, isMax: false, maxPrice: 19 },
                vanilla: { price: 35, isMax: false, maxPrice: 38 },
                leather: { price: 32, isMax: false, maxPrice: 34 },
                coffee: { price: 40, isMax: false, maxPrice: 43 },
                oil: { price: 21, isMax: false, maxPrice: 22 },
                nuts: { price: 15, isMax: false, maxPrice: 16 },
                pepper: { price: 33, isMax: false, maxPrice: 36 },
                sugar: { price: 47, isMax: false, maxPrice: 51 },
                tobacco: { price: 51, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 11, isMax: false, maxPrice: 16 },
                grog: { price: 11, isMax: false, maxPrice: 16 },
                beer: { price: 6, isMax: false, maxPrice: 9 },
                salt: { price: 21, isMax: false, maxPrice: 31 }
            }
        },
        
        'Fiji': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            shallowWater: 'rates 6-7',
            sell: {
                pineapples: { price: 17, isMax: false, maxPrice: 19 },
                vanilla: { price: 34, isMax: false, maxPrice: 38 },
                leather: { price: 31, isMax: false, maxPrice: 34 },
                coffee: { price: 39, isMax: false, maxPrice: 43 },
                oil: { price: 20, isMax: false, maxPrice: 22 },
                nuts: { price: 14, isMax: false, maxPrice: 16 },
                pepper: { price: 32, isMax: false, maxPrice: 36 },
                sugar: { price: 46, isMax: false, maxPrice: 51 },
                tobacco: { price: 49, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 11, isMax: false, maxPrice: 16 },
                grog: { price: 11, isMax: false, maxPrice: 16 },
                beer: { price: 6, isMax: false, maxPrice: 9 },
                salt: { price: 22, isMax: false, maxPrice: 31 }
            }
        },
        
        'Brandport': {
            region: 'sell_only',
            type: 'trading_port',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 17, isMax: false, maxPrice: 19 },
                vanilla: { price: 33, isMax: false, maxPrice: 38 },
                leather: { price: 30, isMax: false, maxPrice: 34 },
                coffee: { price: 38, isMax: false, maxPrice: 43 },
                oil: { price: 20, isMax: false, maxPrice: 22 },
                nuts: { price: 14, isMax: false, maxPrice: 16 },
                pepper: { price: 32, isMax: false, maxPrice: 36 },
                sugar: { price: 45, isMax: false, maxPrice: 51 },
                tobacco: { price: 49, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 11, isMax: false, maxPrice: 16 },
                grog: { price: 11, isMax: false, maxPrice: 16 },
                beer: { price: 6, isMax: false, maxPrice: 9 },
                salt: { price: 22, isMax: false, maxPrice: 31 }
            }
        },
        
        'Freedom Bay': {
            region: 'sell_only',
            type: 'trading_port',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 16, isMax: false, maxPrice: 19 },
                vanilla: { price: 33, isMax: false, maxPrice: 38 },
                leather: { price: 30, isMax: false, maxPrice: 34 },
                coffee: { price: 38, isMax: false, maxPrice: 43 },
                oil: { price: 19, isMax: false, maxPrice: 22 },
                nuts: { price: 14, isMax: false, maxPrice: 16 },
                pepper: { price: 31, isMax: false, maxPrice: 36 },
                sugar: { price: 44, isMax: false, maxPrice: 51 },
                tobacco: { price: 47, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 11, isMax: false, maxPrice: 16 },
                grog: { price: 11, isMax: false, maxPrice: 16 },
                beer: { price: 6, isMax: false, maxPrice: 9 },
                salt: { price: 22, isMax: false, maxPrice: 31 }
            }
        },
        
        'La Navidad': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 15, isMax: false, maxPrice: 19 },
                vanilla: { price: 29, isMax: false, maxPrice: 38 },
                leather: { price: 26, isMax: false, maxPrice: 34 },
                coffee: { price: 33, isMax: false, maxPrice: 43 },
                oil: { price: 17, isMax: false, maxPrice: 22 },
                nuts: { price: 12, isMax: false, maxPrice: 16 },
                pepper: { price: 28, isMax: false, maxPrice: 36 },
                sugar: { price: 39, isMax: false, maxPrice: 51 },
                tobacco: { price: 42, isMax: false, maxPrice: 55 },
                rugs: { price: 41, isMax: true, maxPrice: 41 },
                cinnamon: { price: 39, isMax: true, maxPrice: 39 },
                saffron: { price: 63, isMax: true, maxPrice: 63 },
                silk: { price: 88, isMax: true, maxPrice: 88 },
                mango: { price: 19, isMax: true, maxPrice: 19 },
                paprika: { price: 26, isMax: true, maxPrice: 26 },
                dates: { price: 14, isMax: true, maxPrice: 14 },
                wine: { price: 14, isMax: false, maxPrice: 16 },
                grog: { price: 14, isMax: false, maxPrice: 16 },
                beer: { price: 8, isMax: false, maxPrice: 9 },
                salt: { price: 27, isMax: false, maxPrice: 31 }
            }
        },
        
        'Charleston': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 14, isMax: false, maxPrice: 19 },
                vanilla: { price: 27, isMax: false, maxPrice: 38 },
                leather: { price: 25, isMax: false, maxPrice: 34 },
                coffee: { price: 31, isMax: false, maxPrice: 43 },
                oil: { price: 16, isMax: false, maxPrice: 22 },
                nuts: { price: 11, isMax: false, maxPrice: 16 },
                pepper: { price: 26, isMax: false, maxPrice: 36 },
                sugar: { price: 37, isMax: false, maxPrice: 51 },
                tobacco: { price: 39, isMax: false, maxPrice: 55 },
                rugs: { price: 30, isMax: false, maxPrice: 41 },
                cinnamon: { price: 29, isMax: false, maxPrice: 39 },
                saffron: { price: 46, isMax: false, maxPrice: 63 },
                silk: { price: 46, isMax: false, maxPrice: 88 },
                mango: { price: 14, isMax: false, maxPrice: 19 },
                paprika: { price: 19, isMax: false, maxPrice: 26 },
                dates: { price: 10, isMax: false, maxPrice: 14 },
                wine: { price: 16, isMax: true, maxPrice: 16 },
                grog: { price: 16, isMax: true, maxPrice: 16 },
                beer: { price: 9, isMax: true, maxPrice: 9 },
                salt: { price: 31, isMax: true, maxPrice: 31 }
            }
        },
        
        'Bridgetown': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 15, isMax: false, maxPrice: 19 },
                vanilla: { price: 29, isMax: false, maxPrice: 38 },
                leather: { price: 27, isMax: false, maxPrice: 34 },
                coffee: { price: 33, isMax: false, maxPrice: 43 },
                oil: { price: 18, isMax: false, maxPrice: 22 },
                nuts: { price: 12, isMax: false, maxPrice: 16 },
                pepper: { price: 28, isMax: false, maxPrice: 36 },
                sugar: { price: 40, isMax: false, maxPrice: 51 },
                tobacco: { price: 43, isMax: false, maxPrice: 55 },
                rugs: { price: 28, isMax: false, maxPrice: 41 },
                cinnamon: { price: 27, isMax: false, maxPrice: 39 },
                saffron: { price: 43, isMax: false, maxPrice: 63 },
                silk: { price: 61, isMax: false, maxPrice: 88 },
                mango: { price: 13, isMax: false, maxPrice: 19 },
                paprika: { price: 18, isMax: false, maxPrice: 26 },
                dates: { price: 10, isMax: false, maxPrice: 14 },
                wine: { price: 14, isMax: false, maxPrice: 16 },
                grog: { price: 14, isMax: false, maxPrice: 16 },
                beer: { price: 8, isMax: false, maxPrice: 9 },
                salt: { price: 28, isMax: false, maxPrice: 31 }
            }
        },
        
        'Laguna Blanco': {
            region: 'sell_only',
            type: 'city',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 15, isMax: false, maxPrice: 19 },
                vanilla: { price: 30, isMax: false, maxPrice: 38 },
                leather: { price: 27, isMax: false, maxPrice: 34 },
                coffee: { price: 34, isMax: false, maxPrice: 43 },
                oil: { price: 18, isMax: false, maxPrice: 22 },
                nuts: { price: 13, isMax: false, maxPrice: 16 },
                pepper: { price: 29, isMax: false, maxPrice: 36 },
                sugar: { price: 41, isMax: false, maxPrice: 51 },
                tobacco: { price: 44, isMax: false, maxPrice: 55 },
                rugs: { price: 35, isMax: false, maxPrice: 41 },
                cinnamon: { price: 33, isMax: false, maxPrice: 39 },
                saffron: { price: 53, isMax: false, maxPrice: 63 },
                silk: { price: 75, isMax: false, maxPrice: 88 },
                mango: { price: 16, isMax: false, maxPrice: 19 },
                paprika: { price: 22, isMax: false, maxPrice: 26 },
                dates: { price: 12, isMax: false, maxPrice: 14 },
                wine: { price: 15, isMax: false, maxPrice: 16 },
                grog: { price: 15, isMax: false, maxPrice: 16 },
                beer: { price: 8, isMax: false, maxPrice: 9 },
                salt: { price: 29, isMax: false, maxPrice: 31 }
            }
        },
        
        'St. John': {
            region: 'sell_only',
            type: 'trading_port',
            canBuy: false,
            canSell: true,
            sell: {
                pineapples: { price: 17, isMax: false, maxPrice: 19 },
                vanilla: { price: 33, isMax: false, maxPrice: 38 },
                leather: { price: 30, isMax: false, maxPrice: 34 },
                coffee: { price: 38, isMax: false, maxPrice: 43 },
                oil: { price: 20, isMax: false, maxPrice: 22 },
                nuts: { price: 14, isMax: false, maxPrice: 16 },
                pepper: { price: 32, isMax: false, maxPrice: 36 },
                sugar: { price: 45, isMax: false, maxPrice: 51 },
                tobacco: { price: 48, isMax: false, maxPrice: 55 },
                rugs: { price: 39, isMax: false, maxPrice: 41 },
                cinnamon: { price: 37, isMax: false, maxPrice: 39 },
                saffron: { price: 59, isMax: false, maxPrice: 63 },
                silk: { price: 83, isMax: false, maxPrice: 88 },
                mango: { price: 18, isMax: false, maxPrice: 19 },
                paprika: { price: 24, isMax: false, maxPrice: 26 },
                dates: { price: 13, isMax: false, maxPrice: 14 },
                wine: { price: 13, isMax: false, maxPrice: 16 },
                grog: { price: 13, isMax: false, maxPrice: 16 },
                beer: { price: 7, isMax: false, maxPrice: 9 },
                salt: { price: 25, isMax: false, maxPrice: 31 }
            }
        },
        
        // =========================================================================
        // NO TRADE PORTS (Pirate Strongholds - excluded from trade calculator)
        // =========================================================================
        
        'Tortuga': {
            region: 'no_trade',
            type: 'pirate_stronghold',
            canBuy: false,
            canSell: false,
            peaceFlagAllowed: false
        },
        
        'Pirate City': {
            region: 'no_trade',
            type: 'pirate_stronghold',
            canBuy: false,
            canSell: false,
            peaceFlagAllowed: false
        },
        
        'Corsa-Nois Bay': {
            region: 'no_trade',
            type: 'pirate_stronghold',
            canBuy: false,
            canSell: false,
            peaceFlagAllowed: false
        },
        
        'Naabad Stronghold': {
            region: 'no_trade',
            type: 'pirate_stronghold',
            canBuy: false,
            canSell: false,
            peaceFlagAllowed: false
        },
        
        'Freebooter Bay': {
            region: 'no_trade',
            type: 'pirate_stronghold',
            canBuy: false,
            canSell: false,
            peaceFlagAllowed: false,
            shallowWater: 'rates 6-7'
        }
    }
};