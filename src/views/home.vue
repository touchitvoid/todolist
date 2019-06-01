<template>
    <div id="home">
        <div class="welcome flex--lineCenter">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiYSURBVGhD7VgNcFNVFi4uu6uo48qs7Iy7s+w6LH8j6to2L+0wfU1/sKsVoVKkTdI0qVtqKa5ABwUtKT8tbdPkNSkCFRQZQEstyUvFVVYcdmDYYXVxlrrKinRVulraNC8veQkt2zRvz3m5SdMW+kPbAWf6zZzJu/eed/N995577r0vahKTmMQkRgVRf2IqefzhQTDZX/Oa7F+4q62zSdUPC4KJ/djL2EWfiS0QauyZIOjMFcPRmaR5bMjMnP8T8jjuwLAJGI7d6StrWAkiAvzavVYg70cxAsNWErexQZVIWSdChKjX3wYkzwqMvVfY3nia05p7+Od2ioKR/R/UH/NUN/2cuI4N6kRKnAgRYkPDj4D8pzjaXpPN4dLU+F1qkyiUHnIKlUf2jqsAyWiZfTxEKBNjk9U0tVdFyy5qk+K49elPXD5XZDgIodPjVBu/gdHvCoqy15NXxgYg7g+LSJS9v0wuv4M0jQoaOm4u9HW6ry/qe7DCD9bop4dIe7bVP+0z2Z6EmfnEZ7ZF83k7Zrl05mK3jplDuhk9YKSKI/4UZoI6np8ePY00S1idlvZTZUJMrDoh7vdQnBKsDQIFqxRUPrznDvWBIZlFR0shItY1TcOs4zWxl3nj4enSSwS8zuLitRaPS2dpgTUzFdcNPOe6tJb1xGVEmAIjd7C/CNlpFS2fpddH3ZZDUyog1BbR3qqiKRZm6w0Mu0jiUCfAbyHpNwzIRrf7atn7STEMIPoFiBDRPFrzfJgNMyl/DW3riNvwoGl6qipR9lofERhFmuqFOk9k3VAGvl1gW0azjrg885NAtAdJfxb9/D547sVnEBLg82pTidvIoVTIl/cf0RA5yiUJpOWrobwOfEph9CvAGnPo2I+g/duwLw3PtOyFbEXcTCm8EikK/P+YkyBTqFIfuhP/5yvV1lUt6vLjH2e9bG2WrznV9nS571+xa7sl4lrLOV5Xs0IidCNQKmLmANnzIUISKSBBmq8LZZJsPrynB/JnrjUIIStOTQ1c0lRKYYPWmcv4P5mTL56dVyD+J+UVviPbYMPwETX7biddjx5KWvYr+LPW0J+CAKsuPv5u0jwirEiJvz9HEZsAs5aCplLExavomAfty4qSOG1NNxFwpWVRyYlvHi/lmqOf75VmgAjjteYTpKsbQ3aCfAGMpLdPhKwDbBVmJOJyw+B0O2bCzkxz+XX3OFUmBgl3PFP5kUNpCi1i0aU17xYz9WPbl5QKajEu5pCICCHbSUodE77Lr5sGZL2E8JdY58qzZMA6MMJsKCSnsUKtiM2GvaI7UkSEfS+lVJoqQT8UhamXvDosLi0z3oGZB0MH7ENSPf5QJ1DzgOReyPOcRBxDi6b4AWKCRssuY4bKTIm+h7w+JFzaWi2IKHfm1i4gVROO8E6MaRE2vDSYhS8Hi5FdyEmiHiKutzaUibKNYeI0dRWy1iUiogdmw6yhH/4Zcb01AaRfQsKwuL/GFCzVJcTGYTlYjxshVYWbm/TCrQaMeUJ0F6mSoEqNmwGz0BycDZwdmT+46GWZGpq+8Y1qvIHEJQG07D1SFYY6OXY2zkBYRJ+Ydpi5kkyavgv9RH3DuN8Kw8AsATtjDae15JCqfgDifw0Sk125VrxnJ8c8AD6vghCyNvpZ6/svbK4QjPZ1cG/4p898RArBcQUIcAY3G8sxUiUBswwQq+9HCA58pPmayF648F48N4HYp8D/ZFFasoiXHc7QSG5q7F+Ia5SXsT0imNh3vQz7VZfp6AOkengIqp0zYGNZy+fWPoZl2BlbJQE6y859GZq5exZrDAXJNN6+AkgaFqsnHCY01YLHc6mjYZAfHf3jdU+knZaIE8OvF9yL+3/NG+2zoMwHRdkFEMYINfZfkFeHhju35nEgexVJO7IN+79N3/x3EOH+IKmgpS23WjqrvLXk2fCCxPMRblzwfBZF4CWIdDUs8hbJp1/c8np3pAjH0m2nPAZrfWQdft0YeKO7Lri8Gk3kyfDcw6vFc4+sFp05jHThQHPqzM3EPYysBOp3uA5gRs6P5khxfM22pR1VhwMhsp2PbRK9RlswpEICTPbdxH1kgCPvQofKUHZh4fr/frqgUGx+9E/i51Rxe2eOqYrX1Ra0F+6QssdAwJqQ7tgwO0NeSjzVTXNhVHdByPxNKK23OpZXOLhNB0Rh62HRuXhrH3EjexF81oz62yoetHid+Q1YuD3fZZS3tS+v6oJnf3tWdb9cPxD/0NdNK81YdhFEfAbFKfzOo/d6GOu8YGsQXlPTo5BxvANGOOAuqhO5p8rEzpQSELFFEuJI39zqVJU9SF4dOSDmS0Lh0vGMweLIrj4ZKuNZnrgNAo4qEnp75Vpx89KlqUC0BRbhv30Mu5i4RLXvaLgLFuWRSAFo/Ib9AdfySpFbUiYKFY0R4thu6HdPwHh45J98MEyk7APm0Zrvc+ea42Ev8MHaOI9nduI2CEDsAP5pZ9U7/jMrt5wKkfCZ2BjiEtVlsf8WRHWGCTJsl6A/9CaXWYFpVOQLd4ueTYfCAsJ+JvvrpIuRwa2tTXfoKsNXSfeztbNBUAopXhOYKYBEo8fIBjoLd3ULRpvPrT9UTprDQD+I7xUwslmC4cgMR0qJxbO9UUCiHqOtx7mkvBf68YXJM2wblBny+sQACcGffejZuL+FyzKIXMZ20fPKwaswcn4gegny+HU/lfgY63Mhsmj8hjerXKv2aIH0BUkA7A8+o11O3Mcfjkr2bgiLz4N/ZvdzaqbNs+mg6Hn5gDNEAH5zifsgwG77KvpF2ItYL4riFDfDzulibL+RHCcSQKIaiP4Zsswivmj3e0jEXfrWSaHamgV1xT7ju78kroMA4jeiP8xUb1BA0x9I080BTP1LEhGYFVI1JHAdQJyfhdnbBiKO4ndS0nRzAGmTAgFvg20gVcMCSePH4JtOfhKTmMREIyrq/7XC9JLjbUrUAAAAAElFTkSuQmCC">
            <div class="date">{{ new Date().format("yyyy-MM-dd") }}</div>美好一天从计划制定开始
        </div>
        <div class="todo__control">
            <transition name="slide-fade">
                <div v-if="notice" class="todo__notice">! 清除成功</div>
            </transition>
            <ul>
                <li 
                @click="$store.commit('SET_PANEL',true)"
                ><i class="fa fa-magic"></i>添加一个新todo</li>
                <li @click="clear"><i class="fa fa-window-close-o"></i>清除所有todo</li>
                <li @click="$router.push('/todo')"><i class="fa fa-file-o"></i>todo列表</li>
                <li @click="about=!about"><i class="fa fa-code"></i>关于 {{ `status:${about}` }}</li>
            </ul>           
        </div>
        <transition name="slide-fade">
            <div class="about" v-if="about">
                <div>采用localStore + vuex 做为储存,手写简约风样式</div>
                <div>Github: <a target="_blank" href="https://github.com/touchitvoid">https://github.com/touchitvoid</a></div>
                <div>mail: touchitvoid@gmail.com Tel.15708139289 QQ.1544020198</div>
                <img src="http://img.hb.aicdn.com/060b4ec1f792ee0fc688e729a51cf1d52b56946ec844-OshCI0_fw658" height="100px">
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            about : true,
            notice : false
        }
    },
    methods: {
        clear(){
            this.notice = true
            this.$store.commit('CLEAR_TODO')
        }
    }
}
</script>

<style lang="less" scoped>
    #home {
        min-height: 220px;
        .welcome {
            font-size: 16px;
            margin: 0 0 22px 0;
            img {
                margin: 0 10px 0 0
            }
            .date {
                font-size: 16.5px;
                margin-right: 10px;
                color: rgba(0,0,0,.5)
            }
        }
        .todo__control {
            box-sizing: border-box;
            padding: 16px 0 16px 22px;
            border-left: 1px solid rgba(0,0,0,.1);
            .todo__notice {
                box-sizing: border-box;
                padding: 5px 12px;
                border: 1px solid rgba(0,0,0,.3);
                font-size: 15.5px;
            }
            li {
                padding: 10px 0;
                color: rgba(0,0,0,.6);
                font-size: 15px;
                i {
                    margin-right: 10px;
                    font-weight: bold;
                    font-size: 14px;
                }
            }
        }
        .about {
            box-sizing: border-box;
            padding: 14px 0;
            line-height: 1.6;
            color: rgba(0,0,0,.64)
        }
    } 
</style>
