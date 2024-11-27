import "../Card/card.css";
import { IoLocationSharp } from "react-icons/io5";
import ParedePintada from "../../images/image-painter.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../Context/UserContext";

export function Card({ id_servicos, titulo, descricao, cidadeServico, imagemCaminho, preco }) {

    // titulo, descricao, preco, cidadeServico, imagem 
    const navigate = useNavigate();
    const {isLoggedIn} = useUserContext();

    const [post, setPost] = useState(null);
    //const [imageUrl, setImageUrl] = useState(null);
    const imageUrl = `http://localhost:8080${imagemCaminho.replace(/\\/g, "/")}`;

    /*
    useEffect(() => {
        // Busca o post pelo ID
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:8080/post/${id_servicos}`, {
                    method: "GET", // Método explícito
                });
                if (response.ok){
                const data = await response.json();

                setPost(data);
                
                // Gera a URL da imagem, se disponível
                if (data.imagemCaminho) {
                    setImageUrl(`http://localhost:8080/uploads/${data.imagemCaminho}`);
                }
            } else {
                console.log(response);
                console.log(await response.json());
            }
            } catch (error) {
                console.error("Erro ao buscar post:", error);
            }
        };

        fetchPost();
    }, [id_servicos]);
*/
    return (

        <div className="Publicacao">
            
                
            <div className="ParedeImg">
                <Link to={{
                    pathname: "/InfoService",
                  //  state: { titulo, descricao, preco, cidadeServico, imagem }
                }}><img src={imageUrl} alt="" /></Link>
            </div>
            <h2>{titulo}</h2>
            <div className="TrabalhosPost">
                <h6>{descricao}</h6>
            </div>
            <h5>{preco}</h5>
            <div className="LocalizacaoPost">
                <IoLocationSharp />
                <h5>{cidadeServico}</h5>
           </div>
           
            
        </div>
    )
}

