import React, { useState } from "react";
// import styles from "./searchBar.module.css";
import { IconButton, Icon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { CloseIcon } from "@chakra-ui/icons";

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div
      className={` flex flex-row items-center ${isSearchOpen ? "open" : ""}`}
    >
      {isSearchOpen ? (
        <>
          <input
            type="text"
            placeholder="type and hit enter to search ..."
            _placeholder={{ text: "10px" }}
            className="w-[300px] h-[60px] pl-3 z-10 rounded-none absolute right-[50px] focus:border-transparent"
            focus={{ borderStyle: "none" }}
            autoFocus
          />
          <IconButton className="close-button" onClick={toggleSearch}>
            <Icon as={CloseIcon} />
          </IconButton>
        </>
      ) : (
        <IconButton className="open-button" onClick={toggleSearch}>
          <Icon as={BiSearch} boxSize={25} />
        </IconButton>
      )}
    </div>
  );
}

export default SearchBar;
