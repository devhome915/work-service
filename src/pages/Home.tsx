import CardIndicador from "../components/cardIndicador/CardIndicador";
import { useState } from "react";

type CardInfo = {
  id: number;
  title: string;
  value: number;
};

export default function Home(){
    const [visitas, setVisitas] = useState(240)

     const colTitle: CardInfo[] = [
        { id: 1, title: "Coordenadores", value: 12 },
        { id: 2, title: "Promotores", value: 85 },
        { id: 3, title: "Visitas realizadas", value: visitas },
    ];

    const handleVisitas = (tipo: "add" | "remove") => {
        setVisitas((prev) => {
            if (tipo === "add") {
            return prev + 1;
            }

            return Math.max(0, prev - 1);
        });
    };

    return(

        <main className="container-fluid py-4">
            <h1>Work - Gestão Operacional</h1>
            <p>Dashboard de acompanhamento de visitas e produtividade.</p>

            <div className="row g-3">
                {
                    colTitle.map((colCard) =>(
                        <div className="col-12 col-md-4 p-3" key={colCard.id}>
                            <CardIndicador
                                title={colCard.title}
                                value={colCard.value}
                                onAction={  
                                    colCard.id === 3
                                    ? handleVisitas
                                    : undefined
                                }
                            />
                        </div>
                    ))
                }
            </div>
        </main>
    )
}