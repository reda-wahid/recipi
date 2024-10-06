//image not found
import {
  slider_images,
  cuisines_images,
  meals_images,
  dishes_images,
  categery,
  categery_2,
  categery_3,
  categery_4,
  categery_5,
  categery_6,
  categery_7,
  categery_8,
  dices_1,
  dices_2,
  dices_3,
  dices_4,
  dices_5,
  dices_6,
  dices_7,
  dices_8,
  dices_9
} from "./utils/images";

const sliderData = [
  {
    id: 1,
    title: "Baked Chicken Breast",
    text: "A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.",
    image: slider_images[0],
  },
  {
    id: 2,
    title: "Homemade Chicken Tikka Masala",
    text: "A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.",
    image: slider_images[1],
  },
  {
    id: 3,
    title: "Meat Burger with salad cheese tomato and ketchup",
    text: "A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.",
    image: slider_images[2],
  },
  {
    id: 4,
    title: "Raspberry Tartlet dessert with almong flakes",
    text: "A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.",
    image: slider_images[3],
  },
];

const footerLinksData = [
  {
    linkId: "recipe-glossary",
    linkName: "Recipe Glossary",
  },
  {
    linkId: "press-&-media",
    linkName: "Press & Media",
  },
  {
    linkId: "privacy-policy",
    linkName: "Privacy Policy",
  },
  {
    linkId: "terms-&-conditions",
    linkName: "Terms & Conditions",
  },
];

export {
  sliderData,
  footerLinksData,
};

export const allData = [
  {
    id:111,
    data:[
    {
      useid: 111,
      id: 1,
      type: "American",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[0],
    detailes  : [{
      useid: 1,
      id: 23,
      price: 125,
        image: categery[0],
        name: "Apple pie",
        title: "Apple pie is the classic American dessert, so much so that it is regularly used as a synonym for Americanism. Just the words ‘apple pie’ conjure up images of white picket fences and good old fashioned home cooking.It goes without saying that apple pie is one of the most iconic American foods",
      },
      {
        useid: 1,
        id: 24,
        price: 256,
        image: categery[1],
        name: "Scrapple",
        title: "Scrapple is a dish prepared using scraps of pork meat, generally trimmings, mixed with cornmeal, buckwheat flour and spices (such as bay leaves, peppercorns, thyme, sage, garlic, and salt). It is then shaped into a semi-solid, congealed loaf, sliced and pan-fried before being served.Often eaten during breakfast time, scrapple can be served with eggs, pancakes, potatoes, toast and occasionally ketchup. Scrapple is a traditional dish of the southern Mid-Atlantic states (like Delaware, Maryland, South Jersey, Pennsylvania, and Virginia",
      }
     , {
      useid: 1,
      id: 25,
      price: 515,
        image: categery[2],
        name: "Clam Chowder",
        title: "Clam chowder originated on the East Coast of America and is now enjoyed throughout the country as a hearty traditional meal.Clam chowder is relatively unique to the USA since it isn’t a recipe popular anywhere else in the world. So it is fair to say that clam chowder is as American as apple pie!Apparently most popular on Fridays when Catholics abstain from eating meat, clam chowder is readily available in restaurants throughout the US",
      }
      ]
    },
    {
      useid: 111,
      id: 2,
      type: "Asian",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[1],
      detailes  : [{
        useid: 2,
        id: 26,
        price: 226,
        image: categery_2[0],
        name: "Burek Recipe",
        title: "Börek (also known as Burek, Byrek or Boureki) covers a range of pastry dishes made by layering thin phyllo dough, with fillings such as cheese, minced meat, spinach and seasonings, along with a creamy egg yogurt mixture which is baked into a crispy and flaky pie-like dish.",
      },
      {
        useid: 2,
        id: 27,
        price: 128,
        image: categery_2[1],
        name: "Lahmacun Turkish Pizza Recipe",
        title: "Lahmacun (pronounced LA-ha-MA-chewn) is also known as ‘Turkish Pizza’ or ‘Armenian Pizza’. It is actually significantly different from a traditional Italian pizza, with no cheese to be found in the dish.Lahmacun is made using a round, thin dough topped with minced meat, vegetables and an array of spices. The thin crust is one of its defining features.",
      }
     , {
      useid: 2,
      id: 28,
      price: 255,
        image: categery_2[2],
        name: "Georgian Khachapuri Recipe",
        title: "Khachapuri is a traditional Georgian homemade bread that is typically shaped like a boat, topped with various kinds of cheeses and a runny egg at the centre. It is as a staple dish of Georgia where flatbreads are a popular snack or side dish.",
      }
      ]
    },
    {
      useid: 111,
      id: 3,
      type: "Chinese",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[2],
      detailes  : [{
        useid: 3,
        id: 29,
        price: 165,
        image: categery_3[0],
        name: "Chinese Tong Sui Recipe",
        title: "Tong sui is a sweet soup from China, made with sugar, beans, milk, and fruits. The name of this dish translates to sugar water in Cantonese.Nuts or seeds may also be added to tong sui, either ground into a paste or added whole. Modern recipes also include tapioca pearls, which are particularly popular with children and teenagers",
      },
      {
        useid: 3,
        id: 30,
        price: 125,
        image: categery_3[1],
        name: "Sesame Jellyfish Salad Recipe",
        title: "Jellyfish are chiefly free-swimming marine animals consisting of umbrella-shaped bells and trailing tentacles. They are found throughout the world, from surface waters to the deep sea. There are several species of this animal that are considered to be suitable for human consumption and are also used as an ingredient in many dishes.",
      }
     , {
      useid: 3,
      id: 31,
      price: 212,
        image: categery_3[2],
        name: "Chinese Dan Tat",
        title: "Dan Tat are small pastries with an egg custard filling originating in China. They are also known as Chinese egg tarts and are popular both in China and in Chinese-speaking communities all over the world. They are traditionally served with Chinese tea and are made using the simple ingredients of flour, butter, sugar, eggs, custard, and milk. ",
      }
      ]
    },
    {
      useid: 111,
      id: 4,
      type: "French",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[3],
      detailes  : [{
        useid: 4,
        id: 32,
        price: 225,
        image: categery_4[0],
        name: "French Chateaubriand",
        title: "Chateaubriand is of the finest classic French dishes consisting of a large steak fillet cut from the centre of beef tenderloin, served with a sauce and/or mushrooms.",
      },
      {
        useid: 4,
        id: 33,
        price: 325,
        image: categery_4[1],
        name: "Ratatouille",
        title: "Teeming with vibrant colours and a delicious flavour, ratatouille is an interesting stew cooked with onion, garlic, potato, tomato, bell pepper, and many other vegetables.",
      }
     , {
      useid: 4,
      id: 34,
      price: 185,
        image: categery_4[2],
        name: "Croissant",
        title: "Flaky, buttery, crescent-shaped croissants are just one part of French cuisine’s long love affair with bread. They are an inseparable part of continental breakfast all over Europe.",
      }
      ]
    },
    {
      useid: 111,
      id: 5,
      type: "Mexican",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[4],
      detailes  : [{
        useid: 5,
        id: 35,
        price: 225,
        image: categery_5[0],
        name: "Mexican Tacos Al Carbon",
        title: "Chateaubriand is of the finest classic French dishes consisting of a large steak fillet cut from the centre of beef tenderloin, served with a sauce and/or mushrooms.",
      },
      {
        useid: 5,
        id: 36,
        price: 325,
        image: categery_5[1],
        name: "Mexican Sopa Azteca",
        title: "Sopa Azteca is a Mexican soup made of tortillas soaked in a spiced tomato-based broth.This dish is traditionally prepared by simmering corn tortillas in broth until they softened, and is flavored with chili peppers and other local herbs and spices.",
      }
     , {
      useid: 5,
      id: 37,
      price: 425,
        image: categery_5[2],
        name: "Mexican Ensalada de Pollo",
        title: "Ensalada de pollo is a creamy chicken salad from Mexico, a popular, hearty dish to serve at parties and holidays. This salad is made with chicken, combined with chopped up vegetables and lettuce, coated with a creamy mayonnaise-based dressing.",
      }
      ]
    },
    {
      useid: 111,
      id: 6,
      type: "Middle Eastern",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[5],
      detailes  : [{
        useid: 6,
        id: 38,
        price: 225,
        image: categery_6[0],
        name: "Egyptian Koshary",
        title: "Koshary, Egypt’s national dish, consists of chickpeas, pasta, rice and brown lentils, smothered in a spicy tomato sauce and topped with delicious crispy onions. This dish is a hearty Egyptian comfort food, found in most Egyptian restaurants and homes.",
      },
      {
        useid: 6,
        id: 39,
        price: 125,
        image: categery_6[1],
        name: "Palestinian Musakhan",
        title: "Musakhan is a chicken and onion dish served on a flat bread. Traditionally an entire chicken would be roasted then broken down to make Mushakan. The chicken is flavored with spices, with sumac being the predominant one",
      }
     , {
      useid: 6,
      id: 40,
      price: 355,
        image: categery_6[2],
        name: "Kabsa saudi arabia",
        title: "The Kingdom of Saudi Arabia, located in the heart of Western Asia, is the largest country of the Middle East and one of the most influential in the region. The country has huge economic importance due to being the world’s leading oil exporter. It is also well-known for being the ancestral home to the second largest religion of the world, Islam.",
      }
      ]
    },
    {
      useid: 111,
      id: 7,
      type: "Japanese",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[6],
      detailes  : [{
        useid: 7,
        id: 41,
        price: 245,
        image: categery_7[0],
        name: "Japanese Temaki",
        title: "Temaki is a Japanese sushi dish made of a cone-shaped roll of nori (seaweed) which is filled with sushi rice, seafood, vegetables, and topped with condiments such as wasabi and pickled ginger.",
      },
      {
        useid: 7,
        id: 42,
        price: 324,
        image: categery_7[1],
        name: "Japanese Tonkotsu Ramen",
        title: "Tonkatsu Ramen is a Japanese ramen noodle dish made with noodles and a creamy broth made from pork bones and flavored with garlic, ginger, scallions and onions. Toppings such as a soft-boiled egg, sliced pork belly, and green onion are often added to accompany the noodles",
      }
     , {
      useid: 7,
      id: 43,
      price: 215,
        image: categery_7[2],
        name: "Japanese Unadon",
        title: "Unadon is a typical Japanese dish consisting of grilled unagi (eel) fillets placed over steamed rice. The unagi is made kabayaki-style, like teriyaki. The fillets are coated with a sweetened soy-based sauce (also known as tare) and caramelized, generally over a charcoal fire.",
      }
      ]
    },
    {
      useid: 111,
      id: 8,
      type: "Italian",
      title:
        "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: cuisines_images[7],
      detailes  : [{
        useid: 8,
        id: 44,
        price: 215,
        image: categery_8[0],
        name: "Italian Pizza",
        title: "Pizza Capricciosa is a style of Italian pizza which is an ordinary pizza dough with a margherita sauce base which is topped with mozzeralla cheese, mushrooms, ham, artichokes and black olives. It is drizzled generously with oil before baking.",
      },
      {
        useid: 8,
        id: 45,
        price: 345,
        image: categery_8[1],
        name: "Italian Spaghetti alla Puttanesca",
        title: "Spaghetti alla Puttanesca is an Italian pasta dish known for its salty sauce containing olives, anchovies, capers, peppers and garlic. The mixture of olive and anchovies bring an umami flavor to the sauce while the garlic and pepper make for an aromatic meal. This dish is eaten as the main course for an evening meal and might be accompanied by small appetizers or wine",
      }
     , {
      useid: 8,
      id: 46,
      price: 220,
        image: categery_8[2],
        name: "Cotoletta Alla Milanese",
        title: "Cotoletta Milanese, also known as the Milanese veal chop, is a typical Lombard dish similar to the German Wiener Schnitzel but cooked with the bone-in.It is traditionally fried with butter and is often taken as a second course of the Lombard culinary tradition, a symbolic dish of the city of Milan, Italy.",
      }
      ],
      
      
    },
  ],

     
},
////////////////////////////////////////////////////////////////
{
  id: 222,
  data:
        [
          {
            useid: 222,
            id: 9,
            type: "Breakfast",
            title:
              "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
            image: meals_images[0],
            detailes  : [{
              id: 74,
              price: 225,
              image: categery_4[0],
              name: "Chateaubriand",
              title: "Chateaubriand is of the finest classic French dishes consisting of a large steak fillet cut from the centre of beef tenderloin, served with a sauce and/or mushrooms.",
            },
            {
              id: 75,
              price: 215,
              image: categery_4[1],
              name: "Ratatouille",
              title: "Teeming with vibrant colours and a delicious flavour, ratatouille is an interesting stew cooked with onion, garlic, potato, tomato, bell pepper, and many other vegetables.",
            }
           , {
            id: 76,
            price: 125,
              image: categery_4[2],
              name: "Croissant",
              title: "Flaky, buttery, crescent-shaped croissants are just one part of French cuisine’s long love affair with bread. They are an inseparable part of continental breakfast all over Europe.",
            }
            ]
          },
          {
            useid: 222,
            id: 10,
            type: "Lunch",
            title:
              "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
            image: meals_images[1],
            detailes:[{
              id: 77,
              price: 125,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_7[0]
            },
            {
              id: 78,
              price: 225,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_7[1]
            },
            {
              id: 79,
              price: 325,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_7[2]
            }]
        
          },
          {
            useid: 222,
            id: 11,
            type: "Dinner",
            title:
              "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
            image: meals_images[2],
            detailes  : [{
              id: 80,
              price: 195,
              image: categery_6[0],
              name: "Koshary",
              title: "Koshary, Egypt’s national dish, consists of chickpeas, pasta, rice and brown lentils, smothered in a spicy tomato sauce and topped with delicious crispy onions. This dish is a hearty Egyptian comfort food, found in most Egyptian restaurants and homes.",
            },
            {
              id: 81,
              price: 185,
              image: categery_6[1],
              name: "Musakhan",
              title: "Musakhan is a chicken and onion dish served on a flat bread. Traditionally an entire chicken would be roasted then broken down to make Mushakan. The chicken is flavored with spices, with sumac being the predominant one",
            }
           , {
            id: 82,
            price: 80,
              image: categery_6[2],
              name: "Kabsa",
              title: "The Kingdom of Saudi Arabia, located in the heart of Western Asia, is the largest country of the Middle East and one of the most influential in the region. The country has huge economic importance due to being the world’s leading oil exporter. It is also well-known for being the ancestral home to the second largest religion of the world, Islam.",
            }
            ]
          },
          {
            useid: 222,
            id: 12,
            type: "Snack",
            title:
              "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
            image: meals_images[3],
            detailes:[{
              id: 83,
              price: 25,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_3[0]
            },
            {
              id: 84,
              price: 85,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_3[1]
            },
            {
              id: 85,
              price: 90,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_3[2]
            }]
          },
          {
            useid: 222,
            id: 13,
            type: "Teatime",
            title:
              "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
            image: meals_images[4],
            detailes:[{
              id: 86,
              price: 50,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_1[0]
            },
            {
              id: 87,
              price: 75,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_1[1]
            },
            {
              id: 88,
              price: 65,
              title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
              image: dices_1[2]
            }]
          }, 
        ],
},  
////////////////////////////////////////////////////////////////
 {
  id:333,
  data:[
     
  {
    useid: 333,
    id: 14,
    type: "drinks",
    title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[0],
    detailes:[{
      id: 47,
      price: 125,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_1[0]
    },
    {
      id: 48,
      price: 135,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_1[1]
    },
    {
      id: 49,
      price: 45,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_1[2]
    }]
  },
  {
    useid: 333,
    id: 15,
    type: "Biscuits and cookies",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[1],
    detailes:[{
      id: 50,
      price: 12,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_2[0]
    },
    {
      id: 51,
      price: 75,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_2[1]
    },
    {
      id: 52,
      price: 25,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_2[2]
    }]
  },
  {
    useid: 333,
    id: 16,
    type: "Desserts",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[2],
    detailes:[{
      id: 53,
      price: 125,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_3[0]
    },
    {
      id: 54,
      price: 225,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_3[1]
    },
    {
      id: 55,
      price: 325,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_3[2]
    }]
  },
  {
    useid: 333,
    id: 17,
    type: "Starter",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[3],
    detailes:[{
      id: 56,
      price: 125,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_4[0]
    },
    {
      id: 57,
      price: 135,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_4[1]
    },
    {
      id: 58,
      price: 150,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_4[2]
    }]
  },
  {
    useid: 333,
    id: 18,
    type: "Soup",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[4],
    detailes:[{
      id: 59,
      price: 125,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_5[0]
    },
    {
      
      id: 60,
      price: 120,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_5[1]
    },
    {
      id: 61,
      price: 160,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_5[2]
    }]
  },
  {
    useid: 333,
    id: 19,
    type: "Pancake",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[5],
    detailes:[{
      id: 62,
      price: 95,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_6[0]
    },
    {
      id: 63,
      price: 125,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_6[1]
    },
    {
      id: 64,
      price: 205,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_6[2]
    }]
  },
  {
    useid: 333,
    id: 20,
    type: "Main course",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[6],
    detailes:[{
      id: 65,
      price: 325,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_7[0]
    },
    {
      id: 66,
      price: 425,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_7[1]
    },
    {
      id: 67,
      price: 525,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_7[2]
    }]
  },
  {
    useid: 333,
    id: 21,
    type: "Condiments and sauces",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[7],
    detailes:[{
      id: 68,
      price: 25,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_8[0]
    },
    {
      id: 69,
      price: 65,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_8[1]
    },
    {
      id: 70,
      price: 45,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_8[2]
    }]
  },
  {
    useid: 333,
    id: 22,
    type: "Salad",
    title:
      "Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
    image: dishes_images[8],
    detailes:[{
      id: 71,
      price: 85,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_9[0]
    },
    {
      id: 72,
      price: 70,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_9[1]
    },
    {
      id: 73,
      price: 95,
      title:"Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense",
      image: dices_9[2]
    }]
  },
  ]
 }
];
