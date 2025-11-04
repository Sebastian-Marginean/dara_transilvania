import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      // === CARNE ===
      // Carne de Vită / Vițel
      {
        name: "Carne de vitel lucru 95-5",
        category: "Carne",
        description:
          "Descoperiți excelența în bucătărie cu carnea noastră de vițel lucru, având un raport optim de 95% carne și 5% grăsime. Această compoziție premium asigură un echilibru perfect între frăgezime și suculență, fiind ideală pentru o gamă variată de preparate culinare rafinate. Carnea provine de la viței tineri, crescuți în condiții etice și hrăniți natural, ceea ce garantează o textură fină și un gust delicat, specific cărnii de vițel de cea mai înaltă calitate. Versatilitatea sa o face perfectă pentru a crea chiftele gourmet, perișoare fragede care se topesc în gură, sau umpluturi savuroase pentru paste precum lasagna sau cannelloni. De asemenea, este o bază excepțională pentru sosuri bolognese sofisticate, unde gustul său subtil nu copleșește celelalte arome, ci le completează armonios. Datorită conținutului redus de grăsime, este o opțiune mai sănătoasă, bogată în proteine de înaltă calitate, fier și vitamine esențiale din complexul B, contribuind la o dietă echilibrată fără a compromite savoarea. Fiecare pachet este tocat proaspăt și ambalat cu grijă pentru a păstra prospețimea și proprietățile nutritive intacte, ajungând la dumneavoastră gata de a fi transformat într-o capodoperă culinară.",
        price: 36,
      },
      {
        name: "Antricot de vita fasonat, fara os",
        category: "Carne",
        description:
          "Antricotul de vită fasonat și dezosat reprezintă piesa de rezistență pentru orice pasionat de grătar și fripturi de calitate superioară. Cunoscut la nivel internațional drept 'Ribeye', acest steak este renumit pentru marmorarea sa excepțională – acele fine inserții de grăsime intramusculară care, în timpul gătirii, se topesc și infuzează carnea cu o suculență și o aromă de neegalat. Procesul de fasonare este realizat cu măiestrie de măcelarii noștri, eliminând excesul de grăsime exterioară, lăsând doar mușchiul curat, gata de a fi gătit. Această atenție la detalii asigură o experiență culinară consistentă. Pentru a vă bucura de potențialul său maxim, recomandăm gătirea la grătar încins sau într-o tigaie de fontă. Un strat exterior caramelizat și crocant, obținut printr-o sigilare rapidă, va păstra interiorul fraged și roz. Asezonați-l simplu, cu sare grunjoasă și piper proaspăt măcinat, pentru a lăsa gustul bogat al cărnii să fie vedeta. Se potrivește de minune cu un pahar de vin roșu corpolent, precum un Cabernet Sauvignon sau un Malbec. Este mai mult decât o friptură, este o celebrare a gustului pur.",
        price: 50,
      },
      {
        name: "Vrabioara de vita fasonata, fara os",
        category: "Carne",
        description:
          "Vrăbioara de vită, cunoscută și sub denumirea de 'Sirloin Steak', este o tăietură premium, foarte apreciată pentru echilibrul său perfect între frăgezime și gustul intens de vită. Piesa noastră este atent fasonată și dezosată, oferindu-vă o bucată de carne curată, cu o textură fermă, dar fină. Spre deosebire de antricot, vrăbioara are un conținut mai redus de grăsime, ceea ce o face o opțiune excelentă pentru cei care doresc o friptură mai slabă, dar fără a sacrifica aroma. Marmorarea subtilă prezentă în mușchi este suficientă pentru a menține carnea suculentă. Versatilitatea sa este un alt punct forte; este perfectă pentru a fi gătită întreagă, la cuptor, ca 'roast beef', tăiată în fripturi groase pentru grătar sau tigaie, sau chiar în cuburi pentru frigărui. Pentru un rezultat desăvârșit, aduceți carnea la temperatura camerei înainte de gătire. Gătită la perfecțiune (medium-rare), își dezvăluie pe deplin calitățile. Se asociază minunat cu sosuri pe bază de ciuperci, piper verde sau un simplu unt aromat cu usturoi și ierburi proaspete. Este alegerea ideală pentru o masă de duminică în familie sau o cină specială.",
        price: 50,
      },
      {
        name: "Pulpa de vita fasonata, fara os",
        category: "Carne",
        description:
          "Pulpa de vită fasonată și dezosată este una dintre cele mai versatile piese din bucătărie. Provenind din partea posterioară a animalului, acest mușchi este slab, dar plin de aromă, fiind ideal pentru o multitudine de metode de gătire lentă, care îi frăgezesc textura. Fiecare bucată este curățată cu grijă, fiind gata de a fi transformată într-un preparat delicios. Este alegerea perfectă pentru tocănițe consistente și bogate, precum gulașul unguresc sau 'boeuf bourguignon', unde carnea, gătită lent în vin și legume, devine incredibil de fragedă. De asemenea, este excelentă pentru fripturi la cuptor gătite la temperatură joasă, care se pot felia subțire pentru sandvișuri. Tăiată în fâșii subțiri, poate fi folosită în preparate asiatice de tip stir-fry sau pentru a crea un 'beef stroganoff' autentic. Datorită conținutului său bogat în colagen, la gătirea îndelungată, acesta se transformă în gelatină, conferind sosurilor o textură bogată și onctuoasă. Bogată în proteine și nutrienți esențiali, pulpa de vită este o bază excelentă pentru mese hrănitoare.",
        price: 50,
      },
      {
        name: "Muschiulet de vita 1-2.5kg",
        category: "Carne",
        description:
          "Mușchiulețul de vită, sau 'Tenderloin', este regele neîncoronat al bucăților de carne, cea mai prețioasă și mai fragedă parte a vitei. Acest mușchi, situat sub coaste, este foarte puțin solicitat, ceea ce îi conferă o textură incredibil de fină, care practic se topește în gură. Piesa noastră, cu o greutate între 1 și 2.5 kg, este perfectă pentru a crea preparate spectaculoase, precum clasicul 'Beef Wellington' sau o friptură 'Chateaubriand'. Lipsit aproape complet de grăsime, mușchiulețul impresionează prin delicatețea sa, având un gust subtil și elegant. Pentru a-i păstra calitățile, necesită o gătire atentă și rapidă. O sigilare rapidă la exterior într-o tigaie încinsă, urmată de câteva minute la cuptor, este suficientă pentru a atinge perfecțiunea 'medium-rare'. Se recomandă asezonarea simplă, pentru a nu masca aroma sa naturală. Se potrivește de minune cu sosuri fine, precum Béarnaise sau o reducție de vin roșu. O masă care include mușchiuleț de vită este mai mult decât o cină, este un eveniment, o declarație de rafinament și o celebrare a celor mai fine ingrediente.",
        price: 100,
      },
      {
        name: "Carne vita lucru 80-20, polibloc",
        category: "Carne",
        description:
          "Echilibrul perfect între gust și suculență este definit de carnea noastră de vită lucru, cu un raport de 80% carne și 20% grăsime. Acest amestec clasic este secretul celor mai gustoși burgeri de casă, chiftele pufoase și sosuri bolognese autentice. Grăsimea selectată se topește în timpul gătirii, asigurând frăgezime și o aromă bogată, specifică vităi de calitate. Ambalată în format polibloc, este soluția ideală pentru restaurante, firme de catering sau pentru familiile care preferă să gătească în cantități mari, asigurând un stoc constant de carne proaspătă și versatilă. Este o bază excelentă pentru nenumărate rețete, de la musaca și sarmale, până la plăcinte cu carne sau ardei umpluți. Calitatea superioară a materiei prime garantează un produs final savuros, care va transforma orice masă obișnuită într-un festin. Prin congelare, își păstrează perfect proprietățile, permițându-vă să porționați și să utilizați exact cantitatea necesară, reducând astfel risipa. Alegeți versatilitatea și gustul desăvârșit pentru preparatele dumneavoastră.",
        price: 39,
      },
      {
        name: "Antricot de vita cu os",
        category: "Carne",
        description:
          "Experimentați gustul primordial și intens al vitei cu antricotul nostru cu os. Cunoscut și ca 'Cowboy Steak' sau 'Bone-in Ribeye', această piesă magnifică este visul oricărui iubitor de carne. Prezența osului nu este doar pentru aspect; în timpul gătirii, acesta transferă căldură uniform către interiorul fripturii și eliberează arome bogate din măduvă, infuzând carnea cu un plus de savoare și menținând-o incredibil de suculentă. Marmorarea generoasă, specifică antricotului, garantează o textură fragedă și un gust untos. Este o piesă centrală impresionantă pentru orice grătar sau cină festivă. Recomandăm gătirea la temperaturi înalte, pentru a obține o crustă perfect caramelizată la exterior, păstrând interiorul roz și plin de sucuri. Asezonarea minimalistă cu sare de mare și piper proaspăt este tot ce are nevoie pentru a străluci. Serviți-l alături de garnituri simple, care să nu eclipseze gustul său complex. O experiență culinară robustă și autentică, care celebrează carnea în forma sa cea mai pură și gustoasă.",
        price: 39,
      },
      {
        name: "Burta de vita curatata, angus",
        category: "Carne",
        description:
          "Pentru o ciorbă de burtă cu adevărat regală, secretul stă în calitatea ingredientului principal. Vă oferim burtă de vită premium, provenită de la rasa Angus, renumită la nivel mondial pentru calitatea excepțională a cărnii. Produsul nostru este curățat și pregătit cu cea mai mare atenție, economisindu-vă timp prețios în bucătărie. Este gata de a fi fiartă lent, până atinge acea textură catifelată și fină, specifică unei ciorbe de burtă preparate ca la carte. Bogată în colagen natural, burta de vită nu doar că oferă o textură unică, ci contribuie și la o consistență bogată și cremoasă a ciorbei. Gustul său delicat, dar distinct, este pânza perfectă pentru a fi completat de aromele de usturoi, oțet și smântână. Pe lângă clasica ciorbă, poate fi utilizată și în alte preparate tradiționale din bucătăriile internaționale, precum 'trippa alla romana' sau 'tripes à la mode de Caen'. Alegeți calitatea Angus pentru a ridica un preparat tradițional la rang de artă culinară și pentru a vă bucura de gustul autentic, desăvârșit.",
        price: 16,
      },
      {
        name: "Burta de vita vrac, folie si carton, germania",
        category: "Carne",
        description:
          "Soluția economică și eficientă pentru bucătăriile profesionale și evenimente de anvergură. Burta noastră de vită în vrac, de origine germană, respectă cele mai înalte standarde de calitate și siguranță alimentară. Ambalată practic, în folie și cutie de carton, asigură o manipulare și depozitare facile, protejând în același timp prospețimea produsului. Este ideală pentru restaurantele specializate în bucătărie tradițională, cantine sau firme de catering care prepară ciorbă de burtă în cantități mari. Produsul este pre-curățat, gata pentru a intra în procesul de gătire, optimizând astfel fluxul de lucru în bucătărie. Originea germană este o garanție a calității constante și a unui produs sigur. Fie că pregătiți sute de porții de ciorbă sau alte specialități pe bază de burtă de vită, această opțiune în vrac vă oferă cel mai bun raport calitate-preț, fără a face compromisuri în ceea ce privește gustul și textura. Asigurați-vă un stoc generos dintr-un ingredient esențial și bucurați-vă de eficiență și calitate germană.",
        price: 18,
      },
      {
        name: "Burta de vita amabalata in folie, germania",
        category: "Carne",
        description:
          "Calitate germană premium, ambalată convenabil pentru prospețime maximă. Burta noastră de vită, ambalată individual în folie, este alegerea perfectă pentru cei care doresc să prepare o autentică ciorbă de burtă acasă, fără compromisuri. Ambalajul vidat protejează produsul, îi păstrează textura și gustul natural și îi prelungește durata de valabilitate, asigurându-vă că beneficiați de un ingredient proaspăt de fiecare dată. Provenind din Germania, acest produs respectă riguroase standarde de procesare, fiind atent curățat și pregătit pentru a vă ușura munca. Pachetul este dimensionat ideal pentru o masă în familie, permițându-vă să recreați gustul copilăriei sau să experimentați pentru prima dată acest preparat clasic. Textura sa devine incredibil de fragedă și catifelată după o fierbere lentă și îndelungată. Oferiți-vă plăcerea unei ciorbe de burtă cremoase și savuroase, pornind de la un ingredient de bază de o calitate ireproșabilă. Un produs practic, igienic și gustos, care aduce standardele bucătăriilor profesionale direct la dumneavoastră acasă.",
        price: 18,
      },
      {
        name: "Burta fideluta de vita, 5kg, germania",
        category: "Carne",
        description:
          "Eficiență și rapiditate în bucătăria profesională. Burta noastră de vită tăiată fidea ('fideluță') este soluția ingenioasă care vă economisește timp prețios în procesul de preparare. Gata tăiată în fâșii uniforme, elimină complet etapa laborioasă de feliere manuală, permițându-vă să vă concentrați pe arta de a asezona și a găti o ciorbă de burtă perfectă. Ambalajul generos de 5 kg este special conceput pentru restaurante, cantine și evenimente, asigurând un stoc suficient pentru un număr mare de porții. Originea germană garantează un produs de înaltă calitate, procesat în condiții stricte de igienă și siguranță. Fâșiile uniforme asigură o gătire omogenă, rezultând o textură consistentă în fiecare farfurie. Acest produs nu doar că optimizează timpul de preparare, dar asigură și un aspect estetic plăcut și standardizat al preparatului final. Este alegerea inteligentă pentru orice bucătar profesionist care dorește să combine autenticitatea rețetei tradiționale cu eficiența cerută de o bucătărie modernă și aglomerată. Calitate, conveniență și consistență, într-un singur pachet.",
        price: 25,
      },
      {
        name: "Burta fideluta de vita, 1kg, germania",
        category: "Carne",
        description:
          "Bucuria de a găti o ciorbă de burtă perfectă acasă, fără efort. Varianta de 1 kg a burtei noastre fideluță, de origine germană, aduce toate avantajele produsului profesional în bucătăria dumneavoastră. Gata tăiată în fâșii subțiri și uniforme, vă scutește de cea mai migăloasă parte a rețetei, permițându-vă să vă bucurați de procesul de gătire. Pachetul de 1 kg este cantitatea ideală pentru a prepara o masă generoasă pentru familie și prieteni, suficientă pentru 4-6 porții bogate. Calitatea germană se reflectă în produsul curat, bine preparat și cu o textură excelentă. Fierberea lentă va transforma aceste fâșii într-o delicatesă fragedă și catifelată, baza perfectă pentru o ciorbă cremoasă și plină de gust. Impresionați-vă oaspeții cu o ciorbă de burtă care arată și are gust ca la cele mai bune restaurante, dar preparată cu dragoste, acasă. Este produsul perfect pentru gurmanzii moderni, care apreciază atât gustul autentic, cât și soluțiile inteligente care le simplifică viața în bucătărie.",
        price: 23,
      },
      {
        name: "Carne de vitel lucru (tocata)",
        category: "Carne",
        description:
          "Rafinament și delicatețe în fiecare preparat. Carnea noastră de vițel tocată este obținută din cele mai fine bucăți, garantând o textură fină și un gust subtil, elegant, care nu poate fi replicat de carnea de vită. Este ingredientul secret pentru a eleva rețete clasice la un nou nivel de savoare. Imaginați-vă niște chifteluțe italienești ('polpette') incredibil de fragede, un sos ragu delicat pentru paste proaspete sau o musaca cu un gust mai rafinat. Datorită conținutului natural mai scăzut de grăsime și a texturii sale fine, carnea de vițel tocată este perfectă și pentru preparatele destinate copiilor sau persoanelor care preferă o dietă mai ușoară. Este o sursă excelentă de proteine de înaltă calitate, vitamine și minerale, fiind o alegere nutritivă și gustoasă. Prospețimea este prioritatea noastră, de aceea carnea este tocată și ambalată în condiții optime pentru a-și păstra toate calitățile. Redescoperiți plăcerea de a găti cu un ingredient premium, care va aduce o notă de eleganță și un gust desăvârșit meselor dumneavoastră.",
        price: 39,
      },
      {
        name: "Carne de vitel lucru 95-5, bax de aprox.20kg",
        category: "Carne",
        description:
          "Standardul de aur pentru bucătăriile care nu fac compromisuri. Carnea noastră de vițel lucru, cu un raport excepțional de 95% carne și 5% grăsime, este acum disponibilă în format economic, la bax de aproximativ 20 kg. Această opțiune este special concepută pentru restaurantele gourmet, hoteluri și firmele de catering care doresc să ofere clienților lor preparate de o calitate superioară. Conținutul foarte scăzut de grăsime o face ideală pentru rețete dietetice sau preparate unde se dorește un gust pur și curat de vițel. Este perfectă pentru a crea tartaruri delicate, umpluturi fine pentru paste sau preparate premium pentru meniurile 'a la carte'. Baxul generos asigură un flux constant de materie primă de înaltă calitate, permițând un control excelent al costurilor fără a sacrifica standardul culinar. Fiecare bax este ambalat pentru a garanta prospețime maximă la livrare. Investiți în calitate și oferiți-le clienților o experiență de neuitat, bazată pe un ingredient de bază care reflectă angajamentul dumneavoastră pentru excelență.",
        price: 28,
      },
      {
        name: "Diafragma de vita, angus",
        category: "Carne",
        description:
          "Pătrundeți în lumea tăieturilor de specialitate cu diafragma de vită Angus, cunoscută de cunoscători drept 'Skirt Steak'. Această piesă, deși mai puțin comună, este una dintre cele mai gustoase și aromate părți ale vitei. Este un mușchi lung și plat, cu o textură pronunțată și o marmorare generoasă, care îi conferă un gust intens și suculent de vită. Calitatea Angus adaugă un plus de frăgezime și o aromă bogată, untuasă. Diafragma este vedeta unor preparate celebre, precum 'fajitas' în bucătăria mexicană sau 'churrasco' în cea argentiniană. Secretul său stă în gătirea rapidă, la temperatură foarte înaltă. Fie că o puneți pe grătarul încins sau într-o tigaie de fontă, câteva minute pe fiecare parte sunt suficiente. După gătire, este esențial să o lăsați să se odihnească și, cel mai important, să o feliați subțire, perpendicular pe fibra musculară, pentru a garanta o textură incredibil de fragedă. Marinarea înainte de gătire poate intensifica și mai mult aromele. O alegere îndrăzneață și plină de caracter, pentru cei care doresc să exploreze noi orizonturi ale gustului.",
        price: 45,
      },
      {
        name: "Flanc de vita curatat, angus",
        category: "Carne",
        description:
          "Flancul de vită, sau 'Flank Steak', de la prestigiosul soi Angus, este o tăietură slabă, dar surprinzător de aromată, iubită de bucătari pentru versatilitatea și gustul său pronunțat de vită. Este o piesă plată, cu fibre musculare lungi și evidente, care beneficiază enorm de pe urma marinării. O marinadă acidă (cu oțet, vin sau suc de citrice) va frăgezi fibrele și va adăuga straturi complexe de aromă. Flancul este perfect pentru o gătire rapidă la temperatură ridicată. Pe grătar sau la grill, dezvoltă o crustă delicioasă, păstrând un interior suculent. Este piesa clasică folosită pentru 'London Broil' și este excepțională în salate de vită thailandeze sau în rulade umplute. Ca și în cazul diafragmei, tehnica de feliere este crucială: tăiați-l întotdeauna subțire și contra fibrei pentru a maximiza frăgezimea. Este o opțiune excelentă, bogată în proteine și cu un conținut redus de grăsimi, care oferă o masă satisfăcătoare și plină de gust. Curățat și pregătit cu atenție, flancul nostru Angus este gata să devină piesa centrală a următoarei dumneavoastră aventuri culinare.",
        price: 45,
      },
      {
        name: "Fudulii de vitel, ambalate pe tavita de 1-1.5kg",
        category: "Carne",
        description:
          "Pentru cunoscătorii îndrăzneți și iubitorii de delicatese tradiționale, fuduliile de vițel reprezintă o specialitate culinară cu o istorie bogată. Considerate o delicatesă în multe culturi, de la cea balcanică la cea franceză ('amourettes'), acestea sunt apreciate pentru textura lor unică, incredibil de fină și cremoasă, asemănătoare cu cea a creierului. Produsul nostru este proaspăt, atent curățat și ambalat convenabil pe tăviță, gata pentru a fi preparat. Cea mai populară metodă de gătire este pane-ul: date prin făină, ou și pesmet, apoi prăjite în baie de ulei până devin aurii și crocante la exterior, cu un interior moale și catifelat. Se servesc fierbinți, cu un strop de lămâie și o garnitură proaspătă. De asemenea, pot fi gătite la grătar, în tocănițe sau ca parte a unor umpluturi sofisticate. Este o oportunitate de a explora gusturi autentice și de a redescoperi rețete vechi, pline de caracter. O alegere pentru cei aventuroși în bucătărie, care recompensează cu o experiență gustativă memorabilă și ieșită din comun.",
        price: 13,
      },
      {
        name: "Limba de bovina",
        category: "Carne",
        description:
          "Limba de bovină este o delicatesă clasică, apreciată în gastronomia mondială pentru textura sa incredibil de fragedă și gustul bogat. Deși necesită o preparare mai îndelungată, rezultatul este spectaculos și merită tot efortul. Produsul nostru este proaspăt și de cea mai bună calitate, gata pentru a fi transformat într-o multitudine de preparate. Procesul de gătire implică de obicei o fierbere lentă, timp de câteva ore, alături de legume aromatice (morcov, ceapă, țelină) și condimente (foi de dafin, boabe de piper), până când carnea devine foarte fragedă. După fierbere, pielița exterioară se îndepărtează cu ușurință, dezvăluind carnea fină din interior. Poate fi servită caldă, feliată gros, cu sosuri diverse (sos de hrean, sos de roșii sau sosuri pe bază de ciuperci), sau poate fi răcită și feliată subțire pentru a fi folosită în sandvișuri gourmet, salate sau ca aperitiv, în special în rețeta de limbă cu măsline. Este o sursă excelentă de zinc, fier și vitamina B12. Redescoperiți acest preparat tradițional și bucurați-vă de o textură și o savoare unice.",
        price: 28,
      },
      {
        name: "Maseteri (obrajiori-falcute) de vita, polibloc",
        category: "Carne",
        description:
          "Secretul celor mai buni bucătari pentru tocănițe și preparate braizate de neuitat: obrajii de vită. Această tăietură, provenită din mușchii masticatori, este una dintre cele mai muncite părți ale animalului, ceea ce o face extrem de bogată în colagen și țesut conjunctiv. Nu vă lăsați intimidați de acest aspect; printr-o gătire lentă și umedă (braizare), acest colagen se topește și se transformă într-o gelatină bogată, care frăgezește carnea până la punctul în care se poate desface cu furculița și creează un sos onctuos, lucios și incredibil de gustos. Aroma obrajilor de vită este profundă și intensă. Ambalajul în format polibloc este ideal pentru restaurantele care doresc să ofere clienților o experiență culinară de excepție. Gătiți lent în vin roșu, bere neagră sau o supă de vită aromată, alături de legume rădăcinoase, și serviți cu un piure cremos de cartofi sau mămăligă. Este un 'comfort food' la superlativ, un preparat care impresionează prin complexitatea gustului și textura sa decadentă. Un produs de nișă, pentru cunoscători, care transformă orice masă într-o ocazie specială.",
        price: 50,
      },
      {
        name: "Muschiulet de vita fasole-rasol alb, angus",
        category: "Carne",
        description:
          "Explorați diversitatea tăieturilor de vită cu acest mușchiuleț special, cunoscut și ca rasol alb, provenit de la vite din rasa premium Angus. Această piesă face parte din piciorul din spate și este apreciată pentru carnea sa macră, dar cu un gust specific și o textură care devine extrem de fragedă prin gătire lentă. Calitatea Angus asigură o frăgezime superioară și o aromă mai bogată comparativ cu vita standard. Este ingredientul perfect pentru un rasol alb tradițional, fiert lent alături de legume și servit cu hrean, sau pentru a crea tocănițe vieneze (Tafelspitz). De asemenea, poate fi braizat întreg la cuptor, rezultând o friptură suculentă care se feliază cu ușurință. Bogat în proteine și cu un conținut scăzut de grăsimi, este o alegere excelentă pentru mese hrănitoare și pline de gust. Ambalat pentru a-și păstra prospețimea, acest mușchiuleț Angus este o invitație de a redescoperi rețete clasice europene și de a vă bucura de o calitate superioară a cărnii. Un deliciu pentru cei care apreciază gustul autentic și preparatele gătite cu răbdare și pasiune.",
        price: 54,
      },
      {
        name: "Oase de vita cu maduva tubulare",
        category: "Carne",
        description:
          "Piatra de temelie a oricărei bucătării serioase, oasele de vită cu măduvă sunt secretul pentru a obține cele mai bogate și mai gustoase supe, ciorbe și sosuri. Aceste oase tubulare, pline de măduvă nutritivă, eliberează prin fierbere lentă colagen, minerale și o multitudine de arome, transformând apa simplă într-un 'aur lichid' - o supă de oase concentrată și plină de beneficii pentru sănătate. Pentru a intensifica și mai mult gustul, vă recomandăm să coaceți oasele în cuptor la temperatură înaltă, alături de câteva legume (morcov, ceapă, țelină), înainte de a le fierbe. Acest proces de caramelizare va adăuga o profunzime incredibilă de gust. Mai mult, măduva coaptă este o delicatesă în sine: scoasă din os și întinsă pe o felie de pâine prăjită, cu un praf de sare grunjoasă, este un aperitiv rustic și decadent, iubit de gurmanzi. Fie că doriți să preparați o bază pentru sosuri (demi-glace), o ciorbă de văcuță ca la mama acasă sau o supă ramen autentică, aceste oase sunt indispensabile. Un produs simplu, dar esențial, care stă la baza celor mai memorabile preparate.",
        price: 9,
      },
      {
        name: "Rasol cu os de vita",
        category: "Carne",
        description:
          "Rasolul de vită cu os, cunoscut și sub numele de 'Beef Shank', este campionul necontestat al preparatelor gătite lent ('slow food'). Această tăietură transversală a piciorului de vită conține o porțiune de os bogată în măduvă, înconjurată de carne și mult țesut conjunctiv. Tocmai acest țesut, bogat în colagen, este secretul său: prin fierbere sau braizare îndelungată, se topește, frăgezind carnea până la perfecțiune și creând un sos incredibil de bogat și gelatinos. Este piesa clasică folosită în celebrul preparat italian 'Osso Buco', unde rasolul este gătit lent în vin alb și roșii, iar măduva din os este savurată la final. De asemenea, este perfect pentru ciorbe și tocănițe robuste, care necesită timp pentru a-și dezvolta aromele. Gustul este intens și profund, iar textura finală este de neegalat. Este un preparat economic, dar care oferă o experiență culinară de lux. O mâncare reconfortantă, ideală pentru zilele reci, care umple casa cu arome îmbietoare și adună familia în jurul mesei. Redescoperiți plăcerea gătitului fără grabă cu acest produs excepțional.",
        price: 37,
      },
      {
        name: "Seu de vita",
        category: "Carne",
        description:
          "Reîntoarceți-vă la tradiție și descoperiți secretul gustului autentic cu seul de vită, o grăsime naturală și versatilă. Înainte de popularitatea uleiurilor vegetale, seul era grăsimea de bază în multe bucătării, apreciată pentru punctul său de fum ridicat și pentru aroma inconfundabilă pe care o conferă preparatelor. Este ideal pentru prăjire, oferind o crustă crocantă și aurie de neegalat. Imaginați-vă cartofi prăjiți în seu de vită, după rețeta tradițională belgiană, sau fripturi sigilate într-o tigaie încinsă cu seu, pentru o caramelizare perfectă. De asemenea, este un ingredient esențial în patiseria tradițională britanică, fiind folosit la prepararea aluaturilor pentru plăcinte ('suet pastry') sau a celebrei budinci de Crăciun. Seul nostru este de cea mai bună calitate, curat și gata de a fi topit (redat) pentru a obține o grăsime pură, care se poate păstra timp îndelungat. Este o alternativă naturală la grăsimile procesate, aducând un plus de gust și o textură superioară mâncărurilor. O alegere pentru bucătarii curioși și pentru cei care doresc să recreeze gusturile autentice ale trecutului.",
        price: 14,
      },
      {
        name: "T-bone de vita",
        category: "Carne",
        description:
          "De ce să alegi când poți avea totul? Friptura T-Bone este compromisul perfect pentru indeciși, oferind două dintre cele mai apreciate tăieturi de vită într-o singură piesă spectaculoasă. Osul caracteristic în formă de 'T' separă două tipuri de mușchi, fiecare cu personalitatea sa: pe de o parte, vrăbioara (striploin), cu o textură fermă și o aromă intensă de vită, iar pe de altă parte, o porțiune generoasă de mușchiuleț (tenderloin), renumit pentru frăgezimea sa extremă. Această combinație unică vă permite să experimentați un contrast de texturi și arome în fiecare mușcătură. Este o friptură substanțială, ideală pentru a fi împărțită, și o vedetă absolută pe orice grătar. Gătirea necesită puțină atenție, deoarece mușchiulețul se gătește mai repede decât vrăbioara. Poziționați partea cu mușchiuleț mai departe de sursa de căldură directă pentru un rezultat uniform. Asezonată simplu cu sare și piper, friptura T-Bone este o declarație de opulență și un festin pentru orice carnivor adevărat. O experiență clasică de steakhouse, pe care o puteți recrea acum în confortul propriei case.",
        price: 84,
      },

      // Carne de Porc
      {
        name: "Carne de porc lucru",
        category: "Carne",
        description:
          "Inima bucătăriei românești și a multor altora, carnea de porc lucru este un ingredient fundamental, de o versatilitate remarcabilă. Amestecul nostru este perfect echilibrat pentru a oferi gust bogat și suculență, fiind ideal pentru o multitudine de preparate tradiționale și moderne. Este baza perfectă pentru sarmalele clasice, unde grăsimea sa contribuie la frăgezirea verzei și la o umplutură savuroasă. Chiftelele și perișoarele devin pufoase și gustoase, iar micii capătă acea textură și aromă inconfundabile. Folosiți-o pentru a crea un sos ragu consistent pentru paste, o musaca delicioasă sau ca umplutură pentru ardei, dovlecei sau plăcinte sărate. Calitatea materiei prime este esențială, de aceea folosim doar carne proaspătă, selectată, pentru a garanta un produs final de excepție. Tocată proaspăt și ambalată cu grijă, carnea noastră de porc lucru este gata să inspire următoarea masă în familie, aducând gustul autentic și reconfortant al mâncărurilor făcute cu dragoste. Un ingredient de bază, nelipsit din nicio bucătărie bine echipată.",
        price: 19,
      },
      {
        name: "Ceafa fara os, de porc, origine spania",
        category: "Carne",
        description:
          "Aduceți spiritul vibrant al Spaniei pe grătarul dumneavoastră cu ceafa noastră de porc fără os. Spania este renumită pentru calitatea excepțională a cărnii de porc, iar acest produs nu face excepție. Ceafa este una dintre cele mai apreciate tăieturi, datorită marmorării sale naturale, care garantează o friptură suculentă și plină de gust, indiferent de metoda de gătire. Fiecare felie este o promisiune a frăgezimii. Este perfectă pentru grătar, unde căldura directă topește grăsimea și caramelizează exteriorul, creând o crustă delicioasă. De asemenea, este excelentă pentru fripturi lente la cuptor, gătite întregi, unde devine atât de fragedă încât se poate desface cu furculița. Tăiată cuburi, este ideală pentru frigărui marinate în stil mediteranean, cu usturoi, ierburi și ulei de măsline. Originea spaniolă aduce o garanție a calității și a unui gust superior. Pregătiți-vă pentru o experiență culinară deosebită, fie că organizați un barbecue cu prietenii sau o masă de duminică în familie. Gustul său bogat și textura sa fragedă o vor transforma rapid în favorita tuturor.",
        price: 27,
      },
      {
        name: "Ciolan afumat, aprox 700gr pe buc",
        category: "Carne",
        description:
          "Un clasic atemporal al bucătăriei central și est-europene, ciolanul afumat este sinonim cu mesele copioase și reconfortante. Produsul nostru este preparat după metode tradiționale, afumat lent cu lemn de esență tare, pentru a dezvolta o aromă profundă și o culoare arămie superbă. Fiecare bucată, cu o greutate de aproximativ 700 de grame, este precuptată, ceea ce scurtează semnificativ timpul de gătire final. Este ingredientul vedetă în rețete celebre precum 'ciolan cu varză' sau 'ciolan cu fasole', unde gustul său sărat și afumat completează perfect dulceața verzei sau textura cremoasă a fasolei. De asemenea, poate fi fiert și servit cu hrean și muștar, în stil german, sau copt la cuptor până când șoriciul devine incredibil de crocant. Este o piesă centrală spectaculoasă, care aduce un aer rustic și festiv oricărei mese. Textura sa fragedă și gustul său intens îl fac irezistibil. Păstrați tradiția vie sau reinterpretați-o într-o manieră modernă; indiferent de alegere, ciolanul nostru afumat promite o experiență culinară autentică și plină de satisfacții.",
        price: 20,
      },
      {
        name: "Cotlet de porc fara os, origine ungaria",
        category: "Carne",
        description:
          "Descoperiți calitatea porcului maghiar cu cotletul nostru fără os, o piesă de carne macră și versatilă. Ungaria are o lungă tradiție în creșterea porcilor, fiind renumită pentru rase precum Mangalița, iar această expertiză se reflectă în calitatea superioară a cărnii. Cotletul, cunoscut și ca 'pork loin', este o tăietură slabă, dar care, gătită corect, poate fi extrem de suculentă și gustoasă. Este pânza perfectă pentru a crea celebrele șnițele vieneze, bătute subțire și prăjite până devin aurii și crocante. Poate fi, de asemenea, tăiat în cotlete groase ('chops') și gătit la grătar sau în tigaie, ideal cu un sos de mere sau muștar. Gătit întreg, la cuptor, se transformă într-o friptură elegantă, perfectă pentru a fi servită la ocazii speciale. Pentru a asigura suculența, este recomandat să nu fie gătit în exces și poate beneficia de pe urma saramurării ('brining') înainte de preparare. Este o alegere sănătoasă, bogată în proteine, care se pretează la o infinitate de asezonări și rețete. Un produs de bază de înaltă calitate, care nu ar trebui să lipsească din frigiderul niciunui gurmand.",
        price: 27,
      },
      {
        name: "Gelatina de porc 1kg",
        category: "Carne",
        description:
          "Agentul de legare natural și tradițional, gelatina de porc este un ingredient esențial pentru bucătarii care apreciază tehnicile clasice. Produsul nostru, ambalat în pachet generos de 1 kg, este de o puritate înaltă, perfect pentru a oferi structură și o textură fină preparatelor dumneavoastră. Este indispensabilă pentru a crea piftie (răcituri) limpede și gustoasă, terine elegante cu carne sau legume, și aspicuri decorative care transformă orice platou de aperitive într-o operă de artă. Pe lângă rolul său în preparatele sărate, gelatina este folosită și în cofetărie, pentru a stabiliza mousse-uri, creme bavareze, jeleuri de fructe sau pentru a crea bomboane gumate de casă. Este un produs complet natural, obținut din colagen, fiind o alternativă superioară la agenții de gelificare artificiali. Ușor de utilizat, necesită doar hidratare în lichid rece, urmată de dizolvare în lichid cald. Pachetul mare este ideal pentru bucătăriile profesionale sau pentru pasionații de gătit care doresc să aibă la îndemână acest ingredient versatil. Redescoperiți secretele bucătăriei clasice cu gelatina noastră de porc de calitate superioară.",
        price: 65,
      },
      {
        name: "Muschiulet de porc, 0.7-1.2kg/buc, germania",
        category: "Carne",
        description:
          "Eleganță și frăgezime definesc mușchiulețul de porc, cea mai fină și mai delicată tăietură. Cunoscut ca 'pork tenderloin', acest mușchi este echivalentul porcin al mușchiulețului de vită, fiind extrem de slab și fraged. Produsul nostru, de origine germană, garantează o calitate excepțională și o dimensiune ideală, între 0.7 și 1.2 kg. Datorită texturii sale delicate, se gătește foarte repede, fiind o soluție perfectă pentru o cină rapidă, dar sofisticată, în timpul săptămânii. Poate fi gătit întreg, la cuptor sau pe grătar, adesea învelit în bacon pentru a-i adăuga un plus de grăsime și aromă. Feliat în medalioane, se prăjește în tigaie în doar câteva minute și se servește cu o varietate de sosuri: de ciuperci, de muștar Dijon, de piper verde sau sosuri pe bază de fructe, precum prune sau mere. Gustul său subtil îl face un partener excelent pentru o gamă largă de arome. Este o alegere sănătoasă, bogată în proteine și săracă în grăsimi, care impresionează de fiecare dată prin eleganța și textura sa care se topește în gură.",
        price: 38,
      },
      {
        name: "Pulpa fara os, de porc, origine belgia",
        category: "Carne",
        description:
          "O piesă centrală pentru mese memorabile, pulpa de porc fără os, de origine belgiană, este o tăietură generoasă, slabă și extrem de versatilă. Belgia este cunoscută pentru standardele sale înalte în producția de carne de porc, iar acest produs reflectă pe deplin această tradiție. Este bucata ideală pentru a prepara o friptură la cuptor spectaculoasă, cu un șorici crocant și o carne fragedă și suculentă la interior. Gătită lent, la temperatură joasă, se transformă într-un 'pulled pork' perfect, carnea devenind atât de fragedă încât se poate desface cu ușurință în fâșii. Este, de asemenea, alegerea clasică pentru șnițele de dimensiuni generoase sau pentru cuburi de carne folosite în tocănițe sau gulaș. Datorită dimensiunii sale, este perfectă pentru a hrăni un grup mare de oameni la ocazii festive sau la mesele de duminică în familie. Se marinează frumos, absorbind aromele de ierburi, usturoi sau condimente. Un produs de bază, economic și plin de gust, care oferă nenumărate posibilități creative în bucătărie, de la cele mai rustice la cele mai rafinate preparate.",
        price: 25,
      },
      {
        name: "Scarita de la cotlet de porc 9-11cm/10kg, polonia",
        category: "Carne",
        description:
          "Pregătiți-vă pentru o experiență culinară de neuitat cu scărița noastră de porc, de origine poloneză. Cunoscută și ca 'baby back ribs', aceasta provine din partea superioară a coastelor, de lângă coloană, fiind mai fragedă și mai puțin grasă decât alte tipuri de coaste. Tăietura de 9-11 cm asigură o porție generoasă de carne pe fiecare os. Polonia are o tradiție bogată în prepararea cărnii de porc, iar acest produs este de o calitate excepțională. Este pânza perfectă pentru a fi acoperită cu sosul dumneavoastră preferat de barbecue și gătită lent, la cuptor sau pe grătar, până când carnea devine atât de fragedă încât cade de pe os. De asemenea, poate fi marinată în stil asiatic, cu sos de soia, ghimbir și miere, sau frecată cu un amestec uscat de condimente ('dry rub') pentru o aromă intensă. Ambalajul de 10 kg este ideal pentru restaurante, petreceri sau pentru adevărații pasionați de BBQ care doresc să-și impresioneze prietenii. Un deliciu universal, care aduce bucurie și creează amintiri în jurul mesei.",
        price: 28,
      },

      // Carne de Pui
      {
        name: "Aripi de pui (ciocanel) IQF, 1kg, bax de 10kg",
        category: "Carne",
        description:
          "Aripioarele de pui, în special partea cea mai cărnoasă cunoscută ca 'ciocănel' sau 'drumette', sunt un aperitiv iubit la nivel mondial. Produsul nostru utilizează tehnologia IQF (Individually Quick Frozen), ceea ce înseamnă că fiecare ciocănel este congelat rapid și individual. Acest proces previne formarea cristalelor mari de gheață, păstrând astfel textura și suculența cărnii, și, cel mai important, vă permite să decongelați și să utilizați exact numărul de bucăți de care aveți nevoie, fără a decongela tot pachetul. Ambalajul la bax de 10 kg, format din pungi de 1 kg, este extrem de practic pentru restaurante, pub-uri sau evenimente, asigurând un control facil al stocurilor și porțiilor. Sunt perfecte pentru a fi preparate în stil 'Buffalo wings', marinate, date prin pesmet și prăjite pentru un plus de crocant, sau coapte la cuptor cu diverse arome. Sunt un 'crowd-pleaser' garantat, ideale pentru seri de film, petreceri sau ca parte a unui platou de aperitive. Calitate constantă, gust delicios și o conveniență de neegalat.",
        price: 17,
      },
      {
        name: "Aripi de pui fara varfuri",
        category: "Carne",
        description:
          "Simplificați procesul de preparare cu aripile noastre de pui gata curățate de vârfuri. Această mică ajustare economisește timp prețios în bucătărie și vă oferă doar părțile cele mai bune și mai cărnoase ale aripilor: 'ciocănelul' (drumette) și 'aripa mijlocie' (flat/wingette). Vârfurile, având foarte puțină carne, sunt adesea aruncate sau folosite doar pentru supă, așa că noi am făcut deja acest pas pentru dumneavoastră. Aceste aripi sunt perfecte pentru orice rețetă: prăjite până devin crocante, glazurate cu un sos lipicios dulce-acrișor în stil asiatic, marinate și puse pe grătar, sau coapte în cuptor cu ierburi și lămâie. Sunt ideale pentru a absorbi aromele, iar pielea lor devine incredibil de crocantă. Fie că plănuiți o seară relaxantă cu prietenii, o gustare pentru ziua meciului sau o masă rapidă și gustoasă pentru familie, aceste aripi gata de gătit sunt soluția perfectă. Bucurați-vă de gustul clasic al aripilor de pui, fără bătaia de cap a pregătirii.",
        price: 13,
      },
      {
        name: "Mini ciolane de spate (aripioare)",
        category: "Carne",
        description:
          "O denumire alternativă și interesantă pentru aripioare, 'mini ciolanele de spate' subliniază caracterul cărnos și satisfăcător al acestui produs. Această selecție premium vă oferă aripioare de pui de cea mai bună calitate, gata de a fi transformate într-o gustare sau un fel principal de neuitat. Versatilitatea lor este legendară. Puteți să le condimentați cu un amestec picant de condimente Cajun și să le coaceți până devin crocante, să le marinați într-un amestec de iaurt și mirodenii indiene pentru un 'chicken tandoori' improvizat, sau să le fierbeți încet într-un sos teriyaki până când carnea devine fragedă și glazura se îngroașă. Sunt perfecte pentru a fi gătite în friteuza cu aer cald (air fryer) pentru o variantă mai sănătoasă, dar la fel de crocantă. Indiferent de metoda aleasă, rezultatul este întotdeauna un deliciu: carne suculentă, piele crocantă și o satisfacție garantată. Un produs de bază în orice bucătărie, care permite o creativitate fără limite și aduce mereu zâmbete pe fețele celor dragi.",
        price: 34,
      },
      {
        name: "Piept de pui dezosat sarat seara/2g",
        category: "Carne",
        description:
          "Eficiență și gust într-un singur produs. Pieptul nostru de pui dezosat este soluția perfectă pentru bucătăriile aglomerate și pentru oricine dorește o masă rapidă și sănătoasă. Produsul vine deja sărat, cu o cantitate optimă de 2g de sare, un proces cunoscut sub numele de 'brining' sau saramurare. Acest pas, pe care noi l-am făcut deja pentru dumneavoastră, are un dublu avantaj: sarea pătrunde în țesutul muscular, asezonând carnea în profunzime, și, cel mai important, ajută la reținerea umidității în timpul gătirii. Rezultatul? Un piept de pui mult mai suculent și mai fraged, chiar și atunci când este gătit la grătar sau la cuptor. Este incredibil de versatil: poate fi tăiat cuburi pentru stir-fry-uri, fâșii pentru salate Caesar sau fajitas, sau gătit întreg și apoi feliat. Fiind deja asezonat, necesită mai puține condimente suplimentare. Este o alegere excelentă pentru cei care urmează o dietă bogată în proteine și săracă în grăsimi. Simplificați-vă viața în bucătărie și bucurați-vă de un piept de pui perfect de fiecare dată, fără riscul de a obține o carne uscată și fadă.",
        price: 32,
      },
      {
        name: "Pulpe de pui inferioare vidate",
        category: "Carne",
        description:
          "Pulpele de pui inferioare, cunoscute popular ca și 'copănele', sunt una dintre cele mai iubite și mai gustoase părți ale puiului. Datorită conținutului lor natural de grăsime și țesut conjunctiv, sunt mai suculente și mai aromate decât pieptul de pui. Ambalarea prin vidare este o metodă superioară de conservare, care extrage aerul din pachet, protejând carnea de oxidare, prelungindu-i termenul de valabilitate și păstrându-i prospețimea, culoarea și gustul intacte. Aceste copănele sunt perfecte pentru o multitudine de rețete. Coapte la cuptor cu cartofi și rozmarin, devin fragede, cu o piele crocantă și aurie. Fierte într-o tocăniță cu ceapă și sos de roșii, carnea se desprinde singură de pe os. Marinate și puse pe grătar, sunt un deliciu afumat și suculent. Sunt, de asemenea, o alegere excelentă pentru copii, fiind ușor de mâncat. Ambalajul vidat le face ideale și pentru marinare rapidă, deoarece presiunea ajută la pătrunderea aromelor mai adânc în carne. Un produs de bază, practic și plin de gust, pentru mese de familie reușite.",
        price: 16,
      },
      {
        name: "Pulpe dezosate cu piele de pui, romania",
        category: "Carne",
        description:
          "Bucurați-vă de ce e mai bun din ambele lumi cu pulpele noastre de pui dezosate, dar cu piele. Acest produs ingenios combină gustul bogat și suculența pulpei cu potențialul crocant al pielii, eliminând în același timp bătaia de cap a osului. Provenind de la pui crescuți în România, sprijiniți producătorii locali și vă bucurați de un produs proaspăt și de calitate. Păstrarea pielii este esențială: în timpul gătirii, grăsimea de sub piele se topește, ungând carnea și menținând-o incredibil de suculentă, în timp ce pielea însăși, expusă la căldură uscată (cuptor, tigaie, grătar), devine subțire și crocantă ca sticla. Sunt perfecte pentru a fi umplute, rulate și gătite ca o ruladă. Se gătesc mult mai repede decât pulpele cu os și sunt mai ușor de mâncat. Tăiate în bucăți, sunt excelente pentru frigărui sau pentru preparate asiatice. O alegere versatilă și delicioasă, care oferă o experiență superioară față de pulpele fără piele, păstrând toată savoarea.",
        price: 20,
      },
      {
        name: "Pulpe dezosate fara piele de pui, romania",
        category: "Carne",
        description:
          "Soluția ideală pentru mese rapide, sănătoase și pline de gust. Pulpele noastre de pui, dezosate și fără piele, de origine românească, sunt o alternativă excelentă și mai gustoasă la pieptul de pui. Fiind o carne mai închisă la culoare, pulpa este natural mai suculentă și are o aromă mai pronunțată, chiar și în absența pielii și a osului. Este o tăietură extrem de versatilă și convenabilă. Gata curățată, poate fi folosită imediat, tăiată cuburi pentru tocănițe, curry-uri sau ciorbe, fâșii pentru stir-fry-uri sau fajitas, sau gătită întreagă în tigaie sau la cuptor. Se marinează rapid și absoarbe foarte bine aromele. Este o alegere fantastică pentru dietele sărace în grăsimi, dar bogate în proteine, oferind mai mult gust decât pieptul de pui. Sprijinind producția locală, aveți garanția unui produs proaspăt. Timpul de gătire este redus, făcându-le perfecte pentru cinele din timpul săptămânii. Un ingredient de bază, economic și sănătos, care nu ar trebui să lipsească din planul dumneavoastră alimentar.",
        price: 22,
      },

      // Pește și Fructe de Mare
      {
        name: "Creveti cruzi decorticati 31-40buc / 1kg",
        category: "Carne",
        description:
          "Aduceți gustul exotic al mării în bucătăria dumneavoastră cu creveții noștri cruzi, decorticați. Indicativul '31-40 buc / 1kg' se referă la dimensiunea creveților, fiind o mărime medie spre mare (jumbo), ideală pentru o prezentare elegantă și o textură consistentă. Produsul vine gata curățat de carapace, economisindu-vă timp și efort. Fiind cruzi, aveți control total asupra procesului de gătire și a texturii finale. Se gătesc extrem de repede, în doar câteva minute. Sunt perfecți pentru a fi trași la tigaie cu usturoi, ulei de măsline și ardei iute pentru un 'gambas al ajillo' spaniol, adăugați într-un curry thailandez cremos, puși pe frigărui și gătiți la grătar, sau incluși într-o paella bogată. De asemenea, sunt delicioși în paste cu fructe de mare sau într-o salată proaspătă. Textura lor este fermă, dar fragedă, iar gustul este dulce și delicat. Congelați prin tehnologia IQF (congelare rapidă individuală), puteți folosi exact cantitatea dorită. O sursă excelentă de proteine slabe și acizi grași Omega-3, creveții sunt o alegere sănătoasă și rafinată pentru orice ocazie.",
        price: 67,
      },
      {
        name: "File de pastrav 130-160/bax de 5kg",
        category: "Carne",
        description:
          "Păstrăvul este unul dintre cei mai apreciați pești de apă dulce, renumit pentru carnea sa fină, delicată și gustul său curat. Vă oferim fileuri de păstrăv de calitate superioară, curățate și gata de gătit, cu o greutate ideală de 130-160 de grame per porție. Ambalajul la bax de 5 kg este perfect pentru restaurante, pensiuni și evenimente, asigurând un stoc constant și un control eficient al costurilor. Fileurile sunt o opțiune extrem de convenabilă, eliminând complet necesitatea de a curăța și fileta peștele. Sunt delicioase gătite simplu, la cuptor, pe un pat de legume, cu lămâie și ierburi proaspete. În tigaie, cu pielea în jos, devin minunat de crocante. Pot fi, de asemenea, afumate, marinate sau folosite pentru a crea terine rafinate. Păstrăvul este o sursă excelentă de acizi grași Omega-3, proteine și vitamina D. Gustul său blând îl face potrivit pentru o gamă largă de preparate și este, de asemenea, foarte agreat de copii. Un produs sănătos, gustos și elegant, care aduce prospețimea apelor de munte direct în farfuria dumneavoastră.",
        price: 48,
      },
      {
        name: "File de salau zona de nil, 5kg",
        category: "Carne",
        description:
          "Descoperiți un pește exotic și versatil: șalăul de Nil. Acest pește de apă dulce, originar din Africa, este apreciat pentru carnea sa albă, fermă și cu un gust blând, care absoarbe minunat aromele condimentelor și sosurilor. Fileurile noastre sunt groase și consistente, fără oase, fiind extrem de ușor de preparat. Textura sa fermă îl face ideal pentru metode de gătire care ar putea destrăma alți pești mai delicați. Este excelent pentru a fi prăjit în crustă de mălai, pentru a crea 'fish and chips' de calitate, pentru a fi gătit la grătar sau la cuptor. Tăiat cuburi, este perfect pentru tocănițe de pește sau ciorbe, deoarece își păstrează forma. De asemenea, se pretează foarte bine la rețete cu influențe creole sau africane, cu sosuri picante pe bază de roșii. Ambalajul la bax de 5 kg este o soluție economică pentru sectorul HORECA. Fiind un pește cu un conținut redus de grăsimi, este o opțiune sănătoasă și nutritivă. O alegere excelentă pentru a diversifica meniul și pentru a oferi clienților o alternativă interesantă la peștii tradiționali.",
        price: 48,
      },
      {
        name: "Pastrav eviscerat 250-300 gr/buc, la bax de 5kg",
        category: "Carne",
        description:
          "Experimentați gustul autentic și prospețimea păstrăvului întreg. Produsul nostru vine gata eviscerat (curățat de intestine), economisindu-vă un pas important în procesul de pregătire. Fiecare pește are o greutate perfectă pentru o porție individuală, între 250 și 300 de grame, fiind ideal pentru o prezentare spectaculoasă în farfurie. Gătirea peștelui întreg, pe os, are avantajul de a menține carnea mult mai suculentă și mai aromată. Este delicios umplut cu felii de lămâie, usturoi și ierburi proaspete (pătrunjel, mărar), învelit în folie de copt și gătit la cuptor sau pe grătar. O altă metodă clasică este 'păstrăvul meunière', tăvălit prin făină și prăjit în unt. Ambalajul la bax de 5 kg este conceput pentru restaurante și pensiuni, în special cele cu specific pescăresc sau tradițional. Păstrăvul este un pește extrem de sănătos, bogat în Omega-3 și proteine. Oferiți o experiență culinară clasică și rafinată, bazată pe un produs de o calitate și prospețime excepționale.",
        price: 36,
      },

      // === CARTOFI ===
      {
        name: "Cartofi premier gold 14mm/2.5kg",
        category: "Cartofi",
        description:
          "Cartofii prăjiți perfecți încep cu o tăietură de calitate. Cartofii noștri Premier Gold, cu o tăietură groasă și generoasă de 14mm, sunt special concepuți pentru a oferi o experiență culinară superioară. Această grosime asigură un rezultat final ideal: un exterior auriu și crocant, care contrastează minunat cu un interior pufos și plin de gust, asemănător cu miezul unui cartof copt. Sunt perfecți pentru a fi serviți alături de fripturi, burgeri gourmet sau ca garnitură principală, în stil belgian, cu diverse sosuri. Ambalajul de 2.5 kg este practic și economic, potrivit atât pentru uz casnic, cât și pentru restaurante. Produsul este precongelat, ceea ce garantează o calitate constantă și un timp de preparare redus. Nu mai este nevoie să curățați, să tăiați și să spălați cartofii; pur și simplu îi puteți găti direct din congelator, în baie de ulei sau în friteuza cu aer cald pentru o variantă mai sănătoasă. Calitatea 'Gold' asigură un gust dulceag, specific unui soi de cartofi de înaltă calitate. O alegere premium pentru cunoscătorii care nu fac compromisuri.",
        price: 17,
      },
      {
        name: "Cartofi 7x7 / 2.5kg",
        category: "Cartofi",
        description:
          "Tăietura clasică, atemporală, care a definit conceptul de 'cartofi prăjiți'. Cu o dimensiune de 7x7mm, acești cartofi oferă echilibrul perfect între suprafața crocantă și miezul fraged. Este tăietura pe care o găsiți în majoritatea restaurantelor de tip fast-food, iubită de copii și adulți deopotrivă pentru rapiditatea cu care se gătește și pentru textura sa satisfăcătoare. Fiecare mușcătură oferă un crocant de neegalat. Punga de 2.5 kg este ideală pentru a satisface poftele întregii familii sau pentru a asigura un flux constant într-o bucătărie profesională. Fiind precongelati, sunt extrem de convenabili: se pot găti direct, fără decongelare, economisind timp și efort. Se potrivesc perfect alături de orice preparat, de la burgeri și șnițele, la pește pane sau ca o simplă gustare cu ketchup și maioneză. Rezultatul este întotdeauna uniform, auriu și delicios. Pentru cei care iubesc clasicul și caută consistență și gust autentic, acești cartofi prăjiți sunt alegerea sigură și mereu inspirată.",
        price: 23,
      },
      {
        name: 'Cartofi pentru prajit clasa "a" coated 10/10 mm /2.5kg',
        category: "Cartofi",
        description:
          "Ridicați standardul cu cartofii noștri prăjiți de clasa 'A', acoperiți cu un strat special ('coated'). Tăietura de 10x10mm este una medie, foarte populară, oferind un echilibru bun între crocant și pufos. Elementul distinctiv este stratul subțire, invizibil, de amidon sau aluat fin, care îmbracă fiecare cartof. Acest 'coating' are multiple beneficii: în primul rând, creează o barieră care absoarbe mai puțin ulei în timpul prăjirii, rezultând un produs final mai puțin gras. În al doilea rând, asigură un crocant excepțional, care durează mult mai mult timp după ce cartofii au fost scoși din baie de ulei, făcându-i ideali pentru servirea în restaurante sau pentru livrările la domiciliu. De asemenea, ajută la menținerea căldurii pentru o perioadă mai lungă. Gustul este neutru, permițând aromei naturale a cartofului să iasă în evidență. Pachetul de 2.5 kg oferă o cantitate generoasă pentru a testa și a vă convinge de calitățile superioare ale acestui produs. Este alegerea profesioniștilor, pentru un rezultat premium, crocant și aspectuos de fiecare dată.",
        price: 23,
      },
      {
        name: "Cartofi pentru prajit global frozen 10/20mm /2.5kg",
        category: "Cartofi",
        description:
          "O tăietură unică și interesantă pentru cei care doresc să ofere o prezentare diferită. Tăietura de 10x20mm, cunoscută și ca 'Steakhouse Fries' sau tăietură rectangulară, oferă o experiență gustativă distinctă. Suprafața mai mare permite dezvoltarea unei cruste generoase, în timp ce grosimea de 10mm asigură un miez substanțial și pufos. Acești cartofi au o prezență impunătoare în farfurie, fiind garnitura perfectă alături de o friptură suculentă, coaste la grătar sau un burger artizanal. Brandul Global Frozen este un garant al calității, folosind soiuri de cartofi atent selecționate pentru un gust și o textură optime. Ambalajul de 2.5 kg este potrivit pentru a experimenta cu acest format sau pentru a-l introduce ca opțiune premium în meniul unui restaurant. Sunt precongelati și gata de gătit, oferind conveniență și un rezultat constant. Surprindeți-vă clienții sau familia cu o alternativă robustă și plină de gust la cartofii prăjiți clasici. O alegere îndrăzneață, care demonstrează atenție la detalii și dorința de a oferi ceva special.",
        price: 33,
      },
      {
        name: "Cartofi pentru prajit steak house 10/20 2.5kg",
        category: "Cartofi",
        description:
          "Aduceți experiența unui steakhouse american direct la dumneavoastră acasă cu acești cartofi prăjiți cu tăietură specifică. Dimensiunea de 10x20mm este robustă și substanțială, concepută special pentru a acompania preparate consistente, precum fripturile de vită, burgerii înalți sau coastele de porc. Fiecare cartof oferă o mușcătură satisfăcătoare, cu o suprafață mare pentru a fi înmuiată în sosuri și un interior bogat și cremos. Sunt partenerul ideal pentru un T-bone suculent sau un antricot marmorat. Punga de 2.5 kg este perfectă pentru a organiza un barbecue în stil american sau pentru a avea mereu la îndemână o garnitură impresionantă. Calitatea superioară a cartofilor folosiți asigură un gust dulceag și o textură care nu se destramă la prăjire. Pot fi gătiți în baie de ulei pentru un rezultat clasic, sau la cuptor, asezonați cu ierburi și usturoi, pentru o variantă mai rustică. Nu sunt doar o garnitură, ci o componentă esențială a unei mese de steakhouse autentice, completând perfect experiența culinară.",
        price: 23,
      },
      {
        name: "Cartofi pentru prajit rustic cu coaja 10/10 mm 600 gr",
        category: "Cartofi",
        description:
          "Pentru un aspect artizanal și un plus de gust și nutrienți, alegeți cartofii noștri rustici, tăiați cu tot cu coajă. Păstrarea cojii nu este doar o decizie estetică; aceasta adaugă o textură plăcută, un gust pământiu, specific cartofului proaspăt, și, cel mai important, este plină de fibre și nutrienți. Tăietura medie de 10x10mm asigură un timp de gătire optim și un echilibru perfect între exteriorul crocant și interiorul moale. Ambalajul de 600g este ideal pentru o masă în doi sau pentru a testa acest produs deosebit. Acești cartofi se potrivesc de minune cu burgeri gourmet, sandvișuri artizanale și preparate din carne la grătar, aducând o notă de autenticitate și un aspect 'home-made' farfuriei. Sunt delicioși serviți simplu, cu sare de mare, sau alături de un sos aioli cu usturoi. Congelați și gata de preparat, oferă o soluție rapidă pentru o garnitură cu personalitate. O alegere modernă și sănătoasă, care celebrează ingredientul în forma sa integrală și naturală.",
        price: 8,
      },
      {
        name: "Cartofi pentru prajit dolle dippers 600gr",
        category: "Cartofi",
        description:
          "Inovație și distracție în lumea garniturilor! Cartofii 'Dolle Dippers' sunt tăiați într-o formă unică, concavă, asemănătoare unei lingurițe, fiind special concepuți pentru 'dipping' - înmuierea în sosuri. Fiecare cartof devine un vehicul perfect pentru a transporta o cantitate generoasă de ketchup, maioneză, guacamole, sos de brânză sau orice alt sos preferați. Gata cu sosul care alunecă de pe cartofi! Această formă ingenioasă nu este doar funcțională, ci și vizual atractivă, aducând un element de noutate și amuzament pe masă, fiind în special pe placul copiilor. Pachetul de 600g este perfect pentru o seară de film, o petrecere sau o gustare distractivă. La exterior devin crocanți, iar forma lor asigură un interior pufos. Sunt o bază excelentă pentru 'loaded fries', putând fi acoperiți cu brânză topită, bacon și ceapă verde. Reinventați modul în care serviți cartofii prăjiți și transformați fiecare masă într-o experiență interactivă și delicioasă.",
        price: 7,
      },
      {
        name: "Cartofi pentru prajit dippers, forma chips 1.05kg",
        category: "Cartofi",
        description:
          "O combinație hibridă între cartofii prăjiți și chipsuri, acești 'dippers' oferă o experiență unică. Tăiați în forme ondulate și curbate, sunt proiectați, la fel ca și verii lor 'dolle', pentru a maximiza cantitatea de sos pe care o pot reține. Ambalajul mai mare, de 1.05 kg, este perfect pentru a satisface un grup mai mare de prieteni sau pentru familiile care iubesc gustările. Textura lor este una specială: marginile subțiri devin foarte crocante, aproape ca un chips, în timp ce centrul rămâne mai moale și pufos. Sunt extrem de versatili și pot fi serviți ca aperitiv, alături de o selecție de sosuri, sau ca garnitură inovatoare pentru sandvișuri, burgeri sau wrap-uri. Forma lor neregulată și aspectul artizanal aduc un plus de interes vizual oricărei farfurii. Încercați-i ca bază pentru nachos, acoperiți cu carne tocată, brânză, jalapenos și smântână. O alternativă distractivă și gustoasă la formatele clasice, care va stârni cu siguranță curiozitatea și aprecierea oaspeților.",
        price: 12,
      },
      {
        name: "Cartofi pentru prajit premier 9.6/9.6 / 2.5kg",
        category: "Cartofi",
        description:
          "Precizie și calitate pentru un rezultat clasic, dar superior. Cartofii noștri Premier, cu o tăietură exactă de 9.6x9.6mm, reprezintă standardul de aur pentru cartofii prăjiți de restaurant. Această dimensiune, puțin mai groasă decât cea clasică de 7mm, este considerată de mulți bucătari ca fiind ideală, oferind un echilibru desăvârșit între crusta aurie și miezul cremos și plin de gust. Calitatea 'Premier' garantează utilizarea celor mai bune soiuri de cartofi, care asigură o textură consistentă și o culoare perfectă după prăjire. Punga de 2.5 kg este economică și practică, potrivită pentru a satisface cerințele unei bucătării profesionale sau pentru a avea mereu la îndemână garnitura preferată a familiei. Sunt extrem de versatili, potrivindu-se cu absolut orice, de la un simplu ou ochi, la un steak elegant sau un burger suculent. Fiind precongelati, oferă avantajul rapidității și al unui rezultat constant, eliminând variațiile de calitate ale cartofilor proaspeți. Pentru cei care caută perfecțiunea în simplitate, acești cartofi sunt alegerea fără greș.",
        price: 23,
      },
      {
        name: "Cartofi pentru prajit wedges condimentati 2.5kg",
        category: "Cartofi",
        description:
          "Aromă intensă și textură rustică într-un singur produs. Cartofii noștri 'wedges' sunt tăiați în felii groase, în formă de semilună, cu tot cu coajă, și vin deja asezonați cu un amestec savuros de condimente, precum boia, usturoi, ceapă și ierburi. Acest lucru înseamnă că sunt gata de gătit, fără a necesita nicio pregătire suplimentară. Stratul de condimente nu doar că adaugă un gust delicios, dar ajută și la formarea unei cruste crocante și frumos colorate la exterior. Interiorul rămâne moale și pufos, creând un contrast de texturi foarte plăcut. Sunt garnitura ideală pentru pui la rotisor, coaste la grătar sau pur și simplu ca o gustare consistentă, servită cu un sos de smântână și usturoi. Ambalajul de 2.5 kg este perfect pentru petreceri sau pentru a avea o opțiune rapidă și plină de gust pentru cinele din timpul săptămânii. Pot fi preparați la cuptor pentru o variantă mai sănătoasă sau în baie de ulei pentru un plus de crocant. O explozie de gust și o soluție convenabilă pentru o masă memorabilă.",
        price: 28,
      },
      {
        name: 'Cartofi crinkle pentru prajit "flensted", 11/11mm 2.5kg',
        category: "Cartofi",
        description:
          "Textură, textură și iar textură! Cartofii 'crinkle', cu tăietura lor ondulată caracteristică, sunt proiectați pentru a oferi o experiență superioară. Aceste onduleuri nu sunt doar de decor; ele măresc suprafața totală a fiecărui cartof, ceea ce duce la un produs final mult mai crocant. Vârfurile onduleurilor se prăjesc rapid și devin extra-crocante, în timp ce văile rețin mai bine sarea și sosurile. Tăietura de 11x11mm este una generoasă, asigurând un interior moale și satisfăcător. Brandul Flensted este recunoscut pentru calitatea sa, garantând un produs gustos și cu o textură perfectă. Pachetul de 2.5 kg este ideal pentru familii și restaurante. Sunt extrem de populari printre copii datorită formei lor amuzante și sunt delicioși serviți alături de hot-dogi, burgeri sau ca o gustare de sine stătătoare. Dacă sunteți în căutarea celui mai crocant cartof prăjit, tăietura 'crinkle' este răspunsul. O alegere distractivă și delicioasă, care aduce un plus de personalitate oricărei mese.",
        price: 20,
      },
      {
        name: "Knorr fulgi de cartofi piure cu lapte 4kg",
        category: "Cartofi",
        description:
          "Piure de cartofi perfect, cremos și delicios, gata în câteva minute. Fulgii de cartofi de la Knorr sunt soluția profesională pentru a obține un piure de o calitate constantă, fără efortul de a curăța, fierbe și pasa cartofii. Acest produs premium conține deja lapte praf, ceea ce simplifică și mai mult procesul de preparare: trebuie doar să adăugați apă fierbinte și unt, și să amestecați. Ambalajul generos de 4 kg este extrem de economic și este destinat bucătăriilor profesionale, cantinelor, spitalelor și evenimentelor mari, unde eficiența este crucială. Rezultatul este un piure fin, fără cocoloașe, cu un gust autentic și o textură catifelată. Poate fi personalizat cu ușurință prin adăugarea de brânză, usturoi, ierburi proaspete sau alte condimente. De asemenea, poate fi folosit ca bază pentru alte preparate, precum crochete de cartofi, gnocchi sau ca topping pentru plăcinte (ex. Shepherd's Pie). Knorr este un brand de încredere, care garantează calitate și gust. O soluție inteligentă pentru a economisi timp și muncă, fără a face rabat de la calitatea unui preparat clasic și iubit de toată lumea.",
        price: 170,
      },

      // === PRODUSE LACTATE ===
      {
        name: "Branza lazur cu mucegai, aprox.2.5kg",
        category: "Lactate",
        description:
          "O capodoperă a brânzeturilor poloneze, Lazur este o brânză cu mucegai albastru, nobil, care rivalizează cu celebrele sale surate, Roquefort sau Gorgonzola. Este produsă din lapte de vacă de cea mai bună calitate, iar textura sa este cremoasă, dar sfărâmicioasă, împânzită de vinișoare albastre-verzui de mucegai Penicillium roqueforti. Gustul său este complex și memorabil: începe cu o notă sărată, distinctă, urmată de o aromă intensă, piperată și ușor picantă, specifică mucegaiului nobil, și se încheie cu un post-gust lung și satisfăcător. Rota de aproximativ 2.5 kg este ideală pentru a fi piesa centrală pe un platou de brânzeturi, pentru restaurante sau magazine de delicatese. Se asociază magnific cu vinuri dulci de desert (precum Tokaji sau Sauternes), cu nuci, pere sau smochine proaspete. Este delicioasă sfărâmată peste salate, topită într-un sos cremos pentru paste sau fripturi, sau ca ingredient surpriză pe o pizza gourmet. O brânză cu personalitate puternică, pentru cunoscători, care oferă o experiență gustativă intensă și rafinată.",
        price: 63,
      },
      {
        name: 'Cascaval cu lavanda "dilano", grasime de 50%',
        category: "Lactate",
        description:
          "O experiență senzorială unică, care îmbină tradiția olandeză în producerea brânzeturilor cu parfumul delicat și floral al lavandei. Acest cașcaval de la Dilano este o delicatesă artizanală, care surprinde și încântă. Baza este un cașcaval cremos, cu 50% grăsime, maturat pentru a dezvolta o aromă bogată și ușor dulceagă. În timpul procesului de producție, sunt adăugate flori de lavandă, care infuzează brânza cu o aromă subtilă, elegantă și relaxantă. Culoarea sa este, de asemenea, spectaculoasă, cu pete delicate de mov. Gustul este un echilibru fascinant între notele sărate și lactice ale cașcavalului și cele florale, aproape mentolate, ale lavandei. Este o prezență spectaculoasă pe orice platou de brânzeturi, atrăgând privirile și stârnind curiozitatea. Se potrivește de minune cu un vin alb sec și aromat, precum un Sauvignon Blanc, cu miere de salcâm sau cu biscuiți simpli, care să nu-i eclipseze aroma. O alegere îndrăzneață și rafinată, perfectă pentru a impresiona la o ocazie specială sau pentru a vă oferi un moment de răsfăț inedit.",
        price: 93,
      },
      {
        name: 'Cascaval pesto verde "dilano", grasime de 50%',
        category: "Lactate",
        description:
          "O explozie de arome mediteraneene într-o roată de cașcaval olandez. Această creație vibrantă de la Dilano combină gustul bogat și cremos al unui cașcaval maturat cu aromele proaspete și intense ale sosului pesto verde. În masa de brânză sunt încorporate ingrediente clasice de pesto: busuioc proaspăt, usturoi, semințe de pin și un strop de ulei de măsline. Rezultatul este un cașcaval cu o culoare verde aprins, spectaculoasă, și un gust complex și irezistibil. Fiecare mușcătură dezvăluie notele dulci și sărate ale cașcavalului, urmate de valul proaspăt și ierbos al busuiocului și de aroma subtilă a usturoiului. Este delicios de unul singur, dar versatilitatea sa este remarcabilă. Ras peste paste, oferă instant un gust de pesto. Topit într-un sandviș sau pe o pizza, adaugă o nouă dimensiune de gust. Este perfect în salate, tăiat cuburi, sau pe un platou de aperitive, alături de roșii cherry și măsline. O brânză distractivă, plină de viață și culoare, care aduce soarele Italiei în orice preparat.",
        price: 94,
      },
      {
        name: 'Cascaval cu nuca "dilano", grasime de 50%',
        category: "Lactate",
        description:
          "O combinație clasică și reconfortantă, care aduce împreună cremozitatea cașcavalului și textura crocantă și gustul dulceag al nucilor. Acest cașcaval artizanal de la Dilano este o delicatesă care celebrează armonia dintre lapte și roadele pământului. Baza este un cașcaval Gouda tânăr, cu 50% grăsime, cunoscut pentru gustul său blând și textura sa fină. În timpul producției, sunt adăugate bucăți generoase de miez de nucă, care rămân crocante și își eliberează aroma untoasă în masa de brânză. Rezultatul este un joc de texturi foarte plăcut și un gust echilibrat, unde dulceața laptelui este completată de notele amărui și lemnoase ale nucii. Este o brânză perfectă pentru platourile de toamnă, alături de mere, struguri și un pahar de vin roșu fructat. De asemenea, este delicios într-un sandviș cu pâine integrală și șuncă afumată, sau topit peste o tartă cu pere. O alegere elegantă și plină de gust, care oferă o experiență familiară, dar rafinată. Perfect pentru o gustare hrănitoare sau ca parte a unui aperitiv sofisticat.",
        price: 84,
      },
      {
        name: 'Cascaval de capra "golden roemer", grasime de 48%',
        category: "Lactate",
        description:
          "Descoperiți caracterul unic și aroma distinctă a laptelui de capră în acest cașcaval semitare de excepție. Golden Roemer este o brânză olandeză maturată, care captează esența pură a laptelui de capră, oferind o alternativă elegantă și mai complexă la brânzeturile din lapte de vacă. Culoarea sa este de un alb imaculat, iar textura este fermă, dar cremoasă. Gustul este inconfundabil: începe cu o notă proaspătă, ușor acidulată și picantă ('tangy'), specifică laptelui de capră, care evoluează apoi spre arome mai complexe, de alune și ierburi. Conținutul de 48% grăsime îi conferă o onctuozitate plăcută. Este o brânză extrem de versatilă. Se potrivește de minune pe platouri de brânzeturi, alături de miere, gem de smochine sau fructe proaspete. Rasă peste o salată cu sfeclă roșie coaptă și nuci, creează un contrast de gusturi spectaculos. Se topește frumos, fiind ideală pentru tarte, omlete sau sandvișuri calde. O alegere excelentă pentru persoanele cu intoleranță la lactoza din laptele de vacă, fiind adesea mai ușor de digerat. Un produs rafinat, cu o personalitate puternică.",
        price: 94,
      },
      {
        name: 'Cascaval de capra cu trufe "chevrano", grasime de 50%',
        category: "Lactate",
        description:
          "O delicatesă decadentă, care unește două dintre cele mai prețioase ingrediente din lumea gastronomiei: brânza de capră și trufele negre. Chevrano este o capodoperă olandeză, o brânză artizanală care promite o experiență de lux. Baza este un cașcaval cremos din lapte de capră, cu 50% grăsime, care este infuzat cu bucățele fine de trufă neagră de vară. Rezultatul este un festin pentru simțuri. Aroma este amețitoare, dominată de parfumul pământiu, intens și inconfundabil al trufelor, care se împletește armonios cu notele proaspete și acidulate ale brânzei de capră. Gustul este la fel de complex, fiecare bucată eliberând valuri de arome care persistă îndelung. Textura este fină și se topește în gură. Este o brânză care trebuie savurată în simplitatea ei, pe o felie de pâine artizanală, pentru a-i aprecia pe deplin complexitatea. De asemenea, poate transforma orice preparat simplu într-unul gourmet: rasă peste paste proaspete, ouă ochiuri sau un risotto, adaugă o notă de rafinament instantaneu. Se asociază perfect cu un pahar de Prosecco sau Champagne. O alegere opulentă, pentru momente de răsfăț suprem.",
        price: 140,
      },
      {
        name: "Cascaval edamer, grasime de 40%",
        category: "Lactate",
        description:
          "Un clasic olandez, recunoscut în întreaga lume pentru forma sa sferică și învelișul său roșu de ceară, Edamer este o brânză semitare, blândă și extrem de versatilă. Varianta noastră respectă rețeta tradițională, având un conținut de 40% grăsime, ceea ce o face o brânză mai slabă, dar plină de gust. Textura sa este suplă și elastică, iar gustul este curat, ușor sărat și cu note subtile de nuci, care devin mai pronunțate pe măsură ce brânza se maturează. Este brânza perfectă pentru sandvișuri, fiind ușor de feliat și având o aromă care nu copleșește celelalte ingrediente. Se topește foarte bine, fără a deveni uleioasă, fiind ideală pentru sandvișuri calde, burgeri, pizza sau ca topping pentru diverse preparate la cuptor. Este, de asemenea, o prezență constantă pe platourile de aperitive, tăiată cuburi, alături de fructe precum mere, pere sau pepene galben. Este o brânză 'prietenoasă', agreată de toată lumea, inclusiv de copii, datorită gustului său blând și nepretențios. Un produs de bază, de încredere și de o calitate constantă, nelipsit din frigiderul oricărei familii.",
        price: 32,
      },
      {
        name: "Cascaval gouda, grasime de 48%",
        category: "Lactate",
        description:
          "Probabil cea mai faimoasă brânză olandeză, Gouda este o celebrare a simplității și a gustului pur de lapte. Cu un conținut de 48% grăsime, cașcavalul nostru Gouda are o textură cremoasă și un gust bogat și untos. În stadiul său tânăr, este blând, dulceag, cu o textură fină care se topește în gură. Este brânza perfectă pentru a fi savurată ca atare, în sandvișuri sau pe platouri de brânzeturi. Versatilitatea sa este legendară. Se topește excepțional, fiind alegerea numărul unu pentru sosuri de brânză cremoase (precum cele pentru mac 'n' cheese), pentru sufleuri, quiche-uri sau ca topping gratinat pentru orice preparat, de la cartofi la lasagna. Gustul său prietenos îl face favorit în rândul tuturor vârstelor. Pe măsură ce se maturează, Gouda dezvoltă arome mai complexe, de caramel și nuci, și o textură mai fermă, cu cristale de lactat de calciu. Varianta noastră tânără este esența confortului și a gustului familiar, un produs de bază de o calitate superioară, care aduce o notă de căldură și satisfacție oricărei mese. Un clasic nemuritor, care nu se demodează niciodată.",
        price: 31,
      },
      {
        name: 'Cascaval negru cu lamaie "dilano", grasime de 50%',
        category: "Lactate",
        description:
          "Pregătiți-vă pentru o brânză care sfidează convenționalul și captivează simțurile. Acest cașcaval de la Dilano este o operă de artă vizuală și gustativă. Culoarea sa neagră, dramatică, este obținută prin adăugarea de cărbune vegetal activ, un ingredient natural cunoscut pentru proprietățile sale de detoxifiere. Contrastul este completat de infuzia de lămâie, care aduce o notă vibrantă și neașteptată. Baza este un cașcaval cremos, cu 50% grăsime, care echilibrează perfect aromele. Gustul este o călătorie surprinzătoare: notele bogate și lactice ale brânzei sunt tăiate de o aciditate proaspătă, citrică, lăsând un post-gust curat și revigorant. Este o piesă de spectacol pe orice platou de brânzeturi, generând conversații și curiozitate. Se potrivește de minune cu pește afumat, în special somon, sau cu fructe de mare. De asemenea, poate fi ras peste un risotto cu sparanghel sau adăugat într-o salată pentru un contrast de culoare și gust. O alegere pentru cei cu spirit avangardist, care doresc să exploreze noi teritorii ale gustului și să aducă un element de design contemporan în farfurie.",
        price: 123,
      },
      {
        name: "Cascaval procesat si afumat, grasime de 45%",
        category: "Lactate",
        description:
          "Gustul reconfortant al copilăriei, rafinat pentru palatul modern. Cașcavalul nostru procesat și afumat combină cremozitatea excepțională a brânzei topite cu aroma profundă și bogată a fumului de lemn de esență tare. Având un conținut de 45% grăsime, se topește perfect și uniform, fără a se separa, fiind ingredientul secret pentru cel mai bun sandviș cald ('grilled cheese'), burgeri suculenți sau sosuri de brânză catifelate. Procesul de afumare naturală îi conferă o aromă distinctă, rustică, care adaugă o nouă dimensiune de gust preparatelor. Este delicios și rece, tăiat felii sau cuburi, ca parte a unui platou de aperitive, alături de mezeluri și murături. Textura sa moale și gustul său accesibil îl fac un favorit al întregii familii. Spre deosebire de produsele inferioare, cașcavalul nostru folosește brânzeturi de înaltă calitate ca bază, asigurând un gust autentic și o textură superioară. O alegere versatilă și plină de gust, care aduce o notă de nostalgie și o aromă de fum irezistibilă în bucătăria dumneavoastră.",
        price: 60,
      },
      {
        name: "Ceko pizza first 2.3kg/buc, 4buc/bax",
        category: "Lactate",
        description:
          "Secretul unei pizza perfecte stă în calitatea brânzei, iar Ceko Pizza First este produsul special conceput de profesioniști pentru profesioniști. Acesta nu este un cașcaval obișnuit; este un amestec de brânzeturi (mozzarella și alte brânzeturi) optimizat pentru a oferi performanțe excepționale la copt. Principalele sale calități sunt: o capacitate de topire perfectă, formând un strat uniform și auriu; o elasticitate de neegalat, creând acele fire lungi și apetisante specifice unei pizza de calitate; și un control excelent al eliberării de grăsime, prevenind formarea unei suprafețe uleioase. Gustul este echilibrat, lăptos și suficient de sărat pentru a completa celelalte topping-uri, fără a le domina. Calupul de 2.3 kg este ușor de manevrat și de dat pe răzătoare, iar ambalarea la bax de 4 bucăți este ideală pentru pizzerii, restaurante și firme de catering, asigurând un stoc constant și un preț competitiv. Nu este potrivit doar pentru pizza; este excelent și pentru lasagna, paste la cuptor, sau orice preparat care necesită o brânză cu proprietăți superioare de topire. Alegeți soluția profesională pentru rezultate de excepție.",
        price: 62,
      },
      {
        name: "Felii cheddar 30% grasime 1kg zarpellon",
        category: "Lactate",
        description:
          "Conveniență și gust autentic în fiecare felie. Feliile de brânză Cheddar de la Zarpellon, un producător italian de renume, sunt soluția perfectă pentru a adăuga instantaneu o aromă bogată și o cremozitate perfectă preparatelor dumneavoastră. Cu un conținut redus de grăsime, de 30%, sunt o opțiune mai echilibrată, dar care nu face compromisuri la gust. Fiecare felie este ambalată individual pentru a garanta prospețimea și pentru a facilita utilizarea, eliminând risipa și efortul de a felia un calup. Sunt ingredientul indispensabil pentru burgerul american clasic, topindu-se perfect peste chifteaua fierbinte. De asemenea, sunt ideale pentru sandvișuri calde și reci, wrap-uri, omlete sau pentru a fi adăugate în quesadillas. Pachetul generos de 1 kg este perfect pentru familii numeroase sau pentru sectorul HORECA (restaurante, fast-food-uri, cafenele). Gustul este cel specific unui Cheddar tânăr: ușor acidulat, sărat și cu o aromă lăptoasă distinctă. Simplificați-vă munca în bucătărie și bucurați-vă de calitatea și gustul unui brand de încredere.",
        price: 58,
      },
      {
        name: "Grana duro 12 luni, 1kg",
        category: "Lactate",
        description:
          "O brânză tare, de tip italian, maturată cu răbdare timp de 12 luni pentru a dezvolta o complexitate aromatică deosebită. 'Grana' se referă la textura sa granulară, sfărâmicioasă, specifică brânzeturilor de acest tip, precum Parmigiano Reggiano sau Grana Padano. Procesul de maturare de un an îi permite să dezvolte un gust bogat, savuros ('umami'), cu note de nuci prăjite și un final ușor picant. Este o brânză extrem de versatilă în bucătărie. Rasă fin, este condimentul final perfect pentru aproape orice farfurie de paste, risotto sau supă, adăugând profunzime și o aromă sărată inconfundabilă. Poate fi, de asemenea, tăiată în așchii și adăugată în salate, în special în salata Caesar. Bucățele mici, rupte direct din calup, sunt un aperitiv delicios, servite alături de un pahar de vin roșu sau un Prosecco. Pachetul de 1 kg este ideal pentru pasionații de bucătărie italiană sau pentru restaurante. O brânză esențială, un simbol al gastronomiei italiene, care nu ar trebui să lipsească din nicio bucătărie care se respectă.",
        price: 79,
      },
      {
        name: "Frisca RAMA 31%",
        category: "Lactate",
        description:
          "Partenerul de încredere al oricărui cofetar, fie el amator sau profesionist. Frișca lichidă de la RAMA, cu un conținut de 31% grăsime, este special formulată pentru a oferi performanțe excepționale. Acest procent de grăsime este considerat ideal pentru a obține o frișcă bătută stabilă, voluminoasă și cu o textură fermă, care își păstrează forma, fiind perfectă pentru a decora torturi, prăjituri și deserturi. Pe lângă utilizarea în cofetărie, este extrem de versatilă și în bucătăria 'sărată'. Poate fi folosită pentru a lega și a îmbogăți sosuri pentru paste, supe cremă, tocănițe sau preparate gratinate, adăugând o textură catifelată și un gust bogat. Este un ingredient esențial în quiche-uri, sufleuri și tarte. Calitatea RAMA asigură un produs constant, care nu se 'taie' la fierbere și care oferă rezultate de încredere de fiecare dată. Stocarea în format UHT (Ultra High Temperature) îi conferă un termen de valabilitate lung, fiind un produs de bază pe care este bine să-l aveți mereu în cămară. O alegere sigură pentru rezultate desăvârșite, de la cele mai simple la cele mai complexe preparate.",
        price: 25,
      },

      // === LEGUME ===
      {
        name: "Amestec de legume pentru ciorba de vacuta, 2.5kg",
        category: "Legume",
        description:
          "Baza perfectă pentru o ciorbă de văcuță tradițională, gustoasă și plină de nutrienți, gata în cel mai scurt timp. Amestecul nostru de legume congelate este special conceput pentru a respecta rețeta clasică, economisindu-vă timp prețios petrecut cu spălatul, curățatul și tocatul legumelor. Punga generoasă de 2.5 kg conține un mix echilibrat de legume esențiale: morcovi dulci, păstârnac aromat, țelină, ardei gras colorat și ceapă. Toate legumele sunt tăiate cuburi, la dimensiunea perfectă pentru ciorbă. Procesul de congelare rapidă (IQF) imediat după recoltare asigură păstrarea maximă a vitaminelor, mineralelor și a gustului proaspăt. Nu este nevoie să decongelați; pur și simplu adăugați amestecul direct în oala în care fierbe carnea și bucurați-vă de o ciorbă plină de culoare și savoare. Este o soluție ideală pentru restaurante, cantine, dar și pentru familiile ocupate, care doresc să mănânce sănătos și gustos, fără a petrece ore în bucătărie. Calitate constantă, conveniență maximă și gust autentic, tot anul împrejur.",
        price: 25,
      },
      {
        name: "Amestec royal mix (conopida, broccoli, morcovi) , 2.5kg",
        category: "Legume",
        description:
          "O combinație clasică și elegantă de legume, 'Amestecul Regal' este o garnitură versatilă, colorată și plină de beneficii pentru sănătate. Acest mix reunește trei dintre cele mai populare legume: buchețele de conopidă, buchețele de broccoli și rondele de morcovi. Contrastul de culori (alb, verde, portocaliu) aduce un plus de vitalitate oricărei farfurii, iar combinația de gusturi și texturi este perfect echilibrată. Legumele sunt congelate rapid pentru a-și păstra intacte proprietățile nutritive, în special vitamina C din broccoli și betacarotenul din morcovi. Punga de 2.5 kg este o opțiune economică și practică. Amestecul poate fi preparat în nenumărate moduri: fiert la aburi și servit simplu, cu un strop de unt; tras la tigaie cu usturoi și ulei de măsline; copt la cuptor până se caramelizează ușor; sau adăugat în supe, tocănițe și preparate asiatice de tip stir-fry. Este o garnitură rapidă și sănătoasă pentru orice tip de carne sau pește și o bază excelentă pentru salate calde.",
        price: 38,
      },
      {
        name: "Amestec 4 anotimpuri gradena 2.5kg",
        category: "Legume",
        description:
          "Aduceți diversitatea și bogăția unei grădini de vară în farfurie, indiferent de sezon. Amestecul '4 Anotimpuri' de la Gradena este o selecție vibrantă de legume, care oferă o varietate de gusturi, texturi și culori. Compoziția poate varia, dar de obicei include mazăre dulce, porumb auriu, morcovi tăiați cubulețe și fasole verde fragedă. Este un mix extrem de versatil, care poate fi folosit ca o garnitură simplă, fiartă sau la aburi, sau ca bază pentru o multitudine de preparate. Este perfect pentru a îmbogăți o salată de orez sau o salată boeuf, pentru a adăuga culoare și nutrienți unei tocănițe de pui, sau pentru a crea o supă de legume rapidă și gustoasă. De asemenea, este excelent în omlete, quiche-uri sau ca umplutură pentru plăcinte sărate. Punga de 2.5 kg este o soluție convenabilă pentru a avea mereu la îndemână o varietate de legume, fără riscul ca acestea să se strice. Congelarea rapidă păstrează prospețimea și valoarea nutritivă a fiecărei componente. O soluție simplă și eficientă pentru a asigura un aport zilnic de legume în dieta familiei.",
        price: 28,
      },
      {
        name: "Amestec mexican din 5 tipuri de legume, 2.5kg",
        category: "Legume",
        description:
          "Călătoriți cu gustul în însorita Mexic cu acest amestec vibrant și plin de viață. Special conceput pentru a recrea aromele bucătăriei mexicane, acest mix conține de obicei o combinație de porumb dulce, mazăre, morcovi, ardei gras (adesea roșu și verde pentru contrast) și fasole verde sau roșie. Este baza perfectă pentru nenumărate preparate Tex-Mex. Adăugați-l în umplutura pentru tacos, burritos sau quesadillas, alături de carne tocată și condimente. Este excelent într-o salată mexicană rece, cu fasole neagră, ceapă roșie și un dressing de lime și coriandru. De asemenea, poate fi amestecat cu orez pentru a crea o garnitură colorată și gustoasă, sau adăugat într-o supă de pui cu tortilla. Punga de 2.5 kg este ideală pentru restaurantele cu specific mexican sau pentru a organiza o petrecere tematică. Congelarea rapidă păstrează dulceața porumbului și textura crocantă a ardeiului. O modalitate rapidă și autentică de a adăuga culoare, textură și o notă festivă preparatelor dumneavoastră, inspirând creativitate culinară.",
        price: 31,
      },
      {
        name: "Broccoli, de marime medie, 2.5kg",
        category: "Legume",
        description:
          "Un superstar al nutriției, broccoli este o legumă versatilă și delicioasă, nelipsită dintr-o dietă sănătoasă. Produsul nostru constă în buchețele de broccoli de mărime medie, recoltate la maturitate optimă și congelate rapid pentru a bloca în interior toți nutrienții valoroși, în special vitamina C, vitamina K și fibrele. Ambalajul de 2.5 kg este o modalitate economică de a vă asigura că aveți întotdeauna la îndemână această legumă minunată. Buchețelele sunt deja tăiate și spălate, gata de a fi folosite. Broccoli este delicios preparat simplu, la aburi, pentru a-i păstra culoarea vibrantă și textura crocantă. Este, de asemenea, excelent în supe cremă, gratinat la cuptor cu brânză, adăugat în paste, quiche-uri sau în preparate asiatice de tip stir-fry, unde absoarbe minunat aromele sosurilor. Tulpina, adesea aruncată, este la fel de gustoasă și nutritivă și poate fi tocată și adăugată în supe sau tocănițe. O legumă esențială, convenabilă și plină de beneficii, care nu ar trebui să lipsească din congelatorul nimănui.",
        price: 34,
      },
      {
        name: "Conopida de marime medie, 2.5kg",
        category: "Legume",
        description:
          "Redescoperiți versatilitatea și gustul delicat al conopidei cu buchețelele noastre congelate, de mărime medie. Adesea subestimată, conopida este o legumă cameleonică, capabilă să se transforme într-o multitudine de preparate delicioase și sănătoase. Punga noastră de 2.5 kg vă oferă buchețele gata tăiate și curățate, economisind timp și efort. Congelarea rapidă asigură păstrarea texturii și a nutrienților. Conopida este o bază fantastică pentru supe cremă catifelate. Gratinată la cuptor cu sos bechamel și brânză, devine un preparat reconfortant și decadent. Poate fi, de asemenea, o alternativă sănătoasă la carbohidrați: mărunțită fin, poate înlocui orezul ('cauliflower rice'), iar pasată, poate deveni un piure cremos. Este delicioasă și coaptă întreagă la cuptor, asezonată cu mirodenii, sau adăugată în curry-uri indiene. Bogată în fibre și vitamina C, este o alegere excelentă pentru o dietă echilibrată. Un ingredient de bază, plin de potențial, care așteaptă să fie explorat în rețete creative.",
        price: 32,
      },
      {
        name: "Fasole galbena taiata 2.5kg",
        category: "Legume",
        description:
          "O prezență familiară și reconfortantă în bucătăria românească, fasolea galbenă păstăi este apreciată pentru gustul său dulceag și textura sa fragedă. Produsul nostru vă oferă păstăi de fasole galbenă de calitate superioară, deja curățate de capete și tăiate la o dimensiune convenabilă, gata pentru a fi gătite. Congelate în plin sezon, își păstrează perfect culoarea, gustul și o mare parte din nutrienți. Punga generoasă de 2.5 kg este ideală pentru a avea mereu la îndemână ingredientul principal pentru o mâncare de fasole cu usturoi, o ciorbă proaspătă sau o salată caldă. Se gătește rapid, fie prin fierbere, fie la aburi. Este delicioasă trasă la tigaie cu bacon și ceapă, sau ca parte a unei tocănițe de legume. Fasolea galbenă este o sursă bună de fibre, vitamina K și vitamina C. O legumă clasică, simplă și gustoasă, care aduce aminte de mesele copilăriei și oferă o soluție rapidă și hrănitoare pentru orice zi a săptămânii.",
        price: 34,
      },
      {
        name: "Fasole verde taiata 2.5kg",
        category: "Legume",
        description:
          "O legumă clasică, versatilă și plină de prospețime, fasolea verde este un ingredient esențial în bucătăriile din întreaga lume. Vă oferim păstăi de fasole verde, fragede și subțiri, atent selecționate, curățate și tăiate pentru conveniență maximă. Procesul de congelare rapidă blochează prospețimea și culoarea verde vibrantă, asigurându-vă că beneficiați de un produs de înaltă calitate pe tot parcursul anului. Punga de 2.5 kg este perfectă pentru a experimenta cu diverse rețete. Fasolea verde este delicioasă preparată simplu, la aburi, și servită cu un strop de lămâie. Este un ingredient cheie în salata Niçoise, alături de ton și ouă. Trasă la tigaie cu fulgi de migdale și unt, devine o garnitură elegantă. De asemenea, este excelentă în tocănițe, supe sau în preparate asiatice, gătite rapid la wok. Este o sursă importantă de fibre, vitamine și minerale, fiind o alegere excelentă pentru o alimentație sănătoasă. Un ingredient de bază, care adaugă textură, culoare și valoare nutritivă oricărei mese.",
        price: 25,
      },
      {
        name: "Hribi de padure cuburi, 1kg",
        category: "Legume",
        description:
          "Aduceți aroma intensă și bogată a pădurii direct în bucătăria dumneavoastră cu hribii noștri de pădure, tăiați cuburi. Cunoscuți în Italia ca 'funghi porcini', hribii sunt considerați regii ciupercilor sălbatice, apreciați pentru gustul lor complex, pământiu, cu note de nuci, și pentru textura lor cărnoasă și fermă. Produsul nostru este congelat rapid după recoltare pentru a păstra intactă aroma lor prețioasă. Faptul că sunt deja tăiați cuburi vă economisește timp și vă permite să îi adăugați direct în preparate. Sunt ingredientul perfect pentru a transforma un risotto simplu într-o capodoperă culinară. Adăugați-i într-un sos cremos pentru paste, într-o tocăniță de vită gătită lent, sau sotați-i cu usturoi și pătrunjel pentru a-i servi ca garnitură pentru o friptură. De asemenea, sunt excepționali în omlete, supe cremă sau ca umplutură pentru tarte. Pachetul de 1 kg vă oferă o cantitate generoasă pentru a explora multiple rețete. O delicatesă gourmet, care adaugă o notă de lux și o profunzime de neegalat oricărui preparat.",
        price: 50,
      },
      {
        name: "Mazare boabe, 2.5kg",
        category: "Legume",
        description:
          "Mici bijuterii verzi, pline de dulceață și prospețime, boabele de mazăre sunt o legumă iubită de toate generațiile. Mazărea noastră este recoltată la momentul optim, când boabele sunt fragede și pline de zahăr natural, și este congelată în câteva ore pentru a păstra perfect aceste calități. Ambalajul de 2.5 kg este soluția economică pentru a avea mereu la îndemână această legumă versatilă. Este incredibil de ușor de gătit și poate fi adăugată în nenumărate preparate. Este ingredientul principal într-o mâncare de mazăre clasică, cu sos de roșii și mărar. Adăugată în supe, tocănițe sau orez, aduce un plus de culoare și dulceață. Este, de asemenea, delicioasă într-un piure de mazăre proaspăt, ca garnitură pentru pește sau carne, sau într-o salată de paste. Fiind o sursă excelentă de proteine vegetale, fibre și vitamine, mazărea este o alegere nutritivă și gustoasă. Un ingredient de bază, simplu și reconfortant, care aduce o pată de culoare și un zâmbet oricărei mese.",
        price: 27,
      },
      {
        name: "Morcovi puiuti (baby), 2.5kg",
        category: "Legume",
        description:
          "Mai dulci, mai fragezi și mai atrăgători decât morcovii maturi, morcovii 'baby' sunt o delicatesă care încântă atât vizual, cât și gustativ. Aceștia sunt recoltați devreme, când sunt mici și plini de arome concentrate. Produsul nostru congelat vă oferă acești morcovi în toată splendoarea lor, gata curățați și gata de a fi gătiți. Punga de 2.5 kg este perfectă pentru a-i folosi ca o garnitură elegantă și rafinată. Sunt excepționali glazurați la tigaie, cu unt și miere sau sirop de arțar, până devin fragezi și lucioși. Copți la cuptor cu ierburi aromatice, își intensifică și mai mult dulceața naturală. Pot fi, de asemenea, adăugați întregi în tocănițe sau fripturi la cuptor, pentru un aspect vizual deosebit. Fierți la aburi, sunt o gustare sănătoasă și delicioasă pentru copii. Congelarea rapidă le păstrează textura crocantă și culoarea portocalie vibrantă. O alegere gourmet, care adaugă o notă de eleganță și un gust superior preparatelor dumneavoastră.",
        price: 25,
      },
      {
        name: "Spanac tocat, 2.5kg",
        category: "Legume",
        description:
          "O sursă concentrată de nutrienți, acum într-o formă extrem de convenabilă. Spanacul nostru este recoltat, spălat, oprit (blanșat) și apoi tocat și congelat, păstrând astfel o mare parte din vitaminele și mineralele sale valoroase, în special fier, vitamina A și vitamina K. Punga mare, de 2.5 kg, de spanac tocat este un ajutor de nădejde în orice bucătărie. Elimină complet procesul laborios de a spăla și curăța cantități mari de spanac proaspăt. Este gata de a fi folosit într-o multitudine de rețete. Este perfect pentru a crea o mâncare de spanac cu usturoi, pentru a fi amestecat cu brânză și ou pentru umpluturi de plăcinte, tarte sau paste (cannelloni, lasagna). Adăugat în supe, smoothie-uri sau omlete, crește valoarea nutritivă a acestora fără a adăuga multe calorii. Este, de asemenea, o bază excelentă pentru sosuri cremoase pentru paste sau ca garnitură pentru pește. O modalitate simplă, rapidă și economică de a integra această legumă puternică în dieta zilnică.",
        price: 20,
      },
      {
        name: "Vinete coapte intregi, 2.5kg",
        category: "Legume",
        description:
          "Bucurați-vă de gustul autentic, afumat, al vinetelor coapte, fără fumul și bătaia de cap a coacerii pe grătar sau pe plită. Vinetele noastre sunt coapte cu grijă, pe foc, pentru a capta acea aromă inconfundabilă, apoi sunt congelate întregi pentru a păstra intactă pulpa și gustul. Acest produs vă economisește ore de muncă și vă permite să preparați o salată de vinete perfectă în orice moment al anului. Pur și simplu decongelați vinetele, scurgeți-le bine de zeamă, îndepărtați coaja (care se va desprinde foarte ușor) și tocați miezul. Punga de 2.5 kg este ideală pentru a prepara o cantitate mare de salată pentru o petrecere sau pentru a avea un stoc la îndemână. Pe lângă clasica salată de vinete, miezul copt poate fi folosit pentru a crea alte preparate delicioase, precum baba ghanoush (salată de vinete libaneză, cu pastă de susan), musaca sau ca ingredient într-un sos de paste rustic. Un produs esențial pentru iubitorii bucătăriei românești și balcanice, care aduce gustul verii în orice sezon.",
        price: 31,
      },
      {
        name: "Vinete coapte si tocate, 400gr",
        category: "Legume",
        description:
          "Conveniență la superlativ! Pentru acele momente când pofta de salată de vinete este mare, dar timpul este scurt, produsul nostru de vinete coapte și gata tocate este soluția salvatoare. Am făcut noi toată treaba grea: am copt vinetele pe foc pentru a obține gustul perfect afumat, le-am curățat de coajă și le-am tocat, gata pentru a fi asezonate. Tot ce trebuie să faceți este să decongelați conținutul, să îl scurgeți bine și să adăugați ceapă tocată, ulei și sare, după gust. În câteva minute, aveți o salată de vinete proaspătă și delicioasă, cu gust autentic de casă. Ambalajul de 400g este porția perfectă pentru o gustare sau un aperitiv pentru 2-4 persoane. Este un produs care nu ar trebui să lipsească din congelatorul celor ocupați, dar care nu vor să renunțe la gustul mâncărurilor tradiționale. De asemenea, poate fi folosit ca bază rapidă pentru alte salate, precum zacuscă sau baba ghanoush. Simplitate, rapiditate și gust autentic, într-un singur pachet.",
        price: 8,
      },

      // === CONSERVE ===
      {
        name: "Ardei capia copt in conserva de tabla de 4250ml, net 2.5kg",
        category: "Conserve",
        description:
          "Gustul dulce și afumat al ardeilor capia copți, disponibil oricând, indiferent de sezon. Ardeii noștri sunt atent selecționați, copți pe plită pentru a le intensifica dulceața naturală și a le conferi o aromă subtilă de fum, apoi sunt curățați de coajă și semințe și conservați într-o saramură ușoară pentru a le păstra textura și gustul. Conserva generoasă, cu o cantitate netă de 2.5 kg, este ideală pentru restaurante, pizzerii, firme de catering sau pentru a pregăti salate pentru evenimente mari. Sunt gata de folosit direct din conservă. Sunt delicioși serviți ca salată, asezonați cu oțet, usturoi și ulei. Pot fi folosiți ca topping pe pizza, în sandvișuri, sau ca parte a unui platou de antipasti. De asemenea, pot fi transformați într-un sos cremos pentru paste sau carne, sau ca bază pentru zacuscă. Un ingredient versatil și convenabil, care aduce o pată de culoare și o explozie de gust dulceag oricărui preparat. O soluție eficientă pentru a avea la îndemână gustul autentic al verii.",
        price: 52,
      },
      {
        name: "Castraveti medii murati in conserva 9600gr, net 5600gr",
        category: "Conserve",
        description:
          "Un element indispensabil în bucătăria românească și nu numai, castraveții murați sunt garnitura perfectă, ingredientul secret în salate sau o gustare răcoritoare. Conserva noastră de dimensiuni mari, cu o greutate netă de 5.6 kg, este destinată sectorului HORECA, asigurând un stoc generos de castraveți de o calitate constantă. Castraveții sunt de mărime medie, ideali pentru a fi serviți întregi sau feliați. Sunt murați într-o saramură echilibrată, cu oțet, sare, și arome naturale de mărar și usturoi, care le conferă un gust acrișor, proaspăt și o textură crocantă. Sunt partenerul perfect pentru fripturi, șnițele, burgeri și orice preparat mai gras, tăind prin bogăția acestora și echilibrând gustul. Tocați mărunt, sunt esențiali în salata boeuf sau în sosurile tartar. Calitatea conservării asigură că fiecare castravete își păstrează textura fermă și crocantă. O soluție economică și practică pentru a avea la dispoziție, pe tot parcursul anului, gustul autentic al murăturilor de casă.",
        price: 59,
      },
      {
        name: "Ciuperci taiate, conservate 5kg, 3kg net",
        category: "Conserve",
        description:
          "Conveniență și versatilitate în bucătăria profesională. Ciupercile tăiate și conservate sunt un ingredient de bază care economisește timp și efort, fiind gata de a fi adăugate într-o multitudine de preparate. Conserva noastră mare, cu o greutate netă de 3 kg de ciuperci, este perfectă pentru pizzerii, restaurante și cantine. Ciupercile sunt feliate uniform și conservate într-o saramură ușoară care le păstrează textura și gustul delicat. Sunt ingredientul clasic pentru pizza, dar utilizările lor sunt nenumărate: pot fi adăugate în sosuri pentru paste, tocănițe, supe, omlete, quiche-uri sau ca umplutură pentru plăcinte. Scurse bine, pot fi sotate cu ceapă și usturoi pentru a crea o garnitură rapidă și gustoasă. Având la dispoziție acest produs, eliminați necesitatea de a curăța și felia ciuperci proaspete, optimizând fluxul de lucru în bucătărie. Un ingredient economic, cu termen de valabilitate lung, care vă asigură că aveți mereu la îndemână o opțiune rapidă pentru a adăuga consistență și aromă mâncărurilor.",
        price: 78,
      },
      {
        name: "Gogosari in otet 300g, 720ml",
        category: "Conserve",
        description:
          "O murătură clasică românească, apreciată pentru gustul său dulce-acrișor și textura sa crocantă. Gogoșarii noștri sunt atent selecționați, curățați și conservați în oțet, după o rețetă tradițională care echilibrează perfect aciditatea oțetului cu dulceața naturală a gogoșarului. Borcanul de 720ml, cu un conținut net de 300g, este dimensiunea ideală pentru consumul casnic. Sunt o garnitură excelentă pentru orice friptură de porc sau pui, pentru tocănițe sau pentru preparate din cartofi. Culoarea lor roșie vibrantă adaugă un plus de atractivitate vizuală oricărei farfurii. Tocați mărunt, pot fi adăugați în salate, în special în salata de boeuf, pentru a adăuga o notă de aciditate și culoare. Sunt, de asemenea, delicioși serviți ca atare, ca parte a unui platou cu aperitive tradiționale. Un produs nelipsit din cămara oricărui iubitor de gusturi autentice, care aduce aminte de borcanele pregătite cu grijă de bunici.",
        price: 8,
      },
      {
        name: "Knorr pasta de tomate, conserva de tabla, 0.8kg",
        category: "Conserve",
        description:
          "Concentrat de soare și aromă de roșii coapte, pasta de tomate de la Knorr este un ingredient fundamental în bucătărie, capabil să adauge profunzime, culoare și un gust bogat nenumăratelor preparate. Produsă din roșii de cea mai bună calitate, recoltate la maturitate deplină și procesate pentru a obține o pastă densă și vibrantă, aceasta este esența gustului de roșie. Conserva de 0.8 kg este un format practic, ideal pentru utilizare frecventă în bucătăriile casnice sau în cele profesionale. Este baza perfectă pentru sosuri de paste, ciorbe, tocănițe, gulaș sau pentru a îmbogăți orice mâncare pe bază de carne sau legume. O singură lingură poate transforma un preparat, adăugându-i o notă 'umami' și o aciditate plăcută care echilibrează gusturile. Calitatea Knorr garantează un produs constant, fără aditivi inutili, doar gust pur de roșie. Un ingredient indispensabil, care nu ar trebui să lipsească din nicio cămară, fiind un secret al bucătarilor pentru a obține mâncăruri cu adevărat savuroase.",
        price: 33,
      },
      {
        name: "Masline negre colosal intregi cu sambure 2.5kg",
        category: "Conserve",
        description:
          "O declarație de opulență și gust mediteranean. Măslinele noastre negre, de calibru 'Colosal', sunt o adevărată delicatesă, apreciate pentru dimensiunea lor impresionantă, pulpa cărnoasă și gustul bogat și fructat. Păstrarea sâmburelui este o decizie intenționată; acesta ajută la menținerea formei măslinei și, cel mai important, contribuie la o aromă mai intensă și mai complexă a pulpei. Sunt conservate într-o saramură echilibrată care le păstrează textura fermă și le completează gustul natural. Cutia de 2.5 kg este ideală pentru baruri, restaurante sau pentru a pregăti platouri de aperitive pentru evenimente. Sunt perfecte servite ca atare, stropite cu ulei de măsline și ierburi aromatice, sau ca parte a unei salate grecești autentice. De asemenea, pot fi adăugate în tocănițe gătite lent sau în preparate la cuptor cu pui și lămâie. Prezența lor pe un platou de antipasti, alături de brânzeturi și mezeluri, adaugă o notă de rafinament. O alegere premium pentru cunoscătorii care apreciază calitatea și gustul autentic.",
        price: 51,
      },
      {
        name: "Masline negre feliate, 2kg",
        category: "Conserve",
        description:
          "Conveniență și gust mediteranean la îndemâna oricui. Măslinele noastre negre, gata feliate, sunt soluția perfectă pentru a adăuga rapid și ușor o notă de aromă și culoare preparatelor dumneavoastră. Feliate uniform, economisesc timp prețios în bucătărie și sunt gata de a fi presărate peste pizza, adăugate în salate, omlete sau în sosuri pentru paste, precum clasicul sos 'puttanesca'. Cutia de 2 kg este un format economic, destinat în special pizzeriilor și restaurantelor, unde consumul este ridicat. Gustul lor este blând și fructat, fiind un ingredient versatil care completează o gamă largă de arome fără a le domina. Sunt, de asemenea, excelente în sandvișuri, wrap-uri sau ca parte a unui aperitiv, amestecate cu brânză feta și roșii uscate. Un ingredient de bază în bucătăria mediteraneană, care nu ar trebui să lipsească din nicio cămară bine aprovizionată. O modalitate simplă și eficientă de a aduce un strop de soare în farfurie.",
        price: 40,
      },
      {
        name: "Masline verzi fara samburi, 2kg",
        category: "Conserve",
        description:
          "Proaspete, crocante și cu o aromă vibrantă, măslinele verzi fără sâmburi sunt un aperitiv clasic și un ingredient plin de personalitate. Recoltate înainte de a se coace complet, măslinele verzi au o textură mai fermă și un gust mai proaspăt, ușor amărui și sărat, comparativ cu cele negre. Faptul că sunt deja curățate de sâmburi le face extrem de convenabile și gata de a fi folosite. Cutia de 2 kg este ideală pentru baruri, unde sunt servite ca aperitiv alături de băuturi, sau pentru restaurante. Sunt delicioase umplute cu pastă de ardei, usturoi sau migdale. Tocate, pot fi adăugate în salate, sosuri sau tapenade. Sunt un ingredient cheie în multe preparate mediteraneene, adăugând o notă de aciditate și o textură plăcută. Încercați-le într-o tocăniță de pui cu lămâie și măsline sau într-o salată de cartofi pentru un plus de gust. Un ingredient versatil și revigorant, care aduce o notă de prospețime și o aromă distinctă preparatelor dumneavoastră.",
        price: 42,
      },
      {
        name: "Sfecla rosie felii conservata cutie 4250gr, net 2550 gr",
        category: "Conserve",
        description:
          "O legumă plină de nutrienți, cu un gust dulce, pământiu, acum disponibilă într-o formă convenabilă și gata de utilizat. Sfecla noastră roșie este fiartă, curățată de coajă și feliată, apoi conservată într-o saramură ușor acrișoară care îi echilibrează dulceața naturală și îi păstrează culoarea vibrantă. Conserva de dimensiuni mari, cu o greutate netă de 2.55 kg, este o soluție excelentă pentru restaurante, cantine și bufete de salate. Feliile sunt gata de a fi adăugate în salate, cea mai faimoasă fiind combinația cu hrean. De asemenea, pot fi folosite pentru a prepara borșul ucrainean, diverse supe cremă sau chiar smoothie-uri. Culoarea lor intensă adaugă un impact vizual deosebit oricărei farfurii. Sfecla roșie este recunoscută pentru beneficiile sale pentru sănătate, fiind bogată în antioxidanți, vitamine și minerale. Acest produs vă oferă toate avantajele sfeclei, fără a necesita procesul îndelungat de fierbere sau coacere și fără a vă păta mâinile. O opțiune sănătoasă, gustoasă și eficientă.",
        price: 34,
      },

      // === CONDIMENTE, SOSURI ȘI ULEIURI ===
      {
        name: "Maioneza gold, grasime 50%/ 5kg",
        category: "Condimente",
        description:
          "Un sos clasic, indispensabil în orice bucătărie profesională, maioneza noastră Gold este etalonul calității și al gustului. Cu un conținut de 50% grăsime, are o textură bogată, cremoasă și stabilă, perfectă pentru o gamă largă de aplicații. Este baza ideală pentru salata de boeuf, salata de vinete sau alte salate pe bază de maioneză, legând ingredientele într-un mod armonios. De asemenea, poate fi folosită pentru a crea o multitudine de sosuri derivate: aioli (cu usturoi), remoulade (cu murături și ierburi) sau sos tartar. Găleata de 5 kg este formatul economic destinat restaurantelor, firmelor de catering și fast-food-urilor, asigurând un stoc suficient pentru un flux constant de clienți. Gustul său este echilibrat, cu o aciditate plăcută care completează preparatele fără a le domina. Calitatea 'Gold' garantează o emulsie stabilă, care nu se va separa, și o consistență perfectă de fiecare dată. Un ingredient de bază, de încredere, care stă la temelia multor preparate iubite.",
        price: 76,
      },
      {
        name: "Ketchup gold 5kg",
        category: "Condimente",
        description:
          "Partenerul perfect pentru cartofii prăjiți, burgeri și nenumărate alte preparate, ketchup-ul nostru Gold este un produs premium, cu un gust bogat și echilibrat. Spre deosebire de produsele inferioare, acesta este preparat cu o concentrație mare de roșii de înaltă calitate, ceea ce îi conferă o culoare vibrantă și o aromă intensă, naturală. Gustul său este un amestec perfect de dulce, acrișor și sărat, cu note subtile de condimente, care completează și intensifică savoarea mâncărurilor. Recipientul de 5 kg este special conceput pentru sectorul HORECA, fiind practic și igienic. Nu este doar un simplu sos; poate fi folosit și ca ingredient în rețete, ca bază pentru sosuri barbecue, în marinade pentru carne sau ca glazură pentru chiftele la cuptor. Textura sa este fină și consistentă, ideală pentru a adera la preparate. Oferiți clienților dumneavoastră un ketchup de calitate superioară, care va face diferența și le va completa experiența culinară.",
        price: 67,
      },
      {
        name: "Boia dulce 100 S, 1kg",
        category: "Condimente",
        description:
          "Culoare vibrantă și aromă dulce, subtilă – boiaua dulce este unul dintre cele mai versatile și mai folosite condimente din lume. Produsul nostru, de calitate superioară (100 ASTA - un indicator al intensității culorii), este obținut din ardei roșii (Capsicum annuum) atent selecționați, uscați și măcinați fin. Punga de 1 kg este ideală pentru bucătăriile profesionale sau pentru pasionații de gătit care folosesc frecvent acest condiment. Este un ingredient esențial în bucătăria maghiară, fiind baza pentru gulaș și paprikaș, dar este la fel de importantă și în bucătăria spaniolă, portugheză sau balcanică. Adaugă o culoare roșie superbă și o aromă caldă, dulceagă, tocănițelor, supelor, marinadelor pentru carne (în special pui și porc) și preparatelor din cartofi. Poate fi presărată peste ouă ochiuri, brânzeturi sau hummus pentru un plus de culoare și gust. Pentru a-i elibera pe deplin aroma, se recomandă încălzirea ușoară în ulei la începutul procesului de gătire, având grijă să nu se ardă. Un condiment de bază, indispensabil.",
        price: 35,
      },
      {
        name: "Busuioc maruntit, 1kg",
        category: "Condimente",
        description:
          "Aroma proaspătă și piperată a Mediteranei, conservată pentru a fi disponibilă pe tot parcursul anului. Busuiocul este regele ierburilor aromatice italiene, iar varianta uscată și mărunțită este o alternativă convenabilă și de lungă durată la cel proaspăt. Punga de 1 kg este un format economic pentru restaurante, pizzerii și pentru toți cei care iubesc bucătăria italiană. Este un partener indispensabil pentru roșii, fiind esențial în sosurile pentru paste (marinara, arrabbiata), pe pizza sau în supe de roșii. Aroma sa se intensifică prin gătire, așa că este ideal să fie adăugat în timpul procesului de preparare a tocănițelor, sosurilor sau supelor. De asemenea, poate fi folosit pentru a infuza uleiuri sau oțeturi, sau ca parte a unui amestec de ierburi pentru a condimenta carnea de pui, peștele sau legumele la cuptor. Gustul său este dulceag, cu note de anason și cuișoare. Un ingredient de bază, care aduce instantaneu o notă de prospețime și o aromă inconfundabilă preparatelor dumneavoastră.",
        price: 30,
      },
      {
        name: "Condimente gustos de legume, 1kg",
        category: "Condimente",
        description:
          "Secretul unui gust bogat și complex, într-un singur recipient. Amestecul nostru de condimente 'Gustos de Legume' este o bază de gust universală, cunoscută și sub denumirea de 'vegeta', care intensifică și completează aroma oricărui preparat. Este o combinație echilibrată de sare și o varietate de legume deshidratate și mărunțite fin, precum morcov, păstârnac, ceapă, țelină și pătrunjel. Acest mix adaugă o notă savuroasă ('umami') supelor, ciorbelor, tocănițelor, sosurilor și preparatelor din orez sau cartofi. Este o modalitate rapidă de a adăuga profunzime gustului, fără a fi nevoie să tocați o varietate de legume proaspete. Punga de 1 kg este ideală pentru utilizare frecventă, fiind un ajutor de nădejde în orice bucătărie. Poate fi folosit și pentru a asezona carnea înainte de a o găti sau presărat peste legumele la cuptor. Un produs versatil și economic, care simplifică procesul de gătire și garantează un rezultat final plin de gust de fiecare dată. Este 'magia' din borcan care face mâncarea mai bună.",
        price: 30,
      },
      {
        name: "Desert topping de cacao carte d'or 1kg",
        category: "Condimente",
        description:
          "Atingerea finală de decadență pentru deserturile dumneavoastră. Topping-ul de cacao de la Carte D'Or, un brand cu renume în lumea deserturilor, este un sos de ciocolată bogat și catifelat, gata de a fi folosit. Sticla de 1 kg, cu un design practic pentru dozare, este perfectă pentru cofetării, cafenele, gelaterii sau pentru pasionații de deserturi de acasă. Este partenerul ideal pentru înghețată, clătite, vafe, budinci sau orice prăjitură. Poate fi folosit pentru a crea modele atractive pe farfurii ('plating'), adăugând o notă de eleganță profesională deserturilor. De asemenea, este delicios amestecat în lapte pentru a crea un milkshake de ciocolată, sau adăugat în cafea pentru a prepara un 'mocha' savuros. Gustul său este intens, de cacao de calitate, cu un echilibru perfect între dulce și amărui. Textura sa fină și lucioasă îl face extrem de apetisant. Un produs premium, care transformă un desert simplu într-o experiență de neuitat și aduce bucurie iubitorilor de ciocolată de toate vârstele.",
        price: 57,
      },
      {
        name: "Grasime vegetala pentru gatit gtan cucina, 1L",
        category: "Condimente",
        description:
          "O alternativă modernă și versatilă la smântâna lichidă tradițională. Gran Cucina este un preparat pe bază de grăsimi vegetale, special conceput pentru a oferi performanțe excelente în bucătărie. Cu o textură cremoasă și un gust neutru, este incredibil de versatil, putând fi folosit atât în preparate dulci, cât și în cele sărate. Unul dintre marile sale avantaje este stabilitatea la temperaturi ridicate; nu se 'brânzește' sau 'taie' atunci când este fiert, fiind ideal pentru a lega și a îmbogăți sosuri, supe cremă sau tocănițe. De asemenea, poate fi bătut pentru a obține o frișcă vegetală fermă și stabilă, perfectă pentru deserturi. Fiind un produs vegetal, este potrivit pentru persoanele cu intoleranță la lactoză. Ambalajul de 1L, în format UHT, asigură un termen de valabilitate lung, fiind un ingredient de bază convenabil de avut în cămară. Este alegerea multor bucătari profesioniști pentru consistența sa, versatilitatea și rezultatele de încredere pe care le oferă. O soluție inteligentă pentru o bucătărie modernă.",
        price: 16,
      },
      {
        name: "Knorr crema de otet balsamic, sticla de 200ml",
        category: "Condimente",
        description:
          "Un condiment gourmet care adaugă o notă de rafinament și complexitate oricărei farfurii. Crema de oțet balsamic de la Knorr este o reducție de oțet balsamic de Modena, având o consistență densă, siropoasă, și un gust intens, dulce-acrișor. Este un instrument creativ în mâna oricărui bucătar. Poate fi folosită pentru a decora farfuriile, creând modele elegante. Stropită peste o salată Caprese (roșii, mozzarella, busuioc), îi intensifică aromele. Se potrivește de minune cu brânzeturi maturate, precum Parmigiano Reggiano, sau cu căpșuni proaspete, creând un contrast surprinzător și delicios. Este, de asemenea, o glazură excelentă pentru carnea de pui, porc sau vită, gătită la grătar sau la cuptor, conferindu-i o crustă lucioasă și plină de gust. Sticla de 200ml este ușor de manevrat și permite o dozare precisă. Un mic strop din această cremă poate transforma un preparat simplu într-unul sofisticat. Un produs de înaltă calitate, care aduce gustul autentic al Italiei și o notă de creativitate în bucătăria dumneavoastră.",
        price: 27,
      },
      {
        name: "Oregano ambalat la punga de 1kg",
        category: "Condimente",
        description:
          "Sufletul bucătăriei mediteraneene, oregano este o iarbă aromatică robustă, cu o aromă caldă, piperată și ușor amăruie. Varianta sa uscată are o aromă chiar mai intensă decât cea proaspătă, fiind un condiment de bază în bucătăriile din întreaga lume. Punga noastră generoasă, de 1 kg, este destinată bucătăriilor profesionale și pasionaților de gătit, asigurând un stoc îndelungat. Este condimentul definitoriu pentru pizza și sosurile de paste pe bază de roșii. Aroma sa se potrivește perfect cu carnea de miel, pui și vită, fiind un ingredient cheie în marinadele grecești, alături de lămâie și usturoi. Presărat peste o salată grecească, alături de brânză feta, este indispensabil. De asemenea, completează minunat gustul legumelor coapte, în special al dovleceilor, vinetelor și ardeilor. Un praf de oregano poate înveseli o omletă sau poate adăuga o notă mediteraneană unei simple supe de legume. Un condiment puternic și versatil, care transportă instantaneu simțurile pe țărmurile însorite ale Greciei sau Italiei.",
        price: 31,
      },
      {
        name: "Pesmet galben, sac de 20kg",
        category: "Condimente",
        description:
          "Agentul de crocant perfect, pesmetul galben este un ingredient esențial în orice bucătărie, fie ea profesională sau casnică. Obținut din pâine uscată și măcinată, pesmetul nostru are o culoare aurie, apetisantă, și o granulație medie, ideală pentru a crea o crustă crocantă și uniformă. Sacul mare, de 20 kg, este soluția economică și eficientă pentru restaurante, firme de catering și producători de semipreparate. Este ingredientul cheie pentru șnițele vieneze, pește pane, crochete de pui ('chicken nuggets') sau legume pane. De asemenea, este folosit ca agent de legare în chiftele sau burgeri, ajutând la menținerea formei și a suculenței. Poate fi presărat peste preparate la cuptor, precum pastele sau legumele gratinate, pentru a forma un topping crocant. Amestecat cu unt topit și ierburi, devine o crustă savuroasă pentru fileurile de pește. Un ingredient simplu, dar de o importanță capitală pentru obținerea de texturi satisfăcătoare și aspectuoase. Calitatea sa constantă garantează rezultate perfecte de fiecare dată.",
        price: 10,
      },
      {
        name: "Piper negru macinat, MQ 1kg",
        category: "Condimente",
        description:
          "Regele condimentelor, piperul negru este, alături de sare, cel mai fundamental element de asezonare din bucătăria occidentală. Produsul nostru, de calitate superioară (MQ - Medium Quality), este proaspăt măcinat pentru a păstra cât mai mult din aroma sa înțepătoare, lemnoasă și complexă. Punga de 1 kg este formatul standard pentru orice bucătărie profesională, asigurând că acest condiment esențial nu lipsește niciodată. Versatilitatea sa este absolută; nu există preparat sărat care să nu beneficieze de pe urma adaosului său. Intensifică gustul fripturilor, adaugă o notă picantă supelor și ciorbelor, echilibrează grăsimea din tocănițe și oferă o dimensiune nouă sosurilor. Este folosit în marinade, în amestecuri de condimente ('rubs') și chiar și în unele deserturi, unde se combină surprinzător de bine cu ciocolata sau căpșunile. Piperina, compusul activ din piper, nu doar că oferă iuțeală, dar ajută și la o mai bună absorbție a nutrienților din alte alimente. Un condiment indispensabil, al cărui rol în a eleva gustul mâncărurilor este de necontestat.",
        price: 74,
      },
      {
        name: "Ulei de palmier 18L",
        category: "Condimente",
        description:
          "Soluția profesională pentru prăjire intensivă, uleiul de palmier este una dintre cele mai populare grăsimi de gătit la nivel mondial, în special în sectorul HORECA. Principalul său avantaj este stabilitatea excepțională la temperaturi înalte, datorită punctului de fum ridicat. Acest lucru înseamnă că nu se descompune și nu produce fum sau compuși nocivi la fel de repede ca alte uleiuri, fiind ideal pentru prăjirea în baie de ulei (deep-frying). Bidonul de 18L este un format economic, destinat friteuzelor de mare capacitate din restaurante, fast-food-uri și cantine. Uleiul de palmier este, de asemenea, foarte rezistent la oxidare, ceea ce îi conferă o durată de viață mai lungă în friteuză. Are un gust neutru, care nu influențează aroma produselor prăjite, permițând gustului natural al cartofilor, puiului sau peștelui să iasă în evidență. Contribuie la obținerea unei cruste crocante și aurii. Este alegerea eficientă și economică pentru operațiuni de prăjire la scară largă, asigurând rezultate constante și de calitate.",
        price: 202,
      },
      {
        name: "Usturoi granule, 1kg",
        category: "Condimente",
        description:
          "Aroma intensă și inconfundabilă a usturoiului, într-o formă convenabilă și de lungă durată. Usturoiul granulat este obținut din căței de usturoi proaspeți, care sunt deshidratați și măcinați grosier. Acest proces îi conservă aroma puternică, oferind o alternativă excelentă la usturoiul proaspăt, în special în preparatele unde se dorește o distribuție uniformă a gustului, fără bucățele vizibile. Punga de 1 kg este ideală pentru bucătăriile profesionale și pentru producătorii de mezeluri sau amestecuri de condimente. Este perfect pentru a fi adăugat în amestecuri uscate ('rubs') pentru carne, în marinade, în aluaturi de pâine sau pizza. Poate fi presărat direct în supe, tocănițe și sosuri. Spre deosebire de pudra de usturoi, granulele sunt mai puțin predispuse la a forma cocoloașe. Un sfert de linguriță de usturoi granulat este echivalentul aproximativ al unui cățel de usturoi proaspăt. O soluție practică pentru a avea mereu la îndemână gustul înțepător și savuros al usturoiului, fără efortul de a-l curăța și toca.",
        price: 34,
      },

      // === PASTE ===
      {
        name: "Spaghete barilla 1kg nr.5",
        category: "Paste",
        description:
          "Un simbol al Italiei și cel mai iubit format de paste din lume, spaghetele Barilla Nr. 5 sunt etalonul calității și al gustului autentic. Produse din griș de grâu dur de cea mai înaltă calitate, aceste spaghete au o textură perfectă și o culoare aurie, specifică pastelor premium. Diametrul lor mediu, specificat de 'Nr. 5', este considerat ideal, fiind suficient de robust pentru a susține sosuri bogate, dar și suficient de delicat pentru preparate mai simple. Unul dintre secretele calității Barilla este trefilarea prin bronz, un proces care conferă pastelor o suprafață poroasă și aspră. Această textură permite sosului să adere mult mai bine la fiecare fir de spaghetă, asigurând o experiență gustativă superioară. Se gătesc perfect 'al dente' în aproximativ 8-9 minute. Sunt extrem de versatile, potrivindu-se cu o infinitate de sosuri: de la un simplu 'aglio, olio e peperoncino' (usturoi, ulei, ardei iute), la un ragu alla bolognese consistent, o carbonara cremoasă sau un sos proaspăt de roșii cu busuioc. Pachetul de 1 kg este ideal pentru familii sau pentru iubitorii de paste.",
        price: 12,
      },
      {
        name: "Tagliatele la molisana, cutie de 500gr",
        category: "Paste",
        description:
          "Eleganță și tradiție într-un cuib de paste. Tagliatellele de la La Molisana, un producător italian cu o istorie de peste 100 de ani, sunt o celebrare a pastelor proaspete cu ou, în format uscat. Aceste paste late, sub formă de panglici, sunt preparate după rețeta tradițională din regiunea Emilia-Romagna, folosind griș de grâu dur și ouă proaspete, ceea ce le conferă o culoare galbenă bogată și o textură fină, dar elastică. Suprafața lor poroasă, obținută prin trefilare în bronz, este perfectă pentru a îmbrățișa și a reține sosurile bogate și cremoase. Sunt partenerul tradițional pentru sosul ragu alla bolognese, dar se potrivesc la fel de bine cu sosuri pe bază de ciuperci (în special hribi), smântână și șuncă, sau cu un pesto proaspăt. Forma lor de cuiburi ajută la porționare și previne ruperea pastelor în timpul fierberii. Ambalajul de 500g este ideal pentru o masă generoasă în familie. O alegere rafinată, care aduce gustul autentic al pastelor 'fatte in casa' (făcute în casă) pe masa dumneavoastră.",
        price: 10,
      },

      // === SPECIALITĂȚI ȘI PREPARATE ===
      {
        name: "Cosulete de cartofi cu branza si verdeturi 0.976kg",
        category: "Specialități",
        description:
          "Un aperitiv elegant și un deliciu crocant, coșulețele noastre de cartofi sunt o alternativă rafinată la garniturile clasice. Acestea sunt preparate din cartofi rași fin, amestecați cu brânză savuroasă și verdețuri proaspete, apoi modelați în formă de cuiburi sau coșulețe. Rezultatul este un produs precongelat, gata de a fi copt la cuptor sau prăjit în baie de ulei. Odată gătite, devin aurii și incredibil de crocante la exterior, cu un interior moale și plin de gust. Sunt o garnitură spectaculoasă pentru fripturi, pește sau preparate din pui. De asemenea, pot fi servite ca aperitiv, de sine stătător, alături de un sos de smântână cu usturoi, sau pot fi umplute cu diverse compoziții după coacere (cremă de brânză, somon afumat, ou poșat), transformându-se într-un starter impresionant. Pachetul de aproape 1 kg conține suficiente bucăți pentru a servi la o petrecere sau o masă festivă. O soluție rapidă și ingenioasă pentru a adăuga o notă de creativitate și rafinament meniului dumneavoastră.",
        price: 30,
      },
      {
        name: "Cartofi gratinati cu smantana si branza 120gr/buc, 1.2kg",
        category: "Specialități",
        description:
          "Un clasic al bucătăriei franceze, 'Dauphinois', reinterpretat într-o formă convenabilă, gata porționată. Această specialitate constă în felii subțiri de cartofi, gătite lent într-un sos cremos de smântână, usturoi și nucșoară, acoperite cu un strat generos de brânză și gratinate până capătă o culoare aurie și o crustă apetisantă. Produsul nostru vine în porții individuale de 120g, congelate, gata de a fi introduse în cuptor. Această metodă asigură o prezentare elegantă și un control perfect al porțiilor, fiind ideală pentru restaurante sau evenimente. Fiecare porție este o explozie de cremozitate și confort, un 'comfort food' la superlativ. Interiorul este fraged și catifelat, iar exteriorul este rumenit și plin de gust. Este garnitura perfectă pentru fripturi de vită, porc sau miel, echilibrând bogăția cărnii. Pachetul de 1.2 kg conține 10 porții individuale, oferind o soluție rapidă și delicioasă pentru o masă rafinată, fără efortul de a pregăti acest fel de la zero.",
        price: 29,
      },
      {
        name: "Aripioare de pui picante Kentucky 500gr",
        category: "Specialități",
        description:
          "Aduceți gustul inconfundabil al sudului american în casa dumneavoastră cu aripioarele noastre de pui picante, în stil Kentucky. Aceste aripioare sunt marinate într-un amestec secret de condimente, care include boia, piper, usturoi și un strop de iuțeală, apoi sunt acoperite cu un strat de aluat special ('batter') care devine incredibil de crocant și auriu la prăjire. Gustul este complex: ușor picant, plin de arome și perfect echilibrat. Pachetul de 500g este ideal pentru o gustare satisfăcătoare sau o masă rapidă pentru două persoane. Sunt precongelate și gata de a fi gătite, fie în baie de ulei pentru un rezultat clasic, fie în friteuza cu aer cald pentru o variantă mai sănătoasă, dar la fel de crocantă. Serviți-le fierbinți, alături de un sos de brânză cu mucegai, un sos ranch sau pur și simplu cu cartofi prăjiți și salată de varză. O alternativă delicioasă și convenabilă la produsele de tip fast-food, care vă permite să vă bucurați de o experiență autentică, oricând doriți.",
        price: 15,
      },
      {
        name: "Aripioare de pui picante 500gr",
        category: "Specialități",
        description:
          "Pentru iubitorii de senzații tari, aceste aripioare de pui picante sunt gustarea perfectă. Marinate într-un amestec vibrant de ardei iute, boia și alte condimente, fiecare aripioară promite o explozie de gust și o iuțeală plăcută, care vă va trezi simțurile. Spre deosebire de varianta Kentucky, acestea nu au un strat gros de aluat, permițând pielii puiului să devină crocantă și aromată. Pachetul de 500g este perfect pentru a fi împărțit cu prietenii la o bere rece, în timpul unui meci sau la o petrecere. Sunt extrem de ușor de preparat: pot fi coapte la cuptor până se rumenesc, gătite pe grătar pentru o aromă suplimentară de fum, sau prăjite pentru un plus de crocant. Nivelul de iuțeală este echilibrat, oferind o senzație de căldură fără a fi copleșitor. Serviți-le cu un sos răcoritor pe bază de iaurt sau smântână pentru a tempera iuțeala. O gustare plină de caracter, care va adăuga cu siguranță un plus de energie și distracție oricărei ocazii.",
        price: 14,
      },
      {
        name: "Creveti decorticati in cuib de cartofi 25gr/buc 1kg",
        category: "Specialități",
        description:
          "Un aperitiv spectaculos și inovator, care combină delicatețea creveților cu textura crocantă a cartofilor. Fiecare bucată este o mică operă de artă culinară: un crevete suculent, decorticat, este învelit manual în fâșii subțiri de cartof, formând un 'cuib' sau un ghem. Produsul este precongelat, gata de a fi prăjit în baie de ulei. În timpul prăjirii, fâșiile de cartof devin extrem de crocante și aurii, creând un contrast de texturi fascinant cu crevetele fraged și dulce din interior. Pachetul de 1 kg, cu bucăți de 25g, este ideal pentru restaurante, evenimente sau petreceri, unde se dorește un aperitiv 'finger food' care să impresioneze. Se servesc fierbinți, alături de un sos dulce-acrișor (sweet chili), un sos aioli sau o maioneză cu lime. Prezentarea lor este unică și elegantă, fiind un punct de atracție pe orice platou. O alternativă rafinată la crochetele clasice, care va surprinde și va încânta orice invitat.",
        price: 78,
      },
      {
        name: "Creveti decorticati in cuib de cartofi 25gr/buc 250gr",
        category: "Specialități",
        description:
          "Doriți să încercați un aperitiv gourmet, dar într-o cantitate mai mică? Pachetul nostru de 250g de creveți în cuib de cartofi este soluția perfectă. Această porție este ideală pentru o cină romantică în doi, un starter pentru o masă specială sau pur și simplu pentru un moment de răsfăț. Fiecare crevete suculent, învelit în fâșii crocante de cartof, este o promisiune a unei experiențe culinare deosebite. Ușor de preparat, se prăjesc în câteva minute și sunt gata de a fi savurați. Contrastul dintre învelișul crocant și miezul fraged este absolut delicios. Serviți-i cu un pahar de vin alb sec sau un Prosecco pentru a completa experiența. Chiar dacă este un produs congelat, aspectul și gustul său sunt la nivelul celor servite în restaurantele de top. O modalitate simplă de a aduce o notă de creativitate și rafinament în bucătăria dumneavoastră, fără a necesita abilități culinare avansate. Un mic lux, la îndemâna oricui.",
        price: 23,
      },
      {
        name: "Crispy din piept de pui 500gr",
        category: "Specialități",
        description:
          "Fâșii fragede de piept de pui, acoperite cu o crustă extra-crocantă. Cunoscut și sub numele de 'chicken tenders' sau 'chicken strips', acest produs este un favorit universal, iubit de copii și adulți. Folosim doar piept de pui de calitate, care rămâne suculent la interior, în timp ce învelișul special, pe bază de pesmet și condimente, devine auriu și incredibil de crocant la gătire. Pachetul de 500g este perfect pentru o masă rapidă și gustoasă în familie. Pot fi prăjite în baie de ulei, coapte la cuptor sau preparate în friteuza cu aer cald pentru o variantă mai sănătoasă. Sunt extrem de versatile: pot fi servite ca fel principal, alături de cartofi prăjiți și sosuri, tăiate și adăugate în salate pentru un plus de proteine și textură, sau folosite pentru a umple wrap-uri și sandvișuri. Un produs convenabil, care aduce bucurie și satisface poftele, fiind o soluție rapidă pentru prânz sau cină. Gustul clasic, care nu dă greș niciodată.",
        price: 20,
      },
      {
        name: "Crispy din piept de pui kentucky 500gr",
        category: "Specialități",
        description:
          "Experimentați gustul autentic al puiului prăjit din sudul Statelor Unite cu fâșiile noastre crispy în stil Kentucky. Secretul stă în crusta sa unică, preparată cu un amestec special de făină și 11 ierburi și condimente, care îi conferă o aromă complexă, piperată și inconfundabilă. Pieptul de pui fraged de la interior contrastează perfect cu învelișul gros, crocant și plin de textură. Pachetul de 500g este o invitație la o masă reconfortantă și plină de gust. Pentru un rezultat optim, se recomandă prăjirea în baie de ulei. Serviți aceste fâșii alături de garnituri clasice americane, precum piure de cartofi cu sos 'gravy', salată de varză 'coleslaw' sau porumb fiert. Sunt delicioase și servite simplu, cu un sos de barbecue sau miere cu muștar. O masă care aduce aminte de cinele de duminică, pline de voie bună. Un produs premium, care recreează cu fidelitate o rețetă legendară, pentru momente de pură indulgență.",
        price: 20,
      },
      {
        name: "Hamburger smash 130gr",
        category: "Specialități",
        description:
          "Revoluționați modul în care preparați burgeri cu chiftelele noastre speciale pentru 'smash burger'. Această tehnică, din ce în ce mai populară, implică presarea ('smashing') unei bile de carne tocată direct pe o plită sau tigaie foarte încinsă. Rezultatul? O suprafață de contact maximă, care duce la o caramelizare excepțională (reacția Maillard), creând o crustă incredibil de gustoasă, dantelată și crocantă, în timp ce interiorul rămâne suculent. Chiftelele noastre, de 130g, au compoziția și forma perfectă pentru această tehnică. Sunt făcute dintr-un amestec de vită de înaltă calitate, cu un raport optim de grăsime, esențial pentru un burger suculent și plin de gust. Nu mai este nevoie să modelați carnea; pur și simplu așezați bila pe plita încinsă și presați-o ferm cu o spatulă. Gata în câteva minute, acest burger oferă o experiență texturată superioară burgerilor groși, tradiționali. O alegere pentru adevărații pasionați de burgeri, care caută gustul autentic de 'diner' american.",
        price: 62,
      },
      {
        name: "Jalapenos snacks specialitate din branza picanta 1kg",
        category: "Specialități",
        description:
          "O gustare explozivă, care combină cremozitatea brânzei cu iuțeala vibrantă a ardeilor jalapeno. Cunoscuți și ca 'jalapeño poppers', acești snacksuri constau într-un amestec de brânză cremă și bucățele de ardei jalapeno, învelit într-o crustă crocantă de pesmet. Fiecare mușcătură este o aventură: mai întâi simțiți învelișul crocant, urmat de brânza fierbinte și topită, și la final, lovitura proaspătă și picantă a ardeiului. Punga de 1 kg este perfectă pentru petreceri, baruri sau ca aperitiv de împărțit cu prietenii. Se prepară rapid, prin prăjire în baie de ulei, până devin aurii și apetisanți. Se servesc fierbinți, ideal alături de un sos ranch răcoritor sau o salsa proaspătă pentru a completa experiența. Nivelul de iuțeală este moderat, oferind o senzație plăcută, nu una copleșitoare. O gustare irezistibilă și plină de personalitate, care va adăuga cu siguranță un plus de 'foc' oricărei ocazii. Un 'must-try' pentru toți iubitorii de mâncare picantă și brânză.",
        price: 56,
      },
      {
        name: "Saga mini kiev 1kg, 10 buc/bax",
        category: "Specialități",
        description:
          "O reinterpretare modernă și convenabilă a unui clasic est-european. Tradiționalul 'Pui Kiev' este un piept de pui umplut cu unt aromat cu usturoi și ierburi, dat prin pesmet și prăjit. Varianta noastră 'Mini Kiev' de la Saga oferă toată savoarea rețetei originale, dar într-un format mai mic, de aperitiv sau de porție individuală. Aceste mini rulouri sunt deja formate, umplute și acoperite cu pesmet, gata de a fi gătite. La interior, veți descoperi o inimă de unt topit, aromat, care se revarsă delicios la prima tăietură. Pachetul de 1 kg (10 bucăți) este ideal pentru o masă în familie sau pentru a oferi o opțiune de meniu interesantă într-un restaurant. Se pot prăji sau coace la cuptor. Sunt o soluție elegantă și rapidă pentru o cină gustoasă, servite alături de un piure de cartofi sau o salată verde. Un preparat reconfortant și plin de gust, care aduce o notă de nostalgie și rafinament, fără complicațiile rețetei tradiționale.",
        price: 34,
      },
      {
        name: "Snitel din piept de pui, 450gr",
        category: "Specialități",
        description:
          "Un preparat clasic, iubit de toată lumea, acum într-o variantă rapidă și convenabilă. Șnițelul nostru este preparat din felii subțiri de piept de pui, bătute pentru a fi fragede, apoi acoperite cu un strat uniform de pesmet auriu. Produsul este gata preparat și congelat, necesitând doar câteva minute de prăjire sau coacere pentru a fi gata de servit. Pachetul de 450g este porția ideală pentru 2-3 persoane, fiind o soluție excelentă pentru un prânz sau o cină rapidă. Rezultatul este un șnițel cu o crustă perfect crocantă și un interior fraged și suculent. Este extrem de versatil: poate fi servit ca fel principal, alături de cartofi prăjiți, piure sau o salată. De asemenea, este delicios într-un sandviș, cu salată și maioneză, sau tăiat fâșii peste o farfurie de paste. Un preparat simplu, dar care oferă o satisfacție garantată. Scăpați de bătaia de cap de a bate carnea și de a murdări bucătăria cu făină și ou; bucurați-vă de un șnițel perfect, oricând doriți.",
        price: 17,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
