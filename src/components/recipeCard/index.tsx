import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }: any) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className="-rotate-1 hover:rotate-0 transition-all">
      <div>
        <Image
          className="h-96 object-cover"
          src={"https:" + thumbnail.fields.file.url}
          alt="food"
          width={800}
          height={300}
        />
      </div>
      <div className="bg-white rounded-md overflow-hidden relative bottom-[40px] right-[10px]">
        <div className="p-4">
          <h4 className="text-2xl font-semibold mx-1 uppercase"> {title} </h4>
          <p className="text-[#777] m-0">
            {" "}
            takes approx {cookingTime} mins to make
          </p>
        </div>
        <div className="mt-[20px] flex justify-end">
          <Link
            className="text-white bg-red-600 px-5 py-4"
            href={"/recipes/" + slug}
          >
            Cook This
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
