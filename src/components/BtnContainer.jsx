import React from 'react'

const BtnContainer = ({ currentItem, setCurrentItem, jobs, setJobs }) => {
  const jobCompanies = jobs.map(job => job.company);
  const uniqueCompanies = new Set(jobCompanies);
  const uniqueCompaniesArray = [...uniqueCompanies];
  return (
    <div class="btn-container">
      { uniqueCompaniesArray.map((company, idx) => (
        <button class={currentItem === idx ? "job-btn active-btn" : "job-btn"} onClick={() => setCurrentItem(idx)}>{ company }</button>
      )) }
  </div>
  )
}

export default BtnContainer