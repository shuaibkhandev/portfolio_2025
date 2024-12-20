// searchParams.js
export const genNewSearchParamsStr = (key, value, searchParams) => {
  console.log("Search Params:", searchParams);
  
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  };
  