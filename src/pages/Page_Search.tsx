import { Fragment } from "react";
import SearchBar from "../components/SearchBar";

import { search } from "@/utils/search";
import { useRouter } from "next/navigation";

const PageSearch: React.FC = () => {
  const router = useRouter();

  const handleSearch = (searchTerm: string) => {
    return router.push(`/${search(searchTerm)}`);
  };

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
    </Fragment>
  );
};

export default PageSearch;
