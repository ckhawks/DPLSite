import MainLayout from 'src/layouts/MainLayout'

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <h1>Due Process League</h1>
        <p>
          Due Process League (aka DPL) is a community run, developer supported
          league made to promote and organize competitive play within the game
          Due Process. We are here to play the game in a competitive but fun
          setting while promoting a positive attitude and limiting toxicity.{' '}
        </p>
        <p>
          Due Process League is not affiliated with the developers of Due
          Process, Giant Enemy Crab, and you should direct all comments,
          questions, and concerns to the DPL Discord server and its staff
          (linked below), instead of the developers.{' '}
        </p>
        <h2>How can I watch?</h2>
        <p>
          Our fans are just as important as our players. Every DPL match is
          currently live streamed on steam and is professionally casted. You
          will be notified when a match is about to start and a link to the
          stream will be posted in #stream-chat. The schedule for these matches
          will be posted each week in #announcements (the link to the stream may
          be different each week depending on who is casting so be sure to
          check).
        </p>
        <h2>How can I play?</h2>
        <p>
          Right now, we are nearing the end of our first season. Team signups
          for season 2 will sometime in April, after the conclusion of the first
          season. Join the discord, and be on the look out for the announcement.
        </p>
      </MainLayout>
    </>
  )
}

export default AboutPage
