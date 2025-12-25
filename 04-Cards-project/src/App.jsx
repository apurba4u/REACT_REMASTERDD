import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.vectorstock.com/i/1000v/48/30/google-logo-symbol-vector-46334830.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://www.svgrepo.com/show/424909/meta-logo-facebook-2.svg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/371/196/png-transparent-amazon-buy-logo-online-shop-most-usable-logos-icon.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://cdn3.vectorstock.com/i/1000x1000/92/12/microsoft-software-logo-brand-symbol-black-design-vector-46409212.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://wallpapers.com/images/hd/tesla-logo-4k-9rzps9yb4iqdo0bi.jpg",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUr4AbOXWGP9Vl2gfXd4Hx__ptunBOvoYaVQ&s",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://media.licdn.com/dms/image/v2/D4D22AQH0JLUvV-xxKg/feedshare-shrink_800/feedshare-shrink_800/0/1693320683194?e=2147483647&v=beta&t=cT5h3f--Y9cl2JxmFsOT2D9DpFjHBNUMm_1ZzYJcQDo",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Database Administrator",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/496/387/non_2x/intel-brand-logo-symbol-white-design-software-computer-illustration-with-black-background-free-vector.jpg",
    companyName: "Intel",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  }
];
  return (
    <div className="parent">
      
      {jobOpenings.map((elem,idx) => {
        return <div key={idx}>
          <Card 
          company ={elem.company} 
          post={elem.post} 
          tag1={elem.tag1} 
          tag2={elem.tag2} 
          pay={elem.pay} 
          brandLogo={elem.brandLogo} 
          datePosted={elem.datePosted} 
          location={elem.location}
          />
        </div>
      })}
    </div>
  );
};

export default App;
