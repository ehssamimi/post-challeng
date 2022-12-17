import React, {useEffect,forwardRef} from 'react';
import BlogItem from "./BlogItem";
import { useQuery } from '@apollo/client'
import { AllPost} from "../../Assets/Const";


 const BlogList = React.forwardRef((props, ref) =>  {
        let{ search, page, perPage, list, setList }=props
    const { loading, error, data } = useQuery(AllPost, {
        notifyOnNetworkStatusChange: true,
    })
    useEffect(() => {
        if (search) {
            setList(
                data?.getPosts.filter((post ) => post.title.includes(search))
            )
        } else {
            setList(data?.getPosts)
            ref.current =data?.getPosts;
        }
    }, [data, search, setList])

     const paginate = (array , page_size , page_number) => {
        return array?.slice((page_number - 1) * page_size, page_number * page_size)
    }
    const paginated = React.useCallback(() => {
        return paginate(list, perPage, page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list, page])
    if(loading)  return <h2 className="text-center">در حال دریافت اطلاعات </h2>
    if(!list || list?.length===0)  return <h2 className="text-center">مقاله ای یافت نشد  </h2>

    return (
        <div className="flex flex-[3] flex-col gap-12">
            {paginated()?.map((post) => (
                <BlogItem key={post._id} {...post} />
            ))}
        </div>
    );
});

export default BlogList;