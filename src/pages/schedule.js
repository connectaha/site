import React from "react"
import scheduleStyles from './schedule.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const SchedulePage = () => {
    return (
        <Layout>
            <Head title="Schedule" />
            <h1>Conference Schedule</h1>
            <h2 className={scheduleStyles.header}>April 9, 2021</h2>

            <h4>10:00 A.M. - 10:05 A.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2 className={scheduleStyles.header}>Welcome/ Introduction</h2>

            <h4>10:05 A.M. - 10:35 A.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2>Hilary Stohs-Krause</h2>
            <h3 className={scheduleStyles.title}>How I got out of my own way and found the happy path in tech</h3>
            <h4>10:40 A.M. - 11:10 A.M.</h4>
            <hr className={scheduleStyles.divider} />

            <h2>Ash Banaszek</h2>
            <h3 className={scheduleStyles.h3}>A designer's guide to development</h3>
            
            <h4>11:15 A.M. - 11:45 A.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2>Shonna Dorsey</h2>
            <h3 className={scheduleStyles.title}>Finding Your Place When You Don’t Know Where You Fit</h3>
            
            <h4>11:50 A.M. - 12:20 P.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2>Amanda Perkins</h2>
            <h3 className={scheduleStyles.title}>Travels through the Looking Glass: My journey from Customer Service rep to SR SQA</h3>
            
            <h4>12:25 P.M. - 12:55 P.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2>Kathy Andersen</h2>
            <h3 className={scheduleStyles.title}>How I Learned to Stop Worrying and Love the Process</h3>
            
            <h4>1:00 P.M. - 1:30 P.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2>Sanjay Batra</h2>
            <h3 className={scheduleStyles.title}></h3>

            <h4>1:30 P.M. - 1:35 P.M.</h4>
            <hr className={scheduleStyles.divider} />
            <h2 className={scheduleStyles.header}>Conclusion</h2>
            
        </Layout>
    )
}

export default SchedulePage