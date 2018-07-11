<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link class="nav-link" :to="{name:'contactLink'}">
                        <span class="list-group-item list-group-item-action">
                            联系我们
                        </span>
                    </router-link>
                    <router-link class="nav-link" :to="{name:'historyLink'}">
                        <span class="list-group-item list-group-item-action">
                            历史订单
                        </span>
                    </router-link>
                    <router-link class="nav-link" :to="{name:'orderingGuideLink'}">
                        <span class="list-group-item list-group-item-action">
                            点餐文档
                        </span>
                    </router-link>
                    <router-link class="nav-link" :to="{name:'deliveryLink'}">
                        <span class="list-group-item list-group-item-action">
                            快递信息
                        </span>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
