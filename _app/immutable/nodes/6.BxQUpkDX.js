import{s as T,n as g}from"../chunks/scheduler.CQlsE29-.js";import{S as B,i as k,e as s,s as v,A,c as l,d as n,f as D,k as x,l as a,h as u,g as b}from"../chunks/index.xSuZ9O7b.js";import{l as C}from"../chunks/cupiddb-logo-blog.9uv5MjyC.js";const _=!0,E=Object.freeze(Object.defineProperty({__proto__:null,prerender:_},Symbol.toStringTag,{value:"Module"}));function M(I){let o,d,c,h,p,m,r,y=`<img class="h-96 w-full object-contain" src="${C}" alt="CupidDB logo"/>`,f,i,w=`<h1 class="mb-4 text-4xl">Introducing... CupidDB!</h1> <p>Hello, world! I’m excited to share with you my latest project: CupidDB,
    an in-memory database designed for performance and efficiency.
    After eight years of coding professionally and working with numerous open-source projects,
    I felt the urge to give back to the community.
    For a long time, I was unsure about what and how I should contribute to the open-source community until...</p> <br/> <h2 class="mb-4 text-2xl">The Challenge</h2> <p>Recently, I faced a challenge that many developers encounter when working with data-intensive applications.
    I needed to cache a large pandas DataFrame and share it among multiple clients.
    Initially, I turned to Redis, known for its speed and reliability as a caching solution.
    While Redis excelled at caching, it quickly became apparent that it is not ideal for my problem.</p> <br/> <p>The crux of the issue was that my Python clients required only a portion of the DataFrame.
    This meant they were not only consuming more bandwidth than necessary but also utilizing extra memory to load the entire DataFrame,
    only to discard a significant portion of it once it was in memory.
    This inefficiency was frustrating and prompted me to think:
    wouldn’t it be great if there was an in-memory database that could filter DataFrames on the server side,
    allowing clients to retrieve only the data they need?</p> <br/> <h2 class="mb-4 text-2xl">Enter CupidDB</h2> <p>This realization sparked the idea for CupidDB.
    My goal was to create a solution that combines the speed of Redis with the ability to filter DataFrames server-side,
    effectively eliminating the need for clients to load unnecessary data.
    I decided to write CupidDB in Rust, a language known for its performance and safety,
    to ensure that the database would be both fast and reliable.</p> <br/> <p>To facilitate efficient communication between the server and clients, CupidDB uses the Apache Arrow columnar format.
    This choice allows for blazing-fast serialization and deserialization of data,
    making it incredibly efficient for transmitting data between the database and clients.</p> <br/> <h2 class="mb-4 text-2xl">The Name</h2> <p>As I was brainstorming names for this project, I wanted something that encapsulated the essence of what CupidDB does.
    Given that the database stores and sends data in the Apache Arrow format,
    I envisioned it as a system that &quot;shoots&quot; arrow data to its clients.
    This concept led me to the name &quot;CupidDB&quot;.</p> <br/> <h2 class="mb-4 text-2xl">The Authors</h2> <p>CupidDB is a collaborative effort. I had the pleasure of working with Anon Ongsakul to bring this project to life.
    Anon was instrumental in developing the data filtering capabilities that allow CupidDB to serve clients efficiently.</p> <br/> <h2 class="mb-4 text-2xl">A Contribution to the Open Source Community</h2> <p>With CupidDB, I hope to contribute a valuable tool to the open-source community.
    It’s been rewarding to develop a solution that not only addresses my needs but can also help others facing similar challenges.
    As developers, we constantly encounter obstacles that inspire us to innovate, and CupidDB is my answer to an issue in data caching.</p> <br/> <p>I’m excited to see how CupidDB can be utilized and improved by fellow developers.
    I encourage anyone interested in enhancing their data processing workflows to check it out,
    provide feedback, and contribute to its development.
    Together, we can make CupidDB even better and more useful.</p> <br/> <p>I’m looking forward to sharing more updates and developments in the future!
    <br/><br/>
    Watt Iamsuri
    <br/>
    2024-10-31</p>`;return{c(){o=s("meta"),d=s("meta"),c=s("meta"),h=s("meta"),p=s("meta"),m=v(),r=s("div"),r.innerHTML=y,f=v(),i=s("div"),i.innerHTML=w,this.h()},l(e){const t=A("svelte-10a6cue",document.head);o=l(t,"META",{property:!0,content:!0}),d=l(t,"META",{property:!0,content:!0}),c=l(t,"META",{property:!0,content:!0}),h=l(t,"META",{property:!0,content:!0}),p=l(t,"META",{property:!0,content:!0}),t.forEach(n),m=D(e),r=l(e,"DIV",{"data-svelte-h":!0}),x(r)!=="svelte-lyrah7"&&(r.innerHTML=y),f=D(e),i=l(e,"DIV",{class:!0,"data-svelte-h":!0}),x(i)!=="svelte-173nbcb"&&(i.innerHTML=w),this.h()},h(){document.title="CupidDB | Introducing CupidDB",a(o,"property","og:title"),a(o,"content","Introducing... CupidDB!"),a(d,"property","og:description"),a(d,"content","CupidDB is an in-memory columnar database designed for efficient caching of DataFrames and optimized for high performance."),a(c,"property","og:image"),a(c,"content",C),a(h,"property","og:url"),a(h,"content","https://cupiddb.github.io/blog/introducing-cupiddb"),a(p,"property","og:type"),a(p,"content","article"),a(i,"class","container mx-auto my-6 px-2 md:px-32")},m(e,t){u(document.head,o),u(document.head,d),u(document.head,c),u(document.head,h),u(document.head,p),b(e,m,t),b(e,r,t),b(e,f,t),b(e,i,t)},p:g,i:g,o:g,d(e){e&&(n(m),n(r),n(f),n(i)),n(o),n(d),n(c),n(h),n(p)}}}class F extends B{constructor(o){super(),k(this,o,null,M,T,{})}}export{F as component,E as universal};
