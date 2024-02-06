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
    switch (mode) {
      case "list": {
        return <div>{"Pokemons List"}</div>;
      }

      case "not found": {
        return <NotFound />;
      }

      default: {
        return <div>{"Waiting for search..."}</div>;
      }
    }
  };

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <Content>{renderContent(mode)}</Content>
    </Fragment>
  );
};

export default PageSearch;
