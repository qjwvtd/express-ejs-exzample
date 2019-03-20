/** 
 * 设置导航active class="<%= isMainActive("/") %>">
 */
exports.mainActive = (req,res,next) => {
    res.locals.isMainActive = (path) => {
        const CURRENTPATH = req.path;
        const ACTIVE = path == CURRENTPATH ? 'active' : '';
        return ACTIVE;
    };
    next();
}