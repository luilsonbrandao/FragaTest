import { get } from "http";

type TemperosType = 'Temperos Regionais' | 'Especiarias do Mundo' | 'Ervas e Temperos Funcionais';

type Temperos = {
    type: TemperosType;
    nome: string;
    imagem: string;
    origem: string;
    descricao: string;
    beneficios: string;
    uso: string;
};
//Array de temperos
const data: Temperos[] = [
    {
        type: "Temperos Regionais",
        nome: "Jambu",
        imagem: "jambu.JPG",
        origem: "Norte do Brasil",
        descricao: "O Jambu é uma planta típica da região Norte do Brasil, muito utilizada na culinária amazônica. Conhecida por causar uma sensação de dormência na boca, é um ingrediente essencial em pratos como o tacacá e o pato no tucupi.",
        beneficios: "O Jambu possui propriedades anestésicas e anti-inflamatórias, sendo utilizado não só na culinária, mas também em medicamentos naturais para aliviar dores de dente e inflamações.",
        uso: "O Jambu é tradicionalmente usado em caldos, sopas e receitas típicas da Amazônia. Além disso, suas flores e folhas são apreciadas em saladas, molhos e até em bebidas.",
    },
    {
        type: "Especiarias do Mundo",
        nome: "Canela",
        imagem: "canela.webp",
        origem: "Sri Lanka",
        descricao: "A canela é uma especiaria muito popular em todo o mundo, conhecida pelo seu sabor doce e aroma marcante. Ela é obtida da casca interna de uma árvore chamada caneleira, e pode ser utilizada em pó ou em pau.",
        beneficios: "A canela é rica em antioxidantes e possui propriedades anti-inflamatórias, antibacterianas e antifúngicas. Ela pode ajudar a reduzir o açúcar no sangue, melhorar a sensibilidade à insulina e reduzir o colesterol LDL.",
        uso: "A canela é muito versátil e pode ser utilizada em diversas preparações, tanto doces quanto salgadas. Ela combina muito bem com frutas, bolos, biscoitos, pães, carnes, molhos e bebidas quentes, como chás.",
    },     
    {   
        type: "Ervas e Temperos Funcionais",
        nome: "Pimenta-do-reino",
        imagem: "pimenta_do_reino.webp",
        origem: "Índia",
        descricao: "A pimenta-do-reino é uma das especiarias mais utilizadas em todo o mundo, conhecida pelo seu sabor picante e aroma marcante. Ela é obtida dos frutos da pimenteira, que são colhidos verdes e secos para a obtenção dos grãos.",
        beneficios: "A pimenta-do-reino é rica em antioxidantes e possui propriedades anti-inflamatórias, antibacterianas e digestivas. Ela pode ajudar a melhorar a digestão, estimular o metabolismo e reduzir a formação de gases.",
        uso: "A pimenta-do-reino é muito versátil e pode ser utilizada em diversas preparações, tanto doces quanto salgadas. Ela combina muito bem com carnes, aves, peixes, legumes, sopas, molhos, marinadas e conservas.",
    },
    ];

export const Temperos = {
    //seleciona todos os temperos
    getAll: (): Temperos[] => {
        return data;
    },

    //filtrar por categoria
    getFromType: (type: TemperosType): Temperos[] => {
        return data.filter(item => item.type === type);
    },

    //filtrar por nome
    getFromName: (nome: string): Temperos[] => {
        return data.filter(item => 
            item.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1
        );
    },
};