import React from "react"
import scheduleStyles from './schedule.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const SchedulePage = () => {
    return (
        <Layout>
            <Head title="Schedule" />
            <h1 className={scheduleStyles.header}>Conference Schedule</h1>
            <h2 className={scheduleStyles.date}>July 25, 2022</h2>

            <div className={scheduleStyles.card}>
                <h4>8:00 A.M. - 9:00 A.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2 className={scheduleStyles.talktitle}>Sign-In/ Breakfast/ Opening</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>9:00 A.M. - 9:45 A.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Kelsey Janda</h2>
                <h3 className={scheduleStyles.talktitle}>Learning by Making: happier product team & customers</h3>
            </div>

            <div className={scheduleStyles.card}>
                <h4>9:45 A.M. - 10:00 A.M.</h4>
                <h2>15 Minute Break</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>10:00 A.M. - 10:45 A.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Erica Cuttitta</h2>
                <h3 className={scheduleStyles.talktitle}>Systems, code and APIs…, but first, humans</h3>
            </div>

            <div className={scheduleStyles.card}>
                <h4>10:45 A.M. - 11:00 A.M.</h4>
                <h2>15 Minute Break</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>11:00 A.M. - 11:45 A.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Nate Hales</h2>
                <h3 className={scheduleStyles.talktitle}>Holistic Quality: More Than Just Testing</h3>
            </div>
            <div className={scheduleStyles.card}>
                <h4>11:45 A.M. - 1:00 P.M.</h4>
                <h2>Lunch</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>1:00 P.M. - 1:45 P.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Rhia Dixon</h2>
                <h3 className={scheduleStyles.talktitle}>It's All Relative: The Science of Debugging</h3>
            </div>

            <div className={scheduleStyles.card}>
                <h4>1:45 P.M. - 2:00 P.M.</h4>
                <h2>15 Minute Break</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>2:00 P.M. - 2:45 P.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Eric Gerling</h2>
                <h3 className={scheduleStyles.talktitle}>Lessons Learned from a Lifetime of “No”</h3>
            </div>            
            
            <div className={scheduleStyles.card}>
                <h4>2:45 P.M. - 3:00 P.M.</h4>
                <h2>15 Minute Break</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>3:00 P.M. - 3:45 P.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2>Steve Chikwaya</h2>
                <h3 className={scheduleStyles.talktitle}>The rise of the product minded engineer</h3>
            </div>

            <div className={scheduleStyles.card}>
                <h4>3:45 P.M. - 4:00 P.M.</h4>
                <h2>15 Minute Break</h2>
            </div>

            <div className={scheduleStyles.card}>
                <h4>4:00 P.M. - 4:35 P.M.</h4>
                <hr className={scheduleStyles.divider} />
                <h2 className={scheduleStyles.header}>Rebecca Stavick</h2>
                <h3>The Omaha Tech Community: An Interactive Discussion</h3>
            </div>
            <div className={scheduleStyles.card}>
                <h4>4:35 P.M. - 6:00 P.M.</h4>
                <h2>Happy Hour</h2>
            </div>
            
        </Layout>
    )
}

export default SchedulePage