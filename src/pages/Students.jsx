import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { data } from "../data";
import { useEffect, useState, useRef } from "react"; // Import useRef

export const Students = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataFilter, setDataFilter] = useState(data);
  const [originalData, setOriginalData] = useState(data);
  const [scrollPosition, setScrollPosition] = useState(0); // State for scroll position

  // Reference for the list container
  const listRef = useRef(null);

  const handleSearchStudent = (event) => {
    setSearchValue(event.target.value);
  };

  const handleDeleteStudent = (id) => {
    const deleteStudent = dataFilter.filter((e) => e.id !== id);
    setOriginalData(deleteStudent);
    setDataFilter(deleteStudent);
  };

  useEffect(() => {
    if (searchValue.trim() !== "") {
      const filter = data.filter((e) => e.name.includes(searchValue));
      setDataFilter(filter);
    } else {
      setDataFilter(originalData);
    }
  }, [searchValue, originalData]);

  // Remember scroll position
  const handleScroll = () => {
    setScrollPosition(listRef.current.scrollTop);
  };

  return (
    <>
      <Header />
      <div className="bg-pink-100 h-screen w-full flex items-center justify-center">
        <div className="shadow-2xl p-5 w-full">
          <input
            type="search"
            placeholder="Search student"
            onChange={handleSearchStudent}
            value={searchValue}
            className="p-3 w-96 outline-none border rounded-lg border-gray-400"
          />
          {dataFilter.length === 0 ? (
            <p>Empty</p>
          ) : (
            <div
              className="text-center overflow-y-auto flex flex-col space-y-3 mt-3"
              ref={listRef} // Assign ref to the list container
              onScroll={handleScroll} // Track scroll position
              style={{ maxHeight: "400px" }} // Example height
            >
              {dataFilter.map((e) => (
                <div key={e.id} className="flex border justify-between">
                  <Link
                    className="p-2 rounded-lg border-black"
                    to={`/studentInfo/${e.id}`}
                  >
                    {e.name}
                  </Link>
                  <button onClick={() => handleDeleteStudent(e.id)}>del</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
