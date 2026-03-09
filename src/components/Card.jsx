import { Link } from "react-router-dom";
function Card(props) {
  const { data } = props;

  return (
    <Link
      to={`/product/${data.id}`}
      className=" border border-gray-300  bg-gray-200 group"
    >
      <figure className="p-2 h-[160px] lg:h[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          src={data.image}
          alt={data.title}
        />
      </figure>
      <div className="py-2 px-2">
        <h3 className="line-clamp-2">{data.title}</h3>
        <p className="text-red-400">99.00</p>
      </div>
    </Link>
  );
}

export default Card;
