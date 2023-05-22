import { RecipeCard } from "@/components";
import { createClient } from "contentful";
// interface Client{
//   space:string
//   accessToken:string
// }
interface Props {
  recipes: any;
}
export const getStaticProps = async function () {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process?.env?.CONTENTFUL_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
  };
};

export default function Home({ recipes }: Props) {
  console.log(recipes);

  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {recipes.map((recipe: any) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </main>
  );
}
