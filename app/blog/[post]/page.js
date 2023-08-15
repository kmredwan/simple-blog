'use client'

import { blogData } from "@/blogData";
import { useEffect, useState } from "react";

export default function singlePost({ params }) {
 const [result , setResult] = useState()
  const name = params.post;

  useEffect(() => {
    const blogId  = name.split("post")[1]
    const result = blogData.filter((d) => d.id === Number(blogId));
    setResult(result[0])
  }, [name]);

  return(
          <div className="mt-5 ml-3" >
            
             <h1 className="mb-3 bg-slate-500 text-slate-50 p-2">{`Title : ${result?.title}`}</h1>
             <p className="bg-purple-400 text-yellow-50 p-2">{`Content : ${result?.body}`} </p>
             <p className="bg-purple-400 text-yellow-50 p-2">{`Date : ${result?.date}`}</p>
          </div>
  )
}
