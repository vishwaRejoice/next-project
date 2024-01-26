import ViewAbout from '@/viewabout'
import React from 'react'
export async function generateStaticParams() {
  
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const jsonData = await response.json();
          const res = jsonData?.map((item, index) => {
            return {
              slug: item.name,
            };
          });
          console.log("ress",res)
          return res
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
const page = () => {
  return (
    <>
    <ViewAbout/>
    </>
  )
}

export default page
