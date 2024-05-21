import useSWR from "swr";
import NepaliDate from "nepali-date-converter";

// Function to fetch API data using SWR
export default function getAPIData(url) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
  };
}

// Function to get the current Nepali date
export function getNepaliCurrentDate() {
  const currentDate = new Date();
  const currentNepaliDate = new NepaliDate(currentDate).format(
    "DD MMMM YYYY, ddd",
    "np"
  );
  return currentNepaliDate;
}
