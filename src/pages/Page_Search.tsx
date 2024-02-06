import { Fragment, useState } from "react";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import NotFound from "../components/NotFound";

import { search } from "@/utils/search";

const PageSearch: React.FC = () => {
  const [mode, setMode] = useState("list");

  const handleSearch = (searchTerm: string) => {
    switch (search(searchTerm)) {
      case "": {
        setMode("list");
        break;
      }
      case "detail": {
        setMode("detail");
        break;
      }
      default: {
        setMode("not found");
      }
    }
  };

  const renderContent = (mode: string) => {
    let component = <></>;
    switch (mode) {
      case "list": {
        component = <div>{"Pokemons List"}</div>;
        break;
      }

      case "not found": {
        component = <NotFound />;
        break;
      }

      default: {
        component = <div>{"Waiting for search..."}</div>;
      }
    }

    return component;
  };

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <Content>{renderContent(mode)}</Content>
    </Fragment>
  );
};

export default PageSearch;
