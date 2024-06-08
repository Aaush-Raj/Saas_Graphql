import { useQuery, gql } from "@apollo/client";
import { spacexClient } from "../graphql/apolloClient";

const GET_LAUNCHES= gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_year
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

const SkeletonLoading = () => (
  <div className="">
    <h1 className="text-center text-2xl my-2">SpaceX Launches</h1>

    <div className="grid gap-2 grid-cols-3">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="shadow-lg bg-white p-2 rounded-lg animate-pulse"
        >
          <div className="w-full h-10 bg-gray-500 p-2 rounded-3xl flex justify-between font-semibold"></div>
          <div className="flex flex-col space-y-1 pt-2">
            <div className="w-full h-4 bg-gray-400 rounded"></div>
            <div className="w-full h-4 bg-gray-400 rounded"></div>
          </div>
          <div className="flex justify-between pt-2">
            <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Matches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    client: spacexClient, // Use the AniList client
  });

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <h1 className="text-center text-2xl my-2">SpaceX Launches</h1>
      <div className="grid gap-2 grid-cols-3">
        {data?.launchesPast.map((rocket: any, index: number) => (
          <div key={index} className="shadow-lg bg-white p-2 rounded-lg">
            <div className="w-full bg-blue-300 p-2 rounded-3xl flex justify-between font-semibold">
              <p>{rocket.mission_name}</p>
              <p>{rocket.launch_year}</p>
            </div>
            <div className="">
              <h2>
                Rocket name:{" "}
                <span className="font-semibold text-primary-color">
                  {rocket.rocket.rocket_name}
                </span>
              </h2>
              <h2>
                Launch Data:{" "}
                <span className="text-sm text-primary-color">
                  {rocket.launch_date_local}
                </span>
              </h2>
            </div>
            <div className="flex justify-between pt-2 ">
              <a
                className="px-2 bg-gray-200 font-semibold rounded-md "
                href={rocket.links?.article_link}
              >
                Article
              </a>
              <a
                className="px-2 bg-gray-200 font-semibold rounded-md "
                href={rocket.links?.video_link}
              >
                Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
