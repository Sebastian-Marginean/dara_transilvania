import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Ștergem datele vechi pentru a evita erorile de duplicare
  // Dacă ai mai multe tabele, adaugă și pentru ele aici, ex:
  // await prisma.altaTabela.deleteMany();
  await prisma.product.deleteMany();

  // 2. Adăugăm produsele
  await prisma.product.createMany({
    data: [
      // =================================================================================
      // === CARNE DE VITĂ / VIȚEL ===
      // =================================================================================
      {
    name: "Antricot de vita fasonat, fara os",
    name_en: "Boneless Beef Ribeye",
    category: "Vita",
    description: "Antricot de vită dezosat și curățat, ideal pentru friptură la grătar sau tigaie.",
    description_en: "Boneless beef ribeye, cleaned and trimmed, ideal for grilling or pan frying.",
    price: 50,
    image: "antricot-de-vita-fara-os.jpg"
  },
  {
    name: "Vrabioara de vita fasonata, fara os",
    name_en: "Boneless Beef Sirloin",
    category: "Vita",
    description: "Vrăbioară de vită fără os, o carne macră și fragedă.",
    description_en: "Boneless beef sirloin, lean and tender meat.",
    price: 50,
    image: "vravioara-de-vita.jpeg"
  },
  {
    name: "Muschiulet de vita 1-2.5kg",
    name_en: "Beef Tenderloin 1-2.5kg",
    category: "Vita",
    description: "Mușchiuleț de vită, cea mai fragedă bucată, fără grăsime.",
    description_en: "Beef tenderloin, the most tender cut, fat-free.",
    price: 100,
    image: "muschi-de-vita.jpeg"
  },
  {
    name: "Antricot de vita cu os (Tomahawk)",
    name_en: "Tomahawk steak",
    category: "Vita",
    description: "Antricot de vită cu os (Tomahawk), perfect pentru gătire lentă sau la grătar.",
    description_en: "Tomahawk steak, perfect for slow cooking or grilling.",
    price: 39,
    image: "antricot-de-vita-cu-os.jpg"
  },
  {
    name: "T-bone de vita",
    name_en: "Beef T-bone Steak",
    category: "Vita",
    description: "Friptură clasică T-Bone care include atât vrăbioară cât și mușchiuleț.",
    description_en: "Classic T-bone steak including both sirloin and tenderloin.",
    price: 84,
    image: "t-bone-de-vita.jpeg"
  },
  {
    name: "Pulpa de vita",
    name_en: "Beef Round",
    category: "Vita",
    description: "Pulpă de vită macră, recomandată pentru tocănițe sau gătit la cuptor.",
    description_en: "Lean beef round, recommended for stews or oven cooking.",
    price: 42,
    image: "pulpa-de-vita.jpeg"
  },
  {
    name: "Rasol cu os de vita",
    name_en: "Beef Shank with Bone",
    category: "Vita",
    description: "Rasol de vită cu os, ideal pentru supe, ciorbe sau gătit lent la cuptor.",
    description_en: "Beef shank with bone, ideal for soups, broths or slow oven cooking.",
    price: 37,
    image: "rasol-de-vita.jpeg"
  },
  {
    name: "Carne vita lucru 80-20, polibloc",
    name_en: "Beef Trimmings 80-20, block",
    category: "Vita",
    description: "Carne de vită lucru cu 20% grăsime, ideală pentru tocat sau burgeri.",
    description_en: "Beef trimmings with 20% fat, ideal for mincing or burgers.",
    price: 39,
    image: "carne-lucru-de-vita.jpeg"
  },
  {
    name: "Coaste de vita",
    name_en: "Beef Ribs",
    category: "Vita",
    description: "Coaste de vită cu os, potrivite pentru cuptor sau grătar.",
    description_en: "Beef ribs with bone, suitable for oven or grill.",
    price: 45,
    image: "coaste-de-vita.jpeg"
  },
  {
    name: "Piept de vita",
    name_en: "Beef Brisket",
    category: "Vita",
    description: "Piept de vită întreg, recomandat pentru afumare sau gătire îndelungată.",
    description_en: "Whole beef brisket, recommended for smoking or slow cooking.",
    price: 42,
    image: "piept-de-vita.jpeg"
  },
  {
    name: "Diafragma de vita, angus",
    name_en: "Beef Skirt (Angus)",
    category: "Vita",
    description: "Diafragmă de vită, o bucată subțire și aromată.",
    description_en: "Beef skirt, a thin and flavorful cut.",
    price: 45,
    image: "diafragma-de-vita.jpeg"
  },
  {
    name: "Flanc de vita curatat, angus",
    name_en: "Cleaned Beef Flank (Angus)",
    category: "Vita",
    description: "Flanc de vită, carne macră fără os.",
    description_en: "Beef flank, lean boneless meat.",
    price: 45,
    image: "flanc-de-vita.jpeg"
  },
  {
    name: "Maseteri (obrajiori-falcute) de vita, polibloc",
    name_en: "Beef Cheeks, block",
    category: "Vita",
    description: "Obraji de vită, perfecți pentru mâncăruri gătite lent în sos.",
    description_en: "Beef cheeks, perfect for slow-cooked dishes in sauce.",
    price: 50,
    image: "masetari-de-vita.jpeg"
  },
  {
    name: "Limba de bovina",
    name_en: "Beef Tongue",
    category: "Vita",
    description: "Limbă de vită întreagă, curățată.",
    description_en: "Whole beef tongue, cleaned.",
    price: 28,
    image: "limba-de-bovina.jpg"
  },
  {
    name: "Oase de vita cu maduva tubulare",
    name_en: "Beef Marrow Bones, tubular",
    category: "Vita",
    description: "Oase de vită cu măduvă, pentru supe consistente.",
    description_en: "Beef bones with marrow, for rich soups.",
    price: 9,
    image: "oase-tubulare.jpeg"
  },
  {
    name: "Seu de vita",
    name_en: "Beef Suet",
    category: "Vita",
    description: "Grăsime naturală de vită pentru gătit.",
    description_en: "Natural beef fat for cooking.",
    price: 14,
    image: "seu-de-vita.jpg"
  },

  // --- 2. VITEL (Ordine: Lucru -> Pulpa -> Tocata) ---
  {
    name: "Carne de vitel lucru 95-5",
    name_en: "Veal Trimmings 95-5",
    category: "Vita",
    description: "Carne de vițel macră (95%) cu foarte puțină grăsime (5%), pentru diverse preparate.",
    description_en: "Lean veal trimmings (95%) with very little fat (5%), for various dishes.",
    price: 36,
    image: "carne-lucru-vitel.jpeg"
  },
  {
    name: "Pulpa de vitel",
    name_en: "Veal Round",
    category: "Vita",
    description: "Pulpă de vițel fără os, ambalată la aproximativ 5kg.",
    description_en: "Boneless veal round, packed at about 5kg.",
    price: 45,
    image: "carne-lucru-vitel.jpeg" 
  },
  {
    name: "Carne de vitel lucru (tocata)",
    name_en: "Minced Veal",
    category: "Vita",
    description: "Carne tocată de vițel, ambalată la 1kg.",
    description_en: "Minced veal, packed at 1kg.",
    price: 39,
    image: "carne-tocata-vitel.jpeg"
  },
  {
    name: "Carne de vitel lucru 95-5, bax de aprox.20kg",
    name_en: "Veal Trimmings 95-5, box approx. 20kg",
    category: "Vita",
    description: "Carne de vițel macră 95/5, la bax economic de aprox. 20kg.",
    description_en: "Lean veal trimmings 95/5, in an economical box of approx. 20kg.",
    price: 28,
    image: "carne-lucru-vitel.jpeg"
  },
  {
    name: "Fudulii de vitel, ambalate pe tavita de 1-1.5kg",
    name_en: "Veal Testicles, packed on tray 1-1.5kg",
    category: "Vita",
    description: "Fudulii de vițel proaspete, curățate și ambalate.",
    description_en: "Fresh veal testicles, cleaned and packed.",
    price: 13,
    image: "fudulii-de-taur.jpeg"
  },

  // --- 3. BURTA ---
  {
    name: "Burta de vita curatata, angus",
    name_en: "Cleaned Beef Tripe, Angus",
    category: "Vita",
    description: "Pentru o ciorbă de burtă tradițională. Burtă de vită Angus curățată.",
    description_en: "For traditional tripe soup. Cleaned Angus beef tripe.",
    price: 16,
    image: "burta-de-vita-calup.jpeg"
  },
  {
    name: "Burta de vita vrac, folie si carton",
    name_en: "Bulk Beef Tripe, foil and carton",
    category: "Vita",
    description: "Burtă de vită curățată, ambalată economic.",
    description_en: "Cleaned beef tripe, economically packed.",
    price: 18,
    image: "burta-de-vita-calup.jpeg"
  },
  {
    name: "Burta fideluta de vita, 1kg",
    name_en: "Shredded Beef Tripe, 1kg",
    category: "Vita",
    description: "Burtă de vită tăiată fideluță, pachet de 1kg.",
    description_en: "Shredded beef tripe, 1kg pack.",
    price: 23,
    image: "burta-de-vita-1kg.jpeg"
  },
  {
    name: "Burta fideluta de vita, 5kg",
    name_en: "Shredded Beef Tripe, 5kg",
    category: "Vita",
    description: "Burtă de vită tăiată fideluță, pachet de 5kg.",
    description_en: "Shredded beef tripe, 5kg pack.",
    price: 25,
    image: "burta-de-vita-5kg.jpeg"
  },

      // =================================================================================
      // === CARNE DE PORC ===
      // =================================================================================
      {
    name: "Muschiulet de porc, 0.7-1.2kg/buc",
    name_en: "Pork Tenderloin, 0.7-1.2kg/pc",
    category: "Porc",
    description: "Mușchiuleț de porc întreg, cea mai fragedă bucată, fără grăsime.",
    description_en: "Whole pork tenderloin, the tenderest cut, lean and fat-free.",
    price: 38,
    image: "muschiulet-de-porc.jpeg"
  },
  {
    name: "Ceafa fara os, de porc",
    name_en: "Boneless Pork Neck",
    category: "Porc",
    description: "Ceafă de porc fără os, cu inserții de grăsime, ideală pentru grătar.",
    description_en: "Boneless pork neck, marbled, ideal for grilling.",
    price: 27,
    image: "ceafa-de-porc.jpeg"
  },
  {
    name: "Cotlet de porc fara os",
    name_en: "Boneless Pork Loin",
    category: "Porc",
    description: "Cotlet de porc fără os, o bucată de carne macră.",
    description_en: "Boneless pork loin, a lean cut of meat.",
    price: 27,
    image: "cotlet-de-porc.jpeg"
  },
  {
    name: "Scarita de la cotlet de porc 9-11cm/10kg",
    name_en: "Pork Loin Ribs 9-11cm/10kg",
    category: "Porc",
    description: "Scăriță de porc (costiță) de la cotlet, ideală pentru cuptor sau grătar.",
    description_en: "Pork loin ribs, ideal for roasting or grilling.",
    price: 28,
    image: "costita-de-porc-de-la-cotlet.jpeg"
  },

  // --- 2. GATIT & SPECIALITATI ---
  {
    name: "Pulpa fara os, de porc",
    name_en: "Boneless Pork Leg",
    category: "Porc",
    description: "Pulpă de porc fără os, carne slabă potrivită pentru diverse mâncăruri.",
    description_en: "Boneless pork leg, lean meat suitable for various dishes.",
    price: 25,
    image: "pulpa-de-porc.jpeg"
  },
  {
    name: "Mini ciolane de spate (aripioare)",
    name_en: "Mini Pork Shanks (Wings)",
    category: "Porc",
    description: "Mini ciolane de spate (aripioare de porc), ideale pentru gătit lent.",
    description_en: "Mini pork shanks, ideal for slow cooking.",
    price: 34,
    image: "mini-ciolane-de-spate(aripioare-de-porc).jpeg"
  },
  {
    name: "Ciolan afumat, aprox 700gr pe buc",
    name_en: "Smoked Pork Knuckle, approx 700g/pc",
    category: "Porc",
    description: "Ciolan de porc afumat, gata de pus în fasole sau varză.",
    description_en: "Smoked pork knuckle, ready for bean or cabbage stew.",
    price: 20,
    image: "ciolan-haxe.jpeg"
  },

  // --- 3. CARNE DE LUCRU & GRASIME ---
  {
    name: "Carne de porc lucru",
    name_en: "Pork Trimmings (Working Meat)",
    category: "Porc",
    description: "Carne de porc lucru, ideală pentru tocat sau cârnați.",
    description_en: "Pork trimmings, ideal for mincing or sausages.",
    price: 19,
    image: "care-porc-lucru.jpeg"
  },
  {
    name: "Slanina porc lucru",
    name_en: "Pork Back Fat",
    category: "Porc",
    description: "Slănină de porc lucru (grăsime solidă).",
    description_en: "Pork back fat (solid fat).",
    price: 15,
    image: "slanina-porc-lucru.jpeg"
  },
  {
    name: "Gelatina de porc 1kg",
    name_en: "Pork Gelatin 1kg",
    category: "Porc",
    description: "Gelatină de porc alimentară, agent natural de legare.",
    description_en: "Edible pork gelatin, natural binding agent.",
    price: 65,
    image: "gelatina-de-porc.jpg"
  },
      // =================================================================================
      // === CARNE DE PUI ===
      // =================================================================================
      {
    name: "Piept de pui dezosat",
    name_en: "Boneless Chicken Breast",
    category: "Pui",
    description: "Piept de pui dezosat, fără piele.",
    description_en: "Boneless chicken breast, skinless.",
    price: 32,
    image: "piept-de-pui.jpeg"
  },
  {
    name: "Pulpe dezosate fara piele de pui",
    name_en: "Boneless Skinless Chicken Thighs",
    category: "Pui",
    description: "Pulpe de pui dezosate, fără piele.",
    description_en: "Boneless and skinless chicken thighs.",
    price: 22,
    image: "pulpa-de-pui-dezosata-fara-piele.jpeg"
  },
  {
    name: "Pulpe dezosate cu piele de pui",
    name_en: "Boneless Skin-on Chicken Thighs",
    category: "Pui",
    description: "Pulpe de pui dezosate, cu piele.",
    description_en: "Boneless chicken thighs, with skin.",
    price: 20,
    image: "pulpa-de-pui-dezosata-cu-piele.jpeg"
  },

  // --- 2. PULPE CU OS & ARIPI ---
  {
    name: "Pulpe de pui intregi fara spate",
    name_en: "Whole Chicken Legs (No Back)",
    category: "Pui",
    description: "Pulpe de pui întregi, cu os, fără spate.",
    description_en: "Whole chicken legs, bone-in, without back bone.",
    price: 16,
    image: "pulpe-de-pui-integi-fara-spate.jpeg"
  },
  {
    name: "Pulpe de pui intregi cu spate",
    name_en: "Chicken Leg Quarters (With Back)",
    category: "Pui",
    description: "Pulpe de pui întregi, cu os și bucată de spate.",
    description_en: "Whole chicken legs with bone and back piece.",
    price: 14,
    image: "pulpe-de-pui-integi-cu-spate.jpeg"
  },
  {
    name: "Pulpe de pui inferioare",
    name_en: "Chicken Drumsticks",
    category: "Pui",
    description: "Pulpe inferioare de pui (ciocănele), cu os.",
    description_en: "Chicken drumsticks, bone-in.",
    price: 16,
    image: "pulpa-de-pui-inferioara.jpeg"
  },
  {
    name: "Aripi de pui fara varfuri",
    name_en: "Chicken Wings (No Tips)",
    category: "Pui",
    description: "Aripi de pui din două bucăți, fără vârfuri.",
    description_en: "2-joint chicken wings, tips removed.",
    price: 13,
    image: "aripi-de-pui-fara-varfuri.jpg"
  },
  {
    name: "Aripi de pui (ciocanel) IQF, 1kg, bax de 10kg",
    name_en: "Chicken Wing Drumettes IQF",
    category: "Pui",
    description: "Partea superioară a aripii de pui (ciocănel/drumette).",
    description_en: "Upper part of the chicken wing (drumette).",
    price: 17,
    image: "aripi-de-pui-2-piese.jpeg"
  },

  // --- 3. SEMI-PREPARATE (PANE) ---
  {
    name: "File din piept de pui cu susan",
    name_en: "Sesame Chicken Breast Fillet",
    category: "Specialitati",
    description: "File de pui în crustă crocantă cu susan.",
    description_en: "Chicken breast fillet in crispy sesame crust.",
    price: 25,
    image: "file-din-peiepi-de-pui-cu-susan.jpeg"
  },
  {
    name: "Nuggets din piept de pui",
    name_en: "Chicken Breast Nuggets",
    category: "Specialitati",
    description: "Bucăți de piept de pui în crustă pané.",
    description_en: "Breaded chicken breast pieces.",
    price: 22,
    image: "nuggets-din-piept-de-pui.jpeg"
  },
  {
    name: "Nuggets din piept de curcan",
    name_en: "Turkey Breast Nuggets",
    category: "Specialitati",
    description: "Bucăți de piept de curcan în crustă pané.",
    description_en: "Breaded turkey breast pieces.",
    price: 26,
    image: "nuggets-don-piept-de-curcan.jpeg"
  },

      // =================================================================================
      // === PEȘTE ȘI FRUCTE DE MARE ===
      // =================================================================================
      {
    name: "Creveti cruzi decorticati 31-40buc / 1kg",
    name_en: "Raw Peeled Shrimp 31-40 pcs/kg",
    category: "Peste si Fructe de Mare",
    description: "Creveți cruzi decorticați, gata de gătit.",
    description_en: "Raw peeled shrimp, ready to cook.",
    price: 67,
    image: "creveti-cruzi-decorticati.jpeg"
  },
  {
    name: "File de pastrav 130-160/bax de 5kg",
    name_en: "Trout Fillet 130-160g/5kg box",
    category: "Peste si Fructe de Mare",
    description: "File de păstrăv fin și delicat.",
    description_en: "Fine and delicate trout fillet.",
    price: 48,
    image: "file-de-pastrav.jpg"
  },
  {
    name: "File de salau zona de nil, 5kg",
    name_en: "Nile Perch Fillet, 5kg",
    category: "Peste si Fructe de Mare",
    description: "File de șalău de Nil, carne albă și fermă.",
    description_en: "Nile perch fillet, white and firm meat.",
    price: 48,
    image: "file-de-salau-zone-de-nil.jpg"
  },
  {
    name: "Pastrav eviscerat 250-300 gr/buc, la bax de 5kg",
    name_en: "Gutted Trout 250-300g/pc, 5kg box",
    category: "Peste si Fructe de Mare",
    description: "Păstrăv întreg eviscerat, proaspăt și gustos.",
    description_en: "Whole gutted trout, fresh and tasty.",
    price: 36,
    image: "pastrav-eviscerat.jpeg"
  },
  {
    name: "Creveti decorticati in cuib de cartofi 25gr/buc 1kg",
    name_en: "Potato Nest Shrimp 25g/pc 1kg",
    category: "Specialitati", // Mutat conform cerintei initiale
    description: "Creveți în cuib de cartofi.",
    description_en: "Shrimp wrapped in potato strings.",
    price: 78,
    image: "creveti-in-cuib-de-cartofi.jpeg"
  },
  {
    name: "Creveti decorticati in cuib de cartofi 25gr/buc 250gr",
    name_en: "Potato Nest Shrimp 25g/pc 250g",
    category: "Specialitati", // Mutat conform cerintei initiale
    description: "Creveți în cuib de cartofi (pachet mic).",
    description_en: "Shrimp wrapped in potato strings (small pack).",
    price: 23,
    image: "creveti-in-cuib-de-cartofi.jpeg"
  },

      // =================================================================================
      // === CARTOFI ===
      // =================================================================================
      {
    name: "Cartofi premier gold 14mm/2.5kg",
    name_en: "Premier Gold Fries 14mm/2.5kg",
    category: "Cartofi",
    description: "Cartofi prăjiți tăietură groasă 14mm.",
    description_en: "Thick cut fries 14mm.",
    price: 17,
    image: "cartofi-super-fries-14mm.jpeg"
  },
  {
    name: "Cartofi 7x7mm / 2.5kg",
    name_en: "Fries 7x7mm / 2.5kg",
    category: "Cartofi",
    description: "Cartofi prăjiți tăietură clasică pai 7x7mm.",
    description_en: "Classic shoestring fries 7x7mm.",
    price: 23,
    image: "cartofi-7mm.jpeg"
  },
  {
    name: "Cartofi pentru prajit premier 9mm / 2.5kg",
    name_en: "Premier Fries 9mm / 2.5kg",
    category: "Cartofi",
    description: "Cartofi Premier Gold, tăietură 9.6mm.",
    description_en: "Premier Gold fries, 9.6mm cut.",
    price: 23,
    image: "cartofi-premier-gold-9mm.jpeg"
  },
  {
    name: 'Cartofi pentru prajit clasa "a" coated 10/10mm /2.5kg',
    name_en: 'Class "A" Coated Fries 10/10mm / 2.5kg',
    category: "Cartofi",
    description: "Cartofi prăjiți coated (înveliți), extra crocanți.",
    description_en: "Coated fries, extra crispy.",
    price: 23,
    image: "cartofi-super-fries-10mm.jpeg"
  },
  {
    name: "Cartofi pentru prajit global frozen 10/20mm /2.5kg",
    name_en: "Global Frozen Fries 10/20mm / 2.5kg",
    category: "Cartofi",
    description: "Cartofi tăietură steakhouse 10x20mm.",
    description_en: "Steakhouse cut fries 10x20mm.",
    price: 33,
    image: "cartofi-super-fries-10-pe-20mm.jpeg"
  },
  {
    name: "Cartofi pentru prajit steak house 10/20mm 2.5kg",
    name_en: "Steak House Fries 10/20mm 2.5kg",
    category: "Cartofi",
    description: "Cartofi Steak House pentru un aspect rustic.",
    description_en: "Steak House fries for a rustic look.",
    price: 23,
    image: "cartofi-super-fries-10-pe-20mm.jpeg"
  },

  // --- SPECIALITATI CARTOFI ---
  {
    name: "Cartofi pentru prajit rustic cu coaja 10/10mm 600 gr",
    name_en: "Rustic Skin-on Fries 10/10mm 600g",
    category: "Cartofi",
    description: "Cartofi rustici cu coajă, plini de gust.",
    description_en: "Rustic skin-on fries, full of flavor.",
    price: 8,
    image: "cartofi-pentru-prajit-rustic-cu-coaja-10-10mm.jpg"
  },
  {
    name: 'Cartofi crinkle pentru prajit "flensted", 11/11mm 2.5kg',
    name_en: 'Crinkle Cut Fries "Flensted", 11/11mm 2.5kg',
    category: "Cartofi",
    description: "Cartofi ondulați (crinkle) pentru extra textură.",
    description_en: "Crinkle cut fries for extra texture.",
    price: 20,
    image: "cartofi-cirnkle-pentru-prajit-flensted.jpg"
  },
  {
    name: "Cartofi pentru prajit wedges condimentati 2.5kg",
    name_en: "Seasoned Potato Wedges 2.5kg",
    category: "Cartofi",
    description: "Cartofi Wedges condimentați, aromă intensă.",
    description_en: "Seasoned wedges, intense flavor.",
    price: 28,
    image: "cartofi-wedges-condimentati.jpeg"
  },
  {
    name: "Cartofi pentru prajit dolle dippers 600gr",
    name_en: "Dolle Dippers Fries 600g",
    category: "Cartofi",
    description: "Cartofi Dolle Dippers, formă concavă unică.",
    description_en: "Dolle Dippers fries, unique scoop shape.",
    price: 7,
    image: "cartofi-dolle-dippers.jpeg"
  },
  {
    name: "Cartofi pentru prajit dippers, forma chips 1.05kg",
    name_en: "Dippers Fries (Chips Shape) 1.05kg",
    category: "Cartofi",
    description: "Cartofi Dippers formă chips, ideali pentru sosuri.",
    description_en: "Chips-shaped dippers, ideal for sauces.",
    price: 12,
    image: "cartofi-dippers-2.5kg.jpeg"
  },

  // --- FULGI / PIURE ---
  {
    name: "Knorr fulgi de cartofi piure cu lapte 4kg",
    name_en: "Knorr Potato Flakes with Milk 4kg",
    category: "Cartofi",
    description: "Fulgi de cartofi pentru un piure instant cremos.",
    description_en: "Potato flakes for creamy instant mashed potatoes.",
    price: 170,
    image: "knorr-fulgi-de-cartofi-piure-cu-lapte-.jpg"
  },

      // =================================================================================
      // === PRODUSE LACTATE ===
      // =================================================================================
      {
    name: "Cascaval gouda, grasime de 48%",
    name_en: "Gouda Cheese, 48% fat",
    category: "Lactate",
    description: "Cașcaval clasic Gouda.",
    description_en: "Classic Gouda cheese.",
    price: 31,
    image: "cascaval-gouda.jpg"
  },
  {
    name: "Cascaval edamer, grasime de 40%",
    name_en: "Edamer Cheese, 40% fat",
    category: "Lactate",
    description: "Cașcaval clasic Edamer.",
    description_en: "Classic Edamer cheese.",
    price: 32,
    image: "cascaval-edamer.jpg"
  },
  {
    name: "Cascaval procesat si afumat, grasime de 45%",
    name_en: "Smoked Processed Cheese, 45% fat",
    category: "Lactate",
    description: "Cașcaval afumat.",
    description_en: "Smoked cheese.",
    price: 60,
    image: "cascaval-afumat.jpg"
  },
  {
    name: "Branza lazur cu mucegai",
    name_en: "Lazur Blue Cheese",
    category: "Lactate",
    description: "Brânză cu mucegai albastru.",
    description_en: "Blue-veined cheese.",
    price: 63,
    image: "cascaval-blue-veined-cheese.jpeg"
  },

  // --- 2. SPECIALITATI ---
  {
    name: 'Cascaval cu nuca "Visser Kaas", grasime de 50%',
    name_en: '"Visser Kaas" Walnut Cheese, 50% fat',
    category: "Lactate",
    description: "Cașcaval cu miez de nucă.",
    description_en: "Cheese with walnut kernels.",
    price: 84,
    image: "cascaval-walnut-cheese.jpeg"
  },
  {
    name: 'Cascaval pesto verde "Visser Kaas", grasime de 50%',
    name_en: '"Visser Kaas" Green Pesto Cheese, 50% fat',
    category: "Lactate",
    description: "Cașcaval cu pesto verde.",
    description_en: "Cheese with green pesto.",
    price: 94,
    image: "cascaval-green-pesto.jpeg"
  },
  {
    name: 'Cascaval cu lavanda "Visser Kaas", grasime de 50%',
    name_en: '"Visser Kaas" Lavender Cheese, 50% fat',
    category: "Lactate",
    description: "Cașcaval cu lavandă.",
    description_en: "Cheese with lavender.",
    price: 93,
    image: "cascaval-laveneder-cheese.jpeg"
  },
  {
    name: 'Cascaval negru cu lamaie "Visser Kaas", grasime de 50%',
    name_en: '"Visser Kaas" Black Lemon Cheese, 50% fat',
    category: "Lactate",
    description: "Cașcaval negru cu lămâie.",
    description_en: "Black cheese with lemon.",
    price: 123,
    image: "cascaval-black-lemon.jpeg"
  },
  {
    name: 'Cascaval de capra "golden roemer", grasime de 48%',
    name_en: '"Golden Roemer" Goat Cheese, 48% fat',
    category: "Lactate",
    description: "Cașcaval din lapte de capră.",
    description_en: "Goat milk cheese.",
    price: 94,
    image: "golden-roemer.jpg"
  },
  {
    name: 'Cascaval de capra cu trufe "chevrano", grasime de 50%',
    name_en: '"Chevrano" Truffle Goat Cheese, 50% fat',
    category: "Lactate",
    description: "Cașcaval de capră cu trufe.",
    description_en: "Goat cheese with truffles.",
    price: 140,
    image: "cascaval-black-truffle-cheese.jpeg"
  },

  // --- 3. HORECA & GATIT ---
  {
    name: "Ceko pizza first 2.3kg/buc, 4buc/bax",
    name_en: "Ceko Pizza Cheese 2.3kg/pc",
    category: "Lactate",
    description: "Brânză (topping) pentru pizza.",
    description_en: "Cheese topping for pizza.",
    price: 62,
    image: "ceko-pizza.png"
  },
  {
    name: "Felii cheddar 30% grasime 1kg zarpellon",
    name_en: "Cheddar Slices 30% fat, 1kg Zarpellon",
    category: "Lactate",
    description: "Felii de brânză Cheddar.",
    description_en: "Cheddar cheese slices.",
    price: 58,
    image: "felii-cheddar-30.jpg"
  },
  {
    name: "Grana duro 12 luni, 1kg",
    name_en: "Grana Duro 12 months, 1kg",
    category: "Lactate",
    description: "Brânză dură maturată (tip Grana).",
    description_en: "Hard matured cheese (Grana type).",
    price: 79,
    image: "grana-duro.jpg"
  },
  {
    name: "Frisca RAMA 31%",
    name_en: "RAMA Cream 31%",
    category: "Lactate",
    description: "Frișcă lichidă vegetală.",
    description_en: "Vegetable liquid cream.",
    price: 25,
    image: "frisca-rama-31.jpg"
  },
      // Adăugate din imagini
     

      // =================================================================================
      // === LEGUME ===
      // =================================================================================
      {
    name: "Amestec de legume pentru ciorba de vacuta, 2.5kg",
    name_en: "Vegetable Mix for Beef Soup, 2.5kg",
    category: "Legume",
    description: "Baza perfectă pentru ciorba de văcuță.",
    description_en: "The perfect vegetable base for beef soup.",
    price: 25,
    image: "amestec-legume-ciorba.jpeg"
  },
  {
    name: "Amestec royal mix (conopida, broccoli, morcovi) , 2.5kg",
    name_en: "Royal Mix (Cauliflower, Broccoli, Carrots), 2.5kg",
    category: "Legume",
    description: "Amestec regal de legume.",
    description_en: "Royal vegetable mix.",
    price: 38,
    image: "amestec-de-legume-royal-mix-congelat-bonduelle-nou.jpg"
  },
  {
    name: "Amestec 4 anotimpuri gradena 2.5kg",
    name_en: "Gradena 4 Seasons Mix, 2.5kg",
    category: "Legume",
    description: "Amestec de legume diversificat.",
    description_en: "Diverse vegetable mix.",
    price: 28,
    image: "amestec-patru-anotimpuri.jpeg"
  },
  {
    name: "Amestec mexican din 5 tipuri de legume, 2.5kg",
    name_en: "Mexican Mix (5 types), 2.5kg",
    category: "Legume",
    description: "Amestec mexican vibrant și plin de viață.",
    description_en: "Vibrant Mexican vegetable mix.",
    price: 31,
    image: "amestec-mexican.jpeg"
  },
  {
    name: "Broccoli, de marime medie, 2.5kg",
    name_en: "Broccoli Florets (Medium), 2.5kg",
    category: "Legume",
    description: "Buchețele de broccoli, bogate în nutrienți.",
    description_en: "Nutrient-rich broccoli florets.",
    price: 34,
    image: "brocoli.jpeg"
  },
  {
    name: "Conopida de marime medie, 2.5kg",
    name_en: "Cauliflower Florets (Medium), 2.5kg",
    category: "Legume",
    description: "Conopidă buchețele gustoasă.",
    description_en: "Tasty cauliflower florets.",
    price: 32,
    image: "conopida.jpeg"
  },
  {
    name: "Fasole galbena taiata 2.5kg",
    name_en: "Cut Yellow Beans, 2.5kg",
    category: "Legume",
    description: "Fasole galbenă păstăi tăiată.",
    description_en: "Cut yellow bean pods.",
    price: 34,
    image: "fasole-galbana-pastai.jpeg"
  },
  {
    name: "Fasole verde taiata 2.5kg",
    name_en: "Cut Green Beans, 2.5kg",
    category: "Legume",
    description: "Fasole verde păstăi tăiată.",
    description_en: "Cut green bean pods.",
    price: 25,
    image: "fasole-verde.jpeg"
  },
  {
    name: "Hribi de padure cuburi, 1kg",
    name_en: "Forest Porcini Cubes, 1kg",
    category: "Legume",
    description: "Hribi de pădure cuburi, aromă intensă.",
    description_en: "Forest porcini cubes, intense flavor.",
    price: 50,
    image: "hribi-de-padure-cuburi.jpg"
  },
  {
    name: "Mazare boabe, 2.5kg",
    name_en: "Green Peas, 2.5kg",
    category: "Legume",
    description: "Mazăre verde boabe dulce.",
    description_en: "Sweet green peas.",
    price: 27,
    image: "mazare-verde-boabe.jpeg"
  },
  {
    name: "Morcovi puiuti (baby), 2.5kg",
    name_en: "Baby Carrots, 2.5kg",
    category: "Legume",
    description: "Morcovi baby fragezi și dulci.",
    description_en: "Tender and sweet baby carrots.",
    price: 25,
    image: "morcovi-mini-tineri.jpeg"
  },
  {
    name: "Spanac tocat, 2.5kg",
    name_en: "Chopped Spinach, 2.5kg",
    category: "Legume",
    description: "Spanac tocat porționat.",
    description_en: "Portion-controlled chopped spinach.",
    price: 20,
    image: "spanac-tocat-propotionat.jpeg"
  },
  {
    name: "Vinete coapte intregi, 2.5kg",
    name_en: "Whole Roasted Eggplants, 2.5kg",
    category: "Legume",
    description: "Vinete coapte întregi, gust afumat.",
    description_en: "Whole roasted eggplants, smoky taste.",
    price: 31,
    image: "vinete-tocate-puna-mare-2.5kg.jpeg"
  },
  {
    name: "Vinete coapte si tocate, 400gr",
    name_en: "Roasted Chopped Eggplant, 400g",
    category: "Legume",
    description: "Vinete coapte și tocate pentru salată.",
    description_en: "Roasted and chopped eggplant for salad.",
    price: 8,
    image: "vinete-tocate.jpeg"
  },

      // =================================================================================
      // === CONSERVE ===
      // =================================================================================
      {
    name: "Ardei capia copt in conserva de tabla de 4250ml, net 2.5kg",
    name_en: "Roasted Capia Peppers, 4.25L can (2.5kg net)",
    category: "Conserve",
    description: "Ardei capia copt în conservă.",
    description_en: "Roasted capia peppers in a can.",
    price: 52,
    image: "ardei-capia-copt-in-consevra-de-tabla.jpg"
  },
  {
    name: "Castraveti medii murati in conserva 9600gr, net 5600gr",
    name_en: "Medium Pickled Cucumbers, 9.6kg can (5.6kg net)",
    category: "Conserve",
    description: "Castraveți murați medii.",
    description_en: "Medium pickled cucumbers.",
    price: 59,
    image: "castraveti-medii-murati-in-consevra.jpg"
  },
  {
    name: "Ciuperci taiate, conservate 5kg, 3kg net",
    name_en: "Sliced Canned Mushrooms, 5kg (3kg net)",
    category: "Conserve",
    description: "Ciuperci tăiate la conservă.",
    description_en: "Sliced mushrooms in a can.",
    price: 78,
    image: "ciuperci-taiate-conservate.jpg"
  },
  {
    name: "Gogosari in otet 300g, 720ml",
    name_en: "Pickled Red Bell Peppers in Vinegar, 720ml",
    category: "Conserve",
    description: "Gogoșari în oțet feliați.",
    description_en: "Sliced pickled red bell peppers.",
    price: 8,
    image: "gogosari-in-otet.jpeg"
  },
  {
    name: "Knorr pasta de tomate, conserva de tabla, 0.8kg",
    name_en: "Knorr Tomato Paste, Tin Can, 0.8kg",
    category: "Conserve",
    description: "Pastă de tomate concentrată Knorr.",
    description_en: "Knorr concentrated tomato paste.",
    price: 33,
    image: "knorr-pasta-de-tomate.jpg"
  },
  {
    name: "Masline negre colosal intregi cu sambure 2.5kg",
    name_en: "Whole Colossal Black Olives (with pit), 2.5kg",
    category: "Conserve",
    description: "Măsline negre Colosal cu sâmbure.",
    description_en: "Colossal black olives with pit.",
    price: 51,
    image: "masline-intregi-cu-samburi.jpeg"
  },
  {
    name: "Masline negre feliate, 2kg",
    name_en: "Sliced Black Olives, 2kg",
    category: "Conserve",
    description: "Măsline negre feliate.",
    description_en: "Sliced black olives.",
    price: 40,
    image: "masline-feliate.jpeg"
  },
  {
    name: "Masline verzi fara samburi, 2kg",
    name_en: "Pitted Green Olives, 2kg",
    category: "Conserve",
    description: "Măsline verzi fără sâmburi.",
    description_en: "Green olives without pit.",
    price: 42,
    image: "masline-verzi.jpeg"
  },
  {
    name: "Sfecla rosie felii conservata cutie 4250gr, net 2550 gr",
    name_en: "Canned Sliced Beetroot, 4.25kg (2.55kg net)",
    category: "Conserve",
    description: "Sfeclă roșie felii conservată.",
    description_en: "Canned sliced beetroot.",
    price: 34,
    image: "sfecla-rosie.jpeg"
  },

      // =================================================================================
      // === CONDIMENTE, SOSURI ȘI ULEIURI ===
      // =================================================================================
      {
    name: "Boia dulce 100 S, 1kg",
    name_en: "Sweet Paprika 100 S, 1kg",
    category: "Condimente & FRT",
    description: "Boia dulce de calitate superioară.",
    description_en: "High quality sweet paprika.",
    price: 35,
    image: "boia-dulce-100-s.jpg"
  },
  {
    name: "Busuioc maruntit, 1kg",
    name_en: "Crushed Basil, 1kg",
    category: "Condimente & FRT",
    description: "Busuioc mărunțit aromat.",
    description_en: "Aromatic crushed basil.",
    price: 30,
    image: "busuioc-maruntit.jpg"
  },
  {
    name: "Condimix, 1kg",
    name_en: "Condimix, 1kg",
    category: "Condimente & FRT",
    description: "Amestec de condimente gustos de legume.",
    description_en: "Savory vegetable seasoning mix.",
    price: 30,
    image: "condimente-gustos-de-legume.jpg"
  },
  {
    name: "Oregano ambalat la punga de 1kg",
    name_en: "Dried Oregano, 1kg bag",
    category: "Condimente & FRT",
    description: "Oregano uscat la pungă.",
    description_en: "Dried oregano in a bag.",
    price: 31,
    image: "Oregano.jpg"
  },
  {
    name: "Piper negru macinat, MQ 1kg",
    name_en: "Ground Black Pepper MQ, 1kg",
    category: "Condimente & FRT",
    description: "Piper negru măcinat.",
    description_en: "Ground black pepper.",
    price: 74,
    image: "piper-negru-macinat.jpg"
  },
  {
    name: "Usturoi granule, 1kg",
    name_en: "Granulated Garlic, 1kg",
    category: "Condimente & FRT",
    description: "Usturoi granulat aromat.",
    description_en: "Aromatic granulated garlic.",
    price: 34,
    image: "usturoi-granule.jpg"
  },
  {
    name: "Pesmet galben, sac de 20kg",
    name_en: "Yellow Breadcrumbs, 20kg bag",
    category: "Condimente & FRT",
    description: "Pesmet galben crocant.",
    description_en: "Crispy yellow breadcrumbs.",
    price: 10,
    image: "pesmet-galben.jpg"
  },
  {
    name: "Knorr crema de otet balsamic, sticla de 200ml",
    name_en: "Knorr Balsamic Vinegar Glaze, 200ml",
    category: "Condimente & FRT",
    description: "Cremă de oțet balsamic Knorr.",
    description_en: "Knorr balsamic vinegar glaze.",
    price: 27,
    image: "Knorr-crema-de-otet-balsamic.jpg"
  },
  {
    name: "Desert topping de cacao carte d'or 1kg",
    name_en: "Carte d'Or Cocoa Dessert Topping, 1kg",
    category: "Condimente & FRT",
    description: "Topping de cacao pentru deserturi.",
    description_en: "Cocoa topping for desserts.",
    price: 57,
    image: "Desert-topping-de-cacao-carte-d'or-1kg.avif"
  },
  {
    name: "Grasime vegetala pentru gatit gran cucina, 1L",
    name_en: "Gran Cucina Vegetable Cooking Cream, 1L",
    category: "Condimente & FRT",
    description: "Grăsime vegetală lichidă pentru gătit.",
    description_en: "Liquid vegetable cooking base.",
    price: 16,
    image: "grasime-vegetala-pentru-gatit.jpg"
  },
  {
    name: "Ulei de palmier 18L",
    name_en: "Palm Oil, 18L",
    category: "Condimente & FRT",
    description: "Ulei de palmier profesional pentru prăjit.",
    description_en: "Professional palm oil for frying.",
    price: 202,
    image: "ulei-de-palmier.jpg"
  },

      // =================================================================================
      // === PASTE ===
      // =================================================================================
      {
    name: "Spaghete la molisana",
    name_en: "La Molisana Spaghetti",
    category: "Paste",
    description: "Spaghete La Molisana.",
    description_en: "La Molisana spaghetti pasta.",
    price: 12,
    image: "paste-spaghete-la-molisana.jpg"
  },
  {
    name: "Tagliatele la molisana",
    name_en: "La Molisana Tagliatelle",
    category: "Paste",
    description: "Tagliatelle La Molisana.",
    description_en: "La Molisana tagliatelle pasta.",
    price: 10,
    image: "tagliatele-la-milisana-cutie-de-500gr.jpg"
  },
  {
    name: "Penne la molisana",
    name_en: "La Molisana Penne",
    category: "Paste",
    description: "Penne La Molisana.",
    description_en: "La Molisana penne pasta.",
    price: 10,
    image: "paste-penne-la-molisana.jpg"
  },

      // =================================================================================
      // === SPECIALITĂȚI ȘI PREPARATE ===
      // =================================================================================
      {
    name: "Cosulete de cartofi cu branza si verdeturi 1kg",
    name_en: "Potato Baskets with Cheese & Herbs, 1kg",
    category: "Specialitati",
    description: "Coșulețe de cartofi umplute cu brânză.",
    description_en: "Potato baskets filled with cheese and herbs.",
    price: 30,
    image: "cosulete-de-cartogi-cu-branz-si-smantana-si-verdeturi.jpeg"
  },
  {
    name: "Cartofi gratinati cu smantana si branza 120gr/buc, 1.2kg",
    name_en: "Potato Gratin with Cream & Cheese, 1.2kg",
    category: "Specialitati",
    description: "Cartofi gratinați Dauphinois.",
    description_en: "Dauphinoise potato gratin.",
    price: 29,
    image: "cartofi-gratinati.jpeg"
  },
  {
    name: "Aripioare de pui picante Kentucky 500gr",
    name_en: "Kentucky Style Spicy Chicken Wings, 500g",
    category: "Specialitati",
    description: "Aripioare pui stil Kentucky.",
    description_en: "Kentucky-style spicy chicken wings.",
    price: 15,
    image: "aripioare-de-pui-picante-frigane.jpeg"
  },
  {
    name: "Aripioare de pui picante 500gr",
    name_en: "Spicy Chicken Wings, 500g",
    category: "Specialitati",
    description: "Aripioare de pui picante.",
    description_en: "Spicy chicken wings.",
    price: 14,
    image: "aripioare-de-pui-picante-frigane.jpeg"
  },
  {
    name: "Medalion din carne de pui cu cascaval",
    name_en: "Chicken Medallion with Cheese",
    category: "Specialitati",
    description: "Medalion din carne de pui umplut cu cașcaval.",
    description_en: "Chicken medallion filled with cheese.",
    price: 28,
    image: "medalion-don-carne-de-pui-cu-cascaval.jpeg"
  },
  {
    name: "Crispy din piept de pui 500gr",
    name_en: "Crispy Chicken Breast Strips, 500g",
    category: "Specialitati",
    description: "Crispy strips din piept de pui.",
    description_en: "Crispy breaded chicken breast strips.",
    price: 20,
    image: "crispy-din-piept-de-pui.jpeg"
  },
  {
    name: "Crispy din piept de pui kentucky 500gr",
    name_en: "Kentucky Style Crispy Chicken Strips, 500g",
    category: "Specialitati",
    description: "Crispy strips Kentucky.",
    description_en: "Kentucky-style crispy chicken strips.",
    price: 20,
    image: "crispy-din-piept-de-pui.jpeg"
  },
  {
    name: "Hamburger smash 130gr",
    name_en: "Smash Burger Patty, 130g",
    category: "Specialitati",
    description: "Chiftele burger Smash.",
    description_en: "Smash burger patties.",
    price: 62,
    image: "hamburger-smash.jpg"
  },
  {
    name: "Jalapenos snacks specialitate din branza picanta 1kg",
    name_en: "Jalapeno Cheese Snacks, 1kg",
    category: "Specialitati",
    description: "Snacks cu Jalapeno și brânză.",
    description_en: "Spicy jalapeno and cheese snacks.",
    price: 56,
    image: "jalapeno-snack.jpeg"
  },
  {
    name: "Saga mini kiev 1kg, 10 buc/bax",
    name_en: "Saga Mini Kiev, 1kg",
    category: "Specialitati",
    description: "Mini Kiev din carne de pui.",
    description_en: "Mini Chicken Kiev bites.",
    price: 34,
    image: "saga-mini-kijev.jpeg"
  },
  {
    name: "Snitel din piept de pui, 450gr",
    name_en: "Chicken Breast Schnitzel, 450g",
    category: "Specialitati",
    description: "Șnițel din piept de pui.",
    description_en: "Breaded chicken breast schnitzel.",
    price: 17,
    image: "snitel-din-piept-de-pui.jpeg"
  },
      // Adăugate din imagini
      {
    name: "Snitel de porc frigane",
    name_en: "Pork Schnitzel",
    category: "Specialitati",
    description: "Șnițel de porc delicios, gata de prăjit.",
    description_en: "Delicious pork schnitzel, ready to fry.",
    price: 18,
    image: "snitel-de-porc-frigane.jpeg"
  },
  {
    name: "Snitel de pui",
    name_en: "Chicken Schnitzel",
    category: "Specialitati",
    description: "Șnițel de pui simplu și gustos.",
    description_en: "Simple and tasty chicken schnitzel.",
    price: 16,
    image: "snitel-de-pui.jpeg"
  },
  {
    name: "Snitel de pui cu fulgi de porumb",
    name_en: "Cornflakes Chicken Schnitzel",
    category: "Specialitati",
    description: "Șnițel de pui crocant cu fulgi de porumb.",
    description_en: "Crispy chicken schnitzel coated with cornflakes.",
    price: 18,
    image: "snitel-de-pui-cu-fulgi-de-porumb.jpeg"
  },
  {
    name: "Cascaval pane",
    name_en: "Breaded Cheese",
    category: "Specialitati",
    description: "Cașcaval pane crocant, gata de preparat.",
    description_en: "Crispy breaded cheese, ready to cook.",
    price: 35,
    image: "cascaval-pane.jpeg"
  },
  {
    name: "Specialitate cu cascaval pane",
    name_en: "Breaded Cheese Specialty",
    category: "Specialitati",
    description: "Specialitate delicioasă cu cașcaval pane.",
    description_en: "Delicious breaded cheese specialty.",
    price: 38,
    image: "specialitate-cu-cascaval-pane.jpeg"
  },

      // =================================================================================
      // === SOSURI ===
      // =================================================================================
     {
    name: "Ketchup (5kg/10kg)",
    name_en: "Ketchup (5kg/10kg)",
    category: "Sosuri",
    description: "Sos de roșii Ketchup la ambalaj mare de 5kg sau 10kg.",
    description_en: "Classic Ketchup sauce in a large 5kg or 10kg pack.",
    price: 0, // De actualizat pretul
    image: "sos-de rosi-5kg.jpeg"
  },
  {
    name: "Sos de maioneză (5kg)",
    name_en: "Mayonnaise (5kg)",
    category: "Sosuri",
    description: "Maioneză la ambalaj mare de 5kg.",
    description_en: "Mayonnaise in a large 5kg pack.",
    price: 0, // De actualizat pretul
    image: "sos-maioneza-5kg.jpeg"
  },
  {
    name: "Sos Tzatziki",
    name_en: "Tzatziki Sauce",
    category: "Sosuri",
    description: "Sos Tzatziki proaspăt.",
    description_en: "Fresh Tzatziki sauce.",
    price: 0, // De actualizat pretul
    image: "sos-tzatziki-nou.jpeg"
  },
  {
    name: "Sos de usturoi",
    name_en: "Garlic Sauce",
    category: "Sosuri",
    description: "Sos de usturoi cremos.",
    description_en: "Creamy garlic sauce.",
    price: 0, // De actualizat pretul
    image: "sos-de-usturoi-nou.jpeg"
  },
  {
    name: "Maioneză 875ml",
    name_en: "Mayonnaise 875ml",
    category: "Sosuri",
    description: "Maioneză clasică.",
    description_en: "Classic mayonnaise.",
    price: 0, // De actualizat pretul
    image: "sos-maioneza-mic.jpeg"
  },
  {
    name: "Sos Samurai",
    name_en: "Samurai Sauce",
    category: "Sosuri",
    description: "Sos picant pe bază de maioneză și ardei iute.",
    description_en: "Spicy sauce based on mayonnaise and chili.",
    price: 0, // De actualizat pretul
    image: "sos-samurai.jpeg"
  },
  {
    name: "Sos Gustos Burger",
    name_en: "Tasty Burger Sauce",
    category: "Sosuri",
    description: "Sos special conceput pentru burgeri.",
    description_en: "Special sauce designed for burgers.",
    price: 0, // De actualizat pretul
    image: "sos-gustos-burger.jpeg"
  },
  {
    name: "Sos pentru cartofi prăjiți și burgeri",
    name_en: "Fries & Burger Sauce",
    category: "Sosuri",
    description: "Sos versatil, ideal pentru cartofi prăjiți și burgeri.",
    description_en: "Versatile sauce, ideal for fries and burgers.",
    price: 0, // De actualizat pretul
    image: "Sos-pentru-cartofi-prăjiți-și-burgeri.jpeg"
  },
  {
    name: "Sos Special",
    name_en: "Special Sauce",
    category: "Sosuri",
    description: "Sos aromat după o rețetă unică.",
    description_en: "Aromatic sauce with a unique recipe.",
    price: 0, // De actualizat pretul
    image: "sos-special.jpeg"
  }
 
    ]
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });