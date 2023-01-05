
import Presentation from "../components/presentation"
import styled from "styled-components"
import CategoryFood from "../components/categoryFood"

const ContentButtons = styled.div` 
    display: flex ;
    flex-flow: wrap ;
    justify-content: space-around;
    margin-top: 5%;
    
`

const MainView = () => {
    return (

        <div>
            <Presentation/>
        
            <ContentButtons>
                <CategoryFood cate={"HAMBURGUESAS"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"}/>
                <CategoryFood cate={"QUESADILLAS"} url={"https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas-900x570.jpg"}/>
                <CategoryFood cate={"NACHOS"} url={"https://iambaker.net/wp-content/uploads/2019/07/chili-cheese-nacho-final.jpg"}/>
                <CategoryFood cate={"SANDWICH"} url={"https://imag.bonviveur.com/sandwich-vegetal-con-atun-y-mayonesa_1000.webp"}/>
                <CategoryFood cate={"PATACONES"} url={"https://gustmas.com/wp-content/uploads/2018/10/receta-patacones-peruanos-crocantes.jpg"}/>
                <CategoryFood cate={"ALITAS"} url={"https://images.hola.com/imagenes/cocina/recetas/20200205159814/alitas-de-pollo-a-la-americana-buffalo-wings/0-778-671/aitas-de-pollo-a-la-americana-o-buffalo-wings-t.jpg?tx=w_1200"}/>
                <CategoryFood cate={"CARNES"} url={"https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/asado-perfecto-1.jpg?v=1574172033"}/>
                <CategoryFood cate={"TACOS"} url={"https://easyrecetas.com/wp-content/uploads/2020/07/Receta-de-Tacos-de-Res.jpg"}/>
                <CategoryFood cate={"PLATOS MIXTOS"} url={"https://ep01.epimg.net/elcomidista/imagenes/2022/10/31/articulo/1667206537_604382_1667230832_noticia_normal_recorte1.jpg"}/>
                <CategoryFood cate={"EXTRAS"} url={"https://ep01.epimg.net/elcomidista/imagenes/2022/10/31/articulo/1667206537_604382_1667230832_noticia_normal_recorte1.jpg"}/>



            </ContentButtons>
        
        </div>
    )
}

export default MainView