/**
 * Pagination function
 * @param {*} param0 request.query object
 * @param {*} content data array
 * @returns response object
 */
exports.paginate = function ({ page = 1, limit = 3 }, content) {
    const items = content.length;
   
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    const pages = Math.ceil(items / limitInt);

    const start = (pageInt - 1) * limitInt; 
    const end = pageInt * limitInt;
    //slice the array
    const data = content.slice(start, end);
    console.log(start,end);
    return {
        totlItems : items,
        pages,
        page,
        limit,
        items: data.length,
        data
    };
};