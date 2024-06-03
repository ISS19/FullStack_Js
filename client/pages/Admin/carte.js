import LeftBox from "@/components/LeftBox.jsx";
import RightBox from "@/components/RightBox.jsx";
import HeaderAdmin from "../../components/HeaderAdmin.jsx";
import CarteComponents from "@/components/Map";
import { useEffect } from "react";
export default function Carte() {

    useEffect(() => {
        const userSessionId = localStorage.getItem('user-session-id');
        if (!userSessionId) {
            // Rediriger vers la page de login si le user-session-id n'existe pas
            window.location.href = '/login';
        }
    })

    return (
        <>
            <HeaderAdmin />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftBox>
                    <CarteComponents />
                </LeftBox>
                <RightBox>
                    <img src="/assets/img/closLogo.jpg" alt="" style={{width: "400px", height:"400px", margin: "5%", marginTop:"80px"}}/>
                </RightBox>
            </div>
        </>
    )
}