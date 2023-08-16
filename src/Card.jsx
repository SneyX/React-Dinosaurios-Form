import stylesCard from "./Card.module.css"

export default function Card({userName, dinosaurio}) {
  return (
    <div className={stylesCard.card}>
      <p className={stylesCard.parrafos}>Hola {userName}!</p>
      <p className={stylesCard.parrafos}> Tu dinosaurio favorito es el {dinosaurio}</p>
      <p className={stylesCard.parrafos}> 🦖 Rawrrrrr... 🦖</p>
    </div>
  );
}
