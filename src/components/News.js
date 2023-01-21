import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Ukraine war: Deadly explosions hit Kyiv on New Year's Eve - BBC",
      "description": "Kyiv Mayor Vitaly Klitschko says there is damage in several districts of the city and one person has died.",
      "url": "https://www.bbc.com/news/world-europe-64135079",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11860/production/_128167717_081299051-1.jpg",
      "publishedAt": "2022-12-31T16:17:17Z",
      "content": "A wave of Russian missiles have hit cities across Ukraine, officials say.\r\nKyiv Mayor Vitaly Klitschko said there had been several blasts in the capital, causing at least one death. A hotel has also … [+2609 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Elizabeth Wolfe, John Miller",
      "title": "Authorities tracked the Idaho student killings suspect as he drove cross-country to Pennsylvania, sources say - CNN",
      "description": "Authorities carefully tracked the man charged in the killings of four Idaho college students as he drove across the country around Christmas and continued surveilling him for several days before finally arresting him Friday, sources tell CNN.",
      "url": "https://www.cnn.com/2022/12/31/us/bryan-kohberger-university-of-idaho-killings-suspect-saturday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221230185217-pennsylvania-home-idaho-murder-suspect-lived-in.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-12-31T16:10:00Z",
      "content": "Authorities carefully tracked the man charged in the killings of four Idaho college students as he drove across the country around Christmas and continued surveilling him for several days before fina… [+5324 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Jon Levine",
      "title": "NY Rep.-elect George Santos faces questions over federal filings - New York Post ",
      "description": "Rep-Elect George Santos’ campaign told The Post that misrepresentations on his Federal Election Commission forms were the result of a “database error.”",
      "url": "https://nypost.com/2022/12/31/ny-rep-elect-george-santos-faces-federal-filings-questions/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/12/santos-fec-02.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-12-31T15:13:00Z",
      "content": "Some federal insiders don’t buy embattled Rep.-elect George Santos’ excuse that dozens of strange $199.99 campaign expenses he filed were the result of a “database” error.\r\nThe newly-elected Long Isl… [+3442 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Robert Lea",
      "title": "Juno spacecraft recovering its memory after mind-blowing Jupiter flyby, NASA says - Space.com",
      "description": "NASA's Juno spacecraft is recovering its memory after a download disruption following its December flyby of Jupiter.",
      "url": "https://www.space.com/juno-spacecraft-memory-recovery-jupiter-flyby",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/BeyhPdFDZrvnvWmmwaANSB-1200-80.jpg",
      "publishedAt": "2022-12-31T14:07:43Z",
      "content": "NASA's Juno probe is continuing to recover its memory at Jupiter after a data disruption interrupted communications between the spacecraft and its operators on Earth following a flyby of the giant pl… [+2860 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Kyle Morris",
      "title": "'PARTING SHOTS': Dems blasted for attempt to score last-minute 'cheap political points' with Trump taxes - Fox News",
      "description": "Democrats and the Biden administration offered last minute jabs at Republicans in the days leading up to the new Congress, and strategists suggest it was all for \"cheap political points.\"",
      "url": "https://www.foxnews.com/politics/parting-shots-dems-blasted-attempt-score-last-minute-cheap-political-points-trump-taxes",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/GettyImages-1431837019.jpg",
      "publishedAt": "2022-12-31T13:00:06Z",
      "content": "One-party control in the nation's capital will come to an end next week as Democrats are forced to relinquish control of the House to Republicans, but that didn't prevent Democrats and President Bide… [+8012 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "College football predictions, odds: Expert picks for Georgia vs. Ohio State and Michigan vs. TCU bowl games - CBS Sports",
      "description": "Your betting guide for the 2022 College Football Playoff semifinals at the Peach Bowl and Fiesta Bowl",
      "url": "https://www.cbssports.com/college-football/news/college-football-predictions-odds-expert-picks-for-georgia-vs-ohio-state-and-michigan-vs-tcu-bowl-games/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/04/fb292336-9139-435e-b028-8086d169a8f4/thumbnail/1200x675/718e2690866160481c0128df42f5c568/graphic-cfp2022.jpg",
      "publishedAt": "2022-12-31T13:00:00Z",
      "content": "The College Football Playoff is upon us. After months of speculation about who would end up in college football's final four -- and another month of trying to figure out what will happen once the act… [+5431 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eleven Warriors"
      },
      "author": null,
      "title": "Last Call: Final Thoughts, Questions and Players to Watch Entering Ohio State's Peach Bowl Matchup With Georgi - Eleven Warriors",
      "description": "We share our final thoughts, questions and players to watch entering the College Football Playoff matchup between Ohio State and Georgia in the Peach Bowl.",
      "url": "https://www.elevenwarriors.com/ohio-state-football/2022-peach-bowl/2022/12/136449/last-call-final-thoughts-questions-and-players-to-watch-entering-ohio-states-peach-bowl-matchup",
      "urlToImage": "https://www.elevenwarriors.com/sites/default/files/styles/904x490/public/c/2022/12/136449_h_0.jpg?itok=164kSQ4t",
      "publishedAt": "2022-12-31T12:30:00Z",
      "content": "After a month of waiting, the Peach Bowl is finally here. \r\nOhio State and Georgias national championship hopes will be on the line when the Buckeyes meet the Bulldogs at 8 p.m. tonight in a College … [+8477 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ESPN"
      },
      "author": "Mark Ogden",
      "title": "Ten Hag drops Rashford to bench for 'disciplinary' reasons - ESPN",
      "description": "Marcus Rashford has been dropped to bench for Manchester United for their game against Wolves for unspecified \"internal disciplinary\" reasons.",
      "url": "https://www.espn.com/soccer/manchester-united-engman_utd/story/4841335/man-uniteds-marcus-rashford-dropped-to-bench-vs-wolves-for-disciplinary-reasons-erik-ten-hag",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1231%2Fr1112250_1296x729_16%2D9.jpg",
      "publishedAt": "2022-12-31T12:21:43Z",
      "content": "Marcus Rashford will start on the bench for Manchester United against Wolves on Saturday. Ash Donelon/Manchester United via Getty Images\r\nMarcus Rashford has been dropped from the Manchester United s… [+1477 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Brazil: President leaves country avoiding inauguration of Prez-elect, flies to Florida | WION - WION",
      "description": "Less than two days before his bitter leftist challenger Luiz Inacio Lula da Silva is expected to enter office, outgoing Brazilian President Jair Bolsonaro fl...",
      "url": "https://www.youtube.com/watch?v=2kHcBD1CS98",
      "urlToImage": "https://i.ytimg.com/vi/2kHcBD1CS98/maxresdefault.jpg",
      "publishedAt": "2022-12-31T12:14:46Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": null,
      "title": "Mega Millions drawing produces no winner, jackpot grows to $785 million - CNN",
      "description": "There was no jackpot winner in Friday night's Mega Millions drawing, which means the top prize will rise to an estimated $785 million dollars on Tuesday night.",
      "url": "https://www.cnn.com/2022/12/31/us/mega-millions-no-winner-trnd/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220921184353-mega-millions-ganadores-premio-historico-dividido-redaccion-mexico-00001420.png?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-12-31T10:25:00Z",
      "content": "There was no jackpot winner in Friday nights Mega Millions drawing, which means the top prize will rise to an estimated $785 million dollars on Tuesday night.\r\nThe numbers drawn Friday were 1, 3, 6, … [+509 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "247Sports"
      },
      "author": "Robbie Weinstein",
      "title": "Clemson football: Dabo Swinney 'really disappointed' after Tigers' blowout loss to Tennessee in Orange Bowl - 247Sports",
      "description": "...",
      "url": "https://247sports.com/LongFormArticle/Clemson-football-Dabo-Swinney-really-disappointed-after-Tigers-blowout-loss-to-Tennessee-in-Orange-Bowl-201727499/",
      "urlToImage": "https://s3media.247sports.com/Uploads/Assets/99/543/11543099.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630",
      "publishedAt": "2022-12-31T10:17:31Z",
      "content": "Even while missing Hendon Hooker, Jalin Hyatt, Cedric Tillman and others, Tennessee had no issue with Clemson Friday night at the Orange Bowl. The Volunteers earned their 11th win of the season by a … [+7686 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Covid: England to require negative test for arrivals from China - BBC",
      "description": "The UK says it is acting over concerns about infection data provided by the Chinese government.",
      "url": "https://www.bbc.com/news/uk-64130655",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1765C/production/_128163859_003cf26574ec7458701c5f9b7f1ad1c3332bc0410_367_5904_33211000x563.jpg",
      "publishedAt": "2022-12-31T09:28:39Z",
      "content": "Passengers arriving in England from China will have to provide a negative Covid test before they board a flight, ministers have confirmed.\r\nIt comes as several nations announced they would be screeni… [+4005 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Kstp.com"
      },
      "author": "Kyle Brown",
      "title": "Barbara Walters, groundbreaking TV journalist, dies at 93 - KSTP",
      "description": "Barbara Walters, a pioneering TV journalist who became the first woman to anchor an evening news broadcast, has died, ABC News reports.",
      "url": "https://kstp.com/kstp-news/top-news/report-barbara-walters-groundbreaking-tv-journalist-dies-at-93/",
      "urlToImage": "https://kstp.com/wp-content/uploads/2022/12/barbara-walters-obit-AP-scaled-e1672455483627.jpg",
      "publishedAt": "2022-12-31T09:25:11Z",
      "content": "Barbara Walters, the intrepid interviewer, anchor and program host who blazed the way as the first woman to become a TV news superstar during a career remarkable for its duration and variety, has die… [+9025 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Ashleigh Gray, Emma James",
      "title": "T.J. Holmes and Amy Robach seen together for first time since Holmes filed for divorce - Daily Mail",
      "description": "Amy Robach and T.J. Holmes, suspended Good Morning America co-anchors, were spotted returning from their steamy Miami getaway this week. It comes after Holmes filed for divorce from his wife.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11587689/T-J-Holmes-Amy-Robach-seen-time-Holmes-filed-divorce.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/12/31/08/66068685-0-image-a-14_1672474761316.jpg",
      "publishedAt": "2022-12-31T08:18:40Z",
      "content": "Amy Robach and T.J. Holmes, suspended Good Morning America co-anchors, were spotted returning from their steamy Miami getaway this week.\r\nThe two reporters, 49 and 45 respectively, attempted to keep … [+4947 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Richard Luscombe",
      "title": "Above and beyond: key events in 2022 that shaped space exploration - The Guardian",
      "description": "It was a great year for a slight lifting of the veil on the final frontier – from redirecting an asteroid to a glimpse into creation",
      "url": "https://www.theguardian.com/science/2022/dec/31/space-exploration-key-events-2022-nasa",
      "urlToImage": "https://i.guim.co.uk/img/media/b04a1dfe98e269da8f3dbcafd1e2f082efefc7f0/41_0_1903_1143/master/1903.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bc576cca5064efecab35e0da0890089e",
      "publishedAt": "2022-12-31T08:00:00Z",
      "content": "The year has been a blast in space exploration, from Nasas big step in returning to moon missions, to glimpses at the origins of the universe and hope that humanity could survive the doomsday scenari… [+5888 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KSL.com"
      },
      "author": "Damian J. Troise and Alex Veiga, Associated Press",
      "title": "S&P 500 closes out dismal year with worst loss since 2008 - KSL.com",
      "description": "Stocks are closing out 2022 with more losses, giving the S&P 500 its worst year since 2008. The benchmark index fell 0.3% Friday, the last trading day of the year, leaving it down 19.4% for the year.",
      "url": "https://www.ksl.com/article/50548249/sp-500-closes-out-dismal-year-with-worst-loss-since-2008",
      "urlToImage": "https://img.ksl.com/slc/2908/290866/29086687.jpg?filter=kslv2/responsive_story_lg",
      "publishedAt": "2022-12-31T05:08:29Z",
      "content": "Estimated read time: 5-6 minutes\r\nNEW YORK Wall Street capped a quiet day of trading with more losses Friday, as it closed the book on the worst year for the S&P 500 since 2008.\r\nThe benchmark in… [+5985 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KTLA Los Angeles"
      },
      "author": "Dom McAndrew",
      "title": "Married couple killed in Yosemite rock fall identified - KTLA Los Angeles",
      "description": "YOSEMITE, Calif. (KSEE/KGPE) – The two people killed at Yosemite National Park following a rockslide at the park entrance on Tuesday have been officially identified by the National Park Service. Officials say Georgios Theocharous, 51, and Ming Yan, 35, a marr…",
      "url": "https://ktla.com/news/identified-married-couple-killed-in-yosemite-rock-fall/",
      "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2022/12/12-29-YOSEMITE-ROCKSLIDE-DEATHS-STILL-MAP-1.png?w=1280",
      "publishedAt": "2022-12-31T05:08:15Z",
      "content": "YOSEMITE, Calif. (KSEE/KGPE) The two people killed at Yosemite National Park following a rockslide at the park entrance on Tuesday have been officially identified by the National Park Service.\r\nOffic… [+768 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Reuters",
      "title": "China December manufacturing contracts at sharpest pace in almost 3 years - CNBC",
      "description": "China's factory activity shrank for the third straight month in December — and at the sharpest pace in nearly three years.",
      "url": "https://www.cnbc.com/2022/12/31/china-manufacturing-contracts-sharply-as-covid-infections-soar.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107172837-1672461370361-gettyimages-1453395242-vcg111416083263.jpeg?v=1672461526&w=1920&h=1080",
      "publishedAt": "2022-12-31T04:38:00Z",
      "content": "A textile factory on December 30, 2022 in Jiangxi Province. Chinese manufacturing activity contracted at its sharpest pace in nearly 3 years in December.\r\nChina's factory activity shrank for the thir… [+3620 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": "Erik Beaston",
      "title": "WWE SmackDown Results: Winners, Grades, Reaction and Highlights from December 30 - Bleacher Report",
      "description": "John Cena kept a 20-year streak intact Friday night, returning to SmackDown for a year-closing main event in which he partnered with Kevin Owens to battle Sami...",
      "url": "https://bleacherreport.com/articles/10060151-wwe-smackdown-results-winners-grades-reaction-and-highlights-from-december-30",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1672406599/iz4x9kfky1luf1i7yhdz.jpg",
      "publishedAt": "2022-12-31T03:02:19Z",
      "content": "Credit: WWE.com\r\nDriven by fury following multiple attacks that left her with an injured arm, Raquel Rodriguez wasted little time taking the fight to SmackDown Women's Champion Ronda Rousey in their … [+2675 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "HYUNG-JIN KIM Associated Press",
      "title": "N. Korea fires 3 missiles amid tensions over drone flights - ABC News",
      "description": "North Korea has fired three short-range ballistic missiles toward its eastern waters, the latest in a barrage of weapons tests this year that comes days after it increased tensions by flying drones into South Korea",
      "url": "https://abcnews.go.com/International/wireStory/north-korea-fires-missile-sea-south-korea-95994313",
      "urlToImage": "https://s.abcnews.com/images/International/WireAP_4ce6ee753c6248528f7d092cac7a4cf1_16x9_992.jpg",
      "publishedAt": "2022-12-31T02:19:06Z",
      "content": "SEOUL, South Korea -- North Korea fired three short-range ballistic missiles toward its eastern waters in its latest weapons display on Saturday, a day after rival South Korea conducted a rocket laun… [+4846 chars]"
    }
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>KhabarApp - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title.slice(0,63)} description={element.description.slice(0,106)} imageUrl={element.urlToImage} newsUrl={element.url}/>   
        </div>
})}
        </div>     
      </div>
    )
  }
}

export default News
