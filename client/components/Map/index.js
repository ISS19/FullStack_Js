import dynamic from "next/dynamic";

const CarteComponents = dynamic( () => import ("./CarteComponents"), {
    ssr: false
})

export  default CarteComponents;