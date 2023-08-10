import ImgPost1 from "../../assets/imagePost.png"
import ImgPost2 from "../../assets/imagePost2.png"
import User1 from "../../assets/imageUser.png"
import User2 from "../../assets/imageUser2.png"

const News = {
    card1 : {
        newsId: 1,
        userImage: User1,
        userName : "Pró-Reitoria da Graduação",
        checked : true,
        category: "Graduação",
        time : "4H",
        imagePost: ImgPost1,
        resumeText: "A Pró-Reitoria de Graduação (PR-1) determina a suspensão das atividades acadêmicas, nos dias 12 e 13 de dezembro de 2022, no Campus",
        supplementaryText: "Cidade Universitária (Ilha do Fundão), em razão da interrupção do fornecimento de água tratada em partes da Zona Norte do Rio de Janeiro para reparo de vazamento na Subadutora da Maré.",
        like: true,
        amountOfLikes: "18K"
    },
    card2 : {
        newsId: 2,
        userImage: User2,
        userName : "CaINFO",
        checked : true,
        category: "Centro Acadêmico",
        time : "6H",
        imagePost: ImgPost2,
        resumeText: "Em decorrência do forte impacto pela falta de repasse financeiro do governo federal",
        supplementaryText: "Cidade Universitária (Ilha do Fundão), em razão da interrupção do fornecimento de água tratada em partes da Zona Norte do Rio de Janeiro para reparo de vazamento na Subadutora da Maré.",
        like: false,
        amountOfLikes: "10K"
    }
}

export default News;
   