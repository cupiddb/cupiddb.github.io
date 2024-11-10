import{s as k,n as w}from"../chunks/scheduler.CQlsE29-.js";import{S as R,i as M,e as o,s as v,A as T,c as l,d as a,f as C,k as D,l as e,h as p,g as f}from"../chunks/index.xSuZ9O7b.js";import{v as B}from"../chunks/cupiddb-vs.DyDcAhkA.js";const A=!0,z=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"})),_=""+new URL("../assets/cupiddb-benchmark.Ct1SNp1A.png",import.meta.url).href;function q(x){let r,d,c,h,u,m,n,b=`<img class="h-96 w-full object-contain" src="${B}" alt="CupidDB logo"/>`,g,s,y=`<h1 class="mb-4 text-4xl">Benchmarking CupidDB Against Redis and Memcached</h1> <h2 class="mb-4 text-2xl">Introduction</h2> <p>CupidDB was designed specifically for caching and delivering large dataframes efficiently,
    leveraging the high-performance Apache Arrow format and the speed of Rust.
    Given these optimizations, I wanted to see how CupidDB compares against two well-known caching solutions,
    Redis and Memcached, especially in handling dataframes.
    This blog explores the results of my benchmark tests and how CupidDB performs under various data retrieval and filtering scenarios.</p> <br/> <h2 class="mb-4 text-2xl">How the Test Was Done</h2>
    Since CupidDB was built to handle large dataframe caching,
    I structured the benchmark around reading dataframes from cache. Here’s how the test was set up:
    <ul><li><strong>Dataframes Setup</strong>: We created 32 large dataframes, each with 5,000 rows and 1,000 columns,
        representing a substantial load. Each dataframe was stored under a unique key in each caching system.</li> <li><strong>Scenarios Tested</strong>: Four main scenarios were considered:
        <ul class="pl-8"><li>1. <strong>1 client</strong> retrieving a dataframe</li> <li>2. <strong>8 clients</strong> retrieving dataframes concurrently</li> <li>3. <strong>1 client</strong> filtering dataframes before retrieval</li> <li>4. <strong>8 clients</strong> filtering dataframes concurrently</li></ul></li> <li><strong>Benchmark Details</strong>: Each client performed 100 random get requests for dataframes, simulating a realistic cache access pattern.</li></ul>
    In all scenarios, CupidDB emerged as the fastest solution, showcasing its unique strengths.
    Let&#39;s dive into the results and discuss what they reveal.
  <br/> <div class="text-center text-sm"><img src="${_}" alt="CupidDB Benchmark"/>
    (Lower is better)</div> <br/> <h2 class="mb-4 text-2xl">Results</h2>
    The benchmark revealed that CupidDB outperformed Redis and Memcached in all four scenarios. Here’s a summary of the findings:
    <ul><li><strong>1. 1 Client Retrieving Dataframes</strong>: CupidDB was the fastest,
        although the reason is not entirely clear since no concurrency was involved. This scenario purely tested data retrieval speed.</li> <li><strong>2. 8 Clients Retrieving Dataframes Concurrently</strong>: CupidDB maintained its performance lead even with multiple clients,
        showing robust scaling capabilities.</li> <li><strong>3. 1 Client Filtering Dataframes</strong>: While Redis and Memcached performed similarly here, CupidDB outpaced both.
        Despite performing server-side filtering computations, CupidDB benefited from reducing the amount of data transferred.</li> <li><strong>4. 8 Clients Filtering Dataframes Concurrently</strong>: CupidDB continued to excel,
        even with multiple clients and filtering involved.
        Redis and Memcached showed no performance gain or reduction here, but CupidDB was markedly faster.</li></ul> <br/> <h2 class="mb-4 text-2xl">Why CupidDB is Faster in Retrieving Dataframes</h2> <p>The superior performance of CupidDB in single-client data retrieval is an intriguing result.
    Since there’s no concurrency to account for, the speed difference likely stems from CupidDB&#39;s optimized data handling.
    CupidDB stores and transfers data in the native Apache Arrow format,
    while Redis and Memcached need to pickle and unpickle dataframes during storage and retrieval.
    This native handling reduces processing overhead for CupidDB and could be one of the primary reasons for its lead.</p> <br/> <p>Additionally, CupidDB’s implementation in Rust, a language known for its low-level speed and efficiency,
    may further contribute to its fast retrieval times. As a specialized caching solution with fewer features,
    CupidDB is highly optimized for this specific purpose, unlike Redis and Memcached, which are more generalized caching systems.</p> <br/> <h2 class="mb-4 text-2xl">Concurrency and Multi-Client Performance</h2> <p>In the concurrent access scenarios (eight clients), CupidDB’s lead over Redis and Memcached remained strong,
    showing that it scales well with additional client load.
    The efficient memory handling and concurrency models in Rust likely play a significant role here,
    allowing CupidDB to maintain high throughput even with multiple requests.</p> <br/> <h2 class="mb-4 text-2xl">Filtering Dataframes: CupidDB’s Standout Feature</h2> <p>Filtering dataframes was the highlight of the benchmark, where CupidDB truly showcased its unique capability.
    CupidDB allows server-side filtering,
    meaning it processes filter conditions directly on the server before sending the filtered data back to the client.
    In contrast, Redis and Memcached can only return the full dataframe, requiring the client to handle any filtering.</p> <br/> <p>Despite adding computation on the server, CupidDB’s performance in filtering was faster than the other two databases.
    The filtering computation was so efficient that the reduced network data transfer outweighed any processing delay.
    This benefit scaled even with eight clients, underscoring CupidDB’s ability to handle intensive server-side filtering requests.</p> <br/> <h2 class="mb-4 text-2xl">The Power of Filtered Result Caching</h2> <p>CupidDB has an additional feature that wasn’t utilized in this benchmark: caching filtered results.
    If enabled, this would allow CupidDB to retrieve frequently requested filtered results even faster,
    likely further widening the performance gap with Redis and Memcached.
    While this feature was deliberately omitted to highlight raw filtering performance,
    it’s worth noting that this capability could significantly boost real-world applications where certain filtered dataframes are accessed frequently.</p> <br/> <h2 class="mb-4 text-2xl">Conclusion</h2> <p>The benchmark results demonstrate that CupidDB is a powerful option for caching dataframes,
    surpassing Redis and Memcached in both retrieval and filtering scenarios.
    Its efficient use of Apache Arrow,
    Rust’s speed, and server-side filtering make it an ideal choice for applications with high dataframe access and processing needs.
    If you’re working with dataframes and need a fast, optimized caching solution, CupidDB is worth considering.
    And with its ability to cache filtered results, CupidDB is poised to redefine what high-performance caching can achieve.</p> <br/> <p>Watt Iamsuri
    <br/>
    2024-11-11</p>`;return{c(){r=o("meta"),d=o("meta"),c=o("meta"),h=o("meta"),u=o("meta"),m=v(),n=o("div"),n.innerHTML=b,g=v(),s=o("div"),s.innerHTML=y,this.h()},l(t){const i=T("svelte-mg3i1g",document.head);r=l(i,"META",{property:!0,content:!0}),d=l(i,"META",{property:!0,content:!0}),c=l(i,"META",{property:!0,content:!0}),h=l(i,"META",{property:!0,content:!0}),u=l(i,"META",{property:!0,content:!0}),i.forEach(a),m=C(t),n=l(t,"DIV",{class:!0,"data-svelte-h":!0}),D(n)!=="svelte-phhtn2"&&(n.innerHTML=b),g=C(t),s=l(t,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-wqxugr"&&(s.innerHTML=y),this.h()},h(){document.title="CupidDB | Benchmarking CupidDB Against Redis and Memcached",e(r,"property","og:title"),e(r,"content","Benchmarking CupidDB Against Redis and Memcached"),e(d,"property","og:description"),e(d,"content","TLDR: CupidDB is 2x Faster than Redis! Here is the benchmark to back that up."),e(c,"property","og:image"),e(c,"content",B),e(h,"property","og:url"),e(h,"content","https://cupiddb.github.io/blog/benchmarking-cupiddb-redis-memcached"),e(u,"property","og:type"),e(u,"content","article"),e(n,"class",""),e(s,"class","container mx-auto my-6 px-2 md:px-32")},m(t,i){p(document.head,r),p(document.head,d),p(document.head,c),p(document.head,h),p(document.head,u),f(t,m,i),f(t,n,i),f(t,g,i),f(t,s,i)},p:w,i:w,o:w,d(t){t&&(a(m),a(n),a(g),a(s)),a(r),a(d),a(c),a(h),a(u)}}}class E extends R{constructor(r){super(),M(this,r,null,q,k,{})}}export{E as component,z as universal};
