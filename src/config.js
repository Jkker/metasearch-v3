export default [
  {
    name: 'Google',
    key: 'google',
    disabled: false,
    url: 'https://www.google.com/search?igu=1&pws=0&gl=us&gws_rd=cr&source=hp&newwindow=1&q=%s&oq=%s&safe=off',
    matchSite:
      /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?!tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$|(^https?:\/\/xn--flw351e\.ml\/search\?q=)/,
    preload: false,
    embeddable: true,
    weight: 10,
    url_scheme: '',
    lightness: 0.607843137254902,
    color: '#4285F4',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"></path></g></svg>',
  },
  {
    name: '百度',
    key: 'baidu',
    disabled: false,
    url: 'https://www.baidu.com/s?ie=utf-8&word=%s',
    matchSite: /^https?:\/\/www\.baidu\.com\/(?:s|baidu)/,
    preload: false,
    embeddable: true,
    weight: 9,
    lightness: 0.5078431372549019,
    color: '#556dea',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M5.927 12.497c2.063-.443 1.782-2.909 1.72-3.448-.101-.83-1.078-2.282-2.405-2.167-1.67.15-1.913 2.561-1.913 2.561-.226 1.115.54 3.497 2.598 3.054zm2.19 4.288c-.06.173-.195.616-.078 1.002.23.866.982.905.982.905h1.08v-2.64H8.944c-.52.154-.77.559-.827.733zm1.638-8.422c1.14 0 2.06-1.312 2.06-2.933 0-1.62-.92-2.93-2.06-2.93-1.137 0-2.06 1.31-2.06 2.93 0 1.621.923 2.933 2.06 2.933zm4.908.193c1.522.198 2.501-1.427 2.696-2.659.199-1.23-.784-2.658-1.862-2.904-1.08-.248-2.429 1.483-2.552 2.61-.147 1.38.197 2.758 1.718 2.953zm0 3.448c-1.865-2.905-4.513-1.723-5.4-.245-.881 1.477-2.256 2.41-2.451 2.658-.198.244-2.846 1.673-2.258 4.284.587 2.609 2.652 2.56 2.652 2.56s1.521.15 3.286-.246c1.766-.391 3.286.098 3.286.098s4.125 1.38 5.253-1.278c1.128-2.66-.637-4.038-.637-4.038s-2.356-1.823-3.732-3.793zm-6.008 7.75c-1.158-.231-1.619-1.021-1.677-1.156-.057-.137-.386-.772-.212-1.853.5-1.619 1.927-1.735 1.927-1.735h1.428v-1.755l1.215.02v6.479h-2.68zm4.59-.019c-1.196-.308-1.251-1.158-1.251-1.158v-3.412l1.251-.02v3.066c.077.328.483.387.483.387h1.271v-3.433h1.332v4.57h-3.086zm7.454-9.11c0-.59-.49-2.364-2.305-2.364-1.819 0-2.062 1.675-2.062 2.859 0 1.13.095 2.707 2.354 2.657 2.26-.05 2.013-2.56 2.013-3.152z"></path></g></svg>',
    q: 'wd',
  },
  {
    name: '知乎',
    key: 'zhihu',
    preload: false,
    disabled: false,
    url: 'https://www.zhihu.com/search?type=content&q=%s',
    matchSite: /^https?:\/\/www\.zhihu\.com\/search\?/i,
    embeddable: false,
    weight: 8,
    url_scheme: 'zhihu://search?q=%s',
    lightness: 0.5,
    color: '#0084FF',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.344 17.963l-1.688 1.074-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825-.402.483-.82.918-1.301 1.375-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856.43-.408.795-.79 1.142-1.206 1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2-1-2H13V5z"></path></g></svg>',
  },
  {
    name: 'bilibili',
    key: 'bilibili',
    preload: false,
    disabled: false,
    url: 'https://search.bilibili.com/all?keyword=%s',
    matchSite: /^https?:\/\/search\.bilibili\.com\/all/,
    q: 'keyword',
    embeddable: true,
    weight: 7,
    url_scheme: 'bilibili://search?keyword=%s',
    lightness: 0.6431372549019607,
    color: '#DF698C',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"></path></svg>',
  },
  {
    name: 'DDG',
    key: 'duckduckgo',
    url: 'https://duckduckgo.com/?q=%s&kaj=m&k1=-1&kn=1&kp=-2',
    matchSite: /^https?:\/\/duckduckgo\.com\/*/i,
    preload: false,
    embeddable: true,
    weight: 6,
    disabled: false,
    lightness: 0.6039215686274509,
    color: '#E37151',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.074 1 12S5.926 1 12 1s11 4.925 11 11-4.925 11-11 11zm10.219-11c0 4.805-3.317 8.833-7.786 9.925-.27-.521-.53-1.017-.749-1.438.645.249 1.93.718 2.208.615.376-.144.282-3.149-.14-3.245-.338-.075-1.632.837-2.141 1.209l.034.156c.078.397.144.993.03 1.247-.001.004-.002.01-.004.013a.218.218 0 0 1-.068.088c-.284.188-1.081.284-1.503.188a.516.516 0 0 1-.064-.02c-.694.396-2.01 1.109-2.25.971-.329-.188-.377-2.676-.329-3.288.035-.46 1.653.286 2.442.679.174-.163.602-.272.98-.31-.57-1.389-.99-2.977-.733-4.105 0 .002.002.002.002.002.356.248 2.73 1.05 3.91 1.027 1.18-.024 3.114-.743 2.903-1.323-.212-.58-2.135.51-4.142.324-1.486-.138-1.748-.804-1.42-1.29.414-.611 1.168.116 2.411-.256 1.245-.371 2.987-1.035 3.632-1.397 1.494-.833-.625-1.177-1.125-.947-.474.22-2.123.637-2.889.82.428-1.516-.603-4.149-1.757-5.3-.376-.376-.951-.612-1.603-.736-.25-.344-.654-.671-1.225-.977a5.772 5.772 0 0 0-3.595-.584l-.024.004-.034.004.004.002c-.148.028-.237.08-.357.098.148.016.705.276 1.057.418-.174.068-.412.108-.596.184a.828.828 0 0 0-.204.056c-.173.08-.303.375-.3.515.84-.086 2.082-.026 2.991.246-.644.09-1.235.258-1.661.482-.016.008-.03.018-.048.028-.054.02-.106.042-.152.066-1.367.72-1.971 2.405-1.611 4.424.323 1.824 1.665 8.088 2.29 11.064-3.973-1.4-6.822-5.186-6.822-9.639C1.781 6.356 6.356 1.781 12 1.781S22.219 6.356 22.219 12zM9.095 9.581a.758.758 0 1 0 0 1.516.758.758 0 0 0 0-1.516zm.338.702a.196.196 0 1 1 0-.392.196.196 0 0 1 0 .392zm4.724-1.043a.65.65 0 1 0 0 1.299.65.65 0 0 0 0-1.3zm.29.601a.168.168 0 1 1 0-.336.168.168 0 0 1 0 .336zM9.313 8.146s-.571-.26-1.125.09c-.554.348-.534.704-.534.704s-.294-.656.49-.978c.786-.32 1.17.184 1.17.184zm5.236-.052s-.41-.234-.73-.23c-.654.008-.831.296-.831.296s.11-.688.945-.55a.84.84 0 0 1 .616.484z"></path></svg>',
  },
  {
    name: 'Reddit',
    key: 'reddit',
    disabled: false,
    url: 'https://www.google.com/search?q=%s+site%3Areddit.com',
    matchSite: (url, query) =>
      url.includes('google.com') &&
      decodeURIComponent(query.get('q') ?? '')?.includes?.('site:reddit.com'),
    q: (url, query) =>
      decodeURIComponent(query.get('q') ?? '').replace?.('site:reddit.com', ''),
    preload: false,
    embeddable: true,
    weight: 6,
    url_scheme: '',
    lightness: 0.5372549019607843,
    color: '#eb5527',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path></svg>',
  },
  {
    name: 'YouTube',
    key: 'youtube',
    preload: false,
    disabled: false,
    url: 'https://www.youtube.com/results?search_query=%s',
    matchSite: /^https?:\/\/www\.youtube\.com\/results/,
    q: 'search_query',
    embeddable: true,
    weight: 6,
    url_scheme: 'youtube://YouTube.com/results?search_query=%s',
    lightness: 0.5254901960784314,
    color: '#ea3322',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path></g></svg>',
  },
  {
    name: 'Github',
    key: 'github',
    preload: false,
    disabled: false,
    url: 'https://github.com/search?q=%s',
    matchSite: /^https?:\/\/github\.com\/search/,
    embeddable: true,
    weight: 5,
    lightness: 0.09215686274509804,
    color: '#181717',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></g></svg>',
  },
  {
    name: 'Twitter',
    key: 'twitter',
    preload: false,
    disabled: false,
    url: 'https://twitter.com/search?q=%s',
    matchSite: /^https?:\/\/twitter\.com\/search/,
    embeddable: true,
    weight: 2,
    lightness: 0.5254901960784314,
    color: '#1da1f2',
    icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  },
  {
    name: 'Wolfram',
    key: 'wolfram',
    preload: false,
    disabled: false,
    url: 'https://www.wolframalpha.com/input?i=%s',
    matchSite: /^https?:\/\/www\.wolframalpha\.com\/input/,
    embeddable: true,
    weight: 4,
    lightness: 0.5254901960784314,
    color: '#e87242',
    icon: '<svg height="1em" width="1em" viewBox="0 0 20 20"><path d="M15.33 10l2.17-2.47-3.19-.71.33-3.29-3 1.33L10 2 8.35 4.86l-3-1.33.32 3.29-3.17.71L4.67 10 2.5 12.47l3.19.71-.33 3.29 3-1.33L10 18l1.65-2.86 3 1.33-.32-3.29 3.19-.71zm-2.83 1.5h-5v-1h5zm0-2h-5v-1h5z" fill="currentColor"></path></svg>',
    q: 'i',
  },
  {
    name: '今日头条',
    key: 'toutiao',
    preload: false,
    disabled: true,
    url: 'https://so.toutiao.com/search?keyword=%s',
    q: 'keyword',
    embeddable: true,
    weight: 4,
    lightness: 0.5764705882352941,
    color: '#dd5049',
    icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M1012.8 148.8v620.8h-32c-19.2 0-36.8 3.2-56 3.2l-49.6 3.2-84.8 3.2-52.8 3.2-81.6 3.2-52.8 3.2-78.4 3.2c-19.2 0-33.6 3.2-52.8 3.2l-84.8 6.4c-19.2 0-33.6 3.2-52.8 3.2l-84.8 3.2c-19.2 0-33.6 3.2-52.8 3.2l-81.6 6.4c-19.2 0-33.6 3.2-52.8 3.2l-56 3.2v-624h19.2c32-3.2 59.2-3.2 88-3.2l56-3.2 88-3.2 59.2-3.2 88-3.2 52.8-3.2 59.2-3.2 59.2-3.2 84.8-3.2 56-3.2 59.2-3.2 59.2-3.2 59.2-3.2 56-3.2c3.2-3.2 62.4-6.4 62.4-6.4zM785.6 411.2c9.6-3.2 16-9.6 25.6-12.8 28.8-12.8 56-28.8 81.6-40 9.6-3.2 12.8-9.6 12.8-19.2v-70.4c-6.4 0-12.8 3.2-16 3.2-28.8 3.2-56 3.2-84.8 3.2-16 0-33.6 3.2-49.6 3.2-25.6 0-46.4 3.2-72 3.2H664c-19.2-9.6-36.8-16-56-25.6l-3.2 3.2c-22.4 36.8-46.4 72-68.8 108.8-3.2 6.4 0 6.4 3.2 6.4 16 6.4 32 12.8 46.4 19.2 9.6 3.2 12.8 0 16-6.4 9.6-16 22.4-33.6 32-49.6 0-3.2 3.2-3.2 6.4-3.2 9.6 0 16 0 25.6-3.2 16 0 33.6-3.2 49.6-3.2 25.6 0 46.4-3.2 72-3.2h9.6c12.8 0 25.6 0 36.8-3.2 3.2 9.6 0 9.6-6.4 12.8-32 16-65.6 32-96 46.4-3.2 0-6.4 3.2-9.6 0-22.4-6.4-43.2-16-62.4-25.6-16-6.4-16-6.4-25.6 9.6 0 3.2-3.2 3.2-3.2 6.4-6.4 9.6-12.8 16-16 25.6l49.6 19.2c-28.8 12.8-52.8 28.8-81.6 40-3.2 3.2-6.4 3.2-9.6 3.2h-25.6v46.4h43.2c3.2 0 6.4 0 9.6-3.2 36.8-19.2 72-33.6 108.8-52.8 12.8-6.4 25.6-9.6 40-3.2 28.8 12.8 56 22.4 84.8 32 16 6.4 28.8 12.8 43.2 12.8 6.4 0 12.8 0 19.2-3.2l19.2-3.2v-49.6c-6.4 0-12.8 3.2-19.2 3.2h-19.2c-12.8-3.2-25.6-9.6-33.6-12.8-27.2-4.8-43.2-8-57.6-14.4z m-459.2-108.8V512c-19.2 0-36.8 3.2-56 3.2-28.8 3.2-56 3.2-84.8 3.2-16 0-28.8 0-43.2 3.2-9.6 0-19.2 0-28.8 3.2v49.6l147.2-9.6c-19.2 25.6-36.8 46.4-52.8 72-6.4 9.6-16 16-28.8 16H142.4c-9.6 0-19.2 0-28.8 3.2v43.2c0 3.2 3.2 3.2 6.4 3.2 28.8-3.2 56-3.2 88-6.4 12.8 0 28.8 0 40-3.2 3.2 0 3.2 0 6.4-3.2 9.6-12.8 16-22.4 25.6-33.6 22.4-28.8 43.2-56 62.4-84.8 6.4-6.4 9.6-16 22.4-16 28.8 0 56-3.2 84.8-3.2 12.8 0 25.6 0 33.6-3.2 3.2 0 6.4-3.2 6.4-3.2v-40l-3.2-3.2c-16 0-32 0-46.4 3.2-12.8 0-25.6 3.2-36.8 3.2V299.2l-76.8 3.2z m206.4 268.8h6.4c16 0 32-3.2 43.2-3.2 16 0 32 0 46.4-3.2h9.6l43.2-3.2v102.4l75.2-3.2v-102.4c6.4 0 12.8-3.2 19.2-3.2 19.2 0 33.6-3.2 52.8-3.2 25.6 0 46.4-3.2 72-3.2h6.4v-49.6c-12.8 0-28.8 3.2-40 3.2-25.6 0-46.4 3.2-72 3.2h-6.4c-9.6 0-19.2 0-32 3.2v-25.6l-75.2 3.2V512c-19.2 0-36.8 3.2-56 3.2-25.6 0-46.4 3.2-72 3.2-6.4 0-12.8 0-19.2 3.2-1.6 1.6-1.6 49.6-1.6 49.6z m-172.8-3.2l56 115.2 81.6-3.2v-3.2c-16-33.6-33.6-65.6-49.6-99.2-3.2-9.6-9.6-12.8-19.2-9.6-9.6 0-19.2 0-28.8 3.2-11.2-3.2-24-3.2-40-3.2z m172.8 108.8h9.6c19.2 0 36.8-3.2 56-3.2 6.4 0 6.4-3.2 9.6-6.4 12.8-22.4 25.6-43.2 33.6-68.8 3.2-6.4 6.4-16 12.8-22.4-6.4 0-12.8 3.2-19.2 3.2-16 0-28.8 0-43.2 3.2-6.4 0-12.8 3.2-16 9.6-3.2 9.6-9.6 16-12.8 22.4l-30.4 62.4z m387.2-22.4v-3.2l-46.4-81.6c-3.2-3.2-6.4-6.4-9.6-6.4-19.2 3.2-36.8 3.2-56 3.2-3.2 0-9.6 0-12.8 3.2 16 28.8 33.6 56 49.6 84.8 0 3.2 3.2 6.4 6.4 6.4h46.4c9.6-6.4 16-6.4 22.4-6.4zM286.4 486.4c-16-22.4-32-40-46.4-59.2-6.4-9.6-12.8-16-25.6-16-16 3.2-32 3.2-46.4 3.2-6.4 0-12.8 0-16 3.2v3.2c16 19.2 32 40 46.4 59.2 6.4 9.6 12.8 12.8 25.6 12.8 19.2-3.2 36.8-3.2 59.2-3.2 0 0 0-3.2 3.2-3.2z m1.6-91.2c-3.2-3.2-3.2-6.4-6.4-9.6-12.8-16-25.6-32-36.8-49.6-9.6-9.6-16-19.2-32-16-12.8 3.2-25.6 0-36.8 3.2-9.6 0-16 0-25.6 3.2 19.2 25.6 36.8 49.6 56 72 0 3.2 3.2 3.2 6.4 3.2 16 0 32-3.2 46.4-3.2 1.6 0 28.8-3.2 28.8-3.2z"></path></svg>',
  },
  {
    name: '微博',
    key: 'weibo',
    preload: false,
    disabled: false,
    url: 'https://s.weibo.com/weibo?q=%s',
    matchSite: /^https?:\/\/s\.weibo\.com\/weibo\//i,
    embeddable: true,
    weight: 3.5,
    url_scheme: 'sinaweibo://searchall?q=%s',
    lightness: 0.5156862745098039,
    color: '#d33436',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M17.525 11.378c1.263.392 2.669 1.336 2.669 3.004 0 2.763-3.98 6.239-9.964 6.239-4.565 0-9.23-2.213-9.23-5.852 0-1.902 1.204-4.102 3.277-6.177 2.773-2.77 6.004-4.033 7.219-2.816.537.537.588 1.464.244 2.572-.178.557.525.25.525.25 2.24-.938 4.196-.994 4.909.027.38.543.343 1.306-.008 2.19-.163.407.048.471.36.563zm-7.282 7.939c3.641-.362 6.401-2.592 6.167-4.983-.237-2.391-3.382-4.038-7.023-3.677-3.64.36-6.403 2.59-6.167 4.98.237 2.394 3.382 4.039 7.023 3.68zM6.16 14.438c.754-1.527 2.712-2.39 4.446-1.94 1.793.463 2.707 2.154 1.976 3.8-.744 1.682-2.882 2.578-4.695 1.993-1.752-.566-2.493-2.294-1.727-3.853zm1.446 2.587c.568.257 1.325.013 1.676-.55.346-.568.163-1.217-.407-1.459-.563-.237-1.291.008-1.64.553-.354.547-.189 1.202.371 1.456zm2.206-1.808c.219.092.501-.012.628-.231.123-.22.044-.466-.178-.548-.216-.084-.486.018-.613.232-.123.214-.054.458.163.547zM19.873 9.5a.725.725 0 1 1-1.378-.451 1.38 1.38 0 0 0-.288-1.357 1.395 1.395 0 0 0-1.321-.425.723.723 0 1 1-.303-1.416 2.836 2.836 0 0 1 3.29 3.649zm-3.916-6.575A5.831 5.831 0 0 1 21.5 4.72a5.836 5.836 0 0 1 1.22 5.704.838.838 0 0 1-1.06.54.844.844 0 0 1-.542-1.062 4.143 4.143 0 0 0-4.807-5.327.845.845 0 0 1-.354-1.65z"></path></g></svg>',
  },
  // {
  //   name: "网盘小站",
  //   key: "wpxz",
  //   url: "https://wpxz.org/?q=%s",

  //   preload: false,
  //   embeddable: true,
  //   weight: 4,
  //   disabled: false,
  //   url_scheme: "",
  //   lightness: 0.6607843137254902,
  //   color: "#5476fd",
  //   icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path></svg>',
  // },
  {
    name: 'Quora',
    key: 'quora',
    url: 'https://www.google.com/search?q=%s+site%3Aquora.com',
    matchSite: (url, query) =>
      url.includes('google.com') &&
      decodeURIComponent(query.get('q') ?? '')?.includes?.('site:quora.com'),
    q: (url, query) =>
      decodeURIComponent(query.get('q') ?? '').replace?.('site:quora.com', ''),
    url_scheme: '',
    preload: false,
    embeddable: true,
    weight: 3,
    disabled: false,
    lightness: 0.42549019607843136,
    color: '#aa382f',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.738 18.701c-.831-1.635-1.805-3.287-3.708-3.287-.362 0-.727.061-1.059.209l-.646-1.289c.786-.678 2.058-1.214 3.693-1.214 2.544 0 3.851 1.229 4.888 2.792.613-1.335.904-3.14.904-5.375 0-5.582-1.744-8.447-5.822-8.447-4.018 0-5.757 2.865-5.757 8.447 0 5.553 1.739 8.389 5.757 8.389.64 0 1.22-.069 1.75-.225zm.996 1.947c-.881.237-1.817.366-2.743.366-5.352 0-10.59-4.269-10.59-10.478C.402 4.271 5.639 0 10.991 0c5.441 0 10.628 4.238 10.628 10.537 0 3.504-1.635 6.351-4.01 8.191.764 1.148 1.543 1.914 2.652 1.914 1.199 0 1.68-.915 1.77-1.649h1.557c.092.974-.402 5.007-4.766 5.007-2.652 0-4.047-1.528-5.096-3.328l.008-.024z"></path></svg>',
  },
  {
    name: 'Bing 词典',
    key: 'bingdict',
    url: 'https://cn.bing.com/dict/search?q=%s',
    matchSite: 'https://cn.bing.com/dict/search',
    embeddable: false,
    preload: false,
    weight: 3,
    disabled: false,
    url_scheme: '',
    lightness: 0.6,
    color: '#09ABA0',
    icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 192 192" stroke="currentColor" fill="currentColor" height="1em" width="1em"> <path fill="#02A99E" opacity="1" stroke="none" d="M125.938271,139.999985C125.938263,148.148605 125.938263,155.797226 125.938263,164.023041C98.843987,158.680450 72.166801,153.420120 45.270416,148.116562C45.270416,114.459473 45.270416,81.037483 45.270416,46.967846C62.228786,43.506916 79.376663,40.007309 97.039154,36.402676C97.039154,44.197578 97.039154,51.320023 97.039154,58.639111C103.398552,60.409878 109.443642,62.093124 115.979416,63.913002C115.979416,53.301517 115.979416,43.060650 115.979416,32.408718C119.249802,31.582613 122.226326,30.830734 125.938278,29.893085C125.938278,66.716309 125.938278,103.108154 125.938271,139.999985M105.556885,95.417641C98.872597,92.803558 92.188316,90.189476 85.170311,87.444878C85.292763,94.447502 88.210686,98.464058 95.248993,100.227272C88.292999,103.790497 82.593506,106.710068 76.366074,109.900085C78.324829,106.175674 80.642792,103.612091 80.932571,100.836739C81.552238,94.901794 81.284760,88.849625 81.002586,82.863297C80.936310,81.457268 79.673637,79.629036 78.427383,78.856766C75.826019,77.244774 72.868401,76.207695 69.365799,74.621307C69.365799,85.588722 69.771385,95.726028 69.216400,105.810471C68.873695,112.037827 70.771362,116.146141 76.053902,119.338562C78.356873,120.730324 79.861282,121.227829 82.227722,119.691635C87.390663,116.340034 92.520729,112.793396 98.083679,110.240456C104.462219,107.313217 107.190498,103.095993 105.556885,95.417641z" /> <path fill="#09ABA0" opacity="1" stroke="none" d="M134.234467,141.672394C134.232941,109.270256 134.232941,77.336044 134.232941,45.155708C138.008377,45.155708 141.253082,45.155708 144.758194,45.155708C144.758194,78.362305 144.758194,111.410103 144.758194,145.347412C141.243271,143.067505 136.426208,148.442032 134.234467,141.672394z" /></svg>',
  },
  {
    name: '有道',
    key: 'youdao',
    preload: false,
    disabled: false,
    url: 'https://dict.youdao.com/result?word=%s&lang=en',
    matchSite: /^https?:\/\/dict\.youdao\.com\/(m\/)?result/i,
    q: 'word',
    embeddable: true,
    weight: 3,
    lightness: 0.484313725490196,
    color: '#E31436',
    icon: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata><g transform="translate(0.000000,24.000000) scale(0.002344,-0.002344)" stroke="none"><path d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0 -5120z m3193 1849 c133 -67 244 -123 246 -125 7 -6 -33 -86 -113 -229 -40 -71 -72 -131 -71 -133 4 -5 1054 37 1210 49 137 10 391 38 491 54 l41 7 -13 -101 c-8 -56 -16 -107 -20 -113 -13 -20 -135 -69 -237 -93 -119 -29 -266 -51 -392 -60 -106 -7 -1183 -55 -1237 -55 -36 0 -38 -3 -134 -142 -53 -79 -117 -169 -141 -200 -24 -32 -40 -58 -34 -58 5 0 47 14 93 31 190 70 460 127 706 149 172 16 530 8 627 -14 302 -69 479 -200 553 -409 44 -125 42 -226 -12 -606 -25 -179 -46 -330 -46 -337 0 -7 19 -24 43 -37 23 -13 99 -56 168 -95 278 -155 389 -175 473 -82 99 110 74 281 -57 379 -43 32 -221 127 -269 143 -9 3 -2 72 27 279 21 151 41 277 44 281 4 5 47 -13 96 -38 347 -178 524 -402 542 -684 13 -213 -90 -420 -271 -545 -30 -21 -53 -41 -51 -46 8 -12 288 -162 399 -214 332 -154 676 -256 1012 -300 404 -53 790 -36 1118 50 257 67 530 200 726 353 l65 51 7 -62 c4 -34 5 -70 2 -81 -9 -29 -229 -250 -324 -326 -302 -240 -653 -393 -1019 -444 -144 -20 -419 -21 -581 -1 -603 74 -1387 372 -2107 801 l-122 72 -6 -41 c-4 -23 -28 -190 -53 -372 l-48 -330 -74 -3 c-149 -7 -467 39 -655 93 -240 70 -406 158 -535 285 -70 69 -95 101 -129 170 -124 252 -84 532 102 714 164 161 389 230 741 225 l181 -2 19 131 c11 73 16 135 12 140 -4 4 -72 6 -150 5 -438 -7 -772 -137 -1026 -399 -208 -215 -329 -465 -415 -857 -43 -196 -75 -268 -159 -351 -66 -66 -150 -113 -252 -141 -54 -15 -304 -34 -304 -23 0 2 24 51 54 109 97 185 170 437 226 777 32 193 150 1008 150 1037 0 19 4 21 -152 -111 -110 -95 -235 -177 -328 -216 -128 -53 -276 -50 -346 8 -25 21 -27 25 -13 34 217 131 441 362 689 710 78 110 269 410 303 477 l17 31 -198 -1 c-220 -2 -237 2 -312 69 -55 50 -80 121 -80 229 0 47 3 85 6 85 3 0 40 -17 82 -37 l76 -38 261 2 c143 1 279 5 301 8 l41 6 76 157 c63 132 178 392 200 455 4 9 9 17 12 17 3 0 114 -55 248 -121z m4670 0 c133 -67 244 -123 246 -125 7 -6 -62 -83 -189 -213 -67 -68 -119 -125 -117 -127 13 -14 537 31 722 61 49 8 90 13 91 12 1 -1 -5 -49 -12 -107 -10 -76 -19 -108 -31 -118 -63 -46 -313 -110 -518 -131 -91 -10 -477 -31 -567 -31 -32 0 -51 -12 -150 -97 l-113 -98 170 -6 c528 -20 755 -185 755 -548 0 -43 -38 -335 -85 -666 -47 -324 -93 -641 -102 -703 l-16 -112 -40 -11 c-201 -54 -469 -83 -767 -84 -357 0 -573 31 -850 121 -130 42 -420 176 -420 194 0 5 13 91 30 192 36 221 164 1123 180 1263 16 145 14 140 67 163 121 51 352 114 551 149 39 7 51 17 126 108 46 55 82 102 80 104 -1 2 -178 -5 -393 -14 -424 -20 -466 -17 -546 29 -54 32 -90 86 -111 166 -15 58 -15 162 -1 177 3 2 31 -9 63 -26 103 -51 125 -54 407 -46 233 7 258 9 254 24 -3 9 -38 90 -77 181 -40 91 -73 176 -73 190 -2 22 15 31 241 128 134 57 246 102 248 100 2 -2 17 -98 34 -214 42 -290 56 -373 63 -380 3 -4 40 -3 81 1 l74 7 155 206 c85 114 184 251 221 305 37 53 69 97 72 97 2 0 113 -55 247 -121z m-2518 -634 c210 -127 366 -294 433 -465 34 -89 44 -139 44 -235 0 -76 -20 -198 -38 -227 -2 -3 -28 18 -57 49 -102 109 -258 218 -440 309 -50 26 -93 48 -95 49 -3 3 64 490 73 533 3 12 9 22 13 22 5 0 34 -16 67 -35z"></path><path d="M3530 5629 c-101 -11 -254 -45 -348 -75 -97 -32 -247 -105 -290 -141 l-33 -28 -39 -269 c-22 -147 -40 -270 -40 -271 0 -2 48 45 108 104 216 216 506 365 864 445 122 27 333 56 410 56 l49 0 -15 29 c-35 66 -135 122 -261 146 -83 16 -280 18 -405 4z"></path><path d="M3710 4331 c-92 -28 -169 -100 -190 -176 -8 -27 -11 -75 -8 -119 10 -147 95 -260 260 -340 93 -46 197 -80 209 -67 4 3 28 154 55 334 40 276 46 330 34 337 -46 29 -297 50 -360 31z"></path><path d="M6958 5735 c-125 -18 -233 -47 -323 -89 -61 -28 -74 -38 -79 -62 -13 -62 -47 -306 -44 -314 2 -4 32 9 66 30 208 126 578 210 930 210 108 0 113 7 60 86 -37 54 -112 105 -193 130 -70 22 -295 27 -417 9z"></path><path d="M6964 5160 c-231 -31 -431 -121 -492 -223 -18 -30 -58 -244 -48 -254 3 -3 17 4 33 15 47 33 163 88 254 120 171 60 398 97 672 108 l166 7 7 46 c4 25 8 66 8 90 l1 44 -50 14 c-145 39 -391 53 -551 33z"></path><path d="M6869 4575 c-175 -24 -330 -79 -423 -150 -45 -35 -93 -112 -78 -127 18 -18 176 -66 294 -90 149 -29 443 -32 583 -5 110 22 205 48 205 56 0 3 9 62 20 131 11 69 20 128 20 131 0 11 -162 48 -256 59 -116 13 -245 11 -365 -5z"></path></g></svg>',
  },
  {
    name: 'Amazon',
    key: 'amazon',
    preload: false,
    disabled: false,
    url: 'https://www.amazon.com/s?k=%s',
    matchSite: 'amazon.com/s',
    q: 'k',
    embeddable: true,
    weight: 2,
    lightness: 0.5,
    color: '#FF9900',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21.996 18.23c0 .727-.405 2.127-1.314 2.896-.182.14-.365.061-.285-.143.265-.648.872-2.147.587-2.492-.2-.262-1.03-.243-1.738-.182-.324.041-.607.06-.828.105-.203.017-.245-.163-.041-.303.262-.185.545-.325.87-.428 1.15-.344 2.48-.137 2.67.083.036.042.08.16.08.463zm-1.921 1.294a7.426 7.426 0 0 1-.83.55c-2.122 1.275-4.87 1.943-7.258 1.943-3.843 0-7.28-1.417-9.888-3.788-.223-.182-.038-.446.223-.303 2.81 1.64 6.288 2.632 9.889 2.632 2.265 0 4.708-.424 7.035-1.336.162-.061.344-.144.503-.202.367-.165.69.243.326.504zm-6.17-11.03c0-1.041.041-1.654-.304-2.18-.306-.433-.833-.693-1.568-.652-.798.044-1.655.567-1.874 1.526-.042.22-.171.436-.436.483l-2.436-.31c-.174-.04-.438-.173-.352-.521C7.458 4.088 9.81 3.129 12.033 3h.523c1.22 0 2.787.349 3.79 1.264 1.217 1.136 1.088 2.662 1.088 4.32v3.927c0 1.178.477 1.7.958 2.314.13.219.174.477-.045.655-.48.435-1.394 1.219-1.917 1.654-.174.133-.488.147-.61.045-.77-.645-.958-1.003-1.435-1.658-.83.871-1.526 1.352-2.355 1.613a7.035 7.035 0 0 1-1.784.216c-2.09 0-3.746-1.303-3.746-3.88 0-2.049 1.09-3.442 2.7-4.101 1.61-.66 3.95-.87 4.704-.874zm-.478 5.192c.52-.872.477-1.586.477-3.185-.651 0-1.306.045-1.871.178-1.045.303-1.874.961-1.874 2.355 0 1.09.567 1.832 1.525 1.832.132 0 .248-.016.349-.045.67-.186 1.088-.522 1.394-1.135z"></path></g></svg>',
  },
  {
    name: 'eBay',
    key: 'ebay',
    url: 'https://www.ebay.com/sch/i.html?_nkw=%s',
    matchSite: 'ebay.com/sch',
    q: '_nkw',
    preload: false,
    embeddable: true,
    weight: 2,
    disabled: false,
    lightness: 0.4862745098039215,
    color: '#4164ea',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z"></path></svg>',
  },
  {
    name: '京东',
    key: 'jing-dong',
    preload: false,
    disabled: false,
    url: 'https://sou.m.jd.com/bases/m/searchKeyword.htm?keyword=%s',
    matchSite: 'sou.m.jd.com/bases/m/searchKeyword.htm',
    q: 'keyword',
    embeddable: true,
    weight: 1,
    url_scheme:
      'openapp.jdmobile://virtual?params={"des":"productList","keyWord":"%s","from":"search","category":"jump"}',
    lightness: 0.4941176470588235,
    color: '#E1251B',
    icon: '<svg role="img" viewBox="0 0 1344 1024"><path d="M430.08 0H288v617.92a477.44 477.44 0 0 1-15.04 147.52A115.2 115.2 0 0 1 224 835.52a243.2 243.2 0 0 1-96 45.44L0 896v128h11.84l183.04-24.32a416 416 0 0 0 135.68-67.2c66.56-58.56 101.44-147.52 101.44-265.92zM1344 512a609.6 609.6 0 0 0-38.4-224 416 416 0 0 0-107.52-160c-96-84.16-236.16-128-419.2-128h-209.92v1024h208.32c183.04 0 322.24-44.48 419.2-130.56a374.08 374.08 0 0 0 109.12-160A596.16 596.16 0 0 0 1344 512z m-239.68-291.52a261.12 261.12 0 0 1 73.6 119.36 500.48 500.48 0 0 1 27.84 172.16 470.08 470.08 0 0 1-27.84 168 249.28 249.28 0 0 1-73.6 120c-69.12 65.92-173.76 96-310.4 96H704V124.16h90.24c136.64 0 241.28 32 310.4 97.92z" p-id="1894"></path></svg>',
  },
  {
    name: '淘宝',
    key: 'taobao',
    preload: false,
    disabled: false,
    url: 'https://s.taobao.com/search?q=%s',
    matchSite: 's.taobao.com/search',
    embeddable: true,
    weight: 1,
    url_scheme: 'taobao://s.taobao.com?q=%s',
    lightness: 0.5196078431372548,
    color: '#E94F20',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M3.576 8.277l-1.193 1.842 2.2 1.371s1.464.754.763 2.169c-.65 1.338-3.846 4.27-3.846 4.27l2.862 1.798c1.984-4.326 1.85-3.75 2.347-5.306.512-1.58.624-2.794-.242-3.677-1.113-1.125-1.238-1.23-2.891-2.467zm1.564-.694c1.04 0 1.883-.758 1.883-1.693 0-.943-.843-1.701-1.883-1.701-1.048 0-1.887.762-1.887 1.701.005.931.84 1.693 1.887 1.693zm17.005.21s-.624-4.87-11.207-1.854c.455-.795.669-1.307.669-1.307l-2.64-.75s-1.07 3.508-2.972 5.14c0 0 1.846 1.073 1.826 1.04a17.07 17.07 0 0 0 1.407-1.596c.424-.19.83-.363 1.226-.524-.492.887-1.278 2.218-2.068 3.056l1.112.984s.762-.738 1.589-1.62h.943v1.636H8.345v1.306h3.685v3.133l-.14-.004c-.408-.02-1.037-.089-1.287-.484-.298-.484-.077-1.359-.064-1.903H7.995l-.093.052s-.935 4.205 2.689 4.113c3.386.092 5.33-.956 6.265-1.677l.37 1.394 2.09-.882-1.416-3.484-1.693.536.314 1.19c-.427.33-.93.572-1.467.754v-2.738h3.592v-1.31h-3.592v-1.637h3.604V9.051h-6.41c.464-.569.822-1.089.92-1.415l-1.122-.307c4.798-1.733 7.47-1.435 7.45 1.403v7.475s.283 2.564-2.636 2.383l-1.58-.343-.367 1.512s6.817 1.967 7.374-3.314c.552-5.282-.142-8.652-.142-8.652z"></path></g></svg>',
  },
  {
    name: 'MDN',
    key: 'mdnwebdocs',
    preload: false,
    disabled: false,
    url: 'https://developer.mozilla.org/en-US/search?q=%s',
    matchSite: 'developer.mozilla.org/en-US/search',
    embeddable: true,
    weight: -1,
    lightness: 0,
    color: '#000000',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0v24h24V0zm10.564 4.969c.667-.047 1.001.066 1.59.242l.436.13.152.046.557.17c.365.099.748.105 1.115.017a2.033 2.033 0 011.48.174c.409.233.684.648.737 1.115.048.413.288.78.648.989.537.293 1.096.538 1.672.736.407.156.815.331 1.219.488.2.077.377.203.514.37a.87.87 0 01.197.49c.025.359.068.722.086 1.084h-.002c.028.5-.08.997-.317 1.439-.087.165-.183.321-.263.486a.616.616 0 01-.635.367.417.417 0 00-.277.09c-.246.161-.497.32-.75.471-.35.193-.77.216-1.141.06a5.36 5.36 0 00-1.908-.351 2.11 2.11 0 00-1.7.775 2.62 2.62 0 00-.38.77c-.223.55-.414 3.838-.414 4.676 0 0-3.161-.615-6.13-3.653l.774-2.03H5.4l1.754-1.856H4.14l1.752-1.858H3.029l3.188-3.383a7.349 7.349 0 013.549-1.95c.318-.055.576-.089.798-.104z"></path></svg>',
  },
  {
    name: '微信',
    key: 'wechat',
    preload: false,
    disabled: true,
    url: 'https://weixin.sogou.com/weixin?p=01030402&query=%s&type=2&ie=utf8',
    q: 'query',
    embeddable: true,
    weight: -2,
    lightness: 0.39215686274509803,
    color: '#07C160',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.574 13.711a.91.91 0 0 0 .898-.898c0-.498-.399-.898-.898-.898s-.898.4-.898.898c0 .5.4.898.898.898zm-4.425 0a.91.91 0 0 0 .898-.898c0-.498-.4-.898-.898-.898-.5 0-.898.4-.898.898 0 .5.399.898.898.898zm6.567 5.04a.347.347 0 0 0-.172.37c0 .048 0 .097.025.147.098.417.294 1.081.294 1.106 0 .073.025.122.025.172a.22.22 0 0 1-.221.22c-.05 0-.074-.024-.123-.048l-1.449-.836a.799.799 0 0 0-.344-.098c-.073 0-.147 0-.196.024-.688.197-1.4.295-2.161.295-3.66 0-6.607-2.457-6.607-5.505 0-3.047 2.947-5.505 6.607-5.505 3.659 0 6.606 2.458 6.606 5.505 0 1.647-.884 3.146-2.284 4.154zM16.673 8.099a9.105 9.105 0 0 0-.28-.005c-4.174 0-7.606 2.86-7.606 6.505 0 .554.08 1.09.228 1.6h-.089a9.963 9.963 0 0 1-2.584-.368c-.074-.025-.148-.025-.222-.025a.832.832 0 0 0-.418.123l-1.748 1.005c-.05.025-.099.05-.148.05a.273.273 0 0 1-.27-.27c0-.074.024-.123.049-.197.024-.024.246-.834.369-1.324 0-.05.024-.123.024-.172a.556.556 0 0 0-.221-.442C2.058 13.376 1 11.586 1 9.598 1 5.945 4.57 3 8.95 3c3.765 0 6.93 2.169 7.723 5.098zm-5.154.418c.573 0 1.026-.477 1.026-1.026 0-.573-.453-1.026-1.026-1.026s-1.026.453-1.026 1.026.453 1.026 1.026 1.026zm-5.26 0c.573 0 1.027-.477 1.027-1.026 0-.573-.454-1.026-1.027-1.026-.572 0-1.026.453-1.026 1.026s.454 1.026 1.026 1.026z"></path></g></svg>',
  },
];
