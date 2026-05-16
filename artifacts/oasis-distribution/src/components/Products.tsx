import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

type Category = "all" | "pastelitos" | "emp-venezolana" | "emp-argentina" | "cachitos" | "tequenos" | "pan-de-jamon" | "pandebono" | "dmt-bakery" | "dmt-chorizos" | "dmt-meals";

interface Product {
  id: string;
  name: string;
  variant: string;
  description: string;
  descEs: string;
  image: string;
  tags: string[];
  category: string;
}

const allProducts: Product[] = [
  // Pastelitos
  { id: "kd-past-queso-papa", name: "Pastelito", variant: "Queso y Papa", description: "Flaky fried pastry filled with cheese and potato. A classic Venezuelan street snack, pre-fried and ready to heat.", descEs: "Masa hojaldrada frita rellena de queso y papa. Un clásico snack venezolano de calle, prefrito y listo para calentar.", image: "/products/kd/variants/past-queso-papa.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },
  { id: "kd-past-carne", name: "Pastelito", variant: "Carne", description: "Crispy dough filled with seasoned ground beef. A top-selling item for cafés, lunch counters, and food trucks.", descEs: "Masa crujiente rellena de carne molida sazonada. Uno de los más vendidos para cafés, loncheras y food trucks.", image: "/products/kd/variants/past-carne.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "pastelitos" },
  { id: "kd-past-pollo", name: "Pastelito", variant: "Pollo", description: "Flaky pastry stuffed with seasoned shredded chicken. Light, flavorful and a great option for diverse menus.", descEs: "Pastelito hojaldrado relleno de pollo desmenuzado sazonado. Liviano, sabroso y una gran opción para menús variados.", image: "/products/kd/variants/past-pollo.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "pastelitos" },
  { id: "kd-past-queso", name: "Pastelito", variant: "Queso", description: "Simple and crowd-pleasing — fried dough filled with melted white cheese. A vegetarian-friendly staple.", descEs: "Simple y popular — masa frita rellena de queso blanco derretido. Un favorito vegetariano.", image: "/products/kd/variants/past-queso.webp", tags: ["Frozen", "Pre-Fried", "Vegetarian"], category: "pastelitos" },
  { id: "kd-past-jamon-queso", name: "Pastelito", variant: "Jamón y Queso", description: "Ham and cheese tucked inside crispy pastry dough — a classic combination that never fails.", descEs: "Jamón y queso dentro de una masa crujiente hojaldrada — una combinación clásica que nunca falla.", image: "/products/kd/variants/past-jamon-queso.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },
  { id: "kd-past-pizza", name: "Pastelito", variant: "Pizza", description: "Tomato sauce and cheese in a golden fried pastry — a playful twist on the classic pastelito, popular with all ages.", descEs: "Salsa de tomate y queso en una masa frita dorada — una versión divertida del pastelito clásico, popular entre todas las edades.", image: "/products/kd/variants/past-pizza.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },

  // Empanadas Venezolanas
  { id: "kd-ev-queso", name: "Empanada Venezolana", variant: "Queso", description: "Corn masa filled with white cheese, pan-fried to a golden crisp. The most traditional Venezuelan empanada.", descEs: "Masa de maíz rellena de queso blanco, frita hasta quedar dorada. La empanada venezolana más tradicional.", image: "/products/kd/variants/emp-ven-queso.webp", tags: ["Frozen", "Pre-Fried", "Vegetarian"], category: "emp-venezolana" },
  { id: "kd-ev-mechada", name: "Empanada Venezolana", variant: "Carne Mechada", description: "Shredded beef slow-cooked with peppers and spices, wrapped in corn dough. A Venezuelan household staple.", descEs: "Carne de res desmenuzada cocinada lentamente con pimentones y especias, envuelta en masa de maíz. Un clásico venezolano.", image: "/products/kd/variants/emp-ven-mechada.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-pollo", name: "Empanada Venezolana", variant: "Pollo", description: "Tender seasoned chicken inside corn masa dough. A lighter option that's consistently popular in food service.", descEs: "Pollo sazonado y tierno dentro de masa de maíz. Una opción más liviana y constantemente popular en el servicio de alimentos.", image: "/products/kd/variants/emp-ven-pollo.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-molida", name: "Empanada Venezolana", variant: "Carne Molida", description: "Seasoned ground beef in corn dough — hearty, flavorful and a top seller for high-volume food service.", descEs: "Carne molida sazonada en masa de maíz — abundante, sabrosa y muy vendida en restaurantes y food trucks.", image: "/products/kd/variants/emp-ven-molida.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-pabellon", name: "Empanada Venezolana", variant: "Pabellón", description: "Inspired by Venezuela's national dish — black beans, shredded beef, and sweet plantain in corn dough.", descEs: "Inspirada en el plato nacional de Venezuela — caraotas negras, carne mechada y tajadas en masa de maíz.", image: "/products/kd/variants/emp-ven-pabellon.webp", tags: ["Frozen", "Pre-Fried", "Specialty"], category: "emp-venezolana" },
  { id: "kd-ev-jamon-queso", name: "Empanada Venezolana", variant: "Jamón y Queso", description: "Ham and cheese filling in crispy corn masa — a breakfast and snack favorite for café menus.", descEs: "Jamón y queso en masa de maíz crujiente — favorita del desayuno y snack para menús de café.", image: "/products/kd/variants/emp-ven-jamon-queso.webp", tags: ["Frozen", "Pre-Fried", "Breakfast"], category: "emp-venezolana" },
  { id: "kd-ev-cazon", name: "Empanada Venezolana", variant: "Cazón", description: "Shark fish filling in corn dough — a coastal Venezuelan delicacy ideal for specialty restaurant menus.", descEs: "Relleno de cazón en masa de maíz — una delicia costera venezolana ideal para menús de restaurantes especializados.", image: "/products/kd/variants/emp-ven-cazon.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-camaron", name: "Empanada Venezolana", variant: "Camarón", description: "Seasoned shrimp inside golden corn masa. A premium seafood option for upscale casual dining.", descEs: "Camarones sazonados dentro de masa de maíz dorada. Una opción premium de mariscos para restaurantes casuales.", image: "/products/kd/variants/emp-ven-camaron.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-mariscos", name: "Empanada Venezolana", variant: "Mariscos", description: "Mixed seafood filling inside crispy corn dough. Perfect for coastal-themed restaurants and seafood menus.", descEs: "Relleno mixto de mariscos dentro de masa de maíz crujiente. Perfecta para restaurantes con tema costero.", image: "/products/kd/variants/emp-ven-mariscos.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-chorizo-queso", name: "Empanada Venezolana", variant: "Chorizo y Queso", description: "Smoky chorizo and melted cheese in corn masa dough — bold flavor that stands out on any menu.", descEs: "Chorizo ahumado y queso derretido en masa de maíz — sabor intenso que destaca en cualquier menú.", image: "/products/kd/variants/emp-ven-chorizo-queso.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "panna-emp-ven-cheese", name: "Empanada Venezolana", variant: "Cheese", description: "Corn dough empanada filled with white cheese — a Venezuelan staple for breakfast and all-day menus.", descEs: "Empanada de maíz rellena de queso blanco — un clásico venezolano para desayuno y menús de todo el día.", image: "/products/empanada-venezolana-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Breakfast"], category: "emp-venezolana" },
  { id: "panna-emp-ven-chicken", name: "Empanada Venezolana", variant: "Chicken", description: "Corn dough filled with tender seasoned chicken. Versatile and crowd-pleasing for any meal service.", descEs: "Masa de maíz rellena de pollo tierno sazonado. Versátil y popular para cualquier servicio.", image: "/products/empanada-venezolana-chicken.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },
  { id: "panna-emp-ven-beef", name: "Empanada Venezolana", variant: "Ground Beef", description: "Corn dough stuffed with seasoned ground beef. Rich and satisfying — a top seller for restaurants and food trucks.", descEs: "Masa de maíz rellena de carne molida sazonada. Abundante y satisfactoria — muy vendida en restaurantes y food trucks.", image: "/products/empanada-venezolana-beef.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },
  { id: "panna-emp-ven-shredded", name: "Empanada Venezolana", variant: "Shredded Beef", description: "Corn dough with slow-cooked shredded beef. Bold flavor, ideal for wholesale volume food service.", descEs: "Masa de maíz con carne desmenuzada cocinada lentamente. Sabor intenso, ideal para servicio mayorista de alto volumen.", image: "/products/empanada-venezolana-shredded-beef.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },

  // Empanadas Argentinas
  { id: "kd-ea-carne", name: "Empanada Argentina", variant: "Carne", description: "Wheat dough filled with seasoned ground beef, hard-boiled egg, and green onion. The Argentinian classic.", descEs: "Masa de trigo rellena de carne molida sazonada, huevo duro y cebollín. El clásico argentino.", image: "/products/kd/variants/emp-arg-carne.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-pollo", name: "Empanada Argentina", variant: "Pollo", description: "Flaky wheat pastry filled with seasoned chicken. A lighter alternative that suits a wide range of menus.", descEs: "Masa hojaldrada de trigo rellena de pollo sazonado. Una alternativa más ligera para una amplia variedad de menús.", image: "/products/kd/variants/emp-arg-pollo.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-jamon-queso", name: "Empanada Argentina", variant: "Jamón y Queso", description: "Ham and melted cheese in a buttery wheat dough — simple, satisfying, and universally popular.", descEs: "Jamón y queso derretido en una masa de trigo mantecosa — sencilla, satisfactoria y universalmente popular.", image: "/products/kd/variants/emp-arg-jamon-queso.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-espinaca", name: "Empanada Argentina", variant: "Espinaca y Queso", description: "Spinach and cheese filling in flaky Argentinian pastry — a vegetarian-friendly menu staple.", descEs: "Relleno de espinaca y queso en masa argentina hojaldrada — una opción vegetariana ideal para menús variados.", image: "/products/kd/variants/emp-arg-espinaca.webp", tags: ["Frozen", "Bake or Fry", "Vegetarian"], category: "emp-argentina" },
  { id: "panna-emp-arg-beef", name: "Empanada Argentina", variant: "Ground Beef", description: "Half-moon dough stuffed with ground beef, green onions, and hard-boiled eggs. 4 pieces per container, 85g each.", descEs: "Masa en forma de media luna rellena de carne molida, cebollín y huevo duro. 4 piezas por envase, 85g cada una.", image: "/products/empanada-argentinian-beef.jpg", tags: ["Frozen", "Ready to Bake", "Savory"], category: "emp-argentina" },
  { id: "panna-emp-arg-chicken", name: "Empanada Argentina", variant: "Chicken", description: "Flaky pastry filled with seasoned shredded chicken. A lighter option for food service and catering menus. 85g each.", descEs: "Masa hojaldrada rellena de pollo desmenuzado sazonado. Una opción más ligera para catering y servicio de alimentos. 85g cada una.", image: "/products/empanada-argentinian-chicken.jpg", tags: ["Frozen", "Ready to Bake", "Savory"], category: "emp-argentina" },
  { id: "panna-emp-arg-spinach", name: "Empanada Argentina", variant: "Spinach", description: "Golden pastry stuffed with seasoned spinach filling — a vegetarian-friendly option for diverse menus. 85g each.", descEs: "Masa dorada rellena de espinaca sazonada — una opción vegetariana para menús variados. 85g cada una.", image: "/products/empanada-argentinian-spinach.jpg", tags: ["Frozen", "Ready to Bake", "Vegetarian"], category: "emp-argentina" },
  { id: "panna-emp-col", name: "Empanada Colombiana", variant: "Colombian Style", description: "Colombian-style corn empanada with a distinct flavor profile. Perfect for authentic Latin menus and specialty programs.", descEs: "Empanada colombiana de maíz con un perfil de sabor distintivo. Perfecta para menús latinos auténticos y programas especializados.", image: "/products/empanada-colombiana.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-argentina" },

  // Cachitos
  { id: "kd-cach-queso", name: "Cachito", variant: "Queso", description: "Soft bread dough rolled around melted white cheese. A Venezuelan breakfast icon, ready to bake.", descEs: "Masa de pan suave enrollada alrededor de queso blanco derretido. Un ícono venezolano del desayuno, listo para hornear.", image: "/products/kd/variants/cachito-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-jamon-queso", name: "Cachito", variant: "Jamón y Queso", description: "Ham and cheese inside soft Venezuelan bread dough — the most popular cachito for food service.", descEs: "Jamón y queso dentro de masa suave de pan venezolano — el cachito más popular para el servicio de alimentos.", image: "/products/kd/variants/cachito-jamon-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-jamon", name: "Cachito", variant: "Jamón", description: "Classic ham-filled cachito — simple and satisfying. A high-volume breakfast item for cafés and bakeries.", descEs: "Cachito clásico relleno de jamón — simple y satisfactorio. Ideal para desayuno en cafés y panaderías.", image: "/products/kd/variants/cachito-jamon.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-chorizo-queso", name: "Cachito", variant: "Chorizo y Queso", description: "Smoky chorizo and cheese in a soft bread roll — a bold, flavorful option for specialty breakfast menus.", descEs: "Chorizo ahumado y queso en un pan suave — una opción audaz y sabrosa para menús de desayuno especializados.", image: "/products/kd/variants/cachito-chorizo-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-pavo-crema", name: "Cachito", variant: "Pavo y Crema", description: "Turkey and cream cheese filling in soft bread dough. A premium, lighter alternative for health-conscious menus.", descEs: "Relleno de pavo y queso crema en masa de pan suave. Una alternativa premium y más ligera para menús saludables.", image: "/products/kd/variants/cachito-pavo-crema.webp", tags: ["Frozen", "Ready to Bake", "Specialty"], category: "cachitos" },
  { id: "panna-cachito-ham", name: "Cachito", variant: "Ham & Cheese", description: "Finely chopped ham and mozzarella stuffed in soft, golden bread dough. A Venezuelan breakfast staple. 1 piece (170g).", descEs: "Jamón finamente picado y mozzarella rellenos en masa de pan suave y dorada. Un clásico venezolano del desayuno. 1 pieza (170g).", image: "/products/cachito-ham-cheese.jpg", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "panna-cachito-cheese", name: "Cachito", variant: "Cheese", description: "Soft bread dough filled with rich melted cheese. Light and flaky — perfect for breakfast service or café menus. 1 piece (170g).", descEs: "Masa de pan suave rellena de queso rico y derretido. Liviano y esponjoso — perfecto para desayuno o menús de café. 1 pieza (170g).", image: "/products/cachito-cheese.jpg", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },

  // Tequeños
  { id: "kd-teq-grande", name: "Tequeño", variant: "Queso Grande", description: "Large cheese sticks wrapped in golden dough — ideal as an appetizer or entrée side for restaurant service.", descEs: "Palitos de queso grandes envueltos en masa dorada — ideales como aperitivo o acompañamiento en restaurantes.", image: "/products/kd/variants/tequeno-queso-grande.webp", tags: ["Frozen", "Pre-Fried", "Appetizer"], category: "tequenos" },
  { id: "kd-teq-pequeno", name: "Tequeño", variant: "Queso Pequeño", description: "Bite-sized cheese tequeños, pre-fried and ready to heat. Perfect for parties, events, and catering.", descEs: "Tequeños de queso en tamaño bocado, prefritos y listos para calentar. Perfectos para fiestas, eventos y catering.", image: "/products/kd/variants/tequeno-queso-pequeno.webp", tags: ["Frozen", "Pre-Fried", "Catering"], category: "tequenos" },
  { id: "kd-teq-guava", name: "Tequeño", variant: "Guava y Queso", description: "Sweet guava jam and cheese inside golden dough — a sweet-savory fan favorite for specialty menus.", descEs: "Mermelada de guayaba dulce y queso dentro de masa dorada — un favorito agridulce para menús especializados.", image: "/products/kd/variants/tequeno-guava-queso.webp", tags: ["Frozen", "Pre-Fried", "Specialty"], category: "tequenos" },
  { id: "panna-tequeno-cheese", name: "Tequeño", variant: "Cheese", description: "White cheese wrapped in golden puff pastry, fried or baked to crispy perfection. 12 pieces per container, 74g each.", descEs: "Queso blanco envuelto en hojaldre dorado, frito u horneado a la perfección crujiente. 12 piezas por envase, 74g cada una.", image: "/products/tequeno-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Snack"], category: "tequenos" },
  { id: "panna-tequeno-guava", name: "Tequeño", variant: "Guava & Cheese", description: "White cheese and sweet guava paste in puff pastry — a sweet-savory combination beloved across Latin America. 74g each.", descEs: "Queso blanco y pasta de guayaba dulce en hojaldre — una combinación agridulce amada en toda América Latina. 74g cada una.", image: "/products/tequeno-guava-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Snack"], category: "tequenos" },

  // Pan de Jamón
  { id: "kd-pdj-full", name: "Pan de Jamón", variant: "Classic", description: "Traditional Venezuelan rolled bread filled with ham, olives, and raisins. Available for year-round wholesale.", descEs: "El tradicional pan venezolano enrollado relleno de jamón, aceitunas y pasas. Disponible para venta mayorista todo el año.", image: "/products/kd/variants/pan-de-jamon.webp", tags: ["Frozen", "Ready to Bake", "Specialty"], category: "pan-de-jamon" },
  { id: "kd-pdj-mini", name: "Pan de Jamón", variant: "Mini", description: "Individual mini portions of the beloved Venezuelan ham bread — ideal for catering trays and grab-and-go formats.", descEs: "Porciones individuales del querido pan venezolano de jamón — ideal para bandejas de catering y formatos grab-and-go.", image: "/products/kd/variants/mini-pan-de-jamon.webp", tags: ["Frozen", "Ready to Bake", "Catering"], category: "pan-de-jamon" },

  // Pandebono
  { id: "panna-pandebono", name: "Pandebono", variant: "Classic Cheese", description: "White cheese and tapioca baked into puffy buns. Crispy outside, light and chewy inside. 4 pieces per container, 57g each.", descEs: "Queso blanco y tapioca horneados en panecillos esponjosos. Crujientes por fuera, suaves y masticables por dentro. 4 piezas por envase, 57g cada una.", image: "/products/pandebono.jpg", tags: ["Frozen", "Ready to Bake", "Bread"], category: "pandebono" },

  // De Mi Tierra — Latin Bakery
  { id: "dmt-bunuelos", name: "Buñuelos", variant: "Colombian", description: "Traditional Colombian cheese fritters. Crispy outside, soft inside. Perfect for breakfast or as a snack.", descEs: "Buñuelos tradicionales colombianos de queso. Crujientes por fuera, suaves por dentro. Perfectos para desayuno o merienda.", image: "/products/dmt/bunuelos.jpg", tags: ["Frozen", "Ready to Fry", "Breakfast"], category: "dmt-bakery" },
  { id: "dmt-empanadas-carne", name: "Empanadas de Carne", variant: "Colombian Style", description: "Crispy beef empanadas filled with seasoned ground beef. Ready to fry or bake.", descEs: "Empanadas de carne crujientes rellenas de carne molida sazonada. Listas para freír u hornear.", image: "/products/dmt/empanadas-carne.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "dmt-bakery" },
  { id: "dmt-tequenos-queso", name: "Tequeños de Queso", variant: "Venezuelan Style", description: "Venezuelan cheese sticks wrapped in crispy dough. A beloved party appetizer.", descEs: "Palitos de queso venezolanos envueltos en masa crujiente. Un aperitivo muy querido para fiestas.", image: "/products/dmt/tequenos-queso.webp", tags: ["Frozen", "Fry or Bake", "Appetizer"], category: "dmt-bakery" },
  { id: "dmt-arepas-queso", name: "Arepas de Queso", variant: "Colombian Style", description: "Traditional Colombian cheese arepas made with white corn. Ready to heat and serve.", descEs: "Arepas de queso colombianas tradicionales hechas con maíz blanco. Listas para calentar y servir.", image: "/products/dmt/arepas-queso.webp", tags: ["Frozen", "Ready to Heat", "Breakfast"], category: "dmt-bakery" },
  { id: "dmt-arepas-choclo", name: "Arepas de Choclo", variant: "Sweet Corn", description: "Sweet corn arepas with a slightly sweet flavor. Perfect for breakfast or as a snack alongside savory dishes.", descEs: "Arepas de choclo dulce con un ligero sabor dulce. Perfectas para desayuno o como acompañamiento.", image: "/products/dmt/arepas-choclo.webp", tags: ["Frozen", "Ready to Heat", "Breakfast"], category: "dmt-bakery" },
  { id: "dmt-pandebono", name: "Pandebono", variant: "Colombian Cheese Bread", description: "Colombian cheese bread made with cassava flour. Light, chewy, and delicious.", descEs: "Pan de queso colombiano hecho con harina de yuca. Liviano, masticable y delicioso.", image: "/products/dmt/pandebono.jpg", tags: ["Frozen", "Ready to Bake", "Bread"], category: "dmt-bakery" },
  { id: "dmt-empanadas-pollo", name: "Empanadas de Pollo", variant: "Colombian Style", description: "Golden chicken empanadas with savory seasoned chicken filling. Pack of 10.", descEs: "Empanadas doradas de pollo con relleno de pollo sazonado. Paquete de 10.", image: "/products/dmt/empanadas-pollo.webp", tags: ["Frozen", "Fry or Bake", "Savory"], category: "dmt-bakery" },

  // De Mi Tierra — Chorizos & Sausages
  { id: "dmt-chorizo-argentino", name: "Chorizo Argentino", variant: "Argentine Style", description: "Classic Argentine chorizo, perfect for asados (barbecues). Made with premium cuts and authentic spices.", descEs: "Chorizo argentino clásico, perfecto para asados. Hecho con cortes premium y especias auténticas.", image: "/products/dmt/chorizo-argentino.jpeg", tags: ["Fresh/Frozen", "Grill or Pan"], category: "dmt-chorizos" },
  { id: "dmt-chorizo-colombiano", name: "Chorizo Colombiano", variant: "Colombian Style", description: "Traditional Colombian-style chorizo made with premium pork and authentic spices.", descEs: "Chorizo tradicional colombiano hecho con cerdo de primera calidad y especias auténticas.", image: "/products/dmt/chorizo-colombiano.jpg", tags: ["Fresh/Frozen", "Grill or Pan"], category: "dmt-chorizos" },
  { id: "dmt-chorizo-santarrosano", name: "Chorizo Santarrosano", variant: "Santa Rosa Style", description: "Specialty chorizo from the Santa Rosa region of Colombia. Known for its unique bold flavor.", descEs: "Chorizo especial de la región de Santa Rosa, Colombia. Conocido por su sabor único e intenso.", image: "/products/dmt/chorizo-santarrosano.jpg", tags: ["Fresh/Frozen", "Grill or Pan", "Specialty"], category: "dmt-chorizos" },
  { id: "dmt-chorizo-mexicano", name: "Chorizo Mexicano", variant: "Mexican Style", description: "Authentic Mexican chorizo with bold chili flavors. Perfect for tacos, burritos, and egg dishes.", descEs: "Chorizo mexicano auténtico con intenso sabor a chile. Perfecto para tacos, burritos y platillos de huevo.", image: "/products/dmt/chorizo-mexicano.jpg", tags: ["Fresh/Frozen", "Versatile"], category: "dmt-chorizos" },
  { id: "dmt-salami-dominicano", name: "Salami Dominicano", variant: "Dominican Style", description: "Signature salami made with a blend of Latin American spices. Perfect for charcuterie boards.", descEs: "Salami de firma hecho con una mezcla de especias latinoamericanas. Perfecto para tablas de embutidos.", image: "/products/dmt/salami-dominicano.webp", tags: ["Ready to Slice", "Charcuterie"], category: "dmt-chorizos" },
  { id: "dmt-chorizo-venezolano", name: "Chorizo Venezolano", variant: "Venezuelan Style", description: "Venezuelan-style chorizo with distinctive paprika and cumin notes. A staple for Latin menus.", descEs: "Chorizo venezolano con notas distintivas de pimentón y comino. Un básico para menús latinos.", image: "/products/dmt/chorizo-venezolano.webp", tags: ["Fresh/Frozen", "Grill or Pan"], category: "dmt-chorizos" },
  { id: "dmt-los-pepes-chorizo", name: "Los Pepes Chorizo", variant: "Spanish Style", description: "Premium Spanish chorizo from Los Galleguitos. Brings authentic Iberian flavor to Latin menus.", descEs: "Chorizo español premium de Los Galleguitos. Trae sabor ibérico auténtico a los menús latinos.", image: "/products/dmt/los-pepes-chorizo.jpg", tags: ["Ready to Use", "Specialty"], category: "dmt-chorizos" },
  { id: "dmt-longaniza-mexicana", name: "Longaniza Mexicana", variant: "Mexican Style", description: "Traditional Mexican longaniza with a perfect balance of spices. Ideal for grilling and breakfast menus.", descEs: "Longaniza mexicana tradicional con equilibrio perfecto de especias. Ideal para grill y menús de desayuno.", image: "/products/dmt/longaniza-mexicana.jpeg", tags: ["Fresh/Frozen", "Grill or Pan", "Breakfast"], category: "dmt-chorizos" },
  { id: "dmt-morcilla", name: "Morcilla Colombiana", variant: "Colombian Style", description: "Traditional blood sausage made with rice and spices. A beloved delicacy across Latin America.", descEs: "Morcilla tradicional hecha con arroz y especias. Una delicia muy querida en toda América Latina.", image: "/products/dmt/morcilla.webp", tags: ["Fresh/Frozen", "Grill or Fry", "Specialty"], category: "dmt-chorizos" },

  // De Mi Tierra — Prepared Meals
  { id: "dmt-arroz-amarillo", name: "Arroz Amarillo", variant: "Yellow Rice", description: "Traditional yellow rice made with saffron and seasonings. A colorful and flavorful side dish.", descEs: "Arroz amarillo tradicional hecho con azafrán y condimentos. Un acompañamiento colorido y sabroso.", image: "/products/dmt/arroz-amarillo.jpg", tags: ["Frozen", "Ready to Heat", "Side Dish"], category: "dmt-meals" },
  { id: "dmt-arroz-con-pollo", name: "Arroz con Pollo", variant: "Classic Latin", description: "Classic Latin chicken and rice dish made with tender chicken pieces and seasoned rice.", descEs: "Clásico arroz con pollo latino hecho con trozos de pollo tierno y arroz sazonado.", image: "/products/dmt/arroz-con-pollo.jpg", tags: ["Frozen", "Ready to Heat", "Entrée"], category: "dmt-meals" },
  { id: "dmt-steak-fajitas", name: "Steak Fajitas", variant: "Marinated", description: "Tender strips of marinated beef steak with peppers and onions. Simply heat and enjoy.", descEs: "Tiras tiernas de bistec marinado con pimientos y cebollas. Solo caliente y disfrute.", image: "/products/dmt/steak-fajitas.webp", tags: ["Frozen", "Ready to Heat", "Entrée"], category: "dmt-meals" },
  { id: "dmt-carne-mechada", name: "Carne Mechada", variant: "Venezuelan Style", description: "Venezuelan-style shredded beef in a rich tomato-based sauce. Perfect for arepas and rice dishes.", descEs: "Carne mechada venezolana en una rica salsa de tomate. Perfecta para arepas y platos de arroz.", image: "/products/dmt/carne-mechada.webp", tags: ["Frozen", "Ready to Heat", "Savory"], category: "dmt-meals" },
];

const categories: { key: Category; label: { en: string; es: string } }[] = [
  { key: "all", label: { en: "All", es: "Todos" } },
  { key: "pastelitos", label: { en: "Pastelitos", es: "Pastelitos" } },
  { key: "emp-venezolana", label: { en: "Emp. Venezolanas", es: "Emp. Venezolanas" } },
  { key: "emp-argentina", label: { en: "Emp. Argentinas", es: "Emp. Argentinas" } },
  { key: "cachitos", label: { en: "Cachitos", es: "Cachitos" } },
  { key: "tequenos", label: { en: "Tequeños", es: "Tequeños" } },
  { key: "pan-de-jamon", label: { en: "Pan de Jamón", es: "Pan de Jamón" } },
  { key: "pandebono", label: { en: "Pandebono", es: "Pandebono" } },
  { key: "dmt-bakery", label: { en: "Arepas & Bakery", es: "Arepas y Panadería" } },
  { key: "dmt-chorizos", label: { en: "Chorizos & Sausages", es: "Chorizos y Embutidos" } },
  { key: "dmt-meals", label: { en: "Prepared Meals", es: "Platos Preparados" } },
];

export function Products() {
  const { lang, t } = useLang();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const products = activeCategory === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            {t.products.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.products.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.paragraph}
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count = cat.key === "all"
              ? allProducts.length
              : allProducts.filter((p) => p.category === cat.key).length;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-primary text-white border-transparent shadow-sm"
                    : "bg-white border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat.label[lang]}
                <span className={`ml-1.5 text-xs font-normal ${isActive ? "text-white/70" : "text-muted-foreground/60"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.variant}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                    {lang === "es" ? "Mayorista" : "Wholesale"}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-foreground leading-tight">{product.name}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-1 bg-primary/10 text-primary">
                      {product.variant}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 mb-3 flex-1 leading-relaxed line-clamp-3">
                    {lang === "es" ? product.descEs : product.description}
                  </p>
                  <div className="border-t border-border pt-3 flex flex-wrap gap-1.5">
                    {product.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
