import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArtworkList } from "./artwork/ArtworkList";
import { ArtworkCreate } from "./artwork/ArtworkCreate";
import { ArtworkEdit } from "./artwork/ArtworkEdit";
import { ArtworkShow } from "./artwork/ArtworkShow";
import { ArtistProfileList } from "./artistProfile/ArtistProfileList";
import { ArtistProfileCreate } from "./artistProfile/ArtistProfileCreate";
import { ArtistProfileEdit } from "./artistProfile/ArtistProfileEdit";
import { ArtistProfileShow } from "./artistProfile/ArtistProfileShow";
import { ArtCategoryList } from "./artCategory/ArtCategoryList";
import { ArtCategoryCreate } from "./artCategory/ArtCategoryCreate";
import { ArtCategoryEdit } from "./artCategory/ArtCategoryEdit";
import { ArtCategoryShow } from "./artCategory/ArtCategoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ArtMarketplace"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Artwork"
          list={ArtworkList}
          edit={ArtworkEdit}
          create={ArtworkCreate}
          show={ArtworkShow}
        />
        <Resource
          name="ArtistProfile"
          list={ArtistProfileList}
          edit={ArtistProfileEdit}
          create={ArtistProfileCreate}
          show={ArtistProfileShow}
        />
        <Resource
          name="ArtCategory"
          list={ArtCategoryList}
          edit={ArtCategoryEdit}
          create={ArtCategoryCreate}
          show={ArtCategoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
