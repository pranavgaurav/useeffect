import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";
import Spinner from "./Spinner";
function Card(props)
{
    let course=props.course; // array? object
    let likedcourse=props.likedcourse;
    let setlikedcourse=props.setlikedcourse;
    function helper()
    {
         
        // LOGIC
        if(likedcourse.includes(course.id))
        {
            setlikedcourse((prev)=> prev.filter((cid)=> (cid!=course.id)));
            toast.warning("Like is Removed");
        }
        else
        {
            // // if(likedcourse.length==0)
            // {
            //     setlikedcourse([course.id]);
            // }
            // else
            // {
                setlikedcourse((prev)=>[...prev,course.id]);
            // }
            toast.success("Course is Liked");
        }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[40px] h-[40px] absolute right-2 bottom-[-12px] rounded-full bg-white grid place-items-center">
                    <button onClick={helper}>
                    {
                        likedcourse.includes(course.id)?
                        <FcLike fontSize="1.75rem" />:
                        <FcLikePlaceholder  fontSize="1.75rem"/>
                    }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg ">{course.title}</p>
                <p className=" text-white mt-2">
                    {
                        course.description.length>100?
                        (course.description.substr(0,100))+"...":
                        (course.description)
                    }
                </p>
            </div>
        </div>
        
    )
}

export default Card;