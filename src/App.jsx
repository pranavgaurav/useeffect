import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import { apiurl } from "./data";
import { filterData } from "./data";
import Spinner from "./Spinner";
function App()
{
  const [courses,setcourse]=useState({});
  const [category,setcategory]=useState(filterData[0].title);
  const [showspinner,setspinner]=useState(false);
  let url=apiurl;
  async function getdata()
  {
    setspinner(true);
    let response=await fetch(url);
    let output= await response.json();
    console.log(output.data);
    setcourse(output.data);
    console.log("HI");
    console.log(courses);
    setspinner(false);
  }
  useEffect(()=>
  {
    getdata();
  },[])
  return (
    
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="bg-bgDark2">
          <div>
            <Filter 
            filterData={filterData}
            category={category}
            setcategory={setcategory}>
            </Filter>
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            { showspinner? <Spinner/>:<Cards courses={courses} category={category}></Cards>}
          </div>
      </div>
    </div>
  )
}

export default App;