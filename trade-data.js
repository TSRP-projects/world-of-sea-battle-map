// Trade Data for WOSB Map
// Converted from YAML - Last Updated: 2024-12-27

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
        southern: ['Devios', 'Los Catuano', 'Puerto Salada', 'Santa Maria', 'El Tigre', 'Pirate City', 'Bord Radel', 'San Cristobel', 'San Martinas', 'South Bastion'],
        northern: ['Aldansk', 'Corsa-Nois Bay', 'Nisogora', 'Northside', 'Oneg', 'Gray Island', 'Everston', 'Aruba', 'Severoangelsk', 'North Bastion', 'Gelbion'],
        eastern: ['Cursed City', 'West Bastion', 'Al-Khalif', 'Assab', 'Masadora', 'Sharhat', 'Naabad Stronghold'],
        transitional: ['Surako', 'Brandport', 'Freedom Bay', 'Fiji', 'Freebooter Bay', 'La Navidad', 'Charleston', 'Bridgetown', 'Laguna Blanco', 'Nevis', 'Thermopylae', 'Tortuga']
    },
    
    // Get region for a port
    getRegion: function(portName) {
        for (const [region, ports] of Object.entries(this.regions)) {
            if (ports.includes(portName)) return region;
        }
        return 'unknown';
    },
    
    // Check if destination qualifies as "Any Northern port"
    isNorthernPort: function(portName) {
        return this.regions.northern.includes(portName);
    },
    
    // Check if destination qualifies as "Any Southern port"
    isSouthernPort: function(portName) {
        return this.regions.southern.includes(portName);
    },
    
    // Port data with trade recommendations
    ports: {
        // SOUTHERN REGION
        'Devios': {
            region: 'southern',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 29, maxPrice: 41 },
                cinnamon: { localPrice: 28, maxPrice: 39 },
                saffron: { localPrice: 44, maxPrice: 63 },
                silk: { localPrice: 62, maxPrice: 88 }
            }
        },
        
        'Los Catuano': {
            region: 'southern',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Puerto Salada': {
            region: 'southern',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Santa Maria': {
            region: 'southern',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'El Tigre': {
            region: 'southern',
            type: 'trading_port',
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 },
                    { good: 'vanilla', price: 22, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 2.29 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 },
                    { good: 'coffee', price: 25, sellAt: 'Any Northern port', sellPrice: 43, profitPerWeight: 1.50 }
                ]
            },
            sell: {
                rugs: { localPrice: 31, maxPrice: 41 },
                cinnamon: { localPrice: 30, maxPrice: 39 },
                saffron: { localPrice: 48, maxPrice: 63 },
                silk: { localPrice: 68, maxPrice: 88 }
            },
            notes: ['Leather price elevated (25 vs 20) - not optimal for leather']
        },
        
        'Pirate City': {
            region: 'southern',
            type: 'pirate_stronghold',
            peaceFlagAllowed: false,
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 39, maxPrice: 41 },
                cinnamon: { localPrice: 37, maxPrice: 39 },
                saffron: { localPrice: 59, maxPrice: 63 },
                silk: { localPrice: 83, maxPrice: 88 }
            }
        },
        
        'Bord Radel': {
            region: 'southern',
            type: 'trading_port',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'San Cristobel': {
            region: 'southern',
            type: 'city',
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 35, maxPrice: 41 },
                cinnamon: { localPrice: 34, maxPrice: 39 },
                saffron: { localPrice: 54, maxPrice: 63 },
                silk: { localPrice: 76, maxPrice: 88 }
            }
        },
        
        'San Martinas': {
            region: 'southern',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'South Bastion': {
            region: 'southern',
            type: 'city',
            shallowWater: 'rates 5-7',
            buy: {
                small: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'pepper', price: 21, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 2.50 }
                ],
                medium: [
                    { good: 'oil', price: 13, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 3.00 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 }
                ],
                large: [
                    { good: 'tobacco', price: 32, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.64 },
                    { good: 'leather', price: 20, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.80 },
                    { good: 'sugar', price: 30, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 1.05 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        // NORTHERN REGION
        'Aldansk': {
            region: 'northern',
            type: 'trading_port',
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'mango', price: 19, sellAt: 'Devios', sellPrice: 14, note: 'Check price variance' }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Corsa-Nois Bay': {
            region: 'northern',
            type: 'pirate_stronghold',
            peaceFlagAllowed: false,
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 39, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 0.33 },
                    { good: 'cinnamon', price: 37, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 0.29 }
                ],
                large: [
                    { good: 'silk', price: 83, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 0.25 },
                    { good: 'saffron', price: 59, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 0.27 },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Nisogora': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 28, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.17 },
                    { good: 'cinnamon', price: 27, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 1.71 }
                ],
                large: [
                    { good: 'silk', price: 60, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.40 },
                    { good: 'saffron', price: 43, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.33 },
                    { good: 'rugs', price: 28, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.17 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            },
            notes: ['Excellent buy location for Rugs, Cinnamon, Silk, Saffron at discounted Northern prices']
        },
        
        'Northside': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 5-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Oneg': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 37, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 0.67 },
                    { good: 'cinnamon', price: 35, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 0.57 }
                ],
                large: [
                    { good: 'silk', price: 79, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 0.45 },
                    { good: 'saffron', price: 56, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 0.47 },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Gray Island': {
            region: 'northern',
            type: 'city',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 35, maxPrice: 36 },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Everston': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 39, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 0.33 },
                    { good: 'cinnamon', price: 37, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 0.29 }
                ],
                large: [
                    { good: 'silk', price: 84, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 0.20 },
                    { good: 'saffron', price: 60, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 0.20 },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Aruba': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 2-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'Severoangelsk': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            }
        },
        
        'North Bastion': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 4-7',
            buy: {
                small: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'wine', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 2.33 },
                    { good: 'grog', price: 9, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 18, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.60 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 37, maxPrice: 38 },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 42, maxPrice: 43 },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 35, maxPrice: 36 },
                sugar: { localPrice: 50, maxPrice: 51 },
                tobacco: { localPrice: 54, maxPrice: 55 }
            }
        },
        
        'Gelbion': {
            region: 'northern',
            type: 'city',
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'salt', price: 22, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.80 },
                    { good: 'wine', price: 11, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.67 },
                    { good: 'grog', price: 11, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.00 }
                ],
                medium: [
                    { good: 'rugs', price: 31, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 1.67 },
                    { good: 'cinnamon', price: 30, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 1.29 },
                    { good: 'salt', price: 22, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.80 }
                ],
                large: [
                    { good: 'silk', price: 66, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.10 },
                    { good: 'saffron', price: 47, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.07 },
                    { good: 'rugs', price: 31, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 1.67 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 38, maxPrice: 38, note: 'Maximum price location' },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 43, maxPrice: 43, note: 'Maximum price location' },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 55, maxPrice: 55, note: 'Maximum price location' }
            },
            notes: ['Prices slightly elevated compared to other Northern ports', 'Good location for buying Rugs, Silk, Saffron at discount']
        },
        
        // EASTERN REGION
        'Cursed City': {
            region: 'eastern',
            type: 'city',
            shallowWater: 'rates 3-7',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'salt', price: 21, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.00 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 37, maxPrice: 38 },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 42, maxPrice: 43 },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 54, maxPrice: 55 }
            },
            notes: ['EXCELLENT buy location for Rugs, Cinnamon, Silk, Saffron at MINIMUM Eastern prices', 'Best profit margins in the Eastern region']
        },
        
        'West Bastion': {
            region: 'eastern',
            type: 'city',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 16, maxPrice: 19 },
                vanilla: { localPrice: 32, maxPrice: 38 },
                leather: { localPrice: 29, maxPrice: 34 },
                coffee: { localPrice: 36, maxPrice: 43 },
                oil: { localPrice: 19, maxPrice: 22 },
                pepper: { localPrice: 30, maxPrice: 36 },
                sugar: { localPrice: 43, maxPrice: 51 },
                tobacco: { localPrice: 46, maxPrice: 55 }
            },
            notes: ['Same excellent prices as Cursed City for Rugs, Cinnamon, Silk, Saffron']
        },
        
        'Al-Khalif': {
            region: 'eastern',
            type: 'trading_port_transport',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 16, maxPrice: 19 },
                vanilla: { localPrice: 31, maxPrice: 38 },
                leather: { localPrice: 28, maxPrice: 34 },
                coffee: { localPrice: 35, maxPrice: 43 },
                oil: { localPrice: 18, maxPrice: 22 },
                pepper: { localPrice: 29, maxPrice: 36 },
                sugar: { localPrice: 42, maxPrice: 51 },
                tobacco: { localPrice: 44, maxPrice: 55 }
            }
        },
        
        'Assab': {
            region: 'eastern',
            type: 'trading_port_transport',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 16, maxPrice: 19 },
                vanilla: { localPrice: 31, maxPrice: 38 },
                leather: { localPrice: 28, maxPrice: 34 },
                coffee: { localPrice: 35, maxPrice: 43 },
                oil: { localPrice: 18, maxPrice: 22 },
                pepper: { localPrice: 29, maxPrice: 36 },
                sugar: { localPrice: 42, maxPrice: 51 },
                tobacco: { localPrice: 44, maxPrice: 55 }
            }
        },
        
        'Masadora': {
            region: 'eastern',
            type: 'city',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 15, maxPrice: 19 },
                vanilla: { localPrice: 29, maxPrice: 38 },
                leather: { localPrice: 26, maxPrice: 34 },
                coffee: { localPrice: 32, maxPrice: 43 },
                oil: { localPrice: 17, maxPrice: 22 },
                pepper: { localPrice: 27, maxPrice: 36 },
                sugar: { localPrice: 39, maxPrice: 51 },
                tobacco: { localPrice: 41, maxPrice: 55 }
            }
        },
        
        'Sharhat': {
            region: 'eastern',
            type: 'trading_port_transport',
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 14, maxPrice: 19 },
                vanilla: { localPrice: 27, maxPrice: 38 },
                leather: { localPrice: 25, maxPrice: 34 },
                coffee: { localPrice: 30, maxPrice: 43 },
                oil: { localPrice: 16, maxPrice: 22 },
                pepper: { localPrice: 25, maxPrice: 36 },
                sugar: { localPrice: 36, maxPrice: 51 },
                tobacco: { localPrice: 38, maxPrice: 55 }
            }
        },
        
        'Naabad Stronghold': {
            region: 'eastern',
            type: 'pirate_stronghold',
            peaceFlagAllowed: false,
            buy: {
                small: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'mango', price: 11, sellAt: 'Devios', sellPrice: 14, profitPerWeight: 0.75 }
                ],
                medium: [
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 },
                    { good: 'cinnamon', price: 23, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 2.29 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 }
                ],
                large: [
                    { good: 'silk', price: 52, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.80 },
                    { good: 'saffron', price: 37, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.73 },
                    { good: 'rugs', price: 24, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.83 }
                ]
            },
            sell: {
                pineapples: { localPrice: 17, maxPrice: 19 },
                vanilla: { localPrice: 33, maxPrice: 38 },
                leather: { localPrice: 30, maxPrice: 34 },
                coffee: { localPrice: 37, maxPrice: 43 },
                oil: { localPrice: 19, maxPrice: 22 },
                pepper: { localPrice: 31, maxPrice: 36 },
                sugar: { localPrice: 44, maxPrice: 51 },
                tobacco: { localPrice: 47, maxPrice: 55 }
            }
        },
        
        // TRANSITIONAL REGION
        'Surako': {
            region: 'transitional',
            type: 'trading_port',
            buy: {
                small: [
                    { good: 'rugs', price: 28, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.17 },
                    { good: 'cinnamon', price: 27, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 1.71 },
                    { good: 'salt', price: 24, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.40 }
                ],
                medium: [
                    { good: 'rugs', price: 28, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.17 },
                    { good: 'cinnamon', price: 27, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 1.71 },
                    { good: 'saffron', price: 43, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.33 }
                ],
                large: [
                    { good: 'silk', price: 60, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 1.40 },
                    { good: 'saffron', price: 43, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 1.33 },
                    { good: 'rugs', price: 28, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 2.17 }
                ]
            },
            sell: {
                pineapples: { localPrice: 18, maxPrice: 19 },
                vanilla: { localPrice: 36, maxPrice: 38 },
                leather: { localPrice: 33, maxPrice: 34 },
                coffee: { localPrice: 41, maxPrice: 43 },
                oil: { localPrice: 21, maxPrice: 22 },
                pepper: { localPrice: 34, maxPrice: 36 },
                sugar: { localPrice: 49, maxPrice: 51 },
                tobacco: { localPrice: 52, maxPrice: 55 }
            }
        },
        
        'Brandport': {
            region: 'transitional',
            type: 'trading_port',
            buy: {
                small: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'pepper', price: 28, sellAt: 'Any Northern port', sellPrice: 36, profitPerWeight: 1.33 }
                ],
                medium: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 }
                ],
                large: [
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'sugar', price: 39, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.60 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Freedom Bay': {
            region: 'transitional',
            type: 'trading_port',
            buy: {
                small: [
                    { good: 'oil', price: 19, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.00 },
                    { good: 'leather', price: 30, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 0.80 },
                    { good: 'vanilla', price: 33, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 0.71 }
                ],
                medium: [
                    { good: 'oil', price: 19, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.00 },
                    { good: 'leather', price: 30, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 0.80 },
                    { good: 'tobacco', price: 47, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.57 }
                ],
                large: [
                    { good: 'tobacco', price: 47, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.57 },
                    { good: 'sugar', price: 44, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.35 },
                    { good: 'leather', price: 30, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 0.80 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Fiji': {
            region: 'transitional',
            type: 'city',
            shallowWater: 'rates 6-7',
            buy: {
                small: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'vanilla', price: 29, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.29 }
                ],
                medium: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 }
                ],
                large: [
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'sugar', price: 40, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.55 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Freebooter Bay': {
            region: 'transitional',
            type: 'pirate_stronghold',
            peaceFlagAllowed: false,
            shallowWater: 'rates 6-7',
            buy: {
                small: [
                    { good: 'oil', price: 15, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 2.33 },
                    { good: 'leather', price: 23, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.20 },
                    { good: 'vanilla', price: 25, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.86 }
                ],
                medium: [
                    { good: 'oil', price: 15, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 2.33 },
                    { good: 'leather', price: 23, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.20 },
                    { good: 'tobacco', price: 37, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.29 }
                ],
                large: [
                    { good: 'tobacco', price: 37, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.29 },
                    { good: 'leather', price: 23, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 2.20 },
                    { good: 'sugar', price: 34, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.85 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            },
            notes: ['Excellent transitional location with discounted Southern goods']
        },
        
        'La Navidad': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'vanilla', price: 29, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.29 }
                ],
                medium: [
                    { good: 'oil', price: 17, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.67 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 }
                ],
                large: [
                    { good: 'tobacco', price: 42, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.93 },
                    { good: 'leather', price: 26, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.60 },
                    { good: 'sugar', price: 39, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.60 }
                ]
            },
            sell: {
                rugs: { localPrice: 41, maxPrice: 41, note: 'Maximum price location' },
                cinnamon: { localPrice: 39, maxPrice: 39, note: 'Maximum price location' },
                saffron: { localPrice: 63, maxPrice: 63, note: 'Maximum price location' },
                silk: { localPrice: 88, maxPrice: 88, note: 'Maximum price location' }
            }
        },
        
        'Charleston': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 16, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 2.00 },
                    { good: 'leather', price: 25, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.80 },
                    { good: 'vanilla', price: 27, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.57 }
                ],
                medium: [
                    { good: 'oil', price: 16, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 2.00 },
                    { good: 'leather', price: 25, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.80 },
                    { good: 'tobacco', price: 39, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.14 }
                ],
                large: [
                    { good: 'tobacco', price: 39, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 1.14 },
                    { good: 'leather', price: 25, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.80 },
                    { good: 'sugar', price: 37, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.70 }
                ]
            },
            sell: {
                rugs: { localPrice: 30, maxPrice: 41 },
                cinnamon: { localPrice: 29, maxPrice: 39 },
                saffron: { localPrice: 46, maxPrice: 63 },
                silk: { localPrice: 46, maxPrice: 88 }
            }
        },
        
        'Bridgetown': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 18, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.33 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'vanilla', price: 29, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.29 }
                ],
                medium: [
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'oil', price: 18, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.33 },
                    { good: 'tobacco', price: 43, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.86 }
                ],
                large: [
                    { good: 'tobacco', price: 43, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.86 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'sugar', price: 40, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.55 }
                ]
            },
            sell: {
                rugs: { localPrice: 28, maxPrice: 41 },
                cinnamon: { localPrice: 27, maxPrice: 39 },
                saffron: { localPrice: 43, maxPrice: 63 },
                silk: { localPrice: 61, maxPrice: 88 }
            }
        },
        
        'Laguna Blanco': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'oil', price: 18, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.33 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'vanilla', price: 30, sellAt: 'Any Northern port', sellPrice: 38, profitPerWeight: 1.14 }
                ],
                medium: [
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'oil', price: 18, sellAt: 'Any Northern port', sellPrice: 22, profitPerWeight: 1.33 },
                    { good: 'tobacco', price: 44, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.79 }
                ],
                large: [
                    { good: 'tobacco', price: 44, sellAt: 'Any Northern port', sellPrice: 55, profitPerWeight: 0.79 },
                    { good: 'leather', price: 27, sellAt: 'Any Northern port', sellPrice: 34, profitPerWeight: 1.40 },
                    { good: 'sugar', price: 41, sellAt: 'Any Northern port', sellPrice: 51, profitPerWeight: 0.50 }
                ]
            },
            sell: {
                rugs: { localPrice: 35, maxPrice: 41 },
                cinnamon: { localPrice: 33, maxPrice: 39 },
                saffron: { localPrice: 53, maxPrice: 63 },
                silk: { localPrice: 75, maxPrice: 88 }
            }
        },
        
        'Nevis': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'salt', price: 23, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.60 },
                    { good: 'wine', price: 12, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.33 },
                    { good: 'rugs', price: 33, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 1.33 }
                ],
                medium: [
                    { good: 'rugs', price: 33, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 1.33 },
                    { good: 'cinnamon', price: 32, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 1.00 },
                    { good: 'salt', price: 23, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.60 }
                ],
                large: [
                    { good: 'silk', price: 72, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 0.80 },
                    { good: 'saffron', price: 51, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 0.80 },
                    { good: 'rugs', price: 33, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 1.33 }
                ]
            },
            sell: {
                pineapples: { localPrice: 19, maxPrice: 19, note: 'Maximum price location' },
                vanilla: { localPrice: 37, maxPrice: 38 },
                leather: { localPrice: 34, maxPrice: 34, note: 'Maximum price location' },
                coffee: { localPrice: 42, maxPrice: 43 },
                oil: { localPrice: 22, maxPrice: 22, note: 'Maximum price location' },
                pepper: { localPrice: 36, maxPrice: 36, note: 'Maximum price location' },
                sugar: { localPrice: 51, maxPrice: 51, note: 'Maximum price location' },
                tobacco: { localPrice: 54, maxPrice: 55 }
            }
        },
        
        'Thermopylae': {
            region: 'transitional',
            type: 'city',
            buy: {
                small: [
                    { good: 'salt', price: 21, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.00 },
                    { good: 'wine', price: 11, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.67 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' }
                ],
                medium: [
                    { good: 'salt', price: 21, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.00 },
                    { good: 'rugs', price: 41, sellAt: 'Any Southern port', sellPrice: 41, note: 'Already at max' },
                    { good: 'cinnamon', price: 39, sellAt: 'Any Southern port', sellPrice: 39, note: 'Already at max' }
                ],
                large: [
                    { good: 'silk', price: 88, sellAt: 'Any Southern port', sellPrice: 88, note: 'Already at max' },
                    { good: 'saffron', price: 63, sellAt: 'Any Southern port', sellPrice: 63, note: 'Already at max' },
                    { good: 'salt', price: 21, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 2.00 }
                ]
            },
            sell: {
                pineapples: { localPrice: 18, maxPrice: 19 },
                vanilla: { localPrice: 35, maxPrice: 38 },
                leather: { localPrice: 32, maxPrice: 34 },
                coffee: { localPrice: 40, maxPrice: 43 },
                oil: { localPrice: 21, maxPrice: 22 },
                pepper: { localPrice: 33, maxPrice: 36 },
                sugar: { localPrice: 47, maxPrice: 51 },
                tobacco: { localPrice: 51, maxPrice: 55 }
            }
        },
        
        'Tortuga': {
            region: 'transitional',
            type: 'pirate_stronghold',
            peaceFlagAllowed: false,
            buy: {
                small: [
                    { good: 'salt', price: 25, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.20 },
                    { good: 'wine', price: 13, sellAt: 'Any Southern port', sellPrice: 16, profitPerWeight: 1.00 },
                    { good: 'rugs', price: 39, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 0.33 }
                ],
                medium: [
                    { good: 'rugs', price: 39, sellAt: 'Southern max ports', sellPrice: 41, profitPerWeight: 0.33 },
                    { good: 'cinnamon', price: 37, sellAt: 'Southern max ports', sellPrice: 39, profitPerWeight: 0.29 },
                    { good: 'salt', price: 25, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.20 }
                ],
                large: [
                    { good: 'silk', price: 83, sellAt: 'Southern max ports', sellPrice: 88, profitPerWeight: 0.25 },
                    { good: 'saffron', price: 59, sellAt: 'Southern max ports', sellPrice: 63, profitPerWeight: 0.27 },
                    { good: 'salt', price: 25, sellAt: 'Any Southern port', sellPrice: 31, profitPerWeight: 1.20 }
                ]
            },
            sell: {
                pineapples: { localPrice: 17, maxPrice: 19 },
                vanilla: { localPrice: 33, maxPrice: 38 },
                leather: { localPrice: 30, maxPrice: 34 },
                coffee: { localPrice: 38, maxPrice: 43 },
                oil: { localPrice: 20, maxPrice: 22 },
                pepper: { localPrice: 32, maxPrice: 36 },
                sugar: { localPrice: 45, maxPrice: 51 },
                tobacco: { localPrice: 48, maxPrice: 55 }
            }
        }
    }
};