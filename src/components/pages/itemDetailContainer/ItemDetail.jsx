import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <div className="title-container">{productSelected.title}</div>
      <img className="img-container" src={productSelected.img} alt="" />
      <div className="boton-container">
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};
