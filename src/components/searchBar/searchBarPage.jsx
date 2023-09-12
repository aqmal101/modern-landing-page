import React, { useState } from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsSearchOpen(false); // Tutup kolom pencarian saat tombol "Enter" ditekan
    }
  };

  return (
    <div className={`flex flex-row items-center ${isSearchOpen ? "open" : ""}`}>
      {isSearchOpen ? (
        <>
          <input
            type="text"
            placeholder="検索する ..."
            _placeholder={{ text: "10px" }}
            className="w-[300px] h-[60px] pl-3 z-10 bg-white rounded-none absolute right-[60px] focus:border-transparent"
            focus={{ borderStyle: "none" }}
            autoFocus
            onKeyPress={handleKeyPress} // Menambahkan penanganan tombol Enter
          />
          <IconButton className="close-button" onClick={toggleSearch}>
            <Icon as={AiOutlineClose} boxSize={25} />
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
