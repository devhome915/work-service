import "./CardIndicador.css";

import Button from "../button/Button";

type CardIndicadorProps = {
  title: string;
  value: number;
  onAction?: (tipo: "add" | "remove") => void;
};

type ButtonTypeProps = {
  keyButton: number;
  propButton: string;
  title: string;
};

export default function CardIndicador({ title, onAction, value }: CardIndicadorProps) {
  const buttonQnt: ButtonTypeProps[] = [
    {
      keyButton: 1,
      propButton: "btn-primary",
      title: "adicionar visitas",
    },
    {
      keyButton: 2,
      propButton: "btn-danger",
      title: "remover visitas",
    },
  ];

  
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">{value}</div>
      <div className="card-footer">
        <small className="text-muted">Indicador operacional</small>
        {
            onAction && (
                <div className="row">
                    {buttonQnt.map((button) => (
                        <div className="col-md-6 col-12" key={button.keyButton}>
                        <Button
                            colorClass={button.propButton}
                            onClick={() => onAction?.(button.keyButton === 1 ? "add" : "remove")}
                        >
                            {button.title}
                        </Button>
                        </div>
                    ))}
                </div>
            )
        }
        
      </div>
    </div>
  );
}