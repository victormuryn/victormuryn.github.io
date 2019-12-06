const list = [{
  id: 0,
  name: `Hoody Ultra Black`,
  price: 520,
  type: `hoody`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Made from highquality European Cotton
      High-quality print on the chest and back`,
    size: [`XS`, `M`, `XXL`],
    images: [
      `product0`,
      `product0.1`,
      `product0.2`
    ],
  }
}, {
  id: 1,
  name: `Pants Ultra Black`,
  price: 550,
  type: `pants`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Material 97% cotton 3% elastane
      On the sides, two pockets with Velcro for extra space
      Also, two pockets for hands on the back and front`,
    size: [`XS`, `S`, `M`, `L`, `XL`, `XXL`],
    images: [
      `product1`,
      `product1.1`,
      `product1.2`,
      `product1.3`
    ],
  }
}, {
  id: 2,
  name: `Jeans Ultra Black`,
  type: "jeans",
  price: 550,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Made from highquality European jeans
      Classic cut
      Material: 95% - koton, 5% - elastane.
      Two pockets in front and two in the back`,
    size: [`29`, `30`, `31`, `32`, `33`, `34`],
    images: [
      `product2`,
      `product2.1`,
      `product2.2`,
      `product2.3`
    ],
  }
}, {
  id: 3,
  name: `Winter parka Green`,
  price: 2100,
  type: `parka`,
  male: true,
  season: `winter`,
  details: {
    description: `Wind- and damp protected
     Highquality insulation Hollowsoft
     Manty pockets
     The recommended temperature is -25°С
     Season: Winter `,
    size: [`XS`, `S`, `M`, `L`, `XL`, `XXL`],
    images: [
      `product3`,
      `product3.1`,
      `product3.2`,
      `product3.3`,
      `product3.4`,
      `product3.5`,
      `product3.6`
    ],
  },
}, {
  id: 4,
  name: `Autumn-Spring Jacket M grafit`,
  type: `jacket`,
  price: 990,
  male: false,
  season: `autumn-spring`,
  details: {
    description: `Made from matte fabric laminated with breathable, wind and moisture resistant membrane. - Nice black polyester lining
      The central lightning is two-way, from above it is closed by a windproof bar on buttons
      Two chest pockets with zippers
      Two lower pockets with magnets
      The width of the hood is regulated by an elastic cord with a plastic length regulator
      Width of cuffs is regulated on flypapers
      Composition: 100% polyester`,
    size: [`XS`, `S`],
    images: [
      `product4`,
      `product4.1`,
      `product4.2`,
      `product4.3`,
      `product4.4`,
      `product4.5`,
      `product4.6`
    ],
  }
}, {
  id: 5,
  name: `Autumn-Spring Jacket M black`,
  price: 990,
  type: `jacket`,
  male: false,
  season: `autumn-spring`,
  details: {
    description: `Made from matte fabric laminated with breathable, wind and moisture resistant membrane. - Nice black polyester lining
      The central lightning is two-way, from above it is closed by a windproof bar on buttons
      Two chest pockets with zippers
      Two lower pockets with magnets
      The width of the hood is regulated by an elastic cord with a plastic length regulator
      Width of cuffs is regulated on flypapers
      Composition: 100% polyester`,
    size: [`XS`],
    images: [
      `product5`,
      `product5.1`,
      `product5.2`,
      `product5.3`,
      `product5.4`,
      `product5.5`,
      `product5.6`
    ],
  }
}, {
  id: 6,
  name: `Зимова парка Dark`,
  price: 2050,
  type: `parka`,
  male: true,
  season: `winter`,
  details: {
    description: `Wind- and damp protected
     Highquality insulation Hollowsoft
     Manty pockets
     The recommended temperature is -25°С
     Season: Winter `,
    size: [`XS`, `S`, `M`, `L`, `XL`, `XXL`],
    images: [
      `product6`,
      `product6.1`,
      `product6.2`,
      `product6.3`,
      `product6.4`,
      `product6.5`,
      `product6.6`,
      `product6.7`
    ],
  }
}, {
  id: 7,
  name: `Backpack with Cats ^.^`,
  price: 440,
  type: `accessories`,
  male: true,
  season: `all`,
  details: {
    description: `Inside - a compartment for a laptop and a pocket with a zipper for keys
      The bottom of the backpack is reinforced with an additional layer of waterproof fabric`,
    size: [`Universal`],
    images: [
      `product7`,
      `product7.1`,
      `product7.2`,
      `product7.3`,
      `product7.4`
    ],
  }
}, {
  id: 8,
  name: `Sweatshirt "Staff Advertisement"`,
  price: 450,
  type: `sweatshirt`,
  season: `autumn-spring`,
  male: true,
  details: {
    description: `Made from highquality European Cotton
      High-quality print on the back`,
    size: [`L`, `XL`, `XXL`],
    images: [
      `product8`,
      `product8.1`,
      `product8.2`
    ],
  }
}, {
  id: 9,
  name: `Winter jacket Velours Black`,
  price: 1300,
  type: `jacket`,
  male: false,
  season: `winter`,
  details: {
    description: `Upper fabric - velor
      Sewn high-quality insulation Hollowsoft
      Black light polyester lining
      The hood is regulated by a cord with plastic clips
      Two pockets for hands are closed on buttons, covered with slats
      Width below adjustable with plastic clips`,
    size: [`L`],
    images: [
      `product9`,
      `product9.1`,
      `product9.2`,
      `product9.3`,
      `product9.4`
    ],
  }
}, {
  id: 10,
  name: `Winter jacket short`,
  price: 1400,
  male: false,
  type: `jacket`,
  season: `winter`,
  details: {
    description: `Wind- and damp protected
     Highquality insulation Hollowsoft
     Manty pockets
     The recommended temperature is -25°С
     Season: Winter`,
    size: [`XS`, `S`, `M`, `L`],
    images: [
      `product10`,
      `product10.1`,
      `product10.2`,
      `product10.3`,
      `product10.4`
    ],
  }
}, {
  id: 11,
  name: `Winter hat`,
  price: 180,
  male: false,
  type: `hat`,
  season: `winter`,
  details: {
    description: `Material: 50% - wool, 50% - acrylic
      Size is Universal`,
    size: [`Universal`],
    images: [
      `product11`,
      `product11.1`
    ],
  },
}, {
  id: 12,
  name: `Backpack Back to the Future`,
  price: 440,
  type: `accessories`,
  male: true,
  season: `all`,
  details: {
    description: `Inside - a compartment for a laptop and a pocket with a zipper for keys
      The bottom of the backpack is reinforced with an additional layer of waterproof fabric`,
    size: [`Universal`],
    images: [
      `product12`,
      `product12.2`,
      `product12.3`,
      `product12.4`
    ],
  }
}, {
  id: 13,
  name: `Hoody Cards`,
  price: 560,
  type: `hoody`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Made from highquality European Cotton
      High-quality print on the chest`,
    size: [`L`],
    images: [
      `product13`,
      `product13.1`,
      `product13.2`
    ],
  }
}, {
  id: 14,
  name: `Winter jacket Joy Black`,
  price: 1700,
  type: `jacket`,
  male: false,
  season: `winter`,
  details: {
    description: `Sewn high-quality insulation Hollowsoft
      Lining in black lightweight polyester
      High-quality slider two-way lightning
      The hood is attached with a zipper and buttons, easily detachable
      Eco-fur is attached with a zipper, can be easily removed if desired
      In the sleeves there are knitted cuffs for protection from wind and snow
      Chest pockets with water-repellent zippers, inside insulated with a pleasant and warm fleece
      Two lower pockets on buttons, covered with slats
      Composition: 100% polyester
      Recommended temperature conditions for use up to -25 ° C
      Season: Winter`,
    size: [`XS`, `S`, `M`, `L`],
    images: [
      `product14`,
      `product14.1`,
      `product14.2`,
      `product14.3`,
      `product14.4`,
      `product14.5`
    ],
  }
}, {
  id: 15,
  name: `Pants Navy TS`,
  price: 580,
  type: `pants`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Material 97% cotton 3% elastane
      On the sides, two pockets with Velcro for extra space
      Also, two pockets for hands on the back and front`,
    size: [`XS`, `S`, `M`, `L`, `XL`, `XXL`],
    images: [
      `product15`,
      `product15.1`,
      `product15.2`,
      `product15.3`,
      `product15.4`
    ],
  }
}, {
  id: 16,
  name: `Pants Cargo HB`,
  price: 570,
  type: `pants`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Material 97% cotton 3% elastane
      On the sides, two pockets with Velcro for extra space
      Also, two pockets for hands on the back and front`,
    size: [`XS`, `S`, `M`, `L`, `XL`, `XXL`],
    images: [
      `product16`,
      `product16.1`,
      `product16.2`,
      `product16.3`
    ],
  }
}, {
  id: 17,
  name: `Backpack green Cheetah`,
  price: 440,
  type: `accessories`,
  male: true,
  season: `all`,
  details: {
    description: `Inside - a compartment for a laptop and a pocket with a zipper for keys
      The bottom of the backpack is reinforced with an additional layer of waterproof fabric`,
    size: [`Universal`],
    images: [
      `product17`,
      `product17.1`,
      `product17.2`,
      `product17.3`,
      `product17.4`
    ],
  }
}, {
  id: 18,
  name: `Autumn-Spring jacket Wind Black`,
  price: 990,
  type: `jacket`,
  male: false,
  season: `autumn-spring`,
  details: {
    description: `Made from matte fabric laminated with breathable, wind and moisture resistant membrane. - Nice black polyester lining
      The central lightning is two-way, from above it is closed by a windproof bar on buttons
      Two chest pockets with zippers
      Two lower pockets with magnets
      The width of the hood is regulated by an elastic cord with a plastic length regulator
      Width of cuffs is regulated on flypapers
      Composition: 100% polyester`,
    size: [`XS`, `S`],
    images: [
      `product18`,
      `product18.1`,
      `product18.2`,
      `product18.3`,
      `product18.4`,
      `product18.5`,
      `product18.6`
    ],
  }
}, {
  id: 19,
  name: `Backpack Universe`,
  price: 440,
  type: `accessories`,
  male: true,
  season: `all`,
  details: {
    description: `Inside - a compartment for a laptop and a pocket with a zipper for keys
      The bottom of the backpack is reinforced with an additional layer of waterproof fabric`,
    size: [`Universal`],
    images: [
      `product19`,
      `product19.1`,
      `product19.2`,
      `product19.3`,
      `product19.4`
    ],
  }
}, {
  id: 20,
  name: `Winter boots Navy 2019`,
  price: 1470,
  type: `shoes`,
  male: true,
  season: `winter`,
  details: {
    description: `Three-layer polyurethane sole protects you from frost
      The top of the waterproof nubuck will not let the leg get wet
      Inside, warm fur is sewn
      Inserts from cordura fabric
      Temperature condition -25 °`,
    size: [40, 41, 42, 43, 44, 45, 46],
    images: [
      `product20`,
      `product20.1`,
      `product20.2`,
      `product20.3`,
      `product20.4`
    ],
  }
}, {
  id: 21,
  name: `Woman sneakers Attempt Black`,
  price: 860,
  type: `shoes`,
  male: false,
  season: `summer`,
  details: {
    description: `The Staff brand has earned an impeccable reputation with quality products such as these sneakers. The presented pair is as practical and comfortable to wear as elegant and stylish in appearance. Textured details made of genuine eco-leather add a special charm to sneakers. The model is suitable for completing a fashionable spring or autumn look. The coal-black shade is easily combined with clothes of any tones and styles, from classic to sporty.
      Women's shoes Staff attempt Black GE0015 - versatile shoes for every modern girl. They are great for jeans, trousers, skirts and even dresses. At the same time, moving in sneakers is free and easy.
      Maximum wearing comfort is provided by the following features of the model:
      durable sole made of white polyurethane, shading the black top and complementing the snow-white laces;
      soft tongues and elements that fit the ankles;
      sturdy shoelaces that regulate completeness and provide an optimal fit.
      For the manufacture of shoe upper, high-quality and wear-resistant materials are used. There is no need to wear a pair for a long time before you go out. Even if the sneakers are shod on a bare foot, the skin will not rub, no matter how much you walk in them. As a decor, the designers used a brand patch on the tongue.
      Hurry up to buy gym shoes at a nice price and complete any look with comfortable shoes! We deliver all over Ukraine`,
    size: [36, 37],
    images: [
      `product21`,
      `product21.1`,
      `product21.2`,
      `product21.3`
    ],
  }
}, {
  id: 22,
  name: `Backpack Wonderful Cats`,
  price: 440,
  type: `accessories`,
  male: false,
  season: `all`,
  details: {
    description: `Black patch with the logo of the Staff
      Closure of the main pocket on a two-way zipper
      Zippered bottom pocket for extra useful items
      Inside a laptop compartment
      Shoulder straps are adjustable in length
      Two side pockets made of mesh for personal items
      The back of the backpack externally consists of a mesh.
      And inside there is a filler that provides comfort when wearing and keeps its shape when the backpack is full`,
    size: [`Universal`],
    images: [
      `product22`,
      `product22.1`,
      `product22.2`
    ],
  }
}, {
  id: 23,
  name: `Backpack Flags Modern`,
  price: 440,
  type: `accessories`,
  male: false,
  season: `all`,
  details: {
    description: `Black patch with the logo of the Staff
      Closure of the main pocket on a two-way zipper
      Zippered bottom pocket for extra useful items
      Inside a laptop compartment
      Shoulder straps are adjustable in length
      Two side pockets made of mesh for personal items
      The back of the backpack externally consists of a mesh.
      And inside there is a filler that provides comfort when wearing and keeps its shape when the backpack is full`,
    size: [`Universal`],
    images: [
      `product23`,
      `product23.1`,
      `product23.2`
    ],
  }
}, {
  id: 24,
  name: `Backpack Retro Blue`,
  price: 440,
  type: `accessories`,
  male: false,
  season: `all`,
  details: {
    description: `Black patch with the logo of the Staff
      Closure of the main pocket on a two-way zipper
      Zippered bottom pocket for extra useful items
      Inside a laptop compartment
      Shoulder straps are adjustable in length
      Two side pockets made of mesh for personal items
      The back of the backpack externally consists of a mesh.
      And inside there is a filler that provides comfort when wearing and keeps its shape when the backpack is full`,
    size: [`Universal`],
    images: [
      `product24`,
      `product24.1`,
      `product24.2`
    ],
  }
}, {
  id: 25,
  name: `T-shirt color block red and navy`,
  price: 160,
  type: `t-shirt`,
  male: true,
  season: `summer`,
  details: {
    description: `Сделана из качественного европейского коттона`,
    size: [`XL`],
    images: [
      `product25`,
      `product25.1`,
      `product25.2`
    ],
  }
}, {
  id: 26,
  name: `Winter Boots SPORT Black`,
  price: 1520,
  type: `shoes`,
  male: true,
  season: `winter`,
  details: {
    description: `The Eva sole has excellent cushioning, lightness, wear resistance and does not turn yellow with time
      The top of the waterproof nubuck will not let the leg get wet
      Inside the natural fur is sewn
      Temperature condition: -25 ° C`,
    size: [40, 41, 42, 43, 44, 45],
    images: [
      `product26`,
      `product26.1`,
      `product26.2`,
      `product26.3`,
      `product26.4`
    ],
  }
}, {
  id: 27,
  name: `Winter Boots SPORT Navy`,
  price: 1520,
  type: `shoes`,
  male: true,
  season: `winter`,
  details: {
    description: `The Eva sole has excellent cushioning, lightness, wear resistance and does not turn yellow with time
      The top of the waterproof nubuck will not let the leg get wet
      Inside the natural fur is sewn
      Temperature condition: -25 ° C`,
    size: [40, 41, 42, 43, 44, 45],
    images: [
      `product27`,
      `product27.1`,
      `product27.2`,
      `product27.3`,
      `product27.4`
    ],
  }
}, {
  id: 28,
  name: `Winter Boots SPORT Black 2019`,
  price: 1470,
  type: `shoes`,
  male: true,
  season: `winter`,
  details: {
    description: `The Eva sole has excellent cushioning, lightness, wear resistance and does not turn yellow with time
      The top of the waterproof nubuck will not let the leg get wet
      Inside the natural fur is sewn
      Temperature condition: -25 ° C`,
    size: [40, 41, 42, 43, 44, 45],
    images: [
      `product28`,
      `product28.1`,
      `product28.2`,
      `product28.3`,
      `product28.4`
    ],
  }
}, {
  id: 29,
  name: `Sneakers Black`,
  price: 1180,
  type: `shoes`,
  male: true,
  season: `autumn-spring`,
  details: {
    description: `Material - eco leather
      Inserts of breathable mesh
      The Eva sole has excellent cushioning, lightness, wear resistance and does not turn yellow with time`,
    size: [39],
    images: [
      `product29`,
      `product29.1`,
      `product29.2`,
      `product29.3`,
      `product29.4`
    ],
  }
}];

export default list;
