import { blogData } from "@/blogData"
import Link from "next/link"

export default function Blog(){
      return(
        
        blogData.map((blog)=>{
            return(
                <div className="mt-10 pl-3">
               
                <p className="mb-3 bg-gray-500 p-2 text-slate-50" key={blog.id}>

                   <Link href={`/blog/post${blog.id}`} > {blog.title}</Link> 

                </p>
            </div>
            )
        })

    )
  


}

