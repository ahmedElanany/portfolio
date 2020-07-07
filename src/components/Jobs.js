import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const {allStrapiJobs:{nodes:jobs}} = data

  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
     <section className='section jobs'>
    <Title title='expierence'/>
    <div className='jobs-center'>
      {/* btn container */}
      <div className='btn-container'>
        {jobs.map((job, index) => {
          return <button key={job.strapiId}
          onClick={() => setValue(index)} 
          className={`job-btn ${index === value && "active-btn"}`}
          >
            {job.company}
          </button>
        })}
      </div>
      {/* job info */}
      <article className='job-info'>
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{date}>
          {desc.map((item) => {
            return (
               <div key={item.id} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
            )
          })}
        </p>
      </article>
    </div>
    <Link to='/about' className='btn center-btn'>
      more info
    </Link>
  </section>
  )
}

export default Jobs
