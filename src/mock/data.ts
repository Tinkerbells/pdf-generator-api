export const mock = {
  patient_info: {
    name: "ivan",
    age: 68,
    bmi: "21.91",
    allergies: "none",
    address: "123456789 St",
    biosample_type: "fec",
    collection_date: "2023-01-01",
    analysis_type: "microbial",
    report_date: "2023-02-04",
    track: "metabolic",
    kilocalories: 1500,
  },
  main_disease: "Здоровый",
  main_risk: "high",
  microbiota_age: 43,
  healthy_index: 45,
  all_main_risk: [
    {
      desease_name: "Ожирение",
      d_risk: "medium",
    },
    {
      desease_name: "Диабет Второго Типа",
      d_risk: "low",
    },
    {
      desease_name: "Рассеянный Склероз",
      d_risk: "medium",
    },
    {
      desease_name: "Болезнь Альцгеймера",
      d_risk: "low",
    },
    {
      desease_name: "Болезнь Паркинсона",
      d_risk: "medium",
    },
    {
      desease_name: "Депрессия",
      d_risk: "medium",
    },
    {
      desease_name: "Синдром Раздраженного Кишечника",
      d_risk: "medium",
    },
  ],
  special_bacter: [
    {
      name: "Anaerostipes",
      effect:
        "Эти бактерии являются продуцентами короткоцепочечных жирных кислот, поддерживающих стабильность эпителиального барьера кишечника и снижающих воспаление. Понижают риск развития рака толстой кишки.",
      norm: {
        upper: 0.6903451725862931,
        lower: 0.0100725221595487,
      },
      patient_quantity: 0.8202460738221466,
      treatment: [],
    },
    {
      name: "Barnesiella",
      effect:
        "Могут повышать эффективность противоопухолевых препаратов, регулируя иммунитет.",
      norm: {
        upper: 1.7404177148734177,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Blautia",
      effect:
        "Эти бактерии являются продуцентами короткоцепочечных жирных кислот, поддерживающих стабильность эпителиального барьера кишечника и снижающих воспаление. Могут ограничивать колонизацию холерных вибрионов и уменьшать рост опухоли толстой кишки, способствуя активации иммунного ответа.",
      norm: {
        upper: 3.5925710595724385,
        lower: 0.0606379129031698,
      },
      patient_quantity: 3.290987296188857,
      treatment: [],
    },
    {
      name: "Butyricicoccus",
      effect:
        "Производят из пищевых волокон масляную кислоту и другие короткоцепочечные жирные кислоты (КЖК), которые понижают риск развития ожирения и воспалений.",
      norm: {
        upper: 0.8604646581466284,
        lower: 0.01000300090027,
      },
      patient_quantity: 0.26007802340702213,
      treatment: [],
    },
    {
      name: "Collinsella",
      effect:
        "Обладают противовоспалительным потенциалом. Синтезируют урсодезоксихолат - метаболит, ингибирующий связывание SARS-CoV-2 с рецептором. Участвуют в продуцировании желчных кислот.",
      norm: {
        upper: 1.3913218288366145,
        lower: 0.01,
      },
      patient_quantity: 2.1206361908572573,
      treatment: [],
    },
    {
      name: "Coprococcus",
      effect:
        "Эти бактерии являются продуцентами короткоцепочечных жирных кислот, поддерживающих стабильность эпителиального барьера кишечника и снижающих воспаление. Обычно содержание этих бактерий повышено у людей с высоким качеством жизни, а также людей, не страдающих депрессией.",
      norm: {
        upper: 0.2801232565867809,
        lower: 0.01000100010001,
      },
      patient_quantity: 0.18005401620486144,
      treatment: [],
    },
    {
      name: "Faecalibacterium",
      effect:
        "Обычно содержание этих бактерий повышено у людей с высоким качеством жизни и отсутствием симптомов депрессии, профессиональных спортсменов. Способны расщеплять сложные углеводы, например, пектин, синтезируют противовоспалительные белки и бутираты. Снижение количества ассоциировано с развитием синдрома раздраженного кишечника (СРК) и болезни Крона, сахарного диабета, неврологических заболеваний.",
      norm: {
        upper: 6.757933609958498,
        lower: 0.103486736384062,
      },
      patient_quantity: 0.08002400720216064,
      treatment: ["БАД", "Пробиотик", "План питания"],
    },
    {
      name: "Parabacteroides",
      effect:
        "Эти бактерии участвуют в метаболизме желчных кислот и часто встречаются у долгожителей.",
      norm: {
        upper: 2.4294292348618245,
        lower: 0.01,
      },
      patient_quantity: 0.7502250675202561,
      treatment: [],
    },
    {
      name: "Phascolarctobacterium",
      effect:
        "Эти бактерии могут препятствовать развитию метаболического синдрома, способствуют поддержанию хорошего настроения.",
      norm: {
        upper: 0.8018281952839115,
        lower: 0.01,
      },
      patient_quantity: 0.1100330099029709,
      treatment: [],
    },
    {
      name: "Roseburia",
      effect:
        "Продуценты короткоцепочечных жирных кислот, в том числе бутирата. Снижают воспалительные реакции иммунитета, предотвращая развитие заболеваний кишечника, метаболических заболеваний, патологий нервной системы.",
      norm: {
        upper: 1.272870302483056,
        lower: 0.040249547192594,
      },
      patient_quantity: 1.000300090027008,
      treatment: [],
    },
    {
      name: "Ruminococcus",
      effect:
        "Улучшают усваиваемость пищевых волокон, продуценты короткоцепочечных жирных кислот, уменьшают рост опухоли толстой кишки и способствуют активации иммунного ответа при колоректальном раке .",
      norm: {
        upper: 2.58,
        lower: 0.03,
      },
      patient_quantity: 0.060018005401620486,
      treatment: [],
    },
  ],
  patogenes: {
    super_patogen: [],
    norm_patogen: [
      {
        name: "Atopobium",
        effect:
          "Условно-патогенные бактерии. Ассоциированы с хроническими воспалительными заболеваниями различных систем органов и развитием колоректального рака.",
        patient_quantity: 0.030009002700810243,
        treatment: [],
      },
      {
        name: "Parvimonas",
        effect:
          "Условно-патогенные бактерии. Ассоциированы с воспалительными хроническими заболеваниями различных систем органов, развитием колоректального рака.",
        patient_quantity: 0.01000300090027008,
        treatment: [],
      },
      {
        name: "Bacillus",
        effect:
          "Входят в состав нормальной микробиоты, среди представителей этой группы есть как пробиотики, так и возбудители инфекционных заболеваний.",
        patient_quantity: 0.07002100630189058,
        treatment: [],
      },
      {
        name: "Bacteroides",
        effect:
          "Входят в состав нормальной микробиоты кишечника, однако могут быть связаны с развитием инфекционных и воспалительных заболеваний. Одни из основных продуцентов газов в кишечнике. Некоторые виды обладают противовоспалительным потенциалом, участвуют в метаболизме желчных кислот.",
        patient_quantity: 3.5710713213964187,
        treatment: [],
      },
      {
        name: "Clostridioides",
        effect:
          "Условно-патогенные бактерии, входят в состав нормальной микробиоты кишечника, могут вызывать инфекции. Одни из основных продуцентов газов в кишечнике.",
        patient_quantity: 0.02000600180054016,
        treatment: [],
      },
      {
        name: "Enterobacter",
        effect:
          "Условно-патогенные бактерии, входят в состав нормальной микробиоты кишечника, но могут вызывать инфекционные заболевания.",
        patient_quantity: 0.01000300090027008,
        treatment: [],
      },
      {
        name: "Enterococcus",
        effect:
          "Условно-патогенные бактерии. Входят в состав нормальной микробиоты кишечника. Могут вызывать инфекционные заболевания различных систем органов, эндокардит.",
        patient_quantity: 0.01000300090027008,
        treatment: [],
      },
      {
        name: "Peptostreptococcus",
        effect:
          "Входят в состав нормальной микробиоты, однако редко могут быть ассоциированы с воспалительными заболеваниями и развитием колоректального рака.",
        patient_quantity: 0.01000300090027008,
        treatment: [],
      },
      {
        name: "Streptococcus",
        effect:
          "Часть нормальной микробиоты. Среди представителей группы есть как пробиотики, так и патогенные бактерии.",
        patient_quantity: 1.2603781134340302,
        treatment: [],
      },
      {
        name: "Veillonella",
        effect:
          "Часть нормальной микробиоты кишечника, оппортунистический патоген, ассоциированный с воспалительными заболеваниями различных систем органов. Одни из основных продуцентов газов в кишечнике.",
        patient_quantity: 0.04001200360108032,
        treatment: [],
      },
    ],
  },
  probiotics: [
    {
      name: "Bifidobacterium",
      effect:
        "Могут препятствовать развитию дефицита витамина К, синдрома раздраженного кишечника (СРК), запора, диареи, атопических заболеваний, бронхиальной астмы, колоректального рака, хронической болезни почек, понижают стресс. Продуцируют фолиевую кислоту, от которой зависит здоровье кровеносной системы, участвуют в регуляции иммунитета",
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0,
      treatment: ["Пробиотик"],
    },
    {
      name: "Lacticaseibacillus",
      effect:
        "Могут препятствовать развитию бактериального вагиноза, диареи, гастроэнтерита. Кроме того, могут поддерживать иммунитет, синтезируя липотейхоевую кислоту, а также противодействовать негативному влиянию радиации на организм млекопитающих",
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0.0,
      treatment: ["Пробиотик"],
    },
    {
      name: "Lactobacillus",
      effect:
        "Эти бактерии обладают противовоспалительным потенциалом, имеют анксиолитические свойства. Повышают эффективность при переутомлении, снижают проявления стресса. Преобразуют лактозу в молочную кислоту, которая сдерживает рост патогенной флоры, усиливают барьерную функцию эпителия и имеют иммуномодулирующие свойства",
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0,
      treatment: ["Пробиотик"],
    },
    {
      name: "Lactococcus",
      effect:
        "Эти бактерии продуцируют молочную кислоту, которая ограничивает рост патогенной микрофлоры, а также низин - бактериоцин, который помимо антимикробного действия может оказывать иммуномодулирующий эффект и цитотоксическое действие на раковые клетки",
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0,
      treatment: ["Пробиотик"],
    },
    {
      name: "Levilactobacillus",
      effect:
        'Продуценты гамма-аминомаслянной кислоты, участвуют в регуляции оси "кишечник-мозг". Обладают противовоспалительным потенциалом',
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0.0,
      treatment: ["Пробиотик"],
    },
    {
      name: "Propionibacterium",
      effect:
        "Эти бактерии обеспечивают модуляцию микробиоты и метаболическую активность в кишечнике, модуляцию кишечной перистальтики и иммунной системы, оказывают влияние на воспаление кишечника и имеют противораковый потенциал, повышают устойчивость к стрессу",
      norm: {
        lower: 0.01,
      },
      patient_quantity: 0.0,
      treatment: ["БАД", "Пробиотик"],
    },
  ],
  bacteria_problems: [],
  vitamin_back: [
    {
      name: "Agathobacter",
      vitamin: "B2",
      norm: {
        upper: 1.3710354075084352,
        lower: 0.0300279260343317,
      },
      patient_quantity: 0.3501050315094528,
      treatment: [],
    },
    {
      name: "Alistipes",
      vitamin: "B7, B5, B3, B9, B6, B2",
      norm: {
        upper: 6.034284456079119,
        lower: 0.01,
      },
      patient_quantity: 0.07002100630189058,
      treatment: [],
    },
    {
      name: "Anaerostipes",
      vitamin: "B5, B6, B3, B2",
      norm: {
        upper: 0.6903451725862931,
        lower: 0.0100725221595487,
      },
      patient_quantity: 0.8202460738221466,
      treatment: [],
    },
    {
      name: "Bacillus",
      vitamin: "B7, B5, B3, A, B1, B9, B6, K2, B2",
      norm: {
        upper: 0.3,
        lower: 0.01,
      },
      patient_quantity: 0.07002100630189058,
      treatment: [],
    },
    {
      name: "Bacteroides",
      vitamin: "B7, B5, B3, A, B1, B6, B12, K2, B2",
      norm: {
        upper: 33.07693938365573,
        lower: 0.1125771549163026,
      },
      patient_quantity: 3.5710713213964187,
      treatment: [],
    },
    {
      name: "Bacteroidota",
      vitamin: "B12, B9, B2",
      norm: {
        upper: 56.83989397786128,
        lower: 0.580017401740174,
      },
      patient_quantity: 6.682004601380413,
      treatment: [],
    },
    {
      name: "Barnesiella",
      vitamin: "B3, B2, B7",
      norm: {
        upper: 1.7404177148734177,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Bifidobacterium",
      vitamin: "B3, A, B1, B9, B6, D3, B12, B2",
      norm: {
        upper: 13.244812305560494,
        lower: 0.01,
      },
      patient_quantity: 18.64559367810343,
      treatment: [],
    },
    {
      name: "Blautia",
      vitamin: "B3, B1, B9, B6, D3, B2",
      norm: {
        upper: 3.5925710595724385,
        lower: 0.0606379129031698,
      },
      patient_quantity: 3.290987296188857,
      treatment: [],
    },
    {
      name: "Butyricicoccus",
      vitamin: "B7, B9, B1, B6, B2",
      norm: {
        upper: 0.8604646581466284,
        lower: 0.01000300090027,
      },
      patient_quantity: 0.26007802340702213,
      treatment: [],
    },
    {
      name: "Butyrivibrio",
      vitamin: "B6, B2",
      norm: {
        upper: 0.3834047937014714,
        lower: 0.01,
      },
      patient_quantity: 0.060018005401620486,
      treatment: [],
    },
    {
      name: "Cetobacterium",
      vitamin: "B1, B7",
      norm: {
        upper: 0.01000200040008,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Collinsella",
      vitamin: "B6, B3",
      norm: {
        upper: 1.3913218288366145,
        lower: 0.01,
      },
      patient_quantity: 2.1206361908572573,
      treatment: [],
    },
    {
      name: "Coprococcus",
      vitamin: "D3, B3",
      norm: {
        upper: 0.2801232565867809,
        lower: 0.01000100010001,
      },
      patient_quantity: 0.18005401620486144,
      treatment: [],
    },
    {
      name: "Dorea",
      vitamin: "B6, B3, B2",
      norm: {
        upper: 0.3603941777693453,
        lower: 0.01000300090027,
      },
      patient_quantity: 0.2900870261078323,
      treatment: [],
    },
    {
      name: "Eggerthella",
      vitamin: "K2, A",
      norm: {
        upper: 0.2201849572150208,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Enterobacter",
      vitamin: "B5",
      norm: {
        upper: 0.6101037189135996,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Faecalibacterium",
      vitamin: "B12, B2",
      norm: {
        upper: 6.757933609958498,
        lower: 0.103486736384062,
      },
      patient_quantity: 0.08002400720216064,
      treatment: ["БАД", "Пробиотик", "План питания"],
    },
    {
      name: "Fusobacteriia",
      vitamin: "B12, B9, B2",
      norm: {
        upper: 0.3676956521739046,
        lower: 0.01,
      },
      patient_quantity: 2.53075922776833,
      treatment: [],
    },
    {
      name: "Fusobacterium",
      vitamin: "B3, A, B1, B9, B6, B12",
      norm: {
        upper: 0.29002900290029,
        lower: 0.01,
      },
      patient_quantity: 2.0506151845553666,
      treatment: [],
    },
    {
      name: "Gordonibacter",
      vitamin: "B6",
      norm: {
        upper: 0.0627346083244957,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Intestinibacter",
      vitamin: "B6, B3",
      norm: {
        upper: 0.0531893689079259,
        lower: 0.01,
      },
      patient_quantity: 0.030009002700810243,
      treatment: [],
    },
    {
      name: "Lachnoclostridium",
      vitamin: "B3, B2, B1",
      norm: {
        upper: 0.8897218029566825,
        lower: 0.0402183859204712,
      },
      patient_quantity: 2.230669200760228,
      treatment: [],
    },
    {
      name: "Lactobacillus",
      vitamin: "A, B1, B9, B6, D3, B12, B2",
      norm: {
        upper: 0.140009800980098,
        lower: 0.01,
      },
      patient_quantity: 0.07002100630189058,
      treatment: [],
    },
    {
      name: "Lactococcus",
      vitamin: "K2, B2",
      norm: {
        upper: 0.1000610391259475,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Megasphaera",
      vitamin: "B9, B2, B1",
      norm: {
        upper: 0.748677581863975,
        lower: 0.01,
      },
      patient_quantity: 0.04001200360108032,
      treatment: [],
    },
    {
      name: "Odoribacter",
      vitamin: "B7, B5, B3, B9, B6, B2",
      norm: {
        upper: 0.6351534709743658,
        lower: 0.01,
      },
      patient_quantity: 0.05001500450135041,
      treatment: [],
    },
    {
      name: "Olsenella",
      vitamin: "B7, B5, B3, B9, B6, B2",
      norm: {
        upper: 0.1,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Paenibacillus",
      vitamin: "B7, B5, B9, B6, B2",
      norm: {
        upper: 0.0303336703741152,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Peptostreptococcus",
      vitamin: "A",
      norm: {
        upper: 0.0224595830588214,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Phascolarctobacterium",
      vitamin: "B5, B6, B2",
      norm: {
        upper: 0.8018281952839115,
        lower: 0.01,
      },
      patient_quantity: 0.1100330099029709,
      treatment: [],
    },
    {
      name: "Prevotella",
      vitamin: "B5, B3, B1, B9, B6, B12, B2",
      norm: {
        upper: 3.0196148118333657,
        lower: 0.01,
      },
      patient_quantity: 0.1100330099029709,
      treatment: [],
    },
    {
      name: "Pseudarthrobacter",
      vitamin: "B7, B5, B9, B6, B2",
      norm: {
        upper: 0.0,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Pseudobutyrivibrio",
      vitamin: "B5, B3, B2",
      norm: {
        upper: 0.0403229879012542,
        lower: 0.01,
      },
      patient_quantity: 0.030009002700810243,
      treatment: [],
    },
    {
      name: "Romboutsia",
      vitamin: "B6, B7",
      norm: {
        upper: 0.6700469046904689,
        lower: 0.01,
      },
      patient_quantity: 0.19005701710513154,
      treatment: [],
    },
    {
      name: "Roseburia",
      vitamin: "B5, B6, B3, B2",
      norm: {
        upper: 1.272870302483056,
        lower: 0.040249547192594,
      },
      patient_quantity: 1.000300090027008,
      treatment: [],
    },
    {
      name: "Ruminiclostridium",
      vitamin: "B6, B3, B2",
      norm: {
        upper: 0.081427437064521,
        lower: 0.01,
      },
      patient_quantity: 0.08002400720216064,
      treatment: [],
    },
    {
      name: "Ruminococcus",
      vitamin: "B5, B3, A, B1, D3, B12, B2",
      norm: {
        upper: 2.58,
        lower: 0.03,
      },
      patient_quantity: 0.060018005401620486,
      treatment: [],
    },
    {
      name: "Sellimonas",
      vitamin: "B1",
      norm: {
        upper: 0.0600300150075037,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Senegalimassilia",
      vitamin: "B2",
      norm: {
        upper: 0.0900243067519175,
        lower: 0.01,
      },
      patient_quantity: 0.01000300090027008,
      treatment: [],
    },
    {
      name: "Streptococcus",
      vitamin: "B12, B9",
      norm: {
        upper: 2.520680589053691,
        lower: 0.01000200040008,
      },
      patient_quantity: 1.2603781134340302,
      treatment: [],
    },
    {
      name: "Streptomyces",
      vitamin: "B5, B6, B2, B7",
      norm: {
        upper: 0.0300270243218897,
        lower: 0.01,
      },
      patient_quantity: 0.02000600180054016,
      treatment: [],
    },
    {
      name: "Tyzzerella",
      vitamin: "B2",
      norm: {
        upper: 0.2621892944870104,
        lower: 0.01000100010001,
      },
      patient_quantity: 0.3501050315094528,
      treatment: [],
    },
  ],
  vitamin_speed: [
    {
      vitamin: "B1",
      bacteria: [
        "Arcobacter",
        "Paralactobacillus",
        "Butyricicoccus",
        "Bacteroides",
        "Fusobacterium",
        "Lachnoclostridium",
        "Sellimonas",
        "Lactobacillus",
        "Acidaminococcus",
        "Blautia",
        "Ruminococcus",
        "Prevotella",
        "Megasphaera",
        "Bacillus",
        "Bifidobacterium",
        "Methanobrevibacter",
        "Cetobacterium",
      ],
      current_speed: 30.429128738621586,
      upper_speed: 60.10451299071461,
      lower_speed: 0,
    },
    {
      vitamin: "B2",
      bacteria: [
        "Paralactobacillus",
        "Faecalitalea",
        "Prevotella",
        "Geobacillus",
        "Bacillus",
        "Coprobacter",
        "Megamonas",
        "Faecalibacterium",
        "Arcobacter",
        "Phascolarctobacterium",
        "Pseudarthrobacter",
        "Butyricicoccus",
        "Bacteroides",
        "Akkermansia",
        "Odoribacter",
        "Lachnoclostridium",
        "Eubacterium",
        "Dorea",
        "Barnesiella",
        "Weissella",
        "Pseudobutyrivibrio",
        "Butyrivibrio",
        "Olsenella",
        "Ruminiclostridium",
        "Leuconostoc",
        "Fusobacteriia",
        "Cloacibacillus",
        "Lactobacillus",
        "Acidaminococcus",
        "Ruminococcus",
        "Megasphaera",
        "Roseburia",
        "Paraprevotella",
        "Alistipes",
        "Tyzzerella",
        "Agathobacter",
        "Bacteroidota",
        "Lactococcus",
        "Senegalimassilia",
        "Adlercreutzia",
        "Streptomyces",
        "Blautia",
        "Muribaculum",
        "Paenibacillus",
        "Propionibacterium",
        "Anaerostipes",
        "Bifidobacterium",
      ],
      current_speed: 40.952285685705704,
      upper_speed: 147.557725372758,
      lower_speed: 0,
    },
    {
      vitamin: "B5",
      bacteria: [
        "Enterobacter",
        "Libanicoccus",
        "Prevotella",
        "Bacillus",
        "Phascolarctobacterium",
        "Arcobacter",
        "Pseudarthrobacter",
        "Bacteroides",
        "Akkermansia",
        "Odoribacter",
        "Pseudobutyrivibrio",
        "Ruminococcus",
        "Roseburia",
        "Paraprevotella",
        "Alistipes",
        "Adlercreutzia",
        "Streptomyces",
        "Paenibacillus",
        "Anaerostipes",
        "Geobacillus",
      ],
      current_speed: 5.941782534760429,
      upper_speed: 59.00467295641588,
      lower_speed: 0,
    },
    {
      vitamin: "B6",
      bacteria: [
        "Paralactobacillus",
        "Ezakiella",
        "Prevotella",
        "Bacillus",
        "Megamonas",
        "Phascolarctobacterium",
        "Arcobacter",
        "Pseudarthrobacter",
        "Butyricicoccus",
        "Bacteroides",
        "Akkermansia",
        "Gordonibacter",
        "Odoribacter",
        "Eubacterium",
        "Dorea",
        "Turicibacter",
        "Butyrivibrio",
        "Methanobrevibacter",
        "Olsenella",
        "Ruminiclostridium",
        "Leuconostoc",
        "Fusobacterium",
        "Collinsella",
        "Lactobacillus",
        "Roseburia",
        "Alistipes",
        "Intestinibacter",
        "Adlercreutzia",
        "Methanobacterium",
        "Bifidobacterium",
        "Streptomyces",
        "Blautia",
        "Romboutsia",
        "Paenibacillus",
        "Anaerostipes",
        "Geobacillus",
      ],
      current_speed: 32.959887966389914,
      upper_speed: 77.0412178347141,
      lower_speed: 0,
    },
    {
      vitamin: "B3",
      bacteria: [
        "Coprococcus",
        "Prevotella",
        "Bacillus",
        "Coprobacter",
        "Arcobacter",
        "Bacteroides",
        "Akkermansia",
        "Odoribacter",
        "Lachnoclostridium",
        "Dorea",
        "Barnesiella",
        "Pseudobutyrivibrio",
        "Olsenella",
        "Ruminiclostridium",
        "Fusobacterium",
        "Collinsella",
        "Ruminococcus",
        "Roseburia",
        "Paraprevotella",
        "Alistipes",
        "Intestinibacter",
        "Methanobacterium",
        "Blautia",
        "Muribaculum",
        "Anaerostipes",
        "Bifidobacterium",
      ],
      current_speed: 34.73041912573772,
      upper_speed: 79.76559657635144,
      lower_speed: 0,
    },
    {
      vitamin: "B7",
      bacteria: [
        "Pseudarthrobacter",
        "Arcobacter",
        "Butyricicoccus",
        "Bacteroides",
        "Akkermansia",
        "Odoribacter",
        "Sanguibacteroides",
        "Streptomyces",
        "Paraprevotella",
        "Barnesiella",
        "Paenibacillus",
        "Romboutsia",
        "Bacillus",
        "Geobacillus",
        "Coprobacter",
        "Alistipes",
        "Cetobacterium",
      ],
      current_speed: 4.281284385315595,
      upper_speed: 53.5002116579637,
      lower_speed: 0,
    },
    {
      vitamin: "B9",
      bacteria: [
        "Streptococcus",
        "Pseudarthrobacter",
        "Bacteroidota",
        "Paralactobacillus",
        "Butyricicoccus",
        "Fusobacteriia",
        "Fusobacterium",
        "Odoribacter",
        "Lactobacillus",
        "Blautia",
        "Paenibacillus",
        "Prevotella",
        "Geobacillus",
        "Megasphaera",
        "Bacillus",
        "Bifidobacterium",
        "Coprobacter",
        "Alistipes",
      ],
      current_speed: 35.15054516354906,
      upper_speed: 88.8647360384429,
      lower_speed: 0,
    },
    {
      vitamin: "A",
      bacteria: [
        "Paralactobacillus",
        "Bacteroides",
        "Fusobacterium",
        "Eubacterium",
        "Lactobacillus",
        "Peptostreptococcus",
        "Ruminococcus",
        "Eggerthella",
        "Bacillus",
        "Bifidobacterium",
        "Peptococcus",
      ],
      current_speed: 24.497349204761427,
      upper_speed: 50.00649534759764,
      lower_speed: 0,
    },
    {
      vitamin: "K2",
      bacteria: [
        "Leuconostoc",
        "Lactococcus",
        "Bacteroides",
        "Eubacterium",
        "Propionibacterium",
        "Bacillus",
        "Geobacillus",
      ],
      current_speed: 3.6610983294988495,
      upper_speed: 33.53865559726324,
      lower_speed: 0,
    },
    {
      vitamin: "B12",
      bacteria: [
        "Streptococcus",
        "Faecalibacterium",
        "Bacteroidota",
        "Paralactobacillus",
        "Fusobacteriia",
        "Bacteroides",
        "Fusobacterium",
        "Lactobacillus",
        "Ruminococcus",
        "Prevotella",
        "Propionibacterium",
        "Bifidobacterium",
      ],
      current_speed: 35.06051815544663,
      upper_speed: 118.83760913397734,
      lower_speed: 0,
    },
    {
      vitamin: "D3",
      bacteria: [
        "Paralactobacillus",
        "Lactobacillus",
        "Coprococcus",
        "Blautia",
        "Ruminococcus",
        "Bifidobacterium",
      ],
      current_speed: 22.24667400220066,
      upper_speed: 19.83751642269981,
      lower_speed: 0,
    },
  ],
  diet: {
    name: "Веганская диета",
    effect:
      "Почти 10 % людей на Земле — веганы. Одни из них отказались от пищи животного происхождения по этическим соображениям, другие — желая снизить риск инсульта и проблем с ЖКТ, третьи — по медицинским показаниям. Так или иначе, веганы едят продукты только растительного происхождения: овощи, фрукты, крупы, грибы, — и заменяют яичницу по утрам на смузи с авокадо и миндальным молоком. По результатам анализа микробиоты кишечника мы рекомендуем вам последовать их примеру.",
    desc: "Почти 10 % людей на Земле — веганы. Одни из них отказались от пищи животного происхождения по этическим соображениям, другие — желая снизить риск инсульта и проблем с ЖКТ, третьи — по медицинским показаниям. Так или иначе, веганы едят продукты только растительного происхождения: овощи, фрукты, крупы, грибы, — и заменяют яичницу по утрам на смузи с авокадо и миндальным молоком. По результатам анализа микробиоты кишечника мы рекомендуем вам последовать их примеру.",
    nutrition: {
      calories: 2301,
      proteins: 20,
      fats: 25,
      carbohydrates: 55,
    },
    products: [
      {
        category: "Бобовые",
        prod: ["Горох", "Нут", "Соя и продукты из сои"],
      },
      {
        category: "Крупы",
        prod: ["Манная крупа", "Полба", "Пшено"],
      },
      {
        category: "Овощи",
        prod: ["Артишок", "Репчатый лук", "Болгарский перец"],
      },
      {
        category: "Орехи и семена",
        prod: ["Орех макадамии", "Семена коикса", "Семена кунжута"],
      },
      {
        category: "Растительные масла",
        prod: ["Кунжутное масло", "Льняное масло", "Масло рисовых отрубей"],
      },
      {
        category: "Фрукты",
        prod: ["Виноград", "Грейпфрут", "Персик"],
      },
      {
        category: "Цельнозерновые продукты",
        prod: [
          "Лапша из цельнозерновой пшеницы",
          "Цельнозерновой хлеб",
          "Каши долгой варки",
        ],
      },
      {
        category: "Ягоды",
        prod: ["Клюква", "Черника", "Шиповник"],
      },
      {
        category: "Другое",
        prod: ["Растительное молоко"],
      },
    ],
  },
  green_list: [
    {
      category: "Овощи",
      prod: [
        {
          name: "Цветная капуста",
          bact_proof: [
            "Bacteroides",
            "Megasphaera",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Кукуруза",
          bact_proof: [],
          add_proof: ["Устойчивый крахмал", "Растворимая клетчатка"],
          diet_proof: [],
        },
        {
          name: "Редис",
          bact_proof: [
            "Bacteroides",
            "Megasphaera",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Морковь",
          bact_proof: ["Bacteroides", "Streptococcus"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Помидоры",
          bact_proof: ["Bacteroides", "Streptococcus"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Болгарский перец",
          bact_proof: ["Bacteroides", "Streptococcus"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Молодой картофель",
          bact_proof: [
            "Bacteroides",
            "Bilophila",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: ["Устойчивый крахмал"],
          diet_proof: [],
        },
        {
          name: "Брокколи",
          bact_proof: [
            "Bacteroides",
            "Streptococcus",
            "Megasphaera",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Спаржа",
          bact_proof: ["Bacteroides", "Streptococcus"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Краснокочанная капуста",
          bact_proof: [
            "Bacteroides",
            "Streptococcus",
            "Megasphaera",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Белокочанная капуста",
          bact_proof: [
            "Bacteroides",
            "Megasphaera",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Растительные масла",
      prod: [
        {
          name: "Кунжутное масло",
          bact_proof: ["Veillonella "],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Льняное масло",
          bact_proof: ["Veillonella "],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Масло рисовых отрубей",
          bact_proof: ["Veillonella "],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Оливковое масло",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Фрукты",
      prod: [
        {
          name: "Виноград",
          bact_proof: [
            "Corynebacterium",
            "Veillonella",
            "Blautia",
            "Christensenellales",
            "Clostridiales",
            "Collinsella",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: ["Экстракт виноградных косточек"],
          diet_proof: [],
        },
        {
          name: "Апельсин",
          bact_proof: [],
          add_proof: ["Корень зверобоя лекарственного"],
          diet_proof: [],
        },
        {
          name: "Авокадо",
          bact_proof: [
            "Corynebacterium",
            "Veillonella",
            "Blautia",
            "Christensenellales",
            "Clostridiales",
            "Collinsella",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: ["Омега-3 жирные кислоты"],
          diet_proof: [],
        },
        {
          name: "Грейпфрут",
          bact_proof: [],
          add_proof: ["Корень зверобоя лекарственного"],
          diet_proof: [],
        },
        {
          name: "Гуава",
          bact_proof: [],
          add_proof: ["C"],
          diet_proof: [],
        },
        {
          name: "Бананы",
          bact_proof: [
            "Corynebacterium",
            "Veillonella",
            "Blautia",
            "Christensenellales",
            "Clostridiales",
            "Collinsella",
            "Eubacteriales",
            "Hungateiclostridiaceae",
            "Lachnospirales",
            "Monoglobaceae",
            "Monoglobales",
            "Oscillospiraceae",
            "Oscillospirales",
            "Ruminococcaceae",
            "UCG-005",
            "UCG-010",
          ],
          add_proof: [
            "Галактоолигосахариды",
            "Галактоолигосахариды",
            "Инулин",
            "Инулин",
            "Инулин",
            "Инулин",
            "Устойчивый крахмал",
          ],
          diet_proof: [],
        },
        {
          name: "Яблоки",
          bact_proof: [],
          add_proof: ["Корень зверобоя лекарственного"],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Грибы",
      prod: [
        {
          name: "Лисички",
          bact_proof: [],
          add_proof: ["Хитин-глюкановый комплекс"],
          diet_proof: [],
        },
        {
          name: "Маслята",
          bact_proof: [],
          add_proof: ["Хитин-глюкановый комплекс"],
          diet_proof: [],
        },
        {
          name: "Шампиньоны",
          bact_proof: [],
          add_proof: ["Хитин-глюкановый комплекс"],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Бобовые",
      prod: [
        {
          name: "Соя и продукты из сои",
          bact_proof: ["Bacteroides", "Dorea"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Белая фасоль",
          bact_proof: [
            "Streptococcus",
            "Blautia",
            "Dorea",
            "Gemella",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Нут",
          bact_proof: [
            "Streptococcus",
            "Blautia",
            "Dorea",
            "Gemella",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Горох",
          bact_proof: [
            "Streptococcus",
            "Blautia",
            "Dorea",
            "Gemella",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Чечевица",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Ягоды",
      prod: [
        {
          name: "Шиповник",
          bact_proof: [],
          add_proof: ["Трифала"],
          diet_proof: [],
        },
        {
          name: "Клюква",
          bact_proof: [],
          add_proof: ["Трифала"],
          diet_proof: [],
        },
        {
          name: "Ежевика",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
        {
          name: "Черника",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
        {
          name: "Малина",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Сыры твердых сортов",
      prod: [
        {
          name: "Сыр Гауда",
          bact_proof: [],
          add_proof: [
            "Препараты, содержащие Bifidobacterium",
            "Инулин",
            "Кальций",
            "Сывороточный протеин",
            "Кальций",
            "Кальций",
          ],
          diet_proof: [],
        },
        {
          name: "Сыр Маасдам",
          bact_proof: [],
          add_proof: [
            "Препараты, содержащие Bifidobacterium",
            "Инулин",
            "Кальций",
            "Сывороточный протеин",
            "Кальций",
            "Кальций",
          ],
          diet_proof: [],
        },
        {
          name: "Сыр Эдамер",
          bact_proof: [],
          add_proof: [
            "Препараты, содержащие Bifidobacterium",
            "Инулин",
            "Кальций",
            "Сывороточный протеин",
            "Кальций",
            "Кальций",
          ],
          diet_proof: [],
        },
        {
          name: "Сыр Чеддер",
          bact_proof: [],
          add_proof: [
            "Препараты, содержащие Bifidobacterium",
            "Инулин",
            "Кальций",
            "Сывороточный протеин",
            "Кальций",
            "Кальций",
          ],
          diet_proof: [],
        },
        {
          name: "Сыр Пармезан",
          bact_proof: [],
          add_proof: [
            "Препараты, содержащие Bifidobacterium",
            "Инулин",
            "Кальций",
            "Сывороточный протеин",
            "Кальций",
            "Кальций",
          ],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Напитки",
      prod: [
        {
          name: "Зеленый чай",
          bact_proof: [
            "Bifidobacterium",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Dorea",
            "Eubacteriales",
            "Lachnospirales",
            "Monoglobales",
            "Oscillospirales",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Кофе",
          bact_proof: [
            "Bifidobacterium",
            "Christensenellales",
            "Clostridiales",
            "Coriobacteriaceae",
            "Coriobacteriales",
            "Dorea",
            "Eubacteriales",
            "Lachnospirales",
            "Monoglobales",
            "Oscillospirales",
            "UCG-010",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Красное вино",
          bact_proof: ["Enterococcus", "Bacteroides", "Prevotella"],
          add_proof: [],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Цельнозерновые продукты",
      prod: [
        {
          name: "Пшеничные отруби",
          bact_proof: [],
          add_proof: ["Бета-глюканы"],
          diet_proof: [],
        },
        {
          name: "Цельнозерновой хлеб",
          bact_proof: [
            "Bacteroides",
            "Bilophila",
            "Sutterella",
            "Veillonella",
            "Streptococcus",
            "Prevotella",
            "Blautia",
            "Dorea",
            "Roseburia",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Овсяные отруби",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
        {
          name: "Лапша из цельнозерновой пшеницы",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
        {
          name: "Каши долгой варки",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Продукты животного происхождения",
      prod: [
        {
          name: "Куриные Яйца",
          bact_proof: [],
          add_proof: ["B2", "В12"],
          diet_proof: [],
        },
        {
          name: "Куриная печень",
          bact_proof: [],
          add_proof: ["B2", "В12"],
          diet_proof: [],
        },
        {
          name: "Говяжья печень",
          bact_proof: [],
          add_proof: ["B2", "В12"],
          diet_proof: [],
        },
      ],
    },
    {
      category: "Крупы",
      prod: [
        {
          name: "Рис",
          bact_proof: [
            "Bacteroides",
            "Bilophila",
            "Sutterella",
            "Veillonella",
            "Streptococcus",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Пшеница",
          bact_proof: [],
          add_proof: [
            "Фруктоолигосахариды",
            "Фруктоолигосахариды",
            "Фруктоолигосахариды",
            "B9",
          ],
          diet_proof: [],
        },
        {
          name: "Ячмень",
          bact_proof: ["Bacteroides", "Streptococcus"],
          add_proof: [
            "Бета-глюканы",
            "Фруктоолигосахариды",
            "Фруктоолигосахариды",
            "Фруктоолигосахариды",
          ],
          diet_proof: [],
        },
        {
          name: "Булгур",
          bact_proof: [
            "Bacteroides",
            "Bilophila",
            "Sutterella",
            "Veillonella",
            "Streptococcus",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Пшено",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Орехи и семена",
      prod: [
        {
          name: "Кешью",
          bact_proof: [
            "Bacteroides",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Миндаль",
          bact_proof: [
            "Bacteroides",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
            "Bifidobacterium",
            "Roseburia",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Грецкие орехи",
          bact_proof: [
            "Bacteroides",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
            "Anaerostipes",
            "Bifidobacterium",
            "Blautia",
            "Hungateiclostridiaceae",
            "Monoglobaceae",
            "Oscillospiraceae",
            "Ruminococcaceae",
            "UCG-005",
          ],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Фундук",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
        {
          name: "Арахис",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
    {
      category: "Другое",
      prod: [
        {
          name: "Куркума",
          bact_proof: ["Enterobacteriaceae"],
          add_proof: [],
          diet_proof: [],
        },
        {
          name: "Тапиока",
          bact_proof: [],
          add_proof: ["Устойчивый крахмал"],
          diet_proof: [],
        },
        {
          name: "Растительное молоко",
          bact_proof: [],
          add_proof: [],
          diet_proof: ["Рекомендованно из плана питания."],
        },
      ],
    },
  ],
  yellow_list: [
    {
      category: "Продукты с высоким содержанием какао",
      prod: [
        {
          name: "Молочный шоколад",
        },
      ],
    },
  ],
  red_list: [
    {
      category: "Продукты с высоким содержанием какао",
      prod: [
        {
          name: "Молочный шоколад",
        },
      ],
    },
    {
      category: "Кисломолочные продукты",
      prod: [
        {
          name: "Ацидофилин",
        },
        {
          name: "Натуральный йогурт",
        },
        {
          name: "Кефир",
        },
        {
          name: "Кумыс",
        },
        {
          name: "Пахта",
        },
        {
          name: "Ряженка",
        },
        {
          name: "Сметана",
        },
        {
          name: "Творог",
        },
        {
          name: "Простокваша",
        },
      ],
    },
    {
      category: "Колбасные изделия",
      prod: [
        {
          name: "Сосиски и копчености промышленного производства",
        },
      ],
    },
    {
      category: "Молочные продукты",
      prod: [
        {
          name: "Молочные продукты с низким содержанием жира",
        },
        {
          name: "Сливки",
        },
      ],
    },
    {
      category: "Морепродукты",
      prod: [
        {
          name: "Горбуша",
        },
        {
          name: "Минтай",
        },
        {
          name: "Палтус",
        },
        {
          name: "Семга",
        },
        {
          name: "Скумбрия",
        },
        {
          name: "Тунец",
        },
        {
          name: "Форель",
        },
      ],
    },
    {
      category: "Мучные изделия",
      prod: [
        {
          name: "Дрожжевой хлеб",
        },
        {
          name: "Изделия из сдобного и слоеного теста",
        },
        {
          name: "Макаронные изделия из мягких сортов пшеницы",
        },
        {
          name: "Продукты в панировке",
        },
      ],
    },
    {
      category: "Напитки",
      prod: [
        {
          name: "Алкоголь",
        },
        {
          name: "Безалкогольные напитки с повышенным содержанием сахара",
        },
      ],
    },
    {
      category: "Продукты животного происхождения",
      prod: [
        {
          name: "Сливочное масло",
        },
        {
          name: "Куриные Яйца",
        },
        {
          name: "Красное мясо",
        },
        {
          name: "Маргагин",
        },
        {
          name: "Сало",
        },
      ],
    },
    {
      category: "Продукты с высоким содержанием сахара",
      prod: [
        {
          name: "Мед или искусственные подсластители на основе полиола",
        },
        {
          name: "Сладкие творожные сырки",
        },
        {
          name: "Мороженое",
        },
      ],
    },
    {
      category: "Растительные масла",
      prod: [
        {
          name: "Рафинированное масло",
        },
      ],
    },
    {
      category: "Цельнозерновые продукты",
      prod: [
        {
          name: "Каши быстрого приготовления",
        },
      ],
    },
    {
      category: "Другое",
      prod: [
        {
          name: "Жареная пища",
        },
        {
          name: "Консервы в масле",
        },
        {
          name: "Соленые и маринованные овощи",
        },
      ],
    },
  ],
  additives: [
    {
      category: "Пребиотик",
      additives: [
        {
          component_category: "Другое",
          category_additives: [
            {
              name: "Глюкозамин",
              bact_proof: ["Pseudomonadaceae"],
            },
            {
              name: "Экстракт белой фасоли",
              bact_proof: ["Klebsiella", "Actinomyces"],
            },
          ],
        },
        {
          component_category: "Антиоксидантные вещества",
          category_additives: [
            {
              name: "Экстракт граната",
              bact_proof: ["Bacillus", "Corynebacterium", "Enterobacteriaceae"],
            },
            {
              name: "Экстракт шлемника байкальского",
              bact_proof: ["Streptococcus"],
            },
            {
              name: "Экстракт виноградных косточек",
              bact_proof: [
                "Streptococcus",
                "Enterococcus",
                "Enterobacter",
                "Bacteroides",
                "Prevotella",
                "Lachnospiraceae",
              ],
            },
          ],
        },
        {
          component_category: "Дополнительные источники аминокислот",
          category_additives: [
            {
              name: "Сывороточный протеин",
              bact_proof: [
                "Bacteroides",
                "Klebsiella",
                "Corynebacterium",
                "Megasphaera",
                "Clostridiales",
              ],
            },
            {
              name: "Соевый белок",
              bact_proof: ["Bacteroides", "Bilophila", "Prevotella", "Dorea"],
            },
          ],
        },
        {
          component_category: "Минералы",
          category_additives: [
            {
              name: "Кальций",
              bact_proof: [
                "Streptococcus",
                "Veillonella",
                "Coriobacteriaceae",
                "Bacteroides",
                "Bifidobacterium",
              ],
            },
          ],
        },
        {
          component_category: "Травы",
          category_additives: [
            {
              name: "Корень зверобоя лекарственного",
              bact_proof: ["Bacteroides", "Lachnospiraceae"],
            },
            {
              name: "Anemarrhenae Rhizoma, omordica Charantia, optis Chinensis, Salvia Miltiorrhiza, красный дрожжевой рис, алоэ вера, лимонник китайский, сушеный имбирь",
              bact_proof: ["Klebsiella"],
            },
            {
              name: "Манжишта",
              bact_proof: ["Enterococcus"],
            },
            {
              name: "Трифала",
              bact_proof: [
                "Negativibacillus",
                "Peptostreptococcaceae",
                "Enterococcus",
                "Bacteroides",
                "Coriobacteriaceae",
                "Lachnoclostridium",
                "Collinsella",
                "Sutterella",
                "Eggerthella",
                "Erysipelatoclostridium",
                "Prevotella",
                "Roseburia",
                "Ruminococcaceae",
              ],
            },
          ],
        },
        {
          component_category: "Эфирные масла",
          category_additives: [
            {
              name: "Гераниол",
              bact_proof: ["Bacteroides", "Lachnospiraceae"],
            },
          ],
        },
        {
          component_category: "Жирные кислоты",
          category_additives: [
            {
              name: "Омега-3 жирные кислоты",
              bact_proof: [
                "Bacteroides",
                "Collinsella",
                "Blautia",
                "Prevotella",
                "Lachnospiraceae",
                "Ruminococcaceae",
              ],
            },
          ],
        },
        {
          component_category: "Пищевые волокна",
          category_additives: [
            {
              name: "Устойчивый крахмал",
              bact_proof: [
                "Bifidobacteriaceae",
                "Enterobacteriaceae",
                "Enterococcus",
                "Bacteroides",
                "Coriobacteriaceae",
                "Pseudomonas",
                "Anaerovorax",
                "Dorea",
                "Blautia",
                "Prevotella",
                "Lachnospiraceae",
                "Oscillospiraceae",
                "Bifidobacterium",
                "Bilophila",
                " ruminococcaceae",
                "Actinobacteria",
                "Ruminococcaceae",
              ],
            },
            {
              name: "Растворимая клетчатка",
              bact_proof: [
                "Coriobacteriaceae",
                "Dorea",
                "Lachnospiraceae",
                "Roseburia",
                "Bilophila",
                "Ruminococcaceae",
              ],
            },
            {
              name: "Хитин-глюкановый комплекс",
              bact_proof: [
                "Roseburia",
                "Bacteroides",
                "Collinsella",
                "Dorea",
                "Actinomyces",
                "Blautia",
                "Lachnospiraceae",
                "Escherichia/shigella",
                "Ruminococcaceae",
              ],
            },
            {
              name: "Глюкоманнаны",
              bact_proof: ["Bacillus", "Solobacterium"],
            },
            {
              name: "Гороховое волокно",
              bact_proof: ["Roseburia", "Bifidobacteria"],
            },
            {
              name: "Арабиноксиланы",
              bact_proof: ["Prevotella"],
            },
            {
              name: "Пектин",
              bact_proof: ["Prevotella"],
            },
            {
              name: "Бета-глюканы",
              bact_proof: [
                "Enterococcus",
                "Collinsella",
                "Anaerovorax",
                "Bifidobacterium",
                "Actinobacteria",
              ],
            },
            {
              name: "PolyGlycopleX ((α-D-глюкуроно-α-D-манно-β-D-манно-β-D-глюко), (α-L-глюкуроно-β-D-маннуроно), β-D-глюко-β-D-маннан)",
              bact_proof: ["Porphyromonas", "Veillonella"],
            },
            {
              name: "Инулин",
              bact_proof: [
                "Enterococcus",
                "Prevotella",
                "Bilophila",
                "Enterobacteriaceae",
                "Bacteroides",
                "Pseudomonas",
                "Anaerovorax",
                "Lachnoclostridium",
                "Dorea",
                "Lachnospiraceae",
                "Escherichia/shigella",
                "Actinobacteria",
                "Ruminococcaceae",
                "Bifidobacteriaceae",
                "Fusobacterium",
                "Fusobacteria",
                "Actinomyces",
                "Megasphaera",
                "Tyzzerella",
                "Veillonella",
                "Blautia",
                "Propionibacterium",
                "Bifidobacterium",
              ],
            },
          ],
        },
        {
          component_category: "Пищевые волокна ",
          category_additives: [
            {
              name: "Арабиногалактаны",
              bact_proof: ["Bacteroides"],
            },
          ],
        },
        {
          component_category: "Олигосахариды",
          category_additives: [
            {
              name: "Кестоза",
              bact_proof: ["Megasphaera", "Streptococcus"],
            },
            {
              name: "Фруктоолигосахариды",
              bact_proof: [
                "Enterobacter",
                "Pseudomonas",
                "Dorea",
                "Lachnospiraceae",
                "Propionibacterium",
                "Roseburia",
                "Bifidobacterium",
                "Bilophila",
                "Bifidobacteria",
                "Actinobacteria",
              ],
            },
            {
              name: "Галактоолигосахариды",
              bact_proof: [
                "Streptococcus",
                "Veillonella",
                "Enterococcus",
                "Klebsiella",
                "Bacteroides",
                "Pseudomonas",
                "Gardnerella",
                "Dorea",
                "Bifidobacterium",
                "Sutterella",
                "Eggerthella",
                "Lachnospiraceae",
                "Megasphaera",
                "Pseudomonadaceae",
                "Bilophila",
              ],
            },
            {
              name: "Ксилоолигосахариды",
              bact_proof: ["Bilophila", "Pseudomonas"],
            },
          ],
        },
      ],
    },
    {
      category: "Пробиотик",
      additives: [
        {
          name: "Устойчивый крахмал",
          bact_proof: [
            "Enterococcus",
            "Bilophila",
            "Pseudomonas",
            "Bacteroides",
            "Prevotella",
            "Enterobacteriaceae",
          ],
        },
        {
          name: "Препараты с содержанием Lacticaseibacillus.",
          bact_proof: ["Lacticaseibacillus"],
        },
        {
          name: "Ксилоолигосахариды",
          bact_proof: ["Bilophila", "Pseudomonas"],
        },
        {
          name: "Галактоолигосахариды",
          bact_proof: [
            "Streptococcus",
            "Bacteroides",
            "Pseudomonadaceae",
            "Klebsiella",
            "Megasphaera",
            "Enterococcus",
            "Eggerthella",
            "Bilophila",
            "Pseudomonas",
            "Veillonella",
            "Sutterella",
          ],
        },
        {
          name: "Препараты с содержанием Propionibacterium.",
          bact_proof: ["Propionibacterium"],
        },
        {
          name: "Препараты, содержащие Saccharomyces",
          bact_proof: ["Megasphaera", "Prevotella", "Sutterella"],
        },
        {
          name: "Фруктоолигосахариды",
          bact_proof: [
            "Bilophila",
            "Pseudomonas",
            "Enterobacter",
            "Bifidobacteria",
          ],
        },
        {
          name: "Препараты, содержащие Lactococcus",
          bact_proof: ["Bacteroides", "Pseudomonas"],
        },
        {
          name: "Инулин",
          bact_proof: [
            "Enterobacteriaceae",
            "Escherichia/shigella",
            "Bacteroides",
            "Actinomyces",
            "Megasphaera",
            "Veillonella",
            "Bilophila",
            "Enterococcus",
            "Prevotella",
            "Pseudomonas",
          ],
        },
        {
          name: "Препараты с содержанием Levilactobacillus.",
          bact_proof: ["Levilactobacillus"],
        },
        {
          name: "Препараты, содержащие молочных стрептококков (Streptococcus thermophilus)",
          bact_proof: ["Streptococcus"],
        },
        {
          name: "Препараты, содержащие Bifidobacterium",
          bact_proof: [
            "Bacteroides",
            "Eggerthella",
            "Enterobacteriaceae ",
            "Streptococcus",
            "Bilophila",
            "Pseudomonas",
            "Prevotella",
            "Sutterella",
            "Veillonella",
            "Veillonella ",
            "Megasphaera",
            "Lachnospiraceae",
          ],
        },
        {
          name: "Омега-3 жирные кислоты",
          bact_proof: ["Bacteroides", "Prevotella"],
        },
        {
          name: "Препараты, содержащие Lactobacillus",
          bact_proof: [
            "Bilophila",
            "Pseudomonas",
            "Prevotella",
            "Bacteroides",
            "Enterococcus",
            "Klebsiella",
            "Streptococcus",
            "Sutterella",
            "Megasphaera",
            "Veillonella",
            "Eggerthella",
            "Lachnospiraceae",
          ],
        },
      ],
    },
  ],
  vitamins: [
    {
      vitamin: "B7",
      bact_proof: ["Sanguibacteroides"],
      dose: "50 мкг",
    },
    {
      vitamin: "B5",
      bact_proof: ["Pseudarthrobacter"],
      dose: "5 мг",
    },
    {
      vitamin: "B3",
      bact_proof: ["Paraprevotella"],
      dose: "18.41 мг",
    },
    {
      vitamin: "A",
      bact_proof: ["Peptococcus"],
      dose: "800 мкг",
    },
    {
      vitamin: "B1",
      bact_proof: ["Methanobrevibacter"],
      dose: "1.38 мг",
    },
    {
      vitamin: "B9",
      bact_proof: ["Pseudarthrobacter"],
      dose: "400 мкг",
    },
    {
      vitamin: "B6",
      bact_proof: ["Turicibacter"],
      dose: "1.4 мг",
    },
    {
      vitamin: "D3",
      bact_proof: ["Bifidobacterium"],
      dose: "25 мкг (1000 МЕ)",
    },
    {
      vitamin: "K2",
      bact_proof: ["Propionibacterium"],
      dose: "90 мкг",
    },
    {
      vitamin: "B12",
      bact_proof: ["Propionibacterium"],
      dose: "3.0 мкг",
    },
    {
      vitamin: "B2",
      bact_proof: ["Weissella"],
      dose: "1.73 мг",
    },
  ],
  ALL_Bacteria: [
    {
      taxon: "Phylum",
      list_bact: [
        {
          name: "Abditibacteriota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acidobacteriota",
          percentage: 0.05001500450135041,
        },
        {
          name: "Actinobacteriota",
          percentage: 22.40672201660498,
        },
        {
          name: "Armatimonadota",
          percentage: 0.030009002700810243,
        },
        {
          name: "Bacteroidota",
          percentage: 6.682004601380413,
        },
        {
          name: "Bdellovibrionota",
          percentage: 0.030009002700810243,
        },
        {
          name: "Caldatribacteriota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Calditrichota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Campylobacterota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Chloroflexi",
          percentage: 0.08002400720216064,
        },
        {
          name: "Cyanobacteria",
          percentage: 0.1100330099029709,
        },
        {
          name: "Deinococcota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Dependentiae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfobacterota",
          percentage: 0.2300690207062119,
        },
        {
          name: "Fibrobacterota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Firmicutes",
          percentage: 44.57337201160348,
        },
        {
          name: "Fusobacteriota",
          percentage: 2.53075922776833,
        },
        {
          name: "Gemmatimonadota",
          percentage: 0.030009002700810243,
        },
        {
          name: "Latescibacterota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Patescibacteria",
          percentage: 0.05001500450135041,
        },
        {
          name: "Planctomycetota",
          percentage: 0.20006001800540163,
        },
        {
          name: "Proteobacteria",
          percentage: 0.7202160648194458,
        },
        {
          name: "Spirochaetota",
          percentage: 0.05001500450135041,
        },
        {
          name: "Sumerlaeota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Synergistota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Thermotogota",
          percentage: 0.01000300090027008,
        },
        {
          name: "Verrucomicrobiota",
          percentage: 0.08002400720216064,
        },
      ],
    },
    {
      taxon: "Classes",
      list_bact: [
        {
          name: "Abditibacteria",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acidimicrobiia",
          percentage: 0.030009002700810243,
        },
        {
          name: "Acidobacteriae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Actinobacteria",
          percentage: 19.305791737521258,
        },
        {
          name: "Alphaproteobacteria",
          percentage: 0.2700810243072922,
        },
        {
          name: "Anaerolineae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Armatimonadia",
          percentage: 0.01000300090027008,
        },
        {
          name: "BD2-11 terrestrial group",
          percentage: 0.01000300090027008,
        },
        {
          name: "Babeliae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bacilli",
          percentage: 2.43072921876563,
        },
        {
          name: "Bacteroidia",
          percentage: 6.651995598679604,
        },
        {
          name: "Bdellovibrionia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Blastocatellia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Calditrichia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Campylobacteria",
          percentage: 0.01000300090027008,
        },
        {
          name: "Chlamydiae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Chloroflexia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Chthonomonadetes",
          percentage: 0.01000300090027008,
        },
        {
          name: "Clostridia",
          percentage: 38.13143943182954,
        },
        {
          name: "Coriobacteriia",
          percentage: 2.930879263779134,
        },
        {
          name: "Cyanobacteriia",
          percentage: 0.07002100630189058,
        },
        {
          name: "Dehalococcoidia",
          percentage: 0.030009002700810243,
        },
        {
          name: "Deinococci",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfitobacteriia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfotomaculia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfovibrionia",
          percentage: 0.2200660198059418,
        },
        {
          name: "Dethiobacteria",
          percentage: 0.01000300090027008,
        },
        {
          name: "Fibrobacteria",
          percentage: 0.01000300090027008,
        },
        {
          name: "Fusobacteriia",
          percentage: 2.53075922776833,
        },
        {
          name: "Gammaproteobacteria",
          percentage: 0.4201260378113434,
        },
        {
          name: "Gemmatimonadetes",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gracilibacteria",
          percentage: 0.02000600180054016,
        },
        {
          name: "Holophagae",
          percentage: 0.01000300090027008,
        },
        {
          name: "JS1",
          percentage: 0.01000300090027008,
        },
        {
          name: "Kiritimatiellae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Longimicrobia",
          percentage: 0.01000300090027008,
        },
        {
          name: "MB-A2-108",
          percentage: 0.01000300090027008,
        },
        {
          name: "Negativicutes",
          percentage: 0.3601080324097229,
        },
        {
          name: "OM190",
          percentage: 0.01000300090027008,
        },
        {
          name: "Oligoflexia",
          percentage: 0.02000600180054016,
        },
        {
          name: "Parcubacteria",
          percentage: 0.01000300090027008,
        },
        {
          name: "Phycisphaerae",
          percentage: 0.09002700810243072,
        },
        {
          name: "Pla3 lineage",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pla4 lineage",
          percentage: 0.01000300090027008,
        },
        {
          name: "Planctomycetes",
          percentage: 0.04001200360108032,
        },
        {
          name: "Rhodothermia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Saccharimonadia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Spirochaetia",
          percentage: 0.04001200360108032,
        },
        {
          name: "Sumerlaeia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Symbiobacteriia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Synergistia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Syntrophomonadia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Thermoleophilia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Thermotogae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Vampirivibrionia",
          percentage: 0.04001200360108032,
        },
        {
          name: "Verrucomicrobiae",
          percentage: 0.030009002700810243,
        },
        {
          name: "WCHB1-81",
          percentage: 0.01000300090027008,
        },
        {
          name: "vadinHA49",
          percentage: 0.030009002700810243,
        },
      ],
    },
    {
      taxon: "Order",
      list_bact: [
        {
          name: "0319-6G20",
          percentage: 0.01000300090027008,
        },
        {
          name: "Abditibacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acanthopleuribacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acetobacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acholeplasmatales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acidaminococcales",
          percentage: 0.13003901170351106,
        },
        {
          name: "Acidobacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Actinomycetales",
          percentage: 0.07002100630189058,
        },
        {
          name: "Armatimonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Azospirillales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Babeliales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bacillales",
          percentage: 0.09002700810243072,
        },
        {
          name: "Bacteroidales",
          percentage: 6.391917575272582,
        },
        {
          name: "Bdellovibrionales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bifidobacteriales",
          percentage: 18.855656697009103,
        },
        {
          name: "Burkholderiales",
          percentage: 0.12003601080324097,
        },
        {
          name: "Caldicoprobacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Calditrichales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Campylobacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Caulobacterales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Chitinophagales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Chlamydiales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Chloroflexales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Chloroplast",
          percentage: 0.05001500450135041,
        },
        {
          name: "Christensenellales",
          percentage: 0.05001500450135041,
        },
        {
          name: "Chthonomonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Clostridia UCG-014",
          percentage: 0.030009002700810243,
        },
        {
          name: "Clostridia vadinBB60 group",
          percentage: 0.04001200360108032,
        },
        {
          name: "Clostridiales",
          percentage: 0.1600480144043213,
        },
        {
          name: "Competibacterales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Coriobacteriales",
          percentage: 2.930879263779134,
        },
        {
          name: "Corynebacteriales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Cyanobacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Cytophagales",
          percentage: 0.030009002700810243,
        },
        {
          name: "Deinococcales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfitobacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfotomaculales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Desulfovibrionales",
          percentage: 0.2200660198059418,
        },
        {
          name: "Dethiobacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Enterobacterales",
          percentage: 0.1700510153045914,
        },
        {
          name: "Entomoplasmatales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Erysipelotrichales",
          percentage: 0.7302190657197158,
        },
        {
          name: "Eubacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Fibrobacterales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Flavobacteriales",
          percentage: 0.05001500450135041,
        },
        {
          name: "Frankiales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Fusobacteriales",
          percentage: 2.53075922776833,
        },
        {
          name: "Gaiellales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gemmatales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gemmatimonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "IMCC26256",
          percentage: 0.01000300090027008,
        },
        {
          name: "Isosphaerales",
          percentage: 0.030009002700810243,
        },
        {
          name: "Kineosporiales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Lachnospirales",
          percentage: 26.958087426227866,
        },
        {
          name: "Lactobacillales",
          percentage: 1.4504351305391616,
        },
        {
          name: "Longimicrobiales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Micavibrionales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Micrococcales",
          percentage: 0.10003000900270081,
        },
        {
          name: "Microtrichales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Monoglobales",
          percentage: 0.030009002700810243,
        },
        {
          name: "Obscuribacterales",
          percentage: 0.04001200360108032,
        },
        {
          name: "Oscillospirales",
          percentage: 1.6104831449434833,
        },
        {
          name: "Paenibacillales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Peptococcales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Peptostreptococcales-Tissierellales",
          percentage: 2.010603180954286,
        },
        {
          name: "Petrotogales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Phycisphaerales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Propionibacteriales",
          percentage: 0.1100330099029709,
        },
        {
          name: "Pseudomonadales",
          percentage: 0.060018005401620486,
        },
        {
          name: "Rhizobiales",
          percentage: 0.04001200360108032,
        },
        {
          name: "Rhodobacterales",
          percentage: 0.04001200360108032,
        },
        {
          name: "Rhodospirillales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rhodothermales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rickettsiales",
          percentage: 0.030009002700810243,
        },
        {
          name: "SAR202 clade",
          percentage: 0.030009002700810243,
        },
        {
          name: "SBR1031",
          percentage: 0.01000300090027008,
        },
        {
          name: "Saccharimonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sphingobacteriales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Sphingomonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Spirochaetales",
          percentage: 0.04001200360108032,
        },
        {
          name: "Staphylococcales",
          percentage: 0.04001200360108032,
        },
        {
          name: "Streptomycetales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Streptosporangiales",
          percentage: 0.02000600180054016,
        },
        {
          name: "Sumerlaeales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Symbiobacteriales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Synergistales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Syntrophomonadales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tepidisphaerales",
          percentage: 0.07002100630189058,
        },
        {
          name: "Thermales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tistrellales",
          percentage: 0.01000300090027008,
        },
        {
          name: "Veillonellales-Selenomonadales",
          percentage: 0.2200660198059418,
        },
        {
          name: "Verrucomicrobiales",
          percentage: 0.02000600180054016,
        },
        {
          name: "WCHB1-41",
          percentage: 0.02000600180054016,
        },
      ],
    },
    {
      taxon: "Families",
      list_bact: [
        {
          name: "A4b",
          percentage: 0.01000300090027008,
        },
        {
          name: "AB1",
          percentage: 0.02000600180054016,
        },
        {
          name: "AKAU3564 sediment group",
          percentage: 0.01000300090027008,
        },
        {
          name: "Abditibacteriaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acanthopleuribacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acetobacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acholeplasmataceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acidaminococcaceae",
          percentage: 0.13003901170351106,
        },
        {
          name: "Actinomycetaceae",
          percentage: 0.060018005401620486,
        },
        {
          name: "Aerococcaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Anaerovoracaceae",
          percentage: 0.13003901170351106,
        },
        {
          name: "Atopobiaceae",
          percentage: 0.060018005401620486,
        },
        {
          name: "Azospirillaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bacillaceae",
          percentage: 0.07002100630189058,
        },
        {
          name: "Bacteroidaceae",
          percentage: 3.5710713213964187,
        },
        {
          name: "Bacteroidales UCG-001",
          percentage: 0.02000600180054016,
        },
        {
          name: "Barnesiellaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Bdellovibrionaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Beijerinckiaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bifidobacteriaceae",
          percentage: 18.855656697009103,
        },
        {
          name: "Butyricicoccaceae",
          percentage: 0.2700810243072922,
        },
        {
          name: "Caldicoprobacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Calditrichaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Caminicellaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Carnobacteriaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Caulobacteraceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Christensenellaceae",
          percentage: 0.05001500450135041,
        },
        {
          name: "Clostridiaceae",
          percentage: 0.1600480144043213,
        },
        {
          name: "Competibacteraceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Coriobacteriaceae",
          percentage: 2.1506451935580673,
        },
        {
          name: "Corynebacteriaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Cryomorphaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Defluviitaleaceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Desulfovibrionaceae",
          percentage: 0.2200660198059418,
        },
        {
          name: "Dethiobacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Dysgonomonadaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "EC94",
          percentage: 0.01000300090027008,
        },
        {
          name: "Eggerthellaceae",
          percentage: 0.3601080324097229,
        },
        {
          name: "Enterobacteriaceae",
          percentage: 0.060018005401620486,
        },
        {
          name: "Enterococcaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Erysipelatoclostridiaceae",
          percentage: 0.2300690207062119,
        },
        {
          name: "Erysipelotrichaceae",
          percentage: 0.500150045013504,
        },
        {
          name: "Eubacteriaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Family XI",
          percentage: 0.08002400720216064,
        },
        {
          name: "Flavobacteriaceae",
          percentage: 0.04001200360108032,
        },
        {
          name: "Fusibacteraceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Fusobacteriaceae",
          percentage: 2.090627188156447,
        },
        {
          name: "Gemellaceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Geminicoccaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gemmataceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gemmatimonadaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Geodermatophilaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Heliobacteriaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Hungateiclostridiaceae",
          percentage: 0.10003000900270081,
        },
        {
          name: "Intrasporangiaceae",
          percentage: 0.060018005401620486,
        },
        {
          name: "Isosphaeraceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "KI89A clade",
          percentage: 0.01000300090027008,
        },
        {
          name: "Kineosporiaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Lachnospiraceae",
          percentage: 26.908072421726516,
        },
        {
          name: "Lactobacillaceae",
          percentage: 0.08002400720216064,
        },
        {
          name: "Leptotrichiaceae",
          percentage: 0.07002100630189058,
        },
        {
          name: "Longimicrobiaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "ML635J-40 aquatic group",
          percentage: 0.01000300090027008,
        },
        {
          name: "Magnetospiraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Marinifilaceae",
          percentage: 0.05001500450135041,
        },
        {
          name: "Marinilabiliaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Micavibrionaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Microbacteriaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Micrococcaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Microtrichaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Monoglobaceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Moraxellaceae",
          percentage: 0.030009002700810243,
        },
        {
          name: "Morganellaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Muribaculaceae",
          percentage: 0.09002700810243072,
        },
        {
          name: "NS11-12 marine group",
          percentage: 0.01000300090027008,
        },
        {
          name: "Nocardioidaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Obscuribacteraceae",
          percentage: 0.04001200360108032,
        },
        {
          name: "Oscillospiraceae",
          percentage: 0.5401620486145844,
        },
        {
          name: "Oxalobacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Paenibacillaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Paludibacteraceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Peptococcaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Peptostreptococcaceae",
          percentage: 1.730519155746724,
        },
        {
          name: "Petrotogaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Planococcaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Porphyromonadaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Prevotellaceae",
          percentage: 0.26007802340702213,
        },
        {
          name: "Prolixibacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Propionibacteriaceae",
          percentage: 0.10003000900270081,
        },
        {
          name: "Pseudohongiellaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pseudomonadaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rhizobiaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rhodobacteraceae",
          percentage: 0.04001200360108032,
        },
        {
          name: "Rhodothermaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rikenellaceae",
          percentage: 0.1100330099029709,
        },
        {
          name: "Rubritaleaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Ruminococcaceae",
          percentage: 0.5301590477143143,
        },
        {
          name: "SB-5",
          percentage: 0.02000600180054016,
        },
        {
          name: "Saprospiraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Selenomonadaceae",
          percentage: 0.05001500450135041,
        },
        {
          name: "Shewanellaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Simkaniaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Sphingobacteriaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sphingomonadaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Spirochaetaceae",
          percentage: 0.04001200360108032,
        },
        {
          name: "Spirosomaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sporomusaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Staphylococcaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Streptococcaceae",
          percentage: 1.3003901170351106,
        },
        {
          name: "Streptomycetaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Streptosporangiaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Succinivibrionaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sumerlaeaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sutterellaceae",
          percentage: 0.07002100630189058,
        },
        {
          name: "Symbiobacteraceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Synergistaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Syntrophomonadaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tannerellaceae",
          percentage: 0.7702310693207963,
        },
        {
          name: "Thermaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "UCG-010",
          percentage: 0.030009002700810243,
        },
        {
          name: "Veillonellaceae",
          percentage: 0.13003901170351106,
        },
        {
          name: "Vibrionaceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "WD2101 soil group",
          percentage: 0.07002100630189058,
        },
        {
          name: "Xanthobacteraceae",
          percentage: 0.02000600180054016,
        },
        {
          name: "Yersiniaceae",
          percentage: 0.01000300090027008,
        },
        {
          name: "[Eubacterium] coprostanoligenes group",
          percentage: 0.07002100630189058,
        },
        {
          name: "vadinHA21",
          percentage: 0.02000600180054016,
        },
      ],
    },
    {
      taxon: "Genus",
      list_bact: [
        {
          name: "A2",
          percentage: 0.060018005401620486,
        },
        {
          name: "Abditibacterium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Acetitomaculum",
          percentage: 0.09002700810243072,
        },
        {
          name: "Acinetobacter",
          percentage: 0.030009002700810243,
        },
        {
          name: "Actinomyces",
          percentage: 0.05001500450135041,
        },
        {
          name: "Aeriscardovia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Agathobacter",
          percentage: 0.3501050315094528,
        },
        {
          name: "Aliivibrio",
          percentage: 0.01000300090027008,
        },
        {
          name: "Alistipes",
          percentage: 0.07002100630189058,
        },
        {
          name: "Allobaculum",
          percentage: 0.2300690207062119,
        },
        {
          name: "Alloprevotella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Alloscardovia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Altererythrobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Anaerobacter",
          percentage: 0.12003601080324097,
        },
        {
          name: "Anaerocolumna",
          percentage: 0.02000600180054016,
        },
        {
          name: "Anaeroglobus",
          percentage: 0.030009002700810243,
        },
        {
          name: "Anaerosinus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Anaerosporobacter",
          percentage: 0.02000600180054016,
        },
        {
          name: "Anaerostipes",
          percentage: 0.8202460738221466,
        },
        {
          name: "Anaerotruncus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Anaerovibrio",
          percentage: 0.01000300090027008,
        },
        {
          name: "Anaerovorax",
          percentage: 0.05001500450135041,
        },
        {
          name: "Angustibacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Atopobium",
          percentage: 0.030009002700810243,
        },
        {
          name: "BSV13",
          percentage: 0.01000300090027008,
        },
        {
          name: "Bacillus",
          percentage: 0.07002100630189058,
        },
        {
          name: "Bacteroides",
          percentage: 3.5710713213964187,
        },
        {
          name: "Barnesiella",
          percentage: 0.02000600180054016,
        },
        {
          name: "Bifidobacterium",
          percentage: 18.64559367810343,
        },
        {
          name: "Bilophila",
          percentage: 0.2100630189056717,
        },
        {
          name: "Blautia",
          percentage: 3.290987296188857,
        },
        {
          name: "Bradyrhizobium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Brevundimonas",
          percentage: 0.02000600180054016,
        },
        {
          name: "Butyricicoccus",
          percentage: 0.26007802340702213,
        },
        {
          name: "Butyrivibrio",
          percentage: 0.060018005401620486,
        },
        {
          name: "CAG-56",
          percentage: 0.01000300090027008,
        },
        {
          name: "CHKCI001",
          percentage: 0.01000300090027008,
        },
        {
          name: "Caldicoprobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Candidatus Contendobacter",
          percentage: 0.02000600180054016,
        },
        {
          name: "Candidatus Hepatoplasma",
          percentage: 0.01000300090027008,
        },
        {
          name: "Candidatus Phytoplasma",
          percentage: 0.01000300090027008,
        },
        {
          name: "Candidatus Puchtella",
          percentage: 0.02000600180054016,
        },
        {
          name: "Capnocytophaga",
          percentage: 0.01000300090027008,
        },
        {
          name: "Caproiciproducens",
          percentage: 0.01000300090027008,
        },
        {
          name: "Cetobacterium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Christensenellaceae R-7 group",
          percentage: 0.04001200360108032,
        },
        {
          name: "Clostridioides",
          percentage: 0.02000600180054016,
        },
        {
          name: "Clostridium sensu stricto 1",
          percentage: 0.030009002700810243,
        },
        {
          name: "Colidextribacter",
          percentage: 0.030009002700810243,
        },
        {
          name: "Collinsella",
          percentage: 2.1206361908572573,
        },
        {
          name: "Coprococcus",
          percentage: 0.18005401620486144,
        },
        {
          name: "Coriobacteriaceae UCG-002",
          percentage: 0.01000300090027008,
        },
        {
          name: "Coriobacterium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Corynebacterium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Cutibacterium",
          percentage: 0.060018005401620486,
        },
        {
          name: "DNF00809",
          percentage: 0.02000600180054016,
        },
        {
          name: "Defluviitalea",
          percentage: 0.01000300090027008,
        },
        {
          name: "Defluviitaleaceae UCG-011",
          percentage: 0.02000600180054016,
        },
        {
          name: "Dialister",
          percentage: 0.01000300090027008,
        },
        {
          name: "Dorea",
          percentage: 0.2900870261078323,
        },
        {
          name: "Dubosiella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Eggerthella",
          percentage: 0.02000600180054016,
        },
        {
          name: "Enorma",
          percentage: 0.02000600180054016,
        },
        {
          name: "Enterobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Enterococcus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Enterorhabdus",
          percentage: 0.1100330099029709,
        },
        {
          name: "Epulopiscium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Erysipelatoclostridium",
          percentage: 0.04001200360108032,
        },
        {
          name: "Erysipelothrix",
          percentage: 0.01000300090027008,
        },
        {
          name: "Erysipelotrichaceae UCG-003",
          percentage: 0.01000300090027008,
        },
        {
          name: "Escherichia-Shigella",
          percentage: 0.02000600180054016,
        },
        {
          name: "F0332",
          percentage: 0.01000300090027008,
        },
        {
          name: "Faecalibacterium",
          percentage: 0.08002400720216064,
        },
        {
          name: "Family XIII AD3011 group",
          percentage: 0.02000600180054016,
        },
        {
          name: "Flavobacterium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Flavonifractor",
          percentage: 0.01000300090027008,
        },
        {
          name: "Frisingicoccus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Fusibacter",
          percentage: 0.030009002700810243,
        },
        {
          name: "Fusicatenibacter",
          percentage: 0.3401020306091828,
        },
        {
          name: "Fusobacterium",
          percentage: 2.0506151845553666,
        },
        {
          name: "GCA-900066575",
          percentage: 0.05001500450135041,
        },
        {
          name: "Gardnerella",
          percentage: 0.05001500450135041,
        },
        {
          name: "Gemella",
          percentage: 0.030009002700810243,
        },
        {
          name: "Geotoga",
          percentage: 0.01000300090027008,
        },
        {
          name: "Gordonibacter",
          percentage: 0.02000600180054016,
        },
        {
          name: "Granulicatella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Hespellia",
          percentage: 0.1100330099029709,
        },
        {
          name: "Holdemanella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Holdemania",
          percentage: 0.01000300090027008,
        },
        {
          name: "Hungatella",
          percentage: 0.05001500450135041,
        },
        {
          name: "Intestinibacter",
          percentage: 0.030009002700810243,
        },
        {
          name: "Janibacter",
          percentage: 0.05001500450135041,
        },
        {
          name: "Klebsiella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Lachnoclostridium",
          percentage: 2.230669200760228,
        },
        {
          name: "Lachnospira",
          percentage: 0.07002100630189058,
        },
        {
          name: "Lachnospiraceae AC2044 group",
          percentage: 0.030009002700810243,
        },
        {
          name: "Lachnospiraceae FCS020 group",
          percentage: 0.07002100630189058,
        },
        {
          name: "Lachnospiraceae FE2018 group",
          percentage: 0.02000600180054016,
        },
        {
          name: "Lachnospiraceae NC2004 group",
          percentage: 0.02000600180054016,
        },
        {
          name: "Lachnospiraceae ND3007 group",
          percentage: 0.08002400720216064,
        },
        {
          name: "Lachnospiraceae NK3A20 group",
          percentage: 0.04001200360108032,
        },
        {
          name: "Lachnospiraceae NK4A136 group",
          percentage: 0.6902070621186356,
        },
        {
          name: "Lachnospiraceae NK4B4 group",
          percentage: 0.3601080324097229,
        },
        {
          name: "Lachnospiraceae UCG-001",
          percentage: 0.060018005401620486,
        },
        {
          name: "Lachnospiraceae UCG-002",
          percentage: 0.030009002700810243,
        },
        {
          name: "Lachnospiraceae UCG-004",
          percentage: 0.1700510153045914,
        },
        {
          name: "Lachnospiraceae UCG-006",
          percentage: 0.10003000900270081,
        },
        {
          name: "Lachnospiraceae UCG-008",
          percentage: 0.3501050315094528,
        },
        {
          name: "Lachnospiraceae UCG-010",
          percentage: 0.01000300090027008,
        },
        {
          name: "Lachnospiraceae XPB1014 group",
          percentage: 0.04001200360108032,
        },
        {
          name: "Lactobacillus",
          percentage: 0.07002100630189058,
        },
        {
          name: "Lactococcus",
          percentage: 0.02000600180054016,
        },
        {
          name: "Leptotrichia",
          percentage: 0.04001200360108032,
        },
        {
          name: "Lysinibacillus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Magnetospira",
          percentage: 0.01000300090027008,
        },
        {
          name: "Marvinbryantia",
          percentage: 0.060018005401620486,
        },
        {
          name: "Megasphaera",
          percentage: 0.04001200360108032,
        },
        {
          name: "Methylobacterium-Methylorubrum",
          percentage: 0.01000300090027008,
        },
        {
          name: "Mogibacterium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Monoglobus",
          percentage: 0.030009002700810243,
        },
        {
          name: "Moryella",
          percentage: 0.02000600180054016,
        },
        {
          name: "NK4A214 group",
          percentage: 0.02000600180054016,
        },
        {
          name: "Negativibacillus",
          percentage: 0.250075022506752,
        },
        {
          name: "Neoscardovia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Nocardioides",
          percentage: 0.01000300090027008,
        },
        {
          name: "Noviherbaspirillum",
          percentage: 0.01000300090027008,
        },
        {
          name: "OM27 clade",
          percentage: 0.01000300090027008,
        },
        {
          name: "Odoribacter",
          percentage: 0.05001500450135041,
        },
        {
          name: "Olsenella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Oribacterium",
          percentage: 0.05001500450135041,
        },
        {
          name: "Oscillibacter",
          percentage: 0.05001500450135041,
        },
        {
          name: "Paenibacillus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Paeniclostridium",
          percentage: 0.030009002700810243,
        },
        {
          name: "Parabacteroides",
          percentage: 0.7502250675202561,
        },
        {
          name: "Paraclostridium",
          percentage: 0.24007202160648194,
        },
        {
          name: "Paraeggerthella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Parvimonas",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pelosinus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Peptoclostridium",
          percentage: 0.610183054916475,
        },
        {
          name: "Peptostreptococcus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Persicirhabdus",
          percentage: 0.02000600180054016,
        },
        {
          name: "Phascolarctobacterium",
          percentage: 0.1100330099029709,
        },
        {
          name: "Porphyromonas",
          percentage: 0.02000600180054016,
        },
        {
          name: "Prevotella_7",
          percentage: 0.01000300090027008,
        },
        {
          name: "Prevotella_9",
          percentage: 0.04001200360108032,
        },
        {
          name: "Prevotella",
          percentage: 0.1100330099029709,
        },
        {
          name: "Prevotellaceae UCG-001",
          percentage: 0.01000300090027008,
        },
        {
          name: "Prevotellaceae UCG-004",
          percentage: 0.030009002700810243,
        },
        {
          name: "Pricia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Proteiniphilum",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pseudarthrobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pseudobutyrivibrio",
          percentage: 0.030009002700810243,
        },
        {
          name: "Pseudohongiella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pseudomonas",
          percentage: 0.01000300090027008,
        },
        {
          name: "Pseudopropionibacterium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Psychrilyobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Rikenellaceae RC9 gut group",
          percentage: 0.04001200360108032,
        },
        {
          name: "Robinsoniella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Romboutsia",
          percentage: 0.19005701710513154,
        },
        {
          name: "Roseburia",
          percentage: 1.000300090027008,
        },
        {
          name: "Ruminiclostridium",
          percentage: 0.08002400720216064,
        },
        {
          name: "Ruminobacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Ruminococcus",
          percentage: 0.060018005401620486,
        },
        {
          name: "Salinibacter",
          percentage: 0.01000300090027008,
        },
        {
          name: "Selenomonas",
          percentage: 0.030009002700810243,
        },
        {
          name: "Sellimonas",
          percentage: 0.02000600180054016,
        },
        {
          name: "Senegalimassilia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Serratia",
          percentage: 0.01000300090027008,
        },
        {
          name: "Shewanella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Shuttleworthia",
          percentage: 0.05001500450135041,
        },
        {
          name: "Skermanella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Slackia",
          percentage: 0.10003000900270081,
        },
        {
          name: "Solobacterium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Sphaerisporangium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Spirochaeta",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sporacetigenium",
          percentage: 0.02000600180054016,
        },
        {
          name: "Staphylococcus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Streptococcus",
          percentage: 1.2603781134340302,
        },
        {
          name: "Streptomyces",
          percentage: 0.02000600180054016,
        },
        {
          name: "Subdoligranulum",
          percentage: 0.02000600180054016,
        },
        {
          name: "Succiniclasticum",
          percentage: 0.02000600180054016,
        },
        {
          name: "Sumerlaea",
          percentage: 0.01000300090027008,
        },
        {
          name: "Sutterella",
          percentage: 0.07002100630189058,
        },
        {
          name: "Sva0996 marine group",
          percentage: 0.01000300090027008,
        },
        {
          name: "Syntrophococcus",
          percentage: 0.1100330099029709,
        },
        {
          name: "Syntrophomonas",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tannerella",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tepidimicrobium",
          percentage: 0.01000300090027008,
        },
        {
          name: "Terrisporobacter",
          percentage: 0.02000600180054016,
        },
        {
          name: "Tetrasphaera",
          percentage: 0.01000300090027008,
        },
        {
          name: "Thermotomaculum",
          percentage: 0.01000300090027008,
        },
        {
          name: "Thermus",
          percentage: 0.01000300090027008,
        },
        {
          name: "Treponema",
          percentage: 0.01000300090027008,
        },
        {
          name: "Tyzzerella",
          percentage: 0.3501050315094528,
        },
        {
          name: "UCG-002",
          percentage: 0.02000600180054016,
        },
        {
          name: "UCG-004",
          percentage: 0.02000600180054016,
        },
        {
          name: "UCG-005",
          percentage: 0.060018005401620486,
        },
        {
          name: "Veillonella",
          percentage: 0.04001200360108032,
        },
        {
          name: "W5053",
          percentage: 0.01000300090027008,
        },
        {
          name: "[Bacteroides] pectinophilus group",
          percentage: 0.01000300090027008,
        },
        {
          name: "[Clostridium] innocuum group",
          percentage: 0.02000600180054016,
        },
        {
          name: "[Eubacterium] eligens group",
          percentage: 0.04001200360108032,
        },
        {
          name: "[Eubacterium] fissicatena group",
          percentage: 0.07002100630189058,
        },
        {
          name: "[Eubacterium] hallii group",
          percentage: 0.19005701710513154,
        },
        {
          name: "[Eubacterium] nodatum group",
          percentage: 0.02000600180054016,
        },
        {
          name: "[Eubacterium] oxidoreducens group",
          percentage: 0.12003601080324097,
        },
        {
          name: "[Eubacterium] ruminantium group",
          percentage: 0.05001500450135041,
        },
        {
          name: "[Eubacterium] tenue group",
          percentage: 0.01000300090027008,
        },
        {
          name: "[Eubacterium] ventriosum group",
          percentage: 0.07002100630189058,
        },
        {
          name: "[Eubacterium] xylanophilum group",
          percentage: 0.10003000900270081,
        },
        {
          name: "[Ruminococcus] gauvreauii group",
          percentage: 0.3401020306091828,
        },
        {
          name: "[Ruminococcus] gnavus group",
          percentage: 0.6702010603180955,
        },
        {
          name: "[Ruminococcus] torques group",
          percentage: 0.5401620486145844,
        },
      ],
    },
  ],
  quest_disease_risk: [
    {
      name: "Эндокринные нарушения",
      risk: "low",
    },
    {
      name: "Заболевания глаз",
      risk: "high",
    },
    {
      name: "Желудочно-кишечные расстройства",
      risk: "medium",
    },
    {
      name: "Общие нарушения питания NEC",
      risk: "medium",
    },
    {
      name: "Нарушения со стороны гепатобилиарной системы",
      risk: "medium",
    },
    {
      name: "Нарушения иммунной системы",
      risk: "medium",
    },
    {
      name: "Инфекции и инвазии",
      risk: "medium",
    },
    {
      name: "Травмы, отравления и процедурные осложнения",
      risk: "medium",
    },
    {
      name: "Заболевание печени",
      risk: "medium",
    },
    {
      name: "Нарушения обмена веществ и питания",
      risk: "low",
    },
    {
      name: "Заболевания опорно-двигательного аппарата и соединительной ткани",
      risk: "high",
    },
    {
      name: "Новообразования доброкачественные, злокачественные и неуточненные (включая кисты и полипы)",
      risk: "medium",
    },
    {
      name: "Расстройства нервной системы",
      risk: "high",
    },
    {
      name: "Беременность, послеродовой период и перинатальные состояния",
      risk: "low",
    },
    {
      name: "Психические расстройства",
      risk: "medium",
    },
    {
      name: "Нарушения со стороны почек и мочевыделительной системы",
      risk: "medium",
    },
    {
      name: "Заболевания репродуктивной системы и молочной железы",
      risk: "low",
    },
    {
      name: "Заболевания кожи и подкожной клетчатки",
      risk: "low",
    },
    {
      name: "Сосудистые расстройства",
      risk: "medium",
    },
    {
      name: "Стресс",
      risk: "high",
    },
    {
      name: "Инсульт",
      risk: "medium",
    },
    {
      name: "Сердечно-сосудистые заболевания",
      risk: 43.5,
    },
  ],
  lifestyle_errors: [],
  menu: [
    {
      day: "monday",
      meals: [
        {
          meal: "breakfast",
          dishes: [
            {
              name: "Кабачковые оладьи",
              portion: {
                weight: 150,
                calories: 360,
                proteins: 18,
                fats: 6,
                carbohydrates: 75,
              },
            },
            {
              name: "Смузи из сельдерея и яблок",
              portion: {
                weight: 300,
                calories: 105,
                proteins: 12,
                fats: 0,
                carbohydrates: 87,
              },
            },
          ],
        },
        {
          meal: "lunch",
          dishes: [
            {
              name: "Паста Болоньезе",
              portion: {
                weight: 200,
                calories: 368,
                proteins: 17,
                fats: 22,
                carbohydrates: 60,
              },
            },
            {
              name: "Салат из печеных овощей",
              portion: {
                weight: 200,
                calories: 160,
                proteins: 13,
                fats: 40,
                carbohydrates: 46,
              },
            },
          ],
        },
        {
          meal: "dinner",
          dishes: [
            {
              name: "Тофу с кунжутом и баклажаном",
              portion: {
                weight: 250,
                calories: 307,
                proteins: 31,
                fats: 46,
                carbohydrates: 21,
              },
            },
            {
              name: "Салат из телятины",
              portion: {
                weight: 250,
                calories: 275,
                proteins: 47,
                fats: 29,
                carbohydrates: 23,
              },
            },
          ],
        },
      ],
    },
  ],
  main_risk_health_text_1:
    "У вас не обнару��������ено рисков развития ожирения, диабета II типа и синдрома раздраженного кишечника. Это метаболические заболевания и заболевания желудочно-кишечного тракта, ассоциированные с составом микробиоты кишечника. Тем не менее обратите внимание на другие риски.",
  main_risk_health_text_2:
    "У вас не обнаружено рисков заболеваний, связанных с метаболизмом: ожирения, диабета, синдрома раздраженного кишечника",
  no_high_risk_text_1:
    "Состав микробиоты вашего кишечника не ассоциирован с предоставленными заболеваниями.Чтобы и дальше поддерживать ее разнообразие и улучшить другие показатели, соблюдайте рекомендации в разделе «Дорожная карта здоровья»",
  no_high_risk_text_2: "Высоких рисков заболеваний не выявлено",
  lifestyle_errors_text_1:
    "Мы проанализировали вашу анкету и не обнаружили ошибок в питании. Продолжайте придерживаться здоровых привычек, соблюдая разработанный нами Персональный план питания",
  lifestyle_errors_text_2: "",
  index_text:
    "Значение индекса говорит об умеренном разнообразии состава микробиоты. При таком составе она устойчива к негативному влиянию внешних факторов. Чтобы скорректировать содержание некоторых групп бактери�� и повысите индекс здоровья микробиоты, придерживайтесь наших рекомендаций в разделе «Дорожная карта здоровья»",
  age_text_1:
    "По результатам исследования возраст микробиоты значительно отличается от вашего биологического возраста",
  age_text_2:
    "Вы можете «омолодить» микробиоту, изменив пищевые привычки и соблюдая рекомендации, указанные в разделе «Дорожная карта здоровья»",
  super_patogens_text_1:
    "По результатам анализа у вас не выявлены патогенные бактерии, входящие в состав микробиоты кишечника. Это хороший знак! Посмотрите другие разделы отчета, чтобы узнать больше о группах бактерий в вашей микробиоте",
  super_patogens_text_2: "",
  norm_patogens_text:
    "Представленные группы бактерий в норме могут присутствовать в небольших количествах в микробиоте человека. Однако будьте внимательны — при ослабленном иммунитете они могут спровоцировать развитие целого спектра заболеваний",
  special_bacteria_text:
    "У вас обнаружено 11 бактерий с уникальными свойствами.",
  problem_bacteria_text:
    " Ниже представлены бактерии, содержание бактерий наиболее сильно отклоняется от нормы:",
  probiotics_text:
    "Необходимо скорректировать их содержание, чтобы они могли в полной мере выполнять свои защитные функции",
  vitamin_bacteria_text:
    "У вас обнаружено несколько категорий бактерий, содержание которых нарушено. Наши рекомендации помогут привести их содержание к оптимальным значениям.",
};
