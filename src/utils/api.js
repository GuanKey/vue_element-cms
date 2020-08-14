import fetch from './fetch'

// 上传轮播图 {img ,text}
export function fetchAdsCreate(data){
    return fetch({
        url:'/jd/ads/create',
        method:'POST',
        data
    })
}

// 登陆 { username, password }
export function fetchLogin(data){
    return fetch({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}

// 添加商品分类 { cata, cate_zh }
export function fetchAddCate(data){
    return fetch({
        url:'/cates/add',
        method:'POST',
        data
    })
}

// 获取全部商品分类 {}
export function fetchAllCate(params){
    return fetch({
        url:'/cates/all',
        method:'Get',
        params
    })
}

// 获取品类详情{id}
export function fetchCateDetial(params){
    return fetch({
        url:'/cates/detail',
        method:'GET',
        params
    })
}

// 删除品类{id}
export function fetchRemoveCate(params){
    return fetch({
        url:'/cates/remove/cate',
        method:'GET',
        params
    })
}

// 新增商品、编辑 {name,desc,price,cate,img,hot,rank}
export function fetchCreateGood(data){
    return fetch({
        url:'/goods/create',
        method:'POST',
        data
    })
}

// 获取所有商品 {}
export function fetchGoodList(params){
    return fetch({
        url:'/goods/list',
        method:'GET',
        params
    })
}

// 商品详情 {_id:id}
export function fetchDetail(params){
    return fetch({
        url:'/goods/detail',
        method:'GET',
        params
    })
}

// 删除商品
export function fetchRemoveList(params){
    return fetch({
        url:'/goods/remove/list',
        method:'GET',
        params
    })
}

export default{
    fetchLogin,
    fetchAddCate,
    fetchAllCate,
    fetchCateDetial,
    fetchRemoveCate,
    fetchCreateGood,
    fetchGoodList,
    fetchDetail,
    fetchRemoveList,
    fetchAdsCreate,
}