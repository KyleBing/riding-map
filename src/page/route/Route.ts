interface EntityRoute {
    id?: number,
    name: string,                          // 路线名称
    area: string,                          // 地址位置
    road_type: string,                     // 路面类型
    seasons?: string,                      // 骑行季节
    seasonsArray: Array<string>,           // 季节数组
    video_link: string,                    // 视频链接
    paths?: string,                        // 路线节点
    pathArray?: Array<EntityRoutePointer>,
    note: string,                          // 备注
    date_init?: string,                    // 创建时间
    date_modify?: string,                  // 编辑时间
    thumb_up: number,                      // 点赞数
    uid?: number,                          // user ID
    is_public: 0|1,                        // 是否共享 0 否 1 是
    policy?: number,                       // 路线规划策略

    distance?: number,
    nickname?: string
    time?: string
}

interface EntityRoutePointer {
    type: string,                // 颜色类别，为了匹配 EntityPointerPoint 的属性，共用一个方法
    position: [number, number],  // 地址 lng,lat
    note: string,                // 标点备注
    name: string,                // 标点名称
    img?: string                 // 图片 http 路径

}

export {
    type EntityRoute,
    type EntityRoutePointer
}
