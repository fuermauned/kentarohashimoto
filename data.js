(function () {
  const works = [
    {
      slug: "spatiotemporal-expansion",
      title: "Spatiotemporal Expansion",
      year: "2025",
      category: "MOVING-IMAGE",
      duration: "3’00”",
      vimeoId: "1157507579",
      image: "assets/images/works/spatiotemporal-expansion/scene01.webp",
      caption: {
        ja: [
          "川の流れ、雲の揺らぎ、木々の葉擦れ。そういった自然現象を眺めていると、しばしば悠久の時の中にいるような感覚になることがあります。その時、時間は止まっているようでありながら、同時に絶えず流れ続けているようでもあります。小さな何かを見つめているようでありながら、大きな何かに包まれているようでもあります。そういった感覚は、現代社会の中で私たちが失いかけているものの一つではないでしょうか。",
          "本作品では、近所の公園に植えられた何気ない木々を被写体に、私たちが世界に置いてきてしまったものを表現しました。「記号化された『木』を眺める」という体験が、「木が木であること」、「それを見ている自分が自分であること」、そして「そこに内在する霊性のようなものを感じ取ること」、そういった純粋な経験へと変わる、そのような作品を目指しました。",
        ],
      },
      gallery: Array.from({ length: 7 }, (_, index) => `assets/images/works/spatiotemporal-expansion/scene${String(index + 1).padStart(2, "0")}.webp`),
    },
    {
      slug: "spatiotemporal-expansion-breathed",
      title: "Spatiotemporal Expansion(breathed)",
      year: "2026",
      category: "MOVING-IMAGE",
      duration: "3’16”",
      vimeoId: "1217936896",
      image: "assets/images/works/spatiotemporal-expansion-breathed/scene01.webp",
      caption: {
        ja: [
          "市場原理の赴くままに形成された現代都市の多くは、どこも似たような様相を示しています。いきいきとした個性はコンクリートの中に隠され、極めて無機質な印象を受けます。しかし、それらが確かに地球の上に存在し、生きた人々が暮らしている限り、そこには生命のエネルギーが存在しているはずです。",
          "東京に浮かぶ人工島、月島の勝ちどきエリアを題材に、静的な街の風景を切り取り、それを動かすことによって、都市に内在する生を浮かび上がらせることを目指した作品です。",
        ],
      },
      gallery: Array.from({ length: 7 }, (_, index) => `assets/images/works/spatiotemporal-expansion-breathed/scene${String(index + 1).padStart(2, "0")}.webp`),
    },
    {
      slug: "spatiotemporal-expansion-juxtaposed",
      title: "Spatiotemporal Expansion(juxtaposed)",
      year: "2026",
      category: "INSTALLATION",
      duration: "2’15”",
      vimeoId: "1217940602",
      image: "assets/images/works/spatiotemporal-expansion-juxtaposed/scene01.webp",
      caption: {
        ja: [
          "窓は、内と外という区切りを少しだけ取り払ってくれます。窓の中と外は互いに没交渉でありながら、それでいて見る、見られるという関係性によって繋がっています。窓の外を単に区切られた外と捉えるか、関わり合っている世界と捉えるかによって、窓から見える景色は全く異なるものになるでしょう。",
          "映像も窓と同じではないでしょうか。それを単なる光として見るか、世界の現れとして見るか、その差は見る人の感性によって生まれます。本作品では映像と窓とを接続させることによって、映像を鑑賞するという経験そのものの転換を図りました。",
        ],
      },
      gallery: Array.from({ length: 3 }, (_, index) => `assets/images/works/spatiotemporal-expansion-juxtaposed/scene${String(index + 1).padStart(2, "0")}.webp`),
    },
    {
      slug: "inverted-inversion",
      title: "INVERTED INVERSION",
      year: "2026",
      category: "INSTALLATION",
      duration: "1’54”",
      vimeoId: "1218227899",
      image: "assets/images/works/inverted-inversion/scene01.webp",
      caption: {
        ja: [
          "万物はその同一性を保ちながら、絶えず変化を続けています。そのままでは捉えようのない世界を、ある閾値で捨象し固定化することが、理解するという行為なのではないでしょうか。",
          "ここで映し出されているのは、本質的には意味のない光です。絶えず移り変わる光を前にして、私たちはそれを理解しようとします。それを避けるように、光は闇に、闇は光へと変化を続けます。相反する二つの位置、役割が変化し続けることを通して、私たちは理解しようとしているということを理解するのかもしれません。",
        ],
      },
      gallery: ["scene01", "scene02", "scene04", "scene05", "scene06"].map((name) => `assets/images/works/inverted-inversion/${name}.webp`),
    },
  ];

  const biography = [
    "2004年生まれ、22歳。武蔵野美術大学造形構想学部映像学科在学中。",
    "10代の頃に東洋思想、特に禅の精神に関心を持ったことをきっかけに制作を始める。現在は映像、音響、CG、プログラミングなどを用いながら、分節化し得ない人間の根源的な知覚に関する探究を進めている。",
  ];

  window.PORTFOLIO_DATA = {
    artist: {
      name: "KENTARO HASHIMOTO",
      nameJa: "橋本　研太郎",
      roleEn: "Moving-image artist",
      roleJa: "映像作家",
      email: "kentaro.84.ez@gmail.com",
      logo: "assets/images/logo.png",
      vimeo: "https://vimeo.com/kentarohashimoto",
    },
    reel: "assets/media/reel.mp4",
    works,
    statement: {
      ja: [
        "映像というメディアは、その中身が実体を持たないただの情報であるということにその特異性を有します。目に映る光にすぎないという点において、映像は現象であるということができます。",
        "映像は時間を直接取り扱うことのできるメディアです。それは言い換えると、時間が支持体でありキャンバスであるということです。生成し、変化し、集中し、分散し、消失する。そういった動きを取り扱うことのできる映像に、可能性を感じています。",
        "我々の生には、語り得ないものが存在します。固定化されることによって失われるものがあります。絶えず変化する世界の美しさを、どうにかしてとどめようとする、その行為が私にとっての表現です。私が映像を用いて表現したいのは、具体的な事物でありながら、その奥に確かに存在する「それ」なのです。",
      ],
    },
    profile: { ja: biography },
    formEndpoint: "https://formspree.io/f/xppajapg",
  };
})();
