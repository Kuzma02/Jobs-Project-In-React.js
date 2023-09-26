import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading === true && "Loading..."}
      {isLoading === false && (
        <section className="jobs-center">
          <BtnContainer currentItem={currentItem} setCurrentItem={setCurrentItem} jobs={jobs} setJobs={setJobs} />

          <JobInfo
            currentItem={currentItem}
            key={jobs[currentItem].id}
            job={jobs[currentItem]}
          />
        </section>
      )}
    </>
  );
};
export default App;
