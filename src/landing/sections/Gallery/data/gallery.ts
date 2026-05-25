import floresImg from "@/common/assets/images/gallery/flores.webp";
import floresMarromImg from "@/common/assets/images/gallery/flores-marrom.jpg";
import camisaFloresImg from "@/common/assets/images/gallery/camisa-flores.jpg";
import rosangelaImg from "@/common/assets/images/gallery/rosangela.webp";
import wilsonPedroImg from "@/common/assets/images/gallery/wilson-pedro.jpg";
import gaelImg from "@/common/assets/images/gallery/gael.webp";
import muriloImg from "@/common/assets/images/gallery/murilo.webp";
import bercoVerdeImg from "@/common/assets/images/gallery/berco-verde.webp";
import daviLucaImg from "@/common/assets/images/gallery/davi-luca.webp";
import natal3Img from "@/common/assets/images/gallery/natal-3.webp";
import natal5Img from "@/common/assets/images/gallery/natal-5.webp";
import natal1Img from "@/common/assets/images/gallery/natal-1.jpg";
import natal2Img from "@/common/assets/images/gallery/natal-2.webp";
import natal6Img from "@/common/assets/images/gallery/natal-6.webp";
import natal4Img from "@/common/assets/images/gallery/natal-4.webp";
import medicinaVetImg from "@/common/assets/images/gallery/medicina-vet.webp";
import esteticaImg from "@/common/assets/images/gallery/estetica.jpg";
import estojosCamursaImg from "@/common/assets/images/gallery/estojos-camursa.webp";
import necessaireCorujaImg from "@/common/assets/images/gallery/necessaire-coruja.webp";
import necessaireEstrelasImg from "@/common/assets/images/gallery/necessaire-estrelas.webp";
import necessaireBasicoImg from "@/common/assets/images/gallery/necessaire-basico.webp";
import estojosImg from "@/common/assets/images/gallery/estojos.webp";
import bolsasMarromImg from "@/common/assets/images/gallery/bolsas-marrom.webp";
import corpusImg from "@/common/assets/images/gallery/corpus.webp";
import corpusEstojoImg from "@/common/assets/images/gallery/corpus-montante-estojo.webp";
import fenixTruckImg from "@/common/assets/images/gallery/fenix-truck.webp";
import republicaMatilhaImg from "@/common/assets/images/gallery/republica-matilha.webp";
import professoraYohana2Img from "@/common/assets/images/gallery/professora-yohana-2.webp";
import professoraYohannaImg from "@/common/assets/images/gallery/professora-yohanna.webp";
import cauaImg from "@/common/assets/images/gallery/caua.webp";
import ratatoriaDrinksImg from "@/common/assets/images/gallery/ratatoria.webp";
import donadoEsteticaImg from "@/common/assets/images/gallery/donado-estetica.jpg";
import embelezzImg from "@/common/assets/images/gallery/embelezz.webp";
import gabrielLanchesImg from "@/common/assets/images/gallery/gabriel-lanches.webp";
import interLimeiraImg from "@/common/assets/images/gallery/inter-limeira.jpg";
import internationalSchoolImg from "@/common/assets/images/gallery/international-school.webp";
import brotherhoodImg from "@/common/assets/images/gallery/brotherhood.webp";
import transmegaImg from "@/common/assets/images/gallery/transmega.webp";
import aImg from "@/common/assets/images/gallery/a.jpg";
import angelaGilmarImg from "@/common/assets/images/gallery/angela-gilmar.webp";
import anieleImg from "@/common/assets/images/gallery/aniele.webp";
import aparecidaImg from "@/common/assets/images/gallery/aparecida.jpg";
import marceloViniciusImg from "@/common/assets/images/gallery/marcelo-vinicius-ketlyn.webp";
import isaImg from "@/common/assets/images/gallery/isa.webp";
import nadoImg from "@/common/assets/images/gallery/nado.webp";
import aizaBiomedicinaImg from "@/common/assets/images/gallery/aiza-biomediciana.jpg";
import ursoImg from "@/common/assets/images/gallery/urso.webp";
import vidaCapImg from "@/common/assets/images/gallery/vida-cap.webp";
import manuImg from "@/common/assets/images/gallery/manu.webp";
import saraImg from "@/common/assets/images/gallery/sara.webp";

export type GalleryCategoryKey =
  | "all"
  | "towels"
  | "baby-layette"
  | "bags-pouches"
  | "artistic-embroidery"
  | "professional-uniforms"
  | "corporate"
  | "christmas"
  | "custom-clothing"
  | "kitchen-towels";

export type GalleryCategory = {
  category: GalleryCategoryKey;
  categoryDisplay: string;
};

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  order: number;
  category: Exclude<GalleryCategoryKey, "all">;
};

export const galleryCategories: GalleryCategory[] = [
  { category: "all", categoryDisplay: "Todos" },
  { category: "towels", categoryDisplay: "Toalhas" },
  { category: "baby-layette", categoryDisplay: "Enxoval de Bebê" },
  { category: "bags-pouches", categoryDisplay: "Bolsas e Necessaires" },
  { category: "artistic-embroidery", categoryDisplay: "Bordado Artístico" },
  {
    category: "professional-uniforms",
    categoryDisplay: "Uniformes Profissionais",
  },
  { category: "corporate", categoryDisplay: "Corporativo" },
  { category: "christmas", categoryDisplay: "Natal" },
  { category: "custom-clothing", categoryDisplay: "Roupas Personalizadas" },
  { category: "kitchen-towels", categoryDisplay: "Panos de Copa" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: floresImg,
    alt: "Jogo de toalhas brancas Karsten com bordado floral de rosas em tons de rosa e verde, acabamento com barra de tecido estampado floral xadrez em estilo provençal",
    title: "Toalhas Florais Provençais",
    order: 1,
    category: "towels",
  },
  {
    id: 2,
    src: floresMarromImg,
    alt: "Bordado floral richelieu em tecido marrom com detalhes dourados, desenho de flor mandala com recortes vazados e arabescos elegantes em linha dourada",
    title: "Richelieu Dourado",
    order: 2,
    category: "artistic-embroidery",
  },
  {
    id: 3,
    src: rosangelaImg,
    alt: "Conjunto de toalhas de banho e rosto em cor creme com bordado personalizado dos nomes Rosangela e Rogerio em letras cursivas marrom, monograma com letra R elegante",
    title: "Toalhas Personalizadas Casal",
    order: 3,
    category: "towels",
  },
  {
    id: 4,
    src: gaelImg,
    alt: "Kit enxoval de bebê completo com tema safari e nome Gael bordado em diversas peças: fraldas, toalhas e mantas com bordados de leão, zebra, girafa e elefante em tons de bege e verde",
    title: "Enxoval Safari Gael",
    order: 4,
    category: "baby-layette",
  },
  {
    id: 5,
    src: muriloImg,
    alt: "Almofada decorativa de berço branca com bordado do nome Murilo em letra cursiva azul-petróleo e monograma da letra M em ponto cheio bege, acabamento sofisticado",
    title: "Almofada Personalizada Murilo",
    order: 5,
    category: "baby-layette",
  },
  {
    id: 6,
    src: natal5Img,
    alt: "Par de panos de prato natalinos com bordado 'Feliz Natal' em letras cursivas verde e vermelho, acabamento com barrado dourado, tecido decorativo com arabescos e poá",
    title: "Panos de Prato Natalinos",
    order: 6,
    category: "christmas",
  },
  {
    id: 7,
    src: medicinaVetImg,
    alt: "Bordado profissional do brasão de Medicina Veterinária em jaleco branco, com símbolo da serpente e bastão em verde, coroa de louros em fio dourado e letras em preto",
    title: "Brasão Medicina Veterinária",
    order: 7,
    category: "professional-uniforms",
  },
  {
    id: 8,
    src: camisaFloresImg,
    alt: "Camiseta verde militar com bordado artístico de cesto de flores em estilo clássico, flores multicoloridas em rosa, branco, amarelo e lilás com folhagens detalhadas",
    title: "Cesta de Flores Artística",
    order: 8,
    category: "artistic-embroidery",
  },
  {
    id: 9,
    src: estojosCamursaImg,
    alt: "Conjunto de toalhas personalizadas em rosa e verde menta com nomes bordados em letra cursiva: Maria Luiza, Lívia, Ana Clara, Lucas, Vinicius e Felipe",
    title: "Toalhas Família Personalizada",
    order: 9,
    category: "towels",
  },
  {
    id: 10,
    src: wilsonPedroImg,
    alt: "Jogo de toalhas de banho e rosto em azul turquesa com bordado personalizado do nome Wilson Pedro, monograma WP em letras serifadas rosa, textura em relevo losango",
    title: "Toalhas Wilson Pedro",
    order: 10,
    category: "towels",
  },
  {
    id: 11,
    src: bercoVerdeImg,
    alt: "Kit berço completo em verde menta e branco com bordados delicados, protetores laterais acolchoados, rolo e edredom com acabamento em laços de cetim",
    title: "Kit Berço Verde Menta",
    order: 11,
    category: "baby-layette",
  },
  {
    id: 12,
    src: natal3Img,
    alt: "Bordado natalino detalhado de árvore de Natal verde com estrela dourada, faixa com inscrição 'Feliz Natal', arabescos vermelhos decorativos e estrelinhas, ponto cheio impecável",
    title: "Árvore de Natal Bordada",
    order: 12,
    category: "christmas",
  },
  {
    id: 13,
    src: esteticaImg,
    alt: "Bordado profissional em jaleco branco com brasão de Estética: coroa de louros dourada, caduceu com asas e silhueta feminina em verde, lettering cursivo",
    title: "Brasão de Estética",
    order: 13,
    category: "professional-uniforms",
  },
  {
    id: 14,
    src: necessaireCorujaImg,
    alt: "Kit de necessaires artesanais com tecido estampado de corujas coloridas em laranja, azul e amarelo, zíper laranja, incluindo frasqueira, necessaire e porta-moedas com pingente de coração",
    title: "Kit Necessaires Corujas",
    order: 14,
    category: "bags-pouches",
  },
  {
    id: 15,
    src: necessaireEstrelasImg,
    alt: "Conjunto de necessaires em tecido azul com estampa de estrelas douradas: frasqueira, necessaire de mão, porta-óculos e porta-moedas, costura matelassê",
    title: "Kit Necessaires Estrelas",
    order: 15,
    category: "bags-pouches",
  },
  {
    id: 16,
    src: daviLucaImg,
    alt: "Fralda de boca personalizada com nome Davi Lucca e bordados coloridos de dinossauros fofos em azul e marrom, elefante lilás com balões e hipopótamo cinza",
    title: "Fralda Dinossauros Davi Lucca",
    order: 16,
    category: "baby-layette",
  },
  {
    id: 17,
    src: professoraYohana2Img,
    alt: "Bordado colorido do laço símbolo do autismo em peças de quebra-cabeça nas cores vermelho, amarelo, azul e roxo sobre tecido preto, com inscrição 'Professora Yohana'",
    title: "Laço Autismo Professora",
    order: 17,
    category: "professional-uniforms",
  },
  {
    id: 18,
    src: corpusImg,
    alt: "Kit corporativo Corpus Day Hospital com bordado do logotipo em amarelo dourado em toalhas lilás de diferentes tamanhos, necessaire cinza e jogo de lençol, acabamento profissional uniforme",
    title: "Kit Corporativo Corpus",
    order: 18,
    category: "corporate",
  },
  {
    id: 19,
    src: fenixTruckImg,
    alt: "Bordado nas costas de jaleco branco com logotipo Fênix Truck Center: ave fênix em preto com asas abertas, lettering em vermelho e laranja degradê, 'Desde 2008 - Iracemápolis'",
    title: "Logo Fênix Truck Center",
    order: 19,
    category: "corporate",
  },
  {
    id: 20,
    src: natal1Img,
    alt: "Toalha lavabo branca com bordado 'Feliz Natal' em letras douradas, estrela e sino de Natal, acabamento com renda dourada delicada, sobre toalha rosa com bordado de guirlanda natalina",
    title: "Toalha Lavabo Natal Dourada",
    order: 20,
    category: "christmas",
  },
  {
    id: 21,
    src: republicaMatilhaImg,
    alt: "Roupão de microfibra turquesa com bordado circular do logotipo República Matilha: pata de cachorro centralizada com tipografia em arco, produto para pet shop",
    title: "Roupão República Matilha",
    order: 21,
    category: "corporate",
  },
  {
    id: 22,
    src: bolsasMarromImg,
    alt: "Conjunto de bolsas maternidade em linho bege com detalhes em couro marrom, bordado da letra A cursiva em marrom, laço decorativo de couro, mochila e bolsa de mão",
    title: "Bolsas Maternidade Elegantes",
    order: 22,
    category: "bags-pouches",
  },
  {
    id: 23,
    src: angelaGilmarImg,
    alt: "Jogo de toalhas de banho e rosto em verde sage com bordado personalizado dos nomes Angela e Gilmar em letras cursivas brancas com arabescos, conjunto para casal",
    title: "Toalhas Casal Angela e Gilmar",
    order: 23,
    category: "towels",
  },
  {
    id: 24,
    src: necessaireBasicoImg,
    alt: "Coleção variada de necessaires e bolsas artesanais: bolsa verde, necessaire zebra, porta-óculos com bordado de cílios, necessaire Minnie Mouse, porta-moedas olho grego azul",
    title: "Coleção de Necessaires",
    order: 24,
    category: "bags-pouches",
  },
  {
    id: 25,
    src: professoraYohannaImg,
    alt: "Conjunto de camisetas moletom em bege, azul petróleo e preto com bordado do laço autismo colorido em peças de quebra-cabeça e inscrição 'Professora Yohana'",
    title: "Moletom Professora Yohana",
    order: 25,
    category: "professional-uniforms",
  },
  {
    id: 26,
    src: anieleImg,
    alt: "Jogo de toalhas brancas com bordado do nome Aniele em letras cursivas douradas, acabamento com renda e laço de cetim branco, textura delicada",
    title: "Toalhas Aniele",
    order: 26,
    category: "towels",
  },
  {
    id: 27,
    src: aparecidaImg,
    alt: "Toalha de banho bege com bordado do nome Aparecida em letras cursivas douradas com monograma da letra A em ponto cruz e acabamento texturizado",
    title: "Toalha Aparecida",
    order: 27,
    category: "towels",
  },
  {
    id: 28,
    src: cauaImg,
    alt: "Lote de camisetas polo pretas com bordado do logotipo Cauã Santos 25 em verde neon e branco, estrela estilizada, produção em série para equipe esportiva",
    title: "Uniformes Cauã Santos 25",
    order: 28,
    category: "corporate",
  },
  {
    id: 29,
    src: natal2Img,
    alt: "Toalha lavabo branca com bordado do trenó do Papai Noel em vermelho e dourado, presentes decorados, acabamento com renda dourada rendada luxuosa",
    title: "Toalha Trenó de Natal",
    order: 29,
    category: "christmas",
  },
  {
    id: 30,
    src: ratatoriaDrinksImg,
    alt: "Bordado detalhado do logotipo Rotatória Drinks em camiseta preta: ilustração colorida com drinks, frutas, gelo e relógio, múltiplas cores em ponto cheio",
    title: "Logo Rotatória Drinks",
    order: 30,
    category: "corporate",
  },
  {
    id: 31,
    src: marceloViniciusImg,
    alt: "Três toalhas personalizadas empilhadas: toalha rosa com nome Ketlyn, toalha branca com nome Vinicius em letras azuis e toalha azul marinho com nome Marcelo em prata",
    title: "Toalhas Família Personalizada",
    order: 31,
    category: "towels",
  },
  {
    id: 32,
    src: corpusEstojoImg,
    alt: "Produção em escala de estojos e necessaires cinza com bordado do logotipo Corpus Day Hospital em dourado, empilhados organizadamente, acabamento profissional",
    title: "Estojos Corpus Day Hospital",
    order: 32,
    category: "corporate",
  },
  {
    id: 33,
    src: donadoEsteticaImg,
    alt: "Bordado fino em tecido branco com logotipo de estúdio de estética: silhueta feminina estilizada com lettering 'Donado Corpo Estética' em ponto corrido preto",
    title: "Logo Donado Corpo Estética",
    order: 33,
    category: "corporate",
  },
  {
    id: 34,
    src: estojosImg,
    alt: "Quatro toalhas de cozinha artesanais personalizadas com nomes Bete e Aninha bordados em diversas cores, decoradas com apliques de xícaras e corações em rosa, verde e amarelo",
    title: "Toalhas Artesanais Bete e Aninha",
    order: 34,
    category: "towels",
  },
  {
    id: 35,
    src: natal6Img,
    alt: "Jogo de sete panos de copa bordados com os dias da semana em letras cursivas coloridas, barrados de tecido estampado floral e de frutas, acabamento com renda dourada",
    title: "Panos de Copa Dias da Semana",
    order: 35,
    category: "kitchen-towels",
  },
  {
    id: 36,
    src: embelezzImg,
    alt: "Conjunto de camisas polo pretas com bordado do logotipo Instituto Embelleze em branco: pássaro estilizado com lettering institucional, uniforme profissional",
    title: "Uniformes Instituto Embelleze",
    order: 36,
    category: "corporate",
  },
  {
    id: 37,
    src: gabrielLanchesImg,
    alt: "Quatro camisetas pretas com bordado do logotipo Gabriel Lanches em patch circular laranja: hamburger estilizado com inscrição 'Desde 2015', uniforme para lanchonete",
    title: "Uniformes Gabriel Lanches",
    order: 37,
    category: "corporate",
  },
  {
    id: 38,
    src: isaImg,
    alt: "Roupão de banho branco felpudo com bordado do nome Isa em letras cursivas rosa, acabamento com vivo rosa delicado na gola e lapelas",
    title: "Roupão Personalizado Isa",
    order: 38,
    category: "towels",
  },
  {
    id: 39,
    src: interLimeiraImg,
    alt: "Shoulder bag preta personalizada com bordado do escudo A.A. Internacional de Limeira, nome Santana e logotipo Inter em branco, mochila esportiva",
    title: "Mochila Inter Limeira",
    order: 39,
    category: "corporate",
  },
  {
    id: 40,
    src: nadoImg,
    alt: "Bordado em linha fina preta sobre tecido cinza claro com desenho minimalista de nadadora com asas de borboleta, estilo line art contemporâneo",
    title: "Bordado Nadadora Line Art",
    order: 40,
    category: "artistic-embroidery",
  },
  {
    id: 41,
    src: brotherhoodImg,
    alt: "Boné trucker preto com bordado do logotipo Brotherhood: lúpulo estilizado com lettering em estilo gótico, bordado em linha cinza prateada sobre tecido preto",
    title: "Boné Brotherhood",
    order: 41,
    category: "corporate",
  },
  {
    id: 42,
    src: aImg,
    alt: "Suéter infantil vermelho com bordado grande da letra A em ponto cheio amarelo dourado, peça personalizada em estilo colegial clássico",
    title: "Suéter Letra A",
    order: 42,
    category: "custom-clothing",
  },
  {
    id: 43,
    src: natal4Img,
    alt: "Três panos de prato natalinos com bordados de Papai Noel, bota e vela de Natal, acabamento com barrado em tecidos estampados vermelho e verde",
    title: "Panos de Prato Papai Noel",
    order: 43,
    category: "christmas",
  },
  {
    id: 44,
    src: transmegaImg,
    alt: "Jaqueta puffer preta com bordado do logotipo Transmega em laranja: monograma TM com ave estilizada, peça corporativa para empresa de transportes",
    title: "Jaqueta Transmega",
    order: 44,
    category: "corporate",
  },
  {
    id: 45,
    src: aizaBiomedicinaImg,
    alt: "Jaleco branco com bordado do nome 'Aieza Faissane - Biomedicina' em letras verdes, bordado profissional para identificação de profissional de saúde",
    title: "Jaleco Biomedicina",
    order: 45,
    category: "professional-uniforms",
  },
  {
    id: 46,
    src: internationalSchoolImg,
    alt: "Boneco de pelúcia mascote com camiseta azul marinho bordada com logotipo International School: globo terrestre dentro de escudo, uniforme escolar infantil",
    title: "Mascote International School",
    order: 46,
    category: "corporate",
  },
  {
    id: 47,
    src: ursoImg,
    alt: "Conjunto de fralda de boca e paninho de bebê em tecido branco com barrado verde de bolinhas, estampa de bichinhos e acabamento com renda verde água",
    title: "Kit Fralda Bichinhos",
    order: 47,
    category: "baby-layette",
  },
  {
    id: 48,
    src: vidaCapImg,
    alt: "Capa protetora branca para galão de água com bordado do logotipo Vida Cap - Título de Capitalização, acabamento com renda inglesa branca na barra",
    title: "Capa Galão Vida Cap",
    order: 48,
    category: "corporate",
  },
  {
    id: 49,
    src: manuImg,
    alt: "Jovem elegante usando vestido longo em tom lilás/roxo de um ombro só com manga bufante, peça sob medida com acabamento impecável, cenário externo com vegetação",
    title: "Vestido Sob Medida Lilás",
    order: 49,
    category: "custom-clothing",
  },
  {
    id: 50,
    src: saraImg,
    alt: "Criança sorridente vestindo casaco rosa claro com botões de madeira, peça infantil personalizada com acabamento cuidadoso, retrato de cliente satisfeita",
    title: "Casaco Infantil Rosa",
    order: 50,
    category: "custom-clothing",
  },
];
