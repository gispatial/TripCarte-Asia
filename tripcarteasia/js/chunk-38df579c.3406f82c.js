(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38df579c"],{"2b98":function(t,e,s){t.exports=s.p+"img/user-03.0fc73648.jpg"},"32d1":function(t,e,s){t.exports=s.p+"img/page-05.2078495e.jpg"},3607:function(t,e,s){t.exports=s.p+"img/page-02.12fa15f6.jpg"},"40ba":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profile-page"}},[s("div",{staticClass:"profile-header"},[s("div",{staticClass:"relative"},[s("div",{staticClass:"cover-container rounded-t-lg"},[s("img",{staticClass:"responsive block",attrs:{src:t.user_info.cover_img,alt:"user-profile-cover"}})]),s("div",{staticClass:"profile-img-container pointer-events-none"},[s("div",[s("vs-avatar",{staticClass:"user-profile-img",attrs:{src:t.user_info.profile_img,size:"85px"}})],1),s("div",{staticClass:"profile-actions pointer-events-auto flex"},[s("vs-button",{attrs:{"icon-pack":"feather",radius:"",icon:"icon-edit-2"}}),s("vs-button",{staticClass:"ml-2 lg:ml-4",attrs:{"icon-pack":"feather",radius:"",icon:"icon-settings"}})],1)])]),s("div",{staticClass:"flex items-center justify-end flex-wrap profile-header-nav p-6"},[s("div",{staticClass:"block sm:hidden"},[s("feather-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isNavOpen,expression:"!isNavOpen"}],staticClass:"vx-navbar-toggler cursor-pointer",attrs:{icon:"AlignJustifyIcon"},on:{click:function(e){t.isNavOpen=!t.isNavOpen}}}),s("feather-icon",{directives:[{name:"show",rawName:"v-show",value:t.isNavOpen,expression:"isNavOpen"}],staticClass:"vx-navbar-toggler cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){t.isNavOpen=!t.isNavOpen}}})],1),s("div",{staticClass:"w-full flex-grow sm:flex sm:items-center sm:w-auto",class:t.isNavOpen?"block":"hidden"},[s("div",{staticClass:"text-sm sm:flex-grow"},[s("ul",{staticClass:"sm:flex justify-around mt-8 w-full md:mt-0 md:ml-auto md:w-3/4"},[s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("Timeline")])],1),s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("About")])],1),s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("Photos")])],1),s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("Friends")])],1),s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("Videos")])],1),s("li",{staticClass:"p-2 sm:p-0"},[s("router-link",{attrs:{to:"/pages/profile"}},[t._v("Events")])],1)])])])])]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/4"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"About"}},[s("template",{slot:"actions"},[s("feather-icon",{attrs:{icon:"MoreHorizontalIcon"}})],1),s("div",{staticClass:"user-bio"},[s("p",[t._v("Huge, popular aquarium with 200+ marine & freshwater species, a 3D theater & an underwater tunnel.")])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Joined:")]),s("p",[t._v("November 15, 2018")])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Lives:")]),s("p",[t._v("Jalan Pantai Chenang, 07000 Langkawi, Kedah")])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Email:")]),s("p",[t._v("sitiraudhah_uwl@edenzil.com")])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Website:")]),s("p",[t._v("www.underwaterworldlangkawi.my")])]),s("div",{staticClass:"social-links flex mt-4"},[s("feather-icon",{staticClass:"mr-2",attrs:{svgClasses:"h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",icon:"FacebookIcon"}}),s("feather-icon",{staticClass:"mr-2",attrs:{svgClasses:"h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",icon:"TwitterIcon"}}),s("feather-icon",{staticClass:"mr-2",attrs:{svgClasses:"h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",icon:"InstagramIcon"}})],1)],2),s("vx-card",{staticClass:"mt-base",attrs:{title:"Suggested Pages"}},[s("ul",{staticClass:"page-suggestions-list"},t._l(t.suggestedPages,(function(e){return s("li",{key:e.index,staticClass:"page-suggestion flex items-center mb-4"},[s("div",{staticClass:"mr-3"},[s("vs-avatar",{staticClass:"m-0",attrs:{src:e.img,size:"35px"}})],1),s("div",{staticClass:"leading-tight"},[s("p",{staticClass:"font-medium"},[t._v(t._s(t._f("capitalize")(e.title)))]),s("span",{staticClass:"text-xs"},[t._v(t._s(t._f("capitalize")(e.type)))])]),s("div",{staticClass:"ml-auto"},[s("div",{staticClass:"flex"},[s("feather-icon",{staticClass:"mr-2 cursor-pointer",attrs:{icon:"StarIcon",svgClasses:"h-4 w-4"}})],1)])])})),0)]),s("vx-card",{staticClass:"mt-base",attrs:{title:"Twitter Feeds"}},[s("ul",{staticClass:"twitter-feeds-list"},t._l(t.twitterFeeds,(function(e,a){return s("li",{key:e.id,staticClass:"twitter-feed",class:{"mt-8":a}},[s("div",{staticClass:"twitter-feed-header flex items-center"},[s("vs-avatar",{staticClass:"m-0",attrs:{src:e.authorAvatar,size:"35px"}}),s("div",{staticClass:"leading-tight ml-3"},[s("p",{staticClass:"feed-author font-semibold"},[t._v(t._s(e.authorDisplayName))]),s("span",{staticClass:"flex items-center"},[s("small",[t._v("@"+t._s(e.authorUsername))]),s("feather-icon",{staticClass:"ml-1",attrs:{icon:"CheckIcon",svgClasses:"h-3 w-3 bg-primary rounded-full text-white"}})],1)])],1),s("p",{staticClass:"mt-4"},[t._v(t._s(e.content))]),e.tags.length?s("div",{staticClass:"tags-container"},t._l(e.tags,(function(e){return s("span",{key:e,staticClass:"mr-2 text-primary",attrs:{id:"tag"}},[t._v("#"+t._s(e))])})),0):t._e(),s("small",{staticClass:"mt-3 inline-block"},[t._v(t._s(t._f("date")(e.time,!0)))])])})),0)])],1),s("div",{staticClass:"vx-col w-full lg:w-1/2"},t._l(t.userPosts,(function(e,a){return s("vx-card",{key:a,staticClass:"mt-base"},[s("div",[s("div",{staticClass:"post-header flex justify-between mb-4"},[s("div",{staticClass:"flex items-center"},[s("div",[s("vs-avatar",{staticClass:"m-0",attrs:{src:t.userLatestPhotos[0],size:"45px"}})],1),s("div",{staticClass:"ml-4"},[s("h6",[t._v(t._s(e.author))]),s("small",[t._v(t._s(t._f("date")(e.time,!0))+" at "+t._s(t._f("time")(e.time)))])])]),s("div",{staticClass:"flex"},[s("feather-icon",{staticClass:"ml-4",attrs:{icon:"HeartIcon",svgClasses:{"text-danger fill-current stroke-current":e.isLiked}}})],1)]),s("div",{staticClass:"post-content"},[s("p",[t._v(t._s(e.text))])]),s("div",{staticClass:"post-media-container mb-6 mt-4"},[s("ul",{staticClass:"flex post-media-list"},t._l(e.media.slice(0,2),(function(e,a){return s("li",{key:a,staticClass:"post-media m-1 w-full"},["image"==t.mediaType(e)?s("img",{staticClass:"responsive rounded",attrs:{src:e.img,alt:"user-upload"}}):"video"==t.mediaType(e)?t._o(s("video-player",{ref:"player",refInFor:!0,staticClass:"media-video-player",attrs:{options:t.playerOptions(e)}}),0,a):s("span",{staticClass:"text-lg text-primary"},[t._v("Unknown Media Type")])],1)})),0),e.media.length>2?s("span",{staticClass:"flex justify-end"},[s("a",{staticClass:"inline-flex items-center text-sm",attrs:{href:""}},[s("span",[t._v("View All")]),s("feather-icon",{attrs:{icon:t.$vs.rtl?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"h-4 w-4"}})],1)]):t._e()]),s("div",[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex items-center"},[s("feather-icon",{staticClass:"mr-2",attrs:{icon:"HeartIcon",svgClasses:"h-5 w-5"}}),s("span",[t._v(t._s(e.likes))])],1),s("ul",{staticClass:"users-liked user-list ml-3 sm:ml-6"},t._l(e.usersLiked,(function(t,e){return s("li",{key:e},[s("vx-tooltip",{attrs:{text:t.name,position:"bottom"}},[s("vs-avatar",{staticClass:"border-2 border-white border-solid -m-1",attrs:{src:t.img,size:"30px"}})],1)],1)})),0),s("small",{staticClass:"ml-2"},[t._v("+"+t._s(e.likes-5)+" more")])]),s("div",{staticClass:"flex items-center"},[s("feather-icon",{staticClass:"mr-2",attrs:{icon:"MessageSquareIcon",svgClasses:"h-5 w-5"}}),s("span",[t._v(t._s(e.comments))])],1)]),s("div",{staticClass:"comments-container mt-4"},[s("ul",{staticClass:"user-comments-list"},t._l(e.usersCommented.slice(0,2),(function(e,a){return s("li",{key:a,staticClass:"commented-user flex items-center mb-4"},[s("div",{staticClass:"mr-3"},[s("vs-avatar",{staticClass:"m-0",attrs:{src:e.img,size:"30px"}})],1),s("div",{staticClass:"leading-tight"},[s("p",{staticClass:"font-medium"},[t._v(t._s(e.author))]),s("span",{staticClass:"text-xs"},[t._v(t._s(e.comment))])]),s("div",{staticClass:"ml-auto"},[s("div",{staticClass:"flex"},[s("feather-icon",{staticClass:"mr-2 cursor-pointer",attrs:{icon:"HeartIcon",svgClasses:"h-4 w-4"}}),s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MessageSquareIcon",svgClasses:"h-4 w-4"}})],1)])])})),0),e.usersCommented.length>2?s("span",{staticClass:"flex justify-end"},[s("a",{staticClass:"inline-flex items-center text-sm",attrs:{href:""}},[s("span",[t._v("View All")]),s("feather-icon",{attrs:{icon:t.$vs.rtl?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"h-4 w-4"}})],1)]):t._e()]),s("div",{staticClass:"post-comment"},[s("vs-textarea",{staticClass:"mb-2",attrs:{label:"Add Comment"},model:{value:e.commentbox,callback:function(s){t.$set(e,"commentbox",s)},expression:"post.commentbox"}}),s("vs-button",{attrs:{size:"small"}},[t._v("Post Comment")])],1)])])])})),1),s("div",{staticClass:"vx-col w-full lg:w-1/4"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"Latest Post"}},[s("div",{staticClass:"vx-row pt-2"},t._l(t.userLatestPhotos,(function(t,e){return s("div",{key:e,staticClass:"vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4"},[s("img",{staticClass:"rounded mb-4 user-latest-image responsive",attrs:{src:t,alt:"latest-upload"}})])})),0)]),s("vx-card",{staticClass:"mt-base",attrs:{title:"Suggestions"}},[s("template",{slot:"actions"},[s("feather-icon",{attrs:{icon:"MoreHorizontalIcon"}})],1),s("ul",{staticClass:"friend-suggesions-list"},t._l(t.suggestedFriends,(function(e,a){return s("li",{key:a,staticClass:"friend-suggestion flex items-center mb-4"},[s("div",{staticClass:"mr-3"},[s("vs-avatar",{staticClass:"m-0",attrs:{src:e.avatar,size:"35px"}})],1),s("div",{staticClass:"leading-tight"},[s("p",{staticClass:"font-medium"},[t._v(t._s(e.name))]),s("span",{staticClass:"text-xs"},[t._v(t._s(e.mutualFriends)+" Mutual Friends")])]),s("div",{staticClass:"ml-auto cursor-pointer"},[s("vs-button",{attrs:{radius:"",type:"border","icon-pack":"feather",icon:"icon-user-plus"}})],1)])})),0),s("template",{slot:"footer"},[s("vs-button",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-plus"}},[t._v("Load More")])],1)],2),s("vx-card",{staticClass:"mt-base",attrs:{title:"Polls"}},[s("ul",{staticClass:"polls-list"},t._l(t.polls,(function(e){return s("li",{key:e.id,staticClass:"poll"},[s("h6",{staticClass:"poll-title"},[t._v(t._s(e.title))]),s("ul",{staticClass:"poll-options-result"},t._l(e.options,(function(e){return s("li",{key:e.value,staticClass:"poll-option mt-6"},[s("div",{staticClass:"flex"},[s("vs-radio",{attrs:{"vs-value":e.value},model:{value:t.userPoll,callback:function(e){t.userPoll=e},expression:"userPoll"}},[t._v(t._s(t._f("capitalize")(e.text)))]),s("span",{staticClass:"block ml-auto"},[t._v(t._s(e.voted)+"%")])],1),s("vs-progress",{attrs:{percent:e.voted}}),s("ul",{staticClass:"users-voted user-list mt-2"},t._l(e.usersVoted,(function(t,e){return s("li",{key:e},[s("vx-tooltip",{attrs:{text:t.name,position:"bottom"}},[s("vs-avatar",{staticClass:"border-2 border-white border-solid -m-1",attrs:{src:t.avatar,size:"30px"}})],1)],1)})),0)],1)})),0),s("vs-button",{staticClass:"mt-5 w-full"},[t._v("Vote Now")])],1)})),0)])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("div",{staticClass:"flex justify-center mt-base"},[s("vs-button",{staticClass:"vs-con-loading__container",attrs:{id:"button-load-more-posts"},on:{click:t.loadContent}},[t._v("Load More")])],1)])])])},i=[],o=(s("6762"),s("2fdb"),s("28a5"),s("d6d3")),r=(s("fda2"),{data:function(){return{isNavOpen:!1,userPoll:"",user_info:{profile_img:s("70fb"),cover_img:s("d4f6")},mediaExtensions:{img:["jpg","jpeg","png","bmp","gif","exif","tiff"],video:["avi","flv","wmv","mov","mp4","3gp"]},suggestedFriends:[{name:"Carissa Dolle",avatar:s("9a5e"),mutualFriends:6},{name:"Liliana Pecor",avatar:s("fa7b"),mutualFriends:3},{name:"Isidra Strunk",avatar:s("b690"),mutualFriends:2},{name:"Gerald Licea",avatar:s("ed5f"),mutualFriends:1},{name:"Kelle Herrick",avatar:s("f2be"),mutualFriends:1},{name:"Cesar Lee",avatar:s("351c"),mutualFriends:1},{name:"Demo User",avatar:s("3f31"),mutualFriends:1},{name:"Tonia Seabold",avatar:s("bb8e"),mutualFriends:1}],userLatestPhotos:[s("acfb"),s("fb18"),s("a83b"),s("2b98"),s("6055d"),s("8043"),s("f583"),s("cc14"),s("adfa")],userPosts:[{author:"UnderWater World Admin",time:"Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)",isLiked:!0,text:"The enchantment and wonders of the sea! Ever wondered what secrets the fishes hold? Or what it’s like to be close and personal with the creatures from the sea? If that’s what you yearn for, then you’re in for a visual treat at Underwater World Langkawi; one of the largest marine and freshwater aquaria in Southeast Asia.",media:[{img:s("e1de")}],likes:145,comments:77,usersLiked:[{name:"Trina Lynes",img:s("b7fa")},{name:"Lilian Nenez",img:s("3423")},{name:"Alberto Glotzbach",img:s("26fa")},{name:"George Nordick",img:s("fbb2")},{name:"Vennie Mostowy",img:s("9a5e")}],commentbox:"",usersCommented:[{comment:"Worth it for money! For those who plan to visit Langkawi, try to put Underwater World in your itinerary. Good place for family bonding to explore many thing underwater that i’ve never seen before. Love it!",author:"SITI HARYANI BINTI MOHD YUSOF",img:s("fa7b"),time:"Mon June 01 2020 08:56:05 GMT+0000 (GMT)"},{comment:"Easy to redeem.. Underwater world itself is just ok.. Nice to go if there nothing else to do..",author:"Siti Noraini Abdul Samat",img:s("ed5f"),time:"Mon March 02 2020 08:55:00 GMT+0000 (GMT)"}]},{author:"UnderWater World Admin",time:"Mon Dec 11 2019 08:05:05 GMT+0000 (GMT)",isLiked:!1,text:"Here your eyes will be drawn to an array of tropical and exotic birds, animals and fishes. The ground and flight birds, the Flamingos, Black Swans, Mandarin Ducks, Golden Pheasants, Parakeets, Doves, Macaws, Laughing Thrush and more makes the entire atmosphere an absolute wonder for the eyes. Mostly, just a folk of friendly and inquisitive birds living the good life. Then gaze upon the Snapping Turtles as they come out of their shells and move about calmly and peacefully. Looking at them, you might think of them as some prehistoric creature from the Triassic Period and though calm in nature, these turtles have a tendency to snap or strike defensively when they feel threatened, and they are indeed capable of delivering a serious bite so keep your hands to yourself on this one!",media:[{img:s("e1de")}],likes:276,comments:105,usersLiked:[{name:"Lai Lewandowski",img:s("fa7b")},{name:"Elicia Rieske",img:s("b690")},{name:"Darcey Nooner",img:s("ed5f")},{name:"Julee Rossignol",img:s("351c")},{name:"Jeffrey Gerondale",img:s("f2be")}],commentbox:"",usersCommented:[{comment:"Interesting",author:"Noor Shamiza Othman",img:s("ed5f"),time:"Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"},{comment:"Mudah… cepat and berbaloi harga lebih murah berbanding beli kat counter… terbaik!!!",author:"Amir Afsham Bin A aziz",img:s("fa7b"),time:"Mon Feb 26 2020 09:50:00 GMT+0000 (GMT)"}]},{author:"UnderWater World Admin",time:"Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)",isLiked:!1,text:"Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.",media:[{sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://goo.gl/xcCsDd"}],likes:269,comments:98,usersLiked:[{name:"Vennie Mostowy",img:s("9a5e")},{name:"Elicia Rieske",img:s("b690")},{name:"Julee Rossignol",img:s("351c")},{name:"Darcey Nooner",img:s("ed5f")},{name:"Elicia Rieske",img:s("b690")}],commentbox:"",usersCommented:[{comment:"I love cupcake danish jujubes sweet.",author:"Darcey Nooner",img:s("ed5f"),time:"Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"},{comment:"Wafer I love brownie jelly bonbon tart apple pie",author:"Lai Lewandowski",img:s("fa7b"),time:"Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"}]}],suggestedPages:[{img:s("74a7"),title:"Rockose",type:"Company"},{img:s("a243"),title:"The Devil's",type:"Clothing Store"},{img:s("9475"),title:"The Magician",type:"Public Figure"},{img:s("3607"),title:"AC/DC",type:"Music"},{img:s("f34a"),title:"eat hard",type:"restaurant / bar"},{img:s("c97c"),title:"B4B",type:"Beauty Store"},{img:s("32d1"),title:"Kylie Jenner",type:"Public Figure"},{img:s("7246"),title:"RDJ",type:"Actor"},{img:s("8e4f"),title:"Taylor Swift",type:"Music"}],polls:[{id:59,title:"Where is the best underwater marine aqua located in Malaysia?",options:[{text:"RDJ",value:"rdj",voted:58,usersVoted:[{name:"Tonia Seabold",avatar:s("bb8e")},{name:"Carissa Dolle",avatar:s("9a5e")},{name:"Kelle Herrick",avatar:s("f2be")},{name:"Len Bregantini",avatar:s("351c")},{name:"Demo User",avatar:s("3f31")},{name:"Tonia Seabold",avatar:s("bb8e")},{name:"Dirk Fornili",avatar:s("3423")}]},{text:"Chris Hemsworth",value:"chris hemsworth",voted:16,usersVoted:[{name:"Liliana Pecor",avatar:s("fa7b")},{name:"Kasandra Nalevanko",avatar:s("b7fa")}]},{text:"mark ruffalo",value:"mark ruffalo",voted:8,usersVoted:[{name:"Lorelei Lacsamana",avatar:s("fbb2")}]},{text:"Chris Evans",value:"chris evans",voted:16,usersVoted:[{name:"Jeanie Bulgrin",avatar:s("ed5f")},{name:"Graig Muckey",avatar:s("26fa")}]}]}],twitterFeeds:[{authorAvatar:s("bb8e"),authorUsername:"tiana59",authorDisplayName:"Tiana Vercetti",content:"I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.",tags:["js","vuejs"],time:"Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)"},{authorAvatar:s("bb8e"),authorUsername:"tiana59",authorDisplayName:"Tiana Vercetti",content:"Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.",tags:["python"],time:"Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)"},{authorAvatar:s("bb8e"),authorUsername:"tiana59",authorDisplayName:"Tiana Vercetti",content:"I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .",tags:[],time:"Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)"},{authorAvatar:s("bb8e"),authorUsername:"tiana59",authorDisplayName:"Tiana Vercetti",content:"Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.",tags:["django","vuejs"],time:"Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)"}],wasSidebarOpen:null}},computed:{mediaType:function(){var t=this;return function(e){if(e.img){var s=e.img.split(".").pop();if(t.mediaExtensions.img.includes(s))return"image"}else if(e.sources&&e.poster)return"video"}},playerOptions:function(){return function(t){return{height:"360",fluid:!0,autoplay:!1,muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:t.sources,poster:t.poster}}}},methods:{loadContent:function(){var t=this;this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-load-more-posts",scale:.45}),setTimeout((function(){t.$vs.loading.close("#button-load-more-posts > .con-vs-loading")}),3e3)}},components:{videoPlayer:o["videoPlayer"]},mounted:function(){this.wasSidebarOpen=this.$store.state.reduceButton,this.$store.commit("TOGGLE_REDUCE_BUTTON",!0)},beforeDestroy:function(){this.wasSidebarOpen||this.$store.commit("TOGGLE_REDUCE_BUTTON",!1)}}),n=r,l=(s("757b"),s("2877")),c=Object(l["a"])(n,a,i,!1,null,null,null);e["default"]=c.exports},"4f6b":function(t,e,s){},"6055d":function(t,e,s){t.exports=s.p+"img/user-05.d2e52538.jpg"},"70fb":function(t,e,s){t.exports=s.p+"img/demo-admin.e574e465.png"},7246:function(t,e,s){t.exports=s.p+"img/page-01.95678b82.jpg"},"74a7":function(t,e,s){t.exports=s.p+"img/page-09.ccdd96d2.jpg"},"757b":function(t,e,s){"use strict";var a=s("4f6b"),i=s.n(a);i.a},8043:function(t,e,s){t.exports=s.p+"img/user-06.74a75a96.jpg"},"8e4f":function(t,e,s){t.exports=s.p+"img/page-06.86573948.jpg"},9475:function(t,e,s){t.exports=s.p+"img/page-03.5bd4d3cc.jpg"},a243:function(t,e,s){t.exports=s.p+"img/page-08.711e4bd3.jpg"},a83b:function(t,e,s){t.exports=s.p+"img/user-04.3ac7ddd3.jpg"},acfb:function(t,e){t.exports="data:image/jpeg;base64,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"},adfa:function(t,e,s){t.exports=s.p+"img/user-09.ed018c7b.jpg"},bb8e:function(t,e,s){t.exports=s.p+"img/avatar-s-12.cd40c797.jpg"},c97c:function(t,e,s){t.exports=s.p+"img/page-04.abd96c26.jpg"},cc14:function(t,e,s){t.exports=s.p+"img/user-08.d01a17e3.jpg"},d4f6:function(t,e,s){t.exports=s.p+"img/cover.0a56bd90.jpg"},e1de:function(t,e,s){t.exports=s.p+"img/2.4b0ddd05.jpg"},f34a:function(t,e,s){t.exports=s.p+"img/page-07.e0a97708.jpg"},f583:function(t,e,s){t.exports=s.p+"img/user-07.c63e602a.jpg"},fb18:function(t,e,s){t.exports=s.p+"img/user-02.8342b4cb.jpg"}}]);
//# sourceMappingURL=chunk-38df579c.3406f82c.js.map