import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./pages/Home.tsx";
import Matches from "./pages/Matches.tsx";
import Live from "./pages/Live.tsx";
import Syllabus from "./pages/Syllabus.tsx";
import Tournament from "./pages/Tournament.tsx";
import { ApolloProvider } from "@apollo/client";
import  { aniListClient, spacexClient } from "./graphql/apolloClient.ts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "matches", element: <Matches /> },
      { path: "live", element: <Live /> },
      { path: "syllabus", element: <Syllabus /> },
      { path: "tournament", element: <Tournament /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <ApolloProvider client={spacexClient}>  
    <ApolloProvider client={aniListClient}> 
      <RouterProvider router={router} />
    </ApolloProvider>
  </ApolloProvider>
</React.StrictMode>
);
