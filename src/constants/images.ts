interface Images {
  hero: string;
  workout1: string;
  workout2: string;
  workout3: string;
  trainer1: string;
  trainer2: string;
  trainer3: string;
  logo: string;
  background: string;
  [key: string]: string; // Permite chaves dinâmicas
}

export const IMAGES: Images = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  workout1: 'https://boomi.b-cdn.net/wp-content/uploads/2021/10/10-beneficios-do-treinamento-de-forca.png',
  workout2: 'https://i0.wp.com/saudepersona.com.br/wp-content/uploads/2018/05/Imagem-post-Treinamento-Funcional-Sa%C3%BAde-Persona.png',
  workout3: 'https://img.freepik.com/fotos-premium/mulher-jovem-fitness-fazendo-exercicios-cardio-na-academia-correndo-em-uma-esteira_136403-7861.jpg',
  trainer1: 'https://img.freepik.com/fotos-gratis/homem-sorridente-com-tiro-medio-na-academia_23-2149178038.jpg?t=st=1746504019~exp=1746507619~hmac=9b5c13fe0c641a41478806a12737d14e513002e01d099df59d36fae3dad5e86e&w=996',
  trainer2: 'https://img.freepik.com/fotos-gratis/jovem-mulher-usando-arma-de-mensagem_23-2149516707.jpg?t=st=1746504271~exp=1746507871~hmac=c50c27c004a6bb3f750fb889c58073c17b7514fa54413eee9366c2544fb0933e&w=900',
  trainer3: 'https://img.freepik.com/fotos-premium/instrutor-pessoal-masculino-confiante-positivo-de-sorriso_116407-1256.jpg?w=996',
  logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  background: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
}; 