const structuresroutines = {
    "Structure": ["Task"],
    "Ammunition Factory": ["Flame Ammo", "250mm", "3C Rocket", "4C Rocket", "75mm", "94.5mm", "300mm", "120mm", "150mm"],
    "Coal Harvester": ["Harvest Coal"],
    "Coal Refinery": ["Basic Coke", "Coke Furnace", "Coal Liquefier", "Advanced Coal Liquefier"],
    "Component Harvester": ["Harvest Components", "Harvest Damaged Components"],
    "Large Assembly Factory": ["Factory Enabled", "Factory Disabled"],
    "Light Vehicle Assembly Station": ["Station Enabled", "Station Disabled"],
    "Maintenance Tunnel": ["Basic Garrison Supplies"],
    "Materials Factory": ["Basic Construction Materials", "Assembly Materials 1", "Assembly Materials 2", "Metal Press Bulk Construction Materials", "Smelter Bulk Construction Materials", "Scrap for Sandbags", "Scrap for Barbed Wire"],
    "Metalworks Factory": ["Basic Processed Construction Materials", "Basic Pipe", "Assembly Materials 4", "Assembly Materials 3", "Furnace Bulk Processed Construction Materials", "Processed Construction Materials and Metal Beams", "Damaged Components for Components", "Steel Construction Materials", "Bulk Steel Construction Materials", "Assembly Materials 5"],
    "Oil Refinery": ["Basic Petrol", "Reformer Petrol", "Cracking Unit Heavy Oil", "Petrochemical Plant Enriched Oil"],
    "Oil Well": ["Basic Oil", "Electric Oil", "Electric Oil Manual", "Fracking Oil", "Fracking Oil Manual"],
    "Power Plant": ["Diesel Power", "Petrol Power"],
    "Power Station": ["Oil Power", "Coal Power", "Heavy Oil Power", "Coke Power"],
    "Scrap Harvester": ["Harvest Scrap"],
    "Stationary Crane": ["Crane Enabled", "Crane Disabled"],
    "Sulfur Harvester": ["Harvest Sulfur"],
    "Water Pump": ["Basic Water", "Electric Water", "Electric Water Manual"],
}

const routinevalues = {
    "Task": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Flame Ammo": [0, 4, 0, 0, 0, 0, 0, 0, -2.4, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2.4, 0, 0, 0, 0, 0, 0],
    "250mm": [0, 4, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0, 0, 0],
    "3C Rocket": [0, 4, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2.4, 0, 0, 0, 0, 0, 0],
    "4C Rocket": [0, 4, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2.4, 0, 0, 0, 0, 0, 0],
    "75mm": [0, 4, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0],
    "94.5mm": [0, 4, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4.8, 0, 0, 0, 0, 0, 0],
    "300mm": [0, 6, 0, 0, 0, 0, 0, 0, -9.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, -14.4, 0, 0, 0, 0, 0, 0],
    "120mm": [0, 4, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0, 0, 0, 0],
    "150mm": [0, 4, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, -6, 0, 0, 0, 0, 0, 0],
    "Harvest Coal": [0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Coke": [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -100, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Coke Furnace": [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -100, 82.5, 0, 0, 7.5, 0, 0, 0, 0, 0, 0, 0, 0],
    "Coal Liquefier": [0, 4, -25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0],
    "Advanced Coal Liquefier": [0, 4, -33.33, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -100, 86.67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Harvest Components": [0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Harvest Damaged Components": [0, 0, 0, 0, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Factory Enabled": [0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Factory Disabled": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Station Enabled": [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Station Disabled": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Garrison Supplies": [0, 2, 0, 0, 0, 0, 0, 0, -0.27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.67, 0, 0, 0, 0, 0], 
    "Basic Construction Materials": [0, 2, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Assembly Materials 1": [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Assembly Materials 2": [0, 2, 0, 0, -50, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Metal Press Bulk Construction Materials": [0, 4, 0, 0, -60, 0, 0, 0, 7.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Smelter Bulk Construction Materials": [0, 4, 0, 0, 0, 0, 0, 0, 7.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -36, 0, -60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Scrap for Sandbags": [0, 2, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0],
    "Scrap for Barbed Wire": [0, 2, 0, 0, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0],
    "Basic Processed Construction Materials": [0, 5, 0, 0, 0, 0, 0, 0, -3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Pipe": [0, 5, 0, 0, 0, 0, 0, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5], 
    "Assembly Materials 4": [0, 5, 0, 0, 0, 0, -33, 0, 0, -0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Assembly Materials 3": [0, 5, 0, 0, 0, 0, 0, 0, -1.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0],
    "Furnace Bulk Processed Construction Materials": [0, 8, 0, 0, 0, 0, -6, 0, -3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Processed Construction Materials and Metal Beams": [0, 5, 0, 0, 0, 0, 0, 0, -3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "Damaged Components for Components": [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13.33, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Steel Construction Materials": [0, 9, 0, 0, 0, 0, -23.33, 0, 0, -2, 0.67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -133.33, 0, 0, -43.33, 0, 0, 0, 0, 0, 0, 0, 0],
    "Bulk Steel Construction Materials": [0, 12, -66.67, 0, 0, 0, 0, -60, 0, -6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Assembly Materials 5": [0, 8, 0, 0, 0, 0, 0, 0, 0, 0, -1.5, -5, -5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -122.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Petrol": [0, 1, 0, -60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Reformer Petrol": [0, 1, -12, -48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Cracking Unit Heavy Oil": [0, 1.5, 0, -56.25, 0, 0, 33.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Petrochemical Plant Enriched Oil": [0, 6, 0, 0, 0, 0, -9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -18, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Oil": [0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Electric Oil": [0, 2, 0, 112.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    "Electric Oil Manual": [0, 2, 0, 115.38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Fracking Oil": [0, 3, -37.5, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Fracking Oil Manual": [0, 3, -50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Diesel Power": [5, 0, 0, 0, 0, -33.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Petrol Power": [12, 0, 0, 0, -33.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Oil Power": [10, 0, 0, -33.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Coal Power": [10, 0, -16.67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Heavy Oil Power": [16, 0, 0, 0, 0, 0, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0, 0],
    "Coke Power": [16, 0, -12.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -30, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0, 0],
    "Harvest Scrap": [0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Crane Enabled": [0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Crane Disabled": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Harvest Sulfur": [0, 0, 0, 0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0],
    "Basic Water": [0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Electric Water": [0, 0.5, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Electric Water Manual": [0, 0.5, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

window.addEventListener('load', (event) => {        // On page load, do this
    for (let i = 0; i < 2; i++) newstructure();
});

document.getElementById("perMinTab").addEventListener("click", recompute)
document.getElementById("perHourTab").addEventListener("click", recompute)

function deleteStructure() {
    const row = this.parentNode.parentNode;
    const tbody = row.parentNode;
    tbody.removeChild(row);
    recompute();
}

function getIndexById(idToSearch, list) {           // Searches NodeList for value, returns position of value in list
    return list.findIndex(function(elem) {return elem.id == idToSearch});
}

function setAttributes (el, attrs) {                // Allows bulk assigning of Attributes
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function getColumnCells(arr, cols, index) {         // Finds the Nth field in a list. Array, Columns, Position of Nth item
    const output = [];
    if (cols > index) {
        for (let i = 0; i < arr.length; i += cols) {
            const row = arr.slice(i, i + cols);
            index > row.length ? output.push(null) : output.push(row[index]);
        }
    }
    return output;
}

function newstructure() {

    function createStructure(row) {
        const column = document.createElement("td");
        row.appendChild(column);
        return column;
    }

    const newrow = document.createElement("tr");
    const structureColumn = createStructure(newrow);
    const structureSelect = document.createElement("select");
    setAttributes(structureSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Structure Selection Field"
    })

    structureSelect.addEventListener('change', function(element) {
        let tableSelects = document.querySelector("#structuretable").querySelectorAll("select");
        let id_list = Array.from(tableSelects);
        let routineElement = document.getElementById(id_list.at(getIndexById(element.target.id, id_list) + 1).getAttribute("id"));
        let amountElement = document.getElementById(id_list.at(getIndexById(element.target.id, id_list) + 2).getAttribute("id"));
        routineElement.length = 1;
        amountElement.value = 1;
        amountElement.setAttribute("disabled","");
        routineElement.removeAttribute("disabled","");
        recompute();
        let b = structuresroutines[element.target.value];
        if (this.value.includes("Structure")) {
            routineElement.setAttribute("disabled","");
        }
        for (let i = 0; i < b.length; i++) {
            routineElement.options[routineElement.options.length] = new Option(b[i], b[i]);
        }
    });
    for (let a in structuresroutines) {
        structureSelect.options[structureSelect.options.length] = new Option(a, a);
        structureColumn.appendChild(structureSelect);
    }

    const routineColumn = createStructure(newrow);
    const routineSelect = document.createElement("select");
    routineSelect.addEventListener('change', function(element) {
        let tableSelects = document.querySelector("#structuretable").querySelectorAll("select");
        let id_list = Array.from(tableSelects);
        let amountElement = document.getElementById(id_list.at(getIndexById(element.target.id, id_list) + 1).getAttribute("id"));
        recompute();
        amountElement.removeAttribute("disabled","");
    });

    setAttributes(routineSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Routine Selection Field",
        "disabled": ""
    })

    let b = structuresroutines[structureSelect.value]
    for (let i = 0; i < b.length; i++) {
        routineSelect.options[routineSelect.options.length] = new Option (b[i], b[i]);
        routineColumn.appendChild(routineSelect);
    }

    const amountColumn = createStructure(newrow);
    const amountSelect = document.createElement("select");
    amountSelect.addEventListener('change', recompute);
    setAttributes(amountSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Amount Selection Field",
        "disabled": ""
    })
    for (let i = 1; i < 11; i++) {
        amountSelect.options[amountSelect.options.length] = new Option (i);
        amountColumn.appendChild(amountSelect);
    }

    const removeColumn = createStructure(newrow);
    const removeBtn = document.createElement("button")
    removeBtn.addEventListener("click", deleteStructure);
    removeBtn.insertAdjacentHTML( 'afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>');
    setAttributes(removeBtn, {
        "class": "btn btn-danger",
        "type": "button",
        "value": "Remove Structure",
        "aria-label": "Delete Row"
    })
    removeColumn.appendChild(removeBtn);
    let table = document.getElementById("structuretable");
    let tbody = table.querySelector("tbody") || table;
    tbody.appendChild(newrow);
}

function setText(id,newvalue) {                     // Puts content inside <div> by ID
    let s = document.getElementById(id);
    s.innerHTML = newvalue;
}

function powerlimit(num) {                          // Sets Max possible integer to 30 and min to 0
    let parse = parseFloat(num);
    return Math.min(Math.max(parse, 0), 30);
}

function tidy(num) {                                // Ensures only two decimal places if any
    let i = Math.round(num*100)/100;
    return i;
}

function recompute() {

    let currentvalues = Array(39).fill(0);          // Reset counter
    let structureTableArray = Array.from(document.querySelector("#structuretable").querySelectorAll("select"));
    let selectedRoutinesArrayText = [];
    let selectedRoutinesArray = getColumnCells(structureTableArray, 3, 1);
    let selectedAmountsArrayValue = [];
    let selectedAmountsArray = getColumnCells(structureTableArray, 3, 2);
    let totalRoutinesArray = [];

    
    for (let i = 0; i < selectedAmountsArray.length; i++) {             // Fetch current Amount selections
        selectedAmountsArrayValue.push(selectedAmountsArray[i].value);  // As Strings
    }
    selectedAmountsArrayValue = selectedAmountsArrayValue.map(Number);  
    for (let i = 0; i < selectedRoutinesArray.length; i++) {            // Fetch current Routine selections
        selectedRoutinesArrayText.push(selectedRoutinesArray[i].options[selectedRoutinesArray[i].selectedIndex].text);
    }
    for (let i = 0; i < selectedRoutinesArrayText.length; i++) {
        totalRoutinesArray.push(Array(selectedAmountsArrayValue[i]).fill(selectedRoutinesArrayText[i]));
    }
    totalRoutinesArray = totalRoutinesArray.flat();                     // Turns it from an array of arrays into one big array
    for (let i = 0; i < totalRoutinesArray.length; i++) {               // Calculates Routines x Amount and adds values to counter
        let x = routinevalues[totalRoutinesArray[i]];
        currentvalues = currentvalues.map(function (num, idx) {
            return num + x[idx];
        })
    }

    let valuefields = ["PowerGen", "PowerCon", "fWater", "fOil", "fPetrol", "fDiesel", "fHOil", "fEOil", "cMats", "pCMats", "sCMats", "asMat1", "asMat2", "asMat3", "asMat4", "asMat5", "aFlame", "a250", "a3c", "a4c", "a75", "a945", "a300", "a120", "a150", "rScrap", "rCoal", "rCoke", "rComp", "rDComp", "rSulfur", "rEMat", "rHEMat", "mGsupp", "mSand", "mBarb", "mMBeam", "mConc", "mPipe" ]
    
    for (let i = 0; i < valuefields.length; i++) {
        if (valuefields[i].includes("PowerGen")) {
            setText(valuefields[0], powerlimit(currentvalues[0]));
        }
        else if (valuefields[i].includes("PowerCon")) {
            setText(valuefields[i], currentvalues[i]);
        }
        else {
            if (document.getElementById('perHourTab').getAttribute('class').includes("active")) {
                setText(valuefields[i], tidy(currentvalues[i]*60));
            }
            else {
                setText(valuefields[i], tidy(currentvalues[i]));
            }
        }
    }
    setText("PowerFree", powerlimit(currentvalues[0] - currentvalues[1]));
} 

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Dark Mode desired");                                   // dark mode detection
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";            // dark mode monitor
});

/*
    TODO:
    Migrate nodelist to JSON
    Toggle Power slider
*/
