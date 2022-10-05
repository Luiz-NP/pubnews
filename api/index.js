const express = require("express");
const api = express();
const PORT = 3333;
const cors = require("cors");
const keep_alive = require('./keep_alive.js')

api.use(cors());

const data = [
  {
    id: 1,
    pubName: "Toca Do Espeto",
    pubid: "tocadoespeto",
    pubimage: "https://i.postimg.cc/9MyhjT6Y/42204403-1957094021261824-1068907258487767040-n.jpg",
    pubOptions: "Refeição no local · Retirada na porta · Entrega sem contato",
    pubDesc: "Boemia com cozinha do dia a dia no fogão a lenha com carnes na brasa e descontração intimista em sacada.",
    homeImage: "https://scontent.fuba1-1.fna.fbcdn.net/v/t39.30808-6/286676188_4782343321869943_7431593834216366889_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=e0RQELDJQ5EAX9INTFv&_nc_ht=scontent.fuba1-1.fna&oh=00_AT_n2Yp6xGl9gGB15l3glFQGuVQmfesHnMXqR2kfvgsxjw&oe=633BE593https://scontent.fuba1-1.fna.fbcdn.net/v/t39.30808-6/286676188_4782343321869943_7431593834216366889_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=e0RQELDJQ5EAX9INTFv&_nc_ht=scontent.fuba1-1.fna&oh=00_AT_n2Yp6xGl9gGB15l3glFQGuVQmfesHnMXqR2kfvgsxjw&oe=633BE593",
    address: {
      number: 1068,
      street: "Avenida José Valim de Melo",
      district: "Parque Das Gameleiras",
      city: "Uberaba"
    },
    title: "Evento de Caridade",
    date: "31 de Setembro",
    hour: "20:00",
    price: "0,00",
    eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebhVibX0c3hrEKRpoa9b_tbewkFG6QO5QZA&usqp=CAU",
    description: "Como forma de inauguração, para começar com o pé esquerdo, o nosso bar estará promovendo um evento de caridade para está ajudando o hospital do câncer de Uberaba, nos estamos convidando todos de criança ate idoso para conhecer o nosso bar e nosso cardápio que terá uma variação de menu. Com a arrecadação do dia, 50% irá para o hospital do câncer de Uberaba. Nossos planos é poder manter essa estratégia para poder incentivar cada vez mais os moradores a ajudar os mais carentes como doar dinheiro, roupa, comida, ou mesmo sangue. O evento contara com projeto ao cubo e a dupla sara e Emanuel tocando para movimentar o esqueleto dos uberabenses.",
    author: "Barbara"
  },
  {
    id: 2,
    pubName: "Bar Do Geremia",
    pubid: "bardogeremia",
    pubimage: "https://i.postimg.cc/GpWCNz5p/277677852-3263891983894930-6285421771025768419-n.jpg",
    pubOptions: "Refeição no local · Retirada na porta · Entrega sem contato",
    pubDesc: "Choperia intimista e casual tem mesas na calçada sob cobertura e petiscos mistos com especialidades da casa.",
    homeImage: "https://lh5.googleusercontent.com/p/AF1QipP5ahpdT4Ce0yfdOL5JiQkxexEBKsmLWHePt0ph=s870-k-no",
    address: {
      number: 271,
      street: "Rua Olegário Maciel",
      district: "Centro",
      city: "Uberaba"
    },
    title: "Festa de Fim de Ano",
    date: "31 de Dezembro",
    hour: "20:00",
    price: "159,00",
    eventImage: "https://lh5.googleusercontent.com/p/AF1QipP8z7aQULb-FEKtgRc08d5CYsoxnUqHmrSq8l9S=s946-k-no",
    description: "Eita gente, mas um ano se encerrando e muita coisa aconteceu, né?. Que tal comemorar esse encerramento de mais um ciclo no nosso bar? A top bar estará preparada para receber todo mundo que quiser comemorar o final de ano, com um cardápio típico de fim de ano e champanhe para estourar quando os fogos começarem, com muita musica para encerrar esse ano que passou com estilo. Eita gente, mas um ano se encerrando e muita coisa aconteceu, né?. Que tal comemorar esse encerramento de mais um ciclo no nosso bar? A top bar estará preparada para receber todo mundo que quiser comemorar o final de ano, com um cardápio típico de fim de ano e champanhe para estourar quando os fogos começarem, com muita musica para encerrar esse ano que passou com estilo.",
    author: "Barbara"
  },
  {
    id: 3,
    pubName: "Choperia Colorado",
    pubid: "choperiacolorado",
    pubimage: "https://choperiacolorado.com.br/wp-content/uploads/2021/11/r2_c1.jpg",
    pubOptions: "Refeição no local · Para viagem · Entrega sem contato",
    pubDesc: "Chopes e petiscos, além de feijoada, em espaço informal com área externa, música ao vivo e parquinho infantil.",
    homeImage: "https://fastly.4sqi.net/img/general/600x600/yCZm-EyXSBp_kAGXGX-OpOWhvXNjWWHCFvqr2-JDdcc.jpg",
    address: {
      number: 1029,
      street: "Rua Bento Ferreira",
      district: "Mercês",
      city: "Uberaba"
    },
    title: "Noites de Karaoke",
    date: "24 de Outubro",
    hour: "20:00",
    price: "59,90",
    eventImage: "https://choperiacolorado.com.br/wp-content/uploads/2021/09/colorado-img-33.jpg",
    description: "Bom, acho que algumas pessoas vão querer o tampão de ouvido mas o nosso bar estará promovendo um evento mais tranquilo, para família e amigos que queira soltar a voz e mostrar que sabe cantar e também para se divertir. E também estaremos promovendo um campeonato, a dupla ou a pessoa que for cantar solo conseguir cantar a música mais difícil ou com uma voz lindamente irá ganhar dois prêmio. Um de R$ 1200 e um vale para a dupla ou a pessoa solo ganhara para comer o que quiser por um mês.Vem com a gente!",
    author: "Barbara"
  },
    {
    id: 4,
    pubName: "Bar Do Geremia",
    pubid: "bardogeremia",
    pubimage: "https://i.postimg.cc/GpWCNz5p/277677852-3263891983894930-6285421771025768419-n.jpg",
    pubOptions: "Refeição no local · Retirada na porta · Entrega sem contato",
    pubDesc: "Choperia intimista e casual tem mesas na calçada sob cobertura e petiscos mistos com especialidades da casa.",
    homeImage: "https://lh5.googleusercontent.com/p/AF1QipP5ahpdT4Ce0yfdOL5JiQkxexEBKsmLWHePt0ph=s870-k-no",
    address: {
      number: 271,
      street: "Rua Olegário Maciel",
      district: "Centro",
      city: "Uberaba"
    },
    title: "Festa de Fim de Ano",
    date: "31 de Dezembro",
    hour: "20:00",
    price: "159,00",
    eventImage: "https://lh5.googleusercontent.com/p/AF1QipP8z7aQULb-FEKtgRc08d5CYsoxnUqHmrSq8l9S=s946-k-no",
    description: "Eita gente, mas um ano se encerrando e muita coisa aconteceu, né?. Que tal comemorar esse encerramento de mais um ciclo no nosso bar? A top bar estará preparada para receber todo mundo que quiser comemorar o final de ano, com um cardápio típico de fim de ano e champanhe para estourar quando os fogos começarem, com muita musica para encerrar esse ano que passou com estilo. Eita gente, mas um ano se encerrando e muita coisa aconteceu, né?. Que tal comemorar esse encerramento de mais um ciclo no nosso bar? A top bar estará preparada para receber todo mundo que quiser comemorar o final de ano, com um cardápio típico de fim de ano e champanhe para estourar quando os fogos começarem, com muita musica para encerrar esse ano que passou com estilo.",
    author: "Barbara"
  },
];

api.get("/", (req, res) => {
  res.status(200).json(data);
});

api.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
