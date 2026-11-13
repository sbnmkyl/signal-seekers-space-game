(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rand = (min, max) => Math.random() * (max - min) + min;
  const tr = (value) => typeof value === "string" ? value : value[state.lang];

  const COPY = {
    tr: {
      shortTitle: "Sinyal Avcıları", incoming: "2060 · KAYIP SİNYAL ALGILANDI",
      heroLine1: "Sessizlik", heroLine2: "unutulmak değildir.",
      heroLede: "Ay, Mars ve derin uzaydaki robotik kaşiflerin anıları sönüyor. Minik yıldız tamircisi Piko ile sinyallerini bul, bilimlerini yeniden canlandır.",
      begin: "Maceraya Başla", howTo: "Nasıl oynanır?", missions: "görev", languages: "dil", curiosity: "merak",
      pikoHello: "“Bip! Beş cesur kaşif bizi bekliyor. Onlara bir ses verelim mi?”", sparksLabel: "bilim kıvılcımı",
      memoryNetwork: "KOZMİK HAFIZA AĞI", chooseSignal: "Bir sinyal seç, bir anıyı uyandır.",
      mapHelp: "Görevleri istediğin sırayla oynayabilirsin. Her kaşif sana üç Bilim Kıvılcımı bırakır.", legacy: "Miras Sinyali",
      moonTitle: "Lazer Köprüsü", moonMapDesc: "LRV & Ay aynaları", oppyTitle: "Suyun İzleri", oppyMapDesc: "Opportunity",
      ingenuityTitle: "İmkânsız Uçuş", ingenuityMapDesc: "Ingenuity", insightTitle: "Mars’ın Kalbi", insightMapDesc: "InSight",
      pioneerTitle: "Yıldızlara Mektup", pioneerMapDesc: "Pioneer 10", mapTip: "Yanıp sönen noktalar kurtarılmayı bekleyen sinyallerdir.",
      finaleLocked: "Final sinyali kilitli · 5/5", finaleReady: "Final sinyali hazır", backToMap: "Haritaya dön", goal: "HEDEF",
      memorySimulation: "HAFIZA SİMÜLASYONU", launch: "Simülasyonu Başlat", action: "EYLEM",
      museumLabel: "KOZMİK MÜZE", museumTitle: "Sessiz kaşifler, canlı miraslar.",
      museumCopy: "Görevleri tamamlayarak anı kapsüllerini aç. Her karttaki gerçek bilgi NASA görev kayıtlarına dayanır.",
      all: "Tümü", moon: "Ay", mars: "Mars", deepSpace: "Derin Uzay", unlockHint: "İlgili görevi tamamla", nasaSource: "NASA kaynağı",
      networkRestored: "KOZMİK HAFIZA AĞI ONARILDI", theyOpened: "Onlar yolu açtı.", youAreNext: "Sıradaki keşif senin.",
      finaleCopy: "Beş sessiz kaşifin anıları artık yıldızlar arasında ışıldıyor. Makineler durabilir; merak yolculuğuna devam eder.",
      finalQuote: "“Bizi hatırladığın sürece, hiçbir sinyal gerçekten kaybolmaz.”", yourName: "Kâşif adın",
      makeCertificate: "Sertifikayı Oluştur", visitMap: "Haritayı yeniden ziyaret et", resetProgress: "İlerlemeyi sıfırla",
      memoryTransmission: "ANI SİNYALİ ALINDI", missionFact: "GÖREV GERÇEĞİ", readNasa: "NASA kaynağını aç",
      creativeNote: "Konuşmalar yaratıcı bir hafıza simülasyonudur; bilgi kartları doğrulanmış görev gerçeklerini sunar.",
      continueQuiz: "Bilim sorusuna geç", scienceCheck: "BİLİM KONTROLÜ", collectSparks: "Kıvılcımları Topla",
      fieldGuide: "PIKO’NUN SAHA REHBERİ", howTitle: "Bir sinyal nasıl kurtarılır?", how1Title: "Bir kaşif seç", how1Copy: "Canlı haritadaki beş sinyalden birine dokun.",
      how2Title: "Bilimi oyna", how2Copy: "Her aracın gerçek görevinden esinlenen kısa oyunu tamamla.", how3Title: "Anıyı dinle",
      how3Copy: "Kaşifin yaratıcı radyo günlüğünü ve doğrulanmış bilgi kartını aç.", how4Title: "Mirası birleştir", how4Copy: "Beş görevi tamamla, final takımyıldızını aydınlat.",
      touchReady: "Dokunmatik ekranla da oynanır.", understood: "Hazırım!", certificateTop: "KOZMİK HAFIZA AĞI",
      certificateTitle: "Hafıza Koruyucusu Sertifikası", certificateAwarded: "Bu sertifika, beş robotik kaşifin bilimsel mirasını başarıyla uyandıran",
      certificateText: "adlı meraklı kâşife gururla verilmiştir.", pikoSignature: "Piko’nun dijital imzası ✦", printSave: "Yazdır / PDF olarak kaydet",
      correct: "Doğru! Sinyal berraklaştı.", tryAgain: "Neredeyse! Piko’nun ipucuna bakıp yeniden dene.",
      completed: "Görev tamamlandı", alreadyComplete: "Bu anı zaten güvende. Yeniden oynamak serbest!", namePlaceholder: "Adını yaz",
      resetConfirm: "Tüm görev ilerlemesi silinsin mi?", progressReset: "Kozmik Hafıza Ağı yeni bir yolculuk için sıfırlandı.",
      useArrows: "Yön tuşları / WASD", usePointer: "Fare / dokunma", useSpace: "Boşluk / Eylem", useNumbers: "1 · 2 · 3",
      leftRight: "Sağ–sol hareket et", aimFire: "Nişan al ve ışını gönder", holdFly: "Yükselmek için basılı tut", repeatPattern: "Titreşim dizisini tekrarla", collectFragments: "Plaka parçalarını topla"
    },
    en: {
      shortTitle: "Signal Seekers", incoming: "2060 · LOST SIGNAL DETECTED",
      heroLine1: "Silence does not", heroLine2: "mean forgotten.",
      heroLede: "The memories of robotic explorers on the Moon, Mars and in deep space are fading. Join Piko, a tiny star mechanic, to find their signals and bring their science back to life.",
      begin: "Begin Adventure", howTo: "How to play", missions: "missions", languages: "languages", curiosity: "curiosity",
      pikoHello: "“Beep! Five brave explorers are waiting. Shall we give them a voice?”", sparksLabel: "science sparks",
      memoryNetwork: "COSMIC MEMORY NETWORK", chooseSignal: "Choose a signal. Awaken a memory.",
      mapHelp: "Play the missions in any order. Every explorer will leave you three Science Sparks.", legacy: "Legacy Signal",
      moonTitle: "The Laser Bridge", moonMapDesc: "LRV & lunar mirrors", oppyTitle: "Traces of Water", oppyMapDesc: "Opportunity",
      ingenuityTitle: "The Impossible Flight", ingenuityMapDesc: "Ingenuity", insightTitle: "The Heart of Mars", insightMapDesc: "InSight",
      pioneerTitle: "A Letter to the Stars", pioneerMapDesc: "Pioneer 10", mapTip: "Pulsing points are signals waiting to be rescued.",
      finaleLocked: "Final signal locked · 5/5", finaleReady: "Final signal ready", backToMap: "Back to map", goal: "GOAL",
      memorySimulation: "MEMORY SIMULATION", launch: "Launch Simulation", action: "ACTION",
      museumLabel: "COSMIC MUSEUM", museumTitle: "Silent explorers. Living legacies.",
      museumCopy: "Complete missions to open memory capsules. Every fact card is grounded in NASA mission records.",
      all: "All", moon: "Moon", mars: "Mars", deepSpace: "Deep Space", unlockHint: "Complete its linked mission", nasaSource: "NASA source",
      networkRestored: "COSMIC MEMORY NETWORK RESTORED", theyOpened: "They opened the way.", youAreNext: "The next discovery is yours.",
      finaleCopy: "The memories of five silent explorers now shine among the stars. Machines may stop; curiosity keeps traveling.",
      finalQuote: "“As long as you remember us, no signal is ever truly lost.”", yourName: "Explorer name",
      makeCertificate: "Make Certificate", visitMap: "Revisit the map", resetProgress: "Reset progress",
      memoryTransmission: "MEMORY SIGNAL RECEIVED", missionFact: "MISSION FACT", readNasa: "Open NASA source",
      creativeNote: "The dialogue is a creative memory simulation; fact cards present verified mission history.",
      continueQuiz: "Continue to science question", scienceCheck: "SCIENCE CHECK", collectSparks: "Collect the Sparks",
      fieldGuide: "PIKO’S FIELD GUIDE", howTitle: "How do you rescue a signal?", how1Title: "Choose an explorer", how1Copy: "Tap one of the five signals on the living map.",
      how2Title: "Play the science", how2Copy: "Finish a short game inspired by each machine’s real mission.", how3Title: "Hear the memory",
      how3Copy: "Open the explorer’s creative radio log and verified fact card.", how4Title: "Connect the legacy", how4Copy: "Complete five missions and light the final constellation.",
      touchReady: "Touchscreens work too.", understood: "I’m ready!", certificateTop: "COSMIC MEMORY NETWORK",
      certificateTitle: "Memory Keeper Certificate", certificateAwarded: "This certificate is proudly awarded to",
      certificateText: "for awakening the scientific legacy of five robotic explorers.", pikoSignature: "Piko’s digital signature ✦", printSave: "Print / Save as PDF",
      correct: "Correct! The signal is crystal clear.", tryAgain: "Almost! Read Piko’s hint and try again.",
      completed: "Mission complete", alreadyComplete: "This memory is already safe. Replays are always welcome!", namePlaceholder: "Type your name",
      resetConfirm: "Erase all mission progress?", progressReset: "The Cosmic Memory Network is ready for a new journey.",
      useArrows: "Arrow keys / WASD", usePointer: "Mouse / touch", useSpace: "Space / Action", useNumbers: "1 · 2 · 3",
      leftRight: "Move left and right", aimFire: "Aim and send the beam", holdFly: "Hold to rise", repeatPattern: "Repeat the vibration pattern", collectFragments: "Collect plaque fragments"
    }
  };

  const MISSIONS = {
    moon: {
      id: "moon", location: { tr: "AY · 1971", en: "MOON · 1971" }, title: { tr: "Lazer Köprüsü", en: "The Laser Bridge" }, icon: "☾", color: "#ffd66b", type: "moon",
      intro: { tr: "Dünya’dan gelen lazeri hareketli Ay aynasına nişanla. Üç temiz yansıma göndererek uzaklık ölçümünü yeniden canlandır.", en: "Aim Earth’s laser at the moving lunar mirror. Send three clean reflections to bring lunar ranging back to life." },
      caption: { tr: "İmleci aynanın üzerine getir ve Eylem’e bas. Ay yüzeyi hareket ettikçe yeniden nişan al.", en: "Move the reticle onto the mirror and press Action. Re-aim as the lunar surface shifts." },
      quote: { tr: "“Elektriğe ihtiyacım yok. Bana bir ışık gönder, ben de onu eve geri yollayayım! Yanımda dinlenen Ay Arabası, insan merakını kraterlerin ötesine taşımıştı.”", en: "“I need no electricity. Send me a beam of light, and I’ll bounce it home! The lunar rover resting nearby once carried human curiosity beyond the craters.”" },
      fact: { tr: "Apollo 11, 14 ve 15’in Ay’a bıraktığı pasif retroreflektörler elektriğe ihtiyaç duymaz. Dünya’dan gönderilen lazer ışığını geri yansıtarak Dünya–Ay uzaklığının hassas ölçümüne bugün de yardım ederler.", en: "Passive retroreflectors left by Apollo 11, 14 and 15 need no electricity. They still return laser light sent from Earth, supporting precise measurements of the Earth–Moon distance." },
      source: "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html",
      quiz: {
        question: { tr: "Ay’daki retroreflektörler bilim insanlarının neyi ölçmesine yardım eder?", en: "What do lunar retroreflectors help scientists measure?" },
        options: [{ tr: "Dünya–Ay uzaklığını", en: "The Earth–Moon distance" }, { tr: "Ay’daki rüzgârı", en: "Wind on the Moon" }, { tr: "Ay’ın okyanuslarını", en: "The Moon’s oceans" }], correct: 0,
        hint: { tr: "İpucu: Lazerin gidiş-dönüş süresi bir mesafeyi verir.", en: "Hint: The laser’s round-trip time reveals a distance." }
      }
    },
    opportunity: {
      id: "opportunity", location: { tr: "MARS · 2004", en: "MARS · 2004" }, title: { tr: "Suyun İzleri", en: "Traces of Water" }, icon: "▰", color: "#ff765f", type: "rover",
      intro: { tr: "Oppy’yi sağa sola sür. Altı mavi hematit ipucunu topla; büyük kayaların yanından dikkatle geç.", en: "Steer Oppy left and right. Collect six blue hematite clues and carefully pass the large rocks." },
      caption: { tr: "Mavi bilim kürelerini topla. Kayaya değersen Piko seni güvenle yeniden yola çıkarır.", en: "Collect the blue science spheres. If you touch a rock, Piko safely guides you back on course." },
      quote: { tr: "“Bana doksan Mars günü verdiler. Ben merakımı neredeyse on beş yıl taşıdım. Her taşta eski suyun sessiz imzasını aradım.”", en: "“They gave me ninety Martian days. I carried my curiosity for nearly fifteen years, searching every rock for the quiet signature of ancient water.”" },
      fact: { tr: "Opportunity 90 sol için tasarlandı ama neredeyse 15 yıl çalıştı. 45 kilometreden fazla yol aldı ve Mars’ta geçmiş su koşullarına dair güçlü mineral kanıtları buldu.", en: "Opportunity was designed for 90 sols but worked for nearly 15 years. It traveled over 45 kilometers and found strong mineral evidence of past watery conditions on Mars." },
      source: "https://science.nasa.gov/mission/mer-opportunity/",
      quiz: {
        question: { tr: "Opportunity’nin başlangıçta planlanan görev süresi ne kadardı?", en: "How long was Opportunity’s mission originally planned to last?" },
        options: [{ tr: "90 sol", en: "90 sols" }, { tr: "15 yıl", en: "15 years" }, { tr: "Bir hafta", en: "One week" }], correct: 0,
        hint: { tr: "İpucu: Oppy planı yaklaşık 60 kat aştı.", en: "Hint: Oppy outlived the plan by about 60 times." }
      }
    },
    ingenuity: {
      id: "ingenuity", location: { tr: "MARS GÖĞÜ · 2021", en: "MARS SKY · 2021" }, title: { tr: "İmkânsız Uçuş", en: "The Impossible Flight" }, icon: "⌁", color: "#53e7ff", type: "flight",
      intro: { tr: "İnce Mars havasında yükselmek için Eylem’e basılı tut, alçalmak için bırak. Beş sinyal halkasının içinden uç.", en: "Hold Action to climb in the thin Martian air; release to descend. Fly through five signal rings." },
      caption: { tr: "Rotor gücü yükseltir, Mars çekimi alçaltır. Halkayı kaçırırsan bir yenisi gelir.", en: "Rotor power lifts you; Martian gravity pulls you down. Miss a ring and another will arrive." },
      quote: { tr: "“Gökyüzü bana ‘burada uçulmaz’ dedi. Beş uçuş istediler; ben Mars göğüne yetmiş iki kez merhaba dedim!”", en: "“The sky said, ‘You can’t fly here.’ They asked for five flights; I said hello to the Martian sky seventy-two times!”" },
      fact: { tr: "Ingenuity başka bir dünyada kontrollü, motorlu uçuş gerçekleştiren ilk hava aracıydı. Beş test uçuşu için tasarlandı, 72 uçuş yaptı; son inişindeki rotor hasarı uçuş görevini bitirdi.", en: "Ingenuity was the first aircraft to make powered, controlled flight on another world. Designed for five test flights, it completed 72 before rotor damage on its final landing ended flight operations." },
      source: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
      quiz: {
        question: { tr: "Ingenuity kaç uçuş için tasarlandı ve kaç uçuş yaptı?", en: "How many flights was Ingenuity designed for, and how many did it complete?" },
        options: [{ tr: "5 ve 72", en: "5 and 72" }, { tr: "72 ve 5", en: "72 and 5" }, { tr: "1 ve 2", en: "1 and 2" }], correct: 0,
        hint: { tr: "İpucu: Küçük helikopter planlanandan çok daha fazla uçtu.", en: "Hint: The little helicopter flew far more than planned." }
      }
    },
    insight: {
      id: "insight", location: { tr: "MARS · 2018", en: "MARS · 2018" }, title: { tr: "Mars’ın Kalbi", en: "The Heart of Mars" }, icon: "◉", color: "#8e80ff", type: "simon",
      intro: { tr: "InSight’ın duyduğu titreşim dizisini izle, sonra aynı renkleri doğru sırayla tekrarla. Üç sismik katmanı aç.", en: "Watch the vibration sequence InSight hears, then repeat the colors in order. Reveal three seismic layers." },
      caption: { tr: "Dalgalar parlarken bekle; ‘Sıra sende’ mesajından sonra 1, 2, 3 tuşlarını veya pedleri kullan.", en: "Wait while the waves glow. After ‘Your turn,’ use keys 1, 2, 3 or tap the pads." },
      quote: { tr: "“Ben yürümedim. Sessizce durdum, kulağımı kızıl toprağa verdim ve bütün bir gezegenin kalp atışını dinledim.”", en: "“I never roamed. I stood quietly, put my ear to the red ground, and listened to the heartbeat of an entire planet.”" },
      fact: { tr: "InSight, Mars’ın derin iç yapısını incelemeye adanmış ilk görevdi. Sismometresi Mars depremlerinden ve göktaşı çarpmalarından gelen dalgaları ölçerek kabuk, manto ve çekirdek hakkında bilgi verdi.", en: "InSight was the first mission dedicated to studying Mars’ deep interior. Its seismometer measured waves from marsquakes and meteorite impacts, revealing clues about the crust, mantle and core." },
      source: "https://science.nasa.gov/mission/insight/science-instruments/",
      quiz: {
        question: { tr: "InSight Mars’ın içini nasıl inceledi?", en: "How did InSight study the inside of Mars?" },
        options: [{ tr: "Sismik dalgaları dinleyerek", en: "By listening to seismic waves" }, { tr: "Yüzeyde dolaşarak", en: "By driving across the surface" }, { tr: "Atmosferde uçarak", en: "By flying through the atmosphere" }], correct: 0,
        hint: { tr: "İpucu: Bu görevde ritim gibi titreşimler yakaladın.", en: "Hint: You captured rhythm-like vibrations in this mission." }
      }
    },
    pioneer: {
      id: "pioneer", location: { tr: "DERİN UZAY · 1972", en: "DEEP SPACE · 1972" }, title: { tr: "Yıldızlara Mektup", en: "A Letter to the Stars" }, icon: "✦", color: "#7fffc5", type: "space",
      intro: { tr: "Pioneer’ı yıldız alanında yönlendir. Dört altın plaka parçasını topla, dönen asteroitlerden uzak dur.", en: "Guide Pioneer through the star field. Collect four golden plaque fragments and steer clear of the tumbling asteroids." },
      caption: { tr: "Dört yönde hareket et. Çarpışma yalnızca kısa bir sinyal paraziti yaratır; yolculuk devam eder.", en: "Move in four directions. A collision only causes brief signal static; the journey continues." },
      quote: { tr: "“Artık Dünya’yı duyamıyorum; ama taşıdığım merhaba hâlâ yıldızlara doğru yol alıyor. Bir mesaj, onu taşıyan ses sustuğunda bile yaşayabilir.”", en: "“I can no longer hear Earth, but the hello I carry is still traveling toward the stars. A message can live even after its carrier falls silent.”" },
      fact: { tr: "Pioneer 10 asteroit kuşağını geçen ve Jüpiter’i yakından inceleyen ilk araçtı. 30 yıldan uzun çalıştı; insanları, Güneş Sistemi’ni ve Güneş’in pulsarlara göre konumunu gösteren bir plaka taşıyor.", en: "Pioneer 10 was the first craft through the asteroid belt and the first to explore Jupiter up close. It operated for over 30 years and carries a plaque depicting humans, the Solar System and the Sun’s position relative to pulsars." },
      source: "https://science.nasa.gov/mission/pioneer-10/",
      quiz: {
        question: { tr: "Pioneer 10 plakasında hangi tür bilgiler bulunur?", en: "What kind of information appears on the Pioneer 10 plaque?" },
        options: [{ tr: "İnsanlar ve kozmik adresimiz", en: "Humans and our cosmic address" }, { tr: "Mars hava durumu", en: "Martian weather" }, { tr: "Ay taşlarının fiyatı", en: "The price of Moon rocks" }], correct: 0,
        hint: { tr: "İpucu: Plaka, onu bulabilecek başka zekâlara kim olduğumuzu anlatır.", en: "Hint: The plaque tells possible finders who and where we are." }
      }
    }
  };

  const ARTIFACTS = [
    { id:"lrv", unlock:"moon", zone:"moon", icon:"☾", year:"1971", color:"#ffd66b", name:{tr:"Ay Arabaları",en:"Lunar Rovers"}, tag:{tr:"AY · HAREKET",en:"MOON · MOBILITY"}, fact:{tr:"Apollo 15, 16 ve 17 astronotlarının daha uzağa gidip daha çok örnek toplamasını sağladı. Üçü de Ay’da kaldı.",en:"They let Apollo 15, 16 and 17 astronauts travel farther and collect more samples. All three remain on the Moon."}, source:"https://www.nasa.gov/history/50-years-ago-first-apollo-astronauts-to-drive-on-the-moon-took-final-cruise/" },
    { id:"alsep", unlock:"moon", zone:"moon", icon:"◇", year:"1969", color:"#b9f6ff", name:{tr:"Apollo Aynaları",en:"Apollo Mirrors"}, tag:{tr:"AY · LAZER",en:"MOON · LASER"}, fact:{tr:"Pasif retroreflektörler elektrik olmadan lazer ışığını geldiği yöne yollar ve Dünya–Ay uzaklığının hassas ölçümüne yardım eder.",en:"Passive retroreflectors return laser light toward its source without power and support precise Earth–Moon distance measurements."}, source:"https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html" },
    { id:"sojourner", unlock:"opportunity", zone:"mars", icon:"▣", year:"1997", color:"#ff9b67", name:{tr:"Sojourner",en:"Sojourner"}, tag:{tr:"MARS · ÖNCÜ",en:"MARS · PATHFINDER"}, fact:{tr:"Pathfinder ile gelen küçük Sojourner, Mars’ta çalışan ilk gezici oldu ve sonraki roverların yolunu açtı.",en:"The small Sojourner rover arrived with Pathfinder, became the first rover to operate on Mars, and opened the way for those that followed."}, source:"https://science.nasa.gov/mission/mars-pathfinder/" },
    { id:"opportunity", unlock:"opportunity", zone:"mars", icon:"▰", year:"2004", color:"#ff765f", name:{tr:"Opportunity",en:"Opportunity"}, tag:{tr:"MARS · SU İZİ",en:"MARS · WATER CLUES"}, fact:{tr:"90 sol için tasarlandı; neredeyse 15 yıl çalıştı ve 45 kilometreden fazla yol aldı.",en:"Designed for 90 sols, it worked for nearly 15 years and traveled more than 45 kilometers."}, source:"https://science.nasa.gov/mission/mer-opportunity/" },
    { id:"ingenuity", unlock:"ingenuity", zone:"mars", icon:"⌁", year:"2021", color:"#53e7ff", name:{tr:"Ingenuity",en:"Ingenuity"}, tag:{tr:"MARS · İLK UÇUŞ",en:"MARS · FIRST FLIGHT"}, fact:{tr:"Beş test uçuşu için tasarlanan teknoloji gösterimi, başka bir dünyada 72 kontrollü uçuş yaptı.",en:"The technology demonstration was built for five test flights and completed 72 controlled flights on another world."}, source:"https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/" },
    { id:"insight", unlock:"insight", zone:"mars", icon:"◉", year:"2018", color:"#8e80ff", name:{tr:"InSight",en:"InSight"}, tag:{tr:"MARS · SİSMOLOJİ",en:"MARS · SEISMOLOGY"}, fact:{tr:"Sabit kalan iniş aracı, Mars depremlerini dinleyerek gezegenin kabuğu, mantosu ve çekirdeğine dair ipuçları verdi.",en:"The stationary lander listened to marsquakes and revealed clues about the planet’s crust, mantle and core."}, source:"https://science.nasa.gov/mission/insight/science-instruments/" },
    { id:"viking", unlock:"insight", zone:"mars", icon:"⌂", year:"1976", color:"#c58d70", name:{tr:"Viking 1 & 2",en:"Viking 1 & 2"}, tag:{tr:"MARS · İLK BAŞARI",en:"MARS · EARLY SUCCESS"}, fact:{tr:"İki Viking iniş aracı Mars yüzeyinden uzun süre çalışan ilk ABD görevleri oldu ve ayrıntılı görüntüler ile hava verileri gönderdi.",en:"The two Viking landers became the first long-lived U.S. missions on the Martian surface, returning detailed images and weather data."}, source:"https://science.nasa.gov/mission/viking-1/" },
    { id:"pioneer", unlock:"pioneer", zone:"deep", icon:"✦", year:"1972", color:"#7fffc5", name:{tr:"Pioneer 10",en:"Pioneer 10"}, tag:{tr:"DERİN UZAY · MESAJ",en:"DEEP SPACE · MESSAGE"}, fact:{tr:"Jüpiter’i yakından inceleyen ilk uzay aracıydı. Son sinyali 2003’te, fırlatılışından 30 yılı aşkın süre sonra alındı.",en:"It was the first spacecraft to explore Jupiter up close. Its last signal arrived in 2003, more than 30 years after launch."}, source:"https://science.nasa.gov/mission/pioneer-10/" },
    { id:"dawn", unlock:"pioneer", zone:"deep", icon:"◌", year:"2007", color:"#bfa5ff", name:{tr:"Dawn",en:"Dawn"}, tag:{tr:"ASTEROİT KUŞAĞI · HARİTA",en:"ASTEROID BELT · MAPPING"}, fact:{tr:"Vesta ve Ceres’in yörüngesine girerek iki ayrı dünya dışı cismin yörüngesinde çalışan ilk uzay aracı oldu. Ceres yörüngesinde kaldı.",en:"It became the first spacecraft to orbit two extraterrestrial destinations—Vesta and Ceres—and remains in orbit around Ceres."}, source:"https://science.nasa.gov/mission/dawn/toolkit/end-of-mission/" },
    { id:"near", unlock:"pioneer", zone:"deep", icon:"◆", year:"2001", color:"#f0b66f", name:{tr:"NEAR Shoemaker",en:"NEAR Shoemaker"}, tag:{tr:"EROS · İLK İNİŞ",en:"EROS · FIRST LANDING"}, fact:{tr:"Bir asteroitin yörüngesine giren ve sonra yüzeyine inen ilk uzay aracı oldu; iniş aracı olarak tasarlanmamıştı.",en:"It became the first spacecraft to orbit and then land on an asteroid—even though it was not designed as a lander."}, source:"https://science.nasa.gov/mission/near-shoemaker/" },
    { id:"kepler", unlock:"pioneer", zone:"deep", icon:"✧", year:"2009", color:"#ffdf91", name:{tr:"Kepler",en:"Kepler"}, tag:{tr:"ÖTEGEZEGEN · IŞIK",en:"EXOPLANET · STARLIGHT"}, fact:{tr:"Yıldız ışığındaki küçük geçiş düşüşlerini izleyerek binlerce ötegezegen keşfetti ve gezegenlerin galakside yaygın olduğunu gösterdi.",en:"It found thousands of exoplanets by watching tiny transit dips in starlight and showed that planets are common across the galaxy."}, source:"https://science.nasa.gov/mission/kepler/" }
  ];

  const defaultState = () => ({ version: 1, lang: "tr", sound: false, reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches, completed: [], sparks: 0 });
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem("signalSeekersState"));
      if (!saved || saved.version !== 1) return defaultState();
      const validCompleted = Array.isArray(saved.completed) ? saved.completed.filter(id => MISSIONS[id]) : [];
      return { ...defaultState(), ...saved, completed: [...new Set(validCompleted)], sparks: validCompleted.length * 3 };
    } catch { return defaultState(); }
  }
  let state = loadState();
  let currentScreen = "start";
  let currentMission = null;
  let game = null;
  let toastTimer = 0;

  function saveState() {
    try { localStorage.setItem("signalSeekersState", JSON.stringify(state)); } catch { /* Progress stays in memory when storage is unavailable. */ }
  }

  class SoundLab {
    constructor() { this.ctx = null; this.master = null; }
    ensure() {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.master = this.ctx.createGain(); this.master.gain.value = .12; this.master.connect(this.ctx.destination);
      }
      if (this.ctx.state === "suspended") this.ctx.resume();
    }
    tone(freq = 440, duration = .12, type = "sine", volume = .5, delay = 0) {
      if (!state.sound) return;
      this.ensure(); const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator(), gain = this.ctx.createGain();
      osc.type = type; osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(.0001, now); gain.gain.exponentialRampToValueAtTime(volume, now + .015); gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
      osc.connect(gain); gain.connect(this.master); osc.start(now); osc.stop(now + duration + .03);
    }
    click() { this.tone(520, .07, "triangle", .35); }
    collect() { this.tone(520,.1,"sine",.5); this.tone(780,.14,"sine",.45,.08); }
    success() { [523,659,784,1047].forEach((f,i)=>this.tone(f,.22,"triangle",.5,i*.09)); }
    error() { this.tone(155,.16,"sawtooth",.28); }
    pulse(index) { this.tone([260,370,520][index],.2,"sine",.5); }
  }
  const sound = new SoundLab();

  function setLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (COPY[lang][key] != null) el.textContent = COPY[lang][key]; });
    $$('.lang-btn').forEach(btn => { const active = btn.dataset.lang === lang; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active); });
    $('#explorer-name').placeholder = COPY[lang].namePlaceholder;
    updateUI();
    if (currentMission) configureMissionUI(currentMission);
    if (currentScreen === 'archive') renderMuseum($('.filter-btn.active')?.dataset.filter || 'all');
    saveState();
  }

  function showScreen(name) {
    if (game && name !== 'mission') { game.destroy(); game = null; }
    $$('.screen').forEach(el => el.classList.toggle('active', el.id === `${name}-screen`));
    currentScreen = name;
    window.scrollTo({ top: 0, behavior: state.reducedMotion ? 'auto' : 'smooth' });
    if (name === 'archive') renderMuseum($('.filter-btn.active')?.dataset.filter || 'all');
    if (name === 'finale') buildConstellation();
    const heading = $(`#${name}-screen h1, #${name}-screen h2`);
    if (heading) heading.tabIndex = -1;
    setTimeout(() => heading?.focus?.({ preventScroll: true }), 30);
  }

  function updateUI() {
    const count = state.completed.length;
    $('#spark-count').textContent = state.sparks;
    $('#progress-text').textContent = `${count}/5`;
    $('#progress-dots').innerHTML = Array.from({length:5}, (_,i)=>`<i class="${i<count?'done':''}"></i>`).join('');
    $('#legacy-percent').textContent = `${count * 20}%`;
    $('#legacy-fill').style.width = `${count * 20}%`;
    $$('.mission-node').forEach(node => node.classList.toggle('completed', state.completed.includes(node.dataset.mission)));
    const finale = $('#finale-btn');
    finale.disabled = count < 5;
    finale.querySelector('span').textContent = count === 5 ? COPY[state.lang].finaleReady : `${COPY[state.lang].finaleLocked.split('·')[0].trim()} · ${count}/5`;
    $('#sound-btn').setAttribute('aria-pressed', state.sound);
    $('#sound-btn').textContent = state.sound ? '♫' : '♪';
    $('#sound-btn').dataset.tooltipTr = state.sound ? 'Sesi kapat' : 'Sesi aç';
    $('#sound-btn').dataset.tooltipEn = state.sound ? 'Sound off' : 'Sound on';
    $('#motion-btn').setAttribute('aria-pressed', state.reducedMotion);
    document.documentElement.classList.toggle('reduced-motion', state.reducedMotion);
  }

  function announce(message) { $('#announcer').textContent = message; }
  function showToast(message, ms = 1800) {
    clearTimeout(toastTimer); const el = $('#game-toast'); el.textContent = message; el.classList.add('show');
    toastTimer = setTimeout(() => el.classList.remove('show'), ms);
  }

  function controlsFor(mission) {
    const items = mission.type === 'moon' ? [['useArrows','←↑↓→'],['aimFire','SPACE']]
      : mission.type === 'rover' ? [['leftRight','← →'],['usePointer','◎']]
      : mission.type === 'flight' ? [['holdFly','SPACE'],['usePointer','◎']]
      : mission.type === 'simon' ? [['repeatPattern','1 · 2 · 3'],['usePointer','◎']]
      : [['useArrows','←↑↓→'],['collectFragments','✦']];
    return items.map(([text,key])=>`<span><kbd>${key}</kbd>${COPY[state.lang][text]}</span>`).join('');
  }

  function configureMissionUI(mission) {
    $('#mission-location').textContent = tr(mission.location);
    $('#mission-title').textContent = tr(mission.title);
    $('#game-intro-title').textContent = tr(mission.title);
    $('#game-intro-copy').textContent = tr(mission.intro);
    $('#mission-icon').textContent = mission.icon;
    $('#mission-icon').style.color = mission.color;
    $('#mission-caption-text').textContent = tr(mission.caption);
    $('#control-hints').innerHTML = controlsFor(mission);
    $('#goal-text').textContent = mission.type === 'moon' ? '0 / 3' : mission.type === 'rover' ? '0 / 6' : mission.type === 'flight' ? '0 / 5' : mission.type === 'simon' ? '0 / 3' : '0 / 4';
    if (state.completed.includes(mission.id)) showToast(COPY[state.lang].alreadyComplete, 2400);
  }

  function openMission(id) {
    const mission = MISSIONS[id]; if (!mission) return;
    currentMission = mission; showScreen('mission'); configureMissionUI(mission);
    $('#game-intro').classList.remove('hidden');
    game = new MissionGame($('#game-canvas'), mission);
  }

  function openStory() {
    const m = currentMission; if (!m) return;
    $('#story-avatar').textContent = m.icon; $('#story-avatar').style.color = m.color;
    $('#story-title').textContent = tr(m.title); $('#story-quote').textContent = tr(m.quote); $('#story-fact').textContent = tr(m.fact);
    $('#story-source').href = m.source;
    $('#story-dialog').showModal();
    sound.success();
  }

  function openQuiz() {
    $('#story-dialog').close(); const q = currentMission.quiz;
    $('#quiz-title').textContent = tr(q.question); $('#quiz-feedback').textContent = '';
    $('#quiz-feedback').className = 'quiz-feedback'; $('#finish-mission-btn').classList.add('hidden');
    $('#quiz-options').innerHTML = q.options.map((o,i)=>`<button type="button" class="quiz-option" data-index="${i}"><span>${String.fromCharCode(65+i)}</span>${tr(o)}</button>`).join('');
    $$('.quiz-option', $('#quiz-options')).forEach(btn => btn.addEventListener('click', ()=>checkAnswer(btn)));
    $('#quiz-dialog').showModal();
  }

  function checkAnswer(button) {
    const q = currentMission.quiz, index = Number(button.dataset.index);
    if (index === q.correct) {
      sound.success(); button.classList.add('correct');
      $$('.quiz-option', $('#quiz-options')).forEach(b=>b.disabled=true);
      $('#quiz-feedback').textContent = COPY[state.lang].correct; $('#quiz-feedback').classList.add('success');
      $('#finish-mission-btn').classList.remove('hidden');
    } else {
      sound.error(); button.classList.remove('wrong'); void button.offsetWidth; button.classList.add('wrong');
      $('#quiz-feedback').textContent = `${COPY[state.lang].tryAgain} ${tr(q.hint)}`;
    }
  }

  function finishMission() {
    const id = currentMission.id;
    if (!state.completed.includes(id)) { state.completed.push(id); state.sparks = state.completed.length * 3; saveState(); burstConfetti(44); }
    $('#quiz-dialog').close(); updateUI(); announce(`${COPY[state.lang].completed}: ${tr(currentMission.title)}`);
    if (state.completed.length === 5) { setTimeout(()=>showScreen('finale'), 500); }
    else { showScreen('map'); }
  }

  function renderMuseum(filter = 'all') {
    $('#museum-grid').innerHTML = ARTIFACTS.filter(a=>filter==='all'||a.zone===filter).map(a=>{
      const unlocked = state.completed.includes(a.unlock);
      return `<article class="artifact-card ${unlocked?'':'locked'}" style="--artifact-color:${a.color}">
        <div class="artifact-visual"><span class="artifact-icon" aria-hidden="true">${a.icon}</span><span class="artifact-year">${a.year}</span></div>
        <span class="artifact-tag">${tr(a.tag)}</span><h3>${tr(a.name)}</h3><p>${tr(a.fact)}</p>
        <a href="${a.source}" target="_blank" rel="noopener">${COPY[state.lang].nasaSource} ↗</a>
        ${unlocked?'':`<div class="artifact-lock"><div><b>⌁</b><span>${COPY[state.lang].unlockHint}</span></div></div>`}
      </article>`;
    }).join('');
  }

  function burstConfetti(count = 30) {
    if (state.reducedMotion) return;
    const layer = $('#confetti'), colors = ['#53e7ff','#ffd66b','#ff765f','#8e80ff','#7fffc5'];
    for (let i=0;i<count;i++) {
      const bit = document.createElement('i'); bit.className='confetti';
      bit.style.left=`${rand(5,95)}%`; bit.style.setProperty('--c',colors[i%colors.length]); bit.style.setProperty('--d',`${rand(2.2,4.5)}s`); bit.style.setProperty('--r',`${rand(0,180)}deg`); bit.style.setProperty('--x',`${rand(-180,180)}px`);
      layer.append(bit); setTimeout(()=>bit.remove(),4700);
    }
  }

  function buildConstellation() {
    const host = $('#constellation'); host.innerHTML='';
    const points = [[18,22],[65,12],[76,49],[55,77],[16,66]];
    for (let i=0;i<points.length-1;i++) {
      const [x1,y1]=points[i],[x2,y2]=points[i+1], dx=x2-x1,dy=y2-y1, len=Math.hypot(dx,dy),angle=Math.atan2(dy,dx)*180/Math.PI;
      const line=document.createElement('i'); line.className='constellation-line'; line.style.cssText=`left:${x1+5}%;top:${y1+6}%;width:${len}%;transform:rotate(${angle}deg);animation-delay:${i*.18}s`; host.append(line);
    }
    Object.values(MISSIONS).forEach((m,i)=>{ const star=document.createElement('span');star.className='constellation-star';star.textContent=m.icon;star.style.cssText=`left:${points[i][0]}%;top:${points[i][1]}%;color:${m.color};animation-delay:${.2+i*.15}s,${1+i*.2}s`;star.title=tr(m.title);host.append(star); });
    burstConfetti(65);
  }

  class SkyField {
    constructor(canvas) {
      this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.stars=[]; this.shooting=null; this.last=0;
      this.resize=()=>this.onResize(); addEventListener('resize',this.resize); this.onResize(); requestAnimationFrame(t=>this.loop(t));
    }
    onResize(){ const dpr=Math.min(devicePixelRatio||1,2),w=innerWidth,h=innerHeight;this.canvas.width=w*dpr;this.canvas.height=h*dpr;this.canvas.style.width=`${w}px`;this.canvas.style.height=`${h}px`;this.ctx.setTransform(dpr,0,0,dpr,0,0);this.w=w;this.h=h;const n=state.reducedMotion?45:Math.min(150,Math.floor(w*h/8000));this.stars=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:rand(.35,1.6),a:rand(.25,.9),s:rand(.25,1)}));}
    loop(t){ const dt=Math.min((t-this.last)/1000,.05)||0;this.last=t;const c=this.ctx;c.clearRect(0,0,this.w,this.h);for(const s of this.stars){if(!state.reducedMotion){s.y+=s.s*dt*4;if(s.y>this.h){s.y=0;s.x=Math.random()*this.w}}c.globalAlpha=s.a*(.7+.3*Math.sin(t*.001*s.s+s.x));c.fillStyle='#dff8ff';c.beginPath();c.arc(s.x,s.y,s.r,0,Math.PI*2);c.fill()}c.globalAlpha=1;if(!state.reducedMotion&&Math.random()<dt*.035&&!this.shooting)this.shooting={x:rand(this.w*.25,this.w*.9),y:-20,v:rand(280,420),life:1};if(this.shooting){const s=this.shooting;s.x-=s.v*dt;s.y+=s.v*.55*dt;s.life-=dt*.8;const g=c.createLinearGradient(s.x,s.y,s.x+85,s.y-46);g.addColorStop(0,`rgba(255,214,107,${Math.max(0,s.life)})`);g.addColorStop(1,'transparent');c.strokeStyle=g;c.lineWidth=2;c.beginPath();c.moveTo(s.x,s.y);c.lineTo(s.x+85,s.y-46);c.stroke();if(s.life<=0)this.shooting=null}requestAnimationFrame(n=>this.loop(n));}
  }

  class MissionGame {
    constructor(canvas, mission) {
      this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.mission=mission; this.w=960; this.h=540;
      this.started=false; this.finished=false; this.destroyed=false; this.last=performance.now(); this.time=0; this.keys={}; this.action=false; this.pointer={x:480,y:270,active:false}; this.listeners=[];
      this.stars=Array.from({length:70},()=>({x:rand(0,960),y:rand(0,540),r:rand(.4,1.8),a:rand(.25,.9),v:rand(3,18)}));
      this.bindInput(); this.reset(); this.frame=requestAnimationFrame(t=>this.loop(t));
    }
    listen(target,event,fn,opts){target.addEventListener(event,fn,opts);this.listeners.push(()=>target.removeEventListener(event,fn,opts));}
    bindInput(){
      const keyDown=e=>{if(currentScreen!=='mission')return;const key=e.key.toLowerCase();if(['arrowleft','arrowright','arrowup','arrowdown',' ','w','a','s','d','1','2','3'].includes(key))e.preventDefault();this.keys[key]=true;if(key===' '){this.action=true;this.triggerAction();}if(this.mission.type==='simon'&&['1','2','3'].includes(key))this.inputPad(Number(key)-1);};
      const keyUp=e=>{const key=e.key.toLowerCase();this.keys[key]=false;if(key===' ')this.action=false;};
      this.listen(window,'keydown',keyDown);this.listen(window,'keyup',keyUp);
      const pointerPos=e=>{const r=this.canvas.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*this.w,y:(e.clientY-r.top)/r.height*this.h};};
      this.listen(this.canvas,'pointerdown',e=>{e.preventDefault();this.pointer={...pointerPos(e),active:true};this.action=true;this.canvas.setPointerCapture?.(e.pointerId);if(this.mission.type==='rover')this.data.targetX=this.pointer.x;if(this.mission.type==='simon')this.padFromPoint(this.pointer.x,this.pointer.y);else this.triggerAction();});
      this.listen(this.canvas,'pointermove',e=>{if(e.pointerType==='mouse'||this.pointer.active){const p=pointerPos(e);this.pointer.x=p.x;this.pointer.y=p.y;}});
      const pointerUp=e=>{this.pointer.active=false;this.action=false;try{this.canvas.releasePointerCapture?.(e.pointerId);}catch{}};
      this.listen(this.canvas,'pointerup',pointerUp);this.listen(this.canvas,'pointercancel',pointerUp);
      const controls={left:'arrowleft',right:'arrowright',up:'arrowup',down:'arrowdown'};
      Object.entries(controls).forEach(([id,key])=>{
        const el=$(`#control-${id}`);const down=e=>{e.preventDefault();this.keys[key]=true;el.classList.add('pressed');};const up=e=>{e.preventDefault();this.keys[key]=false;el.classList.remove('pressed');};
        this.listen(el,'pointerdown',down);this.listen(el,'pointerup',up);this.listen(el,'pointercancel',up);this.listen(el,'pointerleave',up);
      });
      const act=$('#control-action');const aDown=e=>{e.preventDefault();this.action=true;act.classList.add('pressed');this.triggerAction();};const aUp=e=>{e.preventDefault();this.action=false;act.classList.remove('pressed');};
      this.listen(act,'pointerdown',aDown);this.listen(act,'pointerup',aUp);this.listen(act,'pointercancel',aUp);this.listen(act,'pointerleave',aUp);
    }
    reset(){
      this.finished=false;this.time=0;
      if(this.mission.type==='moon')this.data={hits:0,aimX:470,aimY:260,beam:0,cool:0,targetX:760,targetY:350};
      if(this.mission.type==='rover')this.data={score:0,x:480,targetX:480,items:[],spawn:.25,hit:0,dust:[]};
      if(this.mission.type==='flight')this.data={score:0,y:270,vy:0,rings:[{x:810,y:rand(130,410)}],dust:[],tilt:0};
      if(this.mission.type==='simon')this.data={round:0,sequence:[],phase:'idle',timer:0,showIndex:0,lit:-1,userIndex:0,ripples:[]};
      if(this.mission.type==='space')this.data={score:0,x:145,y:270,vx:0,vy:0,fragments:[],asteroids:[],spawnFragment:.3,spawnRock:.6,hit:0,trail:[]};
    }
    launch(){
      this.reset();this.started=true;$('#game-intro').classList.add('hidden');this.last=performance.now();
      if(this.mission.type==='simon')this.nextSimonRound();
      showToast(tr(this.mission.caption),2500);sound.click();
    }
    destroy(){this.destroyed=true;cancelAnimationFrame(this.frame);this.listeners.forEach(fn=>fn());this.listeners=[];}
    triggerAction(){
      if(!this.started)return;
      if(this.finished){openStory();return;}
      if(this.mission.type==='moon')this.fireLaser();
    }
    goal(value,total){$('#goal-text').textContent=`${value} / ${total}`;}
    complete(){
      if(this.finished||this.destroyed||currentScreen!=='mission')return;this.finished=true;this.action=false;sound.success();showToast(COPY[state.lang].completed,1500);burstConfetti(28);setTimeout(()=>{if(!this.destroyed&&currentScreen==='mission')openStory();},900);
    }
    loop(now){
      if(this.destroyed)return;const dt=Math.min((now-this.last)/1000,.034)||0;this.last=now;this.time+=state.reducedMotion?0:dt;
      if(this.started&&!this.finished){if(this.mission.type==='moon')this.updateMoon(dt);if(this.mission.type==='rover')this.updateRover(dt);if(this.mission.type==='flight')this.updateFlight(dt);if(this.mission.type==='simon')this.updateSimon(dt);if(this.mission.type==='space')this.updateSpace(dt);}
      this.draw();this.frame=requestAnimationFrame(t=>this.loop(t));
    }
    draw(){
      const c=this.ctx;c.clearRect(0,0,this.w,this.h);
      if(this.mission.type==='moon')this.drawMoon(c);if(this.mission.type==='rover')this.drawRover(c);if(this.mission.type==='flight')this.drawFlight(c);if(this.mission.type==='simon')this.drawSimon(c);if(this.mission.type==='space')this.drawSpace(c);
      if(this.finished)this.drawSuccess(c);
    }
    drawStars(c,speed=1){
      for(const s of this.stars){const x=(s.x-this.time*s.v*speed+1920)%960;c.globalAlpha=s.a;c.fillStyle='#dff8ff';c.beginPath();c.arc(x,s.y,s.r,0,Math.PI*2);c.fill();}c.globalAlpha=1;
    }
    roundRect(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}}
    drawSuccess(c){
      c.save();c.fillStyle='rgba(3,9,25,.72)';c.fillRect(0,0,960,540);c.translate(480,265);const glow=c.createRadialGradient(0,0,5,0,0,120);glow.addColorStop(0,'rgba(83,231,255,.26)');glow.addColorStop(1,'transparent');c.fillStyle=glow;c.beginPath();c.arc(0,0,130,0,Math.PI*2);c.fill();c.fillStyle=this.mission.color;c.font='700 62px Trebuchet MS';c.textAlign='center';c.fillText(this.mission.icon,0,-35);c.fillStyle='#f7fbff';c.font='900 30px Trebuchet MS';c.fillText(COPY[state.lang].completed,0,20);c.fillStyle='#b9c8e2';c.font='600 16px Segoe UI';c.fillText(state.lang==='tr'?'Anı sinyalini açmak için Eylem’e bas.':'Press Action to open the memory signal.',0,57);c.restore();
    }

    updateMoon(dt){
      const d=this.data;d.cool=Math.max(0,d.cool-dt);d.beam=Math.max(0,d.beam-dt);
      d.targetX=750+Math.sin(this.time*.8+d.hits)*82;d.targetY=345+Math.sin(this.time*1.23)*24;
      const speed=280;if(this.keys.arrowleft||this.keys.a)d.aimX-=speed*dt;if(this.keys.arrowright||this.keys.d)d.aimX+=speed*dt;if(this.keys.arrowup||this.keys.w)d.aimY-=speed*dt;if(this.keys.arrowdown||this.keys.s)d.aimY+=speed*dt;
      if(this.pointer.active||this.pointer.x!==480){d.aimX=lerp(d.aimX,this.pointer.x,.18);d.aimY=lerp(d.aimY,this.pointer.y,.18);}
      d.aimX=clamp(d.aimX,220,900);d.aimY=clamp(d.aimY,95,440);
    }
    fireLaser(){
      const d=this.data;if(d.cool>0)return;d.cool=.45;d.beam=.32;sound.tone(620,.22,'sine',.5);
      const hit=Math.hypot(d.aimX-d.targetX,d.aimY-d.targetY)<58;
      if(hit){d.hits=Math.min(3,d.hits+1);this.goal(d.hits,3);sound.collect();showToast(state.lang==='tr'?'Temiz yansıma! Işık Dünya’ya döndü.':'Clean reflection! The light returned to Earth.');if(d.hits>=3)setTimeout(()=>this.complete(),380);}
      else{sound.error();showToast(state.lang==='tr'?'Işın aynayı kaçırdı — parlayan hedefe yaklaş.':'The beam missed — move closer to the glowing target.');}
    }
    drawMoon(c){
      const g=c.createLinearGradient(0,0,0,540);g.addColorStop(0,'#07152f');g.addColorStop(.58,'#17284a');g.addColorStop(.59,'#4e5263');g.addColorStop(1,'#191f32');c.fillStyle=g;c.fillRect(0,0,960,540);this.drawStars(c,.12);
      c.fillStyle='#2d3449';c.beginPath();c.moveTo(0,410);for(let x=0;x<=960;x+=55)c.lineTo(x,405+Math.sin(x*.027)*22+Math.sin(x*.011)*16);c.lineTo(960,540);c.lineTo(0,540);c.fill();
      for(let i=0;i<16;i++){const x=(i*113+31)%960,y=445+(i%3)*30;c.fillStyle='rgba(11,17,32,.28)';c.beginPath();c.ellipse(x,y,18+i%4*5,7+i%3*2,0,0,Math.PI*2);c.fill();}
      // Earth
      const eg=c.createRadialGradient(100,78,8,112,90,55);eg.addColorStop(0,'#b9fbff');eg.addColorStop(.3,'#4aaee8');eg.addColorStop(.72,'#1768b0');eg.addColorStop(1,'#08285c');c.fillStyle=eg;c.beginPath();c.arc(112,90,51,0,Math.PI*2);c.fill();c.fillStyle='rgba(125,240,182,.65)';c.beginPath();c.ellipse(96,76,16,9,.3,0,Math.PI*2);c.ellipse(126,108,13,7,-.2,0,Math.PI*2);c.fill();c.strokeStyle='rgba(83,231,255,.3)';c.beginPath();c.arc(112,90,63,0,Math.PI*2);c.stroke();
      // reflector
      const d=this.data,x=d.targetX,y=d.targetY;const pulse=1+Math.sin(this.time*4)*.06;c.save();c.translate(x,y);c.scale(pulse,pulse);c.shadowColor='#53e7ff';c.shadowBlur=24;c.fillStyle='#d9fbff';c.fillRect(-34,-18,68,36);c.shadowBlur=0;c.strokeStyle='#4a728f';c.lineWidth=3;for(let ix=-27;ix<30;ix+=12)for(let iy=-12;iy<13;iy+=12)c.strokeRect(ix,iy,10,10);c.fillStyle='#7489a0';c.fillRect(-4,18,8,28);c.restore();
      // LRV character
      c.save();c.translate(615,392);c.fillStyle='#c8d4df';c.fillRect(-43,-30,86,27);c.fillStyle='#101a31';c.fillRect(-35,-25,70,17);c.fillStyle='#53e7ff';c.fillRect(-25,-20,18,7);c.fillStyle='#ffd66b';c.beginPath();c.arc(13,-16,4,0,Math.PI*2);c.fill();c.strokeStyle='#b9f6ff';c.lineWidth=3;c.beginPath();c.moveTo(31,-30);c.lineTo(42,-57);c.stroke();c.fillStyle='#ff765f';c.beginPath();c.arc(43,-59,5,0,Math.PI*2);c.fill();for(const wx of [-32,32]){c.fillStyle='#252a37';c.beginPath();c.arc(wx,2,15,0,Math.PI*2);c.fill();c.strokeStyle='#88909c';c.beginPath();c.arc(wx,2,7,0,Math.PI*2);c.stroke();}c.restore();
      // aiming reticle and beam
      c.strokeStyle='rgba(255,214,107,.9)';c.lineWidth=2;c.beginPath();c.arc(d.aimX,d.aimY,25,0,Math.PI*2);c.moveTo(d.aimX-39,d.aimY);c.lineTo(d.aimX-16,d.aimY);c.moveTo(d.aimX+16,d.aimY);c.lineTo(d.aimX+39,d.aimY);c.moveTo(d.aimX,d.aimY-39);c.lineTo(d.aimX,d.aimY-16);c.moveTo(d.aimX,d.aimY+16);c.lineTo(d.aimX,d.aimY+39);c.stroke();
      if(d.beam>0){const hit=Math.hypot(d.aimX-x,d.aimY-y)<58;c.save();c.shadowColor=hit?'#53e7ff':'#ff765f';c.shadowBlur=18;c.strokeStyle=hit?'#b9f6ff':'#ff8a78';c.lineWidth=4;c.beginPath();c.moveTo(112,90);c.lineTo(d.aimX,d.aimY);if(hit)c.lineTo(112,90);c.stroke();c.restore();}
      c.fillStyle='#dce9f8';c.font='700 14px Segoe UI';c.textAlign='left';c.fillText(state.lang==='tr'?'DÜNYA LAZERİ':'EARTH LASER',42,165);c.fillStyle='#53e7ff';c.fillText(`${d.hits}/3`,42,187);
    }

    updateRover(dt){
      const d=this.data;d.hit=Math.max(0,d.hit-dt);const speed=360;if(this.keys.arrowleft||this.keys.a)d.targetX-=speed*dt;if(this.keys.arrowright||this.keys.d)d.targetX+=speed*dt;if(this.pointer.active)d.targetX=this.pointer.x;d.targetX=clamp(d.targetX,85,875);d.x=lerp(d.x,d.targetX,Math.min(1,dt*9));
      d.spawn-=dt;if(d.spawn<=0){const clue=Math.random()<.64;d.items.push({x:rand(75,885),y:-35,type:clue?'clue':'rock',r:clue?17:rand(22,34),vy:rand(125,175),spin:rand(0,6)});d.spawn=rand(.52,.9);}
      for(const item of d.items){item.y+=item.vy*dt;item.spin+=dt*1.5;if(item.y>405&&item.y<485&&Math.abs(item.x-d.x)<48){item.dead=true;if(item.type==='clue'){d.score=Math.min(6,d.score+1);sound.collect();this.goal(d.score,6);showToast(state.lang==='tr'?'Hematit ipucu bulundu!':'Hematite clue found!',850);if(d.score>=6)setTimeout(()=>this.complete(),300);}else if(d.hit<=0){d.hit=.85;sound.error();showToast(state.lang==='tr'?'Kayalık! Piko süspansiyonu dengeledi.':'Rocky patch! Piko stabilized the suspension.',1100);}}}
      d.items=d.items.filter(i=>!i.dead&&i.y<570);if(Math.random()<dt*22)d.dust.push({x:d.x+rand(-35,35),y:470,vx:rand(-35,35),vy:rand(-35,-10),life:1});for(const p of d.dust){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt*1.7;}d.dust=d.dust.filter(p=>p.life>0);
    }
    drawRover(c){
      const sky=c.createLinearGradient(0,0,0,540);sky.addColorStop(0,'#351b38');sky.addColorStop(.55,'#b34845');sky.addColorStop(1,'#552333');c.fillStyle=sky;c.fillRect(0,0,960,540);c.fillStyle='rgba(255,170,110,.35)';c.beginPath();c.arc(760,110,66,0,Math.PI*2);c.fill();
      c.fillStyle='#6b2937';c.beginPath();c.moveTo(0,360);for(let x=0;x<=960;x+=80)c.lineTo(x,315+Math.sin(x*.018)*45);c.lineTo(960,540);c.lineTo(0,540);c.fill();c.fillStyle='#9e473d';c.fillRect(0,398,960,142);
      for(let i=0;i<45;i++){const x=(i*97+22)%960,y=420+(i*37)%120;c.fillStyle=`rgba(70,25,30,${.15+(i%4)*.05})`;c.beginPath();c.ellipse(x,y,rand(4,13),rand(2,5),0,0,Math.PI*2);c.fill();}
      const d=this.data;for(const item of d.items){c.save();c.translate(item.x,item.y);c.rotate(item.spin);if(item.type==='clue'){c.shadowColor='#53e7ff';c.shadowBlur=22;c.fillStyle='#7cf4ff';c.beginPath();c.arc(0,0,item.r,0,Math.PI*2);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(-5,-6,4,0,Math.PI*2);c.fill();c.shadowBlur=0;c.strokeStyle='#0e7894';c.lineWidth=3;c.beginPath();c.arc(0,0,item.r-6,0,Math.PI*2);c.stroke();}else{c.fillStyle='#512a31';c.beginPath();for(let i=0;i<7;i++){const a=i/7*Math.PI*2,r=item.r*(.75+(i%3)*.12);c.lineTo(Math.cos(a)*r,Math.sin(a)*r);}c.closePath();c.fill();c.strokeStyle='#7d3e3d';c.stroke();}c.restore();}
      for(const p of d.dust){c.globalAlpha=p.life;c.fillStyle='#e49561';c.beginPath();c.arc(p.x,p.y,5*(1-p.life)+2,0,Math.PI*2);c.fill();}c.globalAlpha=1;
      c.save();c.translate(d.x,442+(d.hit>0?Math.sin(this.time*45)*5:Math.sin(this.time*5)*2));c.strokeStyle='#d5edf2';c.lineWidth=4;c.beginPath();c.moveTo(18,-58);c.lineTo(34,-95);c.stroke();c.fillStyle='#53e7ff';c.beginPath();c.arc(36,-98,6,0,Math.PI*2);c.fill();c.fillStyle='#d8e1dc';this.roundRect(c,-62,-65,124,43,10,'#c7d2d3','#f1ffff');c.fillStyle='#132744';this.roundRect(c,-40,-57,80,26,7,'#132744');c.fillStyle='#53e7ff';c.beginPath();c.arc(-18,-44,5,0,Math.PI*2);c.arc(18,-44,5,0,Math.PI*2);c.fill();c.strokeStyle='#ffd66b';c.beginPath();c.arc(0,-37,9,.2,Math.PI-.2);c.stroke();for(const wx of [-47,0,47]){c.fillStyle='#24222b';c.beginPath();c.arc(wx,-7,21,0,Math.PI*2);c.fill();c.strokeStyle='#e2ac71';c.lineWidth=4;c.beginPath();c.arc(wx,-7,12,0,Math.PI*2);c.stroke();}c.fillStyle='#e8c276';c.fillRect(-70,-26,140,8);c.restore();
      c.fillStyle='rgba(4,11,27,.58)';this.roundRect(c,25,24,170,55,16,'rgba(4,11,27,.58)','rgba(83,231,255,.25)');c.fillStyle='#b9f6ff';c.font='800 13px Segoe UI';c.fillText(state.lang==='tr'?'SU İPUÇLARI':'WATER CLUES',44,47);c.fillStyle='#ffd66b';c.font='900 22px Trebuchet MS';c.fillText(`${d.score}/6`,44,70);
    }

    updateFlight(dt){
      const d=this.data, thrust=this.action||this.keys.arrowup||this.keys.w;d.vy+= (thrust?-520:285)*dt;d.vy*=Math.pow(.985,dt*60);d.vy=clamp(d.vy,-250,235);d.y+=d.vy*dt;if(d.y<75){d.y=75;d.vy=35}if(d.y>455){d.y=455;d.vy=-50}d.tilt=lerp(d.tilt,clamp(d.vy/420,-.42,.42),.12);
      for(const ring of d.rings){ring.x-=185*dt;if(!ring.checked&&ring.x<265){ring.checked=true;if(Math.abs(ring.y-d.y)<74){d.score=Math.min(5,d.score+1);sound.collect();this.goal(d.score,5);showToast(state.lang==='tr'?`Uçuş ${d.score}: temiz geçiş!`:`Flight ${d.score}: clean pass!`,850);if(d.score>=5)setTimeout(()=>this.complete(),350);}else{sound.tone(180,.12,'triangle',.25);showToast(state.lang==='tr'?'Halka kaçtı — yenisi yaklaşıyor.':'Ring missed — another is approaching.',850);}}}
      d.rings=d.rings.filter(r=>r.x>-90);if(!d.rings.length||d.rings[d.rings.length-1].x<590)d.rings.push({x:1020,y:rand(120,420),checked:false});
      if(Math.random()<dt*35)d.dust.push({x:180+rand(-18,18),y:d.y+25,vx:rand(-110,-55),vy:rand(-25,25),life:1});for(const p of d.dust){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt*2.2;}d.dust=d.dust.filter(p=>p.life>0);
    }
    drawFlight(c){
      const g=c.createLinearGradient(0,0,0,540);g.addColorStop(0,'#1c2348');g.addColorStop(.6,'#c16a59');g.addColorStop(1,'#733137');c.fillStyle=g;c.fillRect(0,0,960,540);c.globalAlpha=.22;this.drawStars(c,.05);c.globalAlpha=1;
      c.fillStyle='rgba(255,212,151,.15)';for(let i=0;i<7;i++){c.beginPath();c.ellipse((i*173-this.time*28)%1100,150+i%3*90,100,20,-.15,0,Math.PI*2);c.fill();}
      c.fillStyle='#582735';c.beginPath();c.moveTo(0,480);for(let x=0;x<=960;x+=55)c.lineTo(x,450+Math.sin(x*.025)*21);c.lineTo(960,540);c.lineTo(0,540);c.fill();
      const d=this.data;for(const ring of d.rings){c.save();c.translate(ring.x,ring.y);const glow=c.createRadialGradient(0,0,34,0,0,78);glow.addColorStop(0,'transparent');glow.addColorStop(.75,'rgba(83,231,255,.08)');glow.addColorStop(1,'transparent');c.fillStyle=glow;c.beginPath();c.arc(0,0,80,0,Math.PI*2);c.fill();c.strokeStyle=ring.checked?'rgba(255,255,255,.18)':'#53e7ff';c.shadowColor='#53e7ff';c.shadowBlur=16;c.lineWidth=8;c.beginPath();c.arc(0,0,61,0,Math.PI*2);c.stroke();c.shadowBlur=0;c.strokeStyle='rgba(255,214,107,.7)';c.lineWidth=2;c.setLineDash([7,8]);c.beginPath();c.arc(0,0,73,this.time,this.time+Math.PI*1.5);c.stroke();c.setLineDash([]);c.restore();}
      for(const p of d.dust){c.globalAlpha=p.life;c.fillStyle='#ffd6a1';c.beginPath();c.arc(p.x,p.y,3,0,Math.PI*2);c.fill();}c.globalAlpha=1;
      c.save();c.translate(220,d.y);c.rotate(d.tilt);c.strokeStyle='#d8fbff';c.lineWidth=4;c.beginPath();c.moveTo(0,-39);c.lineTo(0,-7);c.stroke();c.save();c.translate(0,-39);c.scale(Math.max(.18,Math.abs(Math.sin(this.time*35))),1);c.strokeStyle='#b9f6ff';c.lineWidth=5;c.beginPath();c.moveTo(-62,0);c.lineTo(62,0);c.stroke();c.restore();c.save();c.translate(0,-25);c.scale(Math.max(.18,Math.abs(Math.cos(this.time*31))),1);c.strokeStyle='#7ecfe0';c.lineWidth=4;c.beginPath();c.moveTo(-55,0);c.lineTo(55,0);c.stroke();c.restore();c.fillStyle='#c7d4d7';this.roundRect(c,-26,-8,52,47,12,'#c7d4d7','#efffff');c.fillStyle='#102947';this.roundRect(c,-17,2,34,19,7,'#102947');c.fillStyle='#53e7ff';c.beginPath();c.arc(-7,11,3.5,0,Math.PI*2);c.arc(7,11,3.5,0,Math.PI*2);c.fill();c.strokeStyle='#ffd66b';c.lineWidth=2;c.beginPath();c.arc(0,17,7,.2,Math.PI-.2);c.stroke();c.strokeStyle='#d8fbff';c.beginPath();c.moveTo(-17,37);c.lineTo(-27,54);c.moveTo(17,37);c.lineTo(27,54);c.moveTo(-37,54);c.lineTo(-17,54);c.moveTo(17,54);c.lineTo(37,54);c.stroke();c.restore();
      this.roundRect(c,25,24,150,55,16,'rgba(4,11,27,.58)','rgba(83,231,255,.25)');c.fillStyle='#b9f6ff';c.font='800 13px Segoe UI';c.fillText(state.lang==='tr'?'UÇUŞLAR':'FLIGHTS',44,47);c.fillStyle='#ffd66b';c.font='900 22px Trebuchet MS';c.fillText(`${d.score}/5`,44,70);
    }

    nextSimonRound(){
      const d=this.data;d.sequence=Array.from({length:d.round+2},()=>Math.floor(Math.random()*3));d.phase='prepare';d.timer=.8;d.showIndex=0;d.lit=-1;d.userIndex=0;showToast(state.lang==='tr'?'Dalgaları dinle…':'Listen to the waves…',900);
    }
    updateSimon(dt){
      const d=this.data;for(const r of d.ripples){r.radius+=dt*80;r.life-=dt*1.2;}d.ripples=d.ripples.filter(r=>r.life>0);
      if(d.phase==='prepare'){d.timer-=dt;if(d.timer<=0){d.phase='showOn';d.showIndex=0;d.lit=d.sequence[0];d.timer=.55;sound.pulse(d.lit);}}
      else if(d.phase==='showOn'){d.timer-=dt;if(d.timer<=0){d.lit=-1;d.phase='showOff';d.timer=.18;}}
      else if(d.phase==='showOff'){d.timer-=dt;if(d.timer<=0){d.showIndex++;if(d.showIndex>=d.sequence.length){d.phase='user';d.userIndex=0;showToast(state.lang==='tr'?'Sıra sende!':'Your turn!',850);}else{d.lit=d.sequence[d.showIndex];d.phase='showOn';d.timer=.55;sound.pulse(d.lit);}}}
    }
    inputPad(index){
      const d=this.data;if(!this.started||this.finished||d.phase!=='user')return;d.lit=index;setTimeout(()=>{if(!this.destroyed&&d.phase==='user')d.lit=-1;},180);sound.pulse(index);d.ripples.push({index,radius:22,life:1});
      if(index!==d.sequence[d.userIndex]){sound.error();d.phase='prepare';d.timer=.9;d.showIndex=0;d.lit=-1;d.userIndex=0;showToast(state.lang==='tr'?'Bu titreşim farklıydı — diziyi yeniden dinle.':'That vibration was different — listen to the sequence again.',1300);return;}
      d.userIndex++;if(d.userIndex>=d.sequence.length){d.round++;this.goal(d.round,3);sound.collect();if(d.round>=3)setTimeout(()=>this.complete(),450);else{d.phase='prepare';d.timer=1.1;showToast(state.lang==='tr'?`Katman ${d.round} açıldı!`:`Layer ${d.round} revealed!`,950);setTimeout(()=>{if(!this.destroyed&&!this.finished)this.nextSimonRound();},800);}}
    }
    padFromPoint(x,y){const centers=[280,480,680];for(let i=0;i<3;i++)if(Math.hypot(x-centers[i],y-385)<75){this.inputPad(i);break;}}
    drawSimon(c){
      const g=c.createRadialGradient(480,410,20,480,250,520);g.addColorStop(0,'#492440');g.addColorStop(.5,'#161c40');g.addColorStop(1,'#080d25');c.fillStyle=g;c.fillRect(0,0,960,540);this.drawStars(c,.03);
      // Mars cutaway
      c.save();c.translate(480,110);c.fillStyle='#d86857';c.beginPath();c.arc(0,150,330,0,Math.PI,true);c.lineTo(-330,250);c.lineTo(330,250);c.closePath();c.fill();c.fillStyle='#843c4a';c.beginPath();c.arc(0,150,250,0,Math.PI,true);c.lineTo(-250,250);c.lineTo(250,250);c.closePath();c.fill();c.fillStyle='#45243d';c.beginPath();c.arc(0,150,162,0,Math.PI,true);c.lineTo(-162,250);c.lineTo(162,250);c.closePath();c.fill();c.fillStyle='#f0a35f';c.beginPath();c.arc(0,150,76,0,Math.PI,true);c.lineTo(-76,250);c.lineTo(76,250);c.closePath();c.fill();c.restore();
      // lander
      c.save();c.translate(480,190);c.strokeStyle='#d6f3f6';c.lineWidth=4;c.beginPath();c.moveTo(-30,18);c.lineTo(-75,77);c.moveTo(30,18);c.lineTo(75,77);c.moveTo(-92,78);c.lineTo(-56,78);c.moveTo(56,78);c.lineTo(92,78);c.stroke();c.fillStyle='#d6dfe0';this.roundRect(c,-38,-25,76,55,11,'#d6dfe0','#ffffff');c.fillStyle='#132947';this.roundRect(c,-25,-14,50,25,7,'#132947');c.fillStyle='#53e7ff';c.beginPath();c.arc(-10,-2,4,0,Math.PI*2);c.arc(10,-2,4,0,Math.PI*2);c.fill();c.strokeStyle='#ffd66b';c.beginPath();c.arc(0,7,9,.1,Math.PI-.1);c.stroke();c.fillStyle='#8e80ff';c.beginPath();c.arc(0,51,26,0,Math.PI*2);c.fill();c.strokeStyle='#c6beff';c.beginPath();c.arc(0,51,15,0,Math.PI*2);c.stroke();c.restore();
      // seismic line
      c.strokeStyle='rgba(83,231,255,.65)';c.lineWidth=2;c.beginPath();for(let x=0;x<960;x+=4){const amp=7+13*Math.max(0,Math.sin((x-this.time*130)*.045));const y=290+Math.sin((x-this.time*150)*.08)*amp*(x>330&&x<630?1:.25);if(x===0)c.moveTo(x,y);else c.lineTo(x,y);}c.stroke();
      const d=this.data,colors=['#53e7ff','#8e80ff','#ffd66b'],labels=state.lang==='tr'?['KABUK','MANTO','ÇEKİRDEK']:['CRUST','MANTLE','CORE'];[280,480,680].forEach((x,i)=>{const active=d.lit===i;c.save();c.translate(x,405);c.shadowColor=colors[i];c.shadowBlur=active?35:8;c.fillStyle=active?colors[i]:'rgba(13,31,65,.95)';c.beginPath();c.arc(0,0,63,0,Math.PI*2);c.fill();c.lineWidth=3;c.strokeStyle=colors[i];c.stroke();c.fillStyle=active?'#071329':'#eef7ff';c.font='900 26px Trebuchet MS';c.textAlign='center';c.fillText(String(i+1),0,9);c.fillStyle=active?'#071329':'#aebddd';c.font='800 10px Segoe UI';c.fillText(labels[i],0,31);c.restore();});
      for(const r of d.ripples){c.globalAlpha=r.life;c.strokeStyle=colors[r.index];c.lineWidth=2;c.beginPath();c.arc([280,480,680][r.index],405,r.radius,0,Math.PI*2);c.stroke();}c.globalAlpha=1;
      this.roundRect(c,25,24,180,55,16,'rgba(4,11,27,.58)','rgba(142,128,255,.3)');c.fillStyle='#c8c2ff';c.font='800 13px Segoe UI';c.fillText(state.lang==='tr'?'AÇILAN KATMAN':'LAYER REVEALED',44,47);c.fillStyle='#ffd66b';c.font='900 22px Trebuchet MS';c.fillText(`${d.round}/3`,44,70);
    }

    updateSpace(dt){
      const d=this.data;d.hit=Math.max(0,d.hit-dt);const ax=370,ay=370;if(this.keys.arrowleft||this.keys.a)d.vx-=ax*dt;if(this.keys.arrowright||this.keys.d)d.vx+=ax*dt;if(this.keys.arrowup||this.keys.w)d.vy-=ay*dt;if(this.keys.arrowdown||this.keys.s)d.vy+=ay*dt;if(this.pointer.active){d.vx+=(this.pointer.x-d.x)*dt*2;d.vy+=(this.pointer.y-d.y)*dt*2;}d.vx*=Math.pow(.91,dt*60);d.vy*=Math.pow(.91,dt*60);d.x=clamp(d.x+d.vx*dt,55,905);d.y=clamp(d.y+d.vy*dt,70,485);
      d.spawnFragment-=dt;d.spawnRock-=dt;if(d.spawnFragment<=0&&d.fragments.length<2){d.fragments.push({x:1000,y:rand(90,465),vy:rand(-12,12),spin:0});d.spawnFragment=rand(2.1,3.3);}if(d.spawnRock<=0){d.asteroids.push({x:1010,y:rand(70,480),r:rand(18,34),vy:rand(-18,18),spin:rand(0,6)});d.spawnRock=rand(.65,1.1);}
      for(const f of d.fragments){f.x-=115*dt;f.y+=f.vy*dt;f.spin+=dt;if(Math.hypot(f.x-d.x,f.y-d.y)<42){f.dead=true;d.score=Math.min(4,d.score+1);sound.collect();this.goal(d.score,4);showToast(state.lang==='tr'?`Plaka parçası ${d.score}/4 bulundu!`:`Plaque fragment ${d.score}/4 found!`,850);if(d.score>=4)setTimeout(()=>this.complete(),350);}}
      for(const a of d.asteroids){a.x-=rand(100,125)*dt;a.y+=a.vy*dt;a.spin+=dt;if(d.hit<=0&&Math.hypot(a.x-d.x,a.y-d.y)<a.r+30){a.dead=true;d.hit=.75;d.vx=-160;sound.error();showToast(state.lang==='tr'?'Sinyal paraziti — rota düzeltildi.':'Signal static — course corrected.',950);}}
      d.fragments=d.fragments.filter(o=>!o.dead&&o.x>-60);d.asteroids=d.asteroids.filter(o=>!o.dead&&o.x>-70);d.trail.push({x:d.x-35,y:d.y+rand(-5,5),life:1});for(const p of d.trail){p.x-=50*dt;p.life-=dt*2;}d.trail=d.trail.filter(p=>p.life>0);
    }
    drawSpace(c){
      const g=c.createRadialGradient(600,250,20,480,270,720);g.addColorStop(0,'#182554');g.addColorStop(.45,'#0a1230');g.addColorStop(1,'#020617');c.fillStyle=g;c.fillRect(0,0,960,540);this.drawStars(c,1.4);c.fillStyle='rgba(142,128,255,.08)';c.beginPath();c.ellipse(680,300,300,80,-.35,0,Math.PI*2);c.fill();
      const d=this.data;for(const p of d.trail){c.globalAlpha=p.life;c.fillStyle='#53e7ff';c.beginPath();c.arc(p.x,p.y,2.5,0,Math.PI*2);c.fill();}c.globalAlpha=1;
      for(const f of d.fragments){c.save();c.translate(f.x,f.y);c.rotate(f.spin);c.shadowColor='#ffd66b';c.shadowBlur=20;c.fillStyle='#d9a932';c.fillRect(-19,-25,38,50);c.strokeStyle='#fff0a8';c.lineWidth=2;c.strokeRect(-15,-21,30,42);c.beginPath();c.moveTo(-9,-7);c.lineTo(9,-7);c.moveTo(-9,2);c.lineTo(7,8);c.moveTo(-7,15);c.lineTo(8,15);c.stroke();c.restore();}
      for(const a of d.asteroids){c.save();c.translate(a.x,a.y);c.rotate(a.spin);c.fillStyle='#3f4051';c.strokeStyle='#696b7c';c.lineWidth=2;c.beginPath();for(let i=0;i<8;i++){const ang=i/8*Math.PI*2,r=a.r*(.72+(i%3)*.14);c.lineTo(Math.cos(ang)*r,Math.sin(ang)*r);}c.closePath();c.fill();c.stroke();c.fillStyle='#272837';c.beginPath();c.arc(-a.r*.22,-a.r*.15,a.r*.19,0,Math.PI*2);c.fill();c.restore();}
      c.save();c.translate(d.x,d.y+(d.hit>0?Math.sin(this.time*50)*4:0));c.rotate(clamp(d.vy/500,-.3,.3));c.strokeStyle='#dffbff';c.lineWidth=4;c.beginPath();c.moveTo(-11,0);c.lineTo(-50,-27);c.stroke();c.fillStyle='#c9d5d8';c.beginPath();c.arc(0,0,27,0,Math.PI*2);c.fill();c.fillStyle='#112746';c.beginPath();c.arc(6,-3,16,0,Math.PI*2);c.fill();c.fillStyle='#53e7ff';c.beginPath();c.arc(1,-7,4,0,Math.PI*2);c.arc(12,-7,4,0,Math.PI*2);c.fill();c.strokeStyle='#ffd66b';c.lineWidth=2;c.beginPath();c.arc(7,1,8,.2,Math.PI-.2);c.stroke();c.fillStyle='#dce9ea';c.beginPath();c.ellipse(-32,-20,31,14,-.55,0,Math.PI*2);c.fill();c.strokeStyle='#839ca8';c.beginPath();c.ellipse(-32,-20,24,9,-.55,0,Math.PI*2);c.stroke();c.strokeStyle='#c8ebef';c.beginPath();c.moveTo(19,18);c.lineTo(38,35);c.moveTo(19,-18);c.lineTo(38,-35);c.stroke();c.fillStyle='#7fffc5';c.beginPath();c.arc(41,38,4,0,Math.PI*2);c.arc(41,-38,4,0,Math.PI*2);c.fill();c.restore();
      this.roundRect(c,25,24,170,55,16,'rgba(4,11,27,.58)','rgba(127,255,197,.25)');c.fillStyle='#bfffe0';c.font='800 13px Segoe UI';c.fillText(state.lang==='tr'?'PLAKA PARÇASI':'PLAQUE PIECES',44,47);c.fillStyle='#ffd66b';c.font='900 22px Trebuchet MS';c.fillText(`${d.score}/4`,44,70);
    }
  }

  function bindUI(){
    new SkyField($('#sky'));
    setLanguage(state.lang);updateUI();
    $$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>{sound.click();setLanguage(btn.dataset.lang);}));
    $('#start-btn').addEventListener('click',()=>{sound.click();showScreen('map');});
    $('#how-btn').addEventListener('click',()=>$('#how-dialog').showModal());
    $('#how-start-btn').addEventListener('click',()=>{$('#how-dialog').close();showScreen('map');});
    $('#home-btn').addEventListener('click',()=>showScreen('start'));
    $('#map-btn').addEventListener('click',()=>showScreen('map'));
    $('#archive-btn').addEventListener('click',()=>showScreen('archive'));
    $('#archive-map-btn').addEventListener('click',()=>showScreen('map'));
    $('#back-map-btn').addEventListener('click',()=>showScreen('map'));
    $('#final-map-btn').addEventListener('click',()=>showScreen('map'));
    $('#finale-btn').addEventListener('click',()=>{if(state.completed.length===5)showScreen('finale');});
    $$('.mission-node').forEach(node=>node.querySelector('button').addEventListener('click',()=>openMission(node.dataset.mission)));
    $('#launch-mission-btn').addEventListener('click',()=>game?.launch());
    $('#sound-btn').addEventListener('click',()=>{state.sound=!state.sound;if(state.sound){sound.ensure();sound.success();}saveState();updateUI();});
    $('#motion-btn').addEventListener('click',()=>{state.reducedMotion=!state.reducedMotion;saveState();updateUI();});
    $$('[data-close-dialog]').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog').close()));
    $('#to-quiz-btn').addEventListener('click',openQuiz);$('#finish-mission-btn').addEventListener('click',finishMission);
    $$('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));renderMuseum(btn.dataset.filter);}));
    $('#make-certificate').addEventListener('click',()=>{const name=$('#explorer-name').value.trim()||(state.lang==='tr'?'Meraklı Kâşif':'Curious Explorer');$('#certificate-name').textContent=name;$('#certificate-dialog').showModal();sound.success();});
    $('#print-certificate').addEventListener('click',()=>window.print());
    $('#reset-btn').addEventListener('click',()=>{if(confirm(COPY[state.lang].resetConfirm)){const keep={lang:state.lang,sound:state.sound,reducedMotion:state.reducedMotion};state={...defaultState(),...keep};saveState();updateUI();announce(COPY[state.lang].progressReset);showScreen('start');}});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&sound.ctx?.state==='running')sound.ctx.suspend();});
    document.addEventListener('click',e=>{if(e.target.closest('button'))sound.click();},{capture:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bindUI);else bindUI();
})();


