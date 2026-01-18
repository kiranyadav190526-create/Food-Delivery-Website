// Restaurant Data with expanded menus
const restaurantsData = [
    {
        id: 1,
        name: "Pizza Paradise",
        cuisine: "Italian, Pizza",
        rating: 4.8,
        deliveryTime: "25-35 min",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
        badge: "Fast Delivery",
        category: "pizza",
        menu: [
            { id: 101, name: "Margherita Pizza", price: 299, description: "Classic tomato sauce, mozzarella, and fresh basil", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop", category: "popular" },
            { id: 102, name: "Pepperoni Pizza", price: 399, description: "Loaded with pepperoni and extra cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop", category: "popular" },
            { id: 103, name: "Veggie Supreme", price: 349, description: "Fresh vegetables with mozzarella cheese", image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=200&h=200&fit=crop", category: "popular" },
            { id: 104, name: "BBQ Chicken Pizza", price: 449, description: "Grilled chicken with BBQ sauce and onions", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", category: "mains" },
            { id: 105, name: "Hawaiian Pizza", price: 379, description: "Ham and pineapple with mozzarella", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", category: "mains" },
            { id: 106, name: "Four Cheese Pizza", price: 429, description: "Mozzarella, cheddar, parmesan, and blue cheese", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop", category: "mains" },
            { id: 107, name: "Garlic Bread", price: 149, description: "Crispy bread with garlic butter", image: "https://images.unsplash.com/photo-1573140401552-388e3ece5a5c?w=200&h=200&fit=crop", category: "sides" },
            { id: 108, name: "Cheese Sticks", price: 199, description: "Mozzarella sticks with marinara sauce", image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=200&h=200&fit=crop", category: "sides" },
            { id: 109, name: "Caesar Salad", price: 179, description: "Fresh romaine with caesar dressing", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop", category: "sides" },
            { id: 110, name: "Coca Cola", price: 60, description: "Chilled soft drink", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop", category: "drinks" },
            { id: 111, name: "Fresh Lime Soda", price: 80, description: "Refreshing lime soda", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" },
            { id: 112, name: "Mango Lassi", price: 120, description: "Sweet mango yogurt drink", image: "https://images.unsplash.com/photo-1587334207863-2b8c6d7c8c8e?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 2,
        name: "Burger House",
        cuisine: "American, Burgers",
        rating: 4.6,
        deliveryTime: "30-40 min",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
        badge: "Top Rated",
        category: "burger",
        menu: [
            { id: 201, name: "Classic Burger", price: 249, description: "Beef patty with lettuce, tomato, and special sauce", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", category: "popular" },
            { id: 202, name: "Cheese Burger", price: 279, description: "Double cheese with beef patty", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop", category: "popular" },
            { id: 203, name: "Bacon Burger", price: 329, description: "Crispy bacon with beef patty", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop", category: "popular" },
            { id: 204, name: "Veggie Burger", price: 229, description: "Plant-based patty with fresh veggies", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200&h=200&fit=crop", category: "mains" },
            { id: 205, name: "Chicken Burger", price: 269, description: "Grilled chicken with mayo and lettuce", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=200&h=200&fit=crop", category: "mains" },
            { id: 206, name: "Double Decker Burger", price: 399, description: "Two beef patties with all toppings", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop", category: "mains" },
            { id: 207, name: "French Fries", price: 99, description: "Crispy golden fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop", category: "sides" },
            { id: 208, name: "Onion Rings", price: 129, description: "Crispy fried onion rings", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200&h=200&fit=crop", category: "sides" },
            { id: 209, name: "Coleslaw", price: 89, description: "Fresh cabbage salad", image: "https://images.unsplash.com/photo-1625938145312-c2f27f8b3a0f?w=200&h=200&fit=crop", category: "sides" },
            { id: 210, name: "Milkshake", price: 149, description: "Creamy vanilla milkshake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop", category: "drinks" },
            { id: 211, name: "Chocolate Shake", price: 159, description: "Rich chocolate milkshake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop", category: "drinks" },
            { id: 212, name: "Iced Tea", price: 79, description: "Refreshing lemon iced tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 3,
        name: "Asian Fusion",
        cuisine: "Asian, Chinese, Thai",
        rating: 4.7,
        deliveryTime: "35-45 min",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
        badge: "Offers",
        category: "asian",
        menu: [
            { id: 301, name: "Pad Thai", price: 299, description: "Stir-fried rice noodles with shrimp", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&h=200&fit=crop", category: "popular" },
            { id: 302, name: "Fried Rice", price: 249, description: "Vegetable fried rice with egg", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop", category: "popular" },
            { id: 303, name: "Hakka Noodles", price: 229, description: "Stir-fried noodles with vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop", category: "popular" },
            { id: 304, name: "Manchurian", price: 199, description: "Vegetable balls in spicy sauce", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&h=200&fit=crop", category: "mains" },
            { id: 305, name: "Chilli Chicken", price: 329, description: "Spicy chicken with peppers", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop", category: "mains" },
            { id: 306, name: "Sweet & Sour Chicken", price: 299, description: "Chicken in sweet and sour sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop", category: "mains" },
            { id: 307, name: "Spring Rolls", price: 149, description: "Crispy vegetable spring rolls", image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=200&h=200&fit=crop", category: "sides" },
            { id: 308, name: "Momos", price: 129, description: "Steamed dumplings with sauce", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=200&h=200&fit=crop", category: "sides" },
            { id: 309, name: "Soup", price: 99, description: "Hot and sour soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop", category: "sides" },
            { id: 310, name: "Green Tea", price: 60, description: "Hot green tea", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=200&h=200&fit=crop", category: "drinks" },
            { id: 311, name: "Thai Iced Tea", price: 99, description: "Sweet Thai iced tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 4,
        name: "Sushi Master",
        cuisine: "Japanese, Sushi",
        rating: 4.9,
        deliveryTime: "40-50 min",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
        badge: "Top Rated",
        category: "sushi",
        menu: [
            { id: 401, name: "California Roll", price: 349, description: "Crab, avocado, and cucumber", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", category: "popular" },
            { id: 402, name: "Salmon Nigiri", price: 399, description: "Fresh salmon on rice", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&fit=crop", category: "popular" },
            { id: 403, name: "Tuna Roll", price: 379, description: "Fresh tuna with rice", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", category: "popular" },
            { id: 404, name: "Dragon Roll", price: 449, description: "Eel and cucumber with avocado", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", category: "mains" },
            { id: 405, name: "Rainbow Roll", price: 429, description: "Assorted fish on California roll", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", category: "mains" },
            { id: 406, name: "Vegetable Roll", price: 249, description: "Fresh vegetables wrapped in rice", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", category: "mains" },
            { id: 407, name: "Miso Soup", price: 99, description: "Traditional Japanese soup", image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=200&h=200&fit=crop", category: "sides" },
            { id: 408, name: "Edamame", price: 129, description: "Steamed soybeans with salt", image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=200&h=200&fit=crop", category: "sides" },
            { id: 409, name: "Sake", price: 299, description: "Japanese rice wine", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 5,
        name: "Sweet Treats",
        cuisine: "Desserts, Bakery",
        rating: 4.5,
        deliveryTime: "20-30 min",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop",
        badge: "Fast Delivery",
        category: "dessert",
        menu: [
            { id: 501, name: "Chocolate Cake", price: 199, description: "Rich chocolate layer cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop", category: "popular" },
            { id: 502, name: "Cheesecake", price: 229, description: "Creamy New York style cheesecake", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200&h=200&fit=crop", category: "popular" },
            { id: 503, name: "Red Velvet Cake", price: 219, description: "Classic red velvet with cream cheese", image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=200&fit=crop", category: "popular" },
            { id: 504, name: "Brownie", price: 149, description: "Fudgy chocolate brownie", image: "https://images.unsplash.com/photo-1564355808853-07d7e1d69b8f?w=200&h=200&fit=crop", category: "mains" },
            { id: 505, name: "Tiramisu", price: 249, description: "Italian coffee-flavored dessert", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop", category: "mains" },
            { id: 506, name: "Cupcakes", price: 99, description: "Assorted flavor cupcakes", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=200&h=200&fit=crop", category: "mains" },
            { id: 507, name: "Ice Cream", price: 129, description: "Vanilla ice cream scoop", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop", category: "sides" },
            { id: 508, name: "Cookies", price: 79, description: "Chocolate chip cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&h=200&fit=crop", category: "sides" },
            { id: 509, name: "Coffee", price: 89, description: "Hot brewed coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop", category: "drinks" },
            { id: 510, name: "Hot Chocolate", price: 119, description: "Rich hot chocolate", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 6,
        name: "Healthy Bowl",
        cuisine: "Healthy, Salads",
        rating: 4.4,
        deliveryTime: "25-35 min",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop",
        badge: "Offers",
        category: "healthy",
        menu: [
            { id: 601, name: "Caesar Salad", price: 279, description: "Romaine lettuce with caesar dressing", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop", category: "popular" },
            { id: 602, name: "Quinoa Bowl", price: 299, description: "Quinoa with roasted vegetables", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop", category: "popular" },
            { id: 603, name: "Greek Salad", price: 259, description: "Feta cheese with olives and tomatoes", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop", category: "popular" },
            { id: 604, name: "Buddha Bowl", price: 329, description: "Mixed grains with vegetables", image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=200&h=200&fit=crop", category: "mains" },
            { id: 605, name: "Chicken Salad", price: 319, description: "Grilled chicken with mixed greens", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop", category: "mains" },
            { id: 606, name: "Fruit Bowl", price: 199, description: "Fresh seasonal fruits", image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=200&h=200&fit=crop", category: "sides" },
            { id: 607, name: "Smoothie", price: 149, description: "Fresh fruit smoothie", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=200&h=200&fit=crop", category: "drinks" },
            { id: 608, name: "Green Juice", price: 169, description: "Healthy green vegetable juice", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 7,
        name: "Taco Fiesta",
        cuisine: "Mexican, Tacos",
        rating: 4.6,
        deliveryTime: "30-40 min",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop",
        badge: "Offers",
        category: "mexican",
        menu: [
            { id: 701, name: "Chicken Tacos", price: 249, description: "Grilled chicken with salsa and cheese", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop", category: "popular" },
            { id: 702, name: "Beef Burrito", price: 299, description: "Beef with rice, beans, and cheese", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop", category: "popular" },
            { id: 703, name: "Veggie Quesadilla", price: 229, description: "Grilled vegetables with cheese", image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=200&h=200&fit=crop", category: "popular" },
            { id: 704, name: "Nachos Supreme", price: 199, description: "Tortilla chips with cheese and toppings", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop", category: "mains" },
            { id: 705, name: "Enchiladas", price: 279, description: "Rolled tortillas with filling and sauce", image: "https://images.unsplash.com/photo-1599974982760-8f1d7f82d72a?w=200&h=200&fit=crop", category: "mains" },
            { id: 706, name: "Guacamole", price: 149, description: "Fresh avocado dip with chips", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=200&h=200&fit=crop", category: "sides" },
            { id: 707, name: "Salsa", price: 99, description: "Spicy tomato salsa with chips", image: "https://images.unsplash.com/photo-1596040033229-a0b4e4d4f757?w=200&h=200&fit=crop", category: "sides" },
            { id: 708, name: "Margarita", price: 179, description: "Classic lime margarita", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 8,
        name: "Pasta Corner",
        cuisine: "Italian, Pasta",
        rating: 4.7,
        deliveryTime: "25-35 min",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=300&fit=crop",
        badge: "Fast Delivery",
        category: "pasta",
        menu: [
            { id: 801, name: "Spaghetti Carbonara", price: 329, description: "Creamy pasta with bacon and egg", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop", category: "popular" },
            { id: 802, name: "Penne Arrabbiata", price: 289, description: "Spicy tomato sauce with penne", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop", category: "popular" },
            { id: 803, name: "Fettuccine Alfredo", price: 349, description: "Creamy white sauce with fettuccine", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=200&h=200&fit=crop", category: "popular" },
            { id: 804, name: "Lasagna", price: 379, description: "Layered pasta with meat and cheese", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=200&h=200&fit=crop", category: "mains" },
            { id: 805, name: "Ravioli", price: 319, description: "Cheese-filled pasta with sauce", image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=200&h=200&fit=crop", category: "mains" },
            { id: 806, name: "Bruschetta", price: 159, description: "Toasted bread with tomato topping", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=200&fit=crop", category: "sides" },
            { id: 807, name: "Tiramisu", price: 189, description: "Classic Italian dessert", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop", category: "sides" },
            { id: 808, name: "Italian Soda", price: 99, description: "Refreshing flavored soda", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 9,
        name: "BBQ Nation",
        cuisine: "BBQ, Grilled",
        rating: 4.8,
        deliveryTime: "35-45 min",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop",
        badge: "Top Rated",
        category: "bbq",
        menu: [
            { id: 901, name: "BBQ Chicken Wings", price: 349, description: "Grilled chicken wings with BBQ sauce", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=200&h=200&fit=crop", category: "popular" },
            { id: 902, name: "Grilled Steak", price: 599, description: "Juicy grilled steak with sides", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop", category: "popular" },
            { id: 903, name: "BBQ Ribs", price: 549, description: "Tender ribs with BBQ glaze", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop", category: "popular" },
            { id: 904, name: "Grilled Fish", price: 449, description: "Fresh fish grilled to perfection", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=200&fit=crop", category: "mains" },
            { id: 905, name: "Kebabs", price: 329, description: "Mixed meat kebabs", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&h=200&fit=crop", category: "mains" },
            { id: 906, name: "Corn on the Cob", price: 129, description: "Grilled corn with butter", image: "https://images.unsplash.com/photo-1551462147-37bd170e1c0b?w=200&h=200&fit=crop", category: "sides" },
            { id: 907, name: "Grilled Vegetables", price: 179, description: "Assorted grilled veggies", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop", category: "sides" },
            { id: 908, name: "Beer", price: 199, description: "Chilled beer", image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=200&h=200&fit=crop", category: "drinks" }
        ]
    },
    {
        id: 10,
        name: "Cafe Delight",
        cuisine: "Cafe, Coffee, Snacks",
        rating: 4.5,
        deliveryTime: "20-30 min",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
        badge: "Fast Delivery",
        category: "cafe",
        menu: [
            { id: 1001, name: "Cappuccino", price: 129, description: "Classic Italian coffee", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&h=200&fit=crop", category: "popular" },
            { id: 1002, name: "Latte", price: 149, description: "Smooth espresso with milk", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=200&h=200&fit=crop", category: "popular" },
            { id: 1003, name: "Espresso", price: 99, description: "Strong Italian coffee", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&h=200&fit=crop", category: "popular" },
            { id: 1004, name: "Croissant", price: 89, description: "Buttery French pastry", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop", category: "mains" },
            { id: 1005, name: "Sandwich", price: 179, description: "Fresh vegetable sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop", category: "mains" },
            { id: 1006, name: "Muffin", price: 79, description: "Blueberry muffin", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200&h=200&fit=crop", category: "sides" },
            { id: 1007, name: "Cookies", price: 69, description: "Chocolate chip cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&h=200&fit=crop", category: "sides" },
            { id: 1008, name: "Iced Coffee", price: 139, description: "Cold brew coffee", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&h=200&fit=crop", category: "drinks" }
        ]
    }
];

// Cart State
let cart = [];
let currentRestaurant = null;
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    renderRestaurants();
    setupEventListeners();
});

// Dark Mode Functions
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeIcon(isDarkMode);
    showNotification(isDarkMode ? 'Dark mode enabled' : 'Light mode enabled');
}

function updateDarkModeIcon(isDarkMode) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (isDarkMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart button
    document.getElementById('cart-btn').addEventListener('click', toggleCart);
    document.getElementById('close-cart').addEventListener('click', toggleCart);

    // Dark mode toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', showOrderSummary);

    // Modal close buttons
    document.getElementById('close-modal').addEventListener('click', closeMenuModal);
    document.getElementById('modal-overlay').addEventListener('click', closeMenuModal);
    document.getElementById('close-order-modal').addEventListener('click', closeOrderModal);
    document.getElementById('order-modal-overlay').addEventListener('click', closeOrderModal);

    // Auth modals
    document.getElementById('login-link').addEventListener('click', (e) => {
        e.preventDefault();
        openLoginModal();
    });
    document.getElementById('signup-link').addEventListener('click', (e) => {
        e.preventDefault();
        openSignupModal();
    });
    document.getElementById('close-login').addEventListener('click', closeLoginModal);
    document.getElementById('login-overlay').addEventListener('click', closeLoginModal);
    document.getElementById('close-signup').addEventListener('click', closeSignupModal);
    document.getElementById('signup-overlay').addEventListener('click', closeSignupModal);
    document.getElementById('switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        closeLoginModal();
        openSignupModal();
    });
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        closeSignupModal();
        openLoginModal();
    });

    // Auth forms
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('signup-form').addEventListener('submit', handleSignup);

    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderRestaurants();
        });
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            filterByCategory(category);
        });
    });

    // Menu category buttons
    document.querySelectorAll('.menu-category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.menu-category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.dataset.menuCategory;
            renderMenuItems(currentRestaurant, category);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.btn-search');

    searchButton.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Mobile user button
    document.getElementById('mobile-user-btn').addEventListener('click', () => {
        showMobileUserMenu();
    });
}

// Show mobile user menu
function showMobileUserMenu() {
    const menu = document.createElement('div');
    menu.className = 'mobile-user-menu';
    menu.innerHTML = `
        <div class="mobile-user-menu-overlay"></div>
        <div class="mobile-user-menu-content">
            <h3>Account</h3>
            <button class="mobile-menu-btn" onclick="closeMobileUserMenu(); openLoginModal();">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Login
            </button>
            <button class="mobile-menu-btn" onclick="closeMobileUserMenu(); openSignupModal();">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM20 8v6M23 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Sign Up
            </button>
            <button class="mobile-menu-close" onclick="closeMobileUserMenu()">Close</button>
        </div>
    `;
    document.body.appendChild(menu);
    setTimeout(() => menu.classList.add('active'), 10);

    // Close on overlay click
    menu.querySelector('.mobile-user-menu-overlay').addEventListener('click', closeMobileUserMenu);
}

function closeMobileUserMenu() {
    const menu = document.querySelector('.mobile-user-menu');
    if (menu) {
        menu.classList.remove('active');
        setTimeout(() => menu.remove(), 300);
    }
}

// Search Function
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
        showNotification('Please enter a search term');
        return;
    }

    const searchResults = restaurantsData.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm)
    );

    if (searchResults.length === 0) {
        showNotification('No restaurants found matching your search');
        return;
    }

    // Render search results
    const grid = document.getElementById('restaurants-grid');
    grid.innerHTML = searchResults.map(restaurant => `
        <div class="restaurant-card" onclick="openMenuModal(${restaurant.id})">
            <div class="restaurant-image-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                <div class="restaurant-badge">${restaurant.badge}</div>
            </div>
            <div class="restaurant-details">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-meta">
                    <span class="rating">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 1L10 6L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 6L8 1Z"/>
                        </svg>
                        ${restaurant.rating}
                    </span>
                    <span class="delivery-time">🕒 ${restaurant.deliveryTime}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Scroll to restaurants section
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    showNotification(`Found ${searchResults.length} restaurant(s)`);
}

// Auth Functions
function openLoginModal() {
    document.getElementById('login-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openSignupModal() {
    document.getElementById('signup-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSignupModal() {
    document.getElementById('signup-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulate login
    showNotification('Login successful! Welcome back!');
    closeLoginModal();
    document.getElementById('login-form').reset();
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    // Simulate signup
    showNotification('Account created successfully! Welcome to FoodHub!');
    closeSignupModal();
    document.getElementById('signup-form').reset();
}

// Render Restaurants
function renderRestaurants() {
    const grid = document.getElementById('restaurants-grid');
    let filteredRestaurants = restaurantsData;

    if (currentFilter === 'fast-delivery') {
        filteredRestaurants = restaurantsData.filter(r => r.badge === 'Fast Delivery');
    } else if (currentFilter === 'top-rated') {
        filteredRestaurants = restaurantsData.filter(r => r.rating >= 4.7);
    } else if (currentFilter === 'offers') {
        filteredRestaurants = restaurantsData.filter(r => r.badge === 'Offers');
    }

    grid.innerHTML = filteredRestaurants.map(restaurant => `
        <div class="restaurant-card" onclick="openMenuModal(${restaurant.id})">
            <div class="restaurant-image-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                <div class="restaurant-badge">${restaurant.badge}</div>
            </div>
            <div class="restaurant-details">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-meta">
                    <span class="rating">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 1L10 6L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 6L8 1Z"/>
                        </svg>
                        ${restaurant.rating}
                    </span>
                    <span class="delivery-time">🕒 ${restaurant.deliveryTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter by Category
function filterByCategory(category) {
    const filteredRestaurants = restaurantsData.filter(r => r.category === category);
    const grid = document.getElementById('restaurants-grid');

    grid.innerHTML = filteredRestaurants.map(restaurant => `
        <div class="restaurant-card" onclick="openMenuModal(${restaurant.id})">
            <div class="restaurant-image-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                <div class="restaurant-badge">${restaurant.badge}</div>
            </div>
            <div class="restaurant-details">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-meta">
                    <span class="rating">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 1L10 6L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 6L8 1Z"/>
                        </svg>
                        ${restaurant.rating}
                    </span>
                    <span class="delivery-time">🕒 ${restaurant.deliveryTime}</span>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
}

// Open Menu Modal
function openMenuModal(restaurantId) {
    currentRestaurant = restaurantsData.find(r => r.id === restaurantId);
    if (!currentRestaurant) return;

    document.getElementById('modal-restaurant-name').textContent = currentRestaurant.name;
    document.getElementById('modal-rating').textContent = currentRestaurant.rating;
    document.getElementById('modal-delivery-time').textContent = currentRestaurant.deliveryTime;

    renderMenuItems(currentRestaurant, 'popular');
    document.getElementById('menu-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Menu Modal
function closeMenuModal() {
    document.getElementById('menu-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Render Menu Items
function renderMenuItems(restaurant, category) {
    const menuItems = restaurant.menu.filter(item => item.category === category);
    const container = document.getElementById('menu-items');

    container.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h4 class="menu-item-name">${item.name}</h4>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="btn-add-to-cart" onclick="addToCart(${restaurant.id}, ${item.id})">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(restaurantId, itemId) {
    const restaurant = restaurantsData.find(r => r.id === restaurantId);
    const item = restaurant.menu.find(i => i.id === itemId);

    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...item,
            restaurantName: restaurant.name,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Item added to cart!');
}

// Update Cart
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartContent = document.getElementById('cart-content');
    const cartFooter = document.getElementById('cart-footer');
    const totalAmount = document.getElementById('total-amount');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <span>Add items to get started</span>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartContent.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="btn-remove" onclick="removeFromCart(${item.id})">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmount.textContent = `₹${total}`;
        cartFooter.style.display = 'block';
    }
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    updateCart();
}

// Toggle Cart
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// Show Order Summary
function showOrderSummary() {
    if (cart.length === 0) return;

    const orderId = '#FH' + Math.floor(10000 + Math.random() * 90000);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.getElementById('order-id').textContent = orderId;
    document.getElementById('estimated-delivery').textContent = '30-40 mins';
    document.getElementById('order-items-count').textContent = itemCount;
    document.getElementById('order-total').textContent = `₹${total}`;

    const orderItemsList = document.getElementById('order-items-list');
    orderItemsList.innerHTML = cart.map(item => `
        <div class="order-item">
            <div>
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-quantity">Qty: ${item.quantity}</div>
            </div>
            <div class="order-item-price">₹${(item.price * item.quantity)}</div>
        </div>
    `).join('');

    document.getElementById('order-modal').classList.add('active');
    document.getElementById('cart-sidebar').classList.remove('active');
    document.body.style.overflow = 'hidden';

    // Clear cart
    cart = [];
    updateCart();
}

// Close Order Modal
function closeOrderModal() {
    document.getElementById('order-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
