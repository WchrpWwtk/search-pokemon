import { Fragment, useState } from "react";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import NotFound from "../components/NotFound";

const PageSearch: React.FC = () => {
  const [mode, setMode] = useState("");

  const handleSearch = (searchTerm: string) => {
    switch (searchTerm) {
      case "not found": {
        setMode("404");
      }

      case "": {
        setMode("list");
        break;
      }

      default: {
        setMode("");
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

      case "404": {
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
