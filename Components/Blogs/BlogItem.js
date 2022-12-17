import React  from 'react';
import moment from 'jalali-moment'
import Image from 'next/image'


const BlogItem = ({
                      _id,
                      author,
                      body,
                      commentCount,
                      createdAt,
                      introImageUrl,
                      title,
                  }) => {



    return (
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white sm:flex-row">
            <Image
                // loader={() => image}
                src={`${introImageUrl.host.slice(0, -1)}${introImageUrl.path}`}
                alt={title}
                width={300}
                height={280}
                className="w-full object-cover md:w-auto"
                priority
            />
            <div className="w-full px-4 py-4">
                <div className="flex h-full flex-col lg:flex-row">
                    <div className="flex flex-col justify-between px-2 lg:pr-4 lg:pl-10">
                        <div>
                            <h4 className="text-lg font-semibold text-MineShift mb-9 w-[80%] mx-auto">{title}</h4>

                            <div dangerouslySetInnerHTML={{__html: body.slice(0, 436)}} className=" render-Html "/>

                        </div>
                        <div className="flex justify-between pb-5 mt-11 w-[80%] mx-auto text-black">
                            <div className="flex gap-1">
                               <Image
                               src={'/Img/date.svg'}
                               alt={"date"}
                               width={20}
                               height={20}
                               />
                                <span className="text-sm font-light">
                                        {moment(createdAt).locale('fa').format('D MMMM YYYY')}
                                 </span>
                            </div>
                            <div className="flex gap-1">
                                <Image
                                    alt={"comment"}
                                    src={'/Img/comment.svg'}
                                    width={20}
                                    height={20}
                                />
                                <span className="text-sm font-light">{commentCount} نظر</span>
                            </div>
                            <div className="flex gap-1">
                                <Image
                                    alt={"user"}
                                    src={'/Img/user.svg'}
                                    width={20}
                                    height={20}
                                />
                                <span className="text-sm font-light">{author}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex  items-end justify-center">
                        <button className="  px-5 py-3 text-white text-base w-[157px] lg:w-[100px] font-normal rounded-2xl max-w-[157px]flex items-center justify-center text-white bg-Malachite rounded-2xl hover:shadow-submitBtn active:border active:border-2 active:border-funGreen disabled:bg-gray aria-[status=loading]:opacity-70">بیشتر
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;