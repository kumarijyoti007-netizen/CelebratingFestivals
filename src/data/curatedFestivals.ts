import type { FestivalMonograph } from '../types/festival';

export const CURATED_FESTIVALS: Record<string, FestivalMonograph> = {
  diwali: {
    id: 'diwali-curated',
    motherTongue: 'Hindi',
    motherTongueNativeName: 'हिन्दी',
    canonicalName: {
      en: 'Diwali (Deepavali)',
      hi: 'दीपावली (दिवाली)',
    },
    tagline: {
      en: 'The nocturnal festival of earthen lamps, homecoming, and luminous renewal across South Asia.',
      hi: 'मिट्टी के दीपों, घर वापसी और प्रकाश के नवजागरण का पावन महापर्व।',
    },
    timingAndCalendar: {
      en: 'Autumn · Kartik Amavasya (Oct–Nov)',
      hi: 'शरद ऋतु · कार्तिक अमावस्या (अक्टूबर–नवंबर)',
    },
    duration: {
      en: '5 Days',
      hi: '5 दिवसीय उत्सव',
    },
    primaryRegionsSummary: {
      en: 'Pan-Indian & Global Diaspora',
      hi: 'संपूर्ण भारत एवं विश्व प्रवासी समुदाय',
    },
    essence: {
      en: 'Light over Darkness · Prosperity · Kinship',
      hi: 'तमसो मा ज्योतिर्गमय · समृद्धि · आत्मीयता',
    },
    visualCategory: 'lights',
    overview: {
      en: 'Observed on the darkest new-moon night of the lunar month of Kartik, Diwali transforms courtyards, riverbanks, and market quarters into constellations of hand-thrown earthen diyas. Rather than a single uniform observance, the five-day cycle weaves together autumn harvest gratitude, reverence for Goddess Lakshmi, regional legends of dharma, and generous sharing of heirloom sweets.',
      hi: 'कार्तिक मास की अमावस्या की गहन रात्रि को मनाया जाने वाला दीपावली पर्व आँगनों, नदी घाटों और बाजारों को मिट्टी के दीपों की अनगिनत श्रृंखलाओं से आलोकित कर देता है। यह पांच दिवसीय महापर्व केवल एक परंपरा नहीं, बल्कि शरद फसल के प्रति कृतज्ञता, माँ लक्ष्मी की आराधना, धर्म की विजय गाथाओं और पारंपरिक मिठाइयों के आदान-प्रदान का जीवंत संगम है।',
    },
    historicalSignificance: {
      narrative: {
        en: 'Tracing back over two and a half millennia to ancient autumn harvest festivals such as Yaksharatri and Kaumudi Mahotsava described in Sanskrit literature, Diwali evolved into a multi-tradition spiritual anchor. In northern India, it commemorates the return of Rama, Sita, and Lakshmana to Ayodhya after fourteen years of exile, greeted by citizens lining the streets with rows of lamps—Deepavali.\n\nAcross Jain, Sikh, and Buddhist lineages, the very same lunar night carries distinct historical resonance: Jains mark the Nirvana of Lord Mahavira at Pawapuri, while Sikhs celebrate Bandi Chhor Divas—the liberation of Guru Hargobind Sahib from Gwalior Fort and the illumination of Harmandir Sahib.',
        hi: 'संस्कृत साहित्य में वर्णित यक्षरात्रि और कौमुदी महोत्सव जैसे ढाई हजार वर्ष प्राचीन शरद उत्सवों से विकसित होकर दीपावली भारतीय संस्कृति का प्रमुख आधार बनी। उत्तर भारत में यह चौदह वर्ष के वनवास के पश्चात श्रीराम, माता सीता और लक्ष्मण के अयोध्या लौटने की स्मृति में मनाया जाता है, जब नगरवासियों ने मार्गों पर दीपों की पंक्तियाँ (दीपावली) सजाई थीं।\n\nजैन, सिख और अन्य परंपराओं में भी यह रात्रि विशेष ऐतिहासिक महत्व रखती है: जैन समाज पावापुरी में भगवान महावीर के निर्वाण दिवस के रूप में इसे मनाता है, वहीं सिख परंपरा में यह गुरु हरगोबिंद साहिब की ग्वालियर किले से मुक्ति और हरिमंदिर साहिब के आलोकन का प्रतीक बंदी छोड़ दिवस है।',
      },
      pullQuote: {
        en: 'Where a single earthen lamp stands firm against the autumn wind, an entire household remembers its shared light.',
        hi: 'जहाँ शरद की बयार में एक भी मिट्टी का दीपक अडिग जलता है, वहाँ समूचा परिवार अपने साझा उजाले को पहचान लेता है।',
      },
      milestones: [
        {
          era: {
            en: 'c. 500 BCE – 300 CE · Early Harvest & Sanskrit Texts',
            hi: 'लगभग 500 ई.पू. – 300 ई. · प्राचीन फसल एवं संस्कृत ग्रंथ',
          },
          detail: {
            en: 'Referenced in the Kamasutra and Padma Purana as Yaksharatri and Deepamalika, celebrating the post-monsoon grain harvest.',
            hi: 'कामसूत्र और पद्म पुराण में यक्षरात्रि व दीपमालिका के रूप में वर्णित, जो मानसून के बाद नई फसल के आगमन का उत्सव था।',
          },
        },
        {
          era: {
            en: '7th Century CE · Royal Courts & Kaumudi Lamps',
            hi: '7वीं शताब्दी · राजदरबार एवं दीप-उत्सव',
          },
          detail: {
            en: 'Emperor Harshavardhana’s play Nagananda documents citizens exchanging gifts and lighting whitewashed homes across northern kingdoms.',
            hi: 'सम्राट हर्षवर्धन के नाटक नागानंद में घर-घर लिपाई-पुताई, उपहारों के आदान-प्रदान और दीप प्रज्वलन का सजीव उल्लेख मिलता है।',
          },
        },
        {
          era: {
            en: '17th Century – Present · Merchant Ledgers & Multi-Faith Heritage',
            hi: '17वीं शताब्दी – वर्तमान · बही-खाता पूजन एवं साझा विरासत',
          },
          detail: {
            en: 'Guilds and merchant families institutionalized Chopda Pujan for the new fiscal year alongside Sikh Bandi Chhor Divas at Amritsar.',
            hi: 'व्यापारी वर्ग ने नए वित्तीय वर्ष के शुभारंभ हेतु चोपड़ा पूजन को स्थापित किया और अमृतसर में बंदी छोड़ दिवस की परंपरा सुदृढ़ हुई।',
          },
        },
      ],
    },
    regionalVariations: [
      {
        regionName: {
          en: 'Varanasi & North India',
          hi: 'काशी (वाराणसी) एवं उत्तर भारत',
        },
        localFestivalTitle: {
          en: 'Deepavali & Dev Deepawali',
          hi: 'दीपावली एवं देव दीपावली',
        },
        customsSummary: {
          en: 'Homes are whitewashed and adorned with mango-leaf torans and rice-paste alpana. Families gather at dusk for Ganesha-Lakshmi puja, light mustard-oil diyas across rooftops, and fifteen days later illuminate Varanasi’s stone ghats with hundreds of thousands of lamps on Kartik Purnima.',
          hi: 'घरों की स्वच्छता, आम के पत्तों के बंदनवार और चौखट पर रंगोली सजाई जाती है। संध्या काल में गणेश-लक्ष्मी पूजन के बाद सरसों के तेल के दीये छतों व आँगनों में जलाए जाते हैं, और पंद्रह दिन बाद कार्तिक पूर्णिमा को काशी के घाट लाखों दीपों से देव दीपावली मनाते हैं।',
        },
        rituals: [
          {
            title: {
              en: 'Dhanteras Brass & Silver Renewal',
              hi: 'धनतेरस पर धातु एवं बर्तन क्रय',
            },
            description: {
              en: 'Households purchase new brass utensils or silver coins to honor Dhanvantari and welcome auspicious abundance.',
              hi: 'धन्वंतरि जयंती पर शुभता और आरोग्य के प्रतीक के रूप में पीतल के बर्तन या चाँदी के सिक्के घर लाए जाते हैं।',
            },
          },
          {
            title: {
              en: 'Pradosh Kaal Lakshmi-Ganesha Puja',
              hi: 'प्रदोष काल में लक्ष्मी-गणेश पूजन',
            },
            description: {
              en: 'Altars are dressed with marigold garlands, lotus blossoms, puffed rice (kheel), and sugar figurines (batasha).',
              hi: 'गेंदे की माला, कमल पुष्प, खील-बताशे और नए बही-खातों के साथ संध्या वेला में विधिपूर्वक पूजन होता है।',
            },
          },
          {
            title: {
              en: 'Govardhan & Annakut Feast',
              hi: 'गोवर्धन पूजा एवं अन्नकूट',
            },
            description: {
              en: 'The day after Diwali honors cattle and agrarian abundance with a towering offering of freshly cooked seasonal vegetables.',
              hi: 'दीपावली के अगले दिन गोवंश व प्रकृति के सम्मान में ताजी मौसमी सब्जियों और अन्न का छप्पन भोग अर्पित किया जाता है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Kheel-Batasha & Khoya Gujiya',
              hi: 'खील-बताशा एवं मावा गुजिया',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'Puffed paddy symbolizes the newly harvested autumn crop offered first to the household altar before sharing with neighbors.',
              hi: 'खील शरद की नई धान फसल का प्रतीक है जिसे सर्वप्रथम पूजा में अर्पित कर पड़ोसियों में बाँटा जाता है।',
            },
            keyIngredients: {
              en: 'Puffed paddy rice, cane-sugar drops, reduced milk solids (khoya), cardamom, and pistachios.',
              hi: 'धान की खील, शक्कर के बताशे, मावा, छोटी इलायची और पिस्ता।',
            },
          },
          {
            name: {
              en: 'Besan Ladoo',
              hi: 'बेसन के लड्डू',
            },
            course: 'Sweet',
            significance: {
              en: 'Golden spheres slow-roasted in clarified butter represent warmth, patience, and auspiciousness gifted to visiting relatives.',
              hi: 'शुद्ध घी में धीमी आंच पर भुने सुनहरे बेसन के लड्डू सद्भाव और मांगलिक स्वागत के प्रतीक माने जाते हैं।',
            },
            keyIngredients: {
              en: 'Coarse chickpea flour, desi ghee, powdered jaggery or bura sugar, and nutmeg.',
              hi: 'मोटा बेसन, देसी घी, तगार (बूरा) और जायफल।',
            },
          },
          {
            name: {
              en: 'Sooran (Jimikand) Curry & Poori',
              hi: 'सूरन (जिमीकंद) की सब्जी एवं पूरी',
            },
            course: 'Savory Feast',
            significance: {
              en: 'In eastern UP and Bihar, eating elephant-foot yam on Diwali night is an age-old custom symbolizing resilience and steady growth.',
              hi: 'पूर्वांचल और बिहार में दीपावली की रात सूरन की सब्जी खाना समृद्धि और निरंतर वृद्धि की प्राचीन लोक-परंपरा है।',
            },
            keyIngredients: {
              en: 'Elephant-foot yam, mustard oil, amchur (dried mango powder), ginger, and whole wheat pooris.',
              hi: 'जिमीकंद, सरसों का तेल, अमचूर, अदरक और गेहूँ की पूरी।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'West Bengal & Assam',
          hi: 'पश्चिम बंगाल एवं असम',
        },
        localFestivalTitle: {
          en: 'Kali Puja & Deepanwita',
          hi: 'काली पूजा एवं दीपान्विता',
        },
        customsSummary: {
          en: 'Instead of Lakshmi alone, Bengal and Assam revere Goddess Kali at midnight on Kartik Amavasya. Courtyards glow with fourteen ceremonial lamps (Choddo Prodeep) honoring ancestors on Bhoot Chaturdashi, while clay artisans sculpt towering dark-indigo icons for neighborhood pandals.',
          hi: 'बंगाल और असम में कार्तिक अमावस्या की अर्धरात्रि को माँ काली की भव्य आराधना होती है। भूत चतुर्दशी की संध्या को पूर्वजों की स्मृति में चौदह दीपक (चौद्दो प्रदीप) जलाए जाते हैं और सामुदायिक पंडालों में रात भर भक्ति संगीत गूँजता है।',
        },
        rituals: [
          {
            title: {
              en: 'Choddo Prodeep & Fourteen Greens',
              hi: 'चौद्दो प्रदीप एवं चौदह साग परंपरा',
            },
            description: {
              en: 'On the eve of Kali Puja, families cook fourteen leafy greens and light fourteen earthen lamps at thresholds to guide ancestral spirits.',
              hi: 'काली पूजा की पूर्व संध्या पर चौदह प्रकार के साग पकाए जाते हैं और चौदह दीप द्वार पर सजाए जाते हैं।',
            },
          },
          {
            title: {
              en: 'Nishitha (Midnight) Kali Worship',
              hi: 'निशीथ रात्रि में काली आराधना',
            },
            description: {
              en: 'Priests offer red hibiscus garlands and dhuno incense smoke accompanied by rhythmic dhak drums through the quiet hours of night.',
              hi: 'लाल गुड़हल की मालाओं, धूप-धुनुची और ढाक की गूँज के बीच मध्यरात्रि में शक्ति की उपासना संपन्न होती है।',
            },
          },
          {
            title: {
              en: 'Alpona Threshold Painting',
              hi: 'चावल के घोल से अल्पना चित्रण',
            },
            description: {
              en: 'Hand-drawn white rice-flour motifs of lotus petals and owls grace verandas and prayer spaces.',
              hi: 'आँगन और पूजा स्थल पर कच्चे चावल के लेप से कमल और मांगलिक आकृतियों की अल्पना उकेरी जाती है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Bhoger Khichuri & Labra',
              hi: 'भोगेर खिचुड़ी एवं लाबड़ा',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'Served as midnight prasad after Kali Puja, this aromatic roasted-lentil rice dish brings entire neighborhoods together on banana leaves.',
              hi: 'काली पूजा के उपरांत मध्यरात्रि भोग के रूप में वितरित यह व्यंजन पूरे मोहल्ले को एक पंगत में जोड़ता है।',
            },
            keyIngredients: {
              en: 'Gobindobhog aromatic rice, roasted moong dal, cauliflower, pumpkin, bay leaf, and ghee.',
              hi: 'गोबिंदभोग चावल, भुनी मूंग दाल, फूलगोभी, कद्दू, तेजपत्ता और घी।',
            },
          },
          {
            name: {
              en: 'Narkel Naru & Til Naru',
              hi: 'नारियल और तिल के नारू',
            },
            course: 'Sweet',
            significance: {
              en: 'Hand-rolled coconut and jaggery confections prepared for Lakshmi and Kali altars during autumn nights.',
              hi: 'ताजे नारियल और खजूर गुड़ से बने ये लड्डू शरद कालीन पूजा थाल का अनिवार्य हिस्सा हैं।',
            },
            keyIngredients: {
              en: 'Freshly grated coconut, date-palm jaggery (patali gur), toasted sesame seeds, and cardamom.',
              hi: 'कद्दूकस किया ताजा नारियल, खजूर गुड़, भुने तिल और इलायची।',
            },
          },
          {
            name: {
              en: 'Luchi & Cholar Dal',
              hi: 'लुची एवं छोलार दाल',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Fluffy golden flatbreads paired with sweet-spiced Bengal gram studded with fried coconut slivers.',
              hi: 'फूली हुई मुलायम लुची और भुने नारियल के टुकड़ों से सजी चने की मीठी-मसालेदार दाल उत्सव का मुख्य भोजन है।',
            },
            keyIngredients: {
              en: 'Refined wheat flour, split Bengal gram, coconut chips, raisins, cumin, and ghee.',
              hi: 'मैदा, चना दाल, नारियल के टुकड़े, किशमिश, जीरा और घी।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Tamil Nadu & South India',
          hi: 'तमिलनाडु एवं दक्षिण भारत',
        },
        localFestivalTitle: {
          en: 'Naraka Chaturdashi & Deepavali',
          hi: 'नरक चतुर्दशी एवं दीपावली',
        },
        customsSummary: {
          en: 'Celebrations peak at dawn before sunrise rather than at midnight. Families wake at Brahma Muhurta for a ceremonial sesame-oil bath (Ganga Snanam), wear crisp new silk garments anointed with turmeric, and visit elders before sharing savoury crisp snacks and rich halwa.',
          hi: 'दक्षिण भारत में दीपावली का मुख्य उत्साह अर्धरात्रि के बजाय ब्रह्म मुहूर्त के सूर्योदय से पूर्व प्रारंभ होता है। परिवार जन तिल के तेल से मंगल स्नान (गंगा स्नान) कर हल्दी लगे नए रेशमी वस्त्र धारण करते हैं और बड़े-बुजुर्गों का आशीर्वाद लेते हैं।',
        },
        rituals: [
          {
            title: {
              en: 'Dawn Ennai Snanam (Oil Bath)',
              hi: 'प्रातःकालीन तिल-तेल स्नान',
            },
            description: {
              en: 'Elders apply warm sesame oil infused with black pepper and betel leaves to everyone’s crown before bathing.',
              hi: 'सूर्योदय से पहले काली मिर्च और पान के पत्तों से सिद्ध गर्म तिल का तेल सिर पर लगाकर स्नान किया जाता है।',
            },
          },
          {
            title: {
              en: 'Thalai Deepavali for Newlyweds',
              hi: 'नवविवाहितों की थलै दीपावली',
            },
            description: {
              en: 'Newly married couples celebrate their first Diwali at the bride’s parental home with special gifts and feasts.',
              hi: 'नवविवाहित जोड़े अपनी पहली दीपावली वधू के मायके में विशेष उपहारों और पारिवारिक प्रीतिभोज के साथ मनाते हैं।',
            },
          },
          {
            title: {
              en: 'Deepavali Marundhu (Digestive Tonic)',
              hi: 'दीपावली लेहियम (औषधीय पाक)',
            },
            description: {
              en: 'A small spoonful of herbal jaggery electuary is taken early morning to balance the richness of festive sweets.',
              hi: 'उत्सव के गरिष्ठ पकवानों के संतुलन हेतु प्रातः जड़ी-बूटियों और गुड़ से बनी पाचक औषधि ग्रहण की जाती है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Mysore Pak',
              hi: 'मैसूर पाक',
            },
            course: 'Sweet',
            significance: {
              en: 'Originated in the royal kitchens of Mysore, this melt-in-the-mouth gram flour and ghee fudge defines southern festive hospitality.',
              hi: 'मैसूर के राजदरबार की रसोई से जन्मी यह घी और बेसन की मिठाई दक्षिण भारतीय आतिथ्य की पहचान है।',
            },
            keyIngredients: {
              en: 'Sifted chickpea flour, generous pure cow ghee, and single-thread sugar syrup.',
              hi: 'छना हुआ बेसन, शुद्ध देसी घी और एक तार की चीनी चाशनी।',
            },
          },
          {
            name: {
              en: 'Thenkuzhal Murukku & Ribbon Pakoda',
              hi: 'थेनकुझल मुरुक्कु एवं रिबन पकोड़ा',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Crunchy spiral savory rice-flour snacks hand-pressed days in advance and packed in brass tins for guests.',
              hi: 'चावल और उड़द दाल से बने ये कुरकुरे नमकीन कई दिन पहले तैयार कर मेहमानों के लिए सहेजे जाते हैं।',
            },
            keyIngredients: {
              en: 'Raw rice flour, roasted urad dal flour, butter, cumin seeds, and sesame.',
              hi: 'कच्चे चावल का आटा, भुनी उड़द दाल का आटा, मक्खन, जीरा और तिल।',
            },
          },
          {
            name: {
              en: 'Badam Halwa & Deepavali Lehiyam',
              hi: 'बादाम हलवा एवं दीपावली लेहियम',
            },
            course: 'Festive Beverage',
            significance: {
              en: 'Saffron-scented almond confection paired with a traditional spiced herbal tonic to open the morning feast.',
              hi: 'केसर युक्त बादाम हलवा और आयुर्वेदिक मसालों का लेहियम प्रातःकालीन भोज की विशिष्ट जोड़ी है।',
            },
            keyIngredients: {
              en: 'Blanched almonds, saffron strands, ghee, dry ginger, ajwain, and palm jaggery.',
              hi: 'भीगे बादाम, केसर, घी, सोंठ, अजवाइन और ताड़ का गुड़।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Gujarat & Maharashtra',
          hi: 'गुजरात एवं महाराष्ट्र',
        },
        localFestivalTitle: {
          en: 'Bestu Varas & Padwa',
          hi: 'बेस्तु वरस एवं दीवाली पड़वा',
        },
        customsSummary: {
          en: 'In western India, Diwali signals the transition into the Gujarati New Year (Bestu Varas) and Marathi Bali Pratipada. Artisans and traders close old account books in red cloth bindings and open fresh ledgers marked with auspicious Swastika and Shubh-Labh calligraphy.',
          hi: 'पश्चिम भारत में दीपावली गुजराती नववर्ष (बेस्तु वरस) और मराठी बलि प्रतिपदा के शुभारंभ का संदेश लाती है। व्यापारी पुराने बही-खाते बंद कर लाल कपड़े में बंधे नए खातों पर कुमकुम से स्वस्तिक और शुभ-लाभ अंकित करते हैं।',
        },
        rituals: [
          {
            title: {
              en: 'Vasu Baras & Cow Reverence',
              hi: 'वसु बारस एवं गो-पूजन',
            },
            description: {
              en: 'The festivities begin by honoring cows and calves with vermilion tilak and freshly baked bajra rotis.',
              hi: 'पर्व की शुरुआत गाय और बछड़े को कुमकुम तिलक लगाकर और बाजरे की रोटी खिलाकर की जाती है।',
            },
          },
          {
            title: {
              en: 'Chopda Pujan (Ledger Blessing)',
              hi: 'चोपड़ा पूजन (नूतन खाता स्थापना)',
            },
            description: {
              en: 'Account books are opened at an auspicious muhurat with turmeric, saffron ink, and silver coins.',
              hi: 'शुभ मुहूर्त में हल्दी, केसर की स्याही और चाँदी के सिक्कों से नए व्यापारिक खातों का प्रारंभ होता है।',
            },
          },
          {
            title: {
              en: 'Faraal Platter Exchange',
              hi: 'फराळ की थाली का आदान-प्रदान',
            },
            description: {
              en: 'Neighbors trade brass trays stacked with sweet and savory snacks collectively called Faraal.',
              hi: 'पड़ोसी और मित्र आपस में मीठे और नमकीन व्यंजनों से सजी फराळ की थालियाँ साझा करते हैं।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Chakli & Shankarpali',
              hi: 'चकली एवं शकरपारे (शंकरपाळी)',
            },
            course: 'Savory Feast',
            significance: {
              en: 'The cornerstone of Maharashtra’s Diwali Faraal tray, enjoyed every morning with hot spiced tea.',
              hi: 'महाराष्ट्र की दीवाली फराळ थाली के प्रमुख व्यंजन, जिनका आनंद सुबह की चाय के साथ लिया जाता है।',
            },
            keyIngredients: {
              en: 'Roasted multi-grain bhajani flour, sesame, carom seeds, semolina, and jaggery.',
              hi: 'भुनी हुई बहु-अनाज भाजणी का आटा, तिल, अजवाइन, सूजी और गुड़।',
            },
          },
          {
            name: {
              en: 'Mohanthal & Ghugra',
              hi: 'मोहनथाल एवं घुघरा',
            },
            course: 'Sweet',
            significance: {
              en: 'Saffron-infused chickpea fudge and crisp half-moon pastries welcoming guests on Gujarati New Year morning.',
              hi: 'केसरिया मोहनथाल और कुरकुरे घुघरा गुजराती नववर्ष की सुबह आने वाले अतिथियों का स्वागत करते हैं।',
            },
            keyIngredients: {
              en: 'Coarse gram flour, saffron, milk, nutmeg, desiccated coconut, and suji.',
              hi: 'दरदरा बेसन, केसर, दूध, जायफल, सूखा नारियल और सूजी।',
            },
          },
          {
            name: {
              en: 'Kesar Pista Shrikhand & Basundi',
              hi: 'केसर पिस्ता श्रीखंड एवं बासुंदी',
            },
            course: 'Festive Beverage',
            significance: {
              en: 'Chilled saffron-cardamom milk reductions served alongside warm puris for the Bestu Varas family feast.',
              hi: 'केसर और इलायची से सुगंधित गाढ़ा दूध और श्रीखंड नववर्ष के पारिवारिक भोज को पूर्ण करते हैं।',
            },
            keyIngredients: {
              en: 'Full-cream milk, hung curd, charoli nuts, nutmeg, saffron, and green cardamom.',
              hi: 'मलाईदार दूध, चक्का दही, चिरौंजी, जायफल, केसर और हरी इलायची।',
            },
          },
        ],
      },
    ],
    greetingsAndTerms: {
      traditionalGreeting: {
        en: 'Wishing you a luminous and joyful Diwali.',
        hi: 'आपको एवं आपके परिवार को दीपावली की हार्दिक शुभकामनाएँ।',
        transliteration: 'Shubh Deepavali',
        meaningEn: 'Auspicious Row of Lamps — wishing clarity, warmth, and inner light.',
        meaningHi: 'मंगलमय दीपों की पंक्ति — ज्ञान, सद्भाव और आंतरिक प्रकाश की कामना।',
      },
      glossary: [
        {
          term: 'Diya (Deepak)',
          nativeScript: 'दीपक / दीया',
          meaning: {
            en: 'A small hand-molded terracotta oil lamp lit with cotton wicks and mustard oil or ghee.',
            hi: 'हाथ से बना मिट्टी का छोटा पात्र जिसमें रुई की बाती और तेल या घी डालकर प्रज्वलित किया जाता है।',
          },
        },
        {
          term: 'Rangoli / Alpana',
          nativeScript: 'रंगोली / अल्पना',
          meaning: {
            en: 'Geometric and floral threshold art drawn with rice flour, turmeric, or colored sands to welcome guests.',
            hi: 'आँगन या द्वार पर चावल के आटे, हल्दी या प्राकृतिक रंगों से बनाई जाने वाली मांगलिक आकृति।',
          },
        },
        {
          term: 'Prasad / Naivedya',
          nativeScript: 'प्रसाद / नैवेद्य',
          meaning: {
            en: 'Consecrated food first offered in gratitude at the family altar and then distributed to the community.',
            hi: 'ईश्वर को कृतज्ञतापूर्वक अर्पित किया गया पवित्र भोजन जिसे बाद में सभी में बाँटा जाता है।',
          },
        },
      ],
    },
  },

  'chhath puja': {
    id: 'chhath-curated',
    motherTongue: 'Hindi',
    motherTongueNativeName: 'हिन्दी',
    canonicalName: {
      en: 'Chhath Puja',
      hi: 'छठ पूजा (सूर्य षष्ठी)',
    },
    tagline: {
      en: 'An ancient four-day riverfront homage to the setting and rising Sun—without idols, steeped in austerity and gratitude.',
      hi: 'अस्ताचलगामी एवं उदीयमान सूर्य को समर्पित चार दिवसीय लोक-आस्था, स्वच्छता और प्रकृति-कृतज्ञता का महापर्व।',
    },
    timingAndCalendar: {
      en: 'Autumn · Kartik Shukla Shashthi (6 days after Diwali)',
      hi: 'शरद ऋतु · कार्तिक शुक्ल षष्ठी (दीपावली के छठे दिन)',
    },
    duration: {
      en: '4 Days',
      hi: '4 दिवसीय महाव्रत',
    },
    primaryRegionsSummary: {
      en: 'Bihar, Jharkhand, Eastern UP & Madhesh',
      hi: 'बिहार, झारखंड, पूर्वांचल एवं मधेश (नेपाल)',
    },
    essence: {
      en: 'Solar Gratitude · River Purity · Community Equality',
      hi: 'सूर्य उपासना · जल शुचिता · सामाजिक समरसता',
    },
    visualCategory: 'lights',
    overview: {
      en: 'Unique among major Indian observances for having no temple priesthood or sculpted idols, Chhath Puja unfolds along rivers, ponds, and village ghats under open skies. Observers—known as Vratins—maintain thirty-six hours of fasting without water, standing knee-deep in cool autumn currents to offer bamboo winnowing baskets filled with seasonal harvest to Surya and Chhathi Maiya.',
      hi: 'मूर्ति और पुरोहित परंपरा से परे खुले आकाश के नीचे नदियों और सरोवरों के तट पर संपन्न होने वाला छठ पूजा लोक-संस्कृति का अद्वितीय पर्व है। इसमें व्रती छत्तीस घंटे का निर्जला उपवास रखकर कमर भर जल में खड़े हो डूबते और उगते सूर्य तथा छठी मइया को बाँस के सूप में मौसमी उपज अर्पित करते हैं।',
    },
    historicalSignificance: {
      narrative: {
        en: 'Chhath draws directly from Vedic solar hymns in the Rigveda invoking Surya as the sustainer of all earthly vitality, alongside regional folk reverence for Usha (dawn) and Pratyusha (dusk). Unlike most traditions that worship only the rising sun, Chhath gives equal—and first—honor to the setting sun, teaching gratitude for every completed cycle.\n\nEpic memory links the observance to Draupadi and the Pandavas seeking strength during exile, as well as Karna of Anga (modern Bhagalpur) standing in the Ganga to offer solar arghya. Across centuries, the festival became a profound ecological covenant centered on pristine riverbanks, zero-waste clay and bamboo vessels, and egalitarian ghats where every family stands side by side.',
        hi: 'छठ पर्व की जड़ें ऋग्वेद के सूर्य सूक्तों में निहित हैं, जहाँ सूर्य को समस्त जीवन-ऊर्जा का स्रोत माना गया है। उषा (भोर) और प्रत्यूषा (संध्या) के रूप में सूर्य की शक्तियों की यह उपासना विश्व की उन विरल परंपराओं में है जहाँ उगते सूर्य से पहले डूबते सूर्य को अर्घ्य देकर पूर्ण हुए चक्र के प्रति आभार व्यक्त किया जाता है।\n\nमहाभारत काल में अंग प्रदेश (वर्तमान भागलपुर) के राजा कर्ण द्वारा गंगा में खड़े होकर सूर्य उपासना और द्रौपदी के व्रत से भी इसकी कथा जुड़ती है। सदियों से यह पर्व नदी स्वच्छता, मिट्टी व बाँस के पर्यावरण-अनुकूल पात्रों और भेदभाव-रहित सामाजिक एकता का जीवंत उदाहरण रहा है।',
      },
      pullQuote: {
        en: 'Before saluting the dawn, the river teaches us to bow gratefully to the sun that is setting.',
        hi: 'उगते भोर को प्रणाम करने से पहले, नदी हमें ढलते सूर्य के प्रति कृतज्ञ होकर झुकना सिखाती है।',
      },
      milestones: [
        {
          era: {
            en: 'Vedic Antiquity · Solar Hymns & Pratyusha',
            hi: 'वैदिक काल · सूर्य सूक्त एवं उषा-प्रत्यूषा',
          },
          detail: {
            en: 'Early agrarian communities along the Gangetic plains codified seasonal thanksgiving to solar energy after the kharif harvest.',
            hi: 'गंगा के मैदानी क्षेत्रों के कृषि समाजों ने खरीफ फसल के पश्चात सौर ऊर्जा के प्रति आभार की इस पद्धति को संजोया।',
          },
        },
        {
          era: {
            en: 'Medieval Folk Canon · Maithili & Bhojpuri Geet',
            hi: 'मध्यकाल · मैथिली एवं भोजपुरी लोकगीत',
          },
          detail: {
            en: 'Oral folk songs composed by women preserved every ritual step—from bamboo basket preparation to riverbank arghya—across generations.',
            hi: 'महिलाओं द्वारा रचित और गाए गए लोकगीतों ने दउरा सजाने से लेकर अर्घ्य देने तक के हर नियम को पीढ़ी-दर-पीढ़ी जीवित रखा।',
          },
        },
        {
          era: {
            en: 'Modern Era · Global Riverfront Celebrations',
            hi: 'आधुनिक युग · वैश्विक स्तर पर छठ घाट',
          },
          detail: {
            en: 'From Patna’s Ganga ghats to New Delhi, Mumbai, Mauritius, and New Jersey, migrant communities gather every autumn to sustain the tradition.',
            hi: 'पटना के गंगा घाटों से लेकर दिल्ली, मुंबई, मॉरीशस और विदेशों तक प्रवासी समुदाय हर शरद में इस महापर्व को मनाते हैं।',
          },
        },
      ],
    },
    regionalVariations: [
      {
        regionName: {
          en: 'Magadh & Bhojpur (Patna, Gaya, Ara)',
          hi: 'मगध एवं भोजपुर (पटना, गया, आरा)',
        },
        localFestivalTitle: {
          en: 'Mahaparv Chhath (Surya Shashthi)',
          hi: 'महापर्व छठ (सूर्य षष्ठी)',
        },
        customsSummary: {
          en: 'Entire neighborhoods scrub lanes clean and line river routes with welcome arches. On Kharna evening, families eat sacred jaggery kheer in utter silence before the 36-hour fast begins, followed by monumental Sandhya and Usha Arghya gatherings along the Ganga and Son rivers.',
          hi: 'मोहल्लों के लोग स्वयं गलियों की सफाई करते हैं और घाट तक के मार्ग सजाते हैं। खरना की संध्या को पूर्ण नीरवता में गुड़ की खीर का प्रसाद ग्रहण कर 36 घंटे का निर्जला व्रत प्रारंभ होता है, जिसके बाद गंगा और सोन तट पर संध्या व प्रातः अर्घ्य दिया जाता है।',
        },
        rituals: [
          {
            title: {
              en: 'Day 1 · Nahay-Khay',
              hi: 'प्रथम दिन · नहाय-खाय',
            },
            description: {
              en: 'Vratins bathe in sacred water and cook a pure sattvic meal of bottle gourd curry and Bengal gram on clay stoves using mango wood.',
              hi: 'पवित्र जल में स्नान के बाद आम की लकड़ी और मिट्टी के चूल्हे पर बिना लहसुन-प्याज की लौकी की सब्जी और चना दाल बनाई जाती है।',
            },
          },
          {
            title: {
              en: 'Day 2 · Kharna (Lohanda)',
              hi: 'द्वितीय दिन · खरना (लोहंडा)',
            },
            description: {
              en: 'After a day-long fast, devotees prepare sugarcane-jaggery rice pudding and hand-rolled wheat rotis offered to the moon and sun.',
              hi: 'दिन भर उपवास के बाद संध्या में गुड़-चावल की खीर और घी लगी रोटी का प्रसाद ग्रहण कर निर्जला व्रत शुरू होता है।',
            },
          },
          {
            title: {
              en: 'Days 3 & 4 · Sandhya & Usha Arghya',
              hi: 'तृतीय एवं चतुर्थ दिन · संध्या व उषा अर्घ्य',
            },
            description: {
              en: 'Decorated bamboo dauras bearing coconut, sugarcane, pomelo (gaghal), and thekua are carried on heads to the river for sunset and dawn offerings.',
              hi: 'बाँस के दउरे में गन्ना, नारियल, डाभ नींबू और ठेकुआ सिर पर रखकर घाट ले जाया जाता है और डूबते व उगते सूर्य को अर्घ्य दिया जाता है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Thekua (Khajuria)',
              hi: 'ठेकुआ (खजूरिया)',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'The iconic Chhath prasad—whole-wheat cookies pressed onto carved wooden molds and fried in pure ghee—prized by every traveler returning home.',
              hi: 'छठ का सबसे प्रमुख महाप्रसाद—लकड़ी के साँचे पर गढ़े गए और शुद्ध घी में तले गेहूँ व गुड़ के कुरकुरे ठेकुआ।',
            },
            keyIngredients: {
              en: 'Whole wheat flour, melted jaggery, grated dry coconut, fennel seeds, green cardamom, and ghee.',
              hi: 'गेहूँ का आटा, गुड़ का घोल, सूखा नारियल, सौंफ, इलायची और शुद्ध घी।',
            },
          },
          {
            name: {
              en: 'Rasia (Gur ki Kheer)',
              hi: 'रसियाव (गुड़ की खीर)',
            },
            course: 'Sweet',
            significance: {
              en: 'Cooked slowly in an earthen pot on Kharna night, symbolizing sweetness and endurance before the 36-hour fast.',
              hi: 'खरना की शाम मिट्टी की हाँडी में धीमी आंच पर पकाई जाने वाली गुड़ और नए चावल की खीर।',
            },
            keyIngredients: {
              en: 'Newly harvested Sathi rice, cow milk, organic cane jaggery, and crushed cardamom.',
              hi: 'नया साठी चावल, गाय का दूध, गन्ने का गुड़ और इलायची।',
            },
          },
          {
            name: {
              en: 'Kaddu-Bhaat & Chana Dal',
              hi: 'कद्दू-भात एवं चने की दाल',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Prepared on Nahay-Khay day using rock salt and ghee to purify body and kitchen before the main austerity begins.',
              hi: 'नहाय-खाय के दिन सेंधा नमक और देसी घी से बना सात्विक भोजन, जो व्रत की शुद्ध शुरुआत करता है।',
            },
            keyIngredients: {
              en: 'Tender bottle gourd, split Bengal gram, arwa rice, sendha namak (rock salt), and cumin.',
              hi: 'ताजी लौकी, चना दाल, अरवा चावल, सेंधा नमक और जीरा।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Mithila (Darbhanga, Madhubani, Janakpur)',
          hi: 'मिथिलांचल (दरभंगा, मधुबनी, जनकपुर)',
        },
        localFestivalTitle: {
          en: 'Chhathi Parva & Kosi Bharai',
          hi: 'छठी पर्व एवं कोसी भराई',
        },
        customsSummary: {
          en: 'Mithila is renowned for its intricate Kosi Bharai ceremony: an earthen elephant lamp topped with glowing diyas and wrapped beneath a canopy of five or seven sugarcane stalks, accompanied by soulful Maithili folk melodies sung in the courtyard through the night.',
          hi: 'मिथिलांचल में रात्रि की कोसी भराई परंपरा अत्यंत प्रसिद्ध है, जिसमें पाँच या सात गन्नों की छतरी के नीचे मिट्टी के हाथी पर दीपक जलाकर आँगन और घाट पर मैथिली लोकगीतों के बीच जागरण किया जाता है।',
        },
        rituals: [
          {
            title: {
              en: 'Aripan Courtyard Art',
              hi: 'चावल के पिठार से अरिपन',
            },
            description: {
              en: 'Women paint sacred geometric lotus and sun motifs using rice paste mixed with vermilion.',
              hi: 'महिलाएँ आँगन में कच्चे चावल के लेप (पिठार) और सिंदूर से सूर्य व कमल के पारंपरिक अरिपन बनाती हैं।',
            },
          },
          {
            title: {
              en: 'Kosi Bharai Canopy Vigil',
              hi: 'कोसी भराई अनुष्ठान',
            },
            description: {
              en: 'When family wishes are fulfilled, a sugarcane pavilion is erected around clay lamps in the courtyard between sunset and dawn arghya.',
              hi: 'मन्नत पूर्ण होने पर संध्या और भोर के अर्घ्य के बीच आँगन में गन्ने का मंडप सजाकर मिट्टी के हाथी पर दीप जलाए जाते हैं।',
            },
          },
          {
            title: {
              en: 'Ganga-Surya Maithili Geet',
              hi: 'मैथिली छठ लोकगीत',
            },
            description: {
              en: 'Chorus singing of timeless verses invoking Chhathi Maiya’s blessings for children and harvests.',
              hi: 'सूर्योदय की प्रतीक्षा में महिलाएं सामूहिक रूप से संतान और फसल की मंगलकामना वाले लोकगीत गाती हैं।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Kasar (Spiced Rice-Flour Ladoo)',
              hi: 'कसार (चावल के आटे के लड्डू)',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'Unbaked or lightly roasted sweet rice-flour spheres tucked into the Chhath soup alongside thekua in Mithila homes.',
              hi: 'मिथिला के छठ सूप में ठेकुआ के साथ रखा जाने वाला चावल के आटे, घी और सौंफ का पारंपरिक प्रसाद।',
            },
            keyIngredients: {
              en: 'Sun-dried arwa rice flour, jaggery, fennel seeds, pure ghee, and crushed pepper.',
              hi: 'धूप में सुखाया अरवा चावल का आटा, गुड़, सौंफ, घी और काली मिर्च।',
            },
          },
          {
            name: {
              en: 'Tava Thekua & Sukha Bhujia',
              hi: 'साँचे का ठेकुआ एवं हल्का फलाहार',
            },
            course: 'Sweet',
            significance: {
              en: 'Mithila kitchens prepare both crisp fried thekua and light roasted fruit platters for visiting relatives.',
              hi: 'मिथिला की रसोई में आटे और गुड़ के ठेकुआ के साथ मौसमी फलों और सिंघाड़े का प्रसाद सजाया जाता है।',
            },
            keyIngredients: {
              en: 'Wheat flour, palm jaggery, water chestnut (singhara), sugarcane, and sweet lime.',
              hi: 'गेहूँ का आटा, गुड़, सिंघाड़ा, गन्ना और डाभ नींबू।',
            },
          },
          {
            name: {
              en: 'Makhana Kheer (Post-Parana Feast)',
              hi: 'मखाना खीर (पारण भोज)',
            },
            course: 'Festive Beverage',
            significance: {
              en: 'Using Mithila’s prized foxnuts, families celebrate the breaking of the 36-hour fast after sunrise arghya.',
              hi: 'छत्तीस घंटे के व्रत के पारण के बाद मिथिला के प्रसिद्ध मखानों से बनी खीर परिवार के साथ परोसी जाती है।',
            },
            keyIngredients: {
              en: 'Mithila foxnuts (makhana), whole milk, sugar, saffron, and slivered almonds.',
              hi: 'मिथिला मखाना, गाढ़ा दूध, चीनी, केसर और बादाम।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Eastern Uttar Pradesh & Jharkhand',
          hi: 'पूर्वांचल (उ.प्र.) एवं झारखंड',
        },
        localFestivalTitle: {
          en: 'Dala Chhath',
          hi: 'डाला छठ',
        },
        customsSummary: {
          en: 'Known as Dala Chhath after the woven bamboo baskets carried to riverbanks, communities in Varanasi, Gorakhpur, and Ranchi erect earthen altars (Sirsota) right on the ghat sands, lighting earthen lamps inside banana-stem boats that drift downstream at dawn.',
          hi: 'बाँस की डलिया (डाला) के नाम पर इसे डाला छठ कहा जाता है। वाराणसी, गोरखपुर और राँची में घाट की रेत पर मिट्टी की सिरसोता वेदी बनाई जाती है और भोर में केले के तने की छोटी नावों पर दीप जलाकर प्रवाहित किया जाता है।',
        },
        rituals: [
          {
            title: {
              en: 'Building the Sirsota Altar',
              hi: 'घाट पर सिरसोता निर्माण',
            },
            description: {
              en: 'Families craft mud shrines decorated with vermilion stripes and marigold flowers on the riverbank days ahead to reserve their spot.',
              hi: 'परिवार कई दिन पहले ही घाट पर मिट्टी की वेदी बनाकर उसे सिंदूर और गेंदे के फूलों से सजाते हैं।',
            },
          },
          {
            title: {
              en: 'Dandawat (Prostration) Vow',
              hi: 'दंडवत प्रणाम यात्रा',
            },
            description: {
              en: 'Some devotees fulfill vows by measuring the path from home to the river in full-body prostrations amidst encouraging chants.',
              hi: 'मन्नत पूर्ण होने पर कुछ श्रद्धालु घर से घाट तक लेटकर दंडवत प्रणाम करते हुए यात्रा पूरी करते हैं।',
            },
          },
          {
            title: {
              en: 'Banana-Stem Diya Boats',
              hi: 'केले के थंभ की दीप नौका',
            },
            description: {
              en: 'Tiny rafts fashioned from banana bark carry flickering lamps into the current after Usha Arghya.',
              hi: 'उषा अर्घ्य के बाद केले के तने से बनी छोटी नावों में दीये रखकर पवित्र जलधारा में प्रवाहित किए जाते हैं।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Bhakusa & Gur Thekua',
              hi: 'गुड़ ठेकुआ एवं नारियल प्रसाद',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'Shared joyfully across neighbors right on the ghats once the sun breaks the eastern horizon.',
              hi: 'सूर्योदय के अर्घ्य के तुरंत बाद घाट पर ही सभी परिचितों और राहगीरों में वितरित किया जाने वाला प्रसाद।',
            },
            keyIngredients: {
              en: 'Stone-ground wheat flour, dark jaggery, dry ginger, coconut, and clarified butter.',
              hi: 'चक्की का गेहूँ आटा, देसी गुड़, सोंठ, नारियल और घी।',
            },
          },
          {
            name: {
              en: 'Suthni & Shakar-Kand (Sweet Roots)',
              hi: 'सुथनी एवं भुना शकरकंद',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Earthy winter tubers included in the bamboo offering basket to honor soil fertility and forest produce.',
              hi: 'धरती की उर्वरता के सम्मान में सूप में रखे जाने वाले पारंपरिक कंद-मूल जिन्हें व्रत के बाद ग्रहण किया जाता है।',
            },
            keyIngredients: {
              en: 'Lesser yam (suthni), roasted sweet potato, water chestnut, and black salt.',
              hi: 'सुथनी, भुना शकरकंद, सिंघाड़ा और काला नमक।',
            },
          },
          {
            name: {
              en: 'Adrak-Gur Chai & Sharbat',
              hi: 'अदरक-गुड़ की चाय एवं शरबत',
            },
            course: 'Festive Beverage',
            significance: {
              en: 'Volunteers set up community tea stalls along cold November riverbanks to warm devotees emerging from the water.',
              hi: 'नवंबर की ठंडी सुबह में जल से बाहर आने वाले व्रतियों के लिए स्थानीय युवा घाटों पर गर्म चाय की सेवा लगाते हैं।',
            },
            keyIngredients: {
              en: 'Crushed fresh ginger, jaggery, Assam tea leaves, tulsi, and cardamom.',
              hi: 'कुटा ताजा अदरक, गुड़, चाय पत्ती, तुलसी और इलायची।',
            },
          },
        ],
      },
    ],
    greetingsAndTerms: {
      traditionalGreeting: {
        en: 'May Surya Dev and Chhathi Maiya bless your home with health and light.',
        hi: 'सूर्य देव और छठी मइया की कृपा से आपका जीवन स्वस्थ और आलोकित रहे।',
        transliteration: 'Chhath Mahaparv ki Hardik Shubhkamnayein',
        meaningEn: 'Heartfelt blessings on the Grand Festival of Chhath.',
        meaningHi: 'छठ महापर्व की मंगलमय शुभकामनाएँ।',
      },
      glossary: [
        {
          term: 'Arghya',
          nativeScript: 'अर्घ्य',
          meaning: {
            en: 'Ceremonial offering of river water and milk poured from a brass vessel toward the sun.',
            hi: 'पीतल या तांबे के पात्र से सूर्य की ओर मुख कर जल और दूध अर्पित करने की पवित्र विधि।',
          },
        },
        {
          term: 'Daura & Soop',
          nativeScript: 'दउरा एवं सूप',
          meaning: {
            en: 'Hand-woven bamboo baskets and winnowing trays holding seasonal fruits, sugarcane, and thekua.',
            hi: 'बाँस से बुने गए टोकरे और सूप जिनमें फल, गन्ना और ठेकुआ सजाकर घाट ले जाए जाते हैं।',
          },
        },
        {
          term: 'Vratin',
          nativeScript: 'व्रती',
          meaning: {
            en: 'The devotee observing the rigorous four-day ritual of cleanliness, fasting, and river offerings.',
            hi: 'चार दिनों तक कठोर नियम, शुद्धता और निर्जला उपवास का पालन करने वाला उपासक।',
          },
        },
      ],
    },
  },

  pongal: {
    id: 'pongal-curated',
    motherTongue: 'Hindi',
    motherTongueNativeName: 'हिन्दी',
    canonicalName: {
      en: 'Pongal & Makar Sankranti',
      hi: 'पोंगल एवं मकर संक्रांति',
    },
    tagline: {
      en: 'Harvest thanksgiving as the sun turns northward—celebrated across India with boiling pots of sweet rice, sesame, and kites.',
      hi: 'सूर्य के उत्तरायण होने पर नई फसल के स्वागत का महापर्व—मिट्टी की हाँडी में उबलती खिचड़ी, तिल-गुड़ और पतंगों का उत्सव।',
    },
    timingAndCalendar: {
      en: 'Mid-Winter · January 14–17 (Solar Makara Transit)',
      hi: 'शिशिर ऋतु · 14–17 जनवरी (सूर्य का मकर राशि में प्रवेश)',
    },
    duration: {
      en: '4 Days',
      hi: '4 दिवसीय फसली पर्व',
    },
    primaryRegionsSummary: {
      en: 'Tamil Nadu, Gujarat, Punjab, Assam & North India',
      hi: 'तमिलनाडु, गुजरात, पंजाब, असम एवं उत्तर भारत',
    },
    essence: {
      en: 'Solar Harvest · Agrarian Gratitude · Seasonal Renewal',
      hi: 'फसल कृतज्ञता · उत्तरायण सूर्य · प्राकृतिक नवचक्र',
    },
    visualCategory: 'harvest',
    overview: {
      en: 'One of the rare Indian festivals anchored strictly to the solar calendar rather than lunar cycles, Makar Sankranti marks the sun’s northward journey (Uttarayana) and longer daylight hours. From Tamil courtyards chanting "Pongalo Pongal!" as milk boils over clay pots, to Gujarati rooftops filled with kites and Punjabi bonfires of Lohri, each region expresses shared gratitude for the winter harvest through distinct customs and warming foods.',
      hi: 'चंद्र तिथियों के बजाय सौर पंचांग पर आधारित मकर संक्रांति सूर्य के उत्तरायण होने और नई फसल की कटाई का प्रतीक है। तमिलनाडु के आँगनों में मिट्टी की हाँडी में दूध उबलने पर "पोंगलो पोंगल" के स्वर गूँजते हैं, तो गुजरात के आसमान में पतंगें लहराती हैं और पंजाब में लोहड़ी की अलाव जलती है।',
    },
    historicalSignificance: {
      narrative: {
        en: 'Tamil Sangam literature from two millennia ago records Thai Niradal—an auspicious winter bathing and harvest thanksgiving ritual celebrated in the month of Thai. Farmers honored nature’s triad: Surya (sunlight), Bhoomi (fertile soil), and cattle that plowed the paddy fields.\n\nAcross northern and western India, astronomical treatises marked Makar Sankranti as the seasonal turning point toward spring. Bathing at river confluences like Prayagraj’s Sangam and Ganga Sagar, alongside sharing warming sesame and jaggery confections, became enduring pillars of mid-January cultural life.',
        hi: 'दो हजार वर्ष प्राचीन तमिल संगम साहित्य में "तै नीराडल" नामक शीतकालीन स्नान और फसल उत्सव का वर्णन मिलता है, जिसमें कृषक सूर्य, धरती और खेत जोतने वाले गोवंश के प्रति आभार प्रकट करते थे।\n\nउत्तर और पश्चिम भारत के खगोल ग्रंथों में मकर संक्रांति को शिशिर से वसंत की ओर संक्रमण का पुण्य काल माना गया है। प्रयागराज के संगम और गंगासागर में पवित्र स्नान तथा शीत से रक्षा करने वाले तिल और गुड़ के दान की परंपरा सदियों से चली आ रही है।',
      },
      pullQuote: {
        en: 'When the clay pot overflows in the courtyard, the year itself brims with enough to share.',
        hi: 'जब आँगन की मिट्टी की हाँडी दूध-चावल से छलक उठती है, तो समूचा वर्ष बांटने लायक समृद्धि से भर जाता है।',
      },
      milestones: [
        {
          era: {
            en: 'c. 200 BCE – 300 CE · Sangam Era Thai Harvest',
            hi: 'लगभग 200 ई.पू. – 300 ई. · संगम कालीन तै उत्सव',
          },
          detail: {
            en: 'Ancient Tamil poetry describes young villagers offering freshly harvested paddy and sugarcane to ensure abundant monsoons.',
            hi: 'प्राचीन तमिल काव्य में नए धान और गन्ने के अर्पण तथा अच्छी वर्षा की कामना का उल्लेख मिलता है।',
          },
        },
        {
          era: {
            en: 'Chola Dynasty · Inscription Records of Pongal',
            hi: 'चोल राजवंश · मंदिर शिलालेखों में पोंगल',
          },
          detail: {
            en: 'Temple inscriptions under Kulottunga Chola I mention royal endowments for preparing sweet rice offerings during Thai.',
            hi: 'चोल शासकों के शिलालेखों में तै माह के दौरान मंदिरों में मीठे पोंगल भोग के लिए विशेष व्यवस्थाओं का वर्णन है।',
          },
        },
        {
          era: {
            en: 'Modern Synthesis · Regional Tapestry on One Day',
            hi: 'आधुनिक युग · एक तिथि, अनेक क्षेत्रीय रूप',
          },
          detail: {
            en: 'Celebrated simultaneously as Pongal, Uttarayan, Magh Bihu, Pedda Panduga, and Khichdi Parv across the subcontinent.',
            hi: 'एक ही सौर संक्रांति पूरे उपमहाद्वीप में पोंगल, उत्तरायण, माघ बिहू और खिचड़ी पर्व के रूप में मनाई जाती है।',
          },
        },
      ],
    },
    regionalVariations: [
      {
        regionName: {
          en: 'Tamil Nadu (Thai Pongal)',
          hi: 'तमिलनाडु (तै पोंगल)',
        },
        localFestivalTitle: {
          en: 'Thai Pongal & Mattu Pongal',
          hi: 'तै पोंगल एवं मट्टू पोंगल',
        },
        customsSummary: {
          en: 'Courtyards are swept and adorned with expansive rice-flour kolams traced around red kaavi borders. On Thai Pongal morning, a turmeric-tied terracotta pot is set over firewood outdoors; when the milk and new rice foam over, the whole family shouts "Pongalo Pongal!" and blows conch shells.',
          hi: 'घर के द्वार पर चावल के आटे और गेरू से भव्य कोलम सजाया जाता है। आँगन में हल्दी के पत्ते से बंधी नई मिट्टी की हाँडी में जब नया चावल और दूध उबलकर बाहर छलकने लगता है, तब पूरा परिवार "पोंगलो पोंगल!" का जयघोष करता है।',
        },
        rituals: [
          {
            title: {
              en: 'Bhogi Bonfire of Renewal',
              hi: 'भोगी पर पुराने के त्याग की अग्नि',
            },
            description: {
              en: 'On the eve of Pongal, families discard worn household items and sing around a morning bonfire welcoming a fresh start.',
              hi: 'पोंगल से एक दिन पूर्व भोगी के अवसर पर पुरानी वस्तुओं को त्यागकर नए जीवन-चक्र का स्वागत किया जाता है।',
            },
          },
          {
            title: {
              en: 'Surya Pongal Courtyard Boiling',
              hi: 'आँगन में सूर्य पोंगल पाक',
            },
            description: {
              en: 'Newly harvested rice is boiled outdoors facing the morning sun in a clay vessel adorned with fresh turmeric and ginger stalks.',
              hi: 'उगते सूर्य की ओर मुख कर ताजी हल्दी और अदरक के पौधों से सजी हाँडी में नया चावल पकाया जाता है।',
            },
          },
          {
            title: {
              en: 'Mattu Pongal Cattle Adornment',
              hi: 'मट्टू पोंगल (गोवंश श्रृंगार)',
            },
            description: {
              en: 'Bulls and cows are bathed, their horns painted vibrant hues, hung with brass bells and marigold garlands, and fed sweet Pongal first.',
              hi: 'बैलों और गायों को स्नान कराकर उनके सींग रंगे जाते हैं, घुँघरू व माला पहनाकर सबसे पहले उन्हें पोंगल खिलाया जाता है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Sakkarai Pongal',
              hi: 'शक्करै पोंगल (मीठा पोंगल)',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'The centerpiece sweet dish made from the season’s very first paddy, dark palm jaggery, and ghee-fried cashews.',
              hi: 'फसल के पहले चावल, गन्ने के गुड़ और घी में तले काजू से बना प्रमुख मीठा भोग।',
            },
            keyIngredients: {
              en: 'New raw rice, split moong dal, dark jaggery, edible camphor (pachai karpooram), cashews, and ghee.',
              hi: 'नया अरवा चावल, मूंग दाल, देसी गुड़, काजू, किशमिश और शुद्ध घी।',
            },
          },
          {
            name: {
              en: 'Ven Pongal & Gothsu',
              hi: 'वेन पोंगल एवं गोत्सु',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Peppery, comforting savory rice-and-lentil dish tempered with cumin and curry leaves, served beside tangy brinjal stew.',
              hi: 'काली मिर्च, जीरा और करी पत्ते के तड़के वाला नमकीन पोंगल, जिसे खट्टे बैंगन गोत्सु के साथ परोसा जाता है।',
            },
            keyIngredients: {
              en: 'Rice, yellow moong dal, whole black peppercorns, cumin, ginger, asafoetida, and curry leaves.',
              hi: 'चावल, मूंग दाल, साबुत काली मिर्च, जीरा, अदरक, हींग और करी पत्ता।',
            },
          },
          {
            name: {
              en: 'Freshly Cut Karumbu (Sugarcane) & Panakam',
              hi: 'ताजा गन्ना एवं पानकम',
            },
            course: 'Festive Beverage',
            significance: {
              en: 'Stalks of juicy winter sugarcane tied at doorways are chewed after the feast alongside spiced jaggery coolant.',
              hi: 'पूजा में अर्पित ताजे गन्ने और सोंठ-इलायची युक्त गुड़ का पानकम उत्सव का स्वाभाविक हिस्सा है।',
            },
            keyIngredients: {
              en: 'Fresh black-skinned sugarcane, jaggery water, dry ginger, cardamom, and crushed black pepper.',
              hi: 'ताजा गन्ना, गुड़ का पानी, सोंठ, इलायची और काली मिर्च।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Gujarat (Uttarayan)',
          hi: 'गुजरात (उत्तरायण)',
        },
        localFestivalTitle: {
          en: 'Uttarayan & Vasi Uttarayan',
          hi: 'उत्तरायण एवं वासी उत्तरायण',
        },
        customsSummary: {
          en: 'From dawn till dusk, families climb onto sunlit terraces across Ahmedabad, Surat, and Vadodara for spirited kite-flying battles ("Kai Po Che!"). At nightfall, paper sky-lanterns (Tukkals) drift upward while relatives gather on rooftops over steaming cauldrons of winter vegetables.',
          hi: 'अहमदाबाद, सूरत और वडोदरा की छतें सुबह से शाम तक पतंगबाजी और "काइ पो छे!" के उत्साह से गूँज उठती हैं। परिवार छतों पर ही संगीत और पारंपरिक शीतकालीन पकवानों के साथ पूरा दिन बिताते हैं।',
        },
        rituals: [
          {
            title: {
              en: 'Sunrise Rooftop Kite Flying',
              hi: 'छतों पर सामूहिक पतंगबाजी',
            },
            description: {
              en: 'Neighbors share terraces with bamboo reels (firki) of cotton thread, celebrating winter sunshine and coastal breezes.',
              hi: 'पड़ोसी और परिवार मिलजुलकर फिरकी और पतंगों के साथ सर्द धूप व हवा का आनंद लेते हैं।',
            },
          },
          {
            title: {
              en: 'Daan & Khichdi Charity',
              hi: 'तिल, अन्न एवं गो-दान',
            },
            description: {
              en: 'Early morning charity of grain, sesame sweets, and green fodder for cattle precedes the afternoon terrace celebrations.',
              hi: 'प्रातःकाल जरूरतमंदों को अनाज, तिल-गुड़ और गौशालाओं में हरा चारा दान करने का विशेष महत्व है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Surti Undhiyu & Puri',
              hi: 'सूरती उंधियू एवं पूरी',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Slow-cooked inverted-pot casserole harnessing fleeting January winter vegetables like purple yam and green pigeon peas.',
              hi: 'जनवरी की विशेष मौसमी सब्जियों—सुरती पापड़ी, रतालू और मेथी मुठिया—से मिट्टी के मटके में पकाया जाने वाला अनूठा व्यंजन।',
            },
            keyIngredients: {
              en: 'Surti papdi beans, purple yam (ratalu), baby brinjals, fenugreek dumplings (muthiya), and green garlic.',
              hi: 'सुरती पापड़ी, रतालू, छोटे बैंगन, मेथी के मुठिए और हरा लहसुन।',
            },
          },
          {
            name: {
              en: 'Til Chikki & Mamra Ladoo',
              hi: 'तिल की चिक्की एवं ममरा लड्डू',
            },
            course: 'Sweet',
            significance: {
              en: 'Pocket-sized energy bars of roasted sesame and jaggery munched nonstop on windy rooftops.',
              hi: 'छतों पर पतंग उड़ाते समय ऊर्जा और गर्माहट देने वाली तिल और मुरमुरे की गुड़ पट्टी।',
            },
            keyIngredients: {
              en: 'White sesame seeds, Kolhapuri jaggery, roasted peanuts, and puffed rice.',
              hi: 'सफेद तिल, गुड़, भुनी मूंगफली और मुरमुरा।',
            },
          },
          {
            name: {
              en: 'Jalebi & Fafda',
              hi: 'गरमागरम जलेबी एवं फाफड़ा',
            },
            course: 'Sweet',
            significance: {
              en: 'Golden saffron spirals devoured hot on terraces as kite lines dance overhead.',
              hi: 'उत्तरायण की धूप में छतों पर जलेबी और फाफड़े की जोड़ी उत्सव का स्वाद दोगुना कर देती है।',
            },
            keyIngredients: {
              en: 'Fermented batter, saffron sugar syrup, chickpea flour, carom seeds, and raw papaya chutney.',
              hi: 'मैदा, केसर चाशनी, बेसन, अजवाइन और कच्चे पपीते की चटनी।',
            },
          },
        ],
      },
      {
        regionName: {
          en: 'Punjab & Northern Plains (Lohri / Maghi)',
          hi: 'पंजाब एवं उत्तर भारत (लोहड़ी / खिचड़ी)',
        },
        localFestivalTitle: {
          en: 'Lohri, Maghi & Khichdi Parv',
          hi: 'लोहड़ी, माघी एवं खिचड़ी पर्व',
        },
        customsSummary: {
          en: 'In Punjab, celebrations begin the night before with a crackling community bonfire (Lohri), where families circle the flames tossing puffed rice, sesame, and jaggery while singing folk ballads of Dulla Bhatti. In UP and Bihar, Makar Sankranti morning brings river baths followed by steaming black-urad Khichdi.',
          hi: 'पंजाब में एक रात पहले लोहड़ी की पवित्र अग्नि के चारों ओर लोकगीत गाते हुए रेवड़ी, मक्का और तिल अर्पित किए जाते हैं। वहीं उत्तर प्रदेश और बिहार में प्रातः स्नान-दान के बाद उड़द दाल की गरम खिचड़ी का भोज परंपरागत रूप से खाया जाता है।',
        },
        rituals: [
          {
            title: {
              en: 'Lohri Bonfire Parikrama',
              hi: 'लोहड़ी अग्नि की परिक्रमा',
            },
            description: {
              en: 'Newborns and newlyweds receive blessings as families circle the winter fire offering til and rewari.',
              hi: 'नवविवाहित जोड़ों और नवजात शिशुओं के लिए मंगलकामना करते हुए अग्नि में तिल व रेवड़ी डाली जाती है।',
            },
          },
          {
            title: {
              en: 'Khichdi Daan (Sacred Grain Gift)',
              hi: 'कच्ची खिचड़ी का दान',
            },
            description: {
              en: 'Uncooked rice, black urad lentils, and ghee are touched in gratitude and gifted to daughters, elders, and community kitchens.',
              hi: 'कच्चा चावल, काली उड़द दाल और घी दान कर समाज के हर वर्ग के साथ नई फसल साझा की जाती है।',
            },
          },
        ],
        celebratoryFoods: [
          {
            name: {
              en: 'Makki di Roti & Sarson da Saag',
              hi: 'मक्की दी रोटी एवं सरसों दा साग',
            },
            course: 'Savory Feast',
            significance: {
              en: 'Winter’s quintessential Punjabi harvest dinner served with white homemade butter and a slab of jaggery.',
              hi: 'पंजाब की शीतकालीन फसल का गौरव—ताजे सफेद मक्खन और गुड़ की डली के साथ परोसा जाने वाला साग और मक्की की रोटी।',
            },
            keyIngredients: {
              en: 'Mustard greens, bathua, spinach, yellow maize flour, white butter, and ginger.',
              hi: 'सरसों का साग, बथुआ, पालक, मक्की का आटा, सफेद मक्खन और अदरक।',
            },
          },
          {
            name: {
              en: 'Til-Gud Ladoo, Gajak & Rewari',
              hi: 'तिल-गुड़ के लड्डू, गजक एवं रेवड़ी',
            },
            course: 'Sweet',
            significance: {
              en: 'Warming winter confections shared with the classic Marathi/Hindi adage: "Eat sesame and jaggery, and speak sweet words."',
              hi: '"तिल-गुड़ खाएं और मीठा बोलें"—शीत ऋतु में शरीर को ऊष्मा और वाणी को मधुरता देने वाले व्यंजन।',
            },
            keyIngredients: {
              en: 'Toasted sesame seeds, organic jaggery, roasted peanuts, and cardamom.',
              hi: 'भुने हुए तिल, देसी गुड़, मूंगफली और छोटी इलायची।',
            },
          },
          {
            name: {
              en: 'Urad Dal Khichdi with Curd & Papadam',
              hi: 'उड़द दाल खिचड़ी, दही एवं तिलौरी',
            },
            course: 'Sacred Offering',
            significance: {
              en: 'Considered purifying and grounding across UP and Bihar on Makar Sankranti afternoon, paired with seasonal greens and pickle.',
              hi: 'उत्तर प्रदेश और बिहार में मकर संक्रांति का अनिवार्य मध्याह्न भोजन, जिसे घी, दही और अचार के साथ खाया जाता है।',
            },
            keyIngredients: {
              en: 'New winter rice, split black urad dal, fresh green peas, cauliflower, ginger, and desi ghee.',
              hi: 'नया चावल, काली उड़द दाल, हरी मटर, फूलगोभी, अदरक और देसी घी।',
            },
          },
        ],
      },
    ],
    greetingsAndTerms: {
      traditionalGreeting: {
        en: 'May the northward sun bring sweet harvests and warm words to your home.',
        hi: 'मकर संक्रांति एवं पोंगल के पावन अवसर पर तिल-गुड़ जैसी मधुरता और समृद्धि की शुभकामनाएँ।',
        transliteration: 'Pongalo Pongal / Til-Gud Ghya, God-God Bola',
        meaningEn: 'May it overflow with abundance / Accept sesame and jaggery, and speak gently.',
        meaningHi: 'जीवन समृद्धि से छलक उठे / तिल-गुड़ लें और मधुर वाणी बोलें।',
      },
      glossary: [
        {
          term: 'Uttarayana',
          nativeScript: 'उत्तरायण',
          meaning: {
            en: 'The six-month astronomical period when the sun appears to travel northward across the horizon.',
            hi: 'सूर्य के मकर राशि से कर्क राशि की ओर उत्तर दिशा में गमन का छह माह का पुण्य काल।',
          },
        },
        {
          term: 'Kolam / Muggu',
          nativeScript: 'कोलम / मुग्गु',
          meaning: {
            en: 'Intricate geometric threshold drawings made with rice flour to invite prosperity and feed ants and birds.',
            hi: 'चावल के आटे से बनाई जाने वाली ज्यामितीय आकृति जो शुभता के साथ छोटे जीवों के पोषण का माध्यम भी है।',
          },
        },
        {
          term: 'Bhogi / Lohri',
          nativeScript: 'भोगी / लोहड़ी',
          meaning: {
            en: 'The bonfire evening preceding the solar transit that symbolizes releasing old stagnation for new growth.',
            hi: 'संक्रांति से पूर्व की संध्या जब अग्नि के समक्ष नए फसल चक्र का स्वागत किया जाता है।',
          },
        },
      ],
    },
  },
};
