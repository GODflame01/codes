import Card from "./component/card"
import "./App.css"
const App = (props) => {
  const jobs = [
    {
      image: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      name: "Google",
      days: "5 days ago",
      skill: "React, JavaScript, HTML, CSS",
      tag1: "Frontend",
      tag2: "Full Time",
      price: "$120K - $160K",
      location: "California, USA"
      
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEc8JGROHsM3TawP59txb79S-tMFkdpJjH9AnR2-a-A&s",
      name: "Microsoft",
      days: "2 days ago",
      skill: "React, TypeScript, Node.js",
      tag1: "Frontend",
      tag2: "Full Time",
      price: "$110K - $150K",
      location: "Washington, USA"
    },
    {
      image: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
      name: "Amazon",
      days: "1 day ago",
      skill: "React, JavaScript, AWS",
      tag1: "Web Developer",
      
      tag2: "Full Time",
      price: "$105K - $145K",
      location: "Seattle, USA"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJTlhRjgbXXBo8z7m775RdPfzAUXgi1ibqVzWomLxVXBsbpkr9hh5LK4&s=10",
      name: "Meta",
      days: "3 days ago",
      skill: "React, JavaScript, GraphQL",
      tag1: "Frontend",
      tag2: "Full Time",
      price: "$125K - $170K",
      location: "California, USA"
    },
    {
      image: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
      name: "Apple",
      days: "4 days ago",
      skill: "React, Swift, JavaScript",
      tag1: "Software Engineer",
      tag2: "Full Time",
      price: "$115K - $155K",
      location: "California, USA"
    }
  ];

  return (
    <div className="parent" >
      {jobs.map(function (elem, idx) {

        return (
          <div key={idx}>
            
            <Card
              image={elem.image}
              name={elem.name}
              days={elem.days}
              skill={elem.skill}
              tag1={elem.tag1}
              tag2={elem.tag2}
              price={elem.price}
              location={elem.location}
            />
          </div>
        )
      })};
    </div>
  )
}

export default App
