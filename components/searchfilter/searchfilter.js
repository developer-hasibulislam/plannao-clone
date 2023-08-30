/**
 * Title: Write a program using JavaScript on Search Filter
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 02, August 2023
 */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import OutsideClick from "../shared/outclick";
import Image from "next/image";
import { useRouter } from "next/router";

const SearchFilter = () => {
  const router = useRouter();
  const { academic, professional, jobrelated } = useSelector(
    (state) => state.mentor.mentors
  );
  const mentors = [...academic, ...professional, ...jobrelated];
  const [visible, setVisible] = useState(true);

  const handleChange = (e) => {
    handleInputChange(e);
    setVisible(true);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const highlightMatchedLetters = (text, searchTerm) => {
    const regex = new RegExp(searchTerm, "gi");
    return text.replace(regex, (match) => `<strong>${match}</strong>`);
  };

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setSuggestions(
      mentors.filter((item) => {
        const searchString =
          item.title.toLowerCase() +
          item.about.toLowerCase() +
          item.category.toLowerCase() +
          item.description.purposes.join(" ").toLowerCase() +
          item.description.lecturers.join(" ").toLowerCase() +
          item.description.structures.join(" ").toLowerCase();
        return searchString.includes(value);
      })
    );
  };

  return (
    <div className="relative lg:w-1/3 md:w-1/2 w-full mx-auto">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="🔎 Type here to search..."
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
        className="form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded w-full"
      />
      {visible && searchTerm && suggestions.length > 0 && (
        <OutsideClick onOutsideClick={() => setVisible(false)}>
          <div className="absolute top-full left-0 mt-2 whitespace-pre-wrap bg-white shadow w-full rounded max-h-96 overflow-y-auto p-4 z-50">
            <div className="flex flex-col gap-y-6">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-x-2 cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/category/${item._id}?mentor_title=${item.title
                        .replace(/ /g, "-")
                        .toLowerCase()}`
                    )
                  }
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={96}
                    height={54}
                    className="rounded"
                  />
                  <article className="flex flex-col gap-y-2">
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: highlightMatchedLetters(item.title, searchTerm),
                      }}
                      className="md:text-base text-sm tracking-tight text-gray-900 text-left"
                    />
                    <div className="flex flex-col gap-y-1">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: highlightMatchedLetters(
                            item.about,
                            searchTerm
                          ),
                        }}
                        className="text-left md:text-sm text-xs line-clamp-3"
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: highlightMatchedLetters(
                            item.category,
                            searchTerm
                          ),
                        }}
                        className="md:text-xs text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 w-fit"
                      />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </OutsideClick>
      )}
    </div>
  );
};

export default SearchFilter;
