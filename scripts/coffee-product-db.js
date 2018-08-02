let CoffeeProductDB = [
  {
    id: 1,
    hot: 1,
    category: "Coffee Bean",
    name: "Koffee Kult Beans",
    price: 90000,
    imageUrl: 'coffee-bean/coffee-bean-4.jpg',
    shortDesc: "Best in America",
    longDesc: "Roasted to a perfect medium roast. Winner for outstanding quality and balance. Forbes called “Best in America”"
  },
  {
    id: 2,
    new: 1,
    category: "Coffee Bean",
    name: "Death Wish Beans",
    price: 100000,
    imageUrl: 'coffee-bean/coffee-bean-5.jpg',
    shortDesc: "Stay awake all night!",
    longDesc: "Stay awake with The World's Strongest Coffee. Death Wish Whole Bean Coffee has double the caffeine of your average coffee."
  },
  {
    id: 100,
    category: "Coffee Grinder",
    name: "HandGround",
    price: 200000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-1.jpg',
    shortDesc: "Precision Coffee Grinder",
    longDesc: "This hand mill grinder is one that does its job perfectly! Its quality and performance is just what we need to make that best homemade coffee. What's more - it has 15 grind settings to choose from for any brew method."
  },
  {
    id: 101,
    category: "Coffee Grinder",
    name: "Hario",
    price: 150000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-2.jpg',
    shortDesc: "Ceramic Coffee Mill Skerton",
    longDesc: "The Hario has interesting features like the slip-free rubber base, large storage capacity, ceramic burrs for extra grind precision and ergonomic design making it a great buy for those in need of a manual grinder."
  },
  {
    id: 102,
    category: "Coffee Grinder",
    name: "Porlex",
    price: 175000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-5.jpg',
    shortDesc: "Mini Stainless Steel Coffee Grinder",
    longDesc: "Travelling coffee fanatics dont stop raving about the Porlex Portable Coffee mill that is designed to grind with perfect accuracy and is great for those who are traveling or constantly on the go."
  },
  {
    id: 103,
    category: "Coffee Grinder",
    name: "Zassenhaus",
    price: 250000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-6.jpg',
    shortDesc: "Santiago Coffee Mill Grinder",
    longDesc: "With this manual grinder, you'll be sure that the grind function gives you a consistent result every time, and does not take-away from your delicate bean flavor with heat that is typically generated from electrical grinders."
  },
  {
    id: 104,
    category: "Coffee Grinder",
    name: "The Rancilio",
    price: 455000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-4.jpg',
    shortDesc: "SD Rocky Coffee Grinder",
    longDesc: "This Rancilio coffee grinder is loaded with a 50mm commercial grade grinding burrs that allow for grinding up to 7.7 pounds per hour. You'll be grinding as good as your local barista does with their $3000 grinder, for a fraction of the cost."
  },
  {
    id: 105,
    category: "Coffee Grinder",
    name: "The Baratza Vario",
    price: 530000,
    imageUrl: 'coffee-grinder/coffee-grinder-product-3.jpg',
    shortDesc: "Baratza Vario 886 Coffee Grinder",
    longDesc: "The new Baratza Vario 886 grinder boasts of having a sleek appearance that you'll fall in love with at first sight. Besides beauty, the grinder also combines ease of use with a penchant to aid in bringing out the best flavours in your coffee beans."
  },
  {
    id: 106,
    category: "Coffee Bean",
    name: "GERA Beans",
    price: 125000,
    imageUrl: 'coffee-bean/coffee-bean-product-1.jpg',
    shortDesc: "Ethiopian Arabica Coffee",
    longDesc: "It is one of the oldest coffee beans still produced and is known for its distinctive fruity, wine flavour. The shells of the coffee bean are used in a tea called hasher-qahwa. The bean is medium in size with a greenish-yellowish colour."
  },
  {
    id: 107,
    category: "Coffee Bean",
    name: "Starbucks Beans",
    price: 155000,
    imageUrl: 'coffee-bean/coffee-bean-product-2.jpg',
    shortDesc: "Guatemala Laguna de Ayarza",
    longDesc: "This medium-roast coffee from Guatemala's verdant Santa Rosa highlands balances delicate flavors with a deeper complexity and a sweet, chocolaty mouthfeel. The coffee thrives in the soil above Laguna de Ayarza, a double caldera lake formed thousands of years ago."
  },
  {
    id: 108,
    category: "Coffee Bean",
    name: "Intenso Beans",
    price: 140000,
    imageUrl: 'coffee-bean/coffee-bean-product-3.jpg',
    shortDesc: "Colombia Speciality Beans",
    longDesc: "Colombian coffees are well balanced, medium bodied, and bright. Everyone knows Juan Valdez. The Coffee Federation of Colombia has done an excellent job of connoting in the American public's mind that Colombians are the richest coffees in the world."
  },
  {
    id: 109,
    category: "Coffee Bean",
    name: "Lavazza Tierra",
    price: 130000,
    imageUrl: 'coffee-bean/coffee-bean-product-4.jpg',
    shortDesc: "Good Karma, Great Coffee",
    longDesc: "Lavazza Tierra is a sustainable development project combining product quality with improved living conditions for the three small-scale coffee growing communities involved. Lavazza singled out three disadvantaged coffee producing communities in Honduras, Colombia and Peru and provided technical assistance to help make their farms sustainable."
  },
  {
    id: 110,
    category: "Coffee Bean",
    name: "Vittoria Beans",
    price: 110000,
    imageUrl: 'coffee-bean/coffee-bean-product-5.jpg',
    shortDesc: "Roasted, blended and imported raw coffees",
    longDesc: "Vittoria Coffee Espresso Coffee Beans. Exclusive blend of quality 100% Arabica coffee beans. The most modern and accurate roasting processes guarantee the preservation of its full aroma, flavour and freshness."
  },
  {
    id: 111,
    category: "Coffee Bean",
    name: "Jungle Coffee",
    price: 135000,
    imageUrl: 'coffee-bean/coffee-bean-product-6.jpg',
    shortDesc: "Costa Rican Whole Bean Arabica",
    longDesc: "Jungle Coffee Costa Rican Whole Bean Arabica Coffee is great for both the environment, as well consumers that are health conscious. This product is certified fair trade and is one-hundred-percent organic by both the USDA and Farming Europe."
  },
  {
    id: 112,
    category: "Coffee Maker",
    name: "The Toddy",
    price: 135000,
    imageUrl: 'coffee-maker/coffee-maker-product-2.jpg',
    shortDesc: "Toddy T2N Cold Brewer",
    longDesc: "The Toddy’s patented Wool fiber filter is thicker and more durable so it acts as both a grounds guard and filtration device. This means that the Toddy has been simplified and is easier to put together, take apart, and clean."
  },
  {
    id: 113,
    category: "Coffee Maker",
    name: "The OXO",
    price: 150000,
    imageUrl: 'coffee-maker/coffee-maker-product-1.jpg',
    shortDesc: "Good Grips Cold Brewer",
    longDesc: "Interesting tools to help improve the cold brew process. The patented Rainmaker coffee extraction lid helps to evenly distribute water over the grounds ensuring complete saturation. This helps to reduce any over-extraction and bitterness in your coffee."
  },
  {
    id: 114,
    category: "Coffee Maker",
    name: "Hamilton Beach",
    price: 800000,
    imageUrl: 'coffee-maker/coffee-maker-product-3.jpg',
    shortDesc: "2-Way Coffee Maker",
    longDesc: "Whichever way you decide to brew, the 2-Way Brewer lets you do both. The single-serve side lets you add grinds directly into the mesh filter that fits the brew basket or insert a soft pod with the pod holder. On days you want to enjoy cup-after-cup without brewing each time, the carafe-side makes a full 12-cup pot."
  },
  {
    id: 115,
    category: "Coffee Maker",
    name: "Bosch",
    price: 450000,
    imageUrl: 'coffee-maker/coffee-maker-product-4.jpg',
    shortDesc: "Tassimo Coffee Machine",
    longDesc: "Bosch's Intellibrew system identifies the drink selected and adjusts the water, temperature and brewing time accordingly to deliver all of your coffee shop favourites at the touch of a button. A 5 LED light interface keeps you up to date with the coffee machine's status, letting you know exactly when the water tank needs refilling or de-scaling."
  },
  {
    id: 116,
    category: "Coffee Maker",
    name: "Mr. Coffee",
    price: 600000,
    imageUrl: 'coffee-maker/coffee-maker-product-5.jpg',
    shortDesc: "Keeps Brewing Simple and Easy",
    longDesc: "Just set it up, turn it on, and brew. There you have it! Rich-tasting coffee expertly brewed for you without the fuss. Grab-A-Cup Auto Pause is a lifesaver when you need a cup before the brew cycle is finished. It stops brewing so you can pour a rich-tasting cup and then finishes the brewing cycle after you place the carafe back in position."
  },
  {
    id: 117,
    category: "Coffee Maker",
    name: "Prestige",
    price: 550000,
    imageUrl: 'coffee-maker/coffee-maker-product-6.jpeg',
    shortDesc: "Electric Drip PCMD",
    longDesc: "This coffee maker from Prestige features a water-level indicator to help you accurately measure the level of water while preparing coffee. The non-drip valve makes sure that coffee is released only when the jug is under the nozzle while it is dispensing, while the glass carafe tells you how much coffee is left in it."
  },
  {
    id: 118,
    category: "Coffee Tumbler",
    name: "Ninja®",
    price: 250000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-1.jpg',
    shortDesc: "Stainless Steel 16-Oz",
    longDesc: "The Ninja Stainless Steel Travel Mug lets you take your delicious Ninja coffee drinks with you anywhere. This mug is insulated to retain your drink's temperature and will fit in most vehicle cup holders."
  },
  {
    id: 119,
    category: "Coffee Tumbler",
    name: "Contigo®",
    price: 230000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-2.jpg',
    shortDesc: "Aria Stainless Steel 16-Ounce",
    longDesc: "This sleek Aria Contigo Stainless Steel Travel Mug features Autoseal® technology for 100% spill and leak-proof performance with vacuum insulation to keep your beverages hot for up to 5 hours or cold for 14 hours."
  },
  {
    id: 120,
    category: "Coffee Tumbler",
    name: "THERMOcafe™",
    price: 300000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-3.jpg',
    shortDesc: "Foam Insulated 24-Ounce",
    longDesc: "THERMOcafe™ extra large travel mug features double wall foam insulation. With a stainless steel exterior, travel mug features a scratch-resistant base and slide lock lid."
  },
  {
    id: 121,
    category: "Coffee Tumbler",
    name: "Contigo",
    price: 280000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-4.jpg',
    shortDesc: "Vacuum Insulated 16-Ounce",
    longDesc: "Vacuum insulated stainless steel travel mug keeps beverages hot up to four hours and cold beverages cold up to 12 hours. Integrated Carabineer clip attaches to bags, purses and gear, and there's a comfortable textured grip on handle and body."
  },
  {
    id: 122,
    category: "Coffee Tumbler",
    name: "Aladdin",
    price: 320000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-5.jpg',
    shortDesc: "Stainless 16 Oz. Vacuum Insulated",
    longDesc: "Alladin's Vacuum Insulated Stainless Steel Car Mug is the ideal on-the-go mug that keeps drinks hot for 4 hours or cold for 24 hours. Stylishly designed and dishwasher safe, it features an intuitive leak-proof flip lid and fits most cup holders."
  },
  {
    id: 123,
    category: "Coffee Tumbler",
    name: "Eva Solo®",
    price: 270000,
    imageUrl: 'coffee-tumbler/coffee-tumbler-product-6.jpg',
    shortDesc: "16 Oz. Thermo Flask",
    longDesc: "Keep your favorite beverages cold and nearby with the Eva Solo 16 oz. Thermo Flask. With double-walled stainless steel construction, this flask features a screw-on top, practical carry and grab strap, and a vacuum between the walls for superior insulation."
  }
];
