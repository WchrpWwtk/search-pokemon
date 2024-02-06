import { Fragment, useState } from "react";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import NotFound from "../components/NotFound";

const PageSearch: React.FC = () => {
  const [mode, setMode] = useState("list");

  const handleSearch = (searchTerm: string) => {
    switch (searchTerm) {
      case "not found": {
        setMode("not found");
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
