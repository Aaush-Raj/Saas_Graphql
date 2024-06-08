import { useQuery, gql } from "@apollo/client";
import { aniListClient } from "../graphql/apolloClient";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const GET_ANIME_LIST = gql`
  query {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        episodes
        coverImage {
          medium
          large
        }
        status
      }
    }
  }
`;

//this function trims down long anime names
function truncateString(str: string): string {
  if (!str) return "Dummy anime"; // a few data dont have name with them so I am assigning dummy name to them
  if (str.length <= 18) { 
    return str;
  }
  return str.slice(0, 18 - 3) + "...";
}

//this functiuon opens the anime details page in new tab
const handleLinkClick = (url:string) => {
  const imageUrl = url;
  window.open(imageUrl, "_blank");
};

const SkeletonLoading = () => (
  <div>
        <h1 className="text-center text-2xl my-2">Anime List</h1>
  
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex bg-white p-2 rounded-md animate-pulse">
              <div className="w-32 h-32 overflow-hidden rounded-md relative bg-gray-300"></div>
              <div className="px-2">
                <div className="h-5 w-24 bg-gray-300 mb-1 rounded"></div>
                <div className="h-3 w-16 bg-gray-300 mb-1 rounded"></div>
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                <button className="bg-gray-300 rounded-md px-2 mt-10 flex items-center animate-pulse">View Info</button>
              </div>
            </div>
          ))}
        </div>
      </div>
);

const Tournament = () => {
  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    client: aniListClient, // Using the AniList client
  });

  console.log(data);

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error :</p>;

  
  
  return (
    <div>
      <h1 className="text-center text-2xl my-2">Anime List</h1>

      <div className="grid grid-cols-3 gap-2">
        {data.Page.media.map((anime: any) => (
          <div className="flex bg-white p-2 rounded-md" >
            <div className="w-32 h-32 overflow-hidden rounded-md 	 relative">
              <motion.img
              whileHover={{scale:1.2}}
                src={anime.coverImage.large}
                className="w-full h-full rounded-lg absolute bg-cover top-0 right-0   "
                alt="animeImage"
              />
            </div>
            <div className="px-2">
              <h2 className="font-semibold">{truncateString(anime.title.english)}</h2>
              <h2 className="text-sm">Total episodes : <span className="text-xs font-semibold">{anime.episodes}</span> </h2>
              <h2 className="text-sm">Current status : <span className="text-xs font-semibold">{anime.status}</span> </h2>
              <motion.button onClick={()=>handleLinkClick(anime.siteUrl)}  whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="bg-red-400 rounded-md px-2 mt-10 flex items-center">View Info  <FiExternalLink className="ml-2"/></motion.button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
