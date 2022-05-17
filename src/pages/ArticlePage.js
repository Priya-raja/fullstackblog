import React from 'react'
import { useParams } from 'react-router-dom';

 const ArticlePage = () => {

   const {name} = useParams();
  return (
    <>
    <div> This is the {name} article </div>
    </>
  )
}
export default ArticlePage;
