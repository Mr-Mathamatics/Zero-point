const ExploreCategories = (exploreCategories) => {
    const {data}=exploreCategories
    return (
        <div className="top-courses">
            <h3 className="font-bold text-2xl pb-4">Explore Categories</h3>
            <div className="flex flex-wrap gap-4">
                {
                    data && data.length ?
                        <>
                            {
                                data.map((CategoriesName) =>
                                    <button key={CategoriesName} className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded uppercase font-medium text-sm'>{CategoriesName}</button>
                                )
                            }
                        </> : null
                }

            </div>
        </div>
    )
}
export default ExploreCategories