import NavChat from "@/components/NavChat"; 
import ChatBox from "@/components/ChatBox"
export default function chat(){
    return(
        <>
            <div style={{display: "flex"}}>
                <NavChat /> 
                <ChatBox />
            </div>
        </>
    )
}